"use strict";
n.d(t, { x: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(580630),
    u = n(993408),
    c = n(818348),
    d = n(985018),
    _ = n(473443);
let f = 5,
    p = (e) => {
        let {
            priceAmount: t,
            priceCurrency: n,
            nitroIconType: i,
            nitroIconSize: a = "md",
            className: s,
            discountOfferAmount: o,
            discount: l = u.rr,
            variant: d = "text-md/semibold",
        } = e;
        return n === c.Yr.DISCORD_ORB
            ? (0, r.jsx)(m, { orbAmount: t, className: s, variant: d })
            : (0, r.jsx)(h, {
                  priceAmount: t,
                  priceCurrency: n,
                  nitroIconType: i,
                  nitroIconSize: a,
                  className: s,
                  discountOfferAmount: o,
                  discount: l,
                  variant: d,
              });
    },
    h = (e) => {
        let {
                priceAmount: t,
                priceCurrency: n,
                nitroIconType: i,
                nitroIconSize: c = "md",
                className: p,
                discountOfferAmount: h,
                discount: m = u.rr,
                variant: g = "heading-md/semibold",
            } = e,
            E = null != h,
            A = (0, l.RS)(t, n),
            I =
                m !== u.rr && m.discountPercentage >= f && !E
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.AC4, {
                                  children: d.intl.format(d.t.niC6DK, {
                                      price: A,
                                      discountPercentage: m.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", { "aria-hidden": !0, children: A }),
                              (0, r.jsx)("span", {
                                  className: _.id,
                                  "aria-hidden": !0,
                                  children: ` (-${m.discountPercentage}%)`,
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.AC4, { children: d.intl.format(d.t["6C36MF"], { price: A }) }),
                              (0, r.jsx)("span", { "aria-hidden": !0, className: a()({ [_.rN]: E }, p), children: A }),
                          ],
                      });
        return (0, r.jsxs)("div", {
            className: a()({ [_.nn]: E }, _.kL, p),
            children: [
                "tooltip" === i
                    ? (0, r.jsx)(s.m, {
                          text: d.intl.string(d.t.MPFyJ5),
                          "aria-label": d.intl.string(d.t.X3Ekj8),
                          children: (0, r.jsx)(o.tvc, { size: c, color: "currentColor", className: _.Kk }),
                      })
                    : "default" === i
                      ? (0, r.jsx)(o.tvc, { size: c, color: "currentColor", className: _.Kk })
                      : null,
                (0, r.jsx)(o.Text, { variant: g, color: "currentColor", lineClamp: 1, children: I }),
                E &&
                    (0, r.jsxs)(o.Text, {
                        variant: g,
                        className: _.NM,
                        lineClamp: 1,
                        children: [
                            (0, r.jsx)(o.AC4, { children: d.intl.format(d.t.rItDbx, { discountOfferAmount: h }) }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: d.intl.formatToPlainString(d.t.AYcXGW, { discountOfferAmount: h }),
                            }),
                        ],
                    }),
            ],
        });
    },
    m = (e) => {
        let { orbAmount: t, className: n, variant: i = "text-md/semibold" } = e;
        return (0, r.jsxs)("div", {
            className: a()(_.kL, n),
            children: [
                (0, r.jsx)(o.Cp8, { color: "currentColor", size: "sm", className: _.Kk }),
                (0, r.jsxs)(o.Text, {
                    variant: i,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(o.AC4, { children: d.intl.format(d.t["a/Y8PK"], { orbAmount: t }) }),
                        (0, r.jsx)("span", { "aria-hidden": !0, children: t }),
                    ],
                }),
            ],
        });
    };
