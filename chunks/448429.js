l.d(e, { A: () => g });
var r = l(627968);
l(64700);
var n = l(503698),
    s = l.n(n),
    i = l(735438),
    a = l(17928),
    o = l(834730),
    c = l(773669),
    d = l(58703),
    u = l(927578),
    m = l(993408),
    x = l(821701),
    A = l(536572),
    h = l(375708),
    E = l(425598);
let L = (t) => {
        let { purchase: e, isPremiumPurchase: l, locale: n } = t,
            s = null != e.expiresAt ? (0, d.Tf)(new Date(), e.expiresAt) : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                null != s &&
                    (0, r.jsx)(o.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: h.intl.format(h.t.Io7ozn, { days: s.days.toString() }),
                    }),
                (0, r.jsxs)(o.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        h.intl.format(h.t.gW9R4B, {
                            date: e.purchasedAt.toLocaleDateString(n, { month: "long", year: "numeric" }),
                        }),
                        null != e.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("br", {}),
                                    h.intl.format(h.t.eZSTa5, {
                                        date: e.expiresAt.toLocaleDateString(n, {
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
                    (0, r.jsx)(o.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: h.intl.string(h.t.nKdAlO),
                    }),
            ],
        });
    },
    j = (t) => {
        let { canUsePremiumCollectibles: e, hasLostAccess: l, nitroChurnCTA: n, nitroJoinCTA: s } = t;
        return e
            ? (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: h.intl.string(h.t.hmyYK8) })
            : l
              ? (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: n })
              : (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: s });
    },
    p = () =>
        (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: h.intl.string(h.t.fEGjVQ) }),
    g = (t) => {
        let { user: e, previewSkuId: l, nitroChurnCTA: n, nitroJoinCTA: d } = t,
            h = (0, a.bG)([c.default], () => c.default.locale),
            { product: g, purchase: y } = (0, x.A)(l),
            C = u.Ay.canUseCollectibles(e),
            _ = (0, m.G0)(g),
            T = (0, m.gA)(y),
            P = !C && T,
            O = null != y && !P,
            f = (0, A.Sw)(y),
            v = (0, A.VG)(g);
        return null == g && null == y
            ? null
            : (0, r.jsx)("div", {
                  className: s()(E.kL, !O && E.D7),
                  children: (0, r.jsxs)("div", {
                      className: E.WH,
                      children: [
                          (0, r.jsx)(o.E, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, i.isEmpty)(f) ? v : f,
                          }),
                          O
                              ? (0, r.jsx)(L, { purchase: y, isPremiumPurchase: T, locale: h })
                              : _ || T
                                ? (0, r.jsx)(j, {
                                      canUsePremiumCollectibles: C,
                                      hasLostAccess: P,
                                      nitroChurnCTA: n,
                                      nitroJoinCTA: d,
                                  })
                                : (0, r.jsx)(p, {}),
                      ],
                  }),
              });
    };
