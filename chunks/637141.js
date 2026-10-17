n.d(t, { Ay: () => b, Sm: () => T });
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
    S = n(580630),
    E = n(935208),
    I = n(652215),
    g = n(818348),
    y = n(105292),
    A = n(649975),
    P = n(693351),
    v = n(632815);
let x = "***@***.***",
    _ = new C.YS({ id: p.a, brand: h.Ay.Types.UNKNOWN, type: I.hes.CARD });
function T(e, t, n) {
    if (e instanceof C.YS)
        return e.id === p.a
            ? { brand: null, label: y.intl.string(y.t.eQ2bLp) }
            : e.isStripeLinkBankAccount
              ? {
                    brand: h.Ay.Types.BANK,
                    label: y.intl.formatToPlainString(y.t.ixNwPL, {
                        date: t ? "********" : new Date(E.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? h.Ay.Types.UNKNOWN : e.brand,
                    label: y.intl.formatToPlainString(y.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof C.SJ) return { brand: h.Ay.Types.PAYPAL, label: t ? x : e.email };
    if (e instanceof C.A0) return { brand: h.Ay.Types.SOFORT, label: t ? x : e.email };
    if (e instanceof C.Qh) return { brand: h.Ay.Types.GIROPAY, label: y.intl.string(y.t["y+0MQZ"]) };
    if (e instanceof C.Tu) return { brand: h.Ay.Types.PRZELEWY24, label: t ? x : e.email };
    else if (e instanceof C.Ux) return { brand: h.Ay.Types.PAYSAFECARD, label: y.intl.string(y.t.e3APTT) };
    else if (e instanceof C.F_) return { brand: h.Ay.Types.GCASH, label: y.intl.string(y.t.PjehcF) };
    else if (e instanceof C.Xj) return { brand: h.Ay.Types.GRABPAY, label: y.intl.string(y.t.T5davE) };
    else if (e instanceof C.am) return { brand: h.Ay.Types.MOMO_WALLET, label: y.intl.string(y.t.J0A1Vk) };
    else if (e instanceof C._1) return { brand: h.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof C.i6) return { brand: h.Ay.Types.KAKAOPAY, label: y.intl.string(y.t.CSVexi) };
    else if (e instanceof C.cg) return { brand: h.Ay.Types.GOPAY_WALLET, label: y.intl.string(y.t["43J8JK"]) };
    else if (e instanceof C.UG) return { brand: h.Ay.Types.BANCONTACT, label: y.intl.string(y.t["1ITkfq"]) };
    else if (e instanceof C.rJ)
        return { brand: h.Ay.Types.EPS, label: y.intl.format(y.t.hSPoZw, { bank: (0, u.j)(e.bank) }) };
    else if (e instanceof C.EE)
        return {
            brand: h.Ay.Types.IDEAL,
            label:
                null == e.bank ? y.intl.string(y.t.nSbwqC) : y.intl.format(y.t["9kUlRU"], { bank: (0, u.o)(e.bank) }),
        };
    else if (e instanceof C.FQ) return { brand: h.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof C.LQ)
        return {
            brand: h.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? y.intl.formatToPlainString(P.default["Jz6+Oj"], { amount: n })
                    : y.intl.string(P.default["/FQWfA"]),
        };
    else if (e instanceof C.IE) return { brand: h.Ay.Types.PIX, label: y.intl.string(y.t.JG3WQU) };
    else if (e instanceof C.WV) return { brand: h.Ay.Types.PIX, label: y.intl.string(y.t.JkKNss) };
    throw Error("Invalid Payment Source");
}
function N(e) {
    let { onClick: t, disabled: n, variant: i = "primary", text: r = y.intl.string(y.t.eQ2bLp) } = e;
    return (0, l.jsx)(a.$, { variant: i, fullWidth: !0, onClick: t, text: r, disabled: n });
}
function b(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: h,
            onPaymentSourceAdd: E,
            isTrial: P = !1,
            disabled: x = !1,
            dropdownLoading: b,
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
                    includeNewPaymentSourceOption: h,
                } = e,
                f = i.useMemo(() => n.find((e) => (e instanceof m.A ? e.source : e) instanceof C.LQ)?.id ?? null, [n]);
            i.useEffect(() => {
                null != f && (0, c.YP)(f);
            }, [f]);
            let E = (0, r.bG)(
                    [d.A],
                    () => {
                        if (null == f) return null;
                        let e = d.A.getBalance(f);
                        return null != e ? (0, S.$g)(e.amount, e.currency) : null;
                    },
                    [f],
                ),
                I = 0 === n.length,
                g = null != l ? [l] : [],
                P = [...g, ...n, ...(h ? [_] : [])].map((e, t) => {
                    if (e instanceof m.A) {
                        let t,
                            { brand: n, label: l } = T(e.source, a, E);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = y.intl.string(A.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? y.intl.string(A.default.WJmme7)
                                          : y.intl.string(A.default["Kv+vV7"])),
                            { value: e.id, label: l, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof C.Ay) {
                        let t,
                            { brand: n, label: l } = T(e, a, E);
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
                        e = 0 === t.length ? p.a : t[0].id;
                    }
                    let l = n.filter((e) => e instanceof m.A);
                    return (l.length > 0 && l.every((e) => !e.enabled) && (e = p.a), e);
                }, [t, u, n]);
            return {
                hasNoPaymentSources: I,
                handleChange: function (e) {
                    if (e === p.a) null != o && o();
                    else {
                        let t = n.find((t) => t.id === e),
                            l = t instanceof m.A ? t.source : t;
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
            onChange: h,
            onPaymentSourceAdd: E,
            paymentGatewayRestrictions: j,
            includeNewPaymentSourceOption: !1,
        }),
        H = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: l, defaultPaymentSourceId: i } = e,
                r = n instanceof m.A ? n.source : n;
            if (null != r) {
                if (t && !r.canRedeemTrial()) return y.intl.string(y.t.SvheW9);
                if (t && r.hasFlag(g.rI.NEW))
                    return y.intl.format(y.t.d7ZLKA, {
                        helpDeskArticle: f.A.getArticleURL(I.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let a = l.filter((e) => e instanceof m.A);
            if (a.length > 0) {
                if (!a.some((e) => e.enabled)) return y.intl.string(A.default["3kMstB"]);
                if (null != i) {
                    let e = a.find((e) => e.id === i),
                        t = null != e && !e.enabled,
                        l = null != n && n.id !== i;
                    if (t && l) return y.intl.string(A.default.Y6lY0I);
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
        V = i.useMemo(() => (null != E ? E : () => {}), [E]);
    if (b) return (0, l.jsx)("div", { className: v.h, children: (0, l.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS }) });
    if (D) return (0, l.jsx)(N, { onClick: E, disabled: x, variant: k, text: w });
    let Y = (0, l.jsx)(p.v, {
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
