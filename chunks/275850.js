t.d(n, {
    Z: function () {
        return A;
    }
}),
    t(411104),
    t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    s = t(692547),
    o = t(481060),
    c = t(987032),
    u = t(219929),
    d = t(46141),
    p = t(63063),
    f = t(981631),
    m = t(231338),
    b = t(388032),
    v = t(622847);
let h = '***@***.***',
    P = new d.dm({
        id: 'new_payment_source_id',
        brand: u.ZP.Types.UNKNOWN,
        type: f.HeQ.CARD
    });
function A(e) {
    var n, t;
    let a,
        { selectedPaymentSourceId: A, paymentSources: T, prependOption: g, hidePersonalInformation: y, onChange: E, onPaymentSourceAdd: I, isTrial: x = !1, disabled: _ = !1, className: N, optionClassName: C, dropdownLoading: R } = e,
        S = 0 === T.length,
        M = [...(null != g ? [g] : []), ...T, P].map((e, n) => {
            if (e instanceof d.ZP) {
                let { brand: n, label: t } = (function (e, n) {
                    if (e instanceof d.dm)
                        return e.id === P.id
                            ? {
                                  brand: null,
                                  label: b.intl.string(b.t.eQ2bLi)
                              }
                            : {
                                  brand: n ? u.ZP.Types.UNKNOWN : e.brand,
                                  label: b.intl.formatToPlainString(b.t.QvBAQk, { last4: n ? '****' : e.last4 })
                              };
                    if (e instanceof d.qo)
                        return {
                            brand: u.ZP.Types.PAYPAL,
                            label: n ? h : e.email
                        };
                    if (e instanceof d.Sf)
                        return {
                            brand: u.ZP.Types.SOFORT,
                            label: n ? h : e.email
                        };
                    else if (e instanceof d.fv)
                        return {
                            brand: u.ZP.Types.GIROPAY,
                            label: b.intl.string(b.t['y+0MQU'])
                        };
                    else if (e instanceof d.Vg)
                        return {
                            brand: u.ZP.Types.PRZELEWY24,
                            label: n ? h : e.email
                        };
                    else if (e instanceof d.sn)
                        return {
                            brand: u.ZP.Types.PAYSAFECARD,
                            label: b.intl.string(b.t.e3APTU)
                        };
                    else if (e instanceof d.o_)
                        return {
                            brand: u.ZP.Types.GCASH,
                            label: b.intl.string(b.t.PjehcH)
                        };
                    else if (e instanceof d.kX)
                        return {
                            brand: u.ZP.Types.GRABPAY,
                            label: b.intl.string(b.t.T5davL)
                        };
                    else if (e instanceof d.z)
                        return {
                            brand: u.ZP.Types.MOMO_WALLET,
                            label: b.intl.string(b.t.J0A1Vl)
                        };
                    else if (e instanceof d.Xc)
                        return {
                            brand: u.ZP.Types.VENMO,
                            label: n ? '***' : '@' + e.username
                        };
                    else if (e instanceof d.Om)
                        return {
                            brand: u.ZP.Types.KAKAOPAY,
                            label: b.intl.string(b.t.CSVexs)
                        };
                    else if (e instanceof d.JC)
                        return {
                            brand: u.ZP.Types.GOPAY_WALLET,
                            label: b.intl.string(b.t['43J8JC'])
                        };
                    else if (e instanceof d.U4)
                        return {
                            brand: u.ZP.Types.BANCONTACT,
                            label: b.intl.string(b.t['1ITkfn'])
                        };
                    else if (e instanceof d.D0)
                        return {
                            brand: u.ZP.Types.EPS,
                            label: b.intl.format(b.t.hSPoZ2, { bank: (0, c.Ul)(e.bank) })
                        };
                    else if (e instanceof d.jc)
                        return {
                            brand: u.ZP.Types.IDEAL,
                            label: b.intl.format(b.t['9kUlRU'], { bank: (0, c.YE)(e.bank) })
                        };
                    else if (e instanceof d.u_)
                        return {
                            brand: u.ZP.Types.CASH_APP,
                            label: n ? '***' : e.username
                        };
                    throw Error('Invalid Payment Source');
                })(e, y);
                return {
                    value: e.id,
                    label: (0, i.jsxs)('div', {
                        className: v.paymentSourceSelectedOption,
                        children: [
                            null != n ? (0, i.jsx)(u.ZP, { type: u.ZP.getType(n) }) : null,
                            (0, i.jsx)('div', {
                                className: l()(v.paymentSourceLabel, { [v.error]: e.invalid }),
                                children: t
                            })
                        ]
                    })
                };
            }
            return {
                key: n,
                value: e.value,
                label: (0, i.jsx)('div', {
                    className: v.paymentSourceLabel,
                    children: e.label
                })
            };
        }),
        L = r.useMemo(() => T.find((e) => e.id === A), [T, A]);
    let j = ((n = x), (t = L), (a = null), n && null != t && !t.canRedeemTrial() ? (a = b.intl.string(b.t.SvheW1)) : n && null != t && t.hasFlag(m.Cw.NEW) && (a = b.intl.format(b.t.d7ZLKC, { helpDeskArticle: p.Z.getArticleURL(f.BhN.PAYMENT_AUTHORIZATION_CHARGE) })), a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            S
                ? (0, i.jsx)(o.Button, {
                      color: o.ButtonColors.BRAND,
                      fullWidth: !0,
                      onClick: I,
                      children: b.intl.string(b.t.eQ2bLi)
                  })
                : (0, i.jsx)(o.SingleSelect, {
                      options: M,
                      value: A,
                      onChange: (e) => {
                          if (e === P.id) null != I && I();
                          else {
                              let n = T.find((n) => n.id === e);
                              null != E && E(n);
                          }
                      },
                      isDisabled: _,
                      className: l()({ [v.paymentSourceHasWarning]: null != j }, N),
                      optionClassName: C,
                      placeholder: b.intl.string(b.t['8lqkf3']),
                      renderOptionValue: (e) => {
                          let [n] = e;
                          return R ? (0, i.jsx)(o.Spinner, { type: o.SpinnerTypes.SPINNING_CIRCLE }) : n.label;
                      }
                  }),
            null != j
                ? (0, i.jsxs)('div', {
                      className: v.paymentSourceWarning,
                      children: [
                          (0, i.jsx)(o.CircleWarningIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              className: v.paymentSourceWarningIcon,
                              color: s.Z.unsafe_rawColors.YELLOW_300.css
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              children: j
                          })
                      ]
                  })
                : null
        ]
    });
}
