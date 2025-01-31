n.d(t, { Z: () => T }), n(411104), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(692547),
    l = n(481060),
    u = n(987032),
    c = n(219929),
    d = n(46141),
    f = n(63063),
    _ = n(981631),
    p = n(231338),
    h = n(388032),
    m = n(228329);
let g = '***@***.***',
    E = '****',
    v = '***',
    y = new d.dm({
        id: 'new_payment_source_id',
        brand: c.ZP.Types.UNKNOWN,
        type: _.HeQ.CARD
    });
function I(e, t) {
    if (e instanceof d.dm)
        return e.id === y.id
            ? {
                  brand: null,
                  label: h.intl.string(h.t.eQ2bLi)
              }
            : {
                  brand: t ? c.ZP.Types.UNKNOWN : e.brand,
                  label: h.intl.formatToPlainString(h.t.QvBAQk, { last4: t ? E : e.last4 })
              };
    if (e instanceof d.qo)
        return {
            brand: c.ZP.Types.PAYPAL,
            label: t ? g : e.email
        };
    if (e instanceof d.Sf)
        return {
            brand: c.ZP.Types.SOFORT,
            label: t ? g : e.email
        };
    if (e instanceof d.fv)
        return {
            brand: c.ZP.Types.GIROPAY,
            label: h.intl.string(h.t['y+0MQU'])
        };
    if (e instanceof d.Vg)
        return {
            brand: c.ZP.Types.PRZELEWY24,
            label: t ? g : e.email
        };
    else if (e instanceof d.sn)
        return {
            brand: c.ZP.Types.PAYSAFECARD,
            label: h.intl.string(h.t.e3APTU)
        };
    else if (e instanceof d.o_)
        return {
            brand: c.ZP.Types.GCASH,
            label: h.intl.string(h.t.PjehcH)
        };
    else if (e instanceof d.kX)
        return {
            brand: c.ZP.Types.GRABPAY,
            label: h.intl.string(h.t.T5davL)
        };
    else if (e instanceof d.z)
        return {
            brand: c.ZP.Types.MOMO_WALLET,
            label: h.intl.string(h.t.J0A1Vl)
        };
    else if (e instanceof d.Xc)
        return {
            brand: c.ZP.Types.VENMO,
            label: t ? v : '@' + e.username
        };
    else if (e instanceof d.Om)
        return {
            brand: c.ZP.Types.KAKAOPAY,
            label: h.intl.string(h.t.CSVexs)
        };
    else if (e instanceof d.JC)
        return {
            brand: c.ZP.Types.GOPAY_WALLET,
            label: h.intl.string(h.t['43J8JC'])
        };
    else if (e instanceof d.U4)
        return {
            brand: c.ZP.Types.BANCONTACT,
            label: h.intl.string(h.t['1ITkfn'])
        };
    else if (e instanceof d.D0)
        return {
            brand: c.ZP.Types.EPS,
            label: h.intl.format(h.t.hSPoZ2, { bank: (0, u.Ul)(e.bank) })
        };
    else if (e instanceof d.jc)
        return {
            brand: c.ZP.Types.IDEAL,
            label: h.intl.format(h.t['9kUlRU'], { bank: (0, u.YE)(e.bank) })
        };
    else if (e instanceof d.u_)
        return {
            brand: c.ZP.Types.CASH_APP,
            label: t ? v : e.username
        };
    throw Error('Invalid Payment Source');
}
function b(e, t) {
    let n = null;
    return e && null != t && !t.canRedeemTrial() ? (n = h.intl.string(h.t.SvheW1)) : e && null != t && t.hasFlag(p.Cw.NEW) && (n = h.intl.format(h.t.d7ZLKC, { helpDeskArticle: f.Z.getArticleURL(_.BhN.PAYMENT_AUTHORIZATION_CHARGE) })), n;
}
function T(e) {
    let { selectedPaymentSourceId: t, paymentSources: n, prependOption: a, hidePersonalInformation: u, onChange: f, onPaymentSourceAdd: _, isTrial: p = !1, disabled: g = !1, className: E, optionClassName: v, dropdownLoading: T } = e,
        S = 0 === n.length,
        A = (e) => {
            if (e === y.id) null != _ && _();
            else {
                let t = n.find((t) => t.id === e);
                null != f && f(t);
            }
        },
        N = [...(null != a ? [a] : []), ...n, y].map((e, t) => {
            if (e instanceof d.ZP) {
                let { brand: t, label: n } = I(e, u);
                return {
                    value: e.id,
                    label: (0, i.jsxs)('div', {
                        className: m.paymentSourceSelectedOption,
                        children: [
                            null != t ? (0, i.jsx)(c.ZP, { type: c.ZP.getType(t) }) : null,
                            (0, i.jsx)('div', {
                                className: s()(m.paymentSourceLabel, { [m.error]: e.invalid }),
                                children: n
                            })
                        ]
                    })
                };
            }
            return {
                key: t,
                value: e.value,
                label: (0, i.jsx)('div', {
                    className: m.paymentSourceLabel,
                    children: e.label
                })
            };
        }),
        C = b(
            p,
            r.useMemo(() => n.find((e) => e.id === t), [n, t])
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            S
                ? (0, i.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      fullWidth: !0,
                      onClick: _,
                      children: h.intl.string(h.t.eQ2bLi)
                  })
                : (0, i.jsx)(l.q4e, {
                      options: N,
                      value: t,
                      onChange: A,
                      isDisabled: g,
                      className: s()({ [m.paymentSourceHasWarning]: null != C }, E),
                      optionClassName: v,
                      placeholder: h.intl.string(h.t['8lqkf3']),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return T ? (0, i.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }) : t.label;
                      }
                  }),
            null != C
                ? (0, i.jsxs)('div', {
                      className: m.paymentSourceWarning,
                      children: [
                          (0, i.jsx)(l.P4T, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              className: m.paymentSourceWarningIcon,
                              color: o.Z.unsafe_rawColors.YELLOW_300.css
                          }),
                          (0, i.jsx)(l.Text, {
                              variant: 'text-xs/normal',
                              children: C
                          })
                      ]
                  })
                : null
        ]
    });
}
