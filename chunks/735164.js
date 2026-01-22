n.d(t, {
    Sd: () => E,
    X0: () => b,
    Xd: () => _,
    Yx: () => p,
    f0: () => m,
    oR: () => h,
    pK: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(580630),
    c = n(985018),
    u = n(600834);
let d = i.createContext({
        isPremiumRebrand: !1,
    }),
    f = () => i.useContext(d).isPremiumRebrand;

function p(e) {
    let { children: t, className: n, isPremiumRebrand: i = !1 } = e;
    return (0, r.jsx)(d.Provider, {
        value: {
            isPremiumRebrand: i,
        },
        children: (0, r.jsx)("div", {
            className: s()(
                u.tp,
                {
                    [u.u0]: i,
                },
                n,
            ),
            children: t,
        }),
    });
}

function _(e) {
    let { children: t } = e;
    return f()
        ? (0, r.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: s()(u.wx, u.u0),
              children: t,
          })
        : (0, r.jsx)("div", {
              className: u.wx,
              children: t,
          });
}

function h(e) {
    let { label: t, value: n, className: i } = e;
    return f()
        ? (0, r.jsxs)("div", {
              className: s()(u.nM, i),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      children: t,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: u.Uu,
                      children: n,
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s()(u.nM, i),
              children: [
                  (0, r.jsx)("div", {
                      className: u.xZ,
                      children: t,
                  }),
                  (0, r.jsx)("div", {
                      className: u.X6,
                      children: n,
                  }),
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
            currency: f,
            className: p,
            intervalCount: _,
            inTrialPeriod: m,
        } = e,
        g = null != i ? Math.floor((i.amount / s) * 100) : null,
        E = (0, l.$g)(s, f);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h, {
                label: t,
                value: (0, r.jsxs)(r.Fragment, {
                    children: [
                        m
                            ? c.intl.formatToPlainString(c.t.hXcaLT, {
                                  price: (0, l.$g)(0, f),
                              })
                            : n,
                        null != g
                            ? (0, r.jsxs)("div", {
                                  className: u.ns,
                                  children: ["-", g, "%"],
                              })
                            : null,
                    ],
                }),
                className: p,
            }),
            m &&
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    className: u.lk,
                    children: c.intl.format(c.t.v9QeON, {
                        price: E,
                    }),
                }),
            null != g
                ? (0, r.jsxs)("div", {
                      className: u.gX,
                      children: ["(", null != d && null != _ ? (0, l.CE)(E, d, _) : E, ")"],
                  })
                : null,
            null != a
                ? (0, r.jsx)("div", {
                      className: u.Ht,
                      children: c.intl.string(c.t.A7Hpfs),
                  })
                : null,
        ],
    });
}

function g(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1 } = e;
    return (0, r.jsx)("div", {
        className: s()(u.yF, {
            [u.hF]: t,
            [u.P_]: n,
            [u.vy]: i,
        }),
    });
}

function E(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)("div", {
        className: s()(u.V$, i),
        children: [
            (0, r.jsx)("div", {
                className: u.j5,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: u.HR,
                children: n,
            }),
        ],
    });
}

function b(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: s()(u.aO, n),
        children: t,
    });
}
