n.d(i, { default: () => w });
var s = n(627968),
    r = n(64700),
    t = n(503698),
    l = n.n(t),
    c = n(17928),
    a = n(862482),
    o = n(797285),
    d = n(369163),
    _ = n(460905),
    m = n(935462),
    u = n(289873),
    p = n(834730),
    x = n(821609),
    f = n(228366),
    j = n(73825),
    g = n(323082),
    h = n(160946),
    k = n(422936),
    C = n(234419),
    N = n(725807),
    E = n(811611),
    v = n(901017),
    y = n(773669),
    I = n(295405),
    P = n(252424),
    b = n(927578),
    S = n(580630),
    T = n(652215),
    A = n(788868),
    O = n(985018),
    M = n(892494);
let R = (e) => {
        let { locale: i } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(v.A, { icon: o.t, iconClassName: M.xy, description: O.intl.string(O.t.uAfKTe) }),
                (0, s.jsx)(v.A, {
                    icon: d.v,
                    iconClassName: M.Jx,
                    description: O.intl.formatToPlainString(O.t.sWnv5M, {
                        numGuildSubscriptions: A.M4,
                        discountPercent: (0, P.l9)(i, A.oX / 100),
                    }),
                }),
                (0, s.jsx)(v.A, { icon: _.n, iconClassName: M.Zr, description: O.intl.string(O.t.pqHIf7) }),
            ],
        });
    },
    L = (e) => {
        let { trialOffer: i, discountOffer: r, isLoading: t, price: a, onClose: o } = e,
            d = (0, c.bG)([y.default], () => y.default.locale),
            _ = null != i || null != r;
        return (0, s.jsxs)("div", {
            className: M.iE,
            children: [
                (0, s.jsx)(m.s_, { "data-migration-pending": !0, onClick: o, className: M.b }),
                _ && (0, s.jsx)(E.Vq, { className: M.Fg }),
                (0, s.jsx)("img", { className: l()(M.c8, { [M.mk]: _ }), src: n(377191), alt: "" }),
                t
                    ? (0, s.jsx)(u.y, {})
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  className: M.R_,
                                  children:
                                      null == a
                                          ? (0, s.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS })
                                          : O.intl.format(O.t.TBsJfQ, {
                                                monthlyPrice: (0, S.$g)(a.amount, a.currency),
                                            }),
                              }),
                              (0, s.jsx)("div", { className: M.md, children: (0, s.jsx)(R, { locale: d }) }),
                          ],
                      }),
            ],
        });
    },
    F = (e) => {
        let { trialOffer: i, discountOffer: n, onClose: r } = e,
            t = { section: T.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, s.jsxs)(m.jl, {
            "data-migration-pending": !0,
            className: M.qr,
            children: [
                (0, s.jsx)(x.$, { variant: "secondary", size: "sm", text: O.intl.string(O.t.cpT0Cq), onClick: r }),
                (0, s.jsx)(N.A, {
                    textOptions: { textOverride: null != i || null != n ? O.intl.string(O.t["Gd/XHF"]) : void 0 },
                    premiumModalAnalyticsLocation: t,
                    subscriptionTier: A.pe.TIER_2,
                    size: a.$n.Sizes.SMALL,
                    color: a.$n.Colors.GREEN,
                    onClick: () => {
                        r();
                    },
                }),
            ],
        });
    };
function w(e) {
    let { onClose: i, ...n } = e,
        t = (0, h.Y)(),
        l = (0, c.bG)([I.A], () => I.A.hasFetchedPaymentSources),
        a = t && l,
        o = (0, C.V)(),
        d = (0, k.O)();
    r.useEffect(() => {
        f.h.wait(() => {
            (0, g.$o)(), (0, j.zS)(null, null, T.tF5.DISCOVERY);
        });
    }, []);
    let _ = a ? b.Ay.getDefaultPrice(A.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, s.jsxs)(m.EO, {
        "data-migration-pending": !0,
        ...n,
        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
        parentComponent: "StickerPackPremiumUpsellModal",
        children: [
            (0, s.jsx)(L, { trialOffer: o, discountOffer: d, isLoading: !a, price: _, onClose: i }),
            (0, s.jsx)(F, { trialOffer: o, discountOffer: d, onClose: i }),
        ],
    });
}
