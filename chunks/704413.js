n.d(t, { A: () => d });
var s = n(582128),
    i = n(736653),
    a = n(885386),
    r = n(862780),
    l = n(21878),
    o = n(951727),
    c = n(708676);
function d(e, t) {
    let n = (0, l.M)(e),
        d = (0, r.d$)(n.getChannelId())[n.id],
        u = (0, c.A)(n.poll?.expiry),
        h = a.Sf.useSetting(),
        m = (0, i.Ay)(),
        x = t ?? m;
    return s.useMemo(
        () => (0, o.Ay)(n, d, { animateEmoji: h, theme: x, formattedExpirationLabel: u }),
        [h, n, d, u, x],
    );
}
