n.d(t, { Sd: () => A, Xd: () => f, Yx: () => m, oR: () => p, pK: () => b });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(534514),
    u = n(834730);
n(580630), n(375708);
var o = n(690073);
let c = r.createContext({ isPremiumRebrand: !1 });
function d() {
    return r.useContext(c).isPremiumRebrand;
}
function m(e) {
    let { children: t, className: n, isPremiumRebrand: r = !1 } = e;
    return (0, a.jsx)(c.Provider, {
        value: { isPremiumRebrand: r },
        children: (0, a.jsx)("div", { className: i()(o.tp, { [o.u0]: r }, n), children: t }),
    });
}
function f(e) {
    let { children: t } = e;
    return d()
        ? (0, a.jsx)(s.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: i()(o.wx, o.u0),
              children: t,
          })
        : (0, a.jsx)("div", { className: o.wx, children: t });
}
function p(e) {
    let { label: t, value: n, className: r } = e;
    return d()
        ? (0, a.jsxs)("div", {
              className: i()(o.nM, r),
              children: [
                  (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "currentColor", className: o.Uu, children: n }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: i()(o.nM, r),
              children: [
                  (0, a.jsx)("div", { className: o.xZ, children: t }),
                  (0, a.jsx)("div", { className: o.X6, children: n }),
              ],
          });
}
function b(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: r = !1, invisible: l = !1 } = e;
    return (0, a.jsx)("div", { className: i()(o.yF, { [o.hF]: t, [o.P_]: n, [o.vy]: r, [o.Bw]: l }) });
}
function A(e) {
    let { label: t, value: n, className: r } = e;
    return (0, a.jsxs)("div", {
        className: i()(o.V$, r),
        children: [
            (0, a.jsx)("div", { className: o.j5, children: t }),
            (0, a.jsx)("div", { className: o.HR, children: n }),
        ],
    });
}
