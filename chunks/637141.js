l.d(t, { A: () => V });
var n = l(627968),
    r = l(64700),
    a = l(503698),
    i = l.n(a),
    s = l(702841),
    u = l(661531),
    o = l(843282),
    c = l(990078),
    d = l(821609),
    m = l(289873),
    x = l(695366),
    f = l(834730),
    h = l(109936),
    p = l(753390),
    g = l(546605),
    C = l(176095),
    v = l(6151),
    y = l(46054),
    b = l(826469),
    j = l(812745),
    A = l(202613),
    T = l(975571),
    N = l(580630),
    L = l(935208),
    E = l(652215),
    _ = l(818348),
    S = l(375708),
    w = l(327105),
    P = l(776409),
    I = l(714246);
let M = "***@***.***",
    k = new A.YS({ id: v.a, brand: j.Ay.Types.UNKNOWN, type: E.hes.CARD });
function O(e, t, l) {
    if (e instanceof A.YS)
        return e.id === v.a
            ? { brand: null, label: S.intl.string(S.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: j.Ay.Types.BANK,
                    label: S.intl.formatToPlainString(S.t.ixNwPL, {
                        date: t ? "********" : new Date(L.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? j.Ay.Types.UNKNOWN : e.brand,
                    label: S.intl.formatToPlainString(S.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof A.SJ) return { brand: j.Ay.Types.PAYPAL, label: t ? M : e.email };
    if (e instanceof A.A0) return { brand: j.Ay.Types.SOFORT, label: t ? M : e.email };
    if (e instanceof A.Qh) return { brand: j.Ay.Types.GIROPAY, label: S.intl.string(S.t["y+0MQZ"]) };
    if (e instanceof A.Tu) return { brand: j.Ay.Types.PRZELEWY24, label: t ? M : e.email };
    else if (e instanceof A.Ux) return { brand: j.Ay.Types.PAYSAFECARD, label: S.intl.string(S.t.e3APTT) };
    else if (e instanceof A.F_) return { brand: j.Ay.Types.GCASH, label: S.intl.string(S.t.PjehcF) };
    else if (e instanceof A.Xj) return { brand: j.Ay.Types.GRABPAY, label: S.intl.string(S.t.T5davE) };
    else if (e instanceof A.am) return { brand: j.Ay.Types.MOMO_WALLET, label: S.intl.string(S.t.J0A1Vk) };
    else if (e instanceof A._1) return { brand: j.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof A.i6) return { brand: j.Ay.Types.KAKAOPAY, label: S.intl.string(S.t.CSVexi) };
    else if (e instanceof A.cg) return { brand: j.Ay.Types.GOPAY_WALLET, label: S.intl.string(S.t["43J8JK"]) };
    else if (e instanceof A.UG) return { brand: j.Ay.Types.BANCONTACT, label: S.intl.string(S.t["1ITkfq"]) };
    else if (e instanceof A.rJ)
        return { brand: j.Ay.Types.EPS, label: S.intl.format(S.t.hSPoZw, { bank: (0, h.j)(e.bank) }) };
    else if (e instanceof A.EE)
        return {
            brand: j.Ay.Types.IDEAL,
            label:
                null == e.bank ? S.intl.string(S.t.nSbwqC) : S.intl.format(S.t["9kUlRU"], { bank: (0, h.o)(e.bank) }),
        };
    else if (e instanceof A.FQ) return { brand: j.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof A.LQ)
        return {
            brand: j.Ay.Types.GIFT_CARD,
            label:
                null != l
                    ? S.intl.formatToPlainString(P.default["Jz6+Oj"], { amount: l })
                    : S.intl.string(P.default["/FQWfA"]),
        };
    throw Error("Invalid Payment Source");
}
function G(e) {
    return e instanceof b.A ? e.source : e;
}
function R(e) {
    let { paymentSource: t, selectOption: l, hidePersonalInformation: r } = e,
        a = null != t ? G(t) : null,
        u = a?.type === E.hes.TDS_WALLET,
        o = (0, s.bG)([C.A], () => {
            if (!u) return null;
            let e = C.A.getBalance(a.id);
            return null != e ? (0, N.$g)(e.amount, e.currency) : null;
        }, [u, a]);
    if (l.value === v.a) return (0, n.jsx)("div", { className: I.wC, children: l.label });
    if (null != a) {
        let { brand: e, label: t } = O(a, r, o);
        return (0, n.jsxs)("div", {
            className: I.IF,
            children: [
                null != e ? (0, n.jsx)(j.Ay, { type: j.Ay.getType(e) }) : null,
                (0, n.jsx)("div", { className: i()(I.wC, { [I.z3]: a.invalid }), children: t }),
            ],
        });
    }
    return (0, n.jsx)("div", { className: I.wC, children: l.label });
}
let D = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: l,
                disabled: a,
                handleChange: i,
                paymentSourceOptions: s,
                selectedPaymentSourceId: u,
                newPaymentMethodOptionLabel: o,
                noticeMessage: c,
            } = e,
            d = r.useMemo(
                () =>
                    s.map((e) => {
                        let { label: t, brand: l, ...n } = e;
                        return { id: null != n.key ? `${n.key}` : n.value, label: t ?? "", icon: l ?? void 0, ...n };
                    }),
                [s],
            ),
            m = r.useMemo(
                () => ({
                    value: u ?? null,
                    options: d,
                    onChange: i,
                    onNew: null != t ? t : () => {},
                    disabled: a || l,
                    newPaymentMethodOptionLabel: o,
                }),
                [u, d, i, t, a, l, o],
            );
        return (0, n.jsx)(v.v, { ...m, noticeMessage: c });
    },
    B = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(d.$, { variant: "primary", fullWidth: !0, onClick: t, text: S.intl.string(S.t.eQ2bLp) });
    };
function V(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: l,
            prependOption: a,
            hidePersonalInformation: i,
            onChange: d,
            onPaymentSourceAdd: h,
            isTrial: j = !1,
            disabled: L = !1,
            className: P,
            optionClassName: M,
            dropdownLoading: V,
            paymentGatewayRestrictions: F,
            shouldUseUnifiedCheckoutUI: U,
            newPaymentMethodOptionLabel: W,
            defaultPaymentSourceId: Y,
            tooltipText: Z,
        } = e,
        {
            hasNoPaymentSources: H,
            handleChange: $,
            paymentSource: z,
            paymentSourceOptions: K,
            selectedPaymentSourceId: Q,
            isStoreCountryEnabled: q,
        } = ((e) => {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: l,
                    prependOption: n,
                    hidePersonalInformation: a,
                    onChange: i,
                    onPaymentSourceAdd: u,
                    paymentGatewayRestrictions: o,
                    includeNewPaymentSourceOption: c,
                } = e,
                d = (0, g.vg)("PaymentSourceDropdown"),
                m = r.useMemo(() => l.find((e) => G(e) instanceof A.LQ)?.id ?? null, [l]);
            r.useEffect(() => {
                null != m && (0, p.YP)(m);
            }, [m]);
            let x = (0, s.bG)([C.A], () => {
                    if (null == m) return null;
                    let e = C.A.getBalance(m);
                    return null != e ? (0, N.$g)(e.amount, e.currency) : null;
                }, [m]),
                f = 0 === l.length,
                h = null != n ? [n] : [],
                y = [...h, ...l, ...(c ? [k] : [])].map((e, t) => {
                    if (e instanceof b.A) {
                        let t,
                            { brand: l, label: n } = O(e.source, a, x);
                        return (
                            d &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = S.intl.string(w.default.pWSgIu))
                                    : (t = S.intl.string(w.default["Kv+vV7"]))),
                            { value: e.id, label: n, brand: l, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof A.Ay) {
                        let t,
                            { brand: l, label: n } = O(e, a, x);
                        return (
                            (t = e === k || null == o || !(o.length > 0) || o.includes(e.paymentGateway)),
                            { value: e.id, label: n, brand: l, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                j = r.useMemo(() => l.find((e) => e.id === t), [l, t]),
                T = t;
            if (null == T && null != o && o.length > 0) {
                let e = l.filter((e) => o.includes(e.paymentGateway));
                T = 0 === e.length ? v.a : e[0].id;
            }
            return {
                hasNoPaymentSources: f,
                handleChange: (e) => {
                    if (e === v.a) null != u && u();
                    else {
                        let t = l.find((t) => t.id === e),
                            n = t instanceof b.A ? t.source : t;
                        null != i && i(n);
                    }
                },
                prependOptions: h,
                paymentSourceOptions: y,
                paymentSource: j,
                selectedPaymentSourceId: T,
                isStoreCountryEnabled: d,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: l,
            prependOption: a,
            hidePersonalInformation: i,
            onChange: d,
            onPaymentSourceAdd: h,
            paymentGatewayRestrictions: F,
            includeNewPaymentSourceOption: !U,
        }),
        J = r.useMemo(() => new Map(l.map((e) => [e.id, e])), [l]),
        X = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: l,
                    paymentSources: n,
                    defaultPaymentSourceId: r,
                    isStoreCountryEnabled: a,
                } = e,
                i = l instanceof b.A ? l.source : l;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return S.intl.string(S.t.SvheW9);
                if (t && i.hasFlag(_.rI.NEW))
                    return S.intl.format(S.t.d7ZLKA, {
                        helpDeskArticle: T.A.getArticleURL(E.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let s = n.filter((e) => e instanceof b.A);
            if (s.length > 0) {
                if (!s.some((e) => e.enabled))
                    return a
                        ? S.intl.formatToMarkdownString(w.default["3kMstB"], {
                              learnMoreUrl: "https://support.discord.com/hc/articles/39799791912087",
                          })
                        : S.intl.string(S.t.OqbMBV);
                if (null != r) {
                    let e = s.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        n = null != l && l.id !== r;
                    if (t && n) return a ? S.intl.string(w.default.Y6lY0I) : S.intl.string(S.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: j,
            selectedPaymentSource: z,
            paymentSources: l,
            defaultPaymentSourceId: Y,
            isStoreCountryEnabled: q,
        });
    if (V) return (0, n.jsx)("div", { className: I.hN, children: (0, n.jsx)(m.y, { type: m.y.Type.WANDERING_CUBES }) });
    if (H) return (0, n.jsx)(B, { onClick: h });
    let ee = U
            ? (0, n.jsx)(D, {
                  onPaymentSourceAdd: h,
                  disabled: L,
                  handleChange: $,
                  paymentSourceOptions: K,
                  selectedPaymentSourceId: Q,
                  newPaymentMethodOptionLabel: W,
                  noticeMessage: X,
              })
            : (0, n.jsx)(o.Te, {
                  options: K,
                  value: Q,
                  onChange: $,
                  isDisabled: L,
                  className: P,
                  optionClassName: M,
                  placeholder: S.intl.string(S.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e,
                          l = null == t.value ? void 0 : J.get(t.value);
                      return (0, n.jsx)(R, { paymentSource: l, selectOption: t, hidePersonalInformation: i });
                  },
                  renderOptionLabel: (e) => {
                      let t = null == e.value ? void 0 : J.get(e.value);
                      return (0, n.jsx)(R, { paymentSource: t, selectOption: e, hidePersonalInformation: i });
                  },
                  "data-migration-pending": !0,
              }),
        et = null != Z ? (0, n.jsx)(c.m, { asContainer: !0, text: Z, children: ee }) : ee;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            et,
            null == X || U
                ? null
                : (0, n.jsxs)("div", {
                      className: I.ot,
                      children: [
                          (0, n.jsx)(x.E, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: I.fT,
                              color: u.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, n.jsx)(f.E, {
                              variant: "text-xs/normal",
                              children: "string" == typeof X ? y.A.parse(X, !1, { allowLinks: !0 }) : X,
                          }),
                      ],
                  }),
        ],
    });
}
