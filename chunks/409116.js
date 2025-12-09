n.d(t, { F: () => p });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(28664),
    s = n(481060),
    o = n(937615),
    c = n(884697),
    d = n(231338),
    u = n(388032),
    m = n(239051);
let p = (e) => {
        let {
            price: t,
            nitroIconType: n,
            nitroIconSize: r = "md",
            className: i,
            discountOfferAmount: l,
            discount: s = c.f_,
            variant: o = "text-md/semibold",
        } = e;
        return t.currency === d.pK.DISCORD_ORB
            ? (0, a.jsx)(x, {
                  orbAmount: t.amount,
                  className: i,
                  variant: o,
              })
            : (0, a.jsx)(h, {
                  price: t,
                  nitroIconType: n,
                  nitroIconSize: r,
                  className: i,
                  discountOfferAmount: l,
                  discount: s,
                  variant: o,
              });
    },
    h = (e) => {
        let {
                price: { amount: t, currency: n },
                nitroIconType: r,
                nitroIconSize: d = "md",
                className: p,
                discountOfferAmount: h,
                discount: x = c.f_,
                variant: f = "heading-md/semibold",
            } = e,
            g = null != h,
            b = (0, o.qr)(t, n),
            v =
                x !== c.f_ && x.discountPercentage >= 5 && !g
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(s.nn4, {
                                  children: u.intl.format(u.t.niC6DK, {
                                      price: b,
                                      discountPercentage: x.discountPercentage,
                                  }),
                              }),
                              (0, a.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: b,
                              }),
                              (0, a.jsx)("span", {
                                  className: m.discount,
                                  "aria-hidden": !0,
                                  children: " (-".concat(x.discountPercentage, "%)"),
                              }),
                          ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(s.nn4, { children: u.intl.format(u.t["6C36MF"], { price: b }) }),
                              (0, a.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: i()({ [m.priceStrikethrough]: g }, p),
                                  children: b,
                              }),
                          ],
                      });
        return (0, a.jsxs)("div", {
            className: i()({ [m.discountBackgroundColor]: g }, m.container, p),
            children: [
                "tooltip" === r
                    ? (0, a.jsx)(l.u, {
                          text: u.intl.string(u.t.MPFyJ5),
                          "aria-label": u.intl.string(u.t.X3Ekj8),
                          children: (0, a.jsx)(s.SrA, {
                              size: d,
                              color: "currentColor",
                              className: m.icon,
                          }),
                      })
                    : "default" === r
                      ? (0, a.jsx)(s.SrA, {
                            size: d,
                            color: "currentColor",
                            className: m.icon,
                        })
                      : null,
                (0, a.jsx)(s.Text, {
                    variant: f,
                    color: "currentColor",
                    lineClamp: 1,
                    children: v,
                }),
                g &&
                    (0, a.jsxs)(s.Text, {
                        variant: f,
                        className: m.discountPill,
                        lineClamp: 1,
                        children: [
                            (0, a.jsx)(s.nn4, { children: u.intl.format(u.t.rItDbx, { discountOfferAmount: h }) }),
                            (0, a.jsx)("span", {
                                "aria-hidden": !0,
                                children: u.intl.formatToPlainString(u.t.AYcXGW, { discountOfferAmount: h }),
                            }),
                        ],
                    }),
            ],
        });
    },
    x = (e) => {
        let { orbAmount: t, className: n, variant: r = "text-md/semibold" } = e;
        return (0, a.jsxs)("div", {
            className: i()(m.container, n),
            children: [
                (0, a.jsx)(s.aQr, {
                    color: "currentColor",
                    size: "sm",
                    className: m.icon,
                }),
                (0, a.jsxs)(s.Text, {
                    variant: r,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, a.jsx)(s.nn4, { children: u.intl.format(u.t["a/Y8PK"], { orbAmount: t }) }),
                        (0, a.jsx)("span", {
                            "aria-hidden": !0,
                            children: t,
                        }),
                    ],
                }),
            ],
        });
    };
