n.d(t, { Ay: () => P, Sm: () => j });
var s = n(477900),
    r = n(582128),
    i = n(702841),
    l = n(821609),
    a = n(289873),
    u = n(866665),
    c = n(887555),
    o = n(277984),
    d = n(176095),
    m = n(6151),
    f = n(826469),
    p = n(812745),
    x = n(202613),
    g = n(975571),
    v = n(580630),
    A = n(935208),
    h = n(652215),
    L = n(818348),
    C = n(375708),
    T = n(327105),
    I = n(776409),
    E = n(196190);
let y = "***@***.***",
    b = new x.YS({ id: m.a, brand: p.Ay.Types.UNKNOWN, type: h.hes.CARD });
function j(e, t, n) {
    if (e instanceof x.YS)
        return e.id === m.a
            ? { brand: null, label: C.intl.string(C.t.eQ2bLp) }
            : e.isStripeLinkBankAccount
              ? {
                    brand: p.Ay.Types.BANK,
                    label: C.intl.formatToPlainString(C.t.ixNwPL, {
                        date: t ? "********" : new Date(A.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? p.Ay.Types.UNKNOWN : e.brand,
                    label: C.intl.formatToPlainString(C.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof x.SJ) return { brand: p.Ay.Types.PAYPAL, label: t ? y : e.email };
    if (e instanceof x.A0) return { brand: p.Ay.Types.SOFORT, label: t ? y : e.email };
    if (e instanceof x.Qh) return { brand: p.Ay.Types.GIROPAY, label: C.intl.string(C.t["y+0MQZ"]) };
    if (e instanceof x.Tu) return { brand: p.Ay.Types.PRZELEWY24, label: t ? y : e.email };
    else if (e instanceof x.Ux) return { brand: p.Ay.Types.PAYSAFECARD, label: C.intl.string(C.t.e3APTT) };
    else if (e instanceof x.F_) return { brand: p.Ay.Types.GCASH, label: C.intl.string(C.t.PjehcF) };
    else if (e instanceof x.Xj) return { brand: p.Ay.Types.GRABPAY, label: C.intl.string(C.t.T5davE) };
    else if (e instanceof x.am) return { brand: p.Ay.Types.MOMO_WALLET, label: C.intl.string(C.t.J0A1Vk) };
    else if (e instanceof x._1) return { brand: p.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof x.i6) return { brand: p.Ay.Types.KAKAOPAY, label: C.intl.string(C.t.CSVexi) };
    else if (e instanceof x.cg) return { brand: p.Ay.Types.GOPAY_WALLET, label: C.intl.string(C.t["43J8JK"]) };
    else if (e instanceof x.UG) return { brand: p.Ay.Types.BANCONTACT, label: C.intl.string(C.t["1ITkfq"]) };
    else if (e instanceof x.rJ)
        return { brand: p.Ay.Types.EPS, label: C.intl.format(C.t.hSPoZw, { bank: (0, c.j)(e.bank) }) };
    else if (e instanceof x.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank ? C.intl.string(C.t.nSbwqC) : C.intl.format(C.t["9kUlRU"], { bank: (0, c.o)(e.bank) }),
        };
    else if (e instanceof x.FQ) return { brand: p.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof x.LQ)
        return {
            brand: p.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? C.intl.formatToPlainString(I.default["Jz6+Oj"], { amount: n })
                    : C.intl.string(I.default["/FQWfA"]),
        };
    else if (e instanceof x.IE) return { brand: p.Ay.Types.PIX, label: C.intl.string(C.t.JG3WQU) };
    throw Error("Invalid Payment Source");
}
function N(e) {
    let {
            onPaymentSourceAdd: t,
            dropdownLoading: n,
            disabled: i,
            handleChange: l,
            paymentSourceOptions: a,
            selectedPaymentSourceId: u,
            newPaymentMethodOptionLabel: c,
            noticeMessage: o,
            resolvePaymentSourceOptions: d,
        } = e,
        f = r.useMemo(() => {
            let e = a.map((e) => {
                let { label: t, brand: n, ...s } = e;
                return { id: null != s.key ? `${s.key}` : s.value, label: t ?? "", icon: n ?? void 0, ...s };
            });
            return null != d ? d(e) : e;
        }, [a, d]),
        p = r.useMemo(
            () => ({
                value: u ?? null,
                options: f,
                onChange: l,
                onNew: null != t ? t : () => {},
                disabled: i || n,
                newPaymentMethodOptionLabel: c,
            }),
            [u, f, l, t, i, n, c],
        );
    return (0, s.jsx)(m.v, { ...p, noticeMessage: o });
}
function S(e) {
    let { onClick: t, disabled: n } = e;
    return (0, s.jsx)(l.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: t,
        text: C.intl.string(C.t.eQ2bLp),
        disabled: n,
    });
}
function P(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: c,
            onChange: p,
            onPaymentSourceAdd: A,
            isTrial: I = !1,
            disabled: y = !1,
            dropdownLoading: P,
            paymentGatewayRestrictions: _,
            newPaymentMethodOptionLabel: M,
            defaultPaymentSourceId: R,
            tooltipText: D,
            resolvePaymentSourceOptions: U,
        } = e,
        {
            hasNoPaymentSources: w,
            handleChange: O,
            paymentSource: k,
            paymentSourceOptions: W,
            selectedPaymentSourceId: F,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: s,
                    hidePersonalInformation: l,
                    onChange: a,
                    onPaymentSourceAdd: u,
                    paymentGatewayRestrictions: c,
                    includeNewPaymentSourceOption: p,
                } = e,
                g = r.useMemo(() => n.find((e) => (e instanceof f.A ? e.source : e) instanceof x.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != g && (0, o.YP)(g);
            }, [g]);
            let A = (0, i.bG)([d.A], () => {
                    if (null == g) return null;
                    let e = d.A.getBalance(g);
                    return null != e ? (0, v.$g)(e.amount, e.currency) : null;
                }, [g]),
                h = 0 === n.length,
                L = null != s ? [s] : [],
                I = [...L, ...n, ...(p ? [b] : [])].map((e, t) => {
                    if (e instanceof f.A) {
                        let t,
                            { brand: n, label: s } = j(e.source, l, A);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = C.intl.string(T.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? C.intl.string(T.default.WJmme7)
                                          : C.intl.string(T.default["Kv+vV7"])),
                            { value: e.id, label: s, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof x.Ay) {
                        let t,
                            { brand: n, label: s } = j(e, l, A);
                        return (
                            (t = e === b || null == c || !(c.length > 0) || c.includes(e.paymentGateway)),
                            { value: e.id, label: s, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                E = r.useMemo(() => {
                    let e = t;
                    if (null == e && null != c && c.length > 0) {
                        let t = n.filter((e) => c.includes(e.paymentGateway));
                        e = 0 === t.length ? m.a : t[0].id;
                    }
                    let s = n.filter((e) => e instanceof f.A);
                    return s.length > 0 && s.every((e) => !e.enabled) && (e = m.a), e;
                }, [t, c, n]);
            return {
                hasNoPaymentSources: h,
                handleChange: function (e) {
                    if (e === m.a) null != u && u();
                    else {
                        let t = n.find((t) => t.id === e),
                            s = t instanceof f.A ? t.source : t;
                        null != a && a(s);
                    }
                },
                prependOptions: L,
                paymentSourceOptions: I,
                paymentSource: r.useMemo(() => n.find((e) => e.id === E), [n, E]),
                selectedPaymentSourceId: E,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: c,
            onChange: p,
            onPaymentSourceAdd: A,
            paymentGatewayRestrictions: _,
            includeNewPaymentSourceOption: !1,
        }),
        G = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: s, defaultPaymentSourceId: r } = e,
                i = n instanceof f.A ? n.source : n;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return C.intl.string(C.t.SvheW9);
                if (t && i.hasFlag(L.rI.NEW))
                    return C.intl.format(C.t.d7ZLKA, {
                        helpDeskArticle: g.A.getArticleURL(h.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let l = s.filter((e) => e instanceof f.A);
            if (l.length > 0) {
                if (!l.some((e) => e.enabled)) return C.intl.string(T.default["3kMstB"]);
                if (null != r) {
                    let e = l.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        s = null != n && n.id !== r;
                    if (t && s) return C.intl.string(T.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: I, selectedPaymentSource: k, paymentSources: n, defaultPaymentSourceId: R });
    if (P) return (0, s.jsx)("div", { className: E.h, children: (0, s.jsx)(a.y, { type: a.y.Type.PULSING_ELLIPSIS }) });
    if (w) return (0, s.jsx)(S, { onClick: A, disabled: y });
    let H = (0, s.jsx)(N, {
        resolvePaymentSourceOptions: U,
        onPaymentSourceAdd: A,
        disabled: y,
        handleChange: O,
        paymentSourceOptions: W,
        selectedPaymentSourceId: F,
        newPaymentMethodOptionLabel: M,
        noticeMessage: G,
    });
    return null != D ? (0, s.jsx)(u.m, { asContainer: !0, text: D, children: H }) : H;
}
