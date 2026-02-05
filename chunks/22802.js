n.d(t, { G: () => o, b: () => r });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(700744);
function r(e) {
    let { keybind: t, className: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) => (0, i.jsx)("span", { className: s()(a.Eb, a.UT, n), children: e }, t)),
    });
}
function o(e) {
    let { keybind: t, className: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) => (0, i.jsx)("div", { className: s()(a.Eb, a.RJ, n), children: e }, `${e}-${t}`)),
    });
}
