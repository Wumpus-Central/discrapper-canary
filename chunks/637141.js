"use strict";
n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(843282),
    u = n(990078),
    c = n(821609),
    d = n(289873),
    _ = n(695366),
    f = n(834730),
    p = n(887555),
    h = n(546605),
    E = n(6151),
    m = n(46054),
    g = n(826469),
    A = n(812745),
    I = n(202613),
    T = n(975571),
    S = n(661191),
    y = n(652215),
    N = n(818348),
    v = n(985018),
    C = n(327105),
    O = n(714246);
let R = "***@***.***",
    b = new I.YS({ id: E.a, brand: A.Ay.Types.UNKNOWN, type: y.hes.CARD });
function D(e, t) {
    if (e instanceof I.YS)
        return e.id === E.a
            ? { brand: null, label: v.intl.string(v.t.eQ2bLp) }
            : "link" === e.brand && "0000" === e.last4
              ? {
                    brand: A.Ay.Types.BANK,
                    label: v.intl.formatToPlainString(v.t.ixNwPL, {
                        date: t ? "********" : new Date(S.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? A.Ay.Types.UNKNOWN : e.brand,
                    label: v.intl.formatToPlainString(v.t.QvBAQk, { last4: t ? "****" : e.last4 }),
                };
    if (e instanceof I.SJ) return { brand: A.Ay.Types.PAYPAL, label: t ? R : e.email };
    if (e instanceof I.A0) return { brand: A.Ay.Types.SOFORT, label: t ? R : e.email };
    if (e instanceof I.Qh) return { brand: A.Ay.Types.GIROPAY, label: v.intl.string(v.t["y+0MQZ"]) };
    if (e instanceof I.Tu) return { brand: A.Ay.Types.PRZELEWY24, label: t ? R : e.email };
    else if (e instanceof I.Ux) return { brand: A.Ay.Types.PAYSAFECARD, label: v.intl.string(v.t.e3APTT) };
    else if (e instanceof I.F_) return { brand: A.Ay.Types.GCASH, label: v.intl.string(v.t.PjehcF) };
    else if (e instanceof I.Xj) return { brand: A.Ay.Types.GRABPAY, label: v.intl.string(v.t.T5davE) };
    else if (e instanceof I.am) return { brand: A.Ay.Types.MOMO_WALLET, label: v.intl.string(v.t.J0A1Vk) };
    else if (e instanceof I._1) return { brand: A.Ay.Types.VENMO, label: t ? "***" : "@" + e.username };
    else if (e instanceof I.i6) return { brand: A.Ay.Types.KAKAOPAY, label: v.intl.string(v.t.CSVexi) };
    else if (e instanceof I.cg) return { brand: A.Ay.Types.GOPAY_WALLET, label: v.intl.string(v.t["43J8JK"]) };
    else if (e instanceof I.UG) return { brand: A.Ay.Types.BANCONTACT, label: v.intl.string(v.t["1ITkfq"]) };
    else if (e instanceof I.rJ)
        return { brand: A.Ay.Types.EPS, label: v.intl.format(v.t.hSPoZw, { bank: (0, p.j)(e.bank) }) };
    else if (e instanceof I.EE)
        return {
            brand: A.Ay.Types.IDEAL,
            label:
                null == e.bank ? v.intl.string(v.t.nSbwqC) : v.intl.format(v.t["9kUlRU"], { bank: (0, p.o)(e.bank) }),
        };
    else if (e instanceof I.FQ) return { brand: A.Ay.Types.CASH_APP, label: t ? "***" : e.username };
    else if (e instanceof I.LQ) return { brand: null, label: v.intl.string(v.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function L(e, t, n) {
    if (t.value === E.a) return (0, r.jsx)("div", { className: O.wC, children: t.label });
    if (null != e) {
        let t = e instanceof g.A ? e.source : e,
            { brand: i, label: s } = D(t, n);
        return (0, r.jsxs)("div", {
            className: O.IF,
            children: [
                null != i ? (0, r.jsx)(A.Ay, { type: A.Ay.getType(i) }) : null,
                (0, r.jsx)("div", { className: a()(O.wC, { [O.z3]: t.invalid }), children: s }),
            ],
        });
    }
    return (0, r.jsx)("div", { className: O.wC, children: t.label });
}
let w = (e) => {
        let {
                onPaymentSourceAdd: t,
                dropdownLoading: n,
                disabled: s,
                handleChange: a,
                paymentSourceOptions: o,
                selectedPaymentSourceId: l,
                newPaymentMethodOptionLabel: u,
                noticeMessage: c,
            } = e,
            d = i.useMemo(
                () =>
                    o.map((e) => {
                        let { label: t, brand: n, ...r } = e;
                        return { id: null != r.key ? `${r.key}` : r.value, label: t ?? "", icon: n ?? void 0, ...r };
                    }),
                [o],
            ),
            _ = i.useMemo(
                () => ({
                    value: l ?? null,
                    options: d,
                    onChange: a,
                    onNew: null != t ? t : () => {},
                    disabled: s || n,
                    newPaymentMethodOptionLabel: u,
                }),
                [l, d, a, t, s, n, u],
            );
        return (0, r.jsx)(E.v, { ..._, noticeMessage: c });
    },
    M = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(c.$, { variant: "primary", fullWidth: !0, onClick: t, text: v.intl.string(v.t.eQ2bLp) });
    };
function P(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: p,
            isTrial: A = !1,
            disabled: S = !1,
            className: R,
            optionClassName: P,
            dropdownLoading: x,
            paymentGatewayRestrictions: k,
            shouldUseUnifiedCheckoutUI: U,
            newPaymentMethodOptionLabel: G,
            defaultPaymentSourceId: F,
            tooltipText: V,
        } = e,
        {
            hasNoPaymentSources: B,
            handleChange: H,
            paymentSource: j,
            paymentSourceOptions: Y,
            selectedPaymentSourceId: W,
            isStoreCountryEnabled: K,
        } = ((e) => {
            let {
                    selectedPaymentSourceId: t,
                    paymentSources: n,
                    prependOption: r,
                    hidePersonalInformation: s,
                    onChange: a,
                    onPaymentSourceAdd: o,
                    paymentGatewayRestrictions: l,
                    includeNewPaymentSourceOption: u,
                } = e,
                c = (0, h.vg)("PaymentSourceDropdown"),
                d = 0 === n.length,
                _ = null != r ? [r] : [],
                f = [..._, ...n, ...(u ? [b] : [])].map((e, t) => {
                    if (e instanceof g.A) {
                        let t,
                            { brand: n, label: r } = D(e.source, s);
                        return (
                            c &&
                                (e.enabled
                                    ? null != e.relocationCountry && (t = v.intl.string(C.default.pWSgIu))
                                    : (t = v.intl.string(C.default["Kv+vV7"]))),
                            { value: e.id, label: r, brand: n, disabled: !e.enabled, tooltipText: t }
                        );
                    }
                    if (e instanceof I.Ay) {
                        let t,
                            { brand: n, label: r } = D(e, s);
                        return (
                            (t = e === b || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                            { value: e.id, label: r, brand: n, disabled: !t }
                        );
                    }
                    return { key: t, value: e.value, label: e.label };
                }),
                p = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
                m = t;
            if (null == m && null != l && l.length > 0) {
                let e = n.filter((e) => l.includes(e.paymentGateway));
                m = 0 === e.length ? E.a : e[0].id;
            }
            return {
                hasNoPaymentSources: d,
                handleChange: (e) => {
                    if (e === E.a) null != o && o();
                    else {
                        let t = n.find((t) => t.id === e),
                            r = t instanceof g.A ? t.source : t;
                        null != a && a(r);
                    }
                },
                prependOptions: _,
                paymentSourceOptions: f,
                paymentSource: p,
                selectedPaymentSourceId: m,
                isStoreCountryEnabled: c,
            };
        })({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: p,
            paymentGatewayRestrictions: k,
            includeNewPaymentSourceOption: !U,
        }),
        $ = i.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        z = (function (e) {
            let {
                    isTrial: t,
                    selectedPaymentSource: n,
                    paymentSources: r,
                    defaultPaymentSourceId: i,
                    isStoreCountryEnabled: s,
                } = e,
                a = n instanceof g.A ? n.source : n;
            if (null != a) {
                if (t && !a.canRedeemTrial()) return v.intl.string(v.t.SvheW9);
                if (t && a.hasFlag(N.rI.NEW))
                    return v.intl.format(v.t.d7ZLKA, {
                        helpDeskArticle: T.A.getArticleURL(y.MVz.PAYMENT_AUTHORIZATION_CHARGE),
                    });
            }
            let o = r.filter((e) => e instanceof g.A);
            if (o.length > 0) {
                if (!o.some((e) => e.enabled))
                    return s
                        ? v.intl.formatToMarkdownString(C.default["3kMstB"], {
                              learnMoreUrl: "https://support.discord.com/hc/articles/39799791912087",
                          })
                        : v.intl.string(v.t.OqbMBV);
                if (null != i) {
                    let e = o.find((e) => e.id === i),
                        t = null != e && !e.enabled,
                        r = null != n && n.id !== i;
                    if (t && r) return s ? v.intl.string(C.default.Y6lY0I) : v.intl.string(v.t.cB98Am);
                }
            }
            return null;
        })({
            isTrial: A,
            selectedPaymentSource: j,
            paymentSources: n,
            defaultPaymentSourceId: F,
            isStoreCountryEnabled: K,
        });
    if (x) return (0, r.jsx)("div", { className: O.hN, children: (0, r.jsx)(d.y, { type: d.y.Type.WANDERING_CUBES }) });
    if (B) return (0, r.jsx)(M, { onClick: p });
    let q = U
            ? (0, r.jsx)(w, {
                  onPaymentSourceAdd: p,
                  disabled: S,
                  handleChange: H,
                  paymentSourceOptions: Y,
                  selectedPaymentSourceId: W,
                  newPaymentMethodOptionLabel: G,
                  noticeMessage: z,
              })
            : (0, r.jsx)(l.Te, {
                  options: Y,
                  value: W,
                  onChange: H,
                  isDisabled: S,
                  className: R,
                  optionClassName: P,
                  placeholder: v.intl.string(v.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e;
                      return L(null == t.value ? void 0 : $.get(t.value), t, a);
                  },
                  renderOptionLabel: (e) => L(null == e.value ? void 0 : $.get(e.value), e, a),
                  "data-migration-pending": !0,
              }),
        X = null != V ? (0, r.jsx)(u.m, { asContainer: !0, text: V, children: q }) : q;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            X,
            null == z || U
                ? null
                : (0, r.jsxs)("div", {
                      className: O.ot,
                      children: [
                          (0, r.jsx)(_.E, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: O.fT,
                              color: o.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(f.E, {
                              variant: "text-xs/normal",
                              children: "string" == typeof z ? m.A.parse(z, !1, { allowLinks: !0 }) : z,
                          }),
                      ],
                  }),
        ],
    });
}
