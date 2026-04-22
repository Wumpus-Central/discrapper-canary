n.d(t, { A: () => k });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(827734),
    o = n(843282),
    u = n(990078),
    c = n(821609),
    d = n(289873),
    m = n(695366),
    p = n(834730),
    _ = n(109936),
    f = n(546605),
    g = n(6151),
    b = n(46054),
    v = n(826469),
    x = n(812745),
    h = n(202613),
    I = n(975571),
    A = n(661191),
    y = n(652215),
    T = n(818348),
    E = n(985018),
    C = n(327105),
    P = n(714246);
let L = "***@***.***",
    S = new h.YS({ id: g.a, brand: x.Ay.Types.UNKNOWN, type: y.hes.CARD });
function N(e, t) {
    if (e instanceof h.YS)
        return e.id === g.a
            ? { brand: null, label: E.intl.string(E.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: x.Ay.Types.BANK,
                    label: E.intl.formatToPlainString(E.t.ixNwPL, {
                        date: t ? "********" : new Date(A.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? x.Ay.Types.UNKNOWN : e.brand,
                    label: E.intl.formatToPlainString(E.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof h.SJ) return { brand: x.Ay.Types.PAYPAL, label: t ? L : e.email };
    if (e instanceof h.A0) return { brand: x.Ay.Types.SOFORT, label: t ? L : e.email };
    if (e instanceof h.Qh) return { brand: x.Ay.Types.GIROPAY, label: E.intl.string(E.t["y+0MQZ"]) };
    if (e instanceof h.Tu) return { brand: x.Ay.Types.PRZELEWY24, label: t ? L : e.email };
    else if (e instanceof h.Ux) return { brand: x.Ay.Types.PAYSAFECARD, label: E.intl.string(E.t.e3APTT) };
    else if (e instanceof h.F_) return { brand: x.Ay.Types.GCASH, label: E.intl.string(E.t.PjehcF) };
    else if (e instanceof h.Xj) return { brand: x.Ay.Types.GRABPAY, label: E.intl.string(E.t.T5davE) };
    else if (e instanceof h.am) return { brand: x.Ay.Types.MOMO_WALLET, label: E.intl.string(E.t.J0A1Vk) };
    else if (e instanceof h._1) return { brand: x.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof h.i6) return { brand: x.Ay.Types.KAKAOPAY, label: E.intl.string(E.t.CSVexi) };
    else if (e instanceof h.cg) return { brand: x.Ay.Types.GOPAY_WALLET, label: E.intl.string(E.t["43J8JK"]) };
    else if (e instanceof h.UG) return { brand: x.Ay.Types.BANCONTACT, label: E.intl.string(E.t["1ITkfq"]) };
    else if (e instanceof h.rJ)
        return { brand: x.Ay.Types.EPS, label: E.intl.format(E.t.hSPoZw, { bank: (0, _.j)(e.bank) }) };
    else if (e instanceof h.EE)
        return {
            brand: x.Ay.Types.IDEAL,
            label:
                null == e.bank ? E.intl.string(E.t.nSbwqC) : E.intl.format(E.t["9kUlRU"], { bank: (0, _.o)(e.bank) }),
        };
    else if (e instanceof h.FQ) return { brand: x.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof h.LQ) return { brand: null, label: E.intl.string(E.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function j(e, t, n) {
    if (t.value === g.a) return (0, a.jsx)("div", { className: P.wC, children: t.label });
    if (null != e) {
        let t = e instanceof v.A ? e.source : e,
            { brand: r, label: l } = N(t, n);
        return (0, a.jsxs)("div", {
            className: P.IF,
            children: [
                null != r ? (0, a.jsx)(x.Ay, { type: x.Ay.getType(r) }) : null,
                (0, a.jsx)("div", { className: i()(P.wC, { [P.z3]: t.invalid }), children: l }),
            ],
        });
    }
    return (0, a.jsx)("div", { className: P.wC, children: t.label });
}
let M = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: l,
                handleChange: i,
                paymentSourceOptions: s,
                selectedPaymentSourceId: o,
                newPaymentMethodOptionLabel: u,
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
                    value: o ?? null,
                    options: d,
                    onChange: i,
                    onNew: null != t ? t : () => {},
                    disabled: l || n,
                    newPaymentMethodOptionLabel: u,
                }),
                [o, d, i, t, l, n, u],
            );
        return (0, a.jsx)(g.v, { ...m, noticeMessage: c });
    },
    R = (e) => {
        let { onClick: t } = e;
        return (0, a.jsx)(c.$, { variant: "primary", fullWidth: !0, onClick: t, text: E.intl.string(E.t.eQ2bLp) });
    };
function k(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: i,
            onChange: c,
            onPaymentSourceAdd: _,
            isTrial: x = !1,
            disabled: A = !1,
            className: L,
            optionClassName: k,
            dropdownLoading: D,
            paymentGatewayRestrictions: O,
            shouldUseUnifiedCheckoutUI: w,
            newPaymentMethodOptionLabel: U,
            defaultPaymentSourceId: B,
            tooltipText: G,
        } = e,
        {
            hasNoPaymentSources: F,
            handleChange: H,
            paymentSource: W,
            paymentSourceOptions: Y,
            selectedPaymentSourceId: V,
            isStoreCountryEnabled: z,
        } = ((e) => {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: a,
                    hidePersonalInformation: l,
                    onChange: i,
                    onPaymentSourceAdd: s,
                    paymentGatewayRestrictions: o,
                    includeNewPaymentSourceOption: u,
                } = e,
                c = (0, f.vg)("PaymentSourceDropdown"),
                d = 0 === n.length,
                m = null != a ? [a] : [],
                p = [...m, ...n, ...(u ? [S] : [])].map((e, t) => {
                    if (e instanceof v.A) {
                        let t,
                            { brand: n, label: a } = N(e.source, l);
                        return (
                            c &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = E.intl.string(C.default.pWSgIu))
                                    : (t = E.intl.string(C.default["Kv+vV7"]))),
                            { value: e.id, label: a, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof h.Ay) {
                        let t,
                            { brand: n, label: a } = N(e, l);
                        return (
                            (t = e === S || null == o || !(o.length > 0) || o.includes(e.paymentGateway)),
                            { value: e.id, label: a, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                _ = r.useMemo(() => n.find((e) => e.id === t), [n, t]),
                b = t;
            if (null == b && null != o && o.length > 0) {
                let e = n.filter((e) => o.includes(e.paymentGateway));
                b = 0 === e.length ? g.a : e[0].id;
            }
            return {
                hasNoPaymentSources: d,
                handleChange: (e) => {
                    if (e === g.a) null != s && s();
                    else {
                        let t = n.find((t) => t.id === e),
                            a = t instanceof v.A ? t.source : t;
                        null != i && i(a);
                    }
                },
                prependOptions: m,
                paymentSourceOptions: p,
                paymentSource: _,
                selectedPaymentSourceId: b,
                isStoreCountryEnabled: c,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: l,
            hidePersonalInformation: i,
            onChange: c,
            onPaymentSourceAdd: _,
            paymentGatewayRestrictions: O,
            includeNewPaymentSourceOption: !w,
        }),
        q = r.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        K = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: a,
                    defaultPaymentSourceId: r,
                    isStoreCountryEnabled: l,
                } = e,
                i = n instanceof v.A ? n.source : n;
            if (null != i) {
                if (t && !i.canRedeemTrial()) return E.intl.string(E.t.SvheW9);
                if (t && i.hasFlag(T.rI.NEW))
                    return E.intl.format(E.t.d7ZLKA, {
                        helpDeskArticle: I.A.getArticleURL(y.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let s = a.filter((e) => e instanceof v.A);
            if (s.length > 0) {
                if (!s.some((e) => e.enabled))
                    return l
                        ? E.intl.formatToMarkdownString(C.default["3kMstB"], {
                              learnMoreUrl: "https://support.discord.com/hc/articles/39799791912087",
                          })
                        : E.intl.string(E.t.OqbMBV);
                if (null != r) {
                    let e = s.find((e) => e.id === r),
                        t = null != e && !e.enabled,
                        a = null != n && n.id !== r;
                    if (t && a) return l ? E.intl.string(C.default.Y6lY0I) : E.intl.string(E.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: x,
            selectedPaymentSource: W,
            paymentSources: n,
            defaultPaymentSourceId: B,
            isStoreCountryEnabled: z,
        });
    if (D) return (0, a.jsx)("div", { className: P.hN, children: (0, a.jsx)(d.y, { type: d.y.Type.WANDERING_CUBES }) });
    if (F) return (0, a.jsx)(R, { onClick: _ });
    let $ = w
            ? (0, a.jsx)(M, {
                  onPaymentSourceAdd: _,
                  disabled: A,
                  handleChange: H,
                  paymentSourceOptions: Y,
                  selectedPaymentSourceId: V,
                  newPaymentMethodOptionLabel: U,
                  noticeMessage: K,
              })
            : (0, a.jsx)(o.Te, {
                  options: Y,
                  value: V,
                  onChange: H,
                  isDisabled: A,
                  className: L,
                  optionClassName: k,
                  placeholder: E.intl.string(E.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e;
                      return j(null == t.value ? void 0 : q.get(t.value), t, i);
                  },
                  renderOptionLabel: (e) => j(null == e.value ? void 0 : q.get(e.value), e, i),
                  "data-migration-pending": !0,
              }),
        Q = null != G ? (0, a.jsx)(u.m, { asContainer: !0, text: G, children: $ }) : $;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            Q,
            null == K || w
                ? null
                : (0, a.jsxs)("div", {
                      className: P.ot,
                      children: [
                          (0, a.jsx)(m.E, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: P.fT,
                              color: s.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, a.jsx)(p.E, {
                              variant: "text-xs/normal",
                              children: "string" == typeof K ? b.A.parse(K, !1, { allowLinks: !0 }) : K,
                          }),
                      ],
                  }),
        ],
    });
}
