i.d(t, { A: () => m });
var n = i(627968),
    l = i(64700),
    a = i(735438),
    r = i(417597),
    o = i(3137),
    s = i(620141),
    u = i(966598),
    d = i(224964),
    c = i(31408);
function h(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        s = (0, r.bG)([o.A], () => o.A.getState()),
        c = (0, d.A)(),
        h = (0, u.A)(t);
    return (
        l.useEffect(() => {
            if (i > n.current && null != h) {
                let e = (0, a.clamp)(i, s.confettiCount / 2, 2 * s.confettiCount);
                c.fire(h.x, h.y, { count: e });
            }
            n.current = i;
        }, [i, h, c, s.confettiCount]),
        null
    );
}
function m(e) {
    return (0, n.jsx)(s.A, { confettiLocation: c.k.REACTION, children: (0, n.jsx)(h, { ...e }) });
}
