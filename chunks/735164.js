n.d(t, { Sd: () => h, X0: () => x, Xd: () => m, Yx: () => _, f0: () => f, oR: () => b, pK: () => g });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(534514),
    o = n(834730),
    c = n(580630),
    d = n(985018),
    u = n(690073);
let p = r.createContext({ isPremiumRebrand: !1 });
function _(e) {
    let { children: t, className: n, isPremiumRebrand: r = !1 } = e;
    return (0, a.jsx)(p.Provider, {
        value: { isPremiumRebrand: r },
        children: (0, a.jsx)("div", { className: i()(u.tp, { [u.u0]: r }, n), children: t }),
    });
}
function m(e) {
    let { children: t } = e;
    return r.useContext(p).isPremiumRebrand
        ? (0, a.jsx)(s.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: i()(u.wx, u.u0),
              children: t,
          })
        : (0, a.jsx)("div", { className: u.wx, children: t });
}
function b(e) {
    let { label: t, value: n, className: l } = e;
    return r.useContext(p).isPremiumRebrand
        ? (0, a.jsxs)("div", {
              className: i()(u.nM, l),
              children: [
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "currentColor", className: u.Uu, children: n }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: i()(u.nM, l),
              children: [
                  (0, a.jsx)("div", { className: u.xZ, children: t }),
                  (0, a.jsx)("div", { className: u.X6, children: n }),
              ],
          });
}
function f(e) {
    let {
            label: t,
            value: n,
            subscriptionDiscount: r,
            entitlementDiscount: l,
            originalAmount: i,
            interval: s,
            currency: p,
            className: _,
            intervalCount: m,
            inTrialPeriod: f,
        } = e,
        g = null != r ? Math.floor((r.amount / i) * 100) : null,
        h = (0, c.$g)(i, p);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(b, {
                label: t,
                value: (0, a.jsxs)(a.Fragment, {
                    children: [
                        f ? d.intl.formatToPlainString(d.t.hXcaLT, { price: (0, c.$g)(0, p) }) : n,
                        null != g ? (0, a.jsxs)("div", { className: u.ns, children: ["-", g, "%"] }) : null,
                    ],
                }),
                className: _,
            }),
            f &&
                (0, a.jsx)(o.E, {
                    variant: "text-md/medium",
                    className: u.lk,
                    children: d.intl.format(d.t.v9QeON, { price: h }),
                }),
            null != g
                ? (0, a.jsxs)("div", {
                      className: u.gX,
                      children: ["(", null != s && null != m ? (0, c.CE)(h, s, m) : h, ")"],
                  })
                : null,
            null != l ? (0, a.jsx)("div", { className: u.Ht, children: d.intl.string(d.t.A7Hpfs) }) : null,
        ],
    });
}
function g(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: r = !1, invisible: l = !1 } = e;
    return (0, a.jsx)("div", { className: i()(u.yF, { [u.hF]: t, [u.P_]: n, [u.vy]: r, [u.Bw]: l }) });
}
function h(e) {
    let { label: t, value: n, className: r } = e;
    return (0, a.jsxs)("div", {
        className: i()(u.V$, r),
        children: [
            (0, a.jsx)("div", { className: u.j5, children: t }),
            (0, a.jsx)("div", { className: u.HR, children: n }),
        ],
    });
}
function x(e) {
    let { children: t, className: n } = e;
    return (0, a.jsx)("div", { className: i()(u.aO, n), children: t });
}
