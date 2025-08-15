n.d(t, { M: () => o });
var r = n(647438),
    i = n(247917),
    a = n(926390);
let o = (e) => {
    let t,
        n = (0, i.u)();
    if (!n.display) return null;
    let { display: o, ...s } = n;
    return (
        (t = "children" in e ? ("function" == typeof e.children ? e.children(s) : e.children) : e.generator(s)),
        r.createElement(a._.Provider, { value: s }, t)
    );
};
