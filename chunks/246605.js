n.d(t, { BC: () => c, oX: () => u, pX: () => d, xr: () => E });
var i = n(110259),
    r = n(933681),
    a = n(228366),
    s = n(274184),
    _ = n(954571),
    l = n(499785),
    o = n(652215);
function E(e) {
    a.h.dispatch({ type: "SURVEY_OVERRIDE", id: e });
}
function d(e, t) {
    a.h.dispatch({ type: "SURVEY_HIDE", key: e }),
        t
            ? _.default.track(o.HAw.APP_NOTICE_CLOSED, { notice_type: o.kqX.SURVEY, survey_id: e, dismissed: t })
            : _.default.track(o.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: o.kqX.SURVEY });
}
function c(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        l.A.get({
            url: o.Rsh.USER_SURVEY,
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
            (e) => (a.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey }), e?.body?.survey),
            () => {
                a.h.dispatch({ type: "SURVEY_FETCHED", survey: null });
            },
        )
    );
}
function u(e) {
    let t = s.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= s.bh))
        return (
            a.h.dispatch({ type: "SURVEY_SEEN", key: e }),
            l.A.post({
                url: o.Rsh.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, r.e0)({ key: e }),
                },
                rejectWithError: !1,
            })
        );
}
