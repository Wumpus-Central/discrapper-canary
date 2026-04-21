"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(843282),
    u = n(990078),
    c = n(732955),
    d = n(397927),
    _ = n(109936),
    f = n(546605),
    p = n(6151),
    h = n(46054),
    m = n(826469),
    E = n(812745),
    g = n(202613),
    A = n(975571),
    I = n(661191),
    T = n(652215),
    S = n(818348),
    y = n(985018),
    v = n(327105),
    N = n(714246);
let C = "https://support.discord.com/hc/articles/39799791912087",
    R = "***@***.***",
    O = "****",
    b = "********",
    D = "***",
    L = new g.YS({ id: p.a, brand: E.Ay.Types.UNKNOWN, type: T.hes.CARD }),
    w = (e) => "link" === e.brand && "0000" === e.last4;
function M(e, t) {
    if (e instanceof g.YS)
        return e.id === p.a
            ? { brand: null, label: y.intl.string(y.t.eQ2bLp) }
            : w(e)
              ? {
                    brand: E.Ay.Types.BANK,
                    label: y.intl.formatToPlainString(y.t.ixNwPL, {
                        date: t ? b : new Date(I.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? E.Ay.Types.UNKNOWN : e.brand,
                    label: y.intl.formatToPlainString(y.t.QvBAQk, { last4: t ? O : e.last4 }),
                };
    if (e instanceof g.SJ) return { brand: E.Ay.Types.PAYPAL, label: t ? R : e.email };
    if (e instanceof g.A0) return { brand: E.Ay.Types.SOFORT, label: t ? R : e.email };
    if (e instanceof g.Qh) return { brand: E.Ay.Types.GIROPAY, label: y.intl.string(y.t["y+0MQZ"]) };
    if (e instanceof g.Tu) return { brand: E.Ay.Types.PRZELEWY24, label: t ? R : e.email };
    else if (e instanceof g.Ux) return { brand: E.Ay.Types.PAYSAFECARD, label: y.intl.string(y.t.e3APTT) };
    else if (e instanceof g.F_) return { brand: E.Ay.Types.GCASH, label: y.intl.string(y.t.PjehcF) };
    else if (e instanceof g.Xj) return { brand: E.Ay.Types.GRABPAY, label: y.intl.string(y.t.T5davE) };
    else if (e instanceof g.am) return { brand: E.Ay.Types.MOMO_WALLET, label: y.intl.string(y.t.J0A1Vk) };
    else if (e instanceof g._1) return { brand: E.Ay.Types.VENMO, label: t ? D : "@" + e.username };
    else if (e instanceof g.i6) return { brand: E.Ay.Types.KAKAOPAY, label: y.intl.string(y.t.CSVexi) };
    else if (e instanceof g.cg) return { brand: E.Ay.Types.GOPAY_WALLET, label: y.intl.string(y.t["43J8JK"]) };
    else if (e instanceof g.UG) return { brand: E.Ay.Types.BANCONTACT, label: y.intl.string(y.t["1ITkfq"]) };
    else if (e instanceof g.rJ)
        return { brand: E.Ay.Types.EPS, label: y.intl.format(y.t.hSPoZw, { bank: (0, _.j)(e.bank) }) };
    else if (e instanceof g.EE)
        return {
            brand: E.Ay.Types.IDEAL,
            label:
                null == e.bank ? y.intl.string(y.t.nSbwqC) : y.intl.format(y.t["9kUlRU"], { bank: (0, _.o)(e.bank) }),
        };
    else if (e instanceof g.FQ) return { brand: E.Ay.Types.CASH_APP, label: t ? D : e.username };
    else if (e instanceof g.LQ) return { brand: null, label: y.intl.string(y.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function P(e, t, n) {
    if (t.value === p.a) return (0, r.jsx)("div", { className: N.wC, children: t.label });
    if (null != e) {
        let t = e instanceof m.A ? e.source : e,
            { brand: i, label: s } = M(t, n);
        return (0, r.jsxs)("div", {
            className: N.IF,
            children: [
                null != i ? (0, r.jsx)(E.Ay, { type: E.Ay.getType(i) }) : null,
                (0, r.jsx)("div", { className: a()(N.wC, { [N.z3]: t.invalid }), children: s }),
            ],
        });
    }
    return (0, r.jsx)("div", { className: N.wC, children: t.label });
}
function x(e) {
    let {
            isTrial: t,
            selectedPaymentSource: n,
            paymentSources: r,
            defaultPaymentSourceId: i,
            isStoreCountryEnabled: s,
        } = e,
        a = n instanceof m.A ? n.source : n;
    if (null != a) {
        if (t && !a.canRedeemTrial()) return y.intl.string(y.t.SvheW9);
        if (t && a.hasFlag(S.rI.NEW))
            return y.intl.format(y.t.d7ZLKA, {
                helpDeskArticle: A.A.getArticleURL(T.MVz.PAYMENT_AUTHORIZATION_CHARGE),
            });
    }
    let o = r.filter((e) => e instanceof m.A);
    if (o.length > 0) {
        if (!o.some((e) => e.enabled))
            return s
                ? y.intl.formatToMarkdownString(v.default["3kMstB"], { learnMoreUrl: C })
                : y.intl.string(y.t.OqbMBV);
        if (null != i) {
            let e = o.find((e) => e.id === i),
                t = null != e && !e.enabled,
                r = null != n && n.id !== i;
            if (t && r) return s ? y.intl.string(v.default.Y6lY0I) : y.intl.string(y.t.cB98Am);
        }
    }
    return null;
}
let k = (e) => {
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
            c = (0, f.vg)("PaymentSourceDropdown"),
            d = 0 === n.length,
            _ = (e) => {
                if (e === p.a) null != o && o();
                else {
                    let t = n.find((t) => t.id === e),
                        r = t instanceof m.A ? t.source : t;
                    null != a && a(r);
                }
            },
            h = null != r ? [r] : [],
            E = [...h, ...n, ...(u ? [L] : [])].map((e, t) => {
                if (e instanceof m.A) {
                    let t,
                        { brand: n, label: r } = M(e.source, s);
                    return (
                        c &&
                            (e.enabled
                                ? null != e.relocationCountry && (t = y.intl.string(v.default.pWSgIu))
                                : (t = y.intl.string(v.default["Kv+vV7"]))),
                        { value: e.id, label: r, brand: n, disabled: !e.enabled, tooltipText: t }
                    );
                }
                if (e instanceof g.Ay) {
                    let t,
                        { brand: n, label: r } = M(e, s);
                    return (
                        (t = e === L || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                        { value: e.id, label: r, brand: n, disabled: !t }
                    );
                }
                return { key: t, value: e.value, label: e.label };
            }),
            A = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            I = t;
        if (null == I && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            I = 0 === e.length ? p.a : e[0].id;
        }
        return {
            hasNoPaymentSources: d,
            handleChange: _,
            prependOptions: h,
            paymentSourceOptions: E,
            paymentSource: A,
            selectedPaymentSourceId: I,
            isStoreCountryEnabled: c,
        };
    },
    U = (e) => {
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
        return (0, r.jsx)(p.v, { ..._, noticeMessage: c });
    },
    G = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(c.$nd, { variant: "primary", fullWidth: !0, onClick: t, text: y.intl.string(y.t.eQ2bLp) });
    };
function F(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: _,
            isTrial: f = !1,
            disabled: p = !1,
            className: m,
            optionClassName: E,
            dropdownLoading: g,
            paymentGatewayRestrictions: A,
            shouldUseUnifiedCheckoutUI: I,
            newPaymentMethodOptionLabel: T,
            defaultPaymentSourceId: S,
            tooltipText: v,
        } = e,
        {
            hasNoPaymentSources: C,
            handleChange: R,
            paymentSource: O,
            paymentSourceOptions: b,
            selectedPaymentSourceId: D,
            isStoreCountryEnabled: L,
        } = k({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: _,
            paymentGatewayRestrictions: A,
            includeNewPaymentSourceOption: !I,
        }),
        w = i.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        M = x({
            isTrial: f,
            selectedPaymentSource: O,
            paymentSources: n,
            defaultPaymentSourceId: S,
            isStoreCountryEnabled: L,
        });
    if (g)
        return (0, r.jsx)("div", {
            className: N.hN,
            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
        });
    if (C) return (0, r.jsx)(G, { onClick: _ });
    let F = I
            ? (0, r.jsx)(U, {
                  onPaymentSourceAdd: _,
                  disabled: p,
                  handleChange: R,
                  paymentSourceOptions: b,
                  selectedPaymentSourceId: D,
                  newPaymentMethodOptionLabel: T,
                  noticeMessage: M,
              })
            : (0, r.jsx)(l.Te, {
                  options: b,
                  value: D,
                  onChange: R,
                  isDisabled: p,
                  className: m,
                  optionClassName: E,
                  placeholder: y.intl.string(y.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e;
                      return P(null == t.value ? void 0 : w.get(t.value), t, a);
                  },
                  renderOptionLabel: (e) => P(null == e.value ? void 0 : w.get(e.value), e, a),
                  "data-migration-pending": !0,
              }),
        V = null != v ? (0, r.jsx)(u.m, { asContainer: !0, text: v, children: F }) : F;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            V,
            null == M || I
                ? null
                : (0, r.jsxs)("div", {
                      className: N.ot,
                      children: [
                          (0, r.jsx)(d.EpV, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: N.fT,
                              color: o.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(d.Text, {
                              variant: "text-xs/normal",
                              children: "string" == typeof M ? h.A.parse(M, !1, { allowLinks: !0 }) : M,
                          }),
                      ],
                  }),
        ],
    });
}
