"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(843282),
    u = n(732955),
    c = n(397927),
    d = n(887555),
    _ = n(6151),
    f = n(826469),
    p = n(812745),
    h = n(202613),
    m = n(975571),
    E = n(652215),
    g = n(818348),
    A = n(985018),
    I = n(130219);
let T = "***@***.***",
    S = "****",
    y = "***",
    v = new h.YS({ id: _.a, brand: p.Ay.Types.UNKNOWN, type: E.hes.CARD });
function N(e, t) {
    if (e instanceof h.YS)
        return e.id === _.a
            ? { brand: null, label: A.intl.string(A.t.eQ2bLp) }
            : {
                  brand: t ? p.Ay.Types.UNKNOWN : e.brand,
                  label: A.intl.formatToPlainString(A.t.QvBAQk, { last4: t ? S : e.last4 }),
              };
    if (e instanceof h.SJ) return { brand: p.Ay.Types.PAYPAL, label: t ? T : e.email };
    if (e instanceof h.A0) return { brand: p.Ay.Types.SOFORT, label: t ? T : e.email };
    if (e instanceof h.Qh) return { brand: p.Ay.Types.GIROPAY, label: A.intl.string(A.t["y+0MQZ"]) };
    if (e instanceof h.Tu) return { brand: p.Ay.Types.PRZELEWY24, label: t ? T : e.email };
    else if (e instanceof h.Ux) return { brand: p.Ay.Types.PAYSAFECARD, label: A.intl.string(A.t.e3APTT) };
    else if (e instanceof h.F_) return { brand: p.Ay.Types.GCASH, label: A.intl.string(A.t.PjehcF) };
    else if (e instanceof h.Xj) return { brand: p.Ay.Types.GRABPAY, label: A.intl.string(A.t.T5davE) };
    else if (e instanceof h.am) return { brand: p.Ay.Types.MOMO_WALLET, label: A.intl.string(A.t.J0A1Vk) };
    else if (e instanceof h._1) return { brand: p.Ay.Types.VENMO, label: t ? y : "@" + e.username };
    else if (e instanceof h.i6) return { brand: p.Ay.Types.KAKAOPAY, label: A.intl.string(A.t.CSVexi) };
    else if (e instanceof h.cg) return { brand: p.Ay.Types.GOPAY_WALLET, label: A.intl.string(A.t["43J8JK"]) };
    else if (e instanceof h.UG) return { brand: p.Ay.Types.BANCONTACT, label: A.intl.string(A.t["1ITkfq"]) };
    else if (e instanceof h.rJ)
        return { brand: p.Ay.Types.EPS, label: A.intl.format(A.t.hSPoZw, { bank: (0, d.j)(e.bank) }) };
    else if (e instanceof h.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank ? A.intl.string(A.t.nSbwqC) : A.intl.format(A.t["9kUlRU"], { bank: (0, d.o)(e.bank) }),
        };
    else if (e instanceof h.FQ) return { brand: p.Ay.Types.CASH_APP, label: t ? y : e.username };
    else if (e instanceof h.LQ) return { brand: null, label: A.intl.string(A.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function C(e, t, n) {
    if (t.value === _.a) return (0, r.jsx)("div", { className: I.wC, children: t.label });
    if (null != e) {
        let t = e instanceof f.A ? e.source : e,
            { brand: i, label: s } = N(t, n);
        return (0, r.jsxs)("div", {
            className: I.IF,
            children: [
                null != i ? (0, r.jsx)(p.Ay, { type: p.Ay.getType(i) }) : null,
                (0, r.jsx)("div", { className: a()(I.wC, { [I.z3]: t.invalid }), children: s }),
            ],
        });
    }
    return (0, r.jsx)("div", { className: I.wC, children: t.label });
}
function R(e) {
    let { isTrial: t, selectedPaymentSource: n, paymentSources: r, defaultPaymentSourceId: i } = e,
        s = n instanceof f.A ? n.source : n;
    if (null != s) {
        if (t && !s.canRedeemTrial()) return A.intl.string(A.t.SvheW9);
        if (t && s.hasFlag(g.rI.NEW))
            return A.intl.format(A.t.d7ZLKA, {
                helpDeskArticle: m.A.getArticleURL(E.MVz.PAYMENT_AUTHORIZATION_CHARGE),
            });
    }
    let a = r.filter((e) => e instanceof f.A);
    if (a.length > 0) {
        if (!a.some((e) => e.enabled)) return A.intl.string(A.t.OqbMBV);
        if (null != i) {
            let e = a.find((e) => e.id === i),
                t = null != e && !e.enabled,
                r = null != n && n.id !== i;
            if (t && r) return A.intl.string(A.t.cB98Am);
        }
    }
    return null;
}
let O = (e) => {
        let {
                selectedPaymentSourceId: t,
                paymentSources: n,
                prependOption: r,
                hidePersonalInformation: s,
                onChange: a,
                onPaymentSourceAdd: o,
                paymentGatewayRestrictions: l,
                includeNewPaymentSourceOption: u,
            } = e,
            c = 0 === n.length,
            d = (e) => {
                if (e === _.a) null != o && o();
                else {
                    let t = n.find((t) => t.id === e),
                        r = t instanceof f.A ? t.source : t;
                    null != a && a(r);
                }
            },
            p = null != r ? [r] : [],
            m = [...p, ...n, ...(u ? [v] : [])].map((e, t) => {
                if (e instanceof f.A) {
                    let { brand: t, label: n } = N(e.source, s);
                    return { value: e.id, label: n, brand: t, disabled: !e.enabled };
                }
                if (e instanceof h.Ay) {
                    let t,
                        { brand: n, label: r } = N(e, s);
                    return (
                        (t = e === v || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                        { value: e.id, label: r, brand: n, disabled: !t }
                    );
                }
                return { key: t, value: e.value, label: e.label };
            }),
            E = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            g = t;
        if (null == g && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            g = 0 === e.length ? _.a : e[0].id;
        }
        return {
            hasNoPaymentSources: c,
            handleChange: d,
            prependOptions: p,
            paymentSourceOptions: m,
            paymentSource: E,
            selectedPaymentSourceId: g,
        };
    },
    b = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: s,
                handleChange: a,
                paymentSourceOptions: o,
                selectedPaymentSourceId: l,
                newPaymentMethodOptionLabel: u,
                noticeMessage: c,
            } = e,
            d = i.useMemo(
                () =>
                    o.map((e) => {
                        let { label: t, brand: n, ...r } = e;
                        return { id: null != r.key ? `${r.key}` : r.value, label: t ?? "", icon: n ?? void 0, ...r };
                    }),
                [o],
            ),
            f = i.useMemo(
                () => ({
                    label: A.intl.string(A.t["u+Cw58"]),
                    value: l ?? null,
                    options: d,
                    onChange: a,
                    onNew: null != t ? t : () => {},
                    disabled: s || n,
                    newPaymentMethodOptionLabel: u,
                }),
                [l, d, a, t, s, n, u],
            );
        return (0, r.jsx)(_.v, { ...f, noticeMessage: c });
    },
    D = (e) => {
        let { onClick: t, shouldUseUnifiedCheckoutUI: n } = e,
            s = i.useMemo(
                () =>
                    (0, r.jsx)(u.$nd, {
                        variant: "primary",
                        fullWidth: !0,
                        onClick: t,
                        text: A.intl.string(A.t.eQ2bLp),
                    }),
                [t],
            );
        return n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.Text, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: I.bM,
                          children: A.intl.string(A.t["u+Cw58"]),
                      }),
                      s,
                  ],
              })
            : s;
    };
