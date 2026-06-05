n.d(t, { x: () => I });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(990078),
    a = n(403581),
    o = n(278416),
    u = n(140735),
    c = n(834730),
    d = n(318254),
    C = n(580630),
    p = n(993408),
    _ = n(818348),
    E = n(375708),
    m = n(594387),
    T = n(751070);
let I = (e) => {
        let {
            priceAmount: t,
            priceCurrency: n,
            discountIconConfig: r,
            className: i,
            discountOfferAmount: s,
            discount: a = p.rr,
            variant: o = "text-md/semibold",
        } = e;
        return n === _.Yr.DISCORD_ORB
            ? (0, l.jsx)(S, { orbAmount: t, className: i, variant: o })
            : (0, l.jsx)(A, {
                  priceAmount: t,
                  priceCurrency: n,
                  discountIconConfig: r,
                  className: i,
                  discountOfferAmount: s,
                  discount: a,
                  variant: o,
              });
    },
    O = (e) => {
        let { config: t } = e,
            n = t.size ?? "md";
        switch (t.source) {
            case p.D0.NITRO: {
                let e = (0, l.jsx)(a.t, { size: n, color: "currentColor", className: T.Kk });
                if ("tooltip" === t.displayMode)
                    return (0, l.jsx)(s.m, {
                        text: E.intl.string(E.t.MPFyJ5),
                        "aria-label": E.intl.string(E.t.X3Ekj8),
                        children: e,
                    });
                return e;
            }
            case p.D0.THIRDPARTY: {
                let e = (0, l.jsx)(o.g, { size: n, color: "currentColor", className: T.Kk });
                if ("tooltip" === t.displayMode)
                    return (0, l.jsx)(s.m, { text: E.intl.string(m.default.DePOcS), children: e });
                return e;
            }
            default:
                return t.source, null;
        }
    },
    A = (e) => {
        let {
                priceAmount: t,
                priceCurrency: n,
                discountIconConfig: r,
                className: s,
                discountOfferAmount: a,
                discount: o = p.rr,
                variant: d = "heading-md/semibold",
            } = e,
            _ = null != a,
            m = (0, C.RS)(t, n),
            I =
                o !== p.rr && o.discountPercentage >= 5 && !_
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.A, {
                                  children: E.intl.format(E.t.niC6DK, {
                                      price: m,
                                      discountPercentage: o.discountPercentage,
                                  }),
                              }),
                              (0, l.jsx)("span", { "aria-hidden": !0, children: m }),
                              (0, l.jsx)("span", {
                                  className: T.id,
                                  "aria-hidden": !0,
                                  children: ` (-${o.discountPercentage}%)`,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.A, { children: E.intl.format(E.t["6C36MF"], { price: m }) }),
                              (0, l.jsx)("span", { "aria-hidden": !0, className: i()({ [T.rN]: _ }, s), children: m }),
                          ],
                      });
        return (0, l.jsxs)("div", {
            className: i()({ [T.nn]: _ }, T.kL, s),
            children: [
                null != r ? (0, l.jsx)(O, { config: r }) : null,
                (0, l.jsx)(c.E, { variant: d, color: "currentColor", lineClamp: 1, children: I }),
                _ &&
                    (0, l.jsxs)(c.E, {
                        variant: d,
                        className: T.NM,
                        lineClamp: 1,
                        children: [
                            (0, l.jsx)(u.A, { children: E.intl.format(E.t.rItDbx, { discountOfferAmount: a }) }),
                            (0, l.jsx)("span", {
                                "aria-hidden": !0,
                                children: E.intl.formatToPlainString(E.t.AYcXGW, { discountOfferAmount: a }),
                            }),
                        ],
                    }),
            ],
        });
    },
    S = (e) => {
        let { orbAmount: t, className: n, variant: r = "text-md/semibold" } = e;
        return (0, l.jsxs)("div", {
            className: i()(T.kL, n),
            children: [
                (0, l.jsx)(d.C, { color: "currentColor", size: "sm", className: T.Kk }),
                (0, l.jsxs)(c.E, {
                    variant: r,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, l.jsx)(u.A, { children: E.intl.format(E.t["a/Y8PK"], { orbAmount: t }) }),
                        (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                    ],
                }),
            ],
        });
    };
