n.d(t, { Z: () => a });
var r = n(473749),
    i = n(618158);
function a(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: a } = (0, i.Y)("popup");
    return r.useEffect(() => (n(), () => a()), [a, n]), t;
}
