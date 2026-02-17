"use strict";
n.d(t, { Sd: () => A, X0: () => I, Xd: () => h, Yx: () => f, f0: () => g, oR: () => p, pK: () => E });
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
function h(e) {
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
function p(e) {
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
function g(e) {
    let {
            label: t,
            value: n,
            subscriptionDiscount: i,
            entitlementDiscount: a,
            originalAmount: s,
            interval: d,
            currency: _,
            className: f,
            intervalCount: h,
            inTrialPeriod: g,
        } = e,
        E = null != i ? Math.floor((i.amount / s) * 100) : null,
        A = (0, l.$g)(s, _);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p, {
                label: t,
                value: (0, r.jsxs)(r.Fragment, {
                    children: [
                        g ? u.intl.formatToPlainString(u.t.hXcaLT, { price: (0, l.$g)(0, _) }) : n,
                        null != E ? (0, r.jsxs)("div", { className: c.ns, children: ["-", E, "%"] }) : null,
                    ],
                }),
                className: f,
            }),
            g &&
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    className: c.lk,
                    children: u.intl.format(u.t.v9QeON, { price: A }),
                }),
            null != E
                ? (0, r.jsxs)("div", {
                      className: c.gX,
                      children: ["(", null != d && null != h ? (0, l.CE)(A, d, h) : A, ")"],
                  })
                : null,
            null != a ? (0, r.jsx)("div", { className: c.Ht, children: u.intl.string(u.t.A7Hpfs) }) : null,
        ],
    });
}
function E(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1, invisible: a = !1 } = e;
    return (0, r.jsx)("div", { className: s()(c.yF, { [c.hF]: t, [c.P_]: n, [c.vy]: i, [c.Bw]: a }) });
}
function A(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)("div", {
        className: s()(c.V$, i),
        children: [
            (0, r.jsx)("div", { className: c.j5, children: t }),
            (0, r.jsx)("div", { className: c.HR, children: n }),
        ],
    });
}
function I(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: s()(c.aO, n), children: t });
}
