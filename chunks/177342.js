n.d(t, { Q: () => c }), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(286379),
    o = n(797614),
    a = n(596739),
    s = n(473092);
function c(e) {
    let { channelId: t, warningId: n, senderId: c, warningType: u, header: d, description: p, onDismiss: h, buttons: f } = e;
    i.useEffect(() => {
        o.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, []);
    let m = i.useCallback(() => {
        null == h || h(),
            (0, s.qc)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: u,
                cta: s.NM.USER_BANNER_DISMISS
            });
    }, [h, t, n, c, u]);
    return (0, r.jsx)(a.W, {
        buttons: f,
        description: p,
        header: d,
        onDismiss: m
    });
}
