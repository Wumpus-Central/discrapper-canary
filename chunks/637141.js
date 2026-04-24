n.d(t, { A: () => G });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(702841),
    o = n(661531),
    c = n(843282),
    d = n(990078),
    u = n(821609),
    p = n(289873),
    _ = n(695366),
    m = n(834730),
    b = n(109936),
    f = n(323082),
    g = n(546605),
    h = n(176095),
    x = n(6151),
    v = n(46054),
    A = n(826469),
    y = n(812745),
    I = n(202613),
    j = n(975571),
    E = n(580630),
    P = n(935208),
    S = n(652215),
    k = n(818348),
    T = n(985018),
    N = n(327105),
    C = n(714246);
let R = "***@***.***",
    L = new I.YS({ id: x.a, brand: y.Ay.Types.UNKNOWN, type: S.hes.CARD });
function M(e, t, n) {
    if (e instanceof I.YS)
        return e.id === x.a
            ? { brand: null, label: T.intl.string(T.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: y.Ay.Types.BANK,
                    label: T.intl.formatToPlainString(T.t.ixNwPL, {
                        date: t ? "********" : new Date(P.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? y.Ay.Types.UNKNOWN : e.brand,
                    label: T.intl.formatToPlainString(T.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof I.SJ) return { brand: y.Ay.Types.PAYPAL, label: t ? R : e.email };
    if (e instanceof I.A0) return { brand: y.Ay.Types.SOFORT, label: t ? R : e.email };
    if (e instanceof I.Qh) return { brand: y.Ay.Types.GIROPAY, label: T.intl.string(T.t["y+0MQZ"]) };
    if (e instanceof I.Tu) return { brand: y.Ay.Types.PRZELEWY24, label: t ? R : e.email };
    else if (e instanceof I.Ux) return { brand: y.Ay.Types.PAYSAFECARD, label: T.intl.string(T.t.e3APTT) };
    else if (e instanceof I.F_) return { brand: y.Ay.Types.GCASH, label: T.intl.string(T.t.PjehcF) };
    else if (e instanceof I.Xj) return { brand: y.Ay.Types.GRABPAY, label: T.intl.string(T.t.T5davE) };
    else if (e instanceof I.am) return { brand: y.Ay.Types.MOMO_WALLET, label: T.intl.string(T.t.J0A1Vk) };
    else if (e instanceof I._1) return { brand: y.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof I.i6) return { brand: y.Ay.Types.KAKAOPAY, label: T.intl.string(T.t.CSVexi) };
    else if (e instanceof I.cg) return { brand: y.Ay.Types.GOPAY_WALLET, label: T.intl.string(T.t["43J8JK"]) };
    else if (e instanceof I.UG) return { brand: y.Ay.Types.BANCONTACT, label: T.intl.string(T.t["1ITkfq"]) };
    else if (e instanceof I.rJ)
        return { brand: y.Ay.Types.EPS, label: T.intl.format(T.t.hSPoZw, { bank: (0, b.j)(e.bank) }) };
    else if (e instanceof I.EE)
        return {
            brand: y.Ay.Types.IDEAL,
            label:
                null == e.bank ? T.intl.string(T.t.nSbwqC) : T.intl.format(T.t["9kUlRU"], { bank: (0, b.o)(e.bank) }),
        };
    else if (e instanceof I.FQ) return { brand: y.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof I.LQ)
        return {
            brand: y.Ay.Types.GIFT_CARD,
            label: null != n ? T.intl.formatToPlainString(T.t["4WxRJd"], { amount: n }) : T.intl.string(T.t.wkFAZf),
        };
    throw Error("Invalid Payment Source");
}
function w(e) {
    return e instanceof A.A ? e.source : e;
}
function O(e) {
    let { paymentSource: t, selectOption: n, hidePersonalInformation: r } = e,
        l = null != t ? w(t) : null,
        o = l?.type === S.hes.TDS_WALLET,
        c = (0, s.bG)([h.A], () => {
            if (!o) return null;
            let e = h.A.getBalance(l.id);
            return null != e ? (0, E.$g)(e.amount, e.currency) : null;
        }, [o, l]);
    if (n.value === x.a) return (0, a.jsx)("div", { className: C.wC, children: n.label });
    if (null != l) {
        let { brand: e, label: t } = M(l, r, c);
        return (0, a.jsxs)("div", {
            className: C.IF,
            children: [
                null != e ? (0, a.jsx)(y.Ay, { type: y.Ay.getType(e) }) : null,
                (0, a.jsx)("div", { className: i()(C.wC, { [C.z3]: l.invalid }), children: t }),
            ],
        });
    }
    return (0, a.jsx)("div", { className: C.wC, children: n.label });
}
let D = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: l,
                handleChange: i,
                paymentSourceOptions: s,
                selectedPaymentSourceId: o,
                newPaymentMethodOptionLabel: c,
                noticeMessage: d,
            } = e,
            u = r.useMemo(
                () =>
                    s.map((e) => {
                        let { label: t, brand: n, ...a } = e;
                        return { id: null != a.key ? `${a.key}` : a.value, label: t ?? "", icon: n ?? void 0, ...a };
                    }),
                [s],
            ),
            p = r.useMemo(
                () => ({
                    value: o ?? null,
                    options: u,
                    onChange: i,
                    onNew: null != t ? t : () => {},
                    disabled: l || n,
                    newPaymentMethodOptionLabel: c,
                }),
                [o, u, i, t, l, n, c],
            );
        return (0, a.jsx)(x.v, { ...p, noticeMessage: d });
    },
    B = (e) => {
        let { onClick: t } = e;
        return (0, a.jsx)(u.$, { variant: "primary", fullWidth: !0, onClick: t, text: T.intl.string(T.t.eQ2bLp) });
    };
function G(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: i,
            onChange: u,
            onPaymentSourceAdd: b,
            isTrial: y = !1,
            disabled: P = !1,
            className: R,
            optionClassName: G,
            dropdownLoading: U,
            paymentGatewayRestrictions: F,
            shouldUseUnifiedCheckoutUI: W,
            newPaymentMethodOptionLabel: K,
            defaultPaymentSourceId: V,
            tooltipText: H,
        } = e,
        {
            hasNoPaymentSources: Y,
            handleChange: z,
            paymentSource: X,
            paymentSourceOptions: Q,
            selectedPaymentSourceId: q,
            isStoreCountryEnabled: $,
        } = ((e) => {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: a,
                    hidePersonalInformation: l,
                    onChange: i,
                    onPaymentSourceAdd: o,
                    paymentGatewayRestrictions: c,
                    includeNewPaymentSourceOption: d,
                } = e,
                u = (0, g.vg)("PaymentSourceDropdown"),
                p = r.useMemo(() => n.find((e) => w(e) instanceof I.LQ)?.id ?? null, [n]);
            r.useEffect(() => {
                null != p && (0, f.YP)(p);
            }, [p]);
            let _ = (0, s.bG)([h.A], () => {
                    if (null == p) return null;
                    let e = h.A.getBalance(p);
                    return null != e ? (0, E.$g)(e.amount, e.currency) : null;
                }, [p]),
                m = 0 === n.length,
                b = null != a ? [a] : [],
                v = [...b, ...n, ...(d ? [L] : [])].map((e, t) => {
                    if (e instanceof A.A) {
                        let t,
                            { brand: n, label: a } = M(e.source, l, _);
                        return (
                            u &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = T.intl.string(N.default.pWSgIu))
                                    : (t = T.intl.string(N.default["Kv+vV7"]))),
                            { value: e.id, label: a, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof I.Ay) {
                        let t,
                            { brand: n, label: a } = M(e, l, _);
                        return (
                            (t = e === L || null == c || !(c.length > 0) || c.includes(e.paymentGateway)),
                            { value: e.id, label: a, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                y = r.useMemo(() => n.find((e) => e.id === t), [n, t]),
                j = t;
            if (null == j && null != c && c.length > 0) {
                let e = n.filter((e) => c.includes(e.paymentGateway));
                j = 0 === e.length ? x.a : e[0].id;
            }
            return {
                hasNoPaymentSources: m,
                handleChange: (e) => {
                    if (e === x.a) null != o && o();
                    else {
                        let t = n.find((t) => t.id === e),
                            a = t instanceof A.A ? t.source : t;
                        null != i && i(a);
                    }
                },
                prependOptions: b,
                paymentSourceOptions: v,
                paymentSource: y,
                selectedPaymentSourceId: j,
                isStoreCountryEnabled: u,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: i,
            onChange: u,
            onPaymentSourceAdd: b,
            paymentGatewayRestrictions: F,
            includeNewPaymentSourceOption: !W,
        }),
        J = r.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        Z = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: a,
                    defaultPaymentSourceId: r,
                    isStoreCountryEnabled: l,
                } = e,
                i = n instanceof A.A ? n.source : n;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return T.intl.string(T.t.SvheW9);
                if (t && i.hasFlag(k.rI.NEW))
                    return T.intl.format(T.t.d7ZLKA, {
                        helpDeskArticle: j.A.getArticleURL(S.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let s = a.filter((e) => e instanceof A.A);
            if (s.length > 0) {
                if (!s.some((e) => e.enabled))
                    return l
                        ? T.intl.formatToMarkdownString(N.default["3kMstB"], {
                              learnMoreUrl: "https://support.discord.com/hc/articles/39799791912087",
                          })
                        : T.intl.string(T.t.OqbMBV);
                if (null != r) {
                    let e = s.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        a = null != n && n.id !== r;
                    if (t && a) return l ? T.intl.string(N.default.Y6lY0I) : T.intl.string(T.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: y,
            selectedPaymentSource: X,
            paymentSources: n,
            defaultPaymentSourceId: V,
            isStoreCountryEnabled: $,
        });
    if (U) return (0, a.jsx)("div", { className: C.hN, children: (0, a.jsx)(p.y, { type: p.y.Type.WANDERING_CUBES }) });
    if (Y) return (0, a.jsx)(B, { onClick: b });
    let ee = W
            ? (0, a.jsx)(D, {
                  onPaymentSourceAdd: b,
                  disabled: P,
                  handleChange: z,
                  paymentSourceOptions: Q,
                  selectedPaymentSourceId: q,
                  newPaymentMethodOptionLabel: K,
                  noticeMessage: Z,
              })
            : (0, a.jsx)(c.Te, {
                  options: Q,
                  value: q,
                  onChange: z,
                  isDisabled: P,
                  className: R,
                  optionClassName: G,
                  placeholder: T.intl.string(T.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e,
                          n = null == t.value ? void 0 : J.get(t.value);
                      return (0, a.jsx)(O, { paymentSource: n, selectOption: t, hidePersonalInformation: i });
                  },
                  renderOptionLabel: (e) => {
                      let t = null == e.value ? void 0 : J.get(e.value);
                      return (0, a.jsx)(O, { paymentSource: t, selectOption: e, hidePersonalInformation: i });
                  },
                  "data-migration-pending": !0,
              }),
        et = null != H ? (0, a.jsx)(d.m, { asContainer: !0, text: H, children: ee }) : ee;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            et,
            null == Z || W
                ? null
                : (0, a.jsxs)("div", {
                      className: C.ot,
                      children: [
                          (0, a.jsx)(_.E, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: C.fT,
                              color: o.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, a.jsx)(m.E, {
                              variant: "text-xs/normal",
                              children: "string" == typeof Z ? v.A.parse(Z, !1, { allowLinks: !0 }) : Z,
                          }),
                      ],
                  }),
        ],
    });
}
