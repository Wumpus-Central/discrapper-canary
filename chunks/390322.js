n.d(t, { Z: () => r });
var s = n(647438),
    o = n(618158);
function r(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: r } = (0, o.Y)("popup");
    return s.useEffect(() => (n(), () => r()), [r, n]), t;
}
