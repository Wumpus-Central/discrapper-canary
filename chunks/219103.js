n.d(t, { x: () => f });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(990078),
    s = n(403581),
    o = n(278416),
    u = n(140735),
    c = n(834730),
    d = n(318254),
    p = n(580630),
    m = n(993408),
    h = n(818348),
    C = n(375708),
    E = n(594387),
    A = n(751070);
function f(e) {
    let {
        priceAmount: t,
        priceCurrency: n,
        discountIconConfig: i,
        className: r,
        discountOfferAmount: a,
        discount: s = m.rr,
        variant: o = "text-md/semibold",
    } = e;
    return n === h.Yr.DISCORD_ORB
        ? (0, l.jsx)(P, { orbAmount: t, className: r, variant: o })
        : (0, l.jsx)(y, {
              priceAmount: t,
              priceCurrency: n,
              discountIconConfig: i,
              className: r,
              discountOfferAmount: a,
              discount: s,
              variant: o,
          });
}
function S(e) {
    let { config: t } = e,
        n = t.size ?? "md";
    switch (t.source) {
        case m.D0.NITRO: {
            let e = (0, l.jsx)(s.t, { size: n, color: "currentColor", className: A.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(a.m, {
                    text: C.intl.string(C.t.MPFyJ5),
                    "aria-label": C.intl.string(C.t.X3Ekj8),
                    children: e,
                });
            return e;
        }
        case m.D0.THIRDPARTY: {
            let e = (0, l.jsx)(o.g, { size: n, color: "currentColor", className: A.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(a.m, { text: C.intl.string(E.default.DePOcS), children: e });
            return e;
        }
        default:
            return t.source, null;
    }
}
let y = (e) => {
    let {
            priceAmount: t,
            priceCurrency: n,
            discountIconConfig: i,
            className: a,
            discountOfferAmount: s,
            discount: o = m.rr,
            variant: d = "heading-md/semibold",
        } = e,
        h = null != s,
        E = (0, p.RS)(t, n),
        f =
            o !== m.rr && o.discountPercentage >= 5 && !h
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, {
                              children: C.intl.format(C.t.niC6DK, {
                                  price: E,
                                  discountPercentage: o.discountPercentage,
                              }),
                          }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: E }),
                          (0, l.jsx)("span", {
                              className: A.id,
                              "aria-hidden": !0,
                              children: ` (-${o.discountPercentage}%)`,
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, { children: C.intl.format(C.t["6C36MF"], { price: E }) }),
                          (0, l.jsx)("span", { "aria-hidden": !0, className: r()({ [A.rN]: h }, a), children: E }),
                      ],
                  });
    return (0, l.jsxs)("div", {
        className: r()({ [A.nn]: h }, A.kL, a),
        children: [
            null != i ? (0, l.jsx)(S, { config: i }) : null,
            (0, l.jsx)(c.E, { variant: d, color: "currentColor", lineClamp: 1, children: f }),
            h &&
                (0, l.jsxs)(c.E, {
                    variant: d,
                    className: A.NM,
                    lineClamp: 1,
                    children: [
                        (0, l.jsx)(u.A, { children: C.intl.format(C.t.rItDbx, { discountOfferAmount: s }) }),
                        (0, l.jsx)("span", {
                            "aria-hidden": !0,
                            children: C.intl.formatToPlainString(C.t.AYcXGW, { discountOfferAmount: s }),
                        }),
                    ],
                }),
        ],
    });
};
function P(e) {
    let { orbAmount: t, className: n, variant: i = "text-md/semibold" } = e;
    return (0, l.jsxs)("div", {
        className: r()(A.kL, n),
        children: [
            (0, l.jsx)(d.C, { color: "currentColor", size: "sm", className: A.Kk }),
            (0, l.jsxs)(c.E, {
                variant: i,
                color: "currentColor",
                lineClamp: 1,
                children: [
                    (0, l.jsx)(u.A, { children: C.intl.format(C.t["a/Y8PK"], { orbAmount: t }) }),
                    (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                ],
            }),
        ],
    });
}
