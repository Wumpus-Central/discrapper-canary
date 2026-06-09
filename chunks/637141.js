n.d(t, { Ay: () => L, Sm: () => j });
var a = n(627968),
    l = n(64700),
    r = n(702841),
    i = n(990078),
    s = n(821609),
    u = n(289873),
    o = n(109936),
    c = n(753390),
    d = n(546605),
    m = n(176095),
    f = n(6151),
    p = n(826469),
    g = n(812745),
    b = n(202613),
    v = n(975571),
    x = n(580630),
    h = n(935208),
    A = n(652215),
    y = n(818348),
    T = n(375708),
    _ = n(327105),
    E = n(776409),
    I = n(714246);
let k = "***@***.***",
    P = new b.YS({ id: f.a, brand: g.Ay.Types.UNKNOWN, type: A.hes.CARD });
function j(e, t, n) {
    if (e instanceof b.YS)
        return e.id === f.a
            ? { brand: null, label: T.intl.string(T.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: g.Ay.Types.BANK,
                    label: T.intl.formatToPlainString(T.t.ixNwPL, {
                        date: t ? "********" : new Date(h.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? g.Ay.Types.UNKNOWN : e.brand,
                    label: T.intl.formatToPlainString(T.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof b.SJ) return { brand: g.Ay.Types.PAYPAL, label: t ? k : e.email };
    if (e instanceof b.A0) return { brand: g.Ay.Types.SOFORT, label: t ? k : e.email };
    if (e instanceof b.Qh) return { brand: g.Ay.Types.GIROPAY, label: T.intl.string(T.t["y+0MQZ"]) };
    if (e instanceof b.Tu) return { brand: g.Ay.Types.PRZELEWY24, label: t ? k : e.email };
    else if (e instanceof b.Ux) return { brand: g.Ay.Types.PAYSAFECARD, label: T.intl.string(T.t.e3APTT) };
    else if (e instanceof b.F_) return { brand: g.Ay.Types.GCASH, label: T.intl.string(T.t.PjehcF) };
    else if (e instanceof b.Xj) return { brand: g.Ay.Types.GRABPAY, label: T.intl.string(T.t.T5davE) };
    else if (e instanceof b.am) return { brand: g.Ay.Types.MOMO_WALLET, label: T.intl.string(T.t.J0A1Vk) };
    else if (e instanceof b._1) return { brand: g.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof b.i6) return { brand: g.Ay.Types.KAKAOPAY, label: T.intl.string(T.t.CSVexi) };
    else if (e instanceof b.cg) return { brand: g.Ay.Types.GOPAY_WALLET, label: T.intl.string(T.t["43J8JK"]) };
    else if (e instanceof b.UG) return { brand: g.Ay.Types.BANCONTACT, label: T.intl.string(T.t["1ITkfq"]) };
    else if (e instanceof b.rJ)
        return { brand: g.Ay.Types.EPS, label: T.intl.format(T.t.hSPoZw, { bank: (0, o.j)(e.bank) }) };
    else if (e instanceof b.EE)
        return {
            brand: g.Ay.Types.IDEAL,
            label:
                null == e.bank ? T.intl.string(T.t.nSbwqC) : T.intl.format(T.t["9kUlRU"], { bank: (0, o.o)(e.bank) }),
        };
    else if (e instanceof b.FQ) return { brand: g.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof b.LQ)
        return {
            brand: g.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? T.intl.formatToPlainString(E.default["Jz6+Oj"], { amount: n })
                    : T.intl.string(E.default["/FQWfA"]),
        };
    throw Error("Invalid Payment Source");
}
let N = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: r,
                handleChange: i,
                paymentSourceOptions: s,
                selectedPaymentSourceId: u,
                newPaymentMethodOptionLabel: o,
                noticeMessage: c,
            } = e,
            d = l.useMemo(
                () =>
                    s.map((e) => {
                        let { label: t, brand: n, ...a } = e;
                        return { id: null != a.key ? `${a.key}` : a.value, label: t ?? "", icon: n ?? void 0, ...a };
                    }),
                [s],
            ),
            m = l.useMemo(
                () => ({
                    value: u ?? null,
                    options: d,
                    onChange: i,
                    onNew: null != t ? t : () => {},
                    disabled: r || n,
                    newPaymentMethodOptionLabel: o,
                }),
                [u, d, i, t, r, n, o],
            );
        return (0, a.jsx)(f.v, { ...m, noticeMessage: c });
    },
    S = (e) => {
        let { onClick: t } = e;
        return (0, a.jsx)(s.$, { variant: "primary", fullWidth: !0, onClick: t, text: T.intl.string(T.t.eQ2bLp) });
    };
function L(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: o,
            onChange: g,
            onPaymentSourceAdd: h,
            isTrial: E = !1,
            disabled: k = !1,
            dropdownLoading: L,
            paymentGatewayRestrictions: C,
            newPaymentMethodOptionLabel: R,
            defaultPaymentSourceId: M,
            tooltipText: D,
        } = e,
        {
            hasNoPaymentSources: w,
            handleChange: G,
            paymentSource: B,
            paymentSourceOptions: O,
            selectedPaymentSourceId: W,
            isStoreCountryEnabled: U,
        } = ((e) => {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: a,
                    hidePersonalInformation: i,
                    onChange: s,
                    onPaymentSourceAdd: u,
                    paymentGatewayRestrictions: o,
                    includeNewPaymentSourceOption: g,
                } = e,
                v = (0, d.vg)("PaymentSourceDropdown"),
                h = l.useMemo(() => n.find((e) => (e instanceof p.A ? e.source : e) instanceof b.LQ)?.id ?? null, [n]);
            l.useEffect(() => {
                null != h && (0, c.YP)(h);
            }, [h]);
            let A = (0, r.bG)([m.A], () => {
                    if (null == h) return null;
                    let e = m.A.getBalance(h);
                    return null != e ? (0, x.$g)(e.amount, e.currency) : null;
                }, [h]),
                y = 0 === n.length,
                E = null != a ? [a] : [],
                I = [...E, ...n, ...(g ? [P] : [])].map((e, t) => {
                    if (e instanceof p.A) {
                        let t,
                            { brand: n, label: a } = j(e.source, i, A);
                        return (
                            v &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = T.intl.string(_.default.pWSgIu))
                                    : (t = T.intl.string(_.default["Kv+vV7"]))),
                            { value: e.id, label: a, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof b.Ay) {
                        let t,
                            { brand: n, label: a } = j(e, i, A);
                        return (
                            (t = e === P || null == o || !(o.length > 0) || o.includes(e.paymentGateway)),
                            { value: e.id, label: a, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                k = l.useMemo(() => {
                    let e = t;
                    if (null == e && null != o && o.length > 0) {
                        let t = n.filter((e) => o.includes(e.paymentGateway));
                        e = 0 === t.length ? f.a : t[0].id;
                    }
                    if (v) {
                        let t = n.filter((e) => e instanceof p.A);
                        t.length > 0 && t.every((e) => !e.enabled) && (e = f.a);
                    }
                    return e;
                }, [t, o, n, v]);
            return {
                hasNoPaymentSources: y,
                handleChange: (e) => {
                    if (e === f.a) null != u && u();
                    else {
                        let t = n.find((t) => t.id === e),
                            a = t instanceof p.A ? t.source : t;
                        null != s && s(a);
                    }
                },
                prependOptions: E,
                paymentSourceOptions: I,
                paymentSource: l.useMemo(() => n.find((e) => e.id === k), [n, k]),
                selectedPaymentSourceId: k,
                isStoreCountryEnabled: v,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: o,
            onChange: g,
            onPaymentSourceAdd: h,
            paymentGatewayRestrictions: C,
            includeNewPaymentSourceOption: !1,
        }),
        F = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: a,
                    defaultPaymentSourceId: l,
                    isStoreCountryEnabled: r,
                } = e,
                i = n instanceof p.A ? n.source : n;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return T.intl.string(T.t.SvheW9);
                if (t && i.hasFlag(y.rI.NEW))
                    return T.intl.format(T.t.d7ZLKA, {
                        helpDeskArticle: v.A.getArticleURL(A.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let s = a.filter((e) => e instanceof p.A);
            if (s.length > 0) {
                if (!s.some((e) => e.enabled))
                    return r ? T.intl.string(_.default["3kMstB"]) : T.intl.string(T.t.OqbMBV);
                if (null != l) {
                    let e = s.find((e) => e.id === l),
                        t = null != e && !e.enabled,
                        a = null != n && n.id !== l;
                    if (t && a) return r ? T.intl.string(_.default.Y6lY0I) : T.intl.string(T.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: E,
            selectedPaymentSource: B,
            paymentSources: n,
            defaultPaymentSourceId: M,
            isStoreCountryEnabled: U,
        });
    if (L) return (0, a.jsx)("div", { className: I.h, children: (0, a.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }) });
    if (w) return (0, a.jsx)(S, { onClick: h });
    let Y = (0, a.jsx)(N, {
        onPaymentSourceAdd: h,
        disabled: k,
        handleChange: G,
        paymentSourceOptions: O,
        selectedPaymentSourceId: W,
        newPaymentMethodOptionLabel: R,
        noticeMessage: F,
    });
    return null != D ? (0, a.jsx)(i.m, { asContainer: !0, text: D, children: Y }) : Y;
}
