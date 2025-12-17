t.d(n, { F: () => f });
var r = t(54381);
t(473749);
var l = t(120356),
    i = t.n(l),
    a = t(28664),
    o = t(481060),
    s = t(937615),
    c = t(884697),
    u = t(231338),
    d = t(388032),
    p = t(492436);
let f = (e) => {
        let {
            price: n,
            nitroIconType: t,
            nitroIconSize: l = "md",
            className: i,
            discountOfferAmount: a,
            discount: o = c.f_,
            variant: s = "text-md/semibold",
        } = e;
        return n.currency === u.pK.DISCORD_ORB
            ? (0, r.jsx)(b, {
                  orbAmount: n.amount,
                  className: i,
                  variant: s,
              })
            : (0, r.jsx)(v, {
                  price: n,
                  nitroIconType: t,
                  nitroIconSize: l,
                  className: i,
                  discountOfferAmount: a,
                  discount: o,
                  variant: s,
              });
    },
    v = (e) => {
        let {
                price: { amount: n, currency: t },
                nitroIconType: l,
                nitroIconSize: u = "md",
                className: f,
                discountOfferAmount: v,
                discount: b = c.f_,
                variant: g = "heading-md/semibold",
            } = e,
            h = null != v,
            m = (0, s.qr)(n, t),
            j =
                b !== c.f_ && b.discountPercentage >= 5 && !h
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, {
                                  children: d.intl.format(d.t.niC6DK, {
                                      price: m,
                                      discountPercentage: b.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: m,
                              }),
                              (0, r.jsx)("span", {
                                  className: p.discount,
                                  "aria-hidden": !0,
                                  children: " (-".concat(b.discountPercentage, "%)"),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, { children: d.intl.format(d.t["6C36MF"], { price: m }) }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: i()({ [p.priceStrikethrough]: h }, f),
                                  children: m,
                              }),
                          ],
                      });
        return (0, r.jsxs)("div", {
            className: i()({ [p.discountBackgroundColor]: h }, p.container, f),
            children: [
                "tooltip" === l
                    ? (0, r.jsx)(a.u, {
                          text: d.intl.string(d.t.MPFyJ5),
                          "aria-label": d.intl.string(d.t.X3Ekj8),
                          children: (0, r.jsx)(o.SrA, {
                              size: u,
                              color: "currentColor",
                              className: p.icon,
                          }),
                      })
                    : "default" === l
                      ? (0, r.jsx)(o.SrA, {
                            size: u,
                            color: "currentColor",
                            className: p.icon,
                        })
                      : null,
                (0, r.jsx)(o.Text, {
                    variant: g,
                    color: "currentColor",
                    lineClamp: 1,
                    children: j,
                }),
                h &&
                    (0, r.jsxs)(o.Text, {
                        variant: g,
                        className: p.discountPill,
                        lineClamp: 1,
                        children: [
                            (0, r.jsx)(o.nn4, { children: d.intl.format(d.t.rItDbx, { discountOfferAmount: v }) }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: d.intl.formatToPlainString(d.t.AYcXGW, { discountOfferAmount: v }),
                            }),
                        ],
                    }),
            ],
        });
    },
    b = (e) => {
        let { orbAmount: n, className: t, variant: l = "text-md/semibold" } = e;
        return (0, r.jsxs)("div", {
            className: i()(p.container, t),
            children: [
                (0, r.jsx)(o.aQr, {
                    color: "currentColor",
                    size: "sm",
                    className: p.icon,
                }),
                (0, r.jsxs)(o.Text, {
                    variant: l,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(o.nn4, { children: d.intl.format(d.t["a/Y8PK"], { orbAmount: n }) }),
                        (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            children: n,
                        }),
                    ],
                }),
            ],
        });
    };
