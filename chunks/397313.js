e.d(s, { default: () => F });
var i = e(477900),
    t = e(582128),
    l = e(503698),
    a = e.n(l),
    r = e(118751),
    c = e(17928),
    o = e(935462),
    d = e(862482),
    u = e(797285),
    m = e(369163),
    p = e(460905),
    x = e(289873),
    f = e(834730),
    j = e(821609),
    g = e(73825),
    h = e(277984),
    y = e(160946),
    C = e(724651),
    E = e(732280),
    _ = e(725807),
    N = e(811611),
    S = e(392634),
    k = e(773669),
    P = e(295405),
    b = e(24482),
    A = e(580630),
    I = e(652215),
    M = e(202541),
    O = e(105292),
    T = e(314435);
function v(n) {
    let { locale: s } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.A, { icon: u.t, iconClassName: T.xy, description: O.intl.string(O.t.uAfKTe) }),
            (0, i.jsx)(S.A, {
                icon: m.v,
                iconClassName: T.Jx,
                description: O.intl.formatToPlainString(O.t.sWnv5M, {
                    numGuildSubscriptions: M.M4,
                    discountPercent: (0, r.l9)(s, M.oX / 100),
                }),
            }),
            (0, i.jsx)(S.A, { icon: p.n, iconClassName: T.Zr, description: O.intl.string(O.t.pqHIf7) }),
        ],
    });
}
function L(n) {
    let { trialOffer: s, discountOffer: t, isLoading: l, price: r, onClose: d } = n,
        u = (0, c.bG)([k.default], () => k.default.locale),
        m = null != s || null != t;
    return (0, i.jsxs)("div", {
        className: T.iE,
        children: [
            (0, i.jsx)(o.s_, { "data-migration-pending": !0, onClick: d, className: T.b }),
            m && (0, i.jsx)(N.Vq, { className: T.Fg }),
            (0, i.jsx)("img", { className: a()(T.c8, { [T.mk]: m }), src: e(377191), alt: "" }),
            l
                ? (0, i.jsx)(x.y, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.E, {
                              variant: "body-md/normal",
                              className: T.R_,
                              children:
                                  null == r
                                      ? (0, i.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                      : O.intl.format(O.t.TBsJfQ, { monthlyPrice: (0, A.$g)(r.amount, r.currency) }),
                          }),
                          (0, i.jsx)("div", { className: T.md, children: (0, i.jsx)(v, { locale: u }) }),
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
        className: T.qr,
        children: [
            (0, i.jsx)(j.$, { variant: "secondary", size: "sm", text: O.intl.string(O.t.cpT0Cq), onClick: t }),
            (0, i.jsx)(_.A, {
                textOptions: { textOverride: null != s || null != e ? O.intl.string(O.t["Gd/XHF"]) : void 0 },
                premiumModalAnalyticsLocation: l,
                subscriptionTier: M.pe.TIER_2,
                size: d.$n.Sizes.SMALL,
                color: d.$n.Colors.GREEN,
                onClick: () => {
                    t();
                },
            }),
        ],
    });
}
function F(n) {
    let { onClose: s, ...e } = n,
        l = (0, y.Y)(),
        a = (0, c.bG)([P.A], () => P.A.hasFetchedPaymentSources),
        r = l && a,
        d = (0, E.V)(),
        u = (0, C.O)();
    t.useEffect(() => {
        ((0, h.$o)(), (0, g.zS)(null, null, I.tF5.DISCOVERY));
    }, []);
    let m = r ? b.Ay.getDefaultPrice(M.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, i.jsxs)(o.EO, {
        "data-migration-pending": !0,
        ...e,
        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
        parentComponent: "StickerPackPremiumUpsellModal",
        children: [
            (0, i.jsx)(L, { trialOffer: d, discountOffer: u, isLoading: !r, price: m, onClose: s }),
            (0, i.jsx)(R, { trialOffer: d, discountOffer: u, onClose: s }),
        ],
    });
}
