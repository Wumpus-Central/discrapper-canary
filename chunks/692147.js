n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    o = n(192379),
    a = n(392711),
    l = n(399606),
    s = n(351780),
    r = n(576125),
    c = n(465858),
    d = n(112843),
    u = n(524484);
function h(e) {
    let { reactionRef: t, count: n } = e,
        i = o.useRef(n),
        r = (0, l.e7)([s.Z], () => s.Z.getState()),
        u = (0, d.Z)(),
        h = (0, c.Z)(t);
    return (
        o.useEffect(() => {
            if (n > i.current && null != h) {
                let e = (0, a.clamp)(n, r.confettiCount / 2, 2 * r.confettiCount);
                u.fire(h.x, h.y, { count: e });
            }
            i.current = n;
        }, [n, h, u, r.confettiCount]),
        null
    );
}
function m(e) {
    return (0, i.jsx)(r.Z, {
        confettiLocation: u.Hn.REACTION,
        children: (0, i.jsx)(h, { ...e })
    });
}
