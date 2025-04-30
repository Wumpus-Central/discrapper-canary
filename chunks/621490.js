n.d(t, {
    A3: () => v,
    f9: () => T,
    gY: () => S
});
var i = n(200651),
    r = n(481060),
    s = n(224550),
    l = n(672971),
    a = n(128069),
    o = n(600164),
    c = n(612853),
    d = n(712297),
    u = n(982204),
    m = n(811334),
    p = n(152521),
    g = n(960919),
    h = n(981631),
    f = n(388032),
    b = n(309103);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
        return (0, i.jsxs)(r.Text, {
            variant: 'text-md/semibold',
            className: b.orbAmountTag,
            children: [
                (0, i.jsx)(g.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    j = (e) => {
        var { orbBalance: t, orbPriceAmount: n, submitting: s, onClick: l } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let o = f.intl.string(f.t.wmcDys),
            c = _(
                {
                    color: r.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: o
                },
                a
            );
        return null === n
            ? (0, i.jsx)(r.ua7, {
                  text: f.intl.string(f.t['c/rcUl']),
                  children: (e) => (0, i.jsx)(r.zxk, x(_({}, e, c), { disabled: !0 }))
              })
            : null === t || n > t
              ? (0, i.jsx)(r.ua7, {
                    text: f.intl.string(f.t.keFvXF),
                    children: (e) => (0, i.jsx)(r.zxk, x(_({}, e, c), { disabled: !0 }))
                })
              : (0, i.jsx)(
                    r.zxk,
                    x(_({}, c), {
                        submitting: s,
                        onClick: l
                    })
                );
    },
    C = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: s } = (0, d.Z)({
                applicationId: (0, p.N)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            l = s[n];
        return void 0 === l
            ? (0, i.jsx)(m.aO, {
                  children: (0, i.jsx)(r.$jN, {
                      type: r.$jN.Type.PULSING_ELLIPSIS,
                      className: b.purchaseDetailsSpinner
                  })
              })
            : (0, i.jsx)(u.E, {
                  sku: l,
                  value: (0, i.jsx)(E, { orbAmount: t })
              });
    },
    O = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsxs)('div', {
            className: b.paymentSourceWrapper,
            children: [
                (0, i.jsx)(r.vwX, {
                    tag: r.RB0.H5,
                    children: f.intl.string(f.t.mmDvV1)
                }),
                (0, i.jsxs)('div', {
                    className: b.paymentSourceItem,
                    children: [
                        (0, i.jsx)(r.Text, {
                            className: b.displayFlex,
                            variant: 'text-md/medium',
                            children: f.intl.string(f.t.y0WGqK)
                        }),
                        (0, i.jsx)(r.Text, {
                            className: b.displayFlex,
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
            (n = t.code === a.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? f.intl.string(f.t.keFvXF) : t.code === a.SM.ALREADY_PURCHASED ? f.intl.string(f.t.m371Mz) : f.intl.string(f.t.fqJZ19)),
            (0, i.jsx)('div', {
                className: b.formErrorContainer,
                children: (0, i.jsx)(r.kzN, { children: n })
            })
        );
    },
    v = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: a } = e;
        return (0, i.jsxs)('div', {
            className: b.stepBody,
            children: [
                (0, i.jsx)(r.vwX, {
                    tag: r.RB0.H5,
                    children: f.intl.string(f.t.sail9P)
                }),
                (0, i.jsx)(C, {
                    skuId: t,
                    orbPriceAmount: n
                }),
                (0, i.jsx)(O, { orbBalance: a }),
                (0, i.jsx)(l.Z, {
                    forceShow: !0,
                    onChange: h.dG4,
                    finePrint: (0, i.jsx)(s.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: h.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    T = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: s, onClickCheckout: l } = e;
        return (0, i.jsxs)(r.mzw, {
            align: o.Z.Align.CENTER,
            children: [
                (0, i.jsx)(j, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    submitting: s,
                    onClick: l
                }),
                (0, i.jsx)(c.Z, {})
            ]
        });
    };
