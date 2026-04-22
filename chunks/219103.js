n.d(t, { x: () => A });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(990078),
    a = n(140735),
    o = n(403581),
    u = n(834730),
    d = n(318254),
    c = n(580630),
    C = n(993408),
    p = n(818348),
    m = n(985018),
    E = n(751070);
let A = (e) => {
        let {
            priceAmount: t,
            priceCurrency: n,
            nitroIconType: r,
            nitroIconSize: i = "md",
            className: s,
            discountOfferAmount: a,
            discount: o = C.rr,
            variant: u = "text-md/semibold",
        } = e;
        return n === p.Yr.DISCORD_ORB
            ? (0, l.jsx)(f, { orbAmount: t, className: s, variant: u })
            : (0, l.jsx)(h, {
                  priceAmount: t,
                  priceCurrency: n,
                  nitroIconType: r,
                  nitroIconSize: i,
                  className: s,
                  discountOfferAmount: a,
                  discount: o,
                  variant: u,
              });
    },
    h = (e) => {
        let {
                priceAmount: t,
                priceCurrency: n,
                nitroIconType: r,
                nitroIconSize: d = "md",
                className: p,
                discountOfferAmount: A,
                discount: h = C.rr,
                variant: f = "heading-md/semibold",
            } = e,
            _ = null != A,
            g = (0, c.RS)(t, n),
            T =
                h !== C.rr && h.discountPercentage >= 5 && !_
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(a.A, {
                                  children: m.intl.format(m.t.niC6DK, {
                                      price: g,
                                      discountPercentage: h.discountPercentage,
                                  }),
                              }),
                              (0, l.jsx)("span", { "aria-hidden": !0, children: g }),
                              (0, l.jsx)("span", {
                                  className: E.id,
                                  "aria-hidden": !0,
                                  children: ` (-${h.discountPercentage}%)`,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(a.A, { children: m.intl.format(m.t["6C36MF"], { price: g }) }),
                              (0, l.jsx)("span", { "aria-hidden": !0, className: i()({ [E.rN]: _ }, p), children: g }),
                          ],
                      });
        return (0, l.jsxs)("div", {
            className: i()({ [E.nn]: _ }, E.kL, p),
            children: [
                "tooltip" === r
                    ? (0, l.jsx)(s.m, {
                          text: m.intl.string(m.t.MPFyJ5),
                          "aria-label": m.intl.string(m.t.X3Ekj8),
                          children: (0, l.jsx)(o.t, { size: d, color: "currentColor", className: E.Kk }),
                      })
                    : "default" === r
                      ? (0, l.jsx)(o.t, { size: d, color: "currentColor", className: E.Kk })
                      : null,
                (0, l.jsx)(u.E, { variant: f, color: "currentColor", lineClamp: 1, children: T }),
                _ &&
                    (0, l.jsxs)(u.E, {
                        variant: f,
                        className: E.NM,
                        lineClamp: 1,
                        children: [
                            (0, l.jsx)(a.A, { children: m.intl.format(m.t.rItDbx, { discountOfferAmount: A }) }),
                            (0, l.jsx)("span", {
                                "aria-hidden": !0,
                                children: m.intl.formatToPlainString(m.t.AYcXGW, { discountOfferAmount: A }),
                            }),
                        ],
                    }),
            ],
        });
    },
    f = (e) => {
        let { orbAmount: t, className: n, variant: r = "text-md/semibold" } = e;
        return (0, l.jsxs)("div", {
            className: i()(E.kL, n),
            children: [
                (0, l.jsx)(d.C, { color: "currentColor", size: "sm", className: E.Kk }),
                (0, l.jsxs)(u.E, {
                    variant: r,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, l.jsx)(a.A, { children: m.intl.format(m.t["a/Y8PK"], { orbAmount: t }) }),
                        (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                    ],
                }),
            ],
        });
    };
