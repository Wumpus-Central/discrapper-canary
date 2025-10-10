n.d(t, { F: () => f });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(28664),
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
            className: i,
            discountOfferAmount: a,
            discount: o = c.f_,
            variant: s = "heading-md/semibold",
        } = e;
        return t.currency === u.pK.DISCORD_ORB
            ? (0, r.jsx)(y, {
                  orbAmount: t.amount,
                  className: i,
              })
            : (0, r.jsx)(b, {
                  price: t,
                  nitroIconType: n,
                  nitroIconSize: l,
                  className: i,
                  discountOfferAmount: a,
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
                variant: m = "heading-md/semibold",
            } = e,
            O = null != b,
            g = (0, s.qr)(t, n),
            j =
                y !== c.f_ && y.discountPercentage >= 5 && !O
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
                                  variant: m,
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
                                  className: i()({ [p.priceStrikethrough]: O }, f),
                                  children: g,
                              }),
                          ],
                      });
        return (0, r.jsxs)(o.Text, {
            variant: m,
            className: i()({ [p.discountBackgroundColor]: O }, p.container, f),
            children: [
                "tooltip" === l
                    ? (0, r.jsx)(a.u, {
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
                j,
                O &&
                    (0, r.jsxs)(o.X6q, {
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
            className: i()(p.container, n),
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
