n.d(t, { N: () => c }), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(731738),
    a = n(831062),
    s = n(476592),
    o = n(665909);
function c(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: c,
        warningType: u,
        header: d,
        description: f,
        onDismiss: p,
        buttons: h,
    } = e;
    l.useEffect(() => {
        a.A.increment({ name: i.K.SAFETY_WARNING_VIEW });
    }, []);
    let b = l.useCallback(() => {
        null == p || p(),
            (0, o._$)({
                channelId: t,
                warningId: n,
                senderId: c,
                warningType: u,
                cta: o.Wm.USER_BANNER_DISMISS,
            });
    }, [p, t, n, c, u]);
    return (0, r.jsx)(s.Z, {
        buttons: h,
        description: f,
        header: d,
        onDismiss: b,
    });
}
