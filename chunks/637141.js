n.d(t, { Ay: () => N, Sm: () => T });
var l = n(477900),
    i = n(582128),
    r = n(702841),
    a = n(821609),
    s = n(289873),
    o = n(866665),
    u = n(887555),
    c = n(277984),
    d = n(176095),
    m = n(6151),
    p = n(826469),
    C = n(812745),
    h = n(202613),
    f = n(975571),
    E = n(580630),
    S = n(935208),
    y = n(652215),
    g = n(818348),
    I = n(105292),
    A = n(758476),
    P = n(493364),
    v = n(632815);
let x = "***@***.***",
    _ = new h.YS({ id: m.a, brand: C.Ay.Types.UNKNOWN, type: y.hes.CARD });
function T(e, t, n) {
    if (e instanceof h.YS)
        return e.id === m.a
            ? { brand: null, label: I.intl.string(I.t.eQ2bLp) }
            : e.isStripeLinkBankAccount
              ? {
                    brand: C.Ay.Types.BANK,
                    label: I.intl.formatToPlainString(I.t.ixNwPL, {
                        date: t ? "********" : new Date(S.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? C.Ay.Types.UNKNOWN : e.brand,
                    label: I.intl.formatToPlainString(I.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof h.SJ) return { brand: C.Ay.Types.PAYPAL, label: t ? x : e.email };
    if (e instanceof h.A0) return { brand: C.Ay.Types.SOFORT, label: t ? x : e.email };
    if (e instanceof h.Qh) return { brand: C.Ay.Types.GIROPAY, label: I.intl.string(I.t["y+0MQZ"]) };
    if (e instanceof h.Tu) return { brand: C.Ay.Types.PRZELEWY24, label: t ? x : e.email };
    else if (e instanceof h.Ux) return { brand: C.Ay.Types.PAYSAFECARD, label: I.intl.string(I.t.e3APTT) };
    else if (e instanceof h.F_) return { brand: C.Ay.Types.GCASH, label: I.intl.string(I.t.PjehcF) };
    else if (e instanceof h.Xj) return { brand: C.Ay.Types.GRABPAY, label: I.intl.string(I.t.T5davE) };
    else if (e instanceof h.am) return { brand: C.Ay.Types.MOMO_WALLET, label: I.intl.string(I.t.J0A1Vk) };
    else if (e instanceof h._1) return { brand: C.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof h.i6) return { brand: C.Ay.Types.KAKAOPAY, label: I.intl.string(I.t.CSVexi) };
    else if (e instanceof h.cg) return { brand: C.Ay.Types.GOPAY_WALLET, label: I.intl.string(I.t["43J8JK"]) };
    else if (e instanceof h.UG) return { brand: C.Ay.Types.BANCONTACT, label: I.intl.string(I.t["1ITkfq"]) };
    else if (e instanceof h.rJ)
        return { brand: C.Ay.Types.EPS, label: I.intl.format(I.t.hSPoZw, { bank: (0, u.j)(e.bank) }) };
    else if (e instanceof h.EE)
        return {
            brand: C.Ay.Types.IDEAL,
            label:
                null == e.bank ? I.intl.string(I.t.nSbwqC) : I.intl.format(I.t["9kUlRU"], { bank: (0, u.o)(e.bank) }),
        };
    else if (e instanceof h.FQ) return { brand: C.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof h.LQ)
        return {
            brand: C.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? I.intl.formatToPlainString(P.default["Jz6+Oj"], { amount: n })
                    : I.intl.string(P.default["/FQWfA"]),
        };
    else if (e instanceof h.IE) return { brand: C.Ay.Types.PIX, label: I.intl.string(I.t.JG3WQU) };
    else if (e instanceof h.WV) return { brand: C.Ay.Types.PIX, label: I.intl.string(I.t.JkKNss) };
    throw Error("Invalid Payment Source");
}
function b(e) {
    let { onClick: t, disabled: n, variant: i = "primary", text: r = I.intl.string(I.t.eQ2bLp) } = e;
    return (0, l.jsx)(a.$, { variant: i, fullWidth: !0, onClick: t, text: r, disabled: n });
}
function N(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: C,
            onPaymentSourceAdd: S,
            isTrial: P = !1,
            disabled: x = !1,
            dropdownLoading: N,
            paymentGatewayRestrictions: j,
            newPaymentMethodOptionLabel: R,
            defaultPaymentSourceId: O,
            tooltipText: M,
            resolvePaymentSourceOptions: L,
            addPaymentSourceVariant: k,
            addPaymentSourceText: w,
        } = e,
        {
            hasNoPaymentSources: D,
            handleChange: U,
            paymentSource: G,
            paymentSourceOptions: F,
            selectedPaymentSourceId: B,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: l,
                    hidePersonalInformation: a,
                    onChange: s,
                    onPaymentSourceAdd: o,
                    paymentGatewayRestrictions: u,
                    includeNewPaymentSourceOption: C,
                } = e,
                f = i.useMemo(() => n.find((e) => (e instanceof p.A ? e.source : e) instanceof h.LQ)?.id ?? null, [n]);
            i.useEffect(() => {
                null != f && (0, c.YP)(f);
            }, [f]);
            let S = (0, r.bG)(
                    [d.A],
                    () => {
                        if (null == f) return null;
                        let e = d.A.getBalance(f);
                        return null != e ? (0, E.$g)(e.amount, e.currency) : null;
                    },
                    [f],
                ),
                y = 0 === n.length,
                g = null != l ? [l] : [],
                P = [...g, ...n, ...(C ? [_] : [])].map((e, t) => {
                    if (e instanceof p.A) {
                        let t,
                            { brand: n, label: l } = T(e.source, a, S);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = I.intl.string(A.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? I.intl.string(A.default.WJmme7)
                                          : I.intl.string(A.default["Kv+vV7"])),
                            { value: e.id, label: l, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof h.Ay) {
                        let t,
                            { brand: n, label: l } = T(e, a, S);
                        return (
                            (t = e === _ || null == u || !(u.length > 0) || u.includes(e.paymentGateway)),
                            { value: e.id, label: l, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                v = i.useMemo(() => {
                    let e = t;
                    if (null == e && null != u && u.length > 0) {
                        let t = n.filter((e) => u.includes(e.paymentGateway));
                        e = 0 === t.length ? m.a : t[0].id;
                    }
                    let l = n.filter((e) => e instanceof p.A);
                    return (l.length > 0 && l.every((e) => !e.enabled) && (e = m.a), e);
                }, [t, u, n]);
            return {
                hasNoPaymentSources: y,
                handleChange: function (e) {
                    if (e === m.a) null != o && o();
                    else {
                        let t = n.find((t) => t.id === e),
                            l = t instanceof p.A ? t.source : t;
                        null != s && s(l);
                    }
                },
                prependOptions: g,
                paymentSourceOptions: P,
                paymentSource: i.useMemo(() => n.find((e) => e.id === v), [n, v]),
                selectedPaymentSourceId: v,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: C,
            onPaymentSourceAdd: S,
            paymentGatewayRestrictions: j,
            includeNewPaymentSourceOption: !1,
        }),
        H = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: l, defaultPaymentSourceId: i } = e,
                r = n instanceof p.A ? n.source : n;
            if (null != r) {
                if (t && !r.canRedeemTrial()) return I.intl.string(I.t.SvheW9);
                if (t && r.hasFlag(g.rI.NEW))
                    return I.intl.format(I.t.d7ZLKA, {
                        helpDeskArticle: f.A.getArticleURL(y.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let a = l.filter((e) => e instanceof p.A);
            if (a.length > 0) {
                if (!a.some((e) => e.enabled)) return I.intl.string(A.default["3kMstB"]);
                if (null != i) {
                    let e = a.find((e) => e.id === i),
                        t = null != e && !e.enabled,
                        l = null != n && n.id !== i;
                    if (t && l) return I.intl.string(A.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: P, selectedPaymentSource: G, paymentSources: n, defaultPaymentSourceId: O }),
        W = i.useMemo(() => {
            let e = F.map((e) => {
                let { label: t, brand: n, ...l } = e;
                return { id: null != l.key ? `${l.key}` : l.value, label: t ?? "", icon: n ?? void 0, ...l };
            });
            return null != L ? L(e) : e;
        }, [F, L]),
        V = i.useMemo(() => (null != S ? S : () => {}), [S]);
    if (N) return (0, l.jsx)("div", { className: v.h, children: (0, l.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }) });
    if (D) return (0, l.jsx)(b, { onClick: S, disabled: x, variant: k, text: w });
    let Y = (0, l.jsx)(m.v, {
        value: B ?? null,
        options: W,
        onChange: U,
        onNew: V,
        disabled: x,
        newPaymentMethodOptionLabel: R,
        noticeMessage: H,
    });
    return null != M ? (0, l.jsx)(o.m, { asContainer: !0, text: M, children: Y }) : Y;
}
