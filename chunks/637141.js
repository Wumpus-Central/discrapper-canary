"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(843282),
    u = n(732955),
    c = n(397927),
    d = n(887555),
    _ = n(6151),
    f = n(826469),
    h = n(812745),
    p = n(202613),
    g = n(975571),
    E = n(652215),
    A = n(818348),
    I = n(985018),
    T = n(101541);
let y = "***@***.***",
    S = "****",
    v = "***",
    C = new p.YS({ id: _.a, brand: h.Ay.Types.UNKNOWN, type: E.hes.CARD });
function b(e, t) {
    if (e instanceof p.YS)
        return e.id === _.a
            ? { brand: null, label: I.intl.string(I.t.eQ2bLp) }
            : {
                  brand: t ? h.Ay.Types.UNKNOWN : e.brand,
                  label: I.intl.formatToPlainString(I.t.QvBAQk, { last4: t ? S : e.last4 }),
              };
    if (e instanceof p.SJ) return { brand: h.Ay.Types.PAYPAL, label: t ? y : e.email };
    if (e instanceof p.A0) return { brand: h.Ay.Types.SOFORT, label: t ? y : e.email };
    if (e instanceof p.Qh) return { brand: h.Ay.Types.GIROPAY, label: I.intl.string(I.t["y+0MQZ"]) };
    if (e instanceof p.Tu) return { brand: h.Ay.Types.PRZELEWY24, label: t ? y : e.email };
    else if (e instanceof p.Ux) return { brand: h.Ay.Types.PAYSAFECARD, label: I.intl.string(I.t.e3APTT) };
    else if (e instanceof p.F_) return { brand: h.Ay.Types.GCASH, label: I.intl.string(I.t.PjehcF) };
    else if (e instanceof p.Xj) return { brand: h.Ay.Types.GRABPAY, label: I.intl.string(I.t.T5davE) };
    else if (e instanceof p.am) return { brand: h.Ay.Types.MOMO_WALLET, label: I.intl.string(I.t.J0A1Vk) };
    else if (e instanceof p._1) return { brand: h.Ay.Types.VENMO, label: t ? v : "@" + e.username };
    else if (e instanceof p.i6) return { brand: h.Ay.Types.KAKAOPAY, label: I.intl.string(I.t.CSVexi) };
    else if (e instanceof p.cg) return { brand: h.Ay.Types.GOPAY_WALLET, label: I.intl.string(I.t["43J8JK"]) };
    else if (e instanceof p.UG) return { brand: h.Ay.Types.BANCONTACT, label: I.intl.string(I.t["1ITkfq"]) };
    else if (e instanceof p.rJ)
        return { brand: h.Ay.Types.EPS, label: I.intl.format(I.t.hSPoZw, { bank: (0, d.jK)(e.bank) }) };
    else if (e instanceof p.EE)
        return {
            brand: h.Ay.Types.IDEAL,
            label:
                null == e.bank ? I.intl.string(I.t.nSbwqC) : I.intl.format(I.t["9kUlRU"], { bank: (0, d.o0)(e.bank) }),
        };
    else if (e instanceof p.FQ) return { brand: h.Ay.Types.CASH_APP, label: t ? v : e.username };
    else if (e instanceof p.LQ) return { brand: null, label: I.intl.string(I.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function N(e, t, n) {
    if (t.value === _.a) return (0, r.jsx)("div", { className: T.wC, children: t.label });
    if (null != e) {
        let t = e instanceof f.A ? e.source : e,
            { brand: i, label: a } = b(t, n);
        return (0, r.jsxs)("div", {
            className: T.IF,
            children: [
                null != i ? (0, r.jsx)(h.Ay, { type: h.Ay.getType(i) }) : null,
                (0, r.jsx)("div", { className: s()(T.wC, { [T.z3]: t.invalid }), children: a }),
            ],
        });
    }
    return (0, r.jsx)("div", { className: T.wC, children: t.label });
}
function R(e) {
    let { isTrial: t, selectedPaymentSource: n, paymentSources: r, defaultPaymentSourceId: i } = e,
        a = n instanceof f.A ? n.source : n;
    if (null != a) {
        if (t && !a.canRedeemTrial()) return I.intl.string(I.t.SvheW9);
        if (t && a.hasFlag(A.rI.NEW))
            return I.intl.format(I.t.d7ZLKA, {
                helpDeskArticle: g.A.getArticleURL(E.MVz.PAYMENT_AUTHORIZATION_CHARGE),
            });
    }
    let s = r.filter((e) => e instanceof f.A);
    if (s.length > 0) {
        if (!s.some((e) => e.enabled)) return I.intl.string(I.t.OqbMBV);
        if (null != i) {
            let e = s.find((e) => e.id === i),
                t = null != e && !e.enabled,
                r = null != n && n.id !== i;
            if (t && r) return I.intl.string(I.t.cB98Am);
        }
    }
    return null;
}
let O = (e) => {
        let {
                selectedPaymentSourceId: t,
                paymentSources: n,
                prependOption: r,
                hidePersonalInformation: a,
                onChange: s,
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
                    null != s && s(r);
                }
            },
            h = null != r ? [r] : [],
            g = [...h, ...n, ...(u ? [C] : [])].map((e, t) => {
                if (e instanceof f.A) {
                    let { brand: t, label: n } = b(e.source, a);
                    return { value: e.id, label: n, brand: t, disabled: !e.enabled };
                }
                if (e instanceof p.Ay) {
                    let t,
                        { brand: n, label: r } = b(e, a);
                    return (
                        (t = e === C || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                        { value: e.id, label: r, brand: n, disabled: !t }
                    );
                }
                return { key: t, value: e.value, label: e.label };
            }),
            E = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            A = t;
        if (null == A && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            A = 0 === e.length ? _.a : e[0].id;
        }
        return {
            hasNoPaymentSources: c,
            handleChange: d,
            prependOptions: h,
            paymentSourceOptions: g,
            paymentSource: E,
            selectedPaymentSourceId: A,
        };
    },
    D = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: a,
                handleChange: s,
                paymentSourceOptions: o,
                selectedPaymentSourceId: l,
                newPaymentMethodOptionLabel: u,
                errorMessage: c,
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
                    label: I.intl.string(I.t["u+Cw58"]),
                    value: l ?? null,
                    options: d,
                    onChange: s,
                    onNew: null != t ? t : () => {},
                    disabled: a || n,
                    newPaymentMethodOptionLabel: u,
                }),
                [l, d, s, t, a, n, u],
            );
        return (0, r.jsx)(_.v, { ...f, error: c });
    };
