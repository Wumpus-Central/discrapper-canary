"use strict";
n.d(t, { G: () => l, b: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(700744);
function o(e) {
    let { keybind: t, className: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => (0, r.jsx)("span", { className: s()(a.Eb, a.UT, n), children: e }, t)),
    });
}
function l(e) {
    let { keybind: t, className: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => (0, r.jsx)("div", { className: s()(a.Eb, a.RJ, n), children: e }, `${e}-${t}`)),
    });
}
