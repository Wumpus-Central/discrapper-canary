t.d(s, { Sd: () => L, Xd: () => p, Yx: () => m, oR: () => x, pK: () => C });
var n = t(477900),
    r = t(582128),
    a = t(503698),
    i = t.n(a),
    l = t(297264),
    c = t(834730);
t(580630), t(375708);
var u = t(95068);
let o = r.createContext({ isPremiumRebrand: !1 });
function d() {
    return r.useContext(o).isPremiumRebrand;
}
function m(e) {
    let { children: s, className: t, isPremiumRebrand: r = !1 } = e;
    return (0, n.jsx)(o.Provider, {
        value: { isPremiumRebrand: r },
        children: (0, n.jsx)("div", { className: i()(u.tp, { [u.u0]: r }, t), children: s }),
    });
}
function p(e) {
    let { children: s } = e;
    return d()
        ? (0, n.jsx)(l.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: i()(u.wx, u.u0),
              children: s,
          })
        : (0, n.jsx)("div", { className: u.wx, children: s });
}
function x(e) {
    let { label: s, value: t, className: r } = e;
    return d()
        ? (0, n.jsxs)("div", {
              className: i()(u.nM, r),
              children: [
                  (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", children: s }),
                  (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", className: u.Uu, children: t }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: i()(u.nM, r),
              children: [
                  (0, n.jsx)("div", { className: u.xZ, children: s }),
                  (0, n.jsx)("div", { className: u.X6, children: t }),
              ],
          });
}
function C(e) {
    let { extended: s = !1, negativeMarginTop: t = !1, negativeMarginBottom: r = !1, invisible: a = !1 } = e;
    return (0, n.jsx)("div", { className: i()(u.yF, { [u.hF]: s, [u.P_]: t, [u.vy]: r, [u.Bw]: a }) });
}
function L(e) {
    let { label: s, value: t, className: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(u.V$, r),
        children: [
            (0, n.jsx)("div", { className: u.j5, children: s }),
            (0, n.jsx)("div", { className: u.HR, children: t }),
        ],
    });
}
