n.d(t, { x: () => v });
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(990078),
    o = n(397927),
    s = n(580630),
    c = n(993408),
    u = n(818348),
    d = n(985018),
    p = n(473443);
let v = (e) => {
        let {
            price: t,
            nitroIconType: n,
            nitroIconSize: l = "md",
            className: a,
            discountOfferAmount: i,
            discount: o = c.rr,
            variant: s = "text-md/semibold",
        } = e;
        return t.currency === u.Yr.DISCORD_ORB
            ? (0, r.jsx)(y, {
                  orbAmount: t.amount,
                  className: a,
                  variant: s,
              })
            : (0, r.jsx)(b, {
                  price: t,
                  nitroIconType: n,
                  nitroIconSize: l,
                  className: a,
                  discountOfferAmount: i,
                  discount: o,
                  variant: s,
              });
    },
    b = (e) => {
        let {
                price: { amount: t, currency: n },
                nitroIconType: l,
                nitroIconSize: u = "md",
                className: v,
                discountOfferAmount: b,
                discount: y = c.rr,
                variant: m = "heading-md/semibold",
            } = e,
            f = null != b,
            g = (0, s.RS)(t, n),
            O =
                y !== c.rr && y.discountPercentage >= 5 && !f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.AC4, {
                                  children: d.intl.format(d.t.niC6DK, {
                                      price: g,
                                      discountPercentage: y.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: g,
                              }),
                              (0, r.jsx)("span", {
                                  className: p.id,
                                  "aria-hidden": !0,
                                  children: " (-".concat(y.discountPercentage, "%)"),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.AC4, { children: d.intl.format(d.t["6C36MF"], { price: g }) }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: a()({ [p.rN]: f }, v),
                                  children: g,
                              }),
                          ],
                      });
        return (0, r.jsxs)("div", {
            className: a()({ [p.nn]: f }, p.kL, v),
            children: [
                "tooltip" === l
                    ? (0, r.jsx)(i.m, {
                          text: d.intl.string(d.t.MPFyJ5),
                          "aria-label": d.intl.string(d.t.X3Ekj8),
                          children: (0, r.jsx)(o.tvc, {
                              size: u,
                              color: "currentColor",
                              className: p.Kk,
                          }),
                      })
                    : "default" === l
                      ? (0, r.jsx)(o.tvc, {
                            size: u,
                            color: "currentColor",
                            className: p.Kk,
                        })
                      : null,
                (0, r.jsx)(o.Text, {
                    variant: m,
                    color: "currentColor",
                    lineClamp: 1,
                    children: O,
                }),
                f &&
                    (0, r.jsxs)(o.Text, {
                        variant: m,
                        className: p.NM,
                        lineClamp: 1,
                        children: [
                            (0, r.jsx)(o.AC4, { children: d.intl.format(d.t.rItDbx, { discountOfferAmount: b }) }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: d.intl.formatToPlainString(d.t.AYcXGW, { discountOfferAmount: b }),
                            }),
                        ],
                    }),
            ],
        });
    },
    y = (e) => {
        let { orbAmount: t, className: n, variant: l = "text-md/semibold" } = e;
        return (0, r.jsxs)("div", {
            className: a()(p.kL, n),
            children: [
                (0, r.jsx)(o.Cp8, {
                    color: "currentColor",
                    size: "sm",
                    className: p.Kk,
                }),
                (0, r.jsxs)(o.Text, {
                    variant: l,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(o.AC4, { children: d.intl.format(d.t["a/Y8PK"], { orbAmount: t }) }),
                        (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            children: t,
                        }),
                    ],
                }),
            ],
        });
    };
