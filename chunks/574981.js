n.d(t, { c: () => l });
var r = n(216757),
    i = n(731981),
    o = n(910679),
    a = n(760661),
    u = n(986713),
    c = n(321571),
    s = n(573654);
function l(e, t) {
    var n = (0, i.w)(e, t);
    (0, s.k)(
        !n.begin,
        "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
    );
    var l = (0, o._)(),
        f = (0, a.Y)(n.options, n.previewOptions);
    return (0, r.q)(n, l, f), [(0, u.J)(n.collect, l, f), (0, c.u)(f), (0, c.y)(f)];
}
