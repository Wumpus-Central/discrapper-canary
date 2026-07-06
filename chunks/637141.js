n.d(t, { Ay: () => N, Sm: () => k });
var a = n(627968),
    r = n(64700),
    l = n(702841),
    i = n(990078),
    s = n(821609),
    u = n(289873),
    o = n(109936),
    c = n(277984),
    d = n(176095),
    m = n(6151),
    f = n(826469),
    p = n(812745),
    b = n(202613),
    A = n(975571),
    g = n(580630),
    v = n(935208),
    _ = n(652215),
    y = n(818348),
    h = n(375708),
    I = n(327105),
    x = n(776409),
    E = n(714246);
let T = "***@***.***",
    P = new b.YS({ id: m.a, brand: p.Ay.Types.UNKNOWN, type: _.hes.CARD });
function k(e, t, n) {
    if (e instanceof b.YS)
        return e.id === m.a
            ? { brand: null, label: h.intl.string(h.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: p.Ay.Types.BANK,
                    label: h.intl.formatToPlainString(h.t.ixNwPL, {
                        date: t ? "********" : new Date(v.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? p.Ay.Types.UNKNOWN : e.brand,
                    label: h.intl.formatToPlainString(h.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof b.SJ) return { brand: p.Ay.Types.PAYPAL, label: t ? T : e.email };
    if (e instanceof b.A0) return { brand: p.Ay.Types.SOFORT, label: t ? T : e.email };
    if (e instanceof b.Qh) return { brand: p.Ay.Types.GIROPAY, label: h.intl.string(h.t["y+0MQZ"]) };
    if (e instanceof b.Tu) return { brand: p.Ay.Types.PRZELEWY24, label: t ? T : e.email };
    else if (e instanceof b.Ux) return { brand: p.Ay.Types.PAYSAFECARD, label: h.intl.string(h.t.e3APTT) };
    else if (e instanceof b.F_) return { brand: p.Ay.Types.GCASH, label: h.intl.string(h.t.PjehcF) };
    else if (e instanceof b.Xj) return { brand: p.Ay.Types.GRABPAY, label: h.intl.string(h.t.T5davE) };
    else if (e instanceof b.am) return { brand: p.Ay.Types.MOMO_WALLET, label: h.intl.string(h.t.J0A1Vk) };
    else if (e instanceof b._1) return { brand: p.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof b.i6) return { brand: p.Ay.Types.KAKAOPAY, label: h.intl.string(h.t.CSVexi) };
    else if (e instanceof b.cg) return { brand: p.Ay.Types.GOPAY_WALLET, label: h.intl.string(h.t["43J8JK"]) };
    else if (e instanceof b.UG) return { brand: p.Ay.Types.BANCONTACT, label: h.intl.string(h.t["1ITkfq"]) };
    else if (e instanceof b.rJ)
        return { brand: p.Ay.Types.EPS, label: h.intl.format(h.t.hSPoZw, { bank: (0, o.j)(e.bank) }) };
    else if (e instanceof b.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank ? h.intl.string(h.t.nSbwqC) : h.intl.format(h.t["9kUlRU"], { bank: (0, o.o)(e.bank) }),
        };
    else if (e instanceof b.FQ) return { brand: p.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof b.LQ)
        return {
            brand: p.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? h.intl.formatToPlainString(x.default["Jz6+Oj"], { amount: n })
                    : h.intl.string(x.default["/FQWfA"]),
        };
    else if (e instanceof b.IE) return { brand: p.Ay.Types.PIX, label: h.intl.string(h.t.JG3WQU) };
    throw Error("Invalid Payment Source");
}
function S(e) {
    let {
            onPaymentSourceAdd: t,
            dropdownLoading: n,
            disabled: l,
            handleChange: i,
            paymentSourceOptions: s,
            selectedPaymentSourceId: u,
            newPaymentMethodOptionLabel: o,
            noticeMessage: c,
            resolvePaymentSourceOptions: d,
        } = e,
        f = r.useMemo(() => {
            let e = s.map((e) => {
                let { label: t, brand: n, ...a } = e;
                return { id: null != a.key ? `${a.key}` : a.value, label: t ?? "", icon: n ?? void 0, ...a };
            });
            return null != d ? d(e) : e;
        }, [s, d]),
        p = r.useMemo(
            () => ({
                value: u ?? null,
                options: f,
                onChange: i,
                onNew: null != t ? t : () => {},
                disabled: l || n,
                newPaymentMethodOptionLabel: o,
            }),
            [u, f, i, t, l, n, o],
        );
    return (0, a.jsx)(m.v, { ...p, noticeMessage: c });
}
function L(e) {
    let { onClick: t } = e;
    return (0, a.jsx)(s.$, { variant: "primary", fullWidth: !0, onClick: t, text: h.intl.string(h.t.eQ2bLp) });
}
function N(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: o,
            onChange: p,
            onPaymentSourceAdd: v,
            isTrial: x = !1,
            disabled: T = !1,
            dropdownLoading: N,
            paymentGatewayRestrictions: C,
            newPaymentMethodOptionLabel: R,
            defaultPaymentSourceId: j,
            tooltipText: D,
            resolvePaymentSourceOptions: M,
        } = e,
        {
            hasNoPaymentSources: G,
            handleChange: w,
            paymentSource: O,
            paymentSourceOptions: B,
            selectedPaymentSourceId: U,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: a,
                    hidePersonalInformation: i,
                    onChange: s,
                    onPaymentSourceAdd: u,
                    paymentGatewayRestrictions: o,
                    includeNewPaymentSourceOption: p,
                } = e,
                A = r.useMemo(() => n.find((e) => (e instanceof f.A ? e.source : e) instanceof b.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != A && (0, c.YP)(A);
            }, [A]);
            let v = (0, l.bG)([d.A], () => {
                    if (null == A) return null;
                    let e = d.A.getBalance(A);
                    return null != e ? (0, g.$g)(e.amount, e.currency) : null;
                }, [A]),
                _ = 0 === n.length,
                y = null != a ? [a] : [],
                x = [...y, ...n, ...(p ? [P] : [])].map((e, t) => {
                    if (e instanceof f.A) {
                        let t,
                            { brand: n, label: a } = k(e.source, i, v);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = h.intl.string(I.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? h.intl.string(I.default.WJmme7)
                                          : h.intl.string(I.default["Kv+vV7"])),
                            { value: e.id, label: a, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof b.Ay) {
                        let t,
                            { brand: n, label: a } = k(e, i, v);
                        return (
                            (t = e === P || null == o || !(o.length > 0) || o.includes(e.paymentGateway)),
                            { value: e.id, label: a, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                E = r.useMemo(() => {
                    let e = t;
                    if (null == e && null != o && o.length > 0) {
                        let t = n.filter((e) => o.includes(e.paymentGateway));
                        e = 0 === t.length ? m.a : t[0].id;
                    }
                    let a = n.filter((e) => e instanceof f.A);
                    return a.length > 0 && a.every((e) => !e.enabled) && (e = m.a), e;
                }, [t, o, n]);
            return {
                hasNoPaymentSources: _,
                handleChange: (e) => {
                    if (e === m.a) null != u && u();
                    else {
                        let t = n.find((t) => t.id === e),
                            a = t instanceof f.A ? t.source : t;
                        null != s && s(a);
                    }
                },
                prependOptions: y,
                paymentSourceOptions: x,
                paymentSource: r.useMemo(() => n.find((e) => e.id === E), [n, E]),
                selectedPaymentSourceId: E,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: o,
            onChange: p,
            onPaymentSourceAdd: v,
            paymentGatewayRestrictions: C,
            includeNewPaymentSourceOption: !1,
        }),
        W = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: a, defaultPaymentSourceId: r } = e,
                l = n instanceof f.A ? n.source : n;
            if (null != l) {
                if (t && !l.canRedeemTrial()) return h.intl.string(h.t.SvheW9);
                if (t && l.hasFlag(y.rI.NEW))
                    return h.intl.format(h.t.d7ZLKA, {
                        helpDeskArticle: A.A.getArticleURL(_.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let i = a.filter((e) => e instanceof f.A);
            if (i.length > 0) {
                if (!i.some((e) => e.enabled)) return h.intl.string(I.default["3kMstB"]);
                if (null != r) {
                    let e = i.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        a = null != n && n.id !== r;
                    if (t && a) return h.intl.string(I.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: x, selectedPaymentSource: O, paymentSources: n, defaultPaymentSourceId: j });
    if (N) return (0, a.jsx)("div", { className: E.h, children: (0, a.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }) });
    if (G) return (0, a.jsx)(L, { onClick: v });
    let F = (0, a.jsx)(S, {
        resolvePaymentSourceOptions: M,
        onPaymentSourceAdd: v,
        disabled: T,
        handleChange: w,
        paymentSourceOptions: B,
        selectedPaymentSourceId: U,
        newPaymentMethodOptionLabel: R,
        noticeMessage: W,
    });
    return null != D ? (0, a.jsx)(i.m, { asContainer: !0, text: D, children: F }) : F;
}
