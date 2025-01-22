r.d(n, {
    M: function () {
        return s;
    }
});
var i = r(192379),
    a = r(409447),
    o = r(330905);
let s = (e) => {
    let n;
    let r = (0, a.u)();
    if (!r.display) return null;
    let { display: s, ...l } = r;
    return (n = 'children' in e ? ('function' == typeof e.children ? e.children(l) : e.children) : e.generator(l)), i.createElement(o._.Provider, { value: l }, n);
};
