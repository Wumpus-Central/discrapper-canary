n.d(t, { x: () => A });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(403581),
    s = n(866665),
    o = n(278416),
    u = n(140735),
    c = n(834730),
    d = n(318254),
    p = n(580630),
    m = n(993408),
    C = n(818348),
    h = n(375708),
    E = n(594387),
    f = n(751070);
function A(e) {
    let {
        priceAmount: t,
        priceCurrency: n,
        discountIconConfig: i,
        className: r,
        discountOfferAmount: a,
        discount: s = m.rr,
        variant: o = "text-md/semibold",
    } = e;
    return n === C.Yr.DISCORD_ORB
        ? (0, l.jsx)(P, { orbAmount: t, className: r, discount: s, variant: o })
        : (0, l.jsx)(S, {
              priceAmount: t,
              priceCurrency: n,
              discountIconConfig: i,
              className: r,
              discountOfferAmount: a,
              discount: s,
              variant: o,
          });
}
function y(e) {
    let { config: t } = e,
        n = t.size ?? "md";
    switch (t.source) {
        case m.D0.NITRO: {
            let e = (0, l.jsx)(a.t, { size: n, color: "currentColor", className: f.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(s.m, {
                    text: h.intl.string(h.t.MPFyJ5),
                    "aria-label": h.intl.string(h.t.X3Ekj8),
                    children: e,
                });
            return e;
        }
        case m.D0.THIRDPARTY: {
            let e = (0, l.jsx)(o.g, { size: n, color: "currentColor", className: f.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(s.m, { text: h.intl.string(E.default.DePOcS), children: e });
            return e;
        }
        default:
            return t.source, null;
    }
}
function S(e) {
    let {
            priceAmount: t,
            priceCurrency: n,
            discountIconConfig: i,
            className: a,
            discountOfferAmount: s,
            discount: o = m.rr,
            variant: d = "heading-md/semibold",
        } = e,
        C = null != s,
        E = (0, p.RS)(t, n),
        A =
            o !== m.rr && o.discountPercentage >= m.es && !C
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, {
                              children: h.intl.format(h.t.niC6DK, {
                                  price: E,
                                  discountPercentage: o.discountPercentage,
                              }),
                          }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: E }),
                          (0, l.jsx)("span", {
                              className: f.id,
                              "aria-hidden": !0,
                              children: ` (-${o.discountPercentage}%)`,
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, { children: h.intl.format(h.t["6C36MF"], { price: E }) }),
                          (0, l.jsx)("span", { "aria-hidden": !0, className: r()({ [f.rN]: C }, a), children: E }),
                      ],
                  });
    return (0, l.jsxs)("div", {
        className: r()({ [f.nn]: C }, f.kL, a),
        children: [
            null != i ? (0, l.jsx)(y, { config: i }) : null,
            (0, l.jsx)(c.E, { variant: d, color: "currentColor", lineClamp: 1, children: A }),
            C &&
                (0, l.jsxs)(c.E, {
                    variant: d,
                    className: f.NM,
                    lineClamp: 1,
                    children: [
                        (0, l.jsx)(u.A, { children: h.intl.format(h.t.rItDbx, { discountOfferAmount: s }) }),
                        (0, l.jsx)("span", {
                            "aria-hidden": !0,
                            children: h.intl.formatToPlainString(h.t.AYcXGW, { discountOfferAmount: s }),
                        }),
                    ],
                }),
        ],
    });
}
function P(e) {
    let { orbAmount: t, className: n, discount: i = m.rr, variant: a = "text-md/semibold" } = e,
        s =
            i !== m.rr && i.discountPercentage >= m.es
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, {
                              children: h.intl.format(h.t.ckguyq, {
                                  orbAmount: t,
                                  discountPercentage: i.discountPercentage,
                              }),
                          }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                          (0, l.jsx)("span", {
                              className: f.id,
                              "aria-hidden": !0,
                              children: ` (-${i.discountPercentage}%)`,
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, { children: h.intl.format(h.t["a/Y8PK"], { orbAmount: t }) }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: t }),
                      ],
                  });
    return (0, l.jsxs)("div", {
        className: r()(f.kL, n),
        children: [
            (0, l.jsx)(d.C, { color: "currentColor", size: "sm", className: f.Kk }),
            (0, l.jsx)(c.E, { variant: a, color: "currentColor", lineClamp: 1, children: s }),
        ],
    });
}
