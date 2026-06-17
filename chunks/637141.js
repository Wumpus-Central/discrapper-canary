"use strict";
n.d(t, { Ay: () => L, Sm: () => O });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(990078),
    o = n(821609),
    l = n(289873),
    u = n(887555),
    c = n(753390),
    d = n(546605),
    _ = n(176095),
    h = n(6151),
    f = n(826469),
    p = n(812745),
    E = n(202613),
    m = n(975571),
    g = n(580630),
    A = n(935208),
    I = n(652215),
    T = n(818348),
    S = n(375708),
    y = n(327105),
    C = n(776409),
    N = n(714246);
let v = "***@***.***",
    R = new E.YS({ id: h.a, brand: p.Ay.Types.UNKNOWN, type: I.hes.CARD });
function O(e, t, n) {
    if (e instanceof E.YS)
        return e.id === h.a
            ? { brand: null, label: S.intl.string(S.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: p.Ay.Types.BANK,
                    label: S.intl.formatToPlainString(S.t.ixNwPL, {
                        date: t ? "********" : new Date(A.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? p.Ay.Types.UNKNOWN : e.brand,
                    label: S.intl.formatToPlainString(S.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof E.SJ) return { brand: p.Ay.Types.PAYPAL, label: t ? v : e.email };
    if (e instanceof E.A0) return { brand: p.Ay.Types.SOFORT, label: t ? v : e.email };
    if (e instanceof E.Qh) return { brand: p.Ay.Types.GIROPAY, label: S.intl.string(S.t["y+0MQZ"]) };
    if (e instanceof E.Tu) return { brand: p.Ay.Types.PRZELEWY24, label: t ? v : e.email };
    else if (e instanceof E.Ux) return { brand: p.Ay.Types.PAYSAFECARD, label: S.intl.string(S.t.e3APTT) };
    else if (e instanceof E.F_) return { brand: p.Ay.Types.GCASH, label: S.intl.string(S.t.PjehcF) };
    else if (e instanceof E.Xj) return { brand: p.Ay.Types.GRABPAY, label: S.intl.string(S.t.T5davE) };
    else if (e instanceof E.am) return { brand: p.Ay.Types.MOMO_WALLET, label: S.intl.string(S.t.J0A1Vk) };
    else if (e instanceof E._1) return { brand: p.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof E.i6) return { brand: p.Ay.Types.KAKAOPAY, label: S.intl.string(S.t.CSVexi) };
    else if (e instanceof E.cg) return { brand: p.Ay.Types.GOPAY_WALLET, label: S.intl.string(S.t["43J8JK"]) };
    else if (e instanceof E.UG) return { brand: p.Ay.Types.BANCONTACT, label: S.intl.string(S.t["1ITkfq"]) };
    else if (e instanceof E.rJ)
        return { brand: p.Ay.Types.EPS, label: S.intl.format(S.t.hSPoZw, { bank: (0, u.j)(e.bank) }) };
    else if (e instanceof E.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank ? S.intl.string(S.t.nSbwqC) : S.intl.format(S.t["9kUlRU"], { bank: (0, u.o)(e.bank) }),
        };
    else if (e instanceof E.FQ) return { brand: p.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof E.LQ)
        return {
            brand: p.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? S.intl.formatToPlainString(C.default["Jz6+Oj"], { amount: n })
                    : S.intl.string(C.default["/FQWfA"]),
        };
    throw Error("Invalid Payment Source");
}
function b(e) {
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
        d = r.useMemo(
            () =>
                o.map((e) => {
                    let { label: t, brand: n, ...i } = e;
                    return { id: null != i.key ? `${i.key}` : i.value, label: t ?? "", icon: n ?? void 0, ...i };
                }),
            [o],
        ),
        _ = r.useMemo(
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
    return (0, i.jsx)(h.v, { ..._, noticeMessage: c });
}
function D(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.$, { variant: "primary", fullWidth: !0, onClick: t, text: S.intl.string(S.t.eQ2bLp) });
}
function L(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: o,
            hidePersonalInformation: u,
            onChange: p,
            onPaymentSourceAdd: A,
            isTrial: C = !1,
            disabled: v = !1,
            dropdownLoading: L,
            paymentGatewayRestrictions: w,
            newPaymentMethodOptionLabel: M,
            defaultPaymentSourceId: P,
            tooltipText: x,
        } = e,
        {
            hasNoPaymentSources: k,
            handleChange: U,
            paymentSource: G,
            paymentSourceOptions: F,
            selectedPaymentSourceId: V,
            isStoreCountryEnabled: B,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: i,
                    hidePersonalInformation: a,
                    onChange: o,
                    onPaymentSourceAdd: l,
                    paymentGatewayRestrictions: u,
                    includeNewPaymentSourceOption: p,
                } = e,
                m = (0, d.vg)("PaymentSourceDropdown"),
                A = r.useMemo(() => n.find((e) => (e instanceof f.A ? e.source : e) instanceof E.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != A && (0, c.YP)(A);
            }, [A]);
            let I = (0, s.bG)([_.A], () => {
                    if (null == A) return null;
                    let e = _.A.getBalance(A);
                    return null != e ? (0, g.$g)(e.amount, e.currency) : null;
                }, [A]),
                T = 0 === n.length,
                C = null != i ? [i] : [],
                N = [...C, ...n, ...(p ? [R] : [])].map((e, t) => {
                    if (e instanceof f.A) {
                        let t,
                            { brand: n, label: i } = O(e.source, a, I);
                        return (
                            m &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = S.intl.string(y.default.pWSgIu))
                                    : (t = S.intl.string(y.default["Kv+vV7"]))),
                            { value: e.id, label: i, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof E.Ay) {
                        let t,
                            { brand: n, label: i } = O(e, a, I);
                        return (
                            (t = e === R || null == u || !(u.length > 0) || u.includes(e.paymentGateway)),
                            { value: e.id, label: i, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                v = r.useMemo(() => {
                    let e = t;
                    if (null == e && null != u && u.length > 0) {
                        let t = n.filter((e) => u.includes(e.paymentGateway));
                        e = 0 === t.length ? h.a : t[0].id;
                    }
                    if (m) {
                        let t = n.filter((e) => e instanceof f.A);
                        t.length > 0 && t.every((e) => !e.enabled) && (e = h.a);
                    }
                    return e;
                }, [t, u, n, m]);
            return {
                hasNoPaymentSources: T,
                handleChange: (e) => {
                    if (e === h.a) null != l && l();
                    else {
                        let t = n.find((t) => t.id === e),
                            i = t instanceof f.A ? t.source : t;
                        null != o && o(i);
                    }
                },
                prependOptions: C,
                paymentSourceOptions: N,
                paymentSource: r.useMemo(() => n.find((e) => e.id === v), [n, v]),
                selectedPaymentSourceId: v,
                isStoreCountryEnabled: m,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: o,
            hidePersonalInformation: u,
            onChange: p,
            onPaymentSourceAdd: A,
            paymentGatewayRestrictions: w,
            includeNewPaymentSourceOption: !1,
        }),
        j = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: i,
                    defaultPaymentSourceId: r,
                    isStoreCountryEnabled: s,
                } = e,
                a = n instanceof f.A ? n.source : n;
            if (null != a) {
                if (t && !a.canRedeemTrial()) return S.intl.string(S.t.SvheW9);
                if (t && a.hasFlag(T.rI.NEW))
                    return S.intl.format(S.t.d7ZLKA, {
                        helpDeskArticle: m.A.getArticleURL(I.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let o = i.filter((e) => e instanceof f.A);
            if (o.length > 0) {
                if (!o.some((e) => e.enabled))
                    return s ? S.intl.string(y.default["3kMstB"]) : S.intl.string(S.t.OqbMBV);
                if (null != r) {
                    let e = o.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        i = null != n && n.id !== r;
                    if (t && i) return s ? S.intl.string(y.default.Y6lY0I) : S.intl.string(S.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: C,
            selectedPaymentSource: G,
            paymentSources: n,
            defaultPaymentSourceId: P,
            isStoreCountryEnabled: B,
        });
    if (L) return (0, i.jsx)("div", { className: N.h, children: (0, i.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS }) });
    if (k) return (0, i.jsx)(D, { onClick: A });
    let H = (0, i.jsx)(b, {
        onPaymentSourceAdd: A,
        disabled: v,
        handleChange: U,
        paymentSourceOptions: F,
        selectedPaymentSourceId: V,
        newPaymentMethodOptionLabel: M,
        noticeMessage: j,
    });
    return null != x ? (0, i.jsx)(a.m, { asContainer: !0, text: x, children: H }) : H;
}
