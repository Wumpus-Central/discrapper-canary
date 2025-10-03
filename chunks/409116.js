n.d(t, { F: () => p });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(28664),
    o = n(481060),
    s = n(937615),
    c = n(884697),
    u = n(388032),
    d = n(239051);
let p = (e) => {
    let {
            price: { amount: t, currency: n },
            nitroIconType: l,
            nitroIconSize: p = "md",
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
                              children: u.intl.format(u.t.niC6DA, {
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
                              className: d.discount,
                              "aria-hidden": !0,
                              children: ["(-", y.discountPercentage, "%)"],
                          }),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.nn4, { children: u.intl.format(u.t["6C36MD"], { price: g }) }),
                          (0, r.jsx)("span", {
                              "aria-hidden": !0,
                              className: i()({ [d.priceStrikethrough]: O }, f),
                              children: g,
                          }),
                      ],
                  });
    return (0, r.jsxs)(o.Text, {
        variant: m,
        className: i()({ [d.discountBackgroundColor]: O }, d.container, f),
        children: [
            "tooltip" === l
                ? (0, r.jsx)(a.u, {
                      text: u.intl.string(u.t.MPFyJy),
                      "aria-label": u.intl.string(u.t.X3Ekj4),
                      children: (0, r.jsx)(o.SrA, {
                          size: p,
                          color: "currentColor",
                          className: d.nitroIcon,
                      }),
                  })
                : "default" === l
                  ? (0, r.jsx)(o.SrA, {
                        size: p,
                        color: "currentColor",
                        className: d.nitroIcon,
                    })
                  : null,
            j,
            O &&
                (0, r.jsxs)(o.X6q, {
                    variant: "heading-md/semibold",
                    className: d.discountPill,
                    children: [
                        (0, r.jsx)(o.nn4, { children: u.intl.format(u.t.rItDb2, { discountOfferAmount: b }) }),
                        (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            children: u.intl.formatToPlainString(u.t.AYcXGR, { discountOfferAmount: b }),
                        }),
                    ],
                }),
        ],
    });
};
