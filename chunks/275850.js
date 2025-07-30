(n.d(t, { ZP: () => S }), n(415506), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(755721),
    c = n(481060),
    u = n(987032),
    d = n(219929),
    f = n(46141),
    _ = n(63063),
    p = n(981631),
    h = n(231338),
    m = n(388032),
    g = n(500452);
let E = '***@***.***',
    b = '****',
    y = '***',
    O = 'new_payment_source_id',
    v = new f.dm({
        id: O,
        brand: d.ZP.Types.UNKNOWN,
        type: p.HeQ.CARD
    });
function I(e, t) {
    if (e instanceof f.dm)
        return e.id === O
            ? {
                  brand: null,
                  label: m.intl.string(m.t.eQ2bLi)
              }
            : {
                  brand: t ? d.ZP.Types.UNKNOWN : e.brand,
                  label: m.intl.formatToPlainString(m.t.QvBAQk, { last4: t ? b : e.last4 })
              };
    if (e instanceof f.qo)
        return {
            brand: d.ZP.Types.PAYPAL,
            label: t ? E : e.email
        };
    if (e instanceof f.Sf)
        return {
            brand: d.ZP.Types.SOFORT,
            label: t ? E : e.email
        };
    if (e instanceof f.fv)
        return {
            brand: d.ZP.Types.GIROPAY,
            label: m.intl.string(m.t['y+0MQU'])
        };
    if (e instanceof f.Vg)
        return {
            brand: d.ZP.Types.PRZELEWY24,
            label: t ? E : e.email
        };
    else if (e instanceof f.sn)
        return {
            brand: d.ZP.Types.PAYSAFECARD,
            label: m.intl.string(m.t.e3APTU)
        };
    else if (e instanceof f.o_)
        return {
            brand: d.ZP.Types.GCASH,
            label: m.intl.string(m.t.PjehcH)
        };
    else if (e instanceof f.kX)
        return {
            brand: d.ZP.Types.GRABPAY,
            label: m.intl.string(m.t.T5davL)
        };
    else if (e instanceof f.z)
        return {
            brand: d.ZP.Types.MOMO_WALLET,
            label: m.intl.string(m.t.J0A1Vl)
        };
    else if (e instanceof f.Xc)
        return {
            brand: d.ZP.Types.VENMO,
            label: t ? y : '@' + e.username
        };
    else if (e instanceof f.Om)
        return {
            brand: d.ZP.Types.KAKAOPAY,
            label: m.intl.string(m.t.CSVexs)
        };
    else if (e instanceof f.JC)
        return {
            brand: d.ZP.Types.GOPAY_WALLET,
            label: m.intl.string(m.t['43J8JC'])
        };
    else if (e instanceof f.U4)
        return {
            brand: d.ZP.Types.BANCONTACT,
            label: m.intl.string(m.t['1ITkfn'])
        };
    else if (e instanceof f.D0)
        return {
            brand: d.ZP.Types.EPS,
            label: m.intl.format(m.t.hSPoZ2, { bank: (0, u.Ul)(e.bank) })
        };
    else if (e instanceof f.jc)
        return {
            brand: d.ZP.Types.IDEAL,
            label: null == e.bank ? m.intl.string(m.t.nSbwqK) : m.intl.format(m.t['9kUlRU'], { bank: (0, u.YE)(e.bank) })
        };
    else if (e instanceof f.u_)
        return {
            brand: d.ZP.Types.CASH_APP,
            label: t ? y : e.username
        };
    throw Error('Invalid Payment Source');
}
function T(e, t) {
    let n = null;
    return (e && null != t && !t.canRedeemTrial() ? (n = m.intl.string(m.t.SvheW1)) : e && null != t && t.hasFlag(h.Cw.NEW) && (n = m.intl.format(m.t.d7ZLKC, { helpDeskArticle: _.Z.getArticleURL(p.BhN.PAYMENT_AUTHORIZATION_CHARGE) })), n);
}
function S(e) {
    let { selectedPaymentSourceId: t, paymentSources: n, prependOption: a, hidePersonalInformation: u, onChange: _, onPaymentSourceAdd: p, isTrial: h = !1, disabled: E = !1, className: b, optionClassName: y, dropdownLoading: S, paymentGatewayRestrictions: A } = e,
        N = 0 === n.length,
        C = (e) => {
            if (e === O) null != p && p();
            else {
                let t = n.find((t) => t.id === e);
                null != _ && _(t);
            }
        },
        R = [...(null != a ? [a] : []), ...n, v].map((e, t) => {
            if (e instanceof f.ZP) {
                let { brand: t, label: n } = I(e, u),
                    i = e === v || null == A || (null == A ? void 0 : A.includes(e.paymentGateway));
                return {
                    value: e.id,
                    label: (0, r.jsxs)('div', {
                        className: g.paymentSourceSelectedOption,
                        children: [
                            null != t ? (0, r.jsx)(d.ZP, { type: d.ZP.getType(t) }) : null,
                            (0, r.jsx)('div', {
                                className: o()(g.paymentSourceLabel, { [g.error]: e.invalid }),
                                children: n
                            })
                        ]
                    }),
                    disabled: !i
                };
            }
            return {
                key: t,
                value: e.value,
                label: (0, r.jsx)('div', {
                    className: g.paymentSourceLabel,
                    children: e.label
                })
            };
        }),
        P = T(
            h,
            i.useMemo(() => n.find((e) => e.id === t), [n, t])
        );
    if (null == t && null != A && A.length > 0) {
        let e = n.filter((e) => A.includes(e.paymentGateway));
        t = 0 === e.length ? O : e[0].id;
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N
                ? (0, r.jsx)(l.zx, {
                      color: l.Tt.BRAND,
                      fullWidth: !0,
                      onClick: p,
                      children: m.intl.string(m.t.eQ2bLi)
                  })
                : (0, r.jsx)(c.q4e, {
                      options: R,
                      value: t,
                      onChange: C,
                      isDisabled: E,
                      className: o()({ [g.paymentSourceHasWarning]: null != P }, b),
                      optionClassName: y,
                      placeholder: m.intl.string(m.t['8lqkf3']),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return S ? (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }) : t.label;
                      }
                  }),
            null != P
                ? (0, r.jsxs)('div', {
                      className: g.paymentSourceWarning,
                      children: [
                          (0, r.jsx)(c.Mgn, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              className: g.paymentSourceWarningIcon,
                              color: s.Z.unsafe_rawColors.YELLOW_300.css
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              children: P
                          })
                      ]
                  })
                : null
        ]
    });
}
