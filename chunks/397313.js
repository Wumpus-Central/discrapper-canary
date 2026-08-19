s.d(e, { default: () => G });
var i = s(477900),
    t = s(582128),
    l = s(503698),
    a = s.n(l),
    r = s(17928),
    c = s(935462),
    o = s(862482),
    d = s(797285),
    u = s(369163),
    m = s(460905),
    p = s(289873),
    x = s(834730),
    f = s(821609),
    j = s(228366),
    g = s(73825),
    h = s(277984),
    C = s(160946),
    E = s(724651),
    y = s(732280),
    _ = s(725807),
    N = s(811611),
    S = s(901017),
    k = s(773669),
    P = s(295405),
    A = s(252424),
    I = s(158045),
    M = s(580630),
    O = s(652215),
    T = s(202541),
    b = s(375708),
    v = s(593510);
function L(n) {
    let { locale: e } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.A, { icon: d.t, iconClassName: v.xy, description: b.intl.string(b.t.uAfKTe) }),
            (0, i.jsx)(S.A, {
                icon: u.v,
                iconClassName: v.Jx,
                description: b.intl.formatToPlainString(b.t.sWnv5M, {
                    numGuildSubscriptions: T.M4,
                    discountPercent: (0, A.l9)(e, T.oX / 100),
                }),
            }),
            (0, i.jsx)(S.A, { icon: m.n, iconClassName: v.Zr, description: b.intl.string(b.t.pqHIf7) }),
        ],
    });
}
function R(n) {
    let { trialOffer: e, discountOffer: t, isLoading: l, price: o, onClose: d } = n,
        u = (0, r.bG)([k.default], () => k.default.locale),
        m = null != e || null != t;
    return (0, i.jsxs)("div", {
        className: v.iE,
        children: [
            (0, i.jsx)(c.s_, { "data-migration-pending": !0, onClick: d, className: v.b }),
            m && (0, i.jsx)(N.Vq, { className: v.Fg }),
            (0, i.jsx)("img", { className: a()(v.c8, { [v.mk]: m }), src: s(377191), alt: "" }),
            l
                ? (0, i.jsx)(p.y, {})
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: "text-md/normal",
                              className: v.R_,
                              children:
                                  null == o
                                      ? (0, i.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS })
                                      : b.intl.format(b.t.TBsJfQ, { monthlyPrice: (0, M.$g)(o.amount, o.currency) }),
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
    return (0, i.jsxs)(c.jl, {
        "data-migration-pending": !0,
        className: v.qr,
        children: [
            (0, i.jsx)(f.$, { variant: "secondary", size: "sm", text: b.intl.string(b.t.cpT0Cq), onClick: t }),
            (0, i.jsx)(_.A, {
                textOptions: { textOverride: null != e || null != s ? b.intl.string(b.t["Gd/XHF"]) : void 0 },
                premiumModalAnalyticsLocation: l,
                subscriptionTier: T.pe.TIER_2,
                size: o.$n.Sizes.SMALL,
                color: o.$n.Colors.GREEN,
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
        o = l && a,
        d = (0, y.V)(),
        u = (0, E.O)();
    t.useEffect(() => {
        j.h.wait(() => {
            (0, h.$o)(), (0, g.zS)(null, null, O.tF5.DISCOVERY);
        });
    }, []);
    let m = o ? I.Ay.getDefaultPrice(T.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, i.jsxs)(c.EO, {
        "data-migration-pending": !0,
        ...s,
        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
        parentComponent: "StickerPackPremiumUpsellModal",
        children: [
            (0, i.jsx)(R, { trialOffer: d, discountOffer: u, isLoading: !o, price: m, onClose: e }),
            (0, i.jsx)(F, { trialOffer: d, discountOffer: u, onClose: e }),
        ],
    });
}
