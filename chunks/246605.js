"use strict";
n.d(t, { BC: () => _, oX: () => f, pX: () => d, xr: () => c });
var r = n(110259),
    i = n(933681),
    a = n(73153),
    s = n(274184),
    o = n(954571),
    l = n(499785),
    u = n(652215);
function c(e) {
    a.h.dispatch({ type: "SURVEY_OVERRIDE", id: e });
}
function d(e, t) {
    a.h.dispatch({ type: "SURVEY_HIDE", key: e }),
        t
            ? o.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: u.kqX.SURVEY, survey_id: e, dismissed: t })
            : o.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: u.kqX.SURVEY });
}
function _(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        l.A.get({
            url: u.Rsh.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: r.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    let t = e?.body?.survey;
                    return (0, i.e0)({ key: t?.key });
                },
            },
            rejectWithError: !1,
        }).then(
            (e) => (a.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey }), e?.body?.survey),
            () => {
                a.h.dispatch({ type: "SURVEY_FETCHED", survey: null });
            },
        )
    );
}
function f(e) {
    let t = s.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= s.bh))
        return (
            a.h.dispatch({ type: "SURVEY_SEEN", key: e }),
            l.A.post({
                url: u.Rsh.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: r.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, i.e0)({ key: e }),
                },
                rejectWithError: !1,
            })
        );
}
