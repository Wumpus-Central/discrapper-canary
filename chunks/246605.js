"use strict";
n.d(t, { BC: () => _, oX: () => f, pX: () => d, xr: () => c });
var i = n(562708),
    r = n(933681),
    s = n(228366),
    a = n(274184),
    o = n(174459),
    l = n(499785),
    u = n(652215);
function c(e) {
    s.h.dispatch({ type: "SURVEY_OVERRIDE", id: e });
}
function d(e, t) {
    s.h.dispatch({ type: "SURVEY_HIDE", key: e }),
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
                event: i.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    let t = e?.body?.survey;
                    return (0, r.e0)({ key: t?.key });
                },
            },
            rejectWithError: !1,
        }).then(
            (e) => (s.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey }), e?.body?.survey),
            () => {
                s.h.dispatch({ type: "SURVEY_FETCHED", survey: null });
            },
        )
    );
}
function f(e) {
    let t = a.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= a.bh))
        return (
            s.h.dispatch({ type: "SURVEY_SEEN", key: e }),
            l.A.post({
                url: u.Rsh.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, r.e0)({ key: e }),
                },
                rejectWithError: !1,
            })
        );
}
