i.d(t, { Z: () => m });
var n = i(200651),
    a = i(192379),
    o = i(392711),
    s = i(399606),
    l = i(351780),
    r = i(576125),
    c = i(465858),
    d = i(112843),
    u = i(524484);
function h(e) {
    let { reactionRef: t, count: i } = e,
        n = a.useRef(i),
        r = (0, s.e7)([l.Z], () => l.Z.getState()),
        u = (0, d.Z)(),
        h = (0, c.Z)(t);
    return (
        a.useEffect(() => {
            if (i > n.current && null != h) {
                let e = (0, o.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
                u.fire(h.x, h.y, { count: e });
            }
            n.current = i;
        }, [i, h, u, r.confettiCount]),
        null
    );
}
function m(e) {
    return (0, n.jsx)(r.Z, {
        confettiLocation: u.Hn.REACTION,
        children: (0, n.jsx)(h, { ...e })
    });
}
