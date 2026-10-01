n.d(t, { oX: () => A, pX: () => u, xr: () => _ });
var i = n(562708),
    l = n(636537),
    r = n(933681),
    s = n(73153),
    a = n(274184),
    E = n(174459),
    o = n(499785),
    c = n(652215);
function _(e, t) {
    s.h.dispatch({ type: "SURVEY_OVERRIDE", id: e, isActionTriggered: t });
}
function u(e, t) {
    (s.h.dispatch({ type: "SURVEY_HIDE", key: e }),
        t
            ? E.default.track(c.HAw.APP_NOTICE_CLOSED, { notice_type: c.kqX.SURVEY, survey_id: e, dismissed: t })
            : E.default.track(c.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kqX.SURVEY }));
}
function A(e) {
    let t = a.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= a.bh))
        return (
            s.h.dispatch({ type: "SURVEY_SEEN", key: e }),
            o.A.post({
                url: c.Rsh.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, r.e0)({ key: e }),
                },
                rejectWithError: (0, l.fT)(),
            })
        );
}
