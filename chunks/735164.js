n.d(t, {
    Sd: () => b,
    X0: () => y,
    Xd: () => h,
    Yx: () => _,
    f0: () => g,
    oR: () => m,
    pK: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(155718),
    c = n(580630),
    u = n(985018),
    d = n(600834);
let f = i.createContext({
        isPremiumRebrand: !1,
    }),
    p = () => i.useContext(f).isPremiumRebrand;

function _(e) {
    let { children: t, className: n, isPremiumRebrand: i = !1 } = e;
    return (0, r.jsx)(f.Provider, {
        value: {
            isPremiumRebrand: i,
        },
        children: (0, r.jsx)("div", {
            className: s()(
                d.tp,
                {
                    [d.u0]: i,
                },
                n,
            ),
            children: t,
        }),
    });
}

function h(e) {
    let { children: t } = e;
    return p()
        ? (0, r.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: s()(d.wx, d.u0),
              children: t,
          })
        : (0, r.jsx)("div", {
              className: d.wx,
              children: t,
          });
}

function m(e) {
    let { label: t, value: n, className: i } = e;
    return p()
        ? (0, r.jsxs)("div", {
              className: s()(d.nM, i),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      children: t,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: d.Uu,
                      children: n,
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s()(d.nM, i),
              children: [
                  (0, r.jsx)("div", {
                      className: d.xZ,
                      children: t,
                  }),
                  (0, r.jsx)("div", {
                      className: d.X6,
                      children: n,
                  }),
              ],
          });
}

function g(e) {
    let {
            label: t,
            value: n,
            discounts: i,
            originalAmount: a,
            interval: s,
            currency: f,
            className: p,
            intervalCount: _,
            inTrialPeriod: h,
        } = e,
        g = (e) => (null != i ? i.find((t) => t.type === e) : null),
        E = g(l.iS.SUBSCRIPTION_PLAN),
        b = g(l.iS.ENTITLEMENT),
        y = null != E ? Math.floor((E.amount / a) * 100) : null,
        O = (0, c.$g)(a, f);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m, {
                label: t,
                value: (0, r.jsxs)(r.Fragment, {
                    children: [
                        h
                            ? u.intl.formatToPlainString(u.t.hXcaLT, {
                                  price: (0, c.$g)(0, f),
                              })
                            : n,
                        null != y
                            ? (0, r.jsxs)("div", {
                                  className: d.ns,
                                  children: ["-", y, "%"],
                              })
                            : null,
                    ],
                }),
                className: p,
            }),
            h &&
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    className: d.lk,
                    children: u.intl.format(u.t.v9QeON, {
                        price: O,
                    }),
                }),
            null != y
                ? (0, r.jsxs)("div", {
                      className: d.gX,
                      children: ["(", null != s && null != _ ? (0, c.CE)(O, s, _) : O, ")"],
                  })
                : null,
            null != b
                ? (0, r.jsx)("div", {
                      className: d.Ht,
                      children: u.intl.string(u.t.A7Hpfs),
                  })
                : null,
        ],
    });
}

function E(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1 } = e;
    return (0, r.jsx)("div", {
        className: s()(d.yF, {
            [d.hF]: t,
            [d.P_]: n,
            [d.vy]: i,
        }),
    });
}

function b(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)("div", {
        className: s()(d.V$, i),
        children: [
            (0, r.jsx)("div", {
                className: d.j5,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: d.HR,
                children: n,
            }),
        ],
    });
}

function y(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: s()(d.aO, n),
        children: t,
    });
}
