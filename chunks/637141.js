n.d(t, { Ay: () => B, Sm: () => D });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(702841),
    u = n(661531),
    o = n(843282),
    c = n(990078),
    d = n(821609),
    m = n(289873),
    p = n(695366),
    f = n(834730),
    g = n(109936),
    v = n(753390),
    x = n(546605),
    b = n(176095),
    h = n(6151),
    A = n(46054),
    y = n(826469),
    I = n(812745),
    _ = n(202613),
    j = n(975571),
    T = n(580630),
    P = n(935208),
    E = n(652215),
    N = n(818348),
    S = n(375708),
    R = n(327105),
    M = n(776409),
    L = n(714246);
let C = "***@***.***",
    k = new _.YS({ id: h.a, brand: I.Ay.Types.UNKNOWN, type: E.hes.CARD });
function D(e, t, n) {
    if (e instanceof _.YS)
        return e.id === h.a
            ? { brand: null, label: S.intl.string(S.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: I.Ay.Types.BANK,
                    label: S.intl.formatToPlainString(S.t.ixNwPL, {
                        date: t ? "********" : new Date(P.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? I.Ay.Types.UNKNOWN : e.brand,
                    label: S.intl.formatToPlainString(S.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof _.SJ) return { brand: I.Ay.Types.PAYPAL, label: t ? C : e.email };
    if (e instanceof _.A0) return { brand: I.Ay.Types.SOFORT, label: t ? C : e.email };
    if (e instanceof _.Qh) return { brand: I.Ay.Types.GIROPAY, label: S.intl.string(S.t["y+0MQZ"]) };
    if (e instanceof _.Tu) return { brand: I.Ay.Types.PRZELEWY24, label: t ? C : e.email };
    else if (e instanceof _.Ux) return { brand: I.Ay.Types.PAYSAFECARD, label: S.intl.string(S.t.e3APTT) };
    else if (e instanceof _.F_) return { brand: I.Ay.Types.GCASH, label: S.intl.string(S.t.PjehcF) };
    else if (e instanceof _.Xj) return { brand: I.Ay.Types.GRABPAY, label: S.intl.string(S.t.T5davE) };
    else if (e instanceof _.am) return { brand: I.Ay.Types.MOMO_WALLET, label: S.intl.string(S.t.J0A1Vk) };
    else if (e instanceof _._1) return { brand: I.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof _.i6) return { brand: I.Ay.Types.KAKAOPAY, label: S.intl.string(S.t.CSVexi) };
    else if (e instanceof _.cg) return { brand: I.Ay.Types.GOPAY_WALLET, label: S.intl.string(S.t["43J8JK"]) };
    else if (e instanceof _.UG) return { brand: I.Ay.Types.BANCONTACT, label: S.intl.string(S.t["1ITkfq"]) };
    else if (e instanceof _.rJ)
        return { brand: I.Ay.Types.EPS, label: S.intl.format(S.t.hSPoZw, { bank: (0, g.j)(e.bank) }) };
    else if (e instanceof _.EE)
        return {
            brand: I.Ay.Types.IDEAL,
            label:
                null == e.bank ? S.intl.string(S.t.nSbwqC) : S.intl.format(S.t["9kUlRU"], { bank: (0, g.o)(e.bank) }),
        };
    else if (e instanceof _.FQ) return { brand: I.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof _.LQ)
        return {
            brand: I.Ay.Types.GIFT_CARD,
            label:
                null != n
                    ? S.intl.formatToPlainString(M.default["Jz6+Oj"], { amount: n })
                    : S.intl.string(M.default["/FQWfA"]),
        };
    throw Error("Invalid Payment Source");
}
function U(e) {
    return e instanceof y.A ? e.source : e;
}
function O(e) {
    let { paymentSource: t, selectOption: n, hidePersonalInformation: a } = e,
        r = null != t ? U(t) : null,
        u = r?.type === E.hes.TDS_WALLET,
        o = (0, s.bG)([b.A], () => {
            if (!u) return null;
            let e = b.A.getBalance(r.id);
            return null != e ? (0, T.$g)(e.amount, e.currency) : null;
        }, [u, r]);
    if (n.value === h.a) return (0, l.jsx)("div", { className: L.wC, children: n.label });
    if (null != r) {
        let { brand: e, label: t } = D(r, a, o);
        return (0, l.jsxs)("div", {
            className: L.IF,
            children: [
                null != e ? (0, l.jsx)(I.Ay, { type: I.Ay.getType(e) }) : null,
                (0, l.jsx)("div", { className: i()(L.wC, { [L.z3]: r.invalid }), children: t }),
            ],
        });
    }
    return (0, l.jsx)("div", { className: L.wC, children: n.label });
}
let w = (e) => {
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
            d = a.useMemo(
                () =>
                    s.map((e) => {
                        let { label: t, brand: n, ...l } = e;
                        return { id: null != l.key ? `${l.key}` : l.value, label: t ?? "", icon: n ?? void 0, ...l };
                    }),
                [s],
            ),
            m = a.useMemo(
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
        return (0, l.jsx)(h.v, { ...m, noticeMessage: c });
    },
    G = (e) => {
        let { onClick: t } = e;
        return (0, l.jsx)(d.$, { variant: "primary", fullWidth: !0, onClick: t, text: S.intl.string(S.t.eQ2bLp) });
    };
function B(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: r,
            hidePersonalInformation: i,
            onChange: d,
            onPaymentSourceAdd: g,
            isTrial: I = !1,
            disabled: P = !1,
            className: M,
            optionClassName: C,
            dropdownLoading: B,
            paymentGatewayRestrictions: W,
            shouldUseUnifiedCheckoutUI: F,
            newPaymentMethodOptionLabel: Y,
            defaultPaymentSourceId: H,
            tooltipText: V,
        } = e,
        {
            hasNoPaymentSources: K,
            handleChange: z,
            paymentSource: q,
            paymentSourceOptions: $,
            selectedPaymentSourceId: Q,
            isStoreCountryEnabled: X,
        } = ((e) => {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: l,
                    hidePersonalInformation: r,
                    onChange: i,
                    onPaymentSourceAdd: u,
                    paymentGatewayRestrictions: o,
                    includeNewPaymentSourceOption: c,
                } = e,
                d = (0, x.vg)("PaymentSourceDropdown"),
                m = a.useMemo(() => n.find((e) => U(e) instanceof _.LQ)?.id ?? null, [n]);
            a.useEffect(() => {
                null != m && (0, v.YP)(m);
            }, [m]);
            let p = (0, s.bG)([b.A], () => {
                    if (null == m) return null;
                    let e = b.A.getBalance(m);
                    return null != e ? (0, T.$g)(e.amount, e.currency) : null;
                }, [m]),
                f = 0 === n.length,
                g = null != l ? [l] : [],
                A = [...g, ...n, ...(c ? [k] : [])].map((e, t) => {
                    if (e instanceof y.A) {
                        let t,
                            { brand: n, label: l } = D(e.source, r, p);
                        return (
                            d &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = S.intl.string(R.default.pWSgIu))
                                    : (t = S.intl.string(R.default["Kv+vV7"]))),
                            { value: e.id, label: l, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof _.Ay) {
                        let t,
                            { brand: n, label: l } = D(e, r, p);
                        return (
                            (t = e === k || null == o || !(o.length > 0) || o.includes(e.paymentGateway)),
                            { value: e.id, label: l, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                I = a.useMemo(() => {
                    let e = t;
                    if (null == e && null != o && o.length > 0) {
                        let t = n.filter((e) => o.includes(e.paymentGateway));
                        e = 0 === t.length ? h.a : t[0].id;
                    }
                    if (d) {
                        let t = n.filter((e) => e instanceof y.A);
                        t.length > 0 && t.every((e) => !e.enabled) && (e = h.a);
                    }
                    return e;
                }, [t, o, n, d]);
            return {
                hasNoPaymentSources: f,
                handleChange: (e) => {
                    if (e === h.a) null != u && u();
                    else {
                        let t = n.find((t) => t.id === e),
                            l = t instanceof y.A ? t.source : t;
                        null != i && i(l);
                    }
                },
                prependOptions: g,
                paymentSourceOptions: A,
                paymentSource: a.useMemo(() => n.find((e) => e.id === I), [n, I]),
                selectedPaymentSourceId: I,
                isStoreCountryEnabled: d,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: r,
            hidePersonalInformation: i,
            onChange: d,
            onPaymentSourceAdd: g,
            paymentGatewayRestrictions: W,
            includeNewPaymentSourceOption: !F,
        }),
        Z = a.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        J = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: l,
                    defaultPaymentSourceId: a,
                    isStoreCountryEnabled: r,
                } = e,
                i = n instanceof y.A ? n.source : n;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return S.intl.string(S.t.SvheW9);
                if (t && i.hasFlag(N.rI.NEW))
                    return S.intl.format(S.t.d7ZLKA, {
                        helpDeskArticle: j.A.getArticleURL(E.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let s = l.filter((e) => e instanceof y.A);
            if (s.length > 0) {
                if (!s.some((e) => e.enabled))
                    return r ? S.intl.string(R.default["3kMstB"]) : S.intl.string(S.t.OqbMBV);
                if (null != a) {
                    let e = s.find((e) => e.id === a),
                        t = null != e && !e.enabled,
                        l = null != n && n.id !== a;
                    if (t && l) return r ? S.intl.string(R.default.Y6lY0I) : S.intl.string(S.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: I,
            selectedPaymentSource: q,
            paymentSources: n,
            defaultPaymentSourceId: H,
            isStoreCountryEnabled: X,
        });
    if (B) return (0, l.jsx)("div", { className: L.hN, children: (0, l.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }) });
    if (K) return (0, l.jsx)(G, { onClick: g });
    let ee = F
            ? (0, l.jsx)(w, {
                  onPaymentSourceAdd: g,
                  disabled: P,
                  handleChange: z,
                  paymentSourceOptions: $,
                  selectedPaymentSourceId: Q,
                  newPaymentMethodOptionLabel: Y,
                  noticeMessage: J,
              })
            : (0, l.jsx)(o.Te, {
                  options: $,
                  value: Q,
                  onChange: z,
                  isDisabled: P,
                  className: M,
                  optionClassName: C,
                  placeholder: S.intl.string(S.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e,
                          n = null == t.value ? void 0 : Z.get(t.value);
                      return (0, l.jsx)(O, { paymentSource: n, selectOption: t, hidePersonalInformation: i });
                  },
                  renderOptionLabel: (e) => {
                      let t = null == e.value ? void 0 : Z.get(e.value);
                      return (0, l.jsx)(O, { paymentSource: t, selectOption: e, hidePersonalInformation: i });
                  },
                  "data-migration-pending": !0,
              }),
        et = null != V ? (0, l.jsx)(c.m, { asContainer: !0, text: V, children: ee }) : ee;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            et,
            null == J || F
                ? null
                : (0, l.jsxs)("div", {
                      className: L.ot,
                      children: [
                          (0, l.jsx)(p.E, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: L.fT,
                              color: u.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, l.jsx)(f.E, {
                              variant: "text-xs/normal",
                              children: "string" == typeof J ? A.A.parse(J, !1, { allowLinks: !0 }) : J,
                          }),
                      ],
                  }),
        ],
    });
}