function L(e) {
    let {
            label: t,
            selectedPaymentSourceId: n,
            paymentSources: s,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: d,
            onPaymentSourceAdd: _,
            isTrial: f = !1,
            disabled: p = !1,
            className: h,
            optionClassName: m,
            dropdownLoading: E,
            paymentGatewayRestrictions: g,
            shouldUseUnifiedCheckoutUI: T,
            newPaymentMethodOptionLabel: S,
            defaultPaymentSourceId: y,
        } = e,
        {
            hasNoPaymentSources: v,
            handleChange: N,
            paymentSource: L,
            paymentSourceOptions: w,
            selectedPaymentSourceId: M,
        } = O({
            selectedPaymentSourceId: n,
            paymentSources: s,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: d,
            onPaymentSourceAdd: _,
            paymentGatewayRestrictions: g,
            includeNewPaymentSourceOption: !T,
        }),
        x = i.useMemo(() => new Map(s.map((e) => [e.id, e])), [s]),
        P = R({ isTrial: f, selectedPaymentSource: L, paymentSources: s, defaultPaymentSourceId: y });
    if (E)
        return (0, r.jsx)("div", {
            className: I.hN,
            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
        });
    if (v) return (0, r.jsx)(D, { onClick: _, shouldUseUnifiedCheckoutUI: T });
    let k = T
        ? (0, r.jsx)(b, {
              onPaymentSourceAdd: _,
              disabled: p,
              handleChange: N,
              paymentSourceOptions: w,
              selectedPaymentSourceId: M,
              newPaymentMethodOptionLabel: S,
              noticeMessage: P,
          })
        : (0, r.jsx)(l.Te, {
              options: w,
              value: M,
              label: t,
              onChange: N,
              isDisabled: p,
              className: h,
              optionClassName: m,
              placeholder: A.intl.string(A.t["8lqkf8"]),
              renderOptionValue: (e) => {
                  let [t] = e;
                  return C(null == t.value ? void 0 : x.get(t.value), t, u);
              },
              renderOptionLabel: (e) => C(null == e.value ? void 0 : x.get(e.value), e, u),
              "data-migration-pending": !0,
          });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            k,
            null == P || T
                ? null
                : (0, r.jsxs)("div", {
                      className: I.ot,
                      children: [
                          (0, r.jsx)(c.EpV, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: I.fT,
                              color: o.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(c.Text, { variant: "text-xs/normal", children: P }),
                      ],
                  }),
        ],
    });
}
