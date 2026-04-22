n.d(t, { Sd: () => v, X0: () => x, Xd: () => _, Yx: () => p, f0: () => g, oR: () => f, pK: () => b });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(534514),
    o = n(834730),
    u = n(580630),
    c = n(985018),
    d = n(690073);
let m = r.createContext({ isPremiumRebrand: !1 });
function p(e) {
    let { children: t, className: n, isPremiumRebrand: r = !1 } = e;
    return (0, a.jsx)(m.Provider, {
        value: { isPremiumRebrand: r },
        children: (0, a.jsx)("div", { className: i()(d.tp, { [d.u0]: r }, n), children: t }),
    });
}
function _(e) {
    let { children: t } = e;
    return r.useContext(m).isPremiumRebrand
        ? (0, a.jsx)(s.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: i()(d.wx, d.u0),
              children: t,
          })
        : (0, a.jsx)("div", { className: d.wx, children: t });
}
function f(e) {
    let { label: t, value: n, className: l } = e;
    return r.useContext(m).isPremiumRebrand
        ? (0, a.jsxs)("div", {
              className: i()(d.nM, l),
              children: [
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "currentColor", className: d.Uu, children: n }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: i()(d.nM, l),
              children: [
                  (0, a.jsx)("div", { className: d.xZ, children: t }),
                  (0, a.jsx)("div", { className: d.X6, children: n }),
              ],
          });
}
function g(e) {
    let {
            label: t,
            value: n,
            subscriptionDiscount: r,
            entitlementDiscount: l,
            originalAmount: i,
            interval: s,
            currency: m,
            className: p,
            intervalCount: _,
            inTrialPeriod: g,
        } = e,
        b = null != r ? Math.floor((r.amount / i) * 100) : null,
        v = (0, u.$g)(i, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(f, {
                label: t,
                value: (0, a.jsxs)(a.Fragment, {
                    children: [
                        g ? c.intl.formatToPlainString(c.t.hXcaLT, { price: (0, u.$g)(0, m) }) : n,
                        null != b ? (0, a.jsxs)("div", { className: d.ns, children: ["-", b, "%"] }) : null,
                    ],
                }),
                className: p,
            }),
            g &&
                (0, a.jsx)(o.E, {
                    variant: "text-md/medium",
                    className: d.lk,
                    children: c.intl.format(c.t.v9QeON, { price: v }),
                }),
            null != b
                ? (0, a.jsxs)("div", {
                      className: d.gX,
                      children: ["(", null != s && null != _ ? (0, u.CE)(v, s, _) : v, ")"],
                  })
                : null,
            null != l ? (0, a.jsx)("div", { className: d.Ht, children: c.intl.string(c.t.A7Hpfs) }) : null,
        ],
    });
}
function b(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: r = !1, invisible: l = !1 } = e;
    return (0, a.jsx)("div", { className: i()(d.yF, { [d.hF]: t, [d.P_]: n, [d.vy]: r, [d.Bw]: l }) });
}
function v(e) {
    let { label: t, value: n, className: r } = e;
    return (0, a.jsxs)("div", {
        className: i()(d.V$, r),
        children: [
            (0, a.jsx)("div", { className: d.j5, children: t }),
            (0, a.jsx)("div", { className: d.HR, children: n }),
        ],
    });
}
function x(e) {
    let { children: t, className: n } = e;
    return (0, a.jsx)("div", { className: i()(d.aO, n), children: t });
}
