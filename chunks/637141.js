n.d(t, { Ay: () => S, Sm: () => I });
var a = n(627968),
    r = n(64700),
    s = n(702841),
    l = n(821609),
    i = n(289873),
    u = n(866665),
    o = n(109936),
    c = n(277984),
    d = n(176095),
    m = n(6151),
    f = n(826469),
    p = n(812745),
    g = n(202613),
    A = n(975571),
    x = n(580630),
    h = n(935208),
    b = n(652215),
    C = n(818348),
    _ = n(375708),
    L = n(327105),
    y = n(776409),
    v = n(714246);
let E = "***@***.***",
    T = new g.YS({ id: m.a, brand: p.Ay.Types.UNKNOWN, type: b.hes.CARD });
function I(e, t, n) {
    if (e instanceof g.YS)
        return e.id === m.a
            ? { brand: null, label: _.intl.string(_.t.eQ2bLp) }
            : e.isStripeLinkBankAccount
              ? {
                    brand: p.Ay.Types.BANK,
                    label: _.intl.formatToPlainString(_.t.ixNwPL, {
                        date: t ? "********" : new Date(h.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? p.Ay.Types.UNKNOWN : e.brand,
                    label: _.intl.formatToPlainString(_.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof g.SJ) return { brand: p.Ay.Types.PAYPAL, label: t ? E : e.email };
    if (e instanceof g.A0) return { brand: p.Ay.Types.SOFORT, label: t ? E : e.email };
    if (e instanceof g.Qh) return { brand: p.Ay.Types.GIROPAY, label: _.intl.string(_.t["y+0MQZ"]) };
    if (e instanceof g.Tu) return { brand: p.Ay.Types.PRZELEWY24, label: t ? E : e.email };
    else if (e instanceof g.Ux) return { brand: p.Ay.Types.PAYSAFECARD, label: _.intl.string(_.t.e3APTT) };
    else if (e instanceof g.F_) return { brand: p.Ay.Types.GCASH, label: _.intl.string(_.t.PjehcF) };
    else if (e instanceof g.Xj) return { brand: p.Ay.Types.GRABPAY, label: _.intl.string(_.t.T5davE) };
    else if (e instanceof g.am) return { brand: p.Ay.Types.MOMO_WALLET, label: _.intl.string(_.t.J0A1Vk) };
    else if (e instanceof g._1) return { brand: p.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof g.i6) return { brand: p.Ay.Types.KAKAOPAY, label: _.intl.string(_.t.CSVexi) };
    else if (e instanceof g.cg) return { brand: p.Ay.Types.GOPAY_WALLET, label: _.intl.string(_.t["43J8JK"]) };
    else if (e instanceof g.UG) return { brand: p.Ay.Types.BANCONTACT, label: _.intl.string(_.t["1ITkfq"]) };
    else if (e instanceof g.rJ)
        return { brand: p.Ay.Types.EPS, label: _.intl.format(_.t.hSPoZw, { bank: (0, o.j)(e.bank) }) };
    else if (e instanceof g.EE)
        return {
            brand: p.Ay.Types.IDEAL,
            label:
                null == e.bank ? _.intl.string(_.t.nSbwqC) : _.intl.format(_.t["9kUlRU"], { bank: (0, o.o)(e.bank) }),
        };
    else if (e instanceof g.FQ) return { brand: p.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof g.LQ)
        return {
            brand: p.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? _.intl.formatToPlainString(y.default["Jz6+Oj"], { amount: n })
                    : _.intl.string(y.default["/FQWfA"]),
        };
    else if (e instanceof g.IE) return { brand: p.Ay.Types.PIX, label: _.intl.string(_.t.JG3WQU) };
    throw Error("Invalid Payment Source");
}
function N(e) {
    let {
            onPaymentSourceAdd: t,
            dropdownLoading: n,
            disabled: s,
            handleChange: l,
            paymentSourceOptions: i,
            selectedPaymentSourceId: u,
            newPaymentMethodOptionLabel: o,
            noticeMessage: c,
            resolvePaymentSourceOptions: d,
        } = e,
        f = r.useMemo(() => {
            let e = i.map((e) => {
                let { label: t, brand: n, ...a } = e;
                return { id: null != a.key ? `${a.key}` : a.value, label: t ?? "", icon: n ?? void 0, ...a };
            });
            return null != d ? d(e) : e;
        }, [i, d]),
        p = r.useMemo(
            () => ({
                value: u ?? null,
                options: f,
                onChange: l,
                onNew: null != t ? t : () => {},
                disabled: s || n,
                newPaymentMethodOptionLabel: o,
            }),
            [u, f, l, t, s, n, o],
        );
    return (0, a.jsx)(m.v, { ...p, noticeMessage: c });
}
function j(e) {
    let { onClick: t } = e;
    return (0, a.jsx)(l.$, { variant: "primary", fullWidth: !0, onClick: t, text: _.intl.string(_.t.eQ2bLp) });
}
function S(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: o,
            onChange: p,
            onPaymentSourceAdd: h,
            isTrial: y = !1,
            disabled: E = !1,
            dropdownLoading: S,
            paymentGatewayRestrictions: P,
            newPaymentMethodOptionLabel: M,
            defaultPaymentSourceId: R,
            tooltipText: k,
            resolvePaymentSourceOptions: w,
        } = e,
        {
            hasNoPaymentSources: D,
            handleChange: U,
            paymentSource: O,
            paymentSourceOptions: G,
            selectedPaymentSourceId: B,
        } = (function (e) {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: a,
                    hidePersonalInformation: l,
                    onChange: i,
                    onPaymentSourceAdd: u,
                    paymentGatewayRestrictions: o,
                    includeNewPaymentSourceOption: p,
                } = e,
                A = r.useMemo(() => n.find((e) => (e instanceof f.A ? e.source : e) instanceof g.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != A && (0, c.YP)(A);
            }, [A]);
            let h = (0, s.bG)([d.A], () => {
                    if (null == A) return null;
                    let e = d.A.getBalance(A);
                    return null != e ? (0, x.$g)(e.amount, e.currency) : null;
                }, [A]),
                b = 0 === n.length,
                C = null != a ? [a] : [],
                y = [...C, ...n, ...(p ? [T] : [])].map((e, t) => {
                    if (e instanceof f.A) {
                        let t,
                            { brand: n, label: a } = I(e.source, l, h);
                        return (
                            e.enabled
                                ? null != e.relocationCountry && (t = _.intl.string(L.default.pWSgIu))
                                : (t =
                                      "payment_method_unsupported" === e.disabledReason
                                          ? _.intl.string(L.default.WJmme7)
                                          : _.intl.string(L.default["Kv+vV7"])),
                            { value: e.id, label: a, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof g.Ay) {
                        let t,
                            { brand: n, label: a } = I(e, l, h);
                        return (
                            (t = e === T || null == o || !(o.length > 0) || o.includes(e.paymentGateway)),
                            { value: e.id, label: a, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                v = r.useMemo(() => {
                    let e = t;
                    if (null == e && null != o && o.length > 0) {
                        let t = n.filter((e) => o.includes(e.paymentGateway));
                        e = 0 === t.length ? m.a : t[0].id;
                    }
                    let a = n.filter((e) => e instanceof f.A);
                    return a.length > 0 && a.every((e) => !e.enabled) && (e = m.a), e;
                }, [t, o, n]);
            return {
                hasNoPaymentSources: b,
                handleChange: function (e) {
                    if (e === m.a) null != u && u();
                    else {
                        let t = n.find((t) => t.id === e),
                            a = t instanceof f.A ? t.source : t;
                        null != i && i(a);
                    }
                },
                prependOptions: C,
                paymentSourceOptions: y,
                paymentSource: r.useMemo(() => n.find((e) => e.id === v), [n, v]),
                selectedPaymentSourceId: v,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: o,
            onChange: p,
            onPaymentSourceAdd: h,
            paymentGatewayRestrictions: P,
            includeNewPaymentSourceOption: !1,
        }),
        F = (function (e) {
            let { isTrial: t, selectedPaymentSource: n, paymentSources: a, defaultPaymentSourceId: r } = e,
                s = n instanceof f.A ? n.source : n;
            if (null != s) {
                if (t && !s.canRedeemTrial()) return _.intl.string(_.t.SvheW9);
                if (t && s.hasFlag(C.rI.NEW))
                    return _.intl.format(_.t.d7ZLKA, {
                        helpDeskArticle: A.A.getArticleURL(b.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let l = a.filter((e) => e instanceof f.A);
            if (l.length > 0) {
                if (!l.some((e) => e.enabled)) return _.intl.string(L.default["3kMstB"]);
                if (null != r) {
                    let e = l.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        a = null != n && n.id !== r;
                    if (t && a) return _.intl.string(L.default.Y6lY0I);
                }
            }
            return null;
        })({ isTrial: y, selectedPaymentSource: O, paymentSources: n, defaultPaymentSourceId: R });
    if (S) return (0, a.jsx)("div", { className: v.h, children: (0, a.jsx)(i.y, { type: i.y.Type.PULSING_ELLIPSIS }) });
    if (D) return (0, a.jsx)(j, { onClick: h });
    let W = (0, a.jsx)(N, {
        resolvePaymentSourceOptions: w,
        onPaymentSourceAdd: h,
        disabled: E,
        handleChange: U,
        paymentSourceOptions: G,
        selectedPaymentSourceId: B,
        newPaymentMethodOptionLabel: M,
        noticeMessage: F,
    });
    return null != k ? (0, a.jsx)(u.m, { asContainer: !0, text: k, children: W }) : W;
}
