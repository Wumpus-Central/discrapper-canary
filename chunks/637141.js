n.d(t, { Ay: () => _, Sm: () => j });
var s = n(477900),
    r = n(582128),
    i = n(702841),
    a = n(821609),
    l = n(289873),
    u = n(866665),
    c = n(887555),
    o = n(277984),
    d = n(176095),
    m = n(6151),
    f = n(826469),
    p = n(812745),
    x = n(202613),
    g = n(975571),
    h = n(580630),
    v = n(935208),
    A = n(652215),
    C = n(818348),
    L = n(375708),
    y = n(327105),
    I = n(776409),
    T = n(196190);
let b = "***@***.***",
    E = new x.YS({ id: m.a, brand: p.Ay.Types.UNKNOWN, type: A.hes.CARD });
function j(e, t, n) {
    if (e instanceof x.YS)
        return e.id === m.a
            ? { brand: null, label: L.intl.string(L.t.eQ2bLp) }
            : e.isStripeLinkBankAccount
              ? {
                    brand: p.Ay.Types.BANK,
                    label: L.intl.formatToPlainString(L.t.ixNwPL, {
                        date: t ? "********" : new Date(v.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? p.Ay.Types.UNKNOWN : e.brand,
                    label: L.intl.formatToPlainString(L.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof x.SJ) return { brand: p.Ay.Types.PAYPAL, label: t ? b : e.email };
    if (e instanceof x.A0) return { brand: p.Ay.Types.SOFORT, label: t ? b : e.email };
    if (e instanceof x.Qh) return { brand: p.Ay.Types.GIROPAY, label: L.intl.string(L.t["y+0MQZ"]) };
    if (e instanceof x.Tu) return { brand: p.Ay.Types.PRZELEWY24, label: t ? b : e.email };
    else if (e instanceof x.Ux) return { brand: p.Ay.Types.PAYSAFECARD, label: L.intl.string(L.t.e3APTT) };
    else if (e instanceof x.F_) return { brand: p.Ay.Types.GCASH, label: L.intl.string(L.t.PjehcF) };
    else if (e instanceof x.Xj) return { brand: p.Ay.Types.GRABPAY, label: L.intl.string(L.t.T5davE) };
    else if (e instanceof x.am) return { brand: p.Ay.Types.MOMO_WALLET, label: L.intl.string(L.t.J0A1Vk) };
    else if (e instanceof x._1) return { brand: p.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof x.i6) return { brand: p.Ay.Types.KAKAOPAY, label: L.intl.string(L.t.CSVexi) };
    else if (e instanceof x.cg) return { brand: p.Ay.Types.GOPAY_WALLET, label: L.intl.string(L.t["43J8JK"]) };
    else if (e instanceof x.UG) return { brand: p.Ay.Types.BANCONTACT, label: L.intl.string(L.t["1ITkfq"]) };
    else if (e instanceof x.rJ)
        return { brand: p.Ay.Types.EPS, label: L.intl.format(L.t.hSPoZw, { bank: (0, c.j)(e.bank) }) };
    else if (e instanceof x.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank ? L.intl.string(L.t.nSbwqC) : L.intl.format(L.t["9kUlRU"], { bank: (0, c.o)(e.bank) }),
        };
    else if (e instanceof x.FQ) return { brand: p.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof x.LQ)
        return {
            brand: p.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? L.intl.formatToPlainString(I.default["Jz6+Oj"], { amount: n })
                    : L.intl.string(I.default["/FQWfA"]),
        };
    else if (e instanceof x.IE) return { brand: p.Ay.Types.PIX, label: L.intl.string(L.t.JG3WQU) };
    throw Error("Invalid Payment Source");
}
function N(e) {
    let {
            onPaymentSourceAdd: t,
            dropdownLoading: n,
            disabled: i,
            handleChange: a,
            paymentSourceOptions: l,
            selectedPaymentSourceId: u,
            newPaymentMethodOptionLabel: c,
            noticeMessage: o,
            resolvePaymentSourceOptions: d,
        } = e,
        f = r.useMemo(() => {
            let e = l.map((e) => {
                let { label: t, brand: n, ...s } = e;
                return { id: null != s.key ? `${s.key}` : s.value, label: t ?? "", icon: n ?? void 0, ...s };
            });
            return null != d ? d(e) : e;
        }, [l, d]),
        p = r.useMemo(
            () => ({
                value: u ?? null,
                options: f,
                onChange: a,
                onNew: null != t ? t : () => {},
                disabled: i || n,
                newPaymentMethodOptionLabel: c,
            }),
            [u, f, a, t, i, n, c],
        );
    return (0, s.jsx)(m.v, { ...p, noticeMessage: o });
}
function S(e) {
    let { onClick: t } = e;
    return (0, s.jsx)(a.$, { variant: "primary", fullWidth: !0, onClick: t, text: L.intl.string(L.t.eQ2bLp) });
}
function _(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: c,
            onChange: p,
            onPaymentSourceAdd: v,
            isTrial: I = !1,
            disabled: b = !1,
            dropdownLoading: _,
            paymentGatewayRestrictions: P,
            newPaymentMethodOptionLabel: M,
            defaultPaymentSourceId: R,
            tooltipText: w,
            resolvePaymentSourceOptions: U,
        } = e,
        {
            hasNoPaymentSources: D,
            handleChange: k,
            paymentSource: O,
            paymentSourceOptions: F,
            selectedPaymentSourceId: W,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: s,
                    hidePersonalInformation: a,
                    onChange: l,
                    onPaymentSourceAdd: u,
                    paymentGatewayRestrictions: c,
                    includeNewPaymentSourceOption: p,
                } = e,
                g = r.useMemo(() => n.find((e) => (e instanceof f.A ? e.source : e) instanceof x.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != g && (0, o.YP)(g);
            }, [g]);
            let v = (0, i.bG)([d.A], () => {
                    if (null == g) return null;
                    let e = d.A.getBalance(g);
                    return null != e ? (0, h.$g)(e.amount, e.currency) : null;
                }, [g]),
                A = 0 === n.length,
                C = null != s ? [s] : [],
                I = [...C, ...n, ...(p ? [E] : [])].map((e, t) => {
                    if (e instanceof f.A) {
                        let t,
                            { brand: n, label: s } = j(e.source, a, v);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = L.intl.string(y.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? L.intl.string(y.default.WJmme7)
                                          : L.intl.string(y.default["Kv+vV7"])),
                            { value: e.id, label: s, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof x.Ay) {
                        let t,
                            { brand: n, label: s } = j(e, a, v);
                        return (
                            (t = e === E || null == c || !(c.length > 0) || c.includes(e.paymentGateway)),
                            { value: e.id, label: s, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                T = r.useMemo(() => {
                    let e = t;
                    if (null == e && null != c && c.length > 0) {
                        let t = n.filter((e) => c.includes(e.paymentGateway));
                        e = 0 === t.length ? m.a : t[0].id;
                    }
                    let s = n.filter((e) => e instanceof f.A);
                    return s.length > 0 && s.every((e) => !e.enabled) && (e = m.a), e;
                }, [t, c, n]);
            return {
                hasNoPaymentSources: A,
                handleChange: function (e) {
                    if (e === m.a) null != u && u();
                    else {
                        let t = n.find((t) => t.id === e),
                            s = t instanceof f.A ? t.source : t;
                        null != l && l(s);
                    }
                },
                prependOptions: C,
                paymentSourceOptions: I,
                paymentSource: r.useMemo(() => n.find((e) => e.id === T), [n, T]),
                selectedPaymentSourceId: T,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: c,
            onChange: p,
            onPaymentSourceAdd: v,
            paymentGatewayRestrictions: P,
            includeNewPaymentSourceOption: !1,
        }),
        G = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: s, defaultPaymentSourceId: r } = e,
                i = n instanceof f.A ? n.source : n;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return L.intl.string(L.t.SvheW9);
                if (t && i.hasFlag(C.rI.NEW))
                    return L.intl.format(L.t.d7ZLKA, {
                        helpDeskArticle: g.A.getArticleURL(A.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let a = s.filter((e) => e instanceof f.A);
            if (a.length > 0) {
                if (!a.some((e) => e.enabled)) return L.intl.string(y.default["3kMstB"]);
                if (null != r) {
                    let e = a.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        s = null != n && n.id !== r;
                    if (t && s) return L.intl.string(y.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: I, selectedPaymentSource: O, paymentSources: n, defaultPaymentSourceId: R });
    if (_) return (0, s.jsx)("div", { className: T.h, children: (0, s.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS }) });
    if (D) return (0, s.jsx)(S, { onClick: v });
    let B = (0, s.jsx)(N, {
        resolvePaymentSourceOptions: U,
        onPaymentSourceAdd: v,
        disabled: b,
        handleChange: k,
        paymentSourceOptions: F,
        selectedPaymentSourceId: W,
        newPaymentMethodOptionLabel: M,
        noticeMessage: G,
    });
    return null != w ? (0, s.jsx)(u.m, { asContainer: !0, text: w, children: B }) : B;
}
