"use strict";
n.d(t, { BC: () => E, oX: () => A, pX: () => _, xr: () => u });
var i = n(562708),
    r = n(636537),
    a = n(933681),
    s = n(228366),
    l = n(274184),
    o = n(174459),
    d = n(499785),
    c = n(652215);
function u(e) {
    s.h.dispatch({ type: "SURVEY_OVERRIDE", id: e });
}
function _(e, t) {
    s.h.dispatch({ type: "SURVEY_HIDE", key: e }),
        t
            ? o.default.track(c.HAw.APP_NOTICE_CLOSED, { notice_type: c.kqX.SURVEY, survey_id: e, dismissed: t })
            : o.default.track(c.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kqX.SURVEY });
}
function E(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        d.A.get({
            url: c.Rsh.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: i.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    let t = e?.body?.survey;
                    return (0, a.e0)({ key: t?.key });
                },
            },
            rejectWithError: (0, r.fT)(),
        }).then(
            (e) => (s.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey }), e?.body?.survey),
            () => {
                s.h.dispatch({ type: "SURVEY_FETCHED", survey: null });
            },
        )
    );
}
function A(e) {
    let t = l.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= l.bh))
        return (
            s.h.dispatch({ type: "SURVEY_SEEN", key: e }),
            d.A.post({
                url: c.Rsh.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, a.e0)({ key: e }),
                },
                rejectWithError: (0, r.fT)(),
            })
        );
}
