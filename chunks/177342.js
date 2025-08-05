(n.d(t, { Q: () => c }), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(286379),
    o = n(797614),
    s = n(596739),
    l = n(473092);
function c(e) {
    let { channelId: t, warningId: n, senderId: c, warningType: u, header: d, description: f, onDismiss: _, buttons: p } = e;
    i.useEffect(() => {
        o.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, []);
    let h = i.useCallback(() => {
        (null == _ || _(),
            (0, l.qc)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: u,
                cta: l.NM.USER_BANNER_DISMISS
            }));
    }, [_, t, n, c, u]);
    return (0, r.jsx)(s.W, {
        buttons: p,
        description: f,
        header: d,
        onDismiss: h
    });
}
