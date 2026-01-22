n.d(t, {
    A: () => u,
});
var r = n(64700),
    i = n(736653),
    a = n(253932),
    s = n(862780),
    o = n(21878),
    l = n(951727),
    c = n(708676);

function u(e, t) {
    var n;
    let u = (0, o.M)(e),
        d = (0, s.d$)(u.getChannelId())[u.id],
        f = (0, c.A)(null == (n = u.poll) ? void 0 : n.expiry),
        p = a.Sf.useSetting(),
        _ = (0, i.Ay)(),
        h = null != t ? t : _;
    return r.useMemo(
        () =>
            (0, l.Ay)(u, d, {
                animateEmoji: p,
                theme: h,
                formattedExpirationLabel: f,
            }),
        [p, u, d, f, h],
    );
}
