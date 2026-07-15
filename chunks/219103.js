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
    A = n(594387),
    E = n(751070);
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
            let e = (0, l.jsx)(s.t, { size: n, color: "currentColor", className: E.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(a.m, {
                    text: C.intl.string(C.t.MPFyJ5),
                    "aria-label": C.intl.string(C.t.X3Ekj8),
                    children: e,
                });
            return e;
        }
        case m.D0.THIRDPARTY: {
            let e = (0, l.jsx)(o.g, { size: n, color: "currentColor", className: E.Kk });
            if ("tooltip" === t.displayMode)
                return (0, l.jsx)(a.m, { text: C.intl.string(A.default.DePOcS), children: e });
            return e;
        }
        default:
            return t.source, null;
    }
}
let S = (e) => {
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
        A = (0, p.RS)(t, n),
        f =
            o !== m.rr && o.discountPercentage >= m.es && !h
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, {
                              children: C.intl.format(C.t.niC6DK, {
                                  price: A,
                                  discountPercentage: o.discountPercentage,
                              }),
                          }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: A }),
                          (0, l.jsx)("span", {
                              className: E.id,
                              "aria-hidden": !0,
                              children: ` (-${o.discountPercentage}%)`,
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, { children: C.intl.format(C.t["6C36MF"], { price: A }) }),
                          (0, l.jsx)("span", { "aria-hidden": !0, className: r()({ [E.rN]: h }, a), children: A }),
                      ],
                  });
    return (0, l.jsxs)("div", {
        className: r()({ [E.nn]: h }, E.kL, a),
        children: [
            null != i ? (0, l.jsx)(y, { config: i }) : null,
            (0, l.jsx)(c.E, { variant: d, color: "currentColor", lineClamp: 1, children: f }),
            h &&
                (0, l.jsxs)(c.E, {
                    variant: d,
                    className: E.NM,
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
    let { orbAmount: t, className: n, discount: i = m.rr, variant: a = "text-md/semibold" } = e,
        s =
            i !== m.rr && i.discountPercentage >= m.es
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
            (0, l.jsx)(d.C, { color: "currentColor", size: "sm", className: E.Kk }),
            (0, l.jsx)(c.E, { variant: a, color: "currentColor", lineClamp: 1, children: s }),
        ],
    });
}
