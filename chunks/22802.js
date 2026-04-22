i.d(e, { G: () => o, b: () => s });
var n = i(627968);
i(64700);
var l = i(503698),
    a = i.n(l),
    r = i(457751);
function s(t) {
    let { keybind: e, className: i } = t;
    return (0, n.jsx)(n.Fragment, {
        children: e.map((t, e) => (0, n.jsx)("span", { className: a()(r.Eb, r.UT, i), children: t }, e)),
    });
}
function o(t) {
    let { keybind: e, className: i } = t;
    return (0, n.jsx)(n.Fragment, {
        children: e.map((t, e) => (0, n.jsx)("div", { className: a()(r.Eb, r.RJ, i), children: t }, `${t}-${e}`)),
    });
}
