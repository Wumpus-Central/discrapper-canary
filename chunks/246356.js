n.d(e, { A: () => l });
var s = n(64700),
    i = n(447404);
function l(t) {
    let { children: e } = t,
        { preventIdle: n, allowIdle: l } = (0, i.o)("popup");
    return s.useEffect(() => (n(), () => l()), [l, n]), e;
}
