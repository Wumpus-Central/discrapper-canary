s.d(e, { default: () => G });
var i = s(627968),
    t = s(64700),
    l = s(503698),
    a = s.n(l),
    r = s(17928),
    c = s(862482),
    o = s(797285),
    d = s(369163),
    u = s(460905),
    m = s(935462),
    p = s(289873),
    x = s(834730),
    f = s(821609),
    j = s(228366),
    g = s(73825),
    h = s(753390),
    C = s(160946),
    E = s(422936),
    y = s(234419),
    _ = s(725807),
    N = s(811611),
    S = s(901017),
    k = s(773669),
    P = s(295405),
    A = s(252424),
    I = s(428262),
    M = s(580630),
    O = s(652215),
    T = s(788868),
    b = s(375708),
    v = s(892494);
function L(n) {
    let { locale: e } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.A, { icon: o.t, iconClassName: v.xy, description: b.intl.string(b.t.uAfKTe) }),
            (0, i.jsx)(S.A, {
                icon: d.v,
                iconClassName: v.Jx,
                description: b.intl.formatToPlainString(b.t.sWnv5M, {
                    numGuildSubscriptions: T.M4,
                    discountPercent: (0, A.l9)(e, T.oX / 100),
                }),
            }),
            (0, i.jsx)(S.A, { icon: u.n, iconClassName: v.Zr, description: b.intl.string(b.t.pqHIf7) }),
        ],
    });
}
function R(n) {
    let { trialOffer: e, discountOffer: t, isLoading: l, price: c, onClose: o } = n,
        d = (0, r.bG)([k.default], () => k.default.locale),
        u = null != e || null != t;
    return (0, i.jsxs)("div", {
        className: v.iE,
        children: [
            (0, i.jsx)(m.s_, { "data-migration-pending": !0, onClick: o, className: v.b }),
            u && (0, i.jsx)(N.Vq, { className: v.Fg }),
            (0, i.jsx)("img", { className: a()(v.c8, { [v.mk]: u }), src: s(377191), alt: "" }),
            l
                ? (0, i.jsx)(p.y, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: "text-md/normal",
                              className: v.R_,
                              children:
                                  null == c
                                      ? (0, i.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS })
                                      : b.intl.format(b.t.TBsJfQ, { monthlyPrice: (0, M.$g)(c.amount, c.currency) }),
                          }),
                          (0, i.jsx)("div", { className: v.md, children: (0, i.jsx)(L, { locale: d }) }),
                      ],
                  }),
        ],
    });
}
function F(n) {
    let { trialOffer: e, discountOffer: s, onClose: t } = n,
        l = { section: O.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
    return (0, i.jsxs)(m.jl, {
        "data-migration-pending": !0,
        className: v.qr,
        children: [
            (0, i.jsx)(f.$, { variant: "secondary", size: "sm", text: b.intl.string(b.t.cpT0Cq), onClick: t }),
            (0, i.jsx)(_.A, {
                textOptions: { textOverride: null != e || null != s ? b.intl.string(b.t["Gd/XHF"]) : void 0 },
                premiumModalAnalyticsLocation: l,
                subscriptionTier: T.pe.TIER_2,
                size: c.$n.Sizes.SMALL,
                color: c.$n.Colors.GREEN,
                onClick: () => {
                    t();
                },
            }),
        ],
    });
}
function G(n) {
    let { onClose: e, ...s } = n,
        l = (0, C.Y)(),
        a = (0, r.bG)([P.A], () => P.A.hasFetchedPaymentSources),
        c = l && a,
        o = (0, y.V)(),
        d = (0, E.O)();
    t.useEffect(() => {
        j.h.wait(() => {
            (0, h.$o)(), (0, g.zS)(null, null, O.tF5.DISCOVERY);
        });
    }, []);
    let u = c ? I.Ay.getDefaultPrice(T.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, i.jsxs)(m.EO, {
        "data-migration-pending": !0,
        ...s,
        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
        parentComponent: "StickerPackPremiumUpsellModal",
        children: [
            (0, i.jsx)(R, { trialOffer: o, discountOffer: d, isLoading: !c, price: u, onClose: e }),
            (0, i.jsx)(F, { trialOffer: o, discountOffer: d, onClose: e }),
        ],
    });
}
