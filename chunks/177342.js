(n.d(t, { Q: () => c }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(286379),
    a = n(797614),
    o = n(596739),
    s = n(473092);
function c(e) {
    let { channelId: t, warningId: n, senderId: c, warningType: u, header: d, description: p, onDismiss: h, buttons: f } = e;
    i.useEffect(() => {
        a.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, []);
    let m = i.useCallback(() => {
        (null == h || h(),
            (0, s.qc)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: u,
                cta: s.NM.USER_BANNER_DISMISS
            }));
    }, [h, t, n, c, u]);
    return (0, r.jsx)(o.W, {
        buttons: f,
        description: p,
        header: d,
        onDismiss: m
    });
}
