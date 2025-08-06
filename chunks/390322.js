n.d(t, { Z: () => o });
var r = n(73800),
    i = n(618158);
function o(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: o } = (0, i.Y)("popup");
    return r.useEffect(() => (n(), () => o()), [o, n]), t;
}
