n.d(t, {
    x: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(990078),
    s = n(397927),
    l = n(580630),
    c = n(993408),
    u = n(818348),
    d = n(985018),
    f = n(473443);
let p = 5,
    _ = (e) => {
        let {
            priceAmount: t,
            priceCurrency: n,
            nitroIconType: i,
            nitroIconSize: a = "md",
            className: o,
            discountOfferAmount: s,
            discount: l = c.rr,
            variant: d = "text-md/semibold",
        } = e;
        return n === u.Yr.DISCORD_ORB
            ? (0, r.jsx)(m, {
                  orbAmount: t,
                  className: o,
                  variant: d,
              })
            : (0, r.jsx)(h, {
                  priceAmount: t,
                  priceCurrency: n,
                  nitroIconType: i,
                  nitroIconSize: a,
                  className: o,
                  discountOfferAmount: s,
                  discount: l,
                  variant: d,
              });
    },
    h = (e) => {
        let {
                priceAmount: t,
                priceCurrency: n,
                nitroIconType: i,
                nitroIconSize: u = "md",
                className: _,
                discountOfferAmount: h,
                discount: m = c.rr,
                variant: g = "heading-md/semibold",
            } = e,
            E = null != h,
            y = (0, l.RS)(t, n),
            b =
                m !== c.rr && m.discountPercentage >= p && !E
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.AC4, {
                                  children: d.intl.format(d.t.niC6DK, {
                                      price: y,
                                      discountPercentage: m.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: y,
                              }),
                              (0, r.jsx)("span", {
                                  className: f.id,
                                  "aria-hidden": !0,
                                  children: " (-".concat(m.discountPercentage, "%)"),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.AC4, {
                                  children: d.intl.format(d.t["6C36MF"], {
                                      price: y,
                                  }),
                              }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: a()(
                                      {
                                          [f.rN]: E,
                                      },
                                      _,
                                  ),
                                  children: y,
                              }),
                          ],
                      });
        return (0, r.jsxs)("div", {
            className: a()(
                {
                    [f.nn]: E,
                },
                f.kL,
                _,
            ),
            children: [
                "tooltip" === i
                    ? (0, r.jsx)(o.m, {
                          text: d.intl.string(d.t.MPFyJ5),
                          "aria-label": d.intl.string(d.t.X3Ekj8),
                          children: (0, r.jsx)(s.tvc, {
                              size: u,
                              color: "currentColor",
                              className: f.Kk,
                          }),
                      })
                    : "default" === i
                      ? (0, r.jsx)(s.tvc, {
                            size: u,
                            color: "currentColor",
                            className: f.Kk,
                        })
                      : null,
                (0, r.jsx)(s.Text, {
                    variant: g,
                    color: "currentColor",
                    lineClamp: 1,
                    children: b,
                }),
                E &&
                    (0, r.jsxs)(s.Text, {
                        variant: g,
                        className: f.NM,
                        lineClamp: 1,
                        children: [
                            (0, r.jsx)(s.AC4, {
                                children: d.intl.format(d.t.rItDbx, {
                                    discountOfferAmount: h,
                                }),
                            }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: d.intl.formatToPlainString(d.t.AYcXGW, {
                                    discountOfferAmount: h,
                                }),
                            }),
                        ],
                    }),
            ],
        });
    },
    m = (e) => {
        let { orbAmount: t, className: n, variant: i = "text-md/semibold" } = e;
        return (0, r.jsxs)("div", {
            className: a()(f.kL, n),
            children: [
                (0, r.jsx)(s.Cp8, {
                    color: "currentColor",
                    size: "sm",
                    className: f.Kk,
                }),
                (0, r.jsxs)(s.Text, {
                    variant: i,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(s.AC4, {
                            children: d.intl.format(d.t["a/Y8PK"], {
                                orbAmount: t,
                            }),
                        }),
                        (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            children: t,
                        }),
                    ],
                }),
            ],
        });
    };
