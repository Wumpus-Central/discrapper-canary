n.d(t, { Sd: () => v, Xd: () => p, Yx: () => m, oR: () => f, pK: () => x });
var s = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    l = n(297264),
    u = n(834730);
n(580630), n(375708);
var c = n(95068);
let o = r.createContext({ isPremiumRebrand: !1 });
function d() {
    return r.useContext(o).isPremiumRebrand;
}
function m(e) {
    let { children: t, className: n, isPremiumRebrand: r = !1 } = e;
    return (0, s.jsx)(o.Provider, {
        value: { isPremiumRebrand: r },
        children: (0, s.jsx)("div", { className: a()(c.tp, { [c.u0]: r }, n), children: t }),
    });
}
function p(e) {
    let { children: t } = e;
    return d()
        ? (0, s.jsx)(l.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: a()(c.wx, c.u0),
              children: t,
          })
        : (0, s.jsx)("div", { className: c.wx, children: t });
}
function f(e) {
    let { label: t, value: n, className: r } = e;
    return d()
        ? (0, s.jsxs)("div", {
              className: a()(c.nM, r),
              children: [
                  (0, s.jsx)(u.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, s.jsx)(u.E, { variant: "text-sm/medium", color: "currentColor", className: c.Uu, children: n }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: a()(c.nM, r),
              children: [
                  (0, s.jsx)("div", { className: c.xZ, children: t }),
                  (0, s.jsx)("div", { className: c.X6, children: n }),
              ],
          });
}
function x(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: r = !1, invisible: i = !1 } = e;
    return (0, s.jsx)("div", { className: a()(c.yF, { [c.hF]: t, [c.P_]: n, [c.vy]: r, [c.Bw]: i }) });
}
function v(e) {
    let { label: t, value: n, className: r } = e;
    return (0, s.jsxs)("div", {
        className: a()(c.V$, r),
        children: [
            (0, s.jsx)("div", { className: c.j5, children: t }),
            (0, s.jsx)("div", { className: c.HR, children: n }),
        ],
    });
}
