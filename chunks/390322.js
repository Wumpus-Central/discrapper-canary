n.d(t, { Z: () => s });
var r = n(647438),
    o = n(618158);
function s(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: s } = (0, o.Y)("popup");
    return r.useEffect(() => (n(), () => s()), [s, n]), t;
}
