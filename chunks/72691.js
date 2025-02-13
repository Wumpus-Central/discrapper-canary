o.d(r, { default: () => M });
var n = o(200651),
    i = o(192379),
    s = o(120356),
    l = o.n(s),
    c = o(442837),
    t = o(481060),
    a = o(570140),
    u = o(355467),
    p = o(821849),
    d = o(15640),
    _ = o(563132),
    m = o(409813),
    f = o(104494),
    x = o(639119),
    h = o(165583),
    k = o(197115),
    j = o(185139),
    C = o(263954),
    I = o(706454),
    b = o(853872),
    g = o(930153),
    P = o(74538),
    N = o(937615),
    T = o(981631),
    E = o(474936),
    L = o(388032),
    S = o(490737);
let R = (e) => {
        let { locale: r } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(C.Z, {
                    icon: t.SlE,
                    iconClassName: S.iconColorPurple,
                    description: L.intl.string(L.t.uAfKTU)
                }),
                (0, n.jsx)(C.Z, {
                    icon: t.$zw,
                    iconClassName: S.iconColorPink,
                    description: L.intl.formatToPlainString(L.t.sWnv5O, {
                        numGuildSubscriptions: E.cb,
                        discountPercent: (0, g.T3)(r, E.Rr / 100)
                    })
                }),
                (0, n.jsx)(C.Z, {
                    icon: t.EO4,
                    iconClassName: S.iconColorYellow,
                    description: L.intl.string(L.t.pqHIf3)
                })
            ]
        });
    },
    v = (e) => {
        let { trialOffer: r, discountOffer: i, isLoading: s, price: a, onClose: u } = e,
            p = (0, c.e7)([I.default], () => I.default.locale),
            d = null != r || null != i;
        return (0, n.jsxs)('div', {
            className: S.wrapper,
            children: [
                (0, n.jsx)(t.olH, {
                    onClick: u,
                    className: S.closeButton
                }),
                d && (0, n.jsx)(h.dz, { className: S.premiumTrialBadge }),
                (0, n.jsx)('img', {
                    className: l()(S.heroImage, { [S.heroImageWithTrialOffer]: d }),
                    src: o(178632),
                    alt: ''
                }),
                s
                    ? (0, n.jsx)(t.$jN, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(t.Text, {
                                  variant: 'text-md/normal',
                                  className: S.heading,
                                  children: null == a ? (0, n.jsx)(t.$jN, { type: t.$jN.Type.PULSING_ELLIPSIS }) : L.intl.format(L.t.TBsJfX, { monthlyPrice: (0, N.T4)(a.amount, a.currency) })
                              }),
                              (0, n.jsx)('div', {
                                  className: S.perks,
                                  children: (0, n.jsx)(R, { locale: p })
                              })
                          ]
                      })
            ]
        });
    },
    w = (e) => {
        let { trialOffer: r, discountOffer: o, onClose: i } = e,
            s = { section: T.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, n.jsxs)(t.mzw, {
            className: S.footer,
            children: [
                (0, n.jsx)(t.zxk, {
                    onClick: i,
                    size: t.zxk.Sizes.SMALL,
                    color: t.zxk.Colors.PRIMARY,
                    look: t.zxk.Looks.LINK,
                    children: L.intl.string(L.t.cpT0Cg)
                }),
                (0, n.jsx)(k.Z, {
                    buttonText: null != r || null != o ? L.intl.string(L.t['Gd/XHB']) : void 0,
                    premiumModalAnalyticsLocation: s,
                    subscriptionTier: E.Si.TIER_2,
                    size: t.zxk.Sizes.SMALL,
                    color: t.zxk.Colors.GREEN,
                    onClick: () => {
                        i();
                    }
                })
            ]
        });
    };
function M(e) {
    let { onClose: r, ...o } = e,
        s = (0, d.V)(),
        l = (0, c.e7)([b.Z], () => b.Z.hasFetchedPaymentSources),
        h = s && l,
        k = (0, x.N)(),
        C = (0, f.Ng)();
    i.useEffect(() => {
        a.Z.wait(() => {
            (0, u.tZ)(), (0, p.Y2)(null, null, T.JjL.DISCOVERY);
        });
    }, []);
    let I = h ? P.ZP.getDefaultPrice(E.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, n.jsx)(_.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, n.jsx)(t.Y0X, {
            ...o,
            'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
            children: (0, n.jsx)(j.Z, {
                hideBreadcrumbs: !0,
                body: (0, n.jsx)(v, {
                    trialOffer: k,
                    discountOffer: C,
                    isLoading: !h,
                    price: I,
                    onClose: r
                }),
                footer: (0, n.jsx)(w, {
                    trialOffer: k,
                    discountOffer: C,
                    onClose: r
                }),
                steps: [m.h8.PREMIUM_UPSELL],
                currentStep: m.h8.PREMIUM_UPSELL
            })
        })
    });
}
