n.d(t, { M: () => a });
var r = n(192379),
    i = n(409447),
    o = n(330905);
let a = (e) => {
    let t,
        n = (0, i.u)();
    if (!n.display) return null;
    let { display: a, ...s } = n;
    return (t = 'children' in e ? ('function' == typeof e.children ? e.children(s) : e.children) : e.generator(s)), r.createElement(o._.Provider, { value: s }, t);
};
