s.d(t, { Sd: () => m, Xd: () => v, Yx: () => p, oR: () => g, pK: () => x });
var r = s(477900),
    n = s(582128),
    a = s(503698),
    i = s.n(a),
    l = s(297264),
    c = s(834730);
(s(580630), s(375708));
var u = s(95068);
let o = n.createContext({ isPremiumRebrand: !1 });
function d() {
    return n.useContext(o).isPremiumRebrand;
}
function p(e) {
    let { children: t, className: s, isPremiumRebrand: n = !1 } = e;
    return (0, r.jsx)(o.Provider, {
        value: { isPremiumRebrand: n },
        children: (0, r.jsx)("div", { className: i()(u.tp, { [u.u0]: n }, s), children: t }),
    });
}
function v(e) {
    let { children: t } = e;
    return d()
        ? (0, r.jsx)(l.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: i()(u.wx, u.u0),
              children: t,
          })
        : (0, r.jsx)("div", { className: u.wx, children: t });
}
function g(e) {
    let { label: t, value: s, className: n } = e;
    return d()
        ? (0, r.jsxs)("div", {
              className: i()(u.nM, n),
              children: [
                  (0, r.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, r.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", className: u.Uu, children: s }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: i()(u.nM, n),
              children: [
                  (0, r.jsx)("div", { className: u.xZ, children: t }),
                  (0, r.jsx)("div", { className: u.X6, children: s }),
              ],
          });
}
function x(e) {
    let { extended: t = !1, negativeMarginTop: s = !1, negativeMarginBottom: n = !1, invisible: a = !1 } = e;
    return (0, r.jsx)("div", { className: i()(u.yF, { [u.hF]: t, [u.P_]: s, [u.vy]: n, [u.Bw]: a }) });
}
function m(e) {
    let { label: t, value: s, className: n } = e;
    return (0, r.jsxs)("div", {
        className: i()(u.V$, n),
        children: [
            (0, r.jsx)("div", { className: u.j5, children: t }),
            (0, r.jsx)("div", { className: u.HR, children: s }),
        ],
    });
}
