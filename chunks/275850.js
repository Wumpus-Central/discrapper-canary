n.d(t, { ZP: () => A }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(159691),
    c = n(481060),
    u = n(987032),
    d = n(219929),
    f = n(46141),
    _ = n(63063),
    p = n(981631),
    h = n(231338),
    m = n(388032),
    g = n(171609);
let E = "***@***.***",
    b = "****",
    y = "***",
    O = "new_payment_source_id",
    v = new f.dm({
        id: O,
        brand: d.ZP.Types.UNKNOWN,
        type: p.HeQ.CARD,
    });
function I(e, t) {
    if (e instanceof f.dm)
        return e.id === O
            ? {
                  brand: null,
                  label: m.intl.string(m.t.eQ2bLp),
              }
            : {
                  brand: t ? d.ZP.Types.UNKNOWN : e.brand,
                  label: m.intl.formatToPlainString(m.t.QvBAQk, { last4: t ? b : e.last4 }),
              };
    if (e instanceof f.qo)
        return {
            brand: d.ZP.Types.PAYPAL,
            label: t ? E : e.email,
        };
    if (e instanceof f.Sf)
        return {
            brand: d.ZP.Types.SOFORT,
            label: t ? E : e.email,
        };
    if (e instanceof f.fv)
        return {
            brand: d.ZP.Types.GIROPAY,
            label: m.intl.string(m.t["y+0MQZ"]),
        };
    if (e instanceof f.Vg)
        return {
            brand: d.ZP.Types.PRZELEWY24,
            label: t ? E : e.email,
        };
    else if (e instanceof f.sn)
        return {
            brand: d.ZP.Types.PAYSAFECARD,
            label: m.intl.string(m.t.e3APTT),
        };
    else if (e instanceof f.o_)
        return {
            brand: d.ZP.Types.GCASH,
            label: m.intl.string(m.t.PjehcF),
        };
    else if (e instanceof f.kX)
        return {
            brand: d.ZP.Types.GRABPAY,
            label: m.intl.string(m.t.T5davE),
        };
    else if (e instanceof f.z)
        return {
            brand: d.ZP.Types.MOMO_WALLET,
            label: m.intl.string(m.t.J0A1Vk),
        };
    else if (e instanceof f.Xc)
        return {
            brand: d.ZP.Types.VENMO,
            label: t ? y : "@" + e.username,
        };
    else if (e instanceof f.Om)
        return {
            brand: d.ZP.Types.KAKAOPAY,
            label: m.intl.string(m.t.CSVexi),
        };
    else if (e instanceof f.JC)
        return {
            brand: d.ZP.Types.GOPAY_WALLET,
            label: m.intl.string(m.t["43J8JK"]),
        };
    else if (e instanceof f.U4)
        return {
            brand: d.ZP.Types.BANCONTACT,
            label: m.intl.string(m.t["1ITkfq"]),
        };
    else if (e instanceof f.D0)
        return {
            brand: d.ZP.Types.EPS,
            label: m.intl.format(m.t.hSPoZw, { bank: (0, u.Ul)(e.bank) }),
        };
    else if (e instanceof f.jc)
        return {
            brand: d.ZP.Types.IDEAL,
            label:
                null == e.bank ? m.intl.string(m.t.nSbwqC) : m.intl.format(m.t["9kUlRU"], { bank: (0, u.YE)(e.bank) }),
        };
    else if (e instanceof f.u_)
        return {
            brand: d.ZP.Types.CASH_APP,
            label: t ? y : e.username,
        };
    throw Error("Invalid Payment Source");
}
function T(e, t, n) {
    if (t.value === O)
        return (0, r.jsx)("div", {
            className: g.paymentSourceLabel,
            children: t.label,
        });
    if (null != e) {
        let { brand: t, label: i } = I(e, n);
        return (0, r.jsxs)("div", {
            className: g.paymentSourceSelectedOption,
            children: [
                null != t ? (0, r.jsx)(d.ZP, { type: d.ZP.getType(t) }) : null,
                (0, r.jsx)("div", {
                    className: o()(g.paymentSourceLabel, { [g.error]: e.invalid }),
                    children: i,
                }),
            ],
        });
    }
    return (0, r.jsx)("div", {
        className: g.paymentSourceLabel,
        children: t.label,
    });
}
function S(e, t) {
    let n = null;
    return (
        e && null != t && !t.canRedeemTrial()
            ? (n = m.intl.string(m.t.SvheW9))
            : e &&
              null != t &&
              t.hasFlag(h.Cw.NEW) &&
              (n = m.intl.format(m.t.d7ZLKA, {
                  helpDeskArticle: _.Z.getArticleURL(p.BhN.PAYMENT_AUTHORIZATION_CHARGE),
              })),
        n
    );
}
function A(e) {
    let {
            label: t,
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: u,
            hidePersonalInformation: d,
            onChange: _,
            onPaymentSourceAdd: p,
            isTrial: h = !1,
            disabled: E = !1,
            className: b,
            optionClassName: y,
            dropdownLoading: A,
            paymentGatewayRestrictions: C,
        } = e,
        N = 0 === a.length,
        R = (e) => {
            if (e === O) null != p && p();
            else {
                let t = a.find((t) => t.id === e);
                null != _ && _(t);
            }
        },
        P = [...(null != u ? [u] : []), ...a, v].map((e, t) => {
            if (e instanceof f.ZP) {
                let { label: t } = I(e, d),
                    n = e === v || null == C || (null == C ? void 0 : C.includes(e.paymentGateway));
                return {
                    value: e.id,
                    label: t,
                    disabled: !n,
                };
            }
            return {
                key: t,
                value: e.value,
                label: e.label,
            };
        }),
        D = i.useMemo(() => new Map(a.map((e) => [e.id, e])), [a]),
        w = S(
            h,
            i.useMemo(() => a.find((e) => e.id === n), [a, n]),
        );
    if (null == n && null != C && C.length > 0) {
        let e = a.filter((e) => C.includes(e.paymentGateway));
        n = 0 === e.length ? O : e[0].id;
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N
                ? (0, r.jsx)(l.zxk, {
                      variant: "primary",
                      fullWidth: !0,
                      onClick: p,
                      text: m.intl.string(m.t.eQ2bLp),
                  })
                : (0, r.jsx)(c.q4e, {
                      options: P,
                      value: n,
                      label: t,
                      onChange: R,
                      isDisabled: E,
                      className: o()({ [g.paymentSourceHasWarning]: null != w }, b),
                      optionClassName: y,
                      placeholder: m.intl.string(m.t["8lqkf8"]),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return A
                              ? (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE })
                              : T(null == t.value ? void 0 : D.get(t.value), t, d);
                      },
                      renderOptionLabel: (e) => T(null == e.value ? void 0 : D.get(e.value), e, d),
                  }),
            null != w
                ? (0, r.jsxs)("div", {
                      className: g.paymentSourceWarning,
                      children: [
                          (0, r.jsx)(c.Mgn, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: g.paymentSourceWarningIcon,
                              color: s.Z.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              children: w,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
