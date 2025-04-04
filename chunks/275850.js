n.d(t, { Z: () => I }), n(411104), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(692547),
    l = n(481060),
    c = n(987032),
    u = n(219929),
    d = n(46141),
    f = n(63063),
    _ = n(981631),
    p = n(231338),
    h = n(388032),
    m = n(500452);
let g = '***@***.***',
    E = '****',
    b = '***',
    y = new d.dm({
        id: 'new_payment_source_id',
        brand: u.ZP.Types.UNKNOWN,
        type: _.HeQ.CARD
    });
function v(e, t) {
    if (e instanceof d.dm)
        return e.id === y.id
            ? {
                  brand: null,
                  label: h.NW.string(h.t.eQ2bLi)
              }
            : {
                  brand: t ? u.ZP.Types.UNKNOWN : e.brand,
                  label: h.NW.formatToPlainString(h.t.QvBAQk, { last4: t ? E : e.last4 })
              };
    if (e instanceof d.qo)
        return {
            brand: u.ZP.Types.PAYPAL,
            label: t ? g : e.email
        };
    if (e instanceof d.Sf)
        return {
            brand: u.ZP.Types.SOFORT,
            label: t ? g : e.email
        };
    if (e instanceof d.fv)
        return {
            brand: u.ZP.Types.GIROPAY,
            label: h.NW.string(h.t['y+0MQU'])
        };
    if (e instanceof d.Vg)
        return {
            brand: u.ZP.Types.PRZELEWY24,
            label: t ? g : e.email
        };
    else if (e instanceof d.sn)
        return {
            brand: u.ZP.Types.PAYSAFECARD,
            label: h.NW.string(h.t.e3APTU)
        };
    else if (e instanceof d.o_)
        return {
            brand: u.ZP.Types.GCASH,
            label: h.NW.string(h.t.PjehcH)
        };
    else if (e instanceof d.kX)
        return {
            brand: u.ZP.Types.GRABPAY,
            label: h.NW.string(h.t.T5davL)
        };
    else if (e instanceof d.z)
        return {
            brand: u.ZP.Types.MOMO_WALLET,
            label: h.NW.string(h.t.J0A1Vl)
        };
    else if (e instanceof d.Xc)
        return {
            brand: u.ZP.Types.VENMO,
            label: t ? b : '@' + e.username
        };
    else if (e instanceof d.Om)
        return {
            brand: u.ZP.Types.KAKAOPAY,
            label: h.NW.string(h.t.CSVexs)
        };
    else if (e instanceof d.JC)
        return {
            brand: u.ZP.Types.GOPAY_WALLET,
            label: h.NW.string(h.t['43J8JC'])
        };
    else if (e instanceof d.U4)
        return {
            brand: u.ZP.Types.BANCONTACT,
            label: h.NW.string(h.t['1ITkfn'])
        };
    else if (e instanceof d.D0)
        return {
            brand: u.ZP.Types.EPS,
            label: h.NW.format(h.t.hSPoZ2, { bank: (0, c.Ul)(e.bank) })
        };
    else if (e instanceof d.jc)
        return {
            brand: u.ZP.Types.IDEAL,
            label: null == e.bank ? h.NW.string(h.t.nSbwqK) : h.NW.format(h.t['9kUlRU'], { bank: (0, c.YE)(e.bank) })
        };
    else if (e instanceof d.u_)
        return {
            brand: u.ZP.Types.CASH_APP,
            label: t ? b : e.username
        };
    throw Error('Invalid Payment Source');
}
function O(e, t) {
    let n = null;
    return e && null != t && !t.canRedeemTrial() ? (n = h.NW.string(h.t.SvheW1)) : e && null != t && t.hasFlag(p.Cw.NEW) && (n = h.NW.format(h.t.d7ZLKC, { helpDeskArticle: f.Z.getArticleURL(_.BhN.PAYMENT_AUTHORIZATION_CHARGE) })), n;
}
function I(e) {
    let { selectedPaymentSourceId: t, paymentSources: n, prependOption: o, hidePersonalInformation: c, onChange: f, onPaymentSourceAdd: _, isTrial: p = !1, disabled: g = !1, className: E, optionClassName: b, dropdownLoading: I } = e,
        S = 0 === n.length,
        T = (e) => {
            if (e === y.id) null != _ && _();
            else {
                let t = n.find((t) => t.id === e);
                null != f && f(t);
            }
        },
        N = [...(null != o ? [o] : []), ...n, y].map((e, t) => {
            if (e instanceof d.ZP) {
                let { brand: t, label: n } = v(e, c);
                return {
                    value: e.id,
                    label: (0, r.jsxs)('div', {
                        className: m.paymentSourceSelectedOption,
                        children: [
                            null != t ? (0, r.jsx)(u.ZP, { type: u.ZP.getType(t) }) : null,
                            (0, r.jsx)('div', {
                                className: a()(m.paymentSourceLabel, { [m.error]: e.invalid }),
                                children: n
                            })
                        ]
                    })
                };
            }
            return {
                key: t,
                value: e.value,
                label: (0, r.jsx)('div', {
                    className: m.paymentSourceLabel,
                    children: e.label
                })
            };
        }),
        A = O(
            p,
            i.useMemo(() => n.find((e) => e.id === t), [n, t])
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            S
                ? (0, r.jsx)(l.zxk, {
                      color: l.Ttl.BRAND,
                      fullWidth: !0,
                      onClick: _,
                      children: h.NW.string(h.t.eQ2bLi)
                  })
                : (0, r.jsx)(l.q4e, {
                      options: N,
                      value: t,
                      onChange: T,
                      isDisabled: g,
                      className: a()({ [m.paymentSourceHasWarning]: null != A }, E),
                      optionClassName: b,
                      placeholder: h.NW.string(h.t['8lqkf3']),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return I ? (0, r.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }) : t.label;
                      }
                  }),
            null != A
                ? (0, r.jsxs)('div', {
                      className: m.paymentSourceWarning,
                      children: [
                          (0, r.jsx)(l.P4T, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              className: m.paymentSourceWarningIcon,
                              color: s.Z.unsafe_rawColors.YELLOW_300.css
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: 'text-xs/normal',
                              children: A
                          })
                      ]
                  })
                : null
        ]
    });
}
