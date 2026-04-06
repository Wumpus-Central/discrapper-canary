"use strict";
n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(843282),
    u = n(990078),
    c = n(732955),
    d = n(397927),
    _ = n(887555),
    f = n(6151),
    p = n(826469),
    h = n(812745),
    m = n(202613),
    E = n(975571),
    g = n(652215),
    A = n(818348),
    I = n(985018),
    T = n(587286);
let S = "***@***.***",
    y = "****",
    v = "***",
    N = new m.YS({ id: f.a, brand: h.Ay.Types.UNKNOWN, type: g.hes.CARD });
function C(e, t) {
    if (e instanceof m.YS)
        return e.id === f.a
            ? { brand: null, label: I.intl.string(I.t.eQ2bLp) }
            : {
                  brand: t ? h.Ay.Types.UNKNOWN : e.brand,
                  label: I.intl.formatToPlainString(I.t.QvBAQk, { last4: t ? y : e.last4 }),
              };
    if (e instanceof m.SJ) return { brand: h.Ay.Types.PAYPAL, label: t ? S : e.email };
    if (e instanceof m.A0) return { brand: h.Ay.Types.SOFORT, label: t ? S : e.email };
    if (e instanceof m.Qh) return { brand: h.Ay.Types.GIROPAY, label: I.intl.string(I.t["y+0MQZ"]) };
    if (e instanceof m.Tu) return { brand: h.Ay.Types.PRZELEWY24, label: t ? S : e.email };
    else if (e instanceof m.Ux) return { brand: h.Ay.Types.PAYSAFECARD, label: I.intl.string(I.t.e3APTT) };
    else if (e instanceof m.F_) return { brand: h.Ay.Types.GCASH, label: I.intl.string(I.t.PjehcF) };
    else if (e instanceof m.Xj) return { brand: h.Ay.Types.GRABPAY, label: I.intl.string(I.t.T5davE) };
    else if (e instanceof m.am) return { brand: h.Ay.Types.MOMO_WALLET, label: I.intl.string(I.t.J0A1Vk) };
    else if (e instanceof m._1) return { brand: h.Ay.Types.VENMO, label: t ? v : "@" + e.username };
    else if (e instanceof m.i6) return { brand: h.Ay.Types.KAKAOPAY, label: I.intl.string(I.t.CSVexi) };
    else if (e instanceof m.cg) return { brand: h.Ay.Types.GOPAY_WALLET, label: I.intl.string(I.t["43J8JK"]) };
    else if (e instanceof m.UG) return { brand: h.Ay.Types.BANCONTACT, label: I.intl.string(I.t["1ITkfq"]) };
    else if (e instanceof m.rJ)
        return { brand: h.Ay.Types.EPS, label: I.intl.format(I.t.hSPoZw, { bank: (0, _.j)(e.bank) }) };
    else if (e instanceof m.EE)
        return {
            brand: h.Ay.Types.IDEAL,
            label:
                null == e.bank ? I.intl.string(I.t.nSbwqC) : I.intl.format(I.t["9kUlRU"], { bank: (0, _.o)(e.bank) }),
        };
    else if (e instanceof m.FQ) return { brand: h.Ay.Types.CASH_APP, label: t ? v : e.username };
    else if (e instanceof m.LQ) return { brand: null, label: I.intl.string(I.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function R(e, t, n) {
    if (t.value === f.a) return (0, r.jsx)("div", { className: T.wC, children: t.label });
    if (null != e) {
        let t = e instanceof p.A ? e.source : e,
            { brand: i, label: s } = C(t, n);
        return (0, r.jsxs)("div", {
            className: T.IF,
            children: [
                null != i ? (0, r.jsx)(h.Ay, { type: h.Ay.getType(i) }) : null,
                (0, r.jsx)("div", { className: a()(T.wC, { [T.z3]: t.invalid }), children: s }),
            ],
        });
    }
    return (0, r.jsx)("div", { className: T.wC, children: t.label });
}
function O(e) {
    let { isTrial: t, selectedPaymentSource: n, paymentSources: r, defaultPaymentSourceId: i } = e,
        s = n instanceof p.A ? n.source : n;
    if (null != s) {
        if (t && !s.canRedeemTrial()) return I.intl.string(I.t.SvheW9);
        if (t && s.hasFlag(A.rI.NEW))
            return I.intl.format(I.t.d7ZLKA, {
                helpDeskArticle: E.A.getArticleURL(g.MVz.PAYMENT_AUTHORIZATION_CHARGE),
            });
    }
    let a = r.filter((e) => e instanceof p.A);
    if (a.length > 0) {
        if (!a.some((e) => e.enabled)) return I.intl.string(I.t.OqbMBV);
        if (null != i) {
            let e = a.find((e) => e.id === i),
                t = null != e && !e.enabled,
                r = null != n && n.id !== i;
            if (t && r) return I.intl.string(I.t.cB98Am);
        }
    }
    return null;
}
let b = (e) => {
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
                if (e === f.a) null != o && o();
                else {
                    let t = n.find((t) => t.id === e),
                        r = t instanceof p.A ? t.source : t;
                    null != a && a(r);
                }
            },
            _ = null != r ? [r] : [],
            h = [..._, ...n, ...(u ? [N] : [])].map((e, t) => {
                if (e instanceof p.A) {
                    let { brand: t, label: n } = C(e.source, s);
                    return { value: e.id, label: n, brand: t, disabled: !e.enabled };
                }
                if (e instanceof m.Ay) {
                    let t,
                        { brand: n, label: r } = C(e, s);
                    return (
                        (t = e === N || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                        { value: e.id, label: r, brand: n, disabled: !t }
                    );
                }
                return { key: t, value: e.value, label: e.label };
            }),
            E = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            g = t;
        if (null == g && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            g = 0 === e.length ? f.a : e[0].id;
        }
        return {
            hasNoPaymentSources: c,
            handleChange: d,
            prependOptions: _,
            paymentSourceOptions: h,
            paymentSource: E,
            selectedPaymentSourceId: g,
        };
    },
    D = (e) => {
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
            _ = i.useMemo(
                () => ({
                    value: l ?? null,
                    options: d,
                    onChange: a,
                    onNew: null != t ? t : () => {},
                    disabled: s || n,
                    newPaymentMethodOptionLabel: u,
                }),
                [l, d, a, t, s, n, u],
            );
        return (0, r.jsx)(f.v, { ..._, noticeMessage: c });
    },
    L = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(c.$nd, { variant: "primary", fullWidth: !0, onClick: t, text: I.intl.string(I.t.eQ2bLp) });
    };
function w(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: _,
            isTrial: f = !1,
            disabled: p = !1,
            className: h,
            optionClassName: m,
            dropdownLoading: E,
            paymentGatewayRestrictions: g,
            shouldUseUnifiedCheckoutUI: A,
            newPaymentMethodOptionLabel: S,
            defaultPaymentSourceId: y,
            tooltipText: v,
        } = e,
        {
            hasNoPaymentSources: N,
            handleChange: C,
            paymentSource: w,
            paymentSourceOptions: M,
            selectedPaymentSourceId: x,
        } = b({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: _,
            paymentGatewayRestrictions: g,
            includeNewPaymentSourceOption: !A,
        }),
        P = i.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        k = O({ isTrial: f, selectedPaymentSource: w, paymentSources: n, defaultPaymentSourceId: y });
    if (E)
        return (0, r.jsx)("div", {
            className: T.hN,
            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
        });
    if (N) return (0, r.jsx)(L, { onClick: _ });
    let U = A
            ? (0, r.jsx)(D, {
                  onPaymentSourceAdd: _,
                  disabled: p,
                  handleChange: C,
                  paymentSourceOptions: M,
                  selectedPaymentSourceId: x,
                  newPaymentMethodOptionLabel: S,
                  noticeMessage: k,
              })
            : (0, r.jsx)(l.Te, {
                  options: M,
                  value: x,
                  onChange: C,
                  isDisabled: p,
                  className: h,
                  optionClassName: m,
                  placeholder: I.intl.string(I.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e;
                      return R(null == t.value ? void 0 : P.get(t.value), t, a);
                  },
                  renderOptionLabel: (e) => R(null == e.value ? void 0 : P.get(e.value), e, a),
                  "data-migration-pending": !0,
              }),
        G = null != v ? (0, r.jsx)(u.m, { asContainer: !0, text: v, children: U }) : U;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            G,
            null == k || A
                ? null
                : (0, r.jsxs)("div", {
                      className: T.ot,
                      children: [
                          (0, r.jsx)(d.EpV, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: T.fT,
                              color: o.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(d.Text, { variant: "text-xs/normal", children: k }),
                      ],
                  }),
        ],
    });
}
