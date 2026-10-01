n.d(e, { A: () => j });
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
    f = n(955527);
function L(t) {
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
function g(t) {
    let { canUsePremiumCollectibles: e, hasLostAccess: n, nitroChurnCTA: r, nitroJoinCTA: i } = t;
    return e
        ? (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: E.intl.string(E.t.hmyYK8) })
        : n
          ? (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: r })
          : (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: i });
}
function p() {
    return (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", children: E.intl.string(E.t.fEGjVQ) });
}
let j = function (t) {
    let { user: e, previewSkuId: n, nitroChurnCTA: r, nitroJoinCTA: c } = t,
        d = (0, a.bG)([u.default], () => u.default.locale),
        { product: E, purchase: j } = (0, A.A)(n),
        _ = m.Ay.canUseCollectibles(e),
        y = (0, x.G0)(E),
        C = (0, x.gA)(j),
        P = !_ && C,
        T = null != j && !P,
        k = (0, h.Sw)(j),
        v = (0, h.VG)(E);
    return null == E && null == j
        ? null
        : (0, l.jsx)("div", {
              className: i()(f.kL, !T && f.D7),
              children: (0, l.jsxs)("div", {
                  className: f.WH,
                  children: [
                      (0, l.jsx)(o.D, {
                          color: "text-strong",
                          variant: "text-sm/semibold",
                          children: (0, s.isEmpty)(k) ? v : k,
                      }),
                      T
                          ? (0, l.jsx)(L, { purchase: j, isPremiumPurchase: C, locale: d })
                          : y || C
                            ? (0, l.jsx)(g, {
                                  canUsePremiumCollectibles: _,
                                  hasLostAccess: P,
                                  nitroChurnCTA: r,
                                  nitroJoinCTA: c,
                              })
                            : (0, l.jsx)(p, {}),
                  ],
              }),
          });
};
