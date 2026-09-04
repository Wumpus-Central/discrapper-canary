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
    m = n(6151),
    p = n(826469),
    C = n(812745),
    h = n(202613),
    f = n(975571),
    E = n(580630),
    S = n(935208),
    y = n(652215),
    I = n(818348),
    g = n(375708),
    A = n(583741),
    P = n(986485),
    v = n(632815);
let _ = "***@***.***",
    x = new h.YS({ id: m.a, brand: C.Ay.Types.UNKNOWN, type: y.hes.CARD });
function T(e, t, n) {
    if (e instanceof h.YS)
        return e.id === m.a
            ? { brand: null, label: g.intl.string(g.t.eQ2bLp) }
            : e.isStripeLinkBankAccount
              ? {
                    brand: C.Ay.Types.BANK,
                    label: g.intl.formatToPlainString(g.t.ixNwPL, {
                        date: t ? "********" : new Date(S.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? C.Ay.Types.UNKNOWN : e.brand,
                    label: g.intl.formatToPlainString(g.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof h.SJ) return { brand: C.Ay.Types.PAYPAL, label: t ? _ : e.email };
    if (e instanceof h.A0) return { brand: C.Ay.Types.SOFORT, label: t ? _ : e.email };
    if (e instanceof h.Qh) return { brand: C.Ay.Types.GIROPAY, label: g.intl.string(g.t["y+0MQZ"]) };
    if (e instanceof h.Tu) return { brand: C.Ay.Types.PRZELEWY24, label: t ? _ : e.email };
    else if (e instanceof h.Ux) return { brand: C.Ay.Types.PAYSAFECARD, label: g.intl.string(g.t.e3APTT) };
    else if (e instanceof h.F_) return { brand: C.Ay.Types.GCASH, label: g.intl.string(g.t.PjehcF) };
    else if (e instanceof h.Xj) return { brand: C.Ay.Types.GRABPAY, label: g.intl.string(g.t.T5davE) };
    else if (e instanceof h.am) return { brand: C.Ay.Types.MOMO_WALLET, label: g.intl.string(g.t.J0A1Vk) };
    else if (e instanceof h._1) return { brand: C.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof h.i6) return { brand: C.Ay.Types.KAKAOPAY, label: g.intl.string(g.t.CSVexi) };
    else if (e instanceof h.cg) return { brand: C.Ay.Types.GOPAY_WALLET, label: g.intl.string(g.t["43J8JK"]) };
    else if (e instanceof h.UG) return { brand: C.Ay.Types.BANCONTACT, label: g.intl.string(g.t["1ITkfq"]) };
    else if (e instanceof h.rJ)
        return { brand: C.Ay.Types.EPS, label: g.intl.format(g.t.hSPoZw, { bank: (0, u.j)(e.bank) }) };
    else if (e instanceof h.EE)
        return {
            brand: C.Ay.Types.IDEAL,
            label:
                null == e.bank ? g.intl.string(g.t.nSbwqC) : g.intl.format(g.t["9kUlRU"], { bank: (0, u.o)(e.bank) }),
        };
    else if (e instanceof h.FQ) return { brand: C.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof h.LQ)
        return {
            brand: C.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? g.intl.formatToPlainString(P.default["Jz6+Oj"], { amount: n })
                    : g.intl.string(P.default["/FQWfA"]),
        };
    else if (e instanceof h.IE) return { brand: C.Ay.Types.PIX, label: g.intl.string(g.t.JG3WQU) };
    else if (e instanceof h.WV) return { brand: C.Ay.Types.PIX, label: g.intl.string(g.t.JkKNss) };
    throw Error("Invalid Payment Source");
}
function N(e) {
    let { onClick: t, disabled: n } = e;
    return (0, l.jsx)(a.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: t,
        text: g.intl.string(g.t.eQ2bLp),
        disabled: n,
    });
}
function b(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: a,
            hidePersonalInformation: u,
            onChange: C,
            onPaymentSourceAdd: S,
            isTrial: P = !1,
            disabled: _ = !1,
            dropdownLoading: b,
            paymentGatewayRestrictions: j,
            newPaymentMethodOptionLabel: R,
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
                    includeNewPaymentSourceOption: C,
                } = e,
                f = i.useMemo(() => n.find((e) => (e instanceof p.A ? e.source : e) instanceof h.LQ)?.id ?? null, [n]);
            i.useEffect(() => {
                null != f && (0, c.YP)(f);
            }, [f]);
            let S = (0, r.bG)([d.A], () => {
                    if (null == f) return null;
                    let e = d.A.getBalance(f);
                    return null != e ? (0, E.$g)(e.amount, e.currency) : null;
                }, [f]),
                y = 0 === n.length,
                I = null != l ? [l] : [],
                P = [...I, ...n, ...(C ? [x] : [])].map((e, t) => {
                    if (e instanceof p.A) {
                        let t,
                            { brand: n, label: l } = T(e.source, a, S);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = g.intl.string(A.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? g.intl.string(A.default.WJmme7)
                                          : g.intl.string(A.default["Kv+vV7"])),
                            { value: e.id, label: l, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof h.Ay) {
                        let t,
                            { brand: n, label: l } = T(e, a, S);
                        return (
                            (t = e === x || null == u || !(u.length > 0) || u.includes(e.paymentGateway)),
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
                    return l.length > 0 && l.every((e) => !e.enabled) && (e = m.a), e;
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
                prependOptions: I,
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
        F = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: l, defaultPaymentSourceId: i } = e,
                r = n instanceof p.A ? n.source : n;
            if (null != r) {
                if (t && !r.canRedeemTrial()) return g.intl.string(g.t.SvheW9);
                if (t && r.hasFlag(I.rI.NEW))
                    return g.intl.format(g.t.d7ZLKA, {
                        helpDeskArticle: f.A.getArticleURL(y.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let a = l.filter((e) => e instanceof p.A);
            if (a.length > 0) {
                if (!a.some((e) => e.enabled)) return g.intl.string(A.default["3kMstB"]);
                if (null != i) {
                    let e = a.find((e) => e.id === i),
                        t = null != e && !e.enabled,
                        l = null != n && n.id !== i;
                    if (t && l) return g.intl.string(A.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: P, selectedPaymentSource: U, paymentSources: n, defaultPaymentSourceId: M }),
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
    let W = (0, l.jsx)(m.v, {
        value: G ?? null,
        options: B,
        onChange: w,
        onNew: H,
        disabled: _,
        newPaymentMethodOptionLabel: R,
        noticeMessage: F,
    });
    return null != O ? (0, l.jsx)(o.m, { asContainer: !0, text: O, children: W }) : W;
}
