n.d(t, { x: () => _ });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(990078),
    s = n(403581),
    o = n(140735),
    u = n(834730),
    d = n(318254),
    c = n(580630),
    C = n(993408),
    p = n(818348),
    m = n(985018);
n(594387);
var h = n(751070);
let _ = (e) => {
        let {
            priceAmount: t,
            priceCurrency: n,
            discountIconConfig: r,
            className: i,
            discountOfferAmount: a,
            discount: s = C.rr,
            variant: o = "text-md/semibold",
        } = e;
        return n === p.Yr.DISCORD_ORB
            ? (0, l.jsx)(g, { orbAmount: t, className: i, variant: o })
            : (0, l.jsx)(A, {
                  priceAmount: t,
                  priceCurrency: n,
                  discountIconConfig: r,
                  className: i,
                  discountOfferAmount: a,
                  discount: s,
                  variant: o,
              });
    },
    E = (e) => {
        let { config: t } = e,
            n = t.size ?? "md";
        if (t.source === C.D0.NITRO) {
            let e = (0, l.jsx)(s.t, { size: n, color: "currentColor", className: h.Kk });
            return "tooltip" === t.displayMode
                ? (0, l.jsx)(a.m, {
                      text: m.intl.string(m.t.MPFyJ5),
                      "aria-label": m.intl.string(m.t.X3Ekj8),
                      children: e,
                  })
                : e;
        }
        return t.source === C.D0.THIRDPARTY, null;
    },
    A = (e) => {
        let {
                priceAmount: t,
                priceCurrency: n,
                discountIconConfig: r,
                className: a,
                discountOfferAmount: s,
                discount: d = C.rr,
                variant: p = "heading-md/semibold",
            } = e,
            _ = null != s,
            A = (0, c.RS)(t, n),
            g =
                d !== C.rr && d.discountPercentage >= 5 && !_
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(o.A, {
                                  children: m.intl.format(m.t.niC6DK, {
                                      price: A,
                                      discountPercentage: d.discountPercentage,
                                  }),
                              }),
                              (0, l.jsx)("span", { "aria-hidden": !0, children: A }),
                              (0, l.jsx)("span", {
                                  className: h.id,
                                  "aria-hidden": !0,
                                  children: ` (-${d.discountPercentage}%)`,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(o.A, { children: m.intl.format(m.t["6C36MF"], { price: A }) }),
                              (0, l.jsx)("span", { "aria-hidden": !0, className: i()({ [h.rN]: _ }, a), children: A }),
                          ],
                      });
        return (0, l.jsxs)("div", {
            className: i()({ [h.nn]: _ }, h.kL, a),
            children: [
                null != r ? (0, l.jsx)(E, { config: r }) : null,
                (0, l.jsx)(u.E, { variant: p, color: "currentColor", lineClamp: 1, children: g }),
                _ &&
                    (0, l.jsxs)(u.E, {
                        variant: p,
                        className: h.NM,
                        lineClamp: 1,
                        children: [
                            (0, l.jsx)(o.A, { children: m.intl.format(m.t.rItDbx, { discountOfferAmount: s }) }),
                            (0, l.jsx)("span", {
                                "aria-hidden": !0,
                                children: m.intl.formatToPlainString(m.t.AYcXGW, { discountOfferAmount: s }),
                            }),
                        ],
                    }),
            ],
        });
    },
    g = (e) => {
        let { orbAmount: t, className: n, variant: r = "text-md/semibold" } = e;
        return (0, l.jsxs)("div", {
            className: i()(h.kL, n),
            children: [
                (0, l.jsx)(d.C, { color: "currentColor", size: "sm", className: h.Kk }),
                (0, l.jsxs)(u.E, {
                    variant: r,
                    color: "currentColor",
                    lineClamp: 1,
                    children: [
                        (0, l.jsx)(o.A, { children: m.intl.format(m.t["a/Y8PK"], { orbAmount: t }) }),
                        (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                    ],
                }),
            ],
        });
    };
