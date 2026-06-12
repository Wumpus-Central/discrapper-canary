n.d(t, { Ay: () => j, Sm: () => L });
var a = n(627968),
    r = n(64700),
    l = n(702841),
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
    A = n(580630),
    x = n(935208),
    h = n(652215),
    y = n(818348),
    E = n(375708),
    T = n(327105),
    _ = n(776409),
    I = n(714246);
let k = "***@***.***",
    P = new b.YS({ id: f.a, brand: g.Ay.Types.UNKNOWN, type: h.hes.CARD });
function L(e, t, n) {
    if (e instanceof b.YS)
        return e.id === f.a
            ? { brand: null, label: E.intl.string(E.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: g.Ay.Types.BANK,
                    label: E.intl.formatToPlainString(E.t.ixNwPL, {
                        date: t ? "********" : new Date(x.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? g.Ay.Types.UNKNOWN : e.brand,
                    label: E.intl.formatToPlainString(E.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof b.SJ) return { brand: g.Ay.Types.PAYPAL, label: t ? k : e.email };
    if (e instanceof b.A0) return { brand: g.Ay.Types.SOFORT, label: t ? k : e.email };
    if (e instanceof b.Qh) return { brand: g.Ay.Types.GIROPAY, label: E.intl.string(E.t["y+0MQZ"]) };
    if (e instanceof b.Tu) return { brand: g.Ay.Types.PRZELEWY24, label: t ? k : e.email };
    else if (e instanceof b.Ux) return { brand: g.Ay.Types.PAYSAFECARD, label: E.intl.string(E.t.e3APTT) };
    else if (e instanceof b.F_) return { brand: g.Ay.Types.GCASH, label: E.intl.string(E.t.PjehcF) };
    else if (e instanceof b.Xj) return { brand: g.Ay.Types.GRABPAY, label: E.intl.string(E.t.T5davE) };
    else if (e instanceof b.am) return { brand: g.Ay.Types.MOMO_WALLET, label: E.intl.string(E.t.J0A1Vk) };
    else if (e instanceof b._1) return { brand: g.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof b.i6) return { brand: g.Ay.Types.KAKAOPAY, label: E.intl.string(E.t.CSVexi) };
    else if (e instanceof b.cg) return { brand: g.Ay.Types.GOPAY_WALLET, label: E.intl.string(E.t["43J8JK"]) };
    else if (e instanceof b.UG) return { brand: g.Ay.Types.BANCONTACT, label: E.intl.string(E.t["1ITkfq"]) };
    else if (e instanceof b.rJ)
        return { brand: g.Ay.Types.EPS, label: E.intl.format(E.t.hSPoZw, { bank: (0, o.j)(e.bank) }) };
    else if (e instanceof b.EE)
        return {
            brand: g.Ay.Types.IDEAL,
            label:
                null == e.bank ? E.intl.string(E.t.nSbwqC) : E.intl.format(E.t["9kUlRU"], { bank: (0, o.o)(e.bank) }),
        };
    else if (e instanceof b.FQ) return { brand: g.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof b.LQ)
        return {
            brand: g.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? E.intl.formatToPlainString(_.default["Jz6+Oj"], { amount: n })
                    : E.intl.string(_.default["/FQWfA"]),
        };
    throw Error("Invalid Payment Source");
}
let N = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: l,
                handleChange: i,
                paymentSourceOptions: s,
                selectedPaymentSourceId: u,
                newPaymentMethodOptionLabel: o,
                noticeMessage: c,
            } = e,
            d = r.useMemo(
                () =>
                    s.map((e) => {
                        let { label: t, brand: n, ...a } = e;
                        return { id: null != a.key ? `${a.key}` : a.value, label: t ?? "", icon: n ?? void 0, ...a };
                    }),
                [s],
            ),
            m = r.useMemo(
                () => ({
                    value: u ?? null,
                    options: d,
                    onChange: i,
                    onNew: null != t ? t : () => {},
                    disabled: l || n,
                    newPaymentMethodOptionLabel: o,
                }),
                [u, d, i, t, l, n, o],
            );
        return (0, a.jsx)(f.v, { ...m, noticeMessage: c });
    },
    S = (e) => {
        let { onClick: t } = e;
        return (0, a.jsx)(s.$, { variant: "primary", fullWidth: !0, onClick: t, text: E.intl.string(E.t.eQ2bLp) });
    };
function j(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: o,
            onChange: g,
            onPaymentSourceAdd: x,
            isTrial: _ = !1,
            disabled: k = !1,
            dropdownLoading: j,
            paymentGatewayRestrictions: C,
            newPaymentMethodOptionLabel: R,
            defaultPaymentSourceId: M,
            tooltipText: D,
        } = e,
        {
            hasNoPaymentSources: w,
            handleChange: G,
            paymentSource: O,
            paymentSourceOptions: B,
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
                x = r.useMemo(() => n.find((e) => (e instanceof p.A ? e.source : e) instanceof b.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != x && (0, c.YP)(x);
            }, [x]);
            let h = (0, l.bG)([m.A], () => {
                    if (null == x) return null;
                    let e = m.A.getBalance(x);
                    return null != e ? (0, A.$g)(e.amount, e.currency) : null;
                }, [x]),
                y = 0 === n.length,
                _ = null != a ? [a] : [],
                I = [..._, ...n, ...(g ? [P] : [])].map((e, t) => {
                    if (e instanceof p.A) {
                        let t,
                            { brand: n, label: a } = L(e.source, i, h);
                        return (
                            v &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = E.intl.string(T.default.pWSgIu))
                                    : (t = E.intl.string(T.default["Kv+vV7"]))),
                            { value: e.id, label: a, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof b.Ay) {
                        let t,
                            { brand: n, label: a } = L(e, i, h);
                        return (
                            (t = e === P || null == o || !(o.length > 0) || o.includes(e.paymentGateway)),
                            { value: e.id, label: a, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                k = r.useMemo(() => {
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
                prependOptions: _,
                paymentSourceOptions: I,
                paymentSource: r.useMemo(() => n.find((e) => e.id === k), [n, k]),
                selectedPaymentSourceId: k,
                isStoreCountryEnabled: v,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: o,
            onChange: g,
            onPaymentSourceAdd: x,
            paymentGatewayRestrictions: C,
            includeNewPaymentSourceOption: !1,
        }),
        F = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: a,
                    defaultPaymentSourceId: r,
                    isStoreCountryEnabled: l,
                } = e,
                i = n instanceof p.A ? n.source : n;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return E.intl.string(E.t.SvheW9);
                if (t && i.hasFlag(y.rI.NEW))
                    return E.intl.format(E.t.d7ZLKA, {
                        helpDeskArticle: v.A.getArticleURL(h.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let s = a.filter((e) => e instanceof p.A);
            if (s.length > 0) {
                if (!s.some((e) => e.enabled))
                    return l ? E.intl.string(T.default["3kMstB"]) : E.intl.string(E.t.OqbMBV);
                if (null != r) {
                    let e = s.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        a = null != n && n.id !== r;
                    if (t && a) return l ? E.intl.string(T.default.Y6lY0I) : E.intl.string(E.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: _,
            selectedPaymentSource: O,
            paymentSources: n,
            defaultPaymentSourceId: M,
            isStoreCountryEnabled: U,
        });
    if (j) return (0, a.jsx)("div", { className: I.h, children: (0, a.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }) });
    if (w) return (0, a.jsx)(S, { onClick: x });
    let Y = (0, a.jsx)(N, {
        onPaymentSourceAdd: x,
        disabled: k,
        handleChange: G,
        paymentSourceOptions: B,
        selectedPaymentSourceId: W,
        newPaymentMethodOptionLabel: R,
        noticeMessage: F,
    });
    return null != D ? (0, a.jsx)(i.m, { asContainer: !0, text: D, children: Y }) : Y;
}
