var i = s(477900),
    t = s(582128),
    l = s(503698),
    a = s.n(l),
    r = s(118751),
    c = s(855986),
    o = s(935462),
    d = s(862482),
    u = s(797285),
    m = s(369163),
    p = s(460905),
    x = s(289873),
    f = s(834730),
    j = s(821609),
    g = s(73825),
    h = s(781300),
    y = s(160946),
    C = s(423814),
    E = s(77528),
    S = s(725807),
    I = s(811611),
    _ = s(392634),
    k = s(773669),
    N = s(295405),
    P = s(448645),
    T = s(580630),
    b = s(652215),
    A = s(682901),
    O = s(792996),
    L = s(314435);
function M(n) {
    let { locale: e } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.A, { icon: u.StickerIcon, iconClassName: L.xy, description: O.intl.string(O.t.uAfKTe) }),
            (0, i.jsx)(_.A, {
                icon: m.BoostTier2SimpleIcon,
                iconClassName: L.Jx,
                description: O.intl.formatToPlainString(O.t.sWnv5M, {
                    numGuildSubscriptions: 2,
                    discountPercent: (0, r.l9)(e, 0.3),
                }),
            }),
            (0, i.jsx)(_.A, { icon: p.ReactionIcon, iconClassName: L.Zr, description: O.intl.string(O.t.pqHIf7) }),
        ],
    });
}
function R(n) {
    let { trialOffer: e, discountOffer: t, isLoading: l, price: r, onClose: d } = n,
        u = (0, c.bG)([k.default], () => k.default.locale),
        m = null != e || null != t;
    return (0, i.jsxs)("div", {
        className: L.iE,
        children: [
            (0, i.jsx)(o.s_, { "data-migration-pending": !0, onClick: d, className: L.b }),
            m && (0, i.jsx)(I.Vq, { className: L.Fg }),
            (0, i.jsx)("img", { className: a()(L.c8, { [L.mk]: m }), src: s(377191), alt: "" }),
            l
                ? (0, i.jsx)(x.y, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.E, {
                              variant: "body-md/normal",
                              className: L.R_,
                              children:
                                  null == r
                                      ? (0, i.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                      : O.intl.format(O.t.TBsJfQ, { monthlyPrice: (0, T.$g)(r.amount, r.currency) }),
                          }),
                          (0, i.jsx)("div", { className: L.md, children: (0, i.jsx)(M, { locale: u }) }),
                      ],
                  }),
        ],
    });
}
function v(n) {
    let { trialOffer: e, discountOffer: s, onClose: t } = n,
        l = { section: b.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
    return (0, i.jsxs)(o.jl, {
        "data-migration-pending": !0,
        className: L.qr,
        children: [
            (0, i.jsx)(j.$, { variant: "secondary", size: "sm", text: O.intl.string(O.t.cpT0Cq), onClick: t }),
            (0, i.jsx)(S.A, {
                textOptions: { textOverride: null != e || null != s ? O.intl.string(O.t["Gd/XHF"]) : void 0 },
                premiumModalAnalyticsLocation: l,
                subscriptionTier: A.pe.TIER_2,
                size: d.$n.Sizes.SMALL,
                color: d.$n.Colors.GREEN,
                onClick: () => {
                    t();
                },
            }),
        ],
    });
}
s.d(
    e,
    {},
    {
        default: function (n) {
            let { onClose: e, ...s } = n,
                l = (0, y.Y)(),
                a = (0, c.bG)([N.A], () => N.A.hasFetchedPaymentSources),
                r = l && a,
                d = (0, E.V)(),
                u = (0, C.O)();
            t.useEffect(() => {
                ((0, h.$o)(), (0, g.zS)(null, null, b.tF5.DISCOVERY));
            }, []);
            let m = r ? P.Ay.getDefaultPrice(A.gD.PREMIUM_MONTH_TIER_2) : null;
            return (0, i.jsxs)(o.EO, {
                "data-migration-pending": !0,
                ...s,
                "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                parentComponent: "StickerPackPremiumUpsellModal",
                children: [
                    (0, i.jsx)(R, { trialOffer: d, discountOffer: u, isLoading: !r, price: m, onClose: e }),
                    (0, i.jsx)(v, { trialOffer: d, discountOffer: u, onClose: e }),
                ],
            });
        },
    },
);
