i.d(n, { default: () => A });
var s = i(627968),
    r = i(64700),
    t = i(503698),
    l = i.n(t),
    c = i(311907),
    a = i(421380),
    o = i(397927),
    d = i(73153),
    _ = i(73825),
    m = i(323082),
    u = i(160946),
    p = i(422936),
    x = i(234419),
    f = i(725807),
    j = i(811611),
    g = i(901017),
    h = i(773669),
    k = i(295405),
    C = i(252424),
    y = i(927578),
    N = i(580630),
    E = i(652215),
    v = i(788868),
    I = i(985018),
    P = i(403231);
let T = (e) => {
        let { locale: n } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(g.A, { icon: o.tEP, iconClassName: P.xy, description: I.intl.string(I.t.uAfKTe) }),
                (0, s.jsx)(g.A, {
                    icon: o.vRF,
                    iconClassName: P.Jx,
                    description: I.intl.formatToPlainString(I.t.sWnv5M, {
                        numGuildSubscriptions: v.M4,
                        discountPercent: (0, C.l9)(n, v.oX / 100),
                    }),
                }),
                (0, s.jsx)(g.A, { icon: o.nm2, iconClassName: P.Zr, description: I.intl.string(I.t.pqHIf7) }),
            ],
        });
    },
    b = (e) => {
        let { trialOffer: n, discountOffer: r, isLoading: t, price: a, onClose: d } = e,
            _ = (0, c.bG)([h.default], () => h.default.locale),
            m = null != n || null != r;
        return (0, s.jsxs)("div", {
            className: P.iE,
            children: [
                (0, s.jsx)(o.s_y, { "data-migration-pending": !0, onClick: d, className: P.b }),
                m && (0, s.jsx)(j.Vq, { className: P.Fg }),
                (0, s.jsx)("img", { className: l()(P.c8, { [P.mk]: m }), src: i(377191), alt: "" }),
                t
                    ? (0, s.jsx)(o.y$y, {})
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  className: P.R_,
                                  children:
                                      null == a
                                          ? (0, s.jsx)(o.y$y, { type: o.y$y.Type.PULSING_ELLIPSIS })
                                          : I.intl.format(I.t.TBsJfQ, {
                                                monthlyPrice: (0, N.$g)(a.amount, a.currency),
                                            }),
                              }),
                              (0, s.jsx)("div", { className: P.md, children: (0, s.jsx)(T, { locale: _ }) }),
                          ],
                      }),
            ],
        });
    },
    S = (e) => {
        let { trialOffer: n, discountOffer: i, onClose: r } = e,
            t = { section: E.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, s.jsxs)(o.jlY, {
            "data-migration-pending": !0,
            className: P.qr,
            children: [
                (0, s.jsx)(o.Button, { variant: "secondary", size: "sm", text: I.intl.string(I.t.cpT0Cq), onClick: r }),
                (0, s.jsx)(f.A, {
                    textOptions: { textOverride: null != n || null != i ? I.intl.string(I.t["Gd/XHF"]) : void 0 },
                    premiumModalAnalyticsLocation: t,
                    subscriptionTier: v.pe.TIER_2,
                    size: a.$n.Sizes.SMALL,
                    color: a.$n.Colors.GREEN,
                    onClick: () => {
                        r();
                    },
                }),
            ],
        });
    };
function A(e) {
    let { onClose: n, ...i } = e,
        t = (0, u.Y)(),
        l = (0, c.bG)([k.A], () => k.A.hasFetchedPaymentSources),
        a = t && l,
        f = (0, x.V)(),
        j = (0, p.O)();
    r.useEffect(() => {
        d.h.wait(() => {
            (0, m.$o)(), (0, _.zS)(null, null, E.tF5.DISCOVERY);
        });
    }, []);
    let g = a ? y.Ay.getDefaultPrice(v.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, s.jsxs)(o.EOs, {
        "data-migration-pending": !0,
        ...i,
        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
        parentComponent: "StickerPackPremiumUpsellModal",
        children: [
            (0, s.jsx)(b, { trialOffer: f, discountOffer: j, isLoading: !a, price: g, onClose: n }),
            (0, s.jsx)(S, { trialOffer: f, discountOffer: j, onClose: n }),
        ],
    });
}
