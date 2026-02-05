s.d(n, { default: () => A });
var i = s(627968),
    r = s(64700),
    t = s(503698),
    l = s.n(t),
    c = s(311907),
    o = s(421380),
    a = s(397927),
    d = s(73153),
    _ = s(384904),
    u = s(73825),
    m = s(160946),
    p = s(156312),
    x = s(166532),
    f = s(422936),
    j = s(234419),
    g = s(465794),
    h = s(811611),
    k = s(632638),
    C = s(901017),
    y = s(773669),
    P = s(295405),
    E = s(252424),
    I = s(927578),
    v = s(580630),
    N = s(652215),
    S = s(788868),
    b = s(985018),
    M = s(158057);
let L = (e) => {
        let { locale: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C.A, { icon: a.tEP, iconClassName: M.xy, description: b.intl.string(b.t.uAfKTe) }),
                (0, i.jsx)(C.A, {
                    icon: a.vRF,
                    iconClassName: M.Jx,
                    description: b.intl.formatToPlainString(b.t.sWnv5M, {
                        numGuildSubscriptions: S.M4,
                        discountPercent: (0, E.l9)(n, S.oX / 100),
                    }),
                }),
                (0, i.jsx)(C.A, { icon: a.nm2, iconClassName: M.Zr, description: b.intl.string(b.t.pqHIf7) }),
            ],
        });
    },
    R = (e) => {
        let { trialOffer: n, discountOffer: r, isLoading: t, price: o, onClose: d } = e,
            _ = (0, c.bG)([y.default], () => y.default.locale),
            u = null != n || null != r;
        return (0, i.jsxs)("div", {
            className: M.iE,
            children: [
                (0, i.jsx)(a.s_y, { "data-migration-pending": !0, onClick: d, className: M.b }),
                u && (0, i.jsx)(h.Vq, { className: M.Fg }),
                (0, i.jsx)("img", { className: l()(M.c8, { [M.mk]: u }), src: s(377191), alt: "" }),
                t
                    ? (0, i.jsx)(a.y$y, {})
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  className: M.R_,
                                  children:
                                      null == o
                                          ? (0, i.jsx)(a.y$y, { type: a.y$y.Type.PULSING_ELLIPSIS })
                                          : b.intl.format(b.t.TBsJfQ, {
                                                monthlyPrice: (0, v.$g)(o.amount, o.currency),
                                            }),
                              }),
                              (0, i.jsx)("div", { className: M.md, children: (0, i.jsx)(L, { locale: _ }) }),
                          ],
                      }),
            ],
        });
    },
    T = (e) => {
        let { trialOffer: n, discountOffer: s, onClose: r } = e,
            t = { section: N.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, i.jsxs)(a.jlY, {
            "data-migration-pending": !0,
            className: M.qr,
            children: [
                (0, i.jsx)(a.Button, { variant: "secondary", size: "sm", text: b.intl.string(b.t.cpT0Cq), onClick: r }),
                (0, i.jsx)(g.A, {
                    textOptions: { textOverride: null != n || null != s ? b.intl.string(b.t["Gd/XHF"]) : void 0 },
                    premiumModalAnalyticsLocation: t,
                    subscriptionTier: S.pe.TIER_2,
                    size: o.$n.Sizes.SMALL,
                    color: o.$n.Colors.GREEN,
                    onClick: () => {
                        r();
                    },
                }),
            ],
        });
    };
function A(e) {
    let { onClose: n, ...s } = e,
        t = (0, m.Y)(),
        l = (0, c.bG)([P.A], () => P.A.hasFetchedPaymentSources),
        o = t && l,
        g = (0, j.V)(),
        h = (0, f.O)();
    r.useEffect(() => {
        d.h.wait(() => {
            (0, _.$o)(), (0, u.zS)(null, null, N.tF5.DISCOVERY);
        });
    }, []);
    let C = o ? I.Ay.getDefaultPrice(S.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, i.jsx)(p.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(a.EOs, {
            "data-migration-pending": !0,
            ...s,
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            parentComponent: "StickerPackPremiumUpsellModal",
            children: (0, i.jsx)(k.A, {
                hideBreadcrumbs: !0,
                body: (0, i.jsx)(R, { trialOffer: g, discountOffer: h, isLoading: !o, price: C, onClose: n }),
                footer: (0, i.jsx)(T, { trialOffer: g, discountOffer: h, onClose: n }),
                steps: [x.pn.PREMIUM_UPSELL],
                currentStep: x.pn.PREMIUM_UPSELL,
            }),
        }),
    });
}
