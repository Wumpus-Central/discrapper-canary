n.d(t, { F: () => f });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    i = n(28664),
    o = n(481060),
    s = n(937615),
    c = n(884697),
    u = n(231338),
    d = n(388032),
    p = n(239051);
let f = (e) => {
        let {
            price: t,
            nitroIconType: n,
            nitroIconSize: l = "md",
            className: a,
            discountOfferAmount: i,
            discount: o = c.f_,
            variant: s = "heading-md/semibold",
        } = e;
        return t.currency === u.pK.DISCORD_ORB
            ? (0, r.jsx)(y, {
                  orbAmount: t.amount,
                  className: a,
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
                className: f,
                discountOfferAmount: b,
                discount: y = c.f_,
                variant: O = "heading-md/semibold",
            } = e,
            v = null != b,
            g = (0, s.qr)(t, n),
            m =
                y !== c.f_ && y.discountPercentage >= 5 && !v
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, {
                                  children: d.intl.format(d.t.niC6DA, {
                                      price: g,
                                      discountPercentage: y.discountPercentage,
                                  }),
                              }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  children: g,
                              }),
                              (0, r.jsxs)(o.Text, {
                                  variant: O,
                                  color: "text-feedback-positive",
                                  className: p.discount,
                                  "aria-hidden": !0,
                                  children: ["(-", y.discountPercentage, "%)"],
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.nn4, { children: d.intl.format(d.t["6C36MD"], { price: g }) }),
                              (0, r.jsx)("span", {
                                  "aria-hidden": !0,
                                  className: a()({ [p.priceStrikethrough]: v }, f),
                                  children: g,
                              }),
                          ],
                      });
        return (0, r.jsxs)(o.Text, {
            variant: O,
            className: a()({ [p.discountBackgroundColor]: v }, p.container, f),
            children: [
                "tooltip" === l
                    ? (0, r.jsx)(i.u, {
                          text: d.intl.string(d.t.MPFyJy),
                          "aria-label": d.intl.string(d.t.X3Ekj4),
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
                m,
                v &&
                    (0, r.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        className: p.discountPill,
                        children: [
                            (0, r.jsx)(o.nn4, { children: d.intl.format(d.t.rItDb2, { discountOfferAmount: b }) }),
                            (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                children: d.intl.formatToPlainString(d.t.AYcXGR, { discountOfferAmount: b }),
                            }),
                        ],
                    }),
            ],
        });
    },
    y = (e) => {
        let { orbAmount: t, className: n } = e;
        return (0, r.jsxs)(o.Text, {
            variant: "text-md/semibold",
            className: a()(p.container, n),
            children: [
                (0, r.jsx)(o.nn4, { children: d.intl.format(d.t["a/Y8PD"], { orbAmount: t }) }),
                (0, r.jsx)(o.aQr, {
                    color: "currentColor",
                    size: "sm",
                    className: p.icon,
                }),
                (0, r.jsx)("span", {
                    "aria-hidden": !0,
                    children: t,
                }),
            ],
        });
    };
