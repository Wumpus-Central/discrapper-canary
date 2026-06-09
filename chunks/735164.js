n.d(t, { Sd: () => g, Xd: () => m, Yx: () => d, oR: () => f, pK: () => p });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(534514),
    u = n(834730);
n(580630), n(375708);
var o = n(690073);
let c = l.createContext({ isPremiumRebrand: !1 });
function d(e) {
    let { children: t, className: n, isPremiumRebrand: l = !1 } = e;
    return (0, a.jsx)(c.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, a.jsx)("div", { className: i()(o.tp, { [o.u0]: l }, n), children: t }),
    });
}
function m(e) {
    let { children: t } = e;
    return l.useContext(c).isPremiumRebrand
        ? (0, a.jsx)(s.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: i()(o.wx, o.u0),
              children: t,
          })
        : (0, a.jsx)("div", { className: o.wx, children: t });
}
function f(e) {
    let { label: t, value: n, className: r } = e;
    return l.useContext(c).isPremiumRebrand
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
function p(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: l = !1, invisible: r = !1 } = e;
    return (0, a.jsx)("div", { className: i()(o.yF, { [o.hF]: t, [o.P_]: n, [o.vy]: l, [o.Bw]: r }) });
}
function g(e) {
    let { label: t, value: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: i()(o.V$, l),
        children: [
            (0, a.jsx)("div", { className: o.j5, children: t }),
            (0, a.jsx)("div", { className: o.HR, children: n }),
        ],
    });
}
