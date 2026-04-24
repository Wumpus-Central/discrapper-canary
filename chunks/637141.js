"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(702841),
    l = n(661531),
    d = n(843282),
    _ = n(990078),
    u = n(821609),
    c = n(289873),
    E = n(695366),
    h = n(834730),
    m = n(887555),
    f = n(323082),
    g = n(546605),
    p = n(176095),
    A = n(6151),
    I = n(46054),
    T = n(826469),
    S = n(812745),
    N = n(202613),
    C = n(975571),
    R = n(580630),
    O = n(935208),
    y = n(652215),
    v = n(818348),
    D = n(985018),
    L = n(327105),
    b = n(714246);
let w = "***@***.***",
    P = new N.YS({ id: A.a, brand: S.Ay.Types.UNKNOWN, type: y.hes.CARD });
function k(e, t, n) {
    if (e instanceof N.YS)
        return e.id === A.a
            ? { brand: null, label: D.intl.string(D.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: S.Ay.Types.BANK,
                    label: D.intl.formatToPlainString(D.t.ixNwPL, {
                        date: t ? "********" : new Date(O.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? S.Ay.Types.UNKNOWN : e.brand,
                    label: D.intl.formatToPlainString(D.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof N.SJ) return { brand: S.Ay.Types.PAYPAL, label: t ? w : e.email };
    if (e instanceof N.A0) return { brand: S.Ay.Types.SOFORT, label: t ? w : e.email };
    if (e instanceof N.Qh) return { brand: S.Ay.Types.GIROPAY, label: D.intl.string(D.t["y+0MQZ"]) };
    if (e instanceof N.Tu) return { brand: S.Ay.Types.PRZELEWY24, label: t ? w : e.email };
    else if (e instanceof N.Ux) return { brand: S.Ay.Types.PAYSAFECARD, label: D.intl.string(D.t.e3APTT) };
    else if (e instanceof N.F_) return { brand: S.Ay.Types.GCASH, label: D.intl.string(D.t.PjehcF) };
    else if (e instanceof N.Xj) return { brand: S.Ay.Types.GRABPAY, label: D.intl.string(D.t.T5davE) };
    else if (e instanceof N.am) return { brand: S.Ay.Types.MOMO_WALLET, label: D.intl.string(D.t.J0A1Vk) };
    else if (e instanceof N._1) return { brand: S.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof N.i6) return { brand: S.Ay.Types.KAKAOPAY, label: D.intl.string(D.t.CSVexi) };
    else if (e instanceof N.cg) return { brand: S.Ay.Types.GOPAY_WALLET, label: D.intl.string(D.t["43J8JK"]) };
    else if (e instanceof N.UG) return { brand: S.Ay.Types.BANCONTACT, label: D.intl.string(D.t["1ITkfq"]) };
    else if (e instanceof N.rJ)
        return { brand: S.Ay.Types.EPS, label: D.intl.format(D.t.hSPoZw, { bank: (0, m.j)(e.bank) }) };
    else if (e instanceof N.EE)
        return {
            brand: S.Ay.Types.IDEAL,
            label:
                null == e.bank ? D.intl.string(D.t.nSbwqC) : D.intl.format(D.t["9kUlRU"], { bank: (0, m.o)(e.bank) }),
        };
    else if (e instanceof N.FQ) return { brand: S.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof N.LQ)
        return {
            brand: S.Ay.Types.GIFT_CARD,
            label: null != n ? D.intl.formatToPlainString(D.t["4WxRJd"], { amount: n }) : D.intl.string(D.t.wkFAZf),
        };
    throw Error("Invalid Payment Source");
}
function M(e) {
    return e instanceof T.A ? e.source : e;
}
function U(e) {
    let { paymentSource: t, selectOption: n, hidePersonalInformation: r } = e,
        s = null != t ? M(t) : null,
        l = s?.type === y.hes.TDS_WALLET,
        d = (0, o.bG)([p.A], () => {
            if (!l) return null;
            let e = p.A.getBalance(s.id);
            return null != e ? (0, R.$g)(e.amount, e.currency) : null;
        }, [l, s]);
    if (n.value === A.a) return (0, i.jsx)("div", { className: b.wC, children: n.label });
    if (null != s) {
        let { brand: e, label: t } = k(s, r, d);
        return (0, i.jsxs)("div", {
            className: b.IF,
            children: [
                null != e ? (0, i.jsx)(S.Ay, { type: S.Ay.getType(e) }) : null,
                (0, i.jsx)("div", { className: a()(b.wC, { [b.z3]: s.invalid }), children: t }),
            ],
        });
    }
    return (0, i.jsx)("div", { className: b.wC, children: n.label });
}
let x = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: s,
                handleChange: a,
                paymentSourceOptions: o,
                selectedPaymentSourceId: l,
                newPaymentMethodOptionLabel: d,
                noticeMessage: _,
            } = e,
            u = r.useMemo(
                () =>
                    o.map((e) => {
                        let { label: t, brand: n, ...i } = e;
                        return { id: null != i.key ? `${i.key}` : i.value, label: t ?? "", icon: n ?? void 0, ...i };
                    }),
                [o],
            ),
            c = r.useMemo(
                () => ({
                    value: l ?? null,
                    options: u,
                    onChange: a,
                    onNew: null != t ? t : () => {},
                    disabled: s || n,
                    newPaymentMethodOptionLabel: d,
                }),
                [l, u, a, t, s, n, d],
            );
        return (0, i.jsx)(A.v, { ...c, noticeMessage: _ });
    },
    G = (e) => {
        let { onClick: t } = e;
        return (0, i.jsx)(u.$, { variant: "primary", fullWidth: !0, onClick: t, text: D.intl.string(D.t.eQ2bLp) });
    };
function V(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: u,
            onPaymentSourceAdd: m,
            isTrial: S = !1,
            disabled: O = !1,
            className: w,
            optionClassName: V,
            dropdownLoading: F,
            paymentGatewayRestrictions: B,
            shouldUseUnifiedCheckoutUI: H,
            newPaymentMethodOptionLabel: j,
            defaultPaymentSourceId: W,
            tooltipText: Y,
        } = e,
        {
            hasNoPaymentSources: K,
            handleChange: z,
            paymentSource: $,
            paymentSourceOptions: q,
            selectedPaymentSourceId: X,
            isStoreCountryEnabled: Z,
        } = ((e) => {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: i,
                    hidePersonalInformation: s,
                    onChange: a,
                    onPaymentSourceAdd: l,
                    paymentGatewayRestrictions: d,
                    includeNewPaymentSourceOption: _,
                } = e,
                u = (0, g.vg)("PaymentSourceDropdown"),
                c = r.useMemo(() => n.find((e) => M(e) instanceof N.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != c && (0, f.YP)(c);
            }, [c]);
            let E = (0, o.bG)([p.A], () => {
                    if (null == c) return null;
                    let e = p.A.getBalance(c);
                    return null != e ? (0, R.$g)(e.amount, e.currency) : null;
                }, [c]),
                h = 0 === n.length,
                m = null != i ? [i] : [],
                I = [...m, ...n, ...(_ ? [P] : [])].map((e, t) => {
                    if (e instanceof T.A) {
                        let t,
                            { brand: n, label: i } = k(e.source, s, E);
                        return (
                            u &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = D.intl.string(L.default.pWSgIu))
                                    : (t = D.intl.string(L.default["Kv+vV7"]))),
                            { value: e.id, label: i, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof N.Ay) {
                        let t,
                            { brand: n, label: i } = k(e, s, E);
                        return (
                            (t = e === P || null == d || !(d.length > 0) || d.includes(e.paymentGateway)),
                            { value: e.id, label: i, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                S = r.useMemo(() => n.find((e) => e.id === t), [n, t]),
                C = t;
            if (null == C && null != d && d.length > 0) {
                let e = n.filter((e) => d.includes(e.paymentGateway));
                C = 0 === e.length ? A.a : e[0].id;
            }
            return {
                hasNoPaymentSources: h,
                handleChange: (e) => {
                    if (e === A.a) null != l && l();
                    else {
                        let t = n.find((t) => t.id === e),
                            i = t instanceof T.A ? t.source : t;
                        null != a && a(i);
                    }
                },
                prependOptions: m,
                paymentSourceOptions: I,
                paymentSource: S,
                selectedPaymentSourceId: C,
                isStoreCountryEnabled: u,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: u,
            onPaymentSourceAdd: m,
            paymentGatewayRestrictions: B,
            includeNewPaymentSourceOption: !H,
        }),
        Q = r.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        J = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: i,
                    defaultPaymentSourceId: r,
                    isStoreCountryEnabled: s,
                } = e,
                a = n instanceof T.A ? n.source : n;
            if (null != a) {
                if (t && !a.canRedeemTrial()) return D.intl.string(D.t.SvheW9);
                if (t && a.hasFlag(v.rI.NEW))
                    return D.intl.format(D.t.d7ZLKA, {
                        helpDeskArticle: C.A.getArticleURL(y.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let o = i.filter((e) => e instanceof T.A);
            if (o.length > 0) {
                if (!o.some((e) => e.enabled))
                    return s
                        ? D.intl.formatToMarkdownString(L.default["3kMstB"], {
                              learnMoreUrl: "https://support.discord.com/hc/articles/39799791912087",
                          })
                        : D.intl.string(D.t.OqbMBV);
                if (null != r) {
                    let e = o.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        i = null != n && n.id !== r;
                    if (t && i) return s ? D.intl.string(L.default.Y6lY0I) : D.intl.string(D.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: S,
            selectedPaymentSource: $,
            paymentSources: n,
            defaultPaymentSourceId: W,
            isStoreCountryEnabled: Z,
        });
    if (F) return (0, i.jsx)("div", { className: b.hN, children: (0, i.jsx)(c.y, { type: c.y.Type.WANDERING_CUBES }) });
    if (K) return (0, i.jsx)(G, { onClick: m });
    let ee = H
            ? (0, i.jsx)(x, {
                  onPaymentSourceAdd: m,
                  disabled: O,
                  handleChange: z,
                  paymentSourceOptions: q,
                  selectedPaymentSourceId: X,
                  newPaymentMethodOptionLabel: j,
                  noticeMessage: J,
              })
            : (0, i.jsx)(d.Te, {
                  options: q,
                  value: X,
                  onChange: z,
                  isDisabled: O,
                  className: w,
                  optionClassName: V,
                  placeholder: D.intl.string(D.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e,
                          n = null == t.value ? void 0 : Q.get(t.value);
                      return (0, i.jsx)(U, { paymentSource: n, selectOption: t, hidePersonalInformation: a });
                  },
                  renderOptionLabel: (e) => {
                      let t = null == e.value ? void 0 : Q.get(e.value);
                      return (0, i.jsx)(U, { paymentSource: t, selectOption: e, hidePersonalInformation: a });
                  },
                  "data-migration-pending": !0,
              }),
        et = null != Y ? (0, i.jsx)(_.m, { asContainer: !0, text: Y, children: ee }) : ee;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            et,
            null == J || H
                ? null
                : (0, i.jsxs)("div", {
                      className: b.ot,
                      children: [
                          (0, i.jsx)(E.E, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: b.fT,
                              color: l.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, i.jsx)(h.E, {
                              variant: "text-xs/normal",
                              children: "string" == typeof J ? I.A.parse(J, !1, { allowLinks: !0 }) : J,
                          }),
                      ],
                  }),
        ],
    });
}
