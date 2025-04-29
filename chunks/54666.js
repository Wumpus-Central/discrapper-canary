n.d(t, { M: () => a });
var r = n(73800),
    i = n(626442),
    o = n(80349);
let a = (e) => {
    let t,
        n = (0, i.u)();
    if (!n.display) return null;
    let { display: a, ...s } = n;
    return (t = 'children' in e ? ('function' == typeof e.children ? e.children(s) : e.children) : e.generator(s)), r.createElement(o._.Provider, { value: s }, t);
};
