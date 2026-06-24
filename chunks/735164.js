"use strict";
n.d(t, { Sd: () => E, Xd: () => h, Yx: () => _, oR: () => f, pK: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(534514),
    l = n(834730);
n(580630), n(375708);
var u = n(690073);
let c = r.createContext({ isPremiumRebrand: !1 });
function d() {
    return r.useContext(c).isPremiumRebrand;
}
function _(e) {
    let { children: t, className: n, isPremiumRebrand: r = !1 } = e;
    return (0, i.jsx)(c.Provider, {
        value: { isPremiumRebrand: r },
        children: (0, i.jsx)("div", { className: a()(u.tp, { [u.u0]: r }, n), children: t }),
    });
}
function h(e) {
    let { children: t } = e;
    return d()
        ? (0, i.jsx)(o.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: a()(u.wx, u.u0),
              children: t,
          })
        : (0, i.jsx)("div", { className: u.wx, children: t });
}
function f(e) {
    let { label: t, value: n, className: r } = e;
    return d()
        ? (0, i.jsxs)("div", {
              className: a()(u.nM, r),
              children: [
                  (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "currentColor", className: u.Uu, children: n }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: a()(u.nM, r),
              children: [
                  (0, i.jsx)("div", { className: u.xZ, children: t }),
                  (0, i.jsx)("div", { className: u.X6, children: n }),
              ],
          });
}
function p(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: r = !1, invisible: s = !1 } = e;
    return (0, i.jsx)("div", { className: a()(u.yF, { [u.hF]: t, [u.P_]: n, [u.vy]: r, [u.Bw]: s }) });
}
function E(e) {
    let { label: t, value: n, className: r } = e;
    return (0, i.jsxs)("div", {
        className: a()(u.V$, r),
        children: [
            (0, i.jsx)("div", { className: u.j5, children: t }),
            (0, i.jsx)("div", { className: u.HR, children: n }),
        ],
    });
}
