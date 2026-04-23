n.d(t, { N: () => c });
var i = n(627968),
    l = n(64700),
    a = n(731738),
    s = n(831062),
    r = n(476592),
    o = n(665909);
function c(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: c,
        warningType: d,
        header: u,
        description: h,
        onDismiss: m,
        buttons: A,
    } = e;
    l.useEffect(() => {
        s.A.increment({ name: a.K.SAFETY_WARNING_VIEW });
    }, []);
    let g = l.useCallback(() => {
        m?.(), (0, o._$)({ channelId: t, warningId: n, senderId: c, warningType: d, cta: o.Wm.USER_BANNER_DISMISS });
    }, [m, t, n, c, d]);
    return (0, i.jsx)(r.Z, { buttons: A, description: h, header: u, onDismiss: g });
}
