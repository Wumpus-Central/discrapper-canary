n.d(t, { Q: () => c });
var i = n(200651),
    l = n(192379),
    a = n(286379),
    r = n(797614),
    s = n(596739),
    o = n(473092);
function c(e) {
    let { channelId: t, warningId: n, senderId: c, warningType: d, header: u, description: h, onDismiss: p, buttons: m } = e;
    l.useEffect(() => {
        r.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, []);
    let f = l.useCallback(() => {
        null == p || p(),
            (0, o.qc)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: d,
                cta: o.NM.USER_BANNER_DISMISS
            });
    }, [p, t, n, c, d]);
    return (0, i.jsx)(s.W, {
        buttons: m,
        description: h,
        header: u,
        onDismiss: f
    });
}
