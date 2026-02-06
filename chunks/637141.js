"use strict";
n.d(t, { A: () => D });
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
    p = n(812745),
    h = n(202613),
    m = n(975571),
    g = n(652215),
    E = n(818348),
    A = n(985018),
    I = n(101541);
let T = "***@***.***",
    S = "****",
    y = "***",
    v = new h.YS({ id: _.a, brand: p.Ay.Types.UNKNOWN, type: g.hes.CARD });
function C(e, t) {
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
        return { brand: p.Ay.Types.EPS, label: A.intl.format(A.t.hSPoZw, { bank: (0, d.jK)(e.bank) }) };
    else if (e instanceof h.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank ? A.intl.string(A.t.nSbwqC) : A.intl.format(A.t["9kUlRU"], { bank: (0, d.o0)(e.bank) }),
        };
    else if (e instanceof h.FQ) return { brand: p.Ay.Types.CASH_APP, label: t ? y : e.username };
    else if (e instanceof h.LQ) return { brand: null, label: A.intl.string(A.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function N(e, t, n) {
    if (t.value === _.a) return (0, r.jsx)("div", { className: I.wC, children: t.label });
    if (null != e) {
        let t = e instanceof f.A ? e.source : e,
            { brand: i, label: a } = C(t, n);
        return (0, r.jsxs)("div", {
            className: I.IF,
            children: [
                null != i ? (0, r.jsx)(p.Ay, { type: p.Ay.getType(i) }) : null,
                (0, r.jsx)("div", { className: s()(I.wC, { [I.z3]: t.invalid }), children: a }),
            ],
        });
    }
    return (0, r.jsx)("div", { className: I.wC, children: t.label });
}
function b(e) {
    let { isTrial: t, selectedPaymentSource: n, paymentSources: r, defaultPaymentSourceId: i } = e,
        a = n instanceof f.A ? n.source : n;
    if (null != a) {
        if (t && !a.canRedeemTrial()) return A.intl.string(A.t.SvheW9);
        if (t && a.hasFlag(E.rI.NEW))
            return A.intl.format(A.t.d7ZLKA, {
                helpDeskArticle: m.A.getArticleURL(g.MVz.PAYMENT_AUTHORIZATION_CHARGE),
            });
    }
    let s = r.filter((e) => e instanceof f.A);
    if (s.length > 0) {
        if (!s.some((e) => e.enabled)) return A.intl.string(A.t.OqbMBV);
        if (null != i) {
            let e = s.find((e) => e.id === i),
                t = null != e && !e.enabled,
                r = null != n && n.id !== i;
            if (t && r) return A.intl.string(A.t.cB98Am);
        }
    }
    return null;
}
let R = (e) => {
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
            p = null != r ? [r] : [],
            m = [...p, ...n, ...(u ? [v] : [])].map((e, t) => {
                if (e instanceof f.A) {
                    let { brand: t, label: n } = C(e.source, a);
                    return { value: e.id, label: n, brand: t, disabled: !e.enabled };
                }
                if (e instanceof h.Ay) {
                    let t,
                        { brand: n, label: r } = C(e, a);
                    return (
                        (t = e === v || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                        { value: e.id, label: r, brand: n, disabled: !t }
                    );
                }
                return { key: t, value: e.value, label: e.label };
            }),
            g = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            E = t;
        if (null == E && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            E = 0 === e.length ? _.a : e[0].id;
        }
        return {
            hasNoPaymentSources: c,
            handleChange: d,
            prependOptions: p,
            paymentSourceOptions: m,
            paymentSource: g,
            selectedPaymentSourceId: E,
        };
    },
    O = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: a,
                handleChange: s,
                paymentSourceOptions: o,
                selectedPaymentSourceId: l,
                newPaymentMethodOptionLabel: u,
            } = e,
            c = i.useMemo(
                () =>
                    o.map((e) => {
                        let { label: t, brand: n, ...r } = e;
                        return { id: null != r.key ? `${r.key}` : r.value, label: t ?? "", icon: n ?? void 0, ...r };
                    }),
                [o],
            ),
            d = i.useMemo(
                () => ({
                    label: A.intl.string(A.t["u+Cw58"]),
                    value: l ?? null,
                    options: c,
                    onChange: s,
                    onNew: null != t ? t : () => {},
                    disabled: a || n,
                    newPaymentMethodOptionLabel: u,
                }),
                [l, c, s, t, a, n, u],
            );
        return (0, r.jsx)(_.v, { ...d });
    };
function D(e) {
    let {
            label: t,
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: s,
            hidePersonalInformation: d,
            onChange: _,
            onPaymentSourceAdd: f,
            isTrial: p = !1,
            disabled: h = !1,
            className: m,
            optionClassName: g,
            dropdownLoading: E,
            paymentGatewayRestrictions: T,
            shouldUseUnifiedCheckoutUI: S,
            newPaymentMethodOptionLabel: y,
            defaultPaymentSourceId: v,
        } = e,
        {
            hasNoPaymentSources: C,
            handleChange: D,
            paymentSource: L,
            paymentSourceOptions: w,
            selectedPaymentSourceId: x,
        } = R({
            selectedPaymentSourceId: n,
            paymentSources: a,
            prependOption: s,
            hidePersonalInformation: d,
            onChange: _,
            onPaymentSourceAdd: f,
            paymentGatewayRestrictions: T,
            includeNewPaymentSourceOption: !S,
        }),
        M = i.useMemo(() => new Map(a.map((e) => [e.id, e])), [a]),
        P = b({ isTrial: p, selectedPaymentSource: L, paymentSources: a, defaultPaymentSourceId: v }),
        k = S
            ? (0, r.jsx)(O, {
                  onPaymentSourceAdd: f,
                  disabled: h,
                  handleChange: D,
                  paymentSourceOptions: w,
                  selectedPaymentSourceId: x,
                  newPaymentMethodOptionLabel: y,
              })
            : E
              ? (0, r.jsx)("div", {
                    className: I.hN,
                    children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES }),
                })
              : C
                ? (0, r.jsx)(u.$nd, { variant: "primary", fullWidth: !0, onClick: f, text: A.intl.string(A.t.eQ2bLp) })
                : (0, r.jsx)(l.Te, {
                      options: w,
                      value: x,
                      label: t,
                      onChange: D,
                      isDisabled: h,
                      className: m,
                      optionClassName: g,
                      placeholder: A.intl.string(A.t["8lqkf8"]),
                      renderOptionValue: (e) => {
                          let [t] = e;
                          return E
                              ? (0, r.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE })
                              : N(null == t.value ? void 0 : M.get(t.value), t, d);
                      },
                      renderOptionLabel: (e) => N(null == e.value ? void 0 : M.get(e.value), e, d),
                      "data-migration-pending": !0,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            k,
            null != P
                ? (0, r.jsxs)("div", {
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
                  })
                : null,
        ],
    });
}
