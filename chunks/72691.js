n.d(r, { default: () => L });
var o = n(200651),
    t = n(192379),
    i = n(120356),
    c = n.n(i),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    u = n(355467),
    p = n(821849),
    f = n(15640),
    d = n(563132),
    b = n(409813),
    m = n(104494),
    j = n(639119),
    _ = n(165583),
    h = n(197115),
    O = n(185139),
    x = n(263954),
    g = n(706454),
    k = n(853872),
    P = n(930153),
    y = n(74538),
    C = n(937615),
    I = n(981631),
    w = n(474936),
    S = n(388032),
    v = n(719547);
let N = (e) => {
        let { locale: r } = e;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(x.Z, {
                    icon: s.SlE,
                    iconClassName: v.iconColorPurple,
                    description: S.intl.string(S.t.uAfKTU)
                }),
                (0, o.jsx)(x.Z, {
                    icon: s.$zw,
                    iconClassName: v.iconColorPink,
                    description: S.intl.formatToPlainString(S.t.sWnv5O, {
                        numGuildSubscriptions: w.cb,
                        discountPercent: (0, P.T3)(r, w.Rr / 100)
                    })
                }),
                (0, o.jsx)(x.Z, {
                    icon: s.EO4,
                    iconClassName: v.iconColorYellow,
                    description: S.intl.string(S.t.pqHIf3)
                })
            ]
        });
    },
    E = (e) => {
        let { trialOffer: r, discountOffer: t, isLoading: i, price: a, onClose: u } = e,
            p = (0, l.e7)([g.default], () => g.default.locale),
            f = null != r || null != t;
        return (0, o.jsxs)('div', {
            className: v.wrapper,
            children: [
                (0, o.jsx)(s.olH, {
                    onClick: u,
                    className: v.closeButton
                }),
                f && (0, o.jsx)(_.dz, { className: v.premiumTrialBadge }),
                (0, o.jsx)('img', {
                    className: c()(v.heroImage, { [v.heroImageWithTrialOffer]: f }),
                    src: n(178632),
                    alt: ''
                }),
                i
                    ? (0, o.jsx)(s.$jN, {})
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  className: v.heading,
                                  children: null == a ? (0, o.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS }) : S.intl.format(S.t.TBsJfX, { monthlyPrice: (0, C.T4)(a.amount, a.currency) })
                              }),
                              (0, o.jsx)('div', {
                                  className: v.perks,
                                  children: (0, o.jsx)(N, { locale: p })
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
            className: v.footer,
            children: [
                (0, o.jsx)(s.zxk, {
                    onClick: t,
                    size: s.zxk.Sizes.SMALL,
                    color: s.zxk.Colors.PRIMARY,
                    look: s.zxk.Looks.LINK,
                    children: S.intl.string(S.t.cpT0Cg)
                }),
                (0, o.jsx)(h.Z, {
                    buttonText: null != r || null != n ? S.intl.string(S.t['Gd/XHB']) : void 0,
                    premiumModalAnalyticsLocation: i,
                    subscriptionTier: w.Si.TIER_2,
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
        h = (0, l.e7)([k.Z], () => k.Z.hasFetchedPaymentSources),
        x = _ && h,
        g = (0, j.N)(),
        P = (0, m.Ng)();
    t.useEffect(() => {
        a.Z.wait(() => {
            (0, u.tZ)(), (0, p.Y2)(null, null, I.JjL.DISCOVERY);
        });
    }, []);
    let C = x ? y.ZP.getDefaultPrice(w.Xh.PREMIUM_MONTH_TIER_2) : null;
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
                    children: (0, o.jsx)(O.Z, {
                        hideBreadcrumbs: !0,
                        body: (0, o.jsx)(E, {
                            trialOffer: g,
                            discountOffer: P,
                            isLoading: !x,
                            price: C,
                            onClose: i
                        }),
                        footer: (0, o.jsx)(T, {
                            trialOffer: g,
                            discountOffer: P,
                            onClose: i
                        }),
                        steps: [b.h8.PREMIUM_UPSELL],
                        currentStep: b.h8.PREMIUM_UPSELL
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
