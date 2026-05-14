n.d(t, { x: () => A });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(990078),
    a = n(403581),
    o = n(278416),
    u = n(140735),
    c = n(834730),
    d = n(318254),
    C = n(580630),
    p = n(993408),
    m = n(818348),
    E = n(375708),
    _ = n(594387),
    T = n(751070);
let A = (e) => {
        let {
            priceAmount: t,
            priceCurrency: n,
            discountIconConfig: i,
            className: r,
            discountOfferAmount: s,
            discount: a = p.rr,
            variant: o = "text-md/semibold",
        } = e;
        return n === m.Yr.DISCORD_ORB
            ? (0, l.jsx)(S, { orbAmount: t, className: r, variant: o })
            : (0, l.jsx)(O, {
                  priceAmount: t,
                  priceCurrency: n,
                  discountIconConfig: i,
                  className: r,
                  discountOfferAmount: s,
                  discount: a,
                  variant: o,
              });
    },
    h = (e) => {
        let { config: t } = e,
            n = t.size ?? "md";
        if (t.source === p.D0.NITRO) {
            let e = (0, l.jsx)(a.t, { size: n, color: "currentColor", className: T.Kk });
            return "tooltip" === t.displayMode
                ? (0, l.jsx)(s.m, {
                      text: E.intl.string(E.t.MPFyJ5),
                      "aria-label": E.intl.string(E.t.X3Ekj8),
                      children: e,
                  })
                : e;
        }
        if (t.source === p.D0.THIRDPARTY) {
            let e = (0, l.jsx)(o.g, { size: n, color: "currentColor", className: T.Kk });
            return "tooltip" === t.displayMode
                ? (0, l.jsx)(s.m, { text: E.intl.string(_.default.DePOcS), children: e })
                : e;
        }
        return null;
    },
    O = (e) => {
        let {
                priceAmount: t,
                priceCurrency: n,
                discountIconConfig: i,
                className: s,
                discountOfferAmount: a,
                discount: o = p.rr,
                variant: d = "heading-md/semibold",
            } = e,
            m = null != a,
            _ = (0, C.RS)(t, n),
            A =
                o !== p.rr && o.discountPercentage >= 5 && !m
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.A, {
                                  children: E.intl.format(E.t.niC6DK, {
                                      price: _,
                                      discountPercentage: o.discountPercentage,
                                  }),
                              }),
                              (0, l.jsx)("span", { "aria-hidden": !0, children: _ }),
                              (0, l.jsx)("span", {
                                  className: T.id,
                                  "aria-hidden": !0,
                                  children: ` (-${o.discountPercentage}%)`,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.A, { children: E.intl.format(E.t["6C36MF"], { price: _ }) }),
                              (0, l.jsx)("span", { "aria-hidden": !0, className: r()({ [T.rN]: m }, s), children: _ }),
                          ],
                      });
        return (0, l.jsxs)("div", {
            className: r()({ [T.nn]: m }, T.kL, s),
            children: [
                null != i ? (0, l.jsx)(h, { config: i }) : null,
                (0, l.jsx)(c.E, { variant: d, color: "currentColor", lineClamp: 1, children: A }),
                m &&
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
        let { orbAmount: t, className: n, variant: i = "text-md/semibold" } = e;
        return (0, l.jsxs)("div", {
            className: r()(T.kL, n),
            children: [
                (0, l.jsx)(d.C, { color: "currentColor", size: "sm", className: T.Kk }),
                (0, l.jsxs)(c.E, {
                    variant: i,
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
