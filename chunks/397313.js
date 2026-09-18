s.d(e, { default: () => G });
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
    g = s(228366),
    h = s(73825),
    C = s(277984),
    E = s(160946),
    y = s(724651),
    _ = s(732280),
    N = s(725807),
    S = s(811611),
    k = s(901017),
    P = s(773669),
    A = s(295405),
    I = s(158045),
    M = s(580630),
    O = s(652215),
    T = s(202541),
    b = s(375708),
    v = s(314435);
function L(n) {
    let { locale: e } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k.A, { icon: u.t, iconClassName: v.xy, description: b.intl.string(b.t.uAfKTe) }),
            (0, i.jsx)(k.A, {
                icon: m.v,
                iconClassName: v.Jx,
                description: b.intl.formatToPlainString(b.t.sWnv5M, {
                    numGuildSubscriptions: T.M4,
                    discountPercent: (0, r.l9)(e, T.oX / 100),
                }),
            }),
            (0, i.jsx)(k.A, { icon: p.n, iconClassName: v.Zr, description: b.intl.string(b.t.pqHIf7) }),
        ],
    });
}
function R(n) {
    let { trialOffer: e, discountOffer: t, isLoading: l, price: r, onClose: d } = n,
        u = (0, c.bG)([P.default], () => P.default.locale),
        m = null != e || null != t;
    return (0, i.jsxs)("div", {
        className: v.iE,
        children: [
            (0, i.jsx)(o.s_, { "data-migration-pending": !0, onClick: d, className: v.b }),
            m && (0, i.jsx)(S.Vq, { className: v.Fg }),
            (0, i.jsx)("img", { className: a()(v.c8, { [v.mk]: m }), src: s(377191), alt: "" }),
            l
                ? (0, i.jsx)(x.y, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.E, {
                              variant: "text-md/normal",
                              className: v.R_,
                              children:
                                  null == r
                                      ? (0, i.jsx)(x.y, { type: x.y.Type.PULSING_ELLIPSIS })
                                      : b.intl.format(b.t.TBsJfQ, { monthlyPrice: (0, M.$g)(r.amount, r.currency) }),
                          }),
                          (0, i.jsx)("div", { className: v.md, children: (0, i.jsx)(L, { locale: u }) }),
                      ],
                  }),
        ],
    });
}
function F(n) {
    let { trialOffer: e, discountOffer: s, onClose: t } = n,
        l = { section: O.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
    return (0, i.jsxs)(o.jl, {
        "data-migration-pending": !0,
        className: v.qr,
        children: [
            (0, i.jsx)(j.$, { variant: "secondary", size: "sm", text: b.intl.string(b.t.cpT0Cq), onClick: t }),
            (0, i.jsx)(N.A, {
                textOptions: { textOverride: null != e || null != s ? b.intl.string(b.t["Gd/XHF"]) : void 0 },
                premiumModalAnalyticsLocation: l,
                subscriptionTier: T.pe.TIER_2,
                size: d.$n.Sizes.SMALL,
                color: d.$n.Colors.GREEN,
                onClick: () => {
                    t();
                },
            }),
        ],
    });
}
function G(n) {
    let { onClose: e, ...s } = n,
        l = (0, E.Y)(),
        a = (0, c.bG)([A.A], () => A.A.hasFetchedPaymentSources),
        r = l && a,
        d = (0, _.V)(),
        u = (0, y.O)();
    t.useEffect(() => {
        g.h.wait(() => {
            ((0, C.$o)(), (0, h.zS)(null, null, O.tF5.DISCOVERY));
        });
    }, []);
    let m = r ? I.Ay.getDefaultPrice(T.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, i.jsxs)(o.EO, {
        "data-migration-pending": !0,
        ...s,
        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
        parentComponent: "StickerPackPremiumUpsellModal",
        children: [
            (0, i.jsx)(R, { trialOffer: d, discountOffer: u, isLoading: !r, price: m, onClose: e }),
            (0, i.jsx)(F, { trialOffer: d, discountOffer: u, onClose: e }),
        ],
    });
}
