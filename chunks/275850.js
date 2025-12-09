n.d(t, { ZP: () => C }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(199849),
    c = n(159691),
    u = n(481060),
    d = n(987032),
    f = n(219929),
    p = n(46141),
    _ = n(63063),
    m = n(981631),
    h = n(231338),
    g = n(388032),
    E = n(171609);
let b = "***@***.***",
    y = "****",
    O = "***",
    v = "new_payment_source_id",
    S = new p.dm({
        id: v,
        brand: f.ZP.Types.UNKNOWN,
        type: m.HeQ.CARD,
    });
function I(e, t) {
    if (e instanceof p.dm)
        return e.id === v
            ? {
                  brand: null,
                  label: g.intl.string(g.t.eQ2bLp),
              }
            : {
                  brand: t ? f.ZP.Types.UNKNOWN : e.brand,
                  label: g.intl.formatToPlainString(g.t.QvBAQk, { last4: t ? y : e.last4 }),
              };
    if (e instanceof p.qo)
        return {
            brand: f.ZP.Types.PAYPAL,
            label: t ? b : e.email,
        };
    if (e instanceof p.Sf)
        return {
            brand: f.ZP.Types.SOFORT,
            label: t ? b : e.email,
        };
    if (e instanceof p.fv)
        return {
            brand: f.ZP.Types.GIROPAY,
            label: g.intl.string(g.t["y+0MQZ"]),
        };
    if (e instanceof p.Vg)
        return {
            brand: f.ZP.Types.PRZELEWY24,
            label: t ? b : e.email,
        };
    else if (e instanceof p.sn)
        return {
            brand: f.ZP.Types.PAYSAFECARD,
            label: g.intl.string(g.t.e3APTT),
        };
    else if (e instanceof p.o_)
        return {
            brand: f.ZP.Types.GCASH,
            label: g.intl.string(g.t.PjehcF),
        };
    else if (e instanceof p.kX)
        return {
            brand: f.ZP.Types.GRABPAY,
            label: g.intl.string(g.t.T5davE),
        };
    else if (e instanceof p.z)
        return {
            brand: f.ZP.Types.MOMO_WALLET,
            label: g.intl.string(g.t.J0A1Vk),
        };
    else if (e instanceof p.Xc)
        return {
            brand: f.ZP.Types.VENMO,
            label: t ? O : "@" + e.username,
        };
    else if (e instanceof p.Om)
        return {
            brand: f.ZP.Types.KAKAOPAY,
            label: g.intl.string(g.t.CSVexi),
        };
    else if (e instanceof p.JC)
        return {
            brand: f.ZP.Types.GOPAY_WALLET,
            label: g.intl.string(g.t["43J8JK"]),
        };
    else if (e instanceof p.U4)
        return {
            brand: f.ZP.Types.BANCONTACT,
            label: g.intl.string(g.t["1ITkfq"]),
        };
    else if (e instanceof p.D0)
        return {
            brand: f.ZP.Types.EPS,
            label: g.intl.format(g.t.hSPoZw, { bank: (0, d.Ul)(e.bank) }),
        };
    else if (e instanceof p.jc)
        return {
            brand: f.ZP.Types.IDEAL,
            label:
                null == e.bank ? g.intl.string(g.t.nSbwqC) : g.intl.format(g.t["9kUlRU"], { bank: (0, d.YE)(e.bank) }),
        };
    else if (e instanceof p.u_)
        return {
            brand: f.ZP.Types.CASH_APP,
            label: t ? O : e.username,
        };
    throw Error("Invalid Payment Source");
}
function T(e, t, n) {
    if (t.value === v)
        return (0, r.jsx)("div", {
            className: E.paymentSourceLabel,
            children: t.label,
        });
    if (null != e) {
        let { brand: t, label: i } = I(e, n);
        return (0, r.jsxs)("div", {
            className: E.paymentSourceSelectedOption,
            children: [
                null != t ? (0, r.jsx)(f.ZP, { type: f.ZP.getType(t) }) : null,
                (0, r.jsx)("div", {
                    className: o()(E.paymentSourceLabel, { [E.error]: e.invalid }),
                    children: i,
                }),
            ],
        });
    }
    return (0, r.jsx)("div", {
        className: E.paymentSourceLabel,
        children: t.label,
    });
}
function A(e, t) {
    let n = null;
    return (
        e && null != t && !t.canRedeemTrial()
            ? (n = g.intl.string(g.t.SvheW9))
            : e &&
              null != t &&
              t.hasFlag(h.Cw.NEW) &&
              (n = g.intl.format(g.t.d7ZLKA, {
                  helpDeskArticle: _.Z.getArticleURL(m.BhN.PAYMENT_AUTHORIZATION_CHARGE),
              })),
        n
    );
}
function C(e) {
    let {
            label: t,
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: d,
            hidePersonalInformation: f,
            onChange: _,
            onPaymentSourceAdd: m,
            isTrial: h = !1,
            disabled: b = !1,
            className: y,
            optionClassName: O,
            dropdownLoading: C,
            paymentGatewayRestrictions: N,
        } = e,
        P = 0 === a.length,
        R = (e) => {
            if (e === v) null != m && m();
            else {
                let t = a.find((t) => t.id === e);
                null != _ && _(t);
            }
        },
        D = [...(null != d ? [d] : []), ...a, S].map((e, t) => {
            if (e instanceof p.ZP) {
                let { label: t } = I(e, f),
                    n = e === S || null == N || (null == N ? void 0 : N.includes(e.paymentGateway));
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
        x = A(
            h,
            i.useMemo(() => a.find((e) => e.id === n), [a, n]),
        );
    if (null == n && null != N && N.length > 0) {
        let e = a.filter((e) => N.includes(e.paymentGateway));
        n = 0 === e.length ? v : e[0].id;
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            P
                ? (0, r.jsx)(c.zxk, {
                      variant: "primary",
                      fullWidth: !0,
                      onClick: m,
                      text: g.intl.string(g.t.eQ2bLp),
                  })
                : (0, r.jsx)(l.y6, {
                      options: D,
                      value: n,
                      label: t,
                      onChange: R,
                      isDisabled: b,
                      className: o()({ [E.paymentSourceHasWarning]: null != x }, y),
                      optionClassName: O,
                      placeholder: g.intl.string(g.t["8lqkf8"]),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return C
                              ? (0, r.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE })
                              : T(null == t.value ? void 0 : w.get(t.value), t, f);
                      },
                      renderOptionLabel: (e) => T(null == e.value ? void 0 : w.get(e.value), e, f),
                  }),
            null != x
                ? (0, r.jsxs)("div", {
                      className: E.paymentSourceWarning,
                      children: [
                          (0, r.jsx)(u.Mgn, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: E.paymentSourceWarningIcon,
                              color: s.Z.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/normal",
                              children: x,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
