n.d(t, {
    A3: () => v,
    f9: () => T,
    gY: () => S
});
var r = n(200651),
    i = n(481060),
    s = n(224550),
    a = n(672971),
    l = n(128069),
    o = n(228624),
    c = n(600164),
    d = n(612853),
    u = n(712297),
    m = n(982204),
    g = n(811334),
    p = n(152521),
    h = n(960919),
    f = n(981631),
    _ = n(388032),
    b = n(309103);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(i.Text, {
            variant: 'text-md/semibold',
            className: b.orbAmountTag,
            children: [
                (0, r.jsx)(h.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    j = (e) => {
        var { orbBalance: t, orbPriceAmount: n, submitting: s, onClick: a } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let o = _.NW.string(_.t.wmcDys),
            c = N(
                {
                    color: i.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: o
                },
                l
            );
        return null === n
            ? (0, r.jsx)(i.ua7, {
                  text: _.NW.string(_.t['c/rcUl']),
                  children: (e) => (0, r.jsx)(i.zxk, x(N({}, e, c), { disabled: !0 }))
              })
            : null === t || n > t
              ? (0, r.jsx)(i.ua7, {
                    text: _.NW.string(_.t.keFvXF),
                    children: (e) => (0, r.jsx)(i.zxk, x(N({}, e, c), { disabled: !0 }))
                })
              : (0, r.jsx)(
                    i.zxk,
                    x(N({}, c), {
                        submitting: s,
                        onClick: a
                    })
                );
    },
    C = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: s } = (0, u.Z)({
                applicationId: (0, p.N)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            a = s[n],
            l = (0, o.ed)('OrbCheckoutPurchaseDetails');
        return void 0 === a
            ? (0, r.jsx)(g.aO, {
                  children: (0, r.jsx)(i.$jN, {
                      type: i.$jN.Type.PULSING_ELLIPSIS,
                      className: b.purchaseDetailsSpinner
                  })
              })
            : (0, r.jsx)(m.E, {
                  sku: a,
                  shouldShowProductPreview: void 0 !== a && l,
                  value: (0, r.jsx)(E, { orbAmount: t })
              });
    },
    O = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsxs)('div', {
            className: b.paymentSourceWrapper,
            children: [
                (0, r.jsx)(i.vwX, {
                    tag: i.RB0.H5,
                    children: _.NW.string(_.t.mmDvV1)
                }),
                (0, r.jsxs)('div', {
                    className: b.paymentSourceItem,
                    children: [
                        (0, r.jsx)(i.Text, {
                            className: b.displayFlex,
                            variant: 'text-md/medium',
                            children: _.NW.string(_.t.y0WGqK)
                        }),
                        (0, r.jsx)(i.Text, {
                            className: b.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, r.jsx)(E, { orbAmount: t })
                        })
                    ]
                })
            ]
        });
    },
    S = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = '';
        return (
            (n = t.code === l.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? _.NW.string(_.t.keFvXF) : t.code === l.SM.ALREADY_PURCHASED ? _.NW.string(_.t.m371Mz) : _.NW.string(_.t.fqJZ19)),
            (0, r.jsx)('div', {
                className: b.formErrorContainer,
                children: (0, r.jsx)(i.kzN, { children: n })
            })
        );
    },
    v = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: l } = e;
        return (0, r.jsxs)('div', {
            className: b.stepBody,
            children: [
                (0, r.jsx)(i.vwX, {
                    tag: i.RB0.H5,
                    children: _.NW.string(_.t.sail9P)
                }),
                (0, r.jsx)(C, {
                    skuId: t,
                    orbPriceAmount: n
                }),
                (0, r.jsx)(O, { orbBalance: l }),
                (0, r.jsx)(a.Z, {
                    forceShow: !0,
                    onChange: f.dG4,
                    finePrint: (0, r.jsx)(s.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: f.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    T = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: s, onClickCheckout: a } = e;
        return (0, r.jsxs)(i.mzw, {
            align: c.Z.Align.CENTER,
            children: [
                (0, r.jsx)(j, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    submitting: s,
                    onClick: a
                }),
                (0, r.jsx)(d.Z, {})
            ]
        });
    };
