"use strict";
n.d(t, { x: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
    o = n(140735),
    l = n(403581),
    u = n(834730),
    c = n(318254),
    d = n(580630),
    _ = n(993408),
    f = n(818348),
    p = n(985018),
    h = n(751070);
let E = (e) => {
        let {
            priceAmount: t,
            priceCurrency: n,
            nitroIconType: i,
            nitroIconSize: s = "md",
            className: a,
            discountOfferAmount: o,
            discount: l = _.rr,
            variant: u = "text-md/semibold",
        } = e;
        return n === f.Yr.DISCORD_ORB
            ? (0, r.jsx)(g, { orbAmount: t, className: a, variant: u })
            : (0, r.jsx)(m, {
                  priceAmount: t,
                  priceCurrency: n,
                  nitroIconType: i,
                  nitroIconSize: s,
                  className: a,
                  discountOfferAmount: o,
                  discount: l,
                  variant: u,
              });
    },
    m = (e) => {
        let {
                priceAmount: t,
                priceCurrency: n,
                nitroIconType: i,
                nitroIconSize: c = "md",
                className: f,
                discountOfferAmount: E,
                discount: m = _.rr,
                variant: g = "heading-md/semibold",
            } = e,
            A = null != E,
            I = (0, d.RS)(t, n),
            T =
                m !== _.rr && m.discountPercentage >= 5 && !A
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.A, {
                                  children: p.intl.format(p.t.niC6DK, {
                                      price: I,
                                      discountPercentage: m.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", { "aria-hidden": !0, children: I }),
                              (0, r.jsx)("span", {
                                  className: h.id,
                                  "aria-hidden": !0,
                                  children: ` (-${m.discountPercentage}%)`,
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.A, { children: p.intl.format(p.t["6C36MF"], { price: I }) }),
                              (0, r.jsx)("span", { "aria-hidden": !0, className: s()({ [h.rN]: A }, f), children: I }),
                          ],
                      });
        return (0, r.jsxs)("div", {
            className: s()({ [h.nn]: A }, h.kL, f),
            children: [
                "tooltip" === i
                    ? (0, r.jsx)(a.m, {
                          text: p.intl.string(p.t.MPFyJ5),
                          "aria-label": p.intl.string(p.t.X3Ekj8),
                          children: (0, r.jsx)(l.t, { size: c, color: "currentColor", className: h.Kk }),
                      })
                    : "default" === i
                      ? (0, r.jsx)(l.t, { size: c, color: "currentColor", className: h.Kk })
                      : null,
                (0, r.jsx)(u.E, { variant: g, color: "currentColor", lineClamp: 1, children: T }),
                A &&
                    (0, r.jsxs)(u.E, {
                        variant: g,
                        className: h.NM,
                        lineClamp: 1,
                        children: [
                            (0, r.jsx)(o.A, { children: p.intl.format(p.t.rItDbx, { discountOfferAmount: E }) }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: p.intl.formatToPlainString(p.t.AYcXGW, { discountOfferAmount: E }),
                            }),
                        ],
                    }),
            ],
        });
    },
    g = (e) => {
        let { orbAmount: t, className: n, variant: i = "text-md/semibold" } = e;
        return (0, r.jsxs)("div", {
            className: s()(h.kL, n),
            children: [
                (0, r.jsx)(c.C, { color: "currentColor", size: "sm", className: h.Kk }),
                (0, r.jsxs)(u.E, {
                    variant: i,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(o.A, { children: p.intl.format(p.t["a/Y8PK"], { orbAmount: t }) }),
                        (0, r.jsx)("span", { "aria-hidden": !0, children: t }),
                    ],
                }),
            ],
        });
    };
