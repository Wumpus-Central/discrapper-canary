var i = e(477900),
    t = e(582128),
    l = e(503698),
    a = e.n(l),
    r = e(118751),
    c = e(855986),
    o = e(935462),
    d = e(862482),
    u = e(797285),
    m = e(369163),
    p = e(460905),
    x = e(289873),
    f = e(834730),
    j = e(821609),
    g = e(73825),
    h = e(781300),
    y = e(160946),
    C = e(423814),
    E = e(77528),
    _ = e(725807),
    N = e(811611),
    S = e(392634),
    k = e(773669),
    P = e(295405),
    b = e(879610),
    A = e(580630),
    I = e(652215),
    O = e(682901),
    T = e(792996),
    v = e(314435);
function L(n) {
    let { locale: s } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.A, { icon: u.t, iconClassName: v.xy, description: T.intl.string(T.t.uAfKTe) }),
            (0, i.jsx)(S.A, {
                icon: m.v,
                iconClassName: v.Jx,
                description: T.intl.formatToPlainString(T.t.sWnv5M, {
                    numGuildSubscriptions: 2,
                    discountPercent: (0, r.l9)(s, 0.3),
                }),
            }),
            (0, i.jsx)(S.A, { icon: p.n, iconClassName: v.Zr, description: T.intl.string(T.t.pqHIf7) }),
        ],
    });
}
function M(n) {
    let { trialOffer: s, discountOffer: t, isLoading: l, price: r, onClose: d } = n,
        u = (0, c.bG)([k.default], () => k.default.locale),
        m = null != s || null != t;
    return (0, i.jsxs)("div", {
        className: v.iE,
        children: [
            (0, i.jsx)(o.s_, { "data-migration-pending": !0, onClick: d, className: v.b }),
            m && (0, i.jsx)(N.Vq, { className: v.Fg }),
            (0, i.jsx)("img", { className: a()(v.c8, { [v.mk]: m }), src: e(377191), alt: "" }),
            l
                ? (0, i.jsx)(x.y, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.E, {
                              variant: "body-md/normal",
                              className: v.R_,
                              children:
                                  null == r
                                      ? (0, i.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                      : T.intl.format(T.t.TBsJfQ, { monthlyPrice: (0, A.$g)(r.amount, r.currency) }),
                          }),
                          (0, i.jsx)("div", { className: v.md, children: (0, i.jsx)(L, { locale: u }) }),
                      ],
                  }),
        ],
    });
}
function R(n) {
    let { trialOffer: s, discountOffer: e, onClose: t } = n,
        l = { section: I.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
    return (0, i.jsxs)(o.jl, {
        "data-migration-pending": !0,
        className: v.qr,
        children: [
            (0, i.jsx)(j.$, { variant: "secondary", size: "sm", text: T.intl.string(T.t.cpT0Cq), onClick: t }),
            (0, i.jsx)(_.A, {
                textOptions: { textOverride: null != s || null != e ? T.intl.string(T.t["Gd/XHF"]) : void 0 },
                premiumModalAnalyticsLocation: l,
                subscriptionTier: O.pe.TIER_2,
                size: d.$n.Sizes.SMALL,
                color: d.$n.Colors.GREEN,
                onClick: () => {
                    t();
                },
            }),
        ],
    });
}
e.d(
    s,
    {},
    {
        default: function (n) {
            let { onClose: s, ...e } = n,
                l = (0, y.Y)(),
                a = (0, c.bG)([P.A], () => P.A.hasFetchedPaymentSources),
                r = l && a,
                d = (0, E.V)(),
                u = (0, C.O)();
            t.useEffect(() => {
                ((0, h.$o)(), (0, g.zS)(null, null, I.tF5.DISCOVERY));
            }, []);
            let m = r ? b.Ay.getDefaultPrice(O.gD.PREMIUM_MONTH_TIER_2) : null;
            return (0, i.jsxs)(o.EO, {
                "data-migration-pending": !0,
                ...e,
                "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                parentComponent: "StickerPackPremiumUpsellModal",
                children: [
                    (0, i.jsx)(M, { trialOffer: d, discountOffer: u, isLoading: !r, price: m, onClose: s }),
                    (0, i.jsx)(R, { trialOffer: d, discountOffer: u, onClose: s }),
                ],
            });
        },
    },
);
