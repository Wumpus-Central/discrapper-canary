t.d(n, { EY: () => u, Sv: () => s, fz: () => i });
var l = t(477900);
t(582128);
var r = t(78377),
    a = t(954403);
function u(e) {
    let { node: n } = e;
    return (0, l.jsx)(a.z, { text: n.value });
}
function i(e) {
    let { siblings: n, index: t, children: a } = e,
        u = (0, r.p)()?.formatInline === !0,
        i = t === n.length - 1;
    return u
        ? (0, l.jsxs)(l.Fragment, { children: [a, i ? null : " "] })
        : (0, l.jsxs)("span", { children: [a, i ? null : (0, l.jsx)("br", {})] });
}
function s() {
    return (0, r.p)()?.formatInline === !0 ? " " : "\n";
}
