n.d(r, { default: () => L });
var o = n(255367),
    t = n(73800),
    i = n(120356),
    c = n.n(i),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    p = n(355467),
    u = n(821849),
    f = n(15640),
    d = n(563132),
    m = n(409813),
    b = n(104494),
    j = n(639119),
    _ = n(767714),
    O = n(165583),
    h = n(185139),
    x = n(263954),
    k = n(706454),
    g = n(853872),
    P = n(930153),
    y = n(74538),
    C = n(937615),
    I = n(981631),
    S = n(474936),
    v = n(388032),
    w = n(719547);
let N = (e) => {
        let { locale: r } = e;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(x.Z, {
                    icon: s.SlE,
                    iconClassName: w.iconColorPurple,
                    description: v.intl.string(v.t.uAfKTU)
                }),
                (0, o.jsx)(x.Z, {
                    icon: s.$zw,
                    iconClassName: w.iconColorPink,
                    description: v.intl.formatToPlainString(v.t.sWnv5O, {
                        numGuildSubscriptions: S.cb,
                        discountPercent: (0, P.T3)(r, S.Rr / 100)
                    })
                }),
                (0, o.jsx)(x.Z, {
                    icon: s.EO4,
                    iconClassName: w.iconColorYellow,
                    description: v.intl.string(v.t.pqHIf3)
                })
            ]
        });
    },
    E = (e) => {
        let { trialOffer: r, discountOffer: t, isLoading: i, price: a, onClose: p } = e,
            u = (0, l.e7)([k.default], () => k.default.locale),
            f = null != r || null != t;
        return (0, o.jsxs)('div', {
            className: w.wrapper,
            children: [
                (0, o.jsx)(s.olH, {
                    onClick: p,
                    className: w.closeButton
                }),
                f && (0, o.jsx)(O.dz, { className: w.premiumTrialBadge }),
                (0, o.jsx)('img', {
                    className: c()(w.heroImage, { [w.heroImageWithTrialOffer]: f }),
                    src: n(178632),
                    alt: ''
                }),
                i
                    ? (0, o.jsx)(s.$jN, {})
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  className: w.heading,
                                  children: null == a ? (0, o.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS }) : v.intl.format(v.t.TBsJfX, { monthlyPrice: (0, C.T4)(a.amount, a.currency) })
                              }),
                              (0, o.jsx)('div', {
                                  className: w.perks,
                                  children: (0, o.jsx)(N, { locale: u })
                              })
                          ]
                      })
            ]
        });
    },
    T = (e) => {
        let { trialOffer: r, discountOffer: n, onClose: t } = e,
            i = { section: I.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, o.jsxs)(s.mzw, {
            className: w.footer,
            children: [
                (0, o.jsx)(s.zxk, {
                    onClick: t,
                    size: s.zxk.Sizes.SMALL,
                    color: s.zxk.Colors.PRIMARY,
                    look: s.zxk.Looks.LINK,
                    children: v.intl.string(v.t.cpT0Cg)
                }),
                (0, o.jsx)(_.Z, {
                    textOptions: { textOverride: null != r || null != n ? v.intl.string(v.t['Gd/XHB']) : void 0 },
                    premiumModalAnalyticsLocation: i,
                    subscriptionTier: S.Si.TIER_2,
                    size: s.zxk.Sizes.SMALL,
                    color: s.zxk.Colors.GREEN,
                    onClick: () => {
                        t();
                    }
                })
            ]
        });
    };
function L(e) {
    var r,
        n,
        { onClose: i } = e,
        c = (function (e, r) {
            if (null == e) return {};
            var n,
                o,
                t = (function (e, r) {
                    if (null == e) return {};
                    var n,
                        o,
                        t = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) (n = i[o]), r.indexOf(n) >= 0 || (t[n] = e[n]);
                    return t;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++) (n = i[o]), !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
            }
            return t;
        })(e, ['onClose']);
    let _ = (0, f.V)(),
        O = (0, l.e7)([g.Z], () => g.Z.hasFetchedPaymentSources),
        x = _ && O,
        k = (0, j.N)(),
        P = (0, b.Ng)();
    t.useEffect(() => {
        a.Z.wait(() => {
            (0, p.tZ)(), (0, u.Y2)(null, null, I.JjL.DISCOVERY);
        });
    }, []);
    let C = x ? y.ZP.getDefaultPrice(S.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, o.jsx)(d.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, o.jsx)(
            s.Y0X,
            ((r = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        o = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        o.forEach(function (r) {
                            var o;
                            (o = n[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[r] = o);
                        });
                }
                return e;
            })({}, c)),
            (n = n =
                {
                    'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
                    parentComponent: 'StickerPackPremiumUpsellModal',
                    children: (0, o.jsx)(h.Z, {
                        hideBreadcrumbs: !0,
                        body: (0, o.jsx)(E, {
                            trialOffer: k,
                            discountOffer: P,
                            isLoading: !x,
                            price: C,
                            onClose: i
                        }),
                        footer: (0, o.jsx)(T, {
                            trialOffer: k,
                            discountOffer: P,
                            onClose: i
                        }),
                        steps: [m.h8.PREMIUM_UPSELL],
                        currentStep: m.h8.PREMIUM_UPSELL
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
                : (function (e, r) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, o);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            r)
        )
    });
}
