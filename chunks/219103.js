var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(403581),
    s = n(866665),
    o = n(278416),
    u = n(140735),
    c = n(834730),
    d = n(318254),
    m = n(580630),
    p = n(993408),
    h = n(818348),
    C = n(792996),
    f = n(337091),
    E = n(967957);
function S(e) {
    let { config: t } = e,
        n = t.size ?? "md";
    switch (t.source) {
        case p.D0.NITRO: {
            let e = (0, l.jsx)(a.NitroWheelIcon, { size: n, color: "currentColor", className: E.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(s.m, {
                    text: C.intl.string(C.t.MPFyJ5),
                    "aria-label": C.intl.string(C.t.X3Ekj8),
                    children: e,
                });
            return e;
        }
        case p.D0.THIRDPARTY: {
            let e = (0, l.jsx)(o.TagIcon, { size: n, color: "currentColor", className: E.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(s.m, { text: C.intl.string(f.default.DePOcS), children: e });
            return e;
        }
        default:
            return (t.source, null);
    }
}
function g(e) {
    let {
            priceAmount: t,
            priceCurrency: n,
            discountIconConfig: i,
            className: a,
            discount: s = p.rr,
            variant: o = "heading-sm/semibold",
        } = e,
        d = (0, m.RS)(t, n),
        h =
            s !== p.rr && s.discountPercentage >= 5
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, {
                              children: C.intl.format(C.t.niC6DK, {
                                  price: d,
                                  discountPercentage: s.discountPercentage,
                              }),
                          }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: d }),
                          (0, l.jsx)("span", {
                              className: E.id,
                              "aria-hidden": !0,
                              children: ` (-${s.discountPercentage}%)`,
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, { children: C.intl.format(C.t["6C36MF"], { price: d }) }),
                          (0, l.jsx)("span", { "aria-hidden": !0, className: a, children: d }),
                      ],
                  });
    return (0, l.jsxs)("div", {
        className: r()(E.kL, a),
        children: [
            null != i ? (0, l.jsx)(S, { config: i }) : null,
            (0, l.jsx)(c.E, { variant: o, color: "currentColor", lineClamp: 1, children: h }),
        ],
    });
}
function I(e) {
    let { orbAmount: t, className: n, discount: i = p.rr, variant: a = "body-md/semibold" } = e,
        s =
            i !== p.rr && i.discountPercentage >= 5
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, {
                              children: C.intl.format(C.t.ckguyq, {
                                  orbAmount: t,
                                  discountPercentage: i.discountPercentage,
                              }),
                          }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                          (0, l.jsx)("span", {
                              className: E.id,
                              "aria-hidden": !0,
                              children: ` (-${i.discountPercentage}%)`,
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, { children: C.intl.format(C.t["a/Y8PK"], { orbAmount: t }) }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                      ],
                  });
    return (0, l.jsxs)("div", {
        className: r()(E.kL, n),
        children: [
            (0, l.jsx)(d.OrbsIcon, { color: "currentColor", size: "sm", className: E.Kk }),
            (0, l.jsx)(c.E, { variant: a, color: "currentColor", lineClamp: 1, children: s }),
        ],
    });
}
n.d(
    t,
    {},
    {
        x: function (e) {
            let {
                priceAmount: t,
                priceCurrency: n,
                discountIconConfig: i,
                className: r,
                discount: a = p.rr,
                variant: s = "body-md/semibold",
            } = e;
            return n === h.Yr.DISCORD_ORB
                ? (0, l.jsx)(I, { orbAmount: t, className: r, discount: a, variant: s })
                : (0, l.jsx)(g, {
                      priceAmount: t,
                      priceCurrency: n,
                      discountIconConfig: i,
                      className: r,
                      discount: a,
                      variant: s,
                  });
        },
    },
);
