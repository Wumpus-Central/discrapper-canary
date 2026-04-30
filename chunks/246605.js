n.d(t, { BC: () => E, oX: () => u, pX: () => _, xr: () => c });
var i = n(110259),
    a = n(933681),
    r = n(228366),
    s = n(274184),
    l = n(954571),
    o = n(499785),
    d = n(652215);
function c(e) {
    r.h.dispatch({ type: "SURVEY_OVERRIDE", id: e });
}
function _(e, t) {
    r.h.dispatch({ type: "SURVEY_HIDE", key: e }),
        t
            ? l.default.track(d.HAw.APP_NOTICE_CLOSED, { notice_type: d.kqX.SURVEY, survey_id: e, dismissed: t })
            : l.default.track(d.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: d.kqX.SURVEY });
}
function E(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        o.A.get({
            url: d.Rsh.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: i.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    let t = e?.body?.survey;
                    return (0, a.e0)({ key: t?.key });
                },
            },
            rejectWithError: !1,
        }).then(
            (e) => (r.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey }), e?.body?.survey),
            () => {
                r.h.dispatch({ type: "SURVEY_FETCHED", survey: null });
            },
        )
    );
}
function u(e) {
    let t = s.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= s.bh))
        return (
            r.h.dispatch({ type: "SURVEY_SEEN", key: e }),
            o.A.post({
                url: d.Rsh.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, a.e0)({ key: e }),
                },
                rejectWithError: !1,
            })
        );
}
