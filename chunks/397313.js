s.d(e, { default: () => F });
var i = s(477900),
    t = s(582128),
    l = s(503698),
    a = s.n(l),
    r = s(118751),
    c = s(17928),
    o = s(935462),
    d = s(862482),
    u = s(797285),
    m = s(369163),
    p = s(460905),
    x = s(289873),
    f = s(834730),
    j = s(821609),
    g = s(73825),
    h = s(277984),
    C = s(160946),
    E = s(724651),
    y = s(732280),
    _ = s(725807),
    N = s(811611),
    S = s(392634),
    k = s(773669),
    P = s(295405),
    A = s(927578),
    I = s(580630),
    M = s(652215),
    O = s(202541),
    T = s(105292),
    b = s(314435);
function v(n) {
    let { locale: e } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.A, { icon: u.t, iconClassName: b.xy, description: T.intl.string(T.t.uAfKTe) }),
            (0, i.jsx)(S.A, {
                icon: m.v,
                iconClassName: b.Jx,
                description: T.intl.formatToPlainString(T.t.sWnv5M, {
                    numGuildSubscriptions: O.M4,
                    discountPercent: (0, r.l9)(e, O.oX / 100),
                }),
            }),
            (0, i.jsx)(S.A, { icon: p.n, iconClassName: b.Zr, description: T.intl.string(T.t.pqHIf7) }),
        ],
    });
}
function L(n) {
    let { trialOffer: e, discountOffer: t, isLoading: l, price: r, onClose: d } = n,
        u = (0, c.bG)([k.default], () => k.default.locale),
        m = null != e || null != t;
    return (0, i.jsxs)("div", {
        className: b.iE,
        children: [
            (0, i.jsx)(o.s_, { "data-migration-pending": !0, onClick: d, className: b.b }),
            m && (0, i.jsx)(N.Vq, { className: b.Fg }),
            (0, i.jsx)("img", { className: a()(b.c8, { [b.mk]: m }), src: s(377191), alt: "" }),
            l
                ? (0, i.jsx)(x.y, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.E, {
                              variant: "text-md/normal",
                              className: b.R_,
                              children:
                                  null == r
                                      ? (0, i.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                      : T.intl.format(T.t.TBsJfQ, { monthlyPrice: (0, I.$g)(r.amount, r.currency) }),
                          }),
                          (0, i.jsx)("div", { className: b.md, children: (0, i.jsx)(v, { locale: u }) }),
                      ],
                  }),
        ],
    });
}
function R(n) {
    let { trialOffer: e, discountOffer: s, onClose: t } = n,
        l = { section: M.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
    return (0, i.jsxs)(o.jl, {
        "data-migration-pending": !0,
        className: b.qr,
        children: [
            (0, i.jsx)(j.$, { variant: "secondary", size: "sm", text: T.intl.string(T.t.cpT0Cq), onClick: t }),
            (0, i.jsx)(_.A, {
                textOptions: { textOverride: null != e || null != s ? T.intl.string(T.t["Gd/XHF"]) : void 0 },
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
function F(n) {
    let { onClose: e, ...s } = n,
        l = (0, C.Y)(),
        a = (0, c.bG)([P.A], () => P.A.hasFetchedPaymentSources),
        r = l && a,
        d = (0, y.V)(),
        u = (0, E.O)();
    t.useEffect(() => {
        ((0, h.$o)(), (0, g.zS)(null, null, M.tF5.DISCOVERY));
    }, []);
    let m = r ? A.Ay.getDefaultPrice(O.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, i.jsxs)(o.EO, {
        "data-migration-pending": !0,
        ...s,
        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
        parentComponent: "StickerPackPremiumUpsellModal",
        children: [
            (0, i.jsx)(L, { trialOffer: d, discountOffer: u, isLoading: !r, price: m, onClose: e }),
            (0, i.jsx)(R, { trialOffer: d, discountOffer: u, onClose: e }),
        ],
    });
}
