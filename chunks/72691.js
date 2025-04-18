o.d(r, { default: () => L });
var n = o(200651),
    t = o(192379),
    i = o(120356),
    c = o.n(i),
    l = o(442837),
    s = o(481060),
    a = o(570140),
    u = o(355467),
    p = o(821849),
    f = o(15640),
    d = o(563132),
    b = o(409813),
    m = o(104494),
    j = o(639119),
    _ = o(165583),
    h = o(197115),
    O = o(185139),
    x = o(263954),
    g = o(706454),
    k = o(853872),
    P = o(930153),
    y = o(74538),
    C = o(937615),
    I = o(981631),
    N = o(474936),
    w = o(388032),
    S = o(719547);
let v = (e) => {
        let { locale: r } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(x.Z, {
                    icon: s.SlE,
                    iconClassName: S.iconColorPurple,
                    description: w.NW.string(w.t.uAfKTU)
                }),
                (0, n.jsx)(x.Z, {
                    icon: s.$zw,
                    iconClassName: S.iconColorPink,
                    description: w.NW.formatToPlainString(w.t.sWnv5O, {
                        numGuildSubscriptions: N.cb,
                        discountPercent: (0, P.T3)(r, N.Rr / 100)
                    })
                }),
                (0, n.jsx)(x.Z, {
                    icon: s.EO4,
                    iconClassName: S.iconColorYellow,
                    description: w.NW.string(w.t.pqHIf3)
                })
            ]
        });
    },
    E = (e) => {
        let { trialOffer: r, discountOffer: t, isLoading: i, price: a, onClose: u } = e,
            p = (0, l.e7)([g.default], () => g.default.locale),
            f = null != r || null != t;
        return (0, n.jsxs)('div', {
            className: S.wrapper,
            children: [
                (0, n.jsx)(s.olH, {
                    onClick: u,
                    className: S.closeButton
                }),
                f && (0, n.jsx)(_.dz, { className: S.premiumTrialBadge }),
                (0, n.jsx)('img', {
                    className: c()(S.heroImage, { [S.heroImageWithTrialOffer]: f }),
                    src: o(178632),
                    alt: ''
                }),
                i
                    ? (0, n.jsx)(s.$jN, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  className: S.heading,
                                  children: null == a ? (0, n.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS }) : w.NW.format(w.t.TBsJfX, { monthlyPrice: (0, C.T4)(a.amount, a.currency) })
                              }),
                              (0, n.jsx)('div', {
                                  className: S.perks,
                                  children: (0, n.jsx)(v, { locale: p })
                              })
                          ]
                      })
            ]
        });
    },
    T = (e) => {
        let { trialOffer: r, discountOffer: o, onClose: t } = e,
            i = { section: I.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, n.jsxs)(s.mzw, {
            className: S.footer,
            children: [
                (0, n.jsx)(s.zxk, {
                    onClick: t,
                    size: s.zxk.Sizes.SMALL,
                    color: s.zxk.Colors.PRIMARY,
                    look: s.zxk.Looks.LINK,
                    children: w.NW.string(w.t.cpT0Cg)
                }),
                (0, n.jsx)(h.Z, {
                    buttonText: null != r || null != o ? w.NW.string(w.t['Gd/XHB']) : void 0,
                    premiumModalAnalyticsLocation: i,
                    subscriptionTier: N.Si.TIER_2,
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
        o,
        { onClose: i } = e,
        c = (function (e, r) {
            if (null == e) return {};
            var o,
                n,
                t = (function (e, r) {
                    if (null == e) return {};
                    var o,
                        n,
                        t = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (o = i[n]), r.indexOf(o) >= 0 || (t[o] = e[o]);
                    return t;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (o = i[n]), !(r.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
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
    let C = x ? y.ZP.getDefaultPrice(N.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, n.jsx)(d.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, n.jsx)(
            s.Y0X,
            ((r = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var o = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(o);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(o).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(o, e).enumerable;
                            })
                        )),
                        n.forEach(function (r) {
                            var n;
                            (n = o[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[r] = n);
                        });
                }
                return e;
            })({}, c)),
            (o = o =
                {
                    'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
                    children: (0, n.jsx)(O.Z, {
                        hideBreadcrumbs: !0,
                        body: (0, n.jsx)(E, {
                            trialOffer: g,
                            discountOffer: P,
                            isLoading: !x,
                            price: C,
                            onClose: i
                        }),
                        footer: (0, n.jsx)(T, {
                            trialOffer: g,
                            discountOffer: P,
                            onClose: i
                        }),
                        steps: [b.h8.PREMIUM_UPSELL],
                        currentStep: b.h8.PREMIUM_UPSELL
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                : (function (e, r) {
                      var o = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          o.push.apply(o, n);
                      }
                      return o;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            r)
        )
    });
}
