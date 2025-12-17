n.d(t, { Q: () => c }), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(286379),
    a = n(797614),
    o = n(596739),
    s = n(473092);
function c(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: c,
        warningType: u,
        header: d,
        description: p,
        onDismiss: f,
        buttons: h,
    } = e;
    r.useEffect(() => {
        a.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, []);
    let m = r.useCallback(() => {
        null == f || f(),
            (0, s.qc)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: u,
                cta: s.NM.USER_BANNER_DISMISS,
            });
    }, [f, t, n, c, u]);
    return (0, i.jsx)(o.W, {
        buttons: h,
        description: p,
        header: d,
        onDismiss: m,
    });
}
