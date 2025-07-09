n.d(t, {
    A3: () => T,
    f9: () => N,
    gY: () => S
});
var i = n(255367),
    r = n(755721),
    s = n(481060),
    a = n(224550),
    l = n(672971),
    o = n(128069),
    c = n(600164),
    d = n(612853),
    u = n(712297),
    m = n(982204),
    p = n(811334),
    g = n(152521),
    h = n(960919),
    f = n(981631),
    b = n(388032),
    x = n(309103);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        return (0, i.jsxs)(s.Text, {
            variant: 'text-md/semibold',
            className: x.orbAmountTag,
            children: [
                (0, i.jsx)(h.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    O = (e) => {
        var { orbBalance: t, orbPriceAmount: n, submitting: a, onClick: l } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                }
                return r;
            })(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let c = b.intl.string(b.t.wmcDys),
            d = _(
                {
                    color: r.zx.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: c
                },
                o
            );
        return null === n
            ? (0, i.jsx)(s.ua7, {
                  text: b.intl.string(b.t['c/rcUl']),
                  children: (e) => (0, i.jsx)(r.zx, j(_({}, e, d), { disabled: !0 }))
              })
            : null === t || n > t
              ? (0, i.jsx)(s.ua7, {
                    text: b.intl.string(b.t.keFvXF),
                    children: (e) => (0, i.jsx)(r.zx, j(_({}, e, d), { disabled: !0 }))
                })
              : (0, i.jsx)(
                    r.zx,
                    j(_({}, d), {
                        submitting: a,
                        onClick: l
                    })
                );
    },
    C = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: r } = (0, u.Z)({
                applicationId: (0, g.N)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null,
                excludeSKUPurchasePreviews: !0
            }),
            a = r[n];
        return void 0 === a
            ? (0, i.jsx)(p.aO, {
                  children: (0, i.jsx)(s.$jN, {
                      type: s.$jN.Type.PULSING_ELLIPSIS,
                      className: x.purchaseDetailsSpinner
                  })
              })
            : (0, i.jsx)(m.E, {
                  sku: a,
                  value: (0, i.jsx)(E, { orbAmount: t })
              });
    },
    v = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsxs)('div', {
            className: x.paymentSourceWrapper,
            children: [
                (0, i.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    children: b.intl.string(b.t.mmDvV1)
                }),
                (0, i.jsxs)('div', {
                    className: x.paymentSourceItem,
                    children: [
                        (0, i.jsx)(s.Text, {
                            className: x.displayFlex,
                            variant: 'text-md/medium',
                            children: b.intl.string(b.t.y0WGqK)
                        }),
                        (0, i.jsx)(s.Text, {
                            className: x.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, i.jsx)(E, { orbAmount: t })
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
            (n = t.code === o.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? b.intl.string(b.t.keFvXF) : t.code === o.SM.ALREADY_PURCHASED ? b.intl.string(b.t.m371Mz) : b.intl.string(b.t.fqJZ19)),
            (0, i.jsx)('div', {
                className: x.formErrorContainer,
                children: (0, i.jsx)(s.kzN, { children: n })
            })
        );
    },
    T = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: r } = e;
        return (0, i.jsxs)('div', {
            className: x.stepBody,
            children: [
                (0, i.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    children: b.intl.string(b.t.sail9P)
                }),
                (0, i.jsx)(C, {
                    skuId: t,
                    orbPriceAmount: n
                }),
                (0, i.jsx)(v, { orbBalance: r }),
                (0, i.jsx)(l.Z, {
                    forceShow: !0,
                    onChange: f.dG4,
                    finePrint: (0, i.jsx)(a.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: f.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    N = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: r, onClickCheckout: a } = e;
        return (0, i.jsxs)(s.mzw, {
            align: c.Z.Align.CENTER,
            children: [
                (0, i.jsx)(O, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    submitting: r,
                    onClick: a
                }),
                (0, i.jsx)(d.Z, {})
            ]
        });
    };
