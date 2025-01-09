n.r(r),
    n.d(r, {
        default: function () {
            return R;
        }
    });
var l = n(200651),
    o = n(192379),
    t = n(120356),
    i = n.n(t),
    s = n(442837),
    c = n(481060),
    a = n(570140),
    d = n(355467),
    u = n(821849),
    p = n(15640),
    m = n(563132),
    f = n(409813),
    _ = n(104494),
    h = n(639119),
    N = n(165583),
    S = n(197115),
    b = n(185139),
    x = n(263954),
    C = n(706454),
    E = n(853872),
    P = n(930153),
    y = n(74538),
    g = n(937615),
    v = n(981631),
    j = n(474936),
    I = n(388032),
    T = n(866803);
let k = (e) => {
        let { locale: r } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(x.Z, {
                    icon: c.StickerIcon,
                    iconClassName: T.iconColorPurple,
                    description: I.intl.string(I.t.uAfKTU)
                }),
                (0, l.jsx)(x.Z, {
                    icon: c.BoostTier2SimpleIcon,
                    iconClassName: T.iconColorPink,
                    description: I.intl.formatToPlainString(I.t.sWnv5O, {
                        numGuildSubscriptions: j.cb,
                        discountPercent: (0, P.T3)(r, j.Rr / 100)
                    })
                }),
                (0, l.jsx)(x.Z, {
                    icon: c.ReactionIcon,
                    iconClassName: T.iconColorYellow,
                    description: I.intl.string(I.t.pqHIf3)
                })
            ]
        });
    },
    A = (e) => {
        let { trialOffer: r, discountOffer: o, isLoading: t, price: a, onClose: d } = e,
            u = (0, s.e7)([C.default], () => C.default.locale),
            p = null != r || null != o;
        return (0, l.jsxs)('div', {
            className: T.wrapper,
            children: [
                (0, l.jsx)(c.ModalCloseButton, {
                    onClick: d,
                    className: T.closeButton
                }),
                p && (0, l.jsx)(N.dz, { className: T.premiumTrialBadge }),
                (0, l.jsx)('img', {
                    className: i()(T.heroImage, { [T.heroImageWithTrialOffer]: p }),
                    src: n(178632),
                    alt: ''
                }),
                t
                    ? (0, l.jsx)(c.Spinner, {})
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  className: T.heading,
                                  children: null == a ? (0, l.jsx)(c.Spinner, { type: c.Spinner.Type.PULSING_ELLIPSIS }) : I.intl.format(I.t.TBsJfX, { monthlyPrice: (0, g.T4)(a.amount, a.currency) })
                              }),
                              (0, l.jsx)('div', {
                                  className: T.perks,
                                  children: (0, l.jsx)(k, { locale: u })
                              })
                          ]
                      })
            ]
        });
    },
    M = (e) => {
        let { trialOffer: r, discountOffer: n, onClose: o } = e,
            t = { section: v.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, l.jsxs)(c.ModalFooter, {
            className: T.footer,
            children: [
                (0, l.jsx)(c.Button, {
                    onClick: o,
                    size: c.Button.Sizes.SMALL,
                    color: c.Button.Colors.PRIMARY,
                    look: c.Button.Looks.LINK,
                    children: I.intl.string(I.t.cpT0Cg)
                }),
                (0, l.jsx)(S.Z, {
                    buttonText: null != r || null != n ? I.intl.string(I.t['Gd/XHB']) : void 0,
                    premiumModalAnalyticsLocation: t,
                    subscriptionTier: j.Si.TIER_2,
                    size: c.Button.Sizes.SMALL,
                    color: c.Button.Colors.GREEN,
                    onClick: () => {
                        o();
                    }
                })
            ]
        });
    };
function R(e) {
    let { onClose: r, ...n } = e,
        t = (0, p.V)(),
        i = (0, s.e7)([E.Z], () => E.Z.hasFetchedPaymentSources),
        N = t && i,
        S = (0, h.N)(),
        x = (0, _.Ng)();
    o.useEffect(() => {
        a.Z.wait(() => {
            (0, d.tZ)(), (0, u.Y2)(null, null, v.JjL.DISCOVERY);
        });
    }, []);
    let C = N ? y.ZP.getDefaultPrice(j.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, l.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, l.jsx)(c.ModalRoot, {
            ...n,
            'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
            children: (0, l.jsx)(b.Z, {
                hideBreadcrumbs: !0,
                body: (0, l.jsx)(A, {
                    trialOffer: S,
                    discountOffer: x,
                    isLoading: !N,
                    price: C,
                    onClose: r
                }),
                footer: (0, l.jsx)(M, {
                    trialOffer: S,
                    discountOffer: x,
                    onClose: r
                }),
                steps: [f.h8.PREMIUM_UPSELL],
                currentStep: f.h8.PREMIUM_UPSELL
            })
        })
    });
}
