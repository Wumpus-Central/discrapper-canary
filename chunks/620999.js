"use strict";
n.d(t, { r: () => o, t: () => c });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(900719);
function c() {
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, a.jsx)("div", { className: r()(s.Vl, s.Yf), style: { animationDelay: `${e}s` } });
}
function o() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, a.jsx)("div", { className: s.RC, style: { width: `${e}%` } });
}
