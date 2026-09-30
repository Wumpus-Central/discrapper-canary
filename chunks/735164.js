s.d(t, { Sd: () => E, Xd: () => v, Yx: () => p, oR: () => I, pK: () => m });
var n = s(477900),
    r = s(582128),
    a = s(503698),
    l = s.n(a),
    i = s(297264),
    c = s(834730);
(s(580630), s(375708));
var u = s(95068);
let o = r.createContext({ isPremiumRebrand: !1 });
function d() {
    return r.useContext(o).isPremiumRebrand;
}
function p(e) {
    let { children: t, className: s, isPremiumRebrand: r = !1 } = e;
    return (0, n.jsx)(o.Provider, {
        value: { isPremiumRebrand: r },
        children: (0, n.jsx)("div", { className: l()(u.tp, { [u.u0]: r }, s), children: t }),
    });
}
function v(e) {
    let { children: t } = e;
    return d()
        ? (0, n.jsx)(i.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: l()(u.wx, u.u0),
              children: t,
          })
        : (0, n.jsx)("div", { className: u.wx, children: t });
}
function I(e) {
    let { label: t, value: s, className: r } = e;
    return d()
        ? (0, n.jsxs)("div", {
              className: l()(u.nM, r),
              children: [
                  (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", className: u.Uu, children: s }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: l()(u.nM, r),
              children: [
                  (0, n.jsx)("div", { className: u.xZ, children: t }),
                  (0, n.jsx)("div", { className: u.X6, children: s }),
              ],
          });
}
function m(e) {
    let { extended: t = !1, negativeMarginTop: s = !1, negativeMarginBottom: r = !1, invisible: a = !1 } = e;
    return (0, n.jsx)("div", { className: l()(u.yF, { [u.hF]: t, [u.P_]: s, [u.vy]: r, [u.Bw]: a }) });
}
function E(e) {
    let { label: t, value: s, className: r } = e;
    return (0, n.jsxs)("div", {
        className: l()(u.V$, r),
        children: [
            (0, n.jsx)("div", { className: u.j5, children: t }),
            (0, n.jsx)("div", { className: u.HR, children: s }),
        ],
    });
}
