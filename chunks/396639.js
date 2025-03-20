r.d(t, { OrbCheckoutModalInPaymentModal: () => J });
var n = r(200651),
    s = r(192379),
    o = r(442837),
    i = r(481060),
    l = r(224550),
    a = r(672971),
    c = r(128069),
    u = r(228624),
    d = r(583434),
    p = r(956472),
    m = r(600164),
    b = r(987209),
    j = r(563132),
    x = r(409813),
    y = r(45572),
    h = r(126982),
    f = r(791785),
    O = r(51499),
    g = r(612853),
    C = r(614277),
    P = r(712297),
    S = r(982204),
    N = r(653798),
    k = r(594174),
    v = r(74538),
    E = r(43747),
    I = r(932563),
    A = r(960919),
    _ = r(981631),
    w = r(388032),
    T = r(650075);
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    }
    return s;
}
let W = (e) => {
        let { orbAmount: t } = e;
        return (0, n.jsxs)(i.Text, {
            variant: 'text-md/semibold',
            className: T.orbAmountTag,
            children: [
                (0, n.jsx)(A.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    F = (e) => {
        var { orbBalance: t, orbPriceAmount: r, submitting: s, onClick: o } = e,
            l = L(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let a = w.NW.string(w.t.wmcDys),
            c = B(
                {
                    color: i.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: a
                },
                l
            );
        return null === r
            ? (0, n.jsx)(i.ua7, {
                  text: w.NW.string(w.t['c/rcUl']),
                  children: (e) => (0, n.jsx)(i.zxk, D(B({}, e, c), { disabled: !0 }))
              })
            : null === t || r > t
              ? (0, n.jsx)(i.ua7, {
                    text: w.NW.string(w.t.keFvXF),
                    children: (e) => (0, n.jsx)(i.zxk, D(B({}, e, c), { disabled: !0 }))
                })
              : (0, n.jsx)(
                    i.zxk,
                    D(B({}, c), {
                        submitting: s,
                        onClick: o
                    })
                );
    },
    R = (e) => {
        let { orbPriceAmount: t, skuId: r } = e,
            { skusById: s } = (0, P.Z)({
                applicationId: _.XAJ,
                skuIDs: [r],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            o = s[r],
            l = (0, u.ed)('OrbCheckoutPurchaseDetails'),
            a = void 0 !== o && o.productLine === _.POd.COLLECTIBLES && l;
        return void 0 === o
            ? (0, n.jsx)(N.PO, {
                  children: (0, n.jsx)(i.$jN, {
                      type: i.$jN.Type.PULSING_ELLIPSIS,
                      className: T.purchaseDetailsSpinner
                  })
              })
            : (0, n.jsx)(S.E, {
                  sku: o,
                  shouldShowProductPreview: a,
                  value: (0, n.jsx)(W, { orbAmount: t })
              });
    },
    U = (e) => {
        let { orbBalance: t } = e;
        return (0, n.jsxs)('div', {
            className: T.paymentSourceWrapper,
            children: [
                (0, n.jsx)(i.vwX, {
                    tag: i.RB0.H5,
                    children: w.NW.string(w.t.mmDvV1)
                }),
                (0, n.jsxs)('div', {
                    className: T.paymentSourceItem,
                    children: [
                        (0, n.jsx)(i.Text, {
                            className: T.displayFlex,
                            variant: 'text-md/medium',
                            children: w.NW.string(w.t.y0WGqK)
                        }),
                        (0, n.jsx)(i.Text, {
                            className: T.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, n.jsx)(W, { orbAmount: t })
                        })
                    ]
                })
            ]
        });
    },
    Z = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let r = '';
        return (
            (r = t.code === c.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? w.NW.string(w.t.keFvXF) : t.code === c.SM.ALREADY_PURCHASED ? w.NW.string(w.t.m371Mz) : w.NW.string(w.t.fqJZ19)),
            (0, n.jsx)('div', {
                className: T.formErrorContainer,
                children: (0, n.jsx)(i.kzN, { children: r })
            })
        );
    },
    M = (e) => {
        let { skuId: t, orbPriceAmount: r, orbBalance: s } = e;
        return (0, n.jsxs)('div', {
            className: T.stepBody,
            children: [
                (0, n.jsx)(i.vwX, {
                    tag: i.RB0.H5,
                    children: w.NW.string(w.t.sail9P)
                }),
                (0, n.jsx)(R, {
                    skuId: t,
                    orbPriceAmount: r
                }),
                (0, n.jsx)(U, { orbBalance: s }),
                (0, n.jsx)(a.Z, {
                    forceShow: !0,
                    onChange: _.dG4,
                    finePrint: (0, n.jsx)(l.Z, {
                        isOrbCheckout: !0,
                        purchaseType: _.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    z = (e) => {
        let { orbPriceAmount: t, orbBalance: r, isSubmitting: s, onClickCheckout: o } = e;
        return (0, n.jsxs)(i.mzw, {
            align: m.Z.Align.CENTER,
            children: [
                (0, n.jsx)(F, {
                    orbBalance: r,
                    orbPriceAmount: t,
                    submitting: s,
                    onClick: o
                }),
                (0, n.jsx)(g.Z, {})
            ]
        });
    },
    G = (e) => {
        let { handleClose: t } = e,
            { selectedSkuId: r, purchaseState: l, setPurchaseState: a } = (0, j.JL)(),
            { product: c } = (0, d.T)(r),
            u = (0, I.c)(),
            m = (0, o.e7)([k.default], () => v.ZP.canUseCollectibles(k.default.getCurrentUser())),
            { redeemVirtualCurrency: b, isSubmitting: x, error: h } = (0, E.f)();
        (0, s.useEffect)(() => {
            l === y.A.COMPLETED && t();
        }, [l, t]);
        let f = (0, s.useCallback)(() => {
            null != r &&
                b(r, () => {
                    a(y.A.COMPLETED);
                });
        }, [b, r, a]);
        if (null == r || null == c) return (0, n.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES });
        let g = (0, p.T4)({
                product: c,
                isPremiumUser: m
            }),
            P = null !== g ? g.amount : null;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(O.Z, {}),
                (0, n.jsxs)(C.C3, {
                    children: [
                        (0, n.jsx)(Z, { error: h }),
                        (0, n.jsx)(M, {
                            skuId: r,
                            orbPriceAmount: P,
                            orbBalance: u
                        })
                    ]
                }),
                (0, n.jsx)(C.O3, {
                    children: (0, n.jsx)(z, {
                        orbPriceAmount: P,
                        orbBalance: u,
                        isSubmitting: x,
                        onClickCheckout: f
                    })
                })
            ]
        });
    },
    X = [
        {
            key: x.h8.REVIEW,
            renderStep: (e) => (0, n.jsx)(G, B({}, e)),
            options: { useBreadcrumbLabel: () => w.NW.string(w.t.QBnNHh) }
        }
    ],
    H = (e, t, r) =>
        (0, n.jsx)(h.Z, {
            isOrbCheckout: !0,
            step: r,
            onClose: () => t(!1)
        }),
    J = (e) => {
        var { skuId: t, loadId: r, onCheckoutSuccess: s, analyticsLocations: o = [] } = e,
            i = L(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsLocations']);
        return (0, n.jsx)(j.PaymentContextProvider, {
            applicationId: _.XAJ,
            activeSubscription: null,
            loadId: r,
            stepConfigs: X,
            skuIDs: [t],
            children: (0, n.jsx)(b.KB, {
                children: (0, n.jsx)(f.PaymentModal, {
                    applicationId: _.XAJ,
                    transitionState: i.transitionState,
                    onClose: (e, t) => {
                        e && s(t), i.onClose();
                    },
                    hideShadow: !0,
                    skuId: t,
                    renderHeader: H,
                    initialPlanId: null,
                    analyticsLocations: o
                })
            })
        });
    };