function L(e) {
    let {
            label: t,
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: s,
            hidePersonalInformation: d,
            onChange: _,
            onPaymentSourceAdd: f,
            isTrial: h = !1,
            disabled: p = !1,
            className: g,
            optionClassName: E,
            dropdownLoading: A,
            paymentGatewayRestrictions: y,
            shouldUseUnifiedCheckoutUI: S,
            newPaymentMethodOptionLabel: v,
            defaultPaymentSourceId: C,
        } = e,
        {
            hasNoPaymentSources: b,
            handleChange: L,
            paymentSource: w,
            paymentSourceOptions: x,
            selectedPaymentSourceId: P,
        } = O({
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: s,
            hidePersonalInformation: d,
            onChange: _,
            onPaymentSourceAdd: f,
            paymentGatewayRestrictions: y,
            includeNewPaymentSourceOption: !S,
        }),
        M = i.useMemo(() => new Map(a.map((e) => [e.id, e])), [a]),
        k = R({ isTrial: h, selectedPaymentSource: w, paymentSources: a, defaultPaymentSourceId: C }),
        U = S
            ? (0, r.jsx)(D, {
                  onPaymentSourceAdd: f,
                  disabled: p,
                  handleChange: L,
                  paymentSourceOptions: x,
                  selectedPaymentSourceId: P,
                  newPaymentMethodOptionLabel: v,
                  errorMessage: k,
              })
            : A
              ? (0, r.jsx)("div", {
                    className: T.hN,
                    children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                })
              : b
                ? (0, r.jsx)(u.$nd, { variant: "primary", fullWidth: !0, onClick: f, text: I.intl.string(I.t.eQ2bLp) })
                : (0, r.jsx)(l.Te, {
                      options: x,
                      value: P,
                      label: t,
                      onChange: L,
                      isDisabled: p,
                      className: g,
                      optionClassName: E,
                      placeholder: I.intl.string(I.t["8lqkf8"]),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return A
                              ? (0, r.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE })
                              : N(null == t.value ? void 0 : M.get(t.value), t, d);
                      },
                      renderOptionLabel: (e) => N(null == e.value ? void 0 : M.get(e.value), e, d),
                      "data-migration-pending": !0,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            U,
            null == k || S
                ? null
                : (0, r.jsxs)("div", {
                      className: T.ot,
                      children: [
                          (0, r.jsx)(c.EpV, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: T.fT,
                              color: o.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(c.Text, { variant: "text-xs/normal", children: k }),
                      ],
                  }),
        ],
    });
}
