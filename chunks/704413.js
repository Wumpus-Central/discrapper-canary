n.d(t, { A: () => d });
var i = n(64700),
    l = n(736653),
    a = n(253932),
    r = n(862780),
    s = n(21878),
    o = n(951727),
    c = n(708676);
function d(e, t) {
    let n = (0, s.M)(e),
        d = (0, r.d$)(n.getChannelId())[n.id],
        u = (0, c.A)(n.poll?.expiry),
        _ = a.Sf.useSetting(),
        m = (0, l.Ay)(),
        h = t ?? m;
    return i.useMemo(
        () => (0, o.Ay)(n, d, { animateEmoji: _, theme: h, formattedExpirationLabel: u }),
        [_, n, d, u, h],
    );
}
