n.d(t, { x: () => A });
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
    p = n(580630),
    m = n(993408),
    C = n(818348),
    h = n(375708),
    E = n(594387),
    f = n(958214);
function A(e) {
    let {
        priceAmount: t,
        priceCurrency: n,
        discountIconConfig: i,
        className: r,
        discount: a = m.rr,
        variant: s = "text-md/semibold",
    } = e;
    return n === C.Yr.DISCORD_ORB
        ? (0, l.jsx)(P, { orbAmount: t, className: r, discount: a, variant: s })
        : (0, l.jsx)(y, {
              priceAmount: t,
              priceCurrency: n,
              discountIconConfig: i,
              className: r,
              discount: a,
              variant: s,
          });
}
function S(e) {
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
function y(e) {
    let {
            priceAmount: t,
            priceCurrency: n,
            discountIconConfig: i,
            className: a,
            discount: s = m.rr,
            variant: o = "heading-md/semibold",
        } = e,
        d = (0, p.RS)(t, n),
        C =
            s !== m.rr && s.discountPercentage >= m.es
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, {
                              children: h.intl.format(h.t.niC6DK, {
                                  price: d,
                                  discountPercentage: s.discountPercentage,
                              }),
                          }),
                          (0, l.jsx)("span", { "aria-hidden": !0, children: d }),
                          (0, l.jsx)("span", {
                              className: f.id,
                              "aria-hidden": !0,
                              children: ` (-${s.discountPercentage}%)`,
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.A, { children: h.intl.format(h.t["6C36MF"], { price: d }) }),
                          (0, l.jsx)("span", { "aria-hidden": !0, className: a, children: d }),
                      ],
                  });
    return (0, l.jsxs)("div", {
        className: r()(f.kL, a),
        children: [
            null != i ? (0, l.jsx)(S, { config: i }) : null,
            (0, l.jsx)(c.E, { variant: o, color: "currentColor", lineClamp: 1, children: C }),
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
