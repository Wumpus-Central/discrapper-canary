n.d(t, {
    A3: () => S,
    f9: () => v,
    gY: () => O
});
var r = n(200651),
    i = n(481060),
    s = n(224550),
    a = n(672971),
    l = n(128069),
    o = n(600164),
    c = n(612853),
    d = n(712297),
    u = n(982204),
    m = n(811334),
    g = n(152521),
    p = n(960919),
    h = n(981631),
    f = n(388032),
    b = n(348329);
function _(e) {
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
function N(e, t) {
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
let x = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(i.Text, {
            variant: 'text-md/semibold',
            className: b.orbAmountTag,
            children: [
                (0, r.jsx)(p.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    E = (e) => {
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
        let o = f.NW.string(f.t.wmcDys),
            c = _(
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
                  text: f.NW.string(f.t['c/rcUl']),
                  children: (e) => (0, r.jsx)(i.zxk, N(_({}, e, c), { disabled: !0 }))
              })
            : null === t || n > t
              ? (0, r.jsx)(i.ua7, {
                    text: f.NW.string(f.t.keFvXF),
                    children: (e) => (0, r.jsx)(i.zxk, N(_({}, e, c), { disabled: !0 }))
                })
              : (0, r.jsx)(
                    i.zxk,
                    N(_({}, c), {
                        submitting: s,
                        onClick: a
                    })
                );
    },
    j = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: s } = (0, d.Z)({
                applicationId: (0, g.N)(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            a = s[n];
        return void 0 === a
            ? (0, r.jsx)(m.aO, {
                  children: (0, r.jsx)(i.$jN, {
                      type: i.$jN.Type.PULSING_ELLIPSIS,
                      className: b.purchaseDetailsSpinner
                  })
              })
            : (0, r.jsx)(u.E, {
                  sku: a,
                  value: (0, r.jsx)(x, { orbAmount: t })
              });
    },
    C = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsxs)('div', {
            className: b.paymentSourceWrapper,
            children: [
                (0, r.jsx)(i.vwX, {
                    tag: i.RB0.H5,
                    children: f.NW.string(f.t.mmDvV1)
                }),
                (0, r.jsxs)('div', {
                    className: b.paymentSourceItem,
                    children: [
                        (0, r.jsx)(i.Text, {
                            className: b.displayFlex,
                            variant: 'text-md/medium',
                            children: f.NW.string(f.t.y0WGqK)
                        }),
                        (0, r.jsx)(i.Text, {
                            className: b.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, r.jsx)(x, { orbAmount: t })
                        })
                    ]
                })
            ]
        });
    },
    O = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = '';
        return (
            (n = t.code === l.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? f.NW.string(f.t.keFvXF) : t.code === l.SM.ALREADY_PURCHASED ? f.NW.string(f.t.m371Mz) : f.NW.string(f.t.fqJZ19)),
            (0, r.jsx)('div', {
                className: b.formErrorContainer,
                children: (0, r.jsx)(i.kzN, { children: n })
            })
        );
    },
    S = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: l } = e;
        return (0, r.jsxs)('div', {
            className: b.stepBody,
            children: [
                (0, r.jsx)(i.vwX, {
                    tag: i.RB0.H5,
                    children: f.NW.string(f.t.sail9P)
                }),
                (0, r.jsx)(j, {
                    skuId: t,
                    orbPriceAmount: n
                }),
                (0, r.jsx)(C, { orbBalance: l }),
                (0, r.jsx)(a.Z, {
                    forceShow: !0,
                    onChange: h.dG4,
                    finePrint: (0, r.jsx)(s.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: h.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    v = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: s, onClickCheckout: a } = e;
        return (0, r.jsxs)(i.mzw, {
            align: o.Z.Align.CENTER,
            children: [
                (0, r.jsx)(E, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    submitting: s,
                    onClick: a
                }),
                (0, r.jsx)(c.Z, {})
            ]
        });
    };
