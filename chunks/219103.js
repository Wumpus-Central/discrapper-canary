n.d(t, {
    x: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(580630),
    c = n(993408),
    u = n(818348),
    d = n(985018),
    f = n(473443);
let p = 5,
    _ = (e) => {
        let {
            price: t,
            nitroIconType: n,
            nitroIconSize: i = "md",
            className: a,
            discountOfferAmount: s,
            discount: o = c.rr,
            variant: l = "text-md/semibold",
        } = e;
        return t.currency === u.Yr.DISCORD_ORB
            ? (0, r.jsx)(m, {
                  orbAmount: t.amount,
                  className: a,
                  variant: l,
              })
            : (0, r.jsx)(h, {
                  price: t,
                  nitroIconType: n,
                  nitroIconSize: i,
                  className: a,
                  discountOfferAmount: s,
                  discount: o,
                  variant: l,
              });
    },
    h = (e) => {
        let {
                price: { amount: t, currency: n },
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
                              (0, r.jsx)(o.AC4, {
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
                              (0, r.jsx)(o.AC4, {
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
                    ? (0, r.jsx)(s.m, {
                          text: d.intl.string(d.t.MPFyJ5),
                          "aria-label": d.intl.string(d.t.X3Ekj8),
                          children: (0, r.jsx)(o.tvc, {
                              size: u,
                              color: "currentColor",
                              className: f.Kk,
                          }),
                      })
                    : "default" === i
                      ? (0, r.jsx)(o.tvc, {
                            size: u,
                            color: "currentColor",
                            className: f.Kk,
                        })
                      : null,
                (0, r.jsx)(o.Text, {
                    variant: g,
                    color: "currentColor",
                    lineClamp: 1,
                    children: b,
                }),
                E &&
                    (0, r.jsxs)(o.Text, {
                        variant: g,
                        className: f.NM,
                        lineClamp: 1,
                        children: [
                            (0, r.jsx)(o.AC4, {
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
                (0, r.jsx)(o.Cp8, {
                    color: "currentColor",
                    size: "sm",
                    className: f.Kk,
                }),
                (0, r.jsxs)(o.Text, {
                    variant: i,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(o.AC4, {
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
