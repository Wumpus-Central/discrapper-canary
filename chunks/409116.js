t.d(n, { F: () => f });
var r = t(951288);
t(647438);
var l = t(120356),
    i = t.n(l),
    a = t(28664),
    o = t(481060),
    s = t(937615),
    u = t(884697),
    c = t(231338),
    d = t(388032),
    v = t(239051);
let f = (e) => {
        let {
            price: n,
            nitroIconType: t,
            nitroIconSize: l = "md",
            className: i,
            discountOfferAmount: a,
            discount: o = u.f_,
            variant: s = "text-md/semibold",
        } = e;
        return n.currency === c.pK.DISCORD_ORB
            ? (0, r.jsx)(b, {
                  orbAmount: n.amount,
                  className: i,
                  variant: s,
              })
            : (0, r.jsx)(p, {
                  price: n,
                  nitroIconType: t,
                  nitroIconSize: l,
                  className: i,
                  discountOfferAmount: a,
                  discount: o,
                  variant: s,
              });
    },
    p = (e) => {
        let {
                price: { amount: n, currency: t },
                nitroIconType: l,
                nitroIconSize: c = "md",
                className: f,
                discountOfferAmount: p,
                discount: b = u.f_,
                variant: g = "heading-md/semibold",
            } = e,
            m = null != p,
            x = (0, s.qr)(n, t),
            h =
                b !== u.f_ && b.discountPercentage >= 5 && !m
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, {
                                  children: d.intl.format(d.t.niC6DK, {
                                      price: x,
                                      discountPercentage: b.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: x,
                              }),
                              (0, r.jsxs)(o.Text, {
                                  variant: g,
                                  color: "text-feedback-positive",
                                  className: v.discount,
                                  "aria-hidden": !0,
                                  children: ["(-", b.discountPercentage, "%)"],
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, { children: d.intl.format(d.t["6C36MF"], { price: x }) }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: i()({ [v.priceStrikethrough]: m }, f),
                                  children: x,
                              }),
                          ],
                      });
        return (0, r.jsxs)(o.Text, {
            variant: g,
            className: i()({ [v.discountBackgroundColor]: m }, v.container, f),
            children: [
                "tooltip" === l
                    ? (0, r.jsx)(a.u, {
                          text: d.intl.string(d.t.MPFyJ5),
                          "aria-label": d.intl.string(d.t.X3Ekj8),
                          children: (0, r.jsx)(o.SrA, {
                              size: c,
                              color: "currentColor",
                              className: v.icon,
                          }),
                      })
                    : "default" === l
                      ? (0, r.jsx)(o.SrA, {
                            size: c,
                            color: "currentColor",
                            className: v.icon,
                        })
                      : null,
                h,
                m &&
                    (0, r.jsxs)(o.Text, {
                        variant: g,
                        className: v.discountPill,
                        children: [
                            (0, r.jsx)(o.nn4, { children: d.intl.format(d.t.rItDbx, { discountOfferAmount: p }) }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: d.intl.formatToPlainString(d.t.AYcXGW, { discountOfferAmount: p }),
                            }),
                        ],
                    }),
            ],
        });
    },
    b = (e) => {
        let { orbAmount: n, className: t, variant: l = "text-md/semibold" } = e;
        return (0, r.jsxs)(o.Text, {
            variant: l,
            className: i()(v.container, t),
            children: [
                (0, r.jsx)(o.nn4, { children: d.intl.format(d.t["a/Y8PK"], { orbAmount: n }) }),
                (0, r.jsx)(o.aQr, {
                    color: "currentColor",
                    size: "sm",
                    className: v.icon,
                }),
                (0, r.jsx)("span", {
                    "aria-hidden": !0,
                    children: n,
                }),
            ],
        });
    };
