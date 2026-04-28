r.d(t, { r: () => o, t: () => s });
var n = r(627968),
    u = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(900719);
function s() {
    let [e] = u.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: a()(i.Vl, i.Yf), style: { animationDelay: `${e}s` } });
}
function o() {
    let [e] = u.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: i.RC, style: { width: `${e}%` } });
}
