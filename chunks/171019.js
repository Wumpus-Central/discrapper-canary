n.d(t, { Z: () => d });
var r = n(255367),
    i = n(831209),
    a = n(442837),
    o = n(481060),
    s = n(597688),
    l = n(884697),
    c = n(388032),
    u = n(697490);
let d = (e) => {
    let { isPurchaseSection: t, isPremiumSection: n, canUsePremiumCollectibles: d, skuId: f } = e,
        _ = (0, l.Yq)(f),
        p = (0, a.e7)([s.Z], () => {
            let e = s.Z.getProduct(f);
            return (0, l.G1)(e);
        });
    return t || (n && d)
        ? null
        : _
          ? (0, r.jsx)(o.lBU, {
                className: u.newBadge,
                text: (0, r.jsxs)('div', {
                    className: u.newBadgeText,
                    children: [
                        (0, r.jsx)(o.mBM, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        c.intl.string(c.t.y2b7CA)
                    ]
                })
            })
          : (0, r.jsx)(o.G2e, {
                icon: p
                    ? () =>
                          (0, r.jsx)(o.SrA, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 14,
                              height: 14
                          })
                    : () =>
                          (0, r.jsx)(o.mBM, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                color: i.Z.BACKGROUND_ACCENT,
                className: u.iconBadge
            });
};
