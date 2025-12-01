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
    p = n(63063),
    _ = n(981631),
    m = n(231338),
    h = n(388032),
    g = n(171609);
let E = "***@***.***",
    b = "****",
    y = "***",
    O = "new_payment_source_id",
    v = new f.dm({
        id: O,
        brand: d.ZP.Types.UNKNOWN,
        type: _.HeQ.CARD,
    });
function S(e, t) {
    if (e instanceof f.dm)
        return e.id === O
            ? {
                  brand: null,
                  label: h.intl.string(h.t.eQ2bLp),
              }
            : {
                  brand: t ? d.ZP.Types.UNKNOWN : e.brand,
                  label: h.intl.formatToPlainString(h.t.QvBAQk, { last4: t ? b : e.last4 }),
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
            label: h.intl.string(h.t["y+0MQZ"]),
        };
    if (e instanceof f.Vg)
        return {
            brand: d.ZP.Types.PRZELEWY24,
            label: t ? E : e.email,
        };
    else if (e instanceof f.sn)
        return {
            brand: d.ZP.Types.PAYSAFECARD,
            label: h.intl.string(h.t.e3APTT),
        };
    else if (e instanceof f.o_)
        return {
            brand: d.ZP.Types.GCASH,
            label: h.intl.string(h.t.PjehcF),
        };
    else if (e instanceof f.kX)
        return {
            brand: d.ZP.Types.GRABPAY,
            label: h.intl.string(h.t.T5davE),
        };
    else if (e instanceof f.z)
        return {
            brand: d.ZP.Types.MOMO_WALLET,
            label: h.intl.string(h.t.J0A1Vk),
        };
    else if (e instanceof f.Xc)
        return {
            brand: d.ZP.Types.VENMO,
            label: t ? y : "@" + e.username,
        };
    else if (e instanceof f.Om)
        return {
            brand: d.ZP.Types.KAKAOPAY,
            label: h.intl.string(h.t.CSVexi),
        };
    else if (e instanceof f.JC)
        return {
            brand: d.ZP.Types.GOPAY_WALLET,
            label: h.intl.string(h.t["43J8JK"]),
        };
    else if (e instanceof f.U4)
        return {
            brand: d.ZP.Types.BANCONTACT,
            label: h.intl.string(h.t["1ITkfq"]),
        };
    else if (e instanceof f.D0)
        return {
            brand: d.ZP.Types.EPS,
            label: h.intl.format(h.t.hSPoZw, { bank: (0, u.Ul)(e.bank) }),
        };
    else if (e instanceof f.jc)
        return {
            brand: d.ZP.Types.IDEAL,
            label:
                null == e.bank ? h.intl.string(h.t.nSbwqC) : h.intl.format(h.t["9kUlRU"], { bank: (0, u.YE)(e.bank) }),
        };
    else if (e instanceof f.u_)
        return {
            brand: d.ZP.Types.CASH_APP,
            label: t ? y : e.username,
        };
    throw Error("Invalid Payment Source");
}
function I(e, t, n) {
    if (t.value === O)
        return (0, r.jsx)("div", {
            className: g.paymentSourceLabel,
            children: t.label,
        });
    if (null != e) {
        let { brand: t, label: i } = S(e, n);
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
function T(e, t) {
    let n = null;
    return (
        e && null != t && !t.canRedeemTrial()
            ? (n = h.intl.string(h.t.SvheW9))
            : e &&
              null != t &&
              t.hasFlag(m.Cw.NEW) &&
              (n = h.intl.format(h.t.d7ZLKA, {
                  helpDeskArticle: p.Z.getArticleURL(_.BhN.PAYMENT_AUTHORIZATION_CHARGE),
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
            onChange: p,
            onPaymentSourceAdd: _,
            isTrial: m = !1,
            disabled: E = !1,
            className: b,
            optionClassName: y,
            dropdownLoading: A,
            paymentGatewayRestrictions: C,
        } = e,
        N = 0 === a.length,
        P = (e) => {
            if (e === O) null != _ && _();
            else {
                let t = a.find((t) => t.id === e);
                null != p && p(t);
            }
        },
        R = [...(null != u ? [u] : []), ...a, v].map((e, t) => {
            if (e instanceof f.ZP) {
                let { label: t } = S(e, d),
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
        w = i.useMemo(() => new Map(a.map((e) => [e.id, e])), [a]),
        D = T(
            m,
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
                      onClick: _,
                      text: h.intl.string(h.t.eQ2bLp),
                  })
                : (0, r.jsx)(c.q4e, {
                      options: R,
                      value: n,
                      label: t,
                      onChange: P,
                      isDisabled: E,
                      className: o()({ [g.paymentSourceHasWarning]: null != D }, b),
                      optionClassName: y,
                      placeholder: h.intl.string(h.t["8lqkf8"]),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return A
                              ? (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE })
                              : I(null == t.value ? void 0 : w.get(t.value), t, d);
                      },
                      renderOptionLabel: (e) => I(null == e.value ? void 0 : w.get(e.value), e, d),
                  }),
            null != D
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
                              children: D,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
