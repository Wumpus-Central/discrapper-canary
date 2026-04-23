"use strict";
n.d(t, { Sd: () => g, X0: () => A, Xd: () => p, Yx: () => f, f0: () => E, oR: () => h, pK: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(534514),
    l = n(834730),
    u = n(580630),
    c = n(985018),
    d = n(690073);
let _ = i.createContext({ isPremiumRebrand: !1 });
function f(e) {
    let { children: t, className: n, isPremiumRebrand: i = !1 } = e;
    return (0, r.jsx)(_.Provider, {
        value: { isPremiumRebrand: i },
        children: (0, r.jsx)("div", { className: a()(d.tp, { [d.u0]: i }, n), children: t }),
    });
}
function p(e) {
    let { children: t } = e;
    return i.useContext(_).isPremiumRebrand
        ? (0, r.jsx)(o.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: a()(d.wx, d.u0),
              children: t,
          })
        : (0, r.jsx)("div", { className: d.wx, children: t });
}
function h(e) {
    let { label: t, value: n, className: s } = e;
    return i.useContext(_).isPremiumRebrand
        ? (0, r.jsxs)("div", {
              className: a()(d.nM, s),
              children: [
                  (0, r.jsx)(l.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, r.jsx)(l.E, { variant: "text-sm/medium", color: "currentColor", className: d.Uu, children: n }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: a()(d.nM, s),
              children: [
                  (0, r.jsx)("div", { className: d.xZ, children: t }),
                  (0, r.jsx)("div", { className: d.X6, children: n }),
              ],
          });
}
function E(e) {
    let {
            label: t,
            value: n,
            subscriptionDiscount: i,
            entitlementDiscount: s,
            originalAmount: a,
            interval: o,
            currency: _,
            className: f,
            intervalCount: p,
            inTrialPeriod: E,
        } = e,
        m = null != i ? Math.floor((i.amount / a) * 100) : null,
        g = (0, u.$g)(a, _);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h, {
                label: t,
                value: (0, r.jsxs)(r.Fragment, {
                    children: [
                        E ? c.intl.formatToPlainString(c.t.hXcaLT, { price: (0, u.$g)(0, _) }) : n,
                        null != m ? (0, r.jsxs)("div", { className: d.ns, children: ["-", m, "%"] }) : null,
                    ],
                }),
                className: f,
            }),
            E &&
                (0, r.jsx)(l.E, {
                    variant: "text-md/medium",
                    className: d.lk,
                    children: c.intl.format(c.t.v9QeON, { price: g }),
                }),
            null != m
                ? (0, r.jsxs)("div", {
                      className: d.gX,
                      children: ["(", null != o && null != p ? (0, u.CE)(g, o, p) : g, ")"],
                  })
                : null,
            null != s ? (0, r.jsx)("div", { className: d.Ht, children: c.intl.string(c.t.A7Hpfs) }) : null,
        ],
    });
}
function m(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1, invisible: s = !1 } = e;
    return (0, r.jsx)("div", { className: a()(d.yF, { [d.hF]: t, [d.P_]: n, [d.vy]: i, [d.Bw]: s }) });
}
function g(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)("div", {
        className: a()(d.V$, i),
        children: [
            (0, r.jsx)("div", { className: d.j5, children: t }),
            (0, r.jsx)("div", { className: d.HR, children: n }),
        ],
    });
}
function A(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: a()(d.aO, n), children: t });
}
