n.d(t, { A: () => c });
var i = n(64700),
    l = n(736653),
    s = n(885386),
    r = n(862780),
    a = n(21878),
    o = n(555034),
    d = n(708676);
function c(e, t) {
    let n = (0, a.M)(e),
        c = (0, r.d$)(n.getChannelId())[n.id],
        u = (0, d.A)(n.poll?.expiry),
        m = s.Sf.useSetting(),
        h = (0, l.Ay)(),
        g = t ?? h;
    return i.useMemo(
        () => (0, o.Ay)(n, c, { animateEmoji: m, theme: g, formattedExpirationLabel: u }),
        [m, n, c, u, g],
    );
}
