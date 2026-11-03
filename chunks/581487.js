n.d(t, { k: () => s });
var l = n(477900);
n(582128);
var i = n(834730),
    r = n(821707),
    a = n(1909);
function s(e) {
    let { normalPrice: t, discountedPrice: n, discountPercent: s, hasNitroOffer: o, wrap: u, fallback: c } = e;
    return o && null != n
        ? (0, l.jsx)(r.A, { discountedPrice: n, normalPrice: t, wrap: u })
        : null != s && null != n
          ? (0, l.jsxs)("div", {
                className: a._k,
                children: [
                    (0, l.jsx)(i.E, { variant: "body-md/medium", className: a.Jb, children: t }),
                    (0, l.jsx)(i.E, { variant: "body-md/semibold", color: "text-strong", children: n }),
                    (0, l.jsx)(i.E, { variant: "body-md/semibold", className: a.Fi, children: s }),
                ],
            })
          : (c ?? (0, l.jsx)(i.E, { variant: "body-md/semibold", color: "text-strong", children: t }));
}
