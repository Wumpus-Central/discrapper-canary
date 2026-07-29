l.d(e, { A: () => p });
var n = l(477900);
l(582128);
var r = l(503698),
    i = l.n(r),
    s = l(435558),
    a = l(17928),
    o = l(297264),
    c = l(834730),
    u = l(773669),
    d = l(58703),
    m = l(428262),
    x = l(993408),
    A = l(821701),
    h = l(536572),
    E = l(375708),
    L = l(72918);
function j(t) {
    let { purchase: e, isPremiumPurchase: l, locale: r } = t,
        i = null != e.expiresAt ? (0, d.Tf)(new Date(), e.expiresAt) : null;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != i &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: E.intl.format(E.t.Io7ozn, { days: i.days.toString() }),
                }),
            (0, n.jsxs)(c.E, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: [
                    E.intl.format(E.t.gW9R4B, {
                        date: e.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" }),
                    }),
                    null != e.expiresAt &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("br", {}),
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
            l &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: E.intl.string(E.t.nKdAlO),
                }),
        ],
    });
}
function f(t) {
    let { canUsePremiumCollectibles: e, hasLostAccess: l, nitroChurnCTA: r, nitroJoinCTA: i } = t;
    return e
        ? (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: E.intl.string(E.t.hmyYK8) })
        : l
          ? (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: r })
          : (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: i });
}
function g() {
    return (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: E.intl.string(E.t.fEGjVQ) });
}
let p = function (t) {
    let { user: e, previewSkuId: l, nitroChurnCTA: r, nitroJoinCTA: c } = t,
        d = (0, a.bG)([u.default], () => u.default.locale),
        { product: E, purchase: p } = (0, A.A)(l),
        y = m.Ay.canUseCollectibles(e),
        C = (0, x.G0)(E),
        _ = (0, x.gA)(p),
        P = !y && _,
        T = null != p && !P,
        O = (0, h.Sw)(p),
        v = (0, h.VG)(E);
    return null == E && null == p
        ? null
        : (0, n.jsx)("div", {
              className: i()(L.kL, !T && L.D7),
              children: (0, n.jsxs)("div", {
                  className: L.WH,
                  children: [
                      (0, n.jsx)(o.D, {
                          color: "text-strong",
                          variant: "text-sm/semibold",
                          children: (0, s.isEmpty)(O) ? v : O,
                      }),
                      T
                          ? (0, n.jsx)(j, { purchase: p, isPremiumPurchase: _, locale: d })
                          : C || _
                            ? (0, n.jsx)(f, {
                                  canUsePremiumCollectibles: y,
                                  hasLostAccess: P,
                                  nitroChurnCTA: r,
                                  nitroJoinCTA: c,
                              })
                            : (0, n.jsx)(g, {}),
                  ],
              }),
          });
};
