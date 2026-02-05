"use strict";
n.d(t, { Sd: () => E, X0: () => A, Xd: () => p, Yx: () => f, f0: () => m, oR: () => h, pK: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(580630),
    u = n(985018),
    c = n(600834);
let d = i.createContext({ isPremiumRebrand: !1 }),
    _ = () => i.useContext(d).isPremiumRebrand;
function f(e) {
    let { children: t, className: n, isPremiumRebrand: i = !1 } = e;
    return (0, r.jsx)(d.Provider, {
        value: { isPremiumRebrand: i },
        children: (0, r.jsx)("div", { className: s()(c.tp, { [c.u0]: i }, n), children: t }),
    });
}
function p(e) {
    let { children: t } = e;
    return _()
        ? (0, r.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: s()(c.wx, c.u0),
              children: t,
          })
        : (0, r.jsx)("div", { className: c.wx, children: t });
}
function h(e) {
    let { label: t, value: n, className: i } = e;
    return _()
        ? (0, r.jsxs)("div", {
              className: s()(c.nM, i),
              children: [
                  (0, r.jsx)(o.Text, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: c.Uu,
                      children: n,
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s()(c.nM, i),
              children: [
                  (0, r.jsx)("div", { className: c.xZ, children: t }),
                  (0, r.jsx)("div", { className: c.X6, children: n }),
              ],
          });
}
function m(e) {
    let {
            label: t,
            value: n,
            subscriptionDiscount: i,
            entitlementDiscount: a,
            originalAmount: s,
            interval: d,
            currency: _,
            className: f,
            intervalCount: p,
            inTrialPeriod: m,
        } = e,
        g = null != i ? Math.floor((i.amount / s) * 100) : null,
        E = (0, l.$g)(s, _);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h, {
                label: t,
                value: (0, r.jsxs)(r.Fragment, {
                    children: [
                        m ? u.intl.formatToPlainString(u.t.hXcaLT, { price: (0, l.$g)(0, _) }) : n,
                        null != g ? (0, r.jsxs)("div", { className: c.ns, children: ["-", g, "%"] }) : null,
                    ],
                }),
                className: f,
            }),
            m &&
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    className: c.lk,
                    children: u.intl.format(u.t.v9QeON, { price: E }),
                }),
            null != g
                ? (0, r.jsxs)("div", {
                      className: c.gX,
                      children: ["(", null != d && null != p ? (0, l.CE)(E, d, p) : E, ")"],
                  })
                : null,
            null != a ? (0, r.jsx)("div", { className: c.Ht, children: u.intl.string(u.t.A7Hpfs) }) : null,
        ],
    });
}
function g(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1 } = e;
    return (0, r.jsx)("div", { className: s()(c.yF, { [c.hF]: t, [c.P_]: n, [c.vy]: i }) });
}
function E(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)("div", {
        className: s()(c.V$, i),
        children: [
            (0, r.jsx)("div", { className: c.j5, children: t }),
            (0, r.jsx)("div", { className: c.HR, children: n }),
        ],
    });
}
function A(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: s()(c.aO, n), children: t });
}
