n.d(t, { M: () => s });
var i = n(192379),
    r = n(409447),
    a = n(330905);
let s = (e) => {
    let t;
    let n = (0, r.u)();
    if (!n.display) return null;
    let { display: s, ...o } = n;
    return (t = 'children' in e ? ('function' == typeof e.children ? e.children(o) : e.children) : e.generator(o)), i.createElement(a._.Provider, { value: o }, t);
};
