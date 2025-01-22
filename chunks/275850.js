r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(692547),
    d = r(481060),
    f = r(987032),
    p = r(219929),
    h = r(46141),
    _ = r(63063),
    m = r(981631),
    g = r(231338),
    E = r(388032),
    v = r(228329);
let y = '***@***.***',
    b = '****',
    I = '***',
    T = new h.dm({
        id: 'new_payment_source_id',
        brand: p.ZP.Types.UNKNOWN,
        type: m.HeQ.CARD
    });
function S(e, n) {
    if (e instanceof h.dm)
        return e.id === T.id
            ? {
                  brand: null,
                  label: E.intl.string(E.t.eQ2bLi)
              }
            : {
                  brand: n ? p.ZP.Types.UNKNOWN : e.brand,
                  label: E.intl.formatToPlainString(E.t.QvBAQk, { last4: n ? b : e.last4 })
              };
    if (e instanceof h.qo)
        return {
            brand: p.ZP.Types.PAYPAL,
            label: n ? y : e.email
        };
    if (e instanceof h.Sf)
        return {
            brand: p.ZP.Types.SOFORT,
            label: n ? y : e.email
        };
    else if (e instanceof h.fv)
        return {
            brand: p.ZP.Types.GIROPAY,
            label: E.intl.string(E.t['y+0MQU'])
        };
    else if (e instanceof h.Vg)
        return {
            brand: p.ZP.Types.PRZELEWY24,
            label: n ? y : e.email
        };
    else if (e instanceof h.sn)
        return {
            brand: p.ZP.Types.PAYSAFECARD,
            label: E.intl.string(E.t.e3APTU)
        };
    else if (e instanceof h.o_)
        return {
            brand: p.ZP.Types.GCASH,
            label: E.intl.string(E.t.PjehcH)
        };
    else if (e instanceof h.kX)
        return {
            brand: p.ZP.Types.GRABPAY,
            label: E.intl.string(E.t.T5davL)
        };
    else if (e instanceof h.z)
        return {
            brand: p.ZP.Types.MOMO_WALLET,
            label: E.intl.string(E.t.J0A1Vl)
        };
    else if (e instanceof h.Xc)
        return {
            brand: p.ZP.Types.VENMO,
            label: n ? I : '@' + e.username
        };
    else if (e instanceof h.Om)
        return {
            brand: p.ZP.Types.KAKAOPAY,
            label: E.intl.string(E.t.CSVexs)
        };
    else if (e instanceof h.JC)
        return {
            brand: p.ZP.Types.GOPAY_WALLET,
            label: E.intl.string(E.t['43J8JC'])
        };
    else if (e instanceof h.U4)
        return {
            brand: p.ZP.Types.BANCONTACT,
            label: E.intl.string(E.t['1ITkfn'])
        };
    else if (e instanceof h.D0)
        return {
            brand: p.ZP.Types.EPS,
            label: E.intl.format(E.t.hSPoZ2, { bank: (0, f.Ul)(e.bank) })
        };
    else if (e instanceof h.jc)
        return {
            brand: p.ZP.Types.IDEAL,
            label: E.intl.format(E.t['9kUlRU'], { bank: (0, f.YE)(e.bank) })
        };
    else if (e instanceof h.u_)
        return {
            brand: p.ZP.Types.CASH_APP,
            label: n ? I : e.username
        };
    throw Error('Invalid Payment Source');
}
function A(e, n) {
    let r = null;
    return e && null != n && !n.canRedeemTrial() ? (r = E.intl.string(E.t.SvheW1)) : e && null != n && n.hasFlag(g.Cw.NEW) && (r = E.intl.format(E.t.d7ZLKC, { helpDeskArticle: _.Z.getArticleURL(m.BhN.PAYMENT_AUTHORIZATION_CHARGE) })), r;
}
function C(e) {
    let { selectedPaymentSourceId: n, paymentSources: r, prependOption: i, hidePersonalInformation: a, onChange: l, onPaymentSourceAdd: f, isTrial: _ = !1, disabled: m = !1, className: g, optionClassName: y, dropdownLoading: b } = e,
        I = 0 === r.length,
        C = (e) => {
            if (e === T.id) null != f && f();
            else {
                let n = r.find((n) => n.id === e);
                null != l && l(n);
            }
        },
        N = [...(null != i ? [i] : []), ...r, T].map((e, n) => {
            if (e instanceof h.ZP) {
                let { brand: n, label: r } = S(e, a);
                return {
                    value: e.id,
                    label: (0, o.jsxs)('div', {
                        className: v.paymentSourceSelectedOption,
                        children: [
                            null != n ? (0, o.jsx)(p.ZP, { type: p.ZP.getType(n) }) : null,
                            (0, o.jsx)('div', {
                                className: u()(v.paymentSourceLabel, { [v.error]: e.invalid }),
                                children: r
                            })
                        ]
                    })
                };
            }
            return {
                key: n,
                value: e.value,
                label: (0, o.jsx)('div', {
                    className: v.paymentSourceLabel,
                    children: e.label
                })
            };
        }),
        R = A(
            _,
            s.useMemo(() => r.find((e) => e.id === n), [r, n])
        );
    return (0, o.jsxs)(o.Fragment, {
        children: [
            I
                ? (0, o.jsx)(d.Button, {
                      color: d.ButtonColors.BRAND,
                      fullWidth: !0,
                      onClick: f,
                      children: E.intl.string(E.t.eQ2bLi)
                  })
                : (0, o.jsx)(d.SingleSelect, {
                      options: N,
                      value: n,
                      onChange: C,
                      isDisabled: m,
                      className: u()({ [v.paymentSourceHasWarning]: null != R }, g),
                      optionClassName: y,
                      placeholder: E.intl.string(E.t['8lqkf3']),
                      renderOptionValue: (e) => {
                          let [n] = e;
                          return b ? (0, o.jsx)(d.Spinner, { type: d.SpinnerTypes.SPINNING_CIRCLE }) : n.label;
                      }
                  }),
            null != R
                ? (0, o.jsxs)('div', {
                      className: v.paymentSourceWarning,
                      children: [
                          (0, o.jsx)(d.CircleWarningIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              className: v.paymentSourceWarningIcon,
                              color: c.Z.unsafe_rawColors.YELLOW_300.css
                          }),
                          (0, o.jsx)(d.Text, {
                              variant: 'text-xs/normal',
                              children: R
                          })
                      ]
                  })
                : null
        ]
    });
}
