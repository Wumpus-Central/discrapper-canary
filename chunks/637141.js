"use strict";
n.d(t, { Ay: () => L, Sm: () => R });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(990078),
    o = n(821609),
    l = n(289873),
    u = n(887555),
    d = n(277984),
    c = n(176095),
    _ = n(6151),
    h = n(826469),
    f = n(812745),
    E = n(202613),
    p = n(975571),
    m = n(580630),
    g = n(935208),
    A = n(652215),
    I = n(818348),
    T = n(375708),
    S = n(327105),
    N = n(776409),
    C = n(714246);
let y = "***@***.***",
    v = new E.YS({ id: _.a, brand: f.Ay.Types.UNKNOWN, type: A.hes.CARD });
function R(e, t, n) {
    if (e instanceof E.YS)
        return e.id === _.a
            ? { brand: null, label: T.intl.string(T.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: f.Ay.Types.BANK,
                    label: T.intl.formatToPlainString(T.t.ixNwPL, {
                        date: t ? "********" : new Date(g.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? f.Ay.Types.UNKNOWN : e.brand,
                    label: T.intl.formatToPlainString(T.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof E.SJ) return { brand: f.Ay.Types.PAYPAL, label: t ? y : e.email };
    if (e instanceof E.A0) return { brand: f.Ay.Types.SOFORT, label: t ? y : e.email };
    if (e instanceof E.Qh) return { brand: f.Ay.Types.GIROPAY, label: T.intl.string(T.t["y+0MQZ"]) };
    if (e instanceof E.Tu) return { brand: f.Ay.Types.PRZELEWY24, label: t ? y : e.email };
    else if (e instanceof E.Ux) return { brand: f.Ay.Types.PAYSAFECARD, label: T.intl.string(T.t.e3APTT) };
    else if (e instanceof E.F_) return { brand: f.Ay.Types.GCASH, label: T.intl.string(T.t.PjehcF) };
    else if (e instanceof E.Xj) return { brand: f.Ay.Types.GRABPAY, label: T.intl.string(T.t.T5davE) };
    else if (e instanceof E.am) return { brand: f.Ay.Types.MOMO_WALLET, label: T.intl.string(T.t.J0A1Vk) };
    else if (e instanceof E._1) return { brand: f.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof E.i6) return { brand: f.Ay.Types.KAKAOPAY, label: T.intl.string(T.t.CSVexi) };
    else if (e instanceof E.cg) return { brand: f.Ay.Types.GOPAY_WALLET, label: T.intl.string(T.t["43J8JK"]) };
    else if (e instanceof E.UG) return { brand: f.Ay.Types.BANCONTACT, label: T.intl.string(T.t["1ITkfq"]) };
    else if (e instanceof E.rJ)
        return { brand: f.Ay.Types.EPS, label: T.intl.format(T.t.hSPoZw, { bank: (0, u.j)(e.bank) }) };
    else if (e instanceof E.EE)
        return {
            brand: f.Ay.Types.IDEAL,
            label:
                null == e.bank ? T.intl.string(T.t.nSbwqC) : T.intl.format(T.t["9kUlRU"], { bank: (0, u.o)(e.bank) }),
        };
    else if (e instanceof E.FQ) return { brand: f.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof E.LQ)
        return {
            brand: f.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? T.intl.formatToPlainString(N.default["Jz6+Oj"], { amount: n })
                    : T.intl.string(N.default["/FQWfA"]),
        };
    else if (e instanceof E.IE) return { brand: f.Ay.Types.PIX, label: T.intl.string(T.t.JG3WQU) };
    throw Error("Invalid Payment Source");
}
function O(e) {
    let {
            onPaymentSourceAdd: t,
            dropdownLoading: n,
            disabled: s,
            handleChange: a,
            paymentSourceOptions: o,
            selectedPaymentSourceId: l,
            newPaymentMethodOptionLabel: u,
            noticeMessage: d,
            resolvePaymentSourceOptions: c,
        } = e,
        h = r.useMemo(() => {
            let e = o.map((e) => {
                let { label: t, brand: n, ...i } = e;
                return { id: null != i.key ? `${i.key}` : i.value, label: t ?? "", icon: n ?? void 0, ...i };
            });
            return null != c ? c(e) : e;
        }, [o, c]),
        f = r.useMemo(
            () => ({
                value: l ?? null,
                options: h,
                onChange: a,
                onNew: null != t ? t : () => {},
                disabled: s || n,
                newPaymentMethodOptionLabel: u,
            }),
            [l, h, a, t, s, n, u],
        );
    return (0, i.jsx)(_.v, { ...f, noticeMessage: d });
}
function b(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.$, { variant: "primary", fullWidth: !0, onClick: t, text: T.intl.string(T.t.eQ2bLp) });
}
function L(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: o,
            hidePersonalInformation: u,
            onChange: f,
            onPaymentSourceAdd: g,
            isTrial: N = !1,
            disabled: y = !1,
            dropdownLoading: L,
            paymentGatewayRestrictions: D,
            newPaymentMethodOptionLabel: P,
            defaultPaymentSourceId: w,
            tooltipText: M,
            resolvePaymentSourceOptions: x,
        } = e,
        {
            hasNoPaymentSources: U,
            handleChange: k,
            paymentSource: G,
            paymentSourceOptions: V,
            selectedPaymentSourceId: F,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: i,
                    hidePersonalInformation: a,
                    onChange: o,
                    onPaymentSourceAdd: l,
                    paymentGatewayRestrictions: u,
                    includeNewPaymentSourceOption: f,
                } = e,
                p = r.useMemo(() => n.find((e) => (e instanceof h.A ? e.source : e) instanceof E.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != p && (0, d.YP)(p);
            }, [p]);
            let g = (0, s.bG)([c.A], () => {
                    if (null == p) return null;
                    let e = c.A.getBalance(p);
                    return null != e ? (0, m.$g)(e.amount, e.currency) : null;
                }, [p]),
                A = 0 === n.length,
                I = null != i ? [i] : [],
                N = [...I, ...n, ...(f ? [v] : [])].map((e, t) => {
                    if (e instanceof h.A) {
                        let t,
                            { brand: n, label: i } = R(e.source, a, g);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = T.intl.string(S.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? T.intl.string(S.default.WJmme7)
                                          : T.intl.string(S.default["Kv+vV7"])),
                            { value: e.id, label: i, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof E.Ay) {
                        let t,
                            { brand: n, label: i } = R(e, a, g);
                        return (
                            (t = e === v || null == u || !(u.length > 0) || u.includes(e.paymentGateway)),
                            { value: e.id, label: i, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                C = r.useMemo(() => {
                    let e = t;
                    if (null == e && null != u && u.length > 0) {
                        let t = n.filter((e) => u.includes(e.paymentGateway));
                        e = 0 === t.length ? _.a : t[0].id;
                    }
                    let i = n.filter((e) => e instanceof h.A);
                    return i.length > 0 && i.every((e) => !e.enabled) && (e = _.a), e;
                }, [t, u, n]);
            return {
                hasNoPaymentSources: A,
                handleChange: (e) => {
                    if (e === _.a) null != l && l();
                    else {
                        let t = n.find((t) => t.id === e),
                            i = t instanceof h.A ? t.source : t;
                        null != o && o(i);
                    }
                },
                prependOptions: I,
                paymentSourceOptions: N,
                paymentSource: r.useMemo(() => n.find((e) => e.id === C), [n, C]),
                selectedPaymentSourceId: C,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: o,
            hidePersonalInformation: u,
            onChange: f,
            onPaymentSourceAdd: g,
            paymentGatewayRestrictions: D,
            includeNewPaymentSourceOption: !1,
        }),
        B = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: i, defaultPaymentSourceId: r } = e,
                s = n instanceof h.A ? n.source : n;
            if (null != s) {
                if (t && !s.canRedeemTrial()) return T.intl.string(T.t.SvheW9);
                if (t && s.hasFlag(I.rI.NEW))
                    return T.intl.format(T.t.d7ZLKA, {
                        helpDeskArticle: p.A.getArticleURL(A.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let a = i.filter((e) => e instanceof h.A);
            if (a.length > 0) {
                if (!a.some((e) => e.enabled)) return T.intl.string(S.default["3kMstB"]);
                if (null != r) {
                    let e = a.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        i = null != n && n.id !== r;
                    if (t && i) return T.intl.string(S.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: N, selectedPaymentSource: G, paymentSources: n, defaultPaymentSourceId: w });
    if (L) return (0, i.jsx)("div", { className: C.h, children: (0, i.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS }) });
    if (U) return (0, i.jsx)(b, { onClick: g });
    let j = (0, i.jsx)(O, {
        resolvePaymentSourceOptions: x,
        onPaymentSourceAdd: g,
        disabled: y,
        handleChange: k,
        paymentSourceOptions: V,
        selectedPaymentSourceId: F,
        newPaymentMethodOptionLabel: P,
        noticeMessage: B,
    });
    return null != M ? (0, i.jsx)(a.m, { asContainer: !0, text: M, children: j }) : j;
}
