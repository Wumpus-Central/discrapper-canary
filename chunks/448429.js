n.d(e, { A: () => p });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    s = n(435558),
    a = n(17928),
    o = n(297264),
    c = n(834730),
    u = n(773669),
    d = n(58703),
    m = n(158045),
    x = n(993408),
    A = n(821701),
    h = n(536572),
    E = n(375708),
    L = n(72918);
function j(t) {
    let { purchase: e, isPremiumPurchase: n, locale: r } = t,
        i = null != e.expiresAt ? (0, d.Tf)(new Date(), e.expiresAt) : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != i &&
                (0, l.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: E.intl.format(E.t.Io7ozn, { days: i.days.toString() }),
                }),
            (0, l.jsxs)(c.E, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: [
                    E.intl.format(E.t.gW9R4B, {
                        date: e.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" }),
                    }),
                    null != e.expiresAt &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("br", {}),
                                E.intl.format(E.t.eZSTa5, {
                                    date: e.expiresAt.toLocaleDateString(r, {
                                        minute: "numeric",
                                        hour: "numeric",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            n &&
                (0, l.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: E.intl.string(E.t.nKdAlO),
                }),
        ],
    });
}
function f(t) {
    let { canUsePremiumCollectibles: e, hasLostAccess: n, nitroChurnCTA: r, nitroJoinCTA: i } = t;
    return e
        ? (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: E.intl.string(E.t.hmyYK8) })
        : n
          ? (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: r })
          : (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: i });
}
function g() {
    return (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: E.intl.string(E.t.fEGjVQ) });
}
let p = function (t) {
    let { user: e, previewSkuId: n, nitroChurnCTA: r, nitroJoinCTA: c } = t,
        d = (0, a.bG)([u.default], () => u.default.locale),
        { product: E, purchase: p } = (0, A.A)(n),
        y = m.Ay.canUseCollectibles(e),
        C = (0, x.G0)(E),
        _ = (0, x.gA)(p),
        P = !y && _,
        T = null != p && !P,
        O = (0, h.Sw)(p),
        v = (0, h.VG)(E);
    return null == E && null == p
        ? null
        : (0, l.jsx)("div", {
              className: i()(L.kL, !T && L.D7),
              children: (0, l.jsxs)("div", {
                  className: L.WH,
                  children: [
                      (0, l.jsx)(o.D, {
                          color: "text-strong",
                          variant: "text-sm/semibold",
                          children: (0, s.isEmpty)(O) ? v : O,
                      }),
                      T
                          ? (0, l.jsx)(j, { purchase: p, isPremiumPurchase: _, locale: d })
                          : C || _
                            ? (0, l.jsx)(f, {
                                  canUsePremiumCollectibles: y,
                                  hasLostAccess: P,
                                  nitroChurnCTA: r,
                                  nitroJoinCTA: c,
                              })
                            : (0, l.jsx)(g, {}),
                  ],
              }),
          });
};
