n.d(t, { Ay: () => b, Sm: () => x });
var l = n(477900),
    i = n(582128),
    r = n(702841),
    a = n(821609),
    s = n(289873),
    o = n(866665),
    u = n(887555),
    c = n(277984),
    d = n(176095),
    p = n(6151),
    m = n(826469),
    h = n(812745),
    C = n(202613),
    f = n(975571),
    E = n(580630),
    S = n(935208),
    y = n(652215),
    A = n(818348),
    P = n(375708),
    I = n(477729),
    g = n(832505),
    v = n(632815);
let _ = "***@***.***",
    T = new C.YS({ id: p.a, brand: h.Ay.Types.UNKNOWN, type: y.hes.CARD });
function x(e, t, n) {
    if (e instanceof C.YS)
        return e.id === p.a
            ? { brand: null, label: P.intl.string(P.t.eQ2bLp) }
            : e.isStripeLinkBankAccount
              ? {
                    brand: h.Ay.Types.BANK,
                    label: P.intl.formatToPlainString(P.t.ixNwPL, {
                        date: t ? "********" : new Date(S.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? h.Ay.Types.UNKNOWN : e.brand,
                    label: P.intl.formatToPlainString(P.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof C.SJ) return { brand: h.Ay.Types.PAYPAL, label: t ? _ : e.email };
    if (e instanceof C.A0) return { brand: h.Ay.Types.SOFORT, label: t ? _ : e.email };
    if (e instanceof C.Qh) return { brand: h.Ay.Types.GIROPAY, label: P.intl.string(P.t["y+0MQZ"]) };
    if (e instanceof C.Tu) return { brand: h.Ay.Types.PRZELEWY24, label: t ? _ : e.email };
    else if (e instanceof C.Ux) return { brand: h.Ay.Types.PAYSAFECARD, label: P.intl.string(P.t.e3APTT) };
    else if (e instanceof C.F_) return { brand: h.Ay.Types.GCASH, label: P.intl.string(P.t.PjehcF) };
    else if (e instanceof C.Xj) return { brand: h.Ay.Types.GRABPAY, label: P.intl.string(P.t.T5davE) };
    else if (e instanceof C.am) return { brand: h.Ay.Types.MOMO_WALLET, label: P.intl.string(P.t.J0A1Vk) };
    else if (e instanceof C._1) return { brand: h.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof C.i6) return { brand: h.Ay.Types.KAKAOPAY, label: P.intl.string(P.t.CSVexi) };
    else if (e instanceof C.cg) return { brand: h.Ay.Types.GOPAY_WALLET, label: P.intl.string(P.t["43J8JK"]) };
    else if (e instanceof C.UG) return { brand: h.Ay.Types.BANCONTACT, label: P.intl.string(P.t["1ITkfq"]) };
    else if (e instanceof C.rJ)
        return { brand: h.Ay.Types.EPS, label: P.intl.format(P.t.hSPoZw, { bank: (0, u.j)(e.bank) }) };
    else if (e instanceof C.EE)
        return {
            brand: h.Ay.Types.IDEAL,
            label:
                null == e.bank ? P.intl.string(P.t.nSbwqC) : P.intl.format(P.t["9kUlRU"], { bank: (0, u.o)(e.bank) }),
        };
    else if (e instanceof C.FQ) return { brand: h.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof C.LQ)
        return {
            brand: h.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? P.intl.formatToPlainString(g.default["Jz6+Oj"], { amount: n })
                    : P.intl.string(g.default["/FQWfA"]),
        };
    else if (e instanceof C.IE) return { brand: h.Ay.Types.PIX, label: P.intl.string(P.t.JG3WQU) };
    throw Error("Invalid Payment Source");
}
function N(e) {
    let { onClick: t, disabled: n } = e;
    return (0, l.jsx)(a.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: t,
        text: P.intl.string(P.t.eQ2bLp),
        disabled: n,
    });
}
function b(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: h,
            onPaymentSourceAdd: S,
            isTrial: g = !1,
            disabled: _ = !1,
            dropdownLoading: b,
            paymentGatewayRestrictions: R,
            newPaymentMethodOptionLabel: j,
            defaultPaymentSourceId: M,
            tooltipText: O,
            resolvePaymentSourceOptions: L,
        } = e,
        {
            hasNoPaymentSources: k,
            handleChange: w,
            paymentSource: U,
            paymentSourceOptions: D,
            selectedPaymentSourceId: G,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: l,
                    hidePersonalInformation: a,
                    onChange: s,
                    onPaymentSourceAdd: o,
                    paymentGatewayRestrictions: u,
                    includeNewPaymentSourceOption: h,
                } = e,
                f = i.useMemo(() => n.find((e) => (e instanceof m.A ? e.source : e) instanceof C.LQ)?.id ?? null, [n]);
            i.useEffect(() => {
                null != f && (0, c.YP)(f);
            }, [f]);
            let S = (0, r.bG)([d.A], () => {
                    if (null == f) return null;
                    let e = d.A.getBalance(f);
                    return null != e ? (0, E.$g)(e.amount, e.currency) : null;
                }, [f]),
                y = 0 === n.length,
                A = null != l ? [l] : [],
                g = [...A, ...n, ...(h ? [T] : [])].map((e, t) => {
                    if (e instanceof m.A) {
                        let t,
                            { brand: n, label: l } = x(e.source, a, S);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = P.intl.string(I.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? P.intl.string(I.default.WJmme7)
                                          : P.intl.string(I.default["Kv+vV7"])),
                            { value: e.id, label: l, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof C.Ay) {
                        let t,
                            { brand: n, label: l } = x(e, a, S);
                        return (
                            (t = e === T || null == u || !(u.length > 0) || u.includes(e.paymentGateway)),
                            { value: e.id, label: l, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                v = i.useMemo(() => {
                    let e = t;
                    if (null == e && null != u && u.length > 0) {
                        let t = n.filter((e) => u.includes(e.paymentGateway));
                        e = 0 === t.length ? p.a : t[0].id;
                    }
                    let l = n.filter((e) => e instanceof m.A);
                    return l.length > 0 && l.every((e) => !e.enabled) && (e = p.a), e;
                }, [t, u, n]);
            return {
                hasNoPaymentSources: y,
                handleChange: function (e) {
                    if (e === p.a) null != o && o();
                    else {
                        let t = n.find((t) => t.id === e),
                            l = t instanceof m.A ? t.source : t;
                        null != s && s(l);
                    }
                },
                prependOptions: A,
                paymentSourceOptions: g,
                paymentSource: i.useMemo(() => n.find((e) => e.id === v), [n, v]),
                selectedPaymentSourceId: v,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: h,
            onPaymentSourceAdd: S,
            paymentGatewayRestrictions: R,
            includeNewPaymentSourceOption: !1,
        }),
        F = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: l, defaultPaymentSourceId: i } = e,
                r = n instanceof m.A ? n.source : n;
            if (null != r) {
                if (t && !r.canRedeemTrial()) return P.intl.string(P.t.SvheW9);
                if (t && r.hasFlag(A.rI.NEW))
                    return P.intl.format(P.t.d7ZLKA, {
                        helpDeskArticle: f.A.getArticleURL(y.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let a = l.filter((e) => e instanceof m.A);
            if (a.length > 0) {
                if (!a.some((e) => e.enabled)) return P.intl.string(I.default["3kMstB"]);
                if (null != i) {
                    let e = a.find((e) => e.id === i),
                        t = null != e && !e.enabled,
                        l = null != n && n.id !== i;
                    if (t && l) return P.intl.string(I.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: g, selectedPaymentSource: U, paymentSources: n, defaultPaymentSourceId: M }),
        B = i.useMemo(() => {
            let e = D.map((e) => {
                let { label: t, brand: n, ...l } = e;
                return { id: null != l.key ? `${l.key}` : l.value, label: t ?? "", icon: n ?? void 0, ...l };
            });
            return null != L ? L(e) : e;
        }, [D, L]),
        H = i.useMemo(() => (null != S ? S : () => {}), [S]);
    if (b) return (0, l.jsx)("div", { className: v.h, children: (0, l.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }) });
    if (k) return (0, l.jsx)(N, { onClick: S, disabled: _ });
    let Y = (0, l.jsx)(p.v, {
        value: G ?? null,
        options: B,
        onChange: w,
        onNew: H,
        disabled: _,
        newPaymentMethodOptionLabel: j,
        noticeMessage: F,
    });
    return null != O ? (0, l.jsx)(o.m, { asContainer: !0, text: O, children: Y }) : Y;
}
