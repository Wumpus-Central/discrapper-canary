t.d(s, { A: () => e });
var u = t(64700),
    c = t(447404);
function e(p) {
    let { children: s } = p,
        { preventIdle: t, allowIdle: e } = (0, c.o)("popup");
    return u.useEffect(() => (t(), () => e()), [e, t]), s;
}
