"use strict";
n.d(t, { A: () => x });
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
    f = n(6151),
    p = n(826469),
    h = n(812745),
    m = n(202613),
    E = n(975571),
    g = n(661191),
    A = n(652215),
    I = n(818348),
    T = n(985018),
    S = n(714246);
let y = "***@***.***",
    v = "****",
    N = "********",
    C = "***",
    R = new m.YS({ id: f.a, brand: h.Ay.Types.UNKNOWN, type: A.hes.CARD }),
    O = (e) => "link" === e.brand && "0000" === e.last4;
function b(e, t) {
    if (e instanceof m.YS)
        return e.id === f.a
            ? { brand: null, label: T.intl.string(T.t.eQ2bLp) }
            : O(e)
              ? {
                    brand: h.Ay.Types.BANK,
                    label: T.intl.formatToPlainString(T.t.ixNwPL, {
                        date: t ? N : new Date(g.default.extractTimestamp(e.id)).toLocaleDateString(),
                    }),
                }
              : {
                    brand: t ? h.Ay.Types.UNKNOWN : e.brand,
                    label: T.intl.formatToPlainString(T.t.QvBAQk, { last4: t ? v : e.last4 }),
                };
    if (e instanceof m.SJ) return { brand: h.Ay.Types.PAYPAL, label: t ? y : e.email };
    if (e instanceof m.A0) return { brand: h.Ay.Types.SOFORT, label: t ? y : e.email };
    if (e instanceof m.Qh) return { brand: h.Ay.Types.GIROPAY, label: T.intl.string(T.t["y+0MQZ"]) };
    if (e instanceof m.Tu) return { brand: h.Ay.Types.PRZELEWY24, label: t ? y : e.email };
    else if (e instanceof m.Ux) return { brand: h.Ay.Types.PAYSAFECARD, label: T.intl.string(T.t.e3APTT) };
    else if (e instanceof m.F_) return { brand: h.Ay.Types.GCASH, label: T.intl.string(T.t.PjehcF) };
    else if (e instanceof m.Xj) return { brand: h.Ay.Types.GRABPAY, label: T.intl.string(T.t.T5davE) };
    else if (e instanceof m.am) return { brand: h.Ay.Types.MOMO_WALLET, label: T.intl.string(T.t.J0A1Vk) };
    else if (e instanceof m._1) return { brand: h.Ay.Types.VENMO, label: t ? C : "@" + e.username };
    else if (e instanceof m.i6) return { brand: h.Ay.Types.KAKAOPAY, label: T.intl.string(T.t.CSVexi) };
    else if (e instanceof m.cg) return { brand: h.Ay.Types.GOPAY_WALLET, label: T.intl.string(T.t["43J8JK"]) };
    else if (e instanceof m.UG) return { brand: h.Ay.Types.BANCONTACT, label: T.intl.string(T.t["1ITkfq"]) };
    else if (e instanceof m.rJ)
        return { brand: h.Ay.Types.EPS, label: T.intl.format(T.t.hSPoZw, { bank: (0, _.j)(e.bank) }) };
    else if (e instanceof m.EE)
        return {
            brand: h.Ay.Types.IDEAL,
            label:
                null == e.bank ? T.intl.string(T.t.nSbwqC) : T.intl.format(T.t["9kUlRU"], { bank: (0, _.o)(e.bank) }),
        };
    else if (e instanceof m.FQ) return { brand: h.Ay.Types.CASH_APP, label: t ? C : e.username };
    else if (e instanceof m.LQ) return { brand: null, label: T.intl.string(T.t["5/Y1kC"]) };
    throw Error("Invalid Payment Source");
}
function D(e, t, n) {
    if (t.value === f.a) return (0, r.jsx)("div", { className: S.wC, children: t.label });
    if (null != e) {
        let t = e instanceof p.A ? e.source : e,
            { brand: i, label: s } = b(t, n);
        return (0, r.jsxs)("div", {
            className: S.IF,
            children: [
                null != i ? (0, r.jsx)(h.Ay, { type: h.Ay.getType(i) }) : null,
                (0, r.jsx)("div", { className: a()(S.wC, { [S.z3]: t.invalid }), children: s }),
            ],
        });
    }
    return (0, r.jsx)("div", { className: S.wC, children: t.label });
}
function L(e) {
    let { isTrial: t, selectedPaymentSource: n, paymentSources: r, defaultPaymentSourceId: i } = e,
        s = n instanceof p.A ? n.source : n;
    if (null != s) {
        if (t && !s.canRedeemTrial()) return T.intl.string(T.t.SvheW9);
        if (t && s.hasFlag(I.rI.NEW))
            return T.intl.format(T.t.d7ZLKA, {
                helpDeskArticle: E.A.getArticleURL(A.MVz.PAYMENT_AUTHORIZATION_CHARGE),
            });
    }
    let a = r.filter((e) => e instanceof p.A);
    if (a.length > 0) {
        if (!a.some((e) => e.enabled)) return T.intl.string(T.t.OqbMBV);
        if (null != i) {
            let e = a.find((e) => e.id === i),
                t = null != e && !e.enabled,
                r = null != n && n.id !== i;
            if (t && r) return T.intl.string(T.t.cB98Am);
        }
    }
    return null;
}
let w = (e) => {
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
            c = 0 === n.length,
            d = (e) => {
                if (e === f.a) null != o && o();
                else {
                    let t = n.find((t) => t.id === e),
                        r = t instanceof p.A ? t.source : t;
                    null != a && a(r);
                }
            },
            _ = null != r ? [r] : [],
            h = [..._, ...n, ...(u ? [R] : [])].map((e, t) => {
                if (e instanceof p.A) {
                    let { brand: t, label: n } = b(e.source, s);
                    return { value: e.id, label: n, brand: t, disabled: !e.enabled };
                }
                if (e instanceof m.Ay) {
                    let t,
                        { brand: n, label: r } = b(e, s);
                    return (
                        (t = e === R || null == l || !(l.length > 0) || l.includes(e.paymentGateway)),
                        { value: e.id, label: r, brand: n, disabled: !t }
                    );
                }
                return { key: t, value: e.value, label: e.label };
            }),
            E = i.useMemo(() => n.find((e) => e.id === t), [n, t]),
            g = t;
        if (null == g && null != l && l.length > 0) {
            let e = n.filter((e) => l.includes(e.paymentGateway));
            g = 0 === e.length ? f.a : e[0].id;
        }
        return {
            hasNoPaymentSources: c,
            handleChange: d,
            prependOptions: _,
            paymentSourceOptions: h,
            paymentSource: E,
            selectedPaymentSourceId: g,
        };
    },
    M = (e) => {
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
        return (0, r.jsx)(f.v, { ..._, noticeMessage: c });
    },
    P = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(c.$nd, { variant: "primary", fullWidth: !0, onClick: t, text: T.intl.string(T.t.eQ2bLp) });
    };
function x(e) {
    let {
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: _,
            isTrial: f = !1,
            disabled: p = !1,
            className: h,
            optionClassName: m,
            dropdownLoading: E,
            paymentGatewayRestrictions: g,
            shouldUseUnifiedCheckoutUI: A,
            newPaymentMethodOptionLabel: I,
            defaultPaymentSourceId: y,
            tooltipText: v,
        } = e,
        {
            hasNoPaymentSources: N,
            handleChange: C,
            paymentSource: R,
            paymentSourceOptions: O,
            selectedPaymentSourceId: b,
        } = w({
            selectedPaymentSourceId: t,
            paymentSources: n,
            prependOption: s,
            hidePersonalInformation: a,
            onChange: c,
            onPaymentSourceAdd: _,
            paymentGatewayRestrictions: g,
            includeNewPaymentSourceOption: !A,
        }),
        x = i.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        k = L({ isTrial: f, selectedPaymentSource: R, paymentSources: n, defaultPaymentSourceId: y });
    if (E)
        return (0, r.jsx)("div", {
            className: S.hN,
            children: (0, r.jsx)(d.y$y, { type: d.y$y.Type.WANDERING_CUBES }),
        });
    if (N) return (0, r.jsx)(P, { onClick: _ });
    let U = A
            ? (0, r.jsx)(M, {
                  onPaymentSourceAdd: _,
                  disabled: p,
                  handleChange: C,
                  paymentSourceOptions: O,
                  selectedPaymentSourceId: b,
                  newPaymentMethodOptionLabel: I,
                  noticeMessage: k,
              })
            : (0, r.jsx)(l.Te, {
                  options: O,
                  value: b,
                  onChange: C,
                  isDisabled: p,
                  className: h,
                  optionClassName: m,
                  placeholder: T.intl.string(T.t["8lqkf8"]),
                  renderOptionValue: (e) => {
                      let [t] = e;
                      return D(null == t.value ? void 0 : x.get(t.value), t, a);
                  },
                  renderOptionLabel: (e) => D(null == e.value ? void 0 : x.get(e.value), e, a),
                  "data-migration-pending": !0,
              }),
        G = null != v ? (0, r.jsx)(u.m, { asContainer: !0, text: v, children: U }) : U;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            G,
            null == k || A
                ? null
                : (0, r.jsxs)("div", {
                      className: S.ot,
                      children: [
                          (0, r.jsx)(d.EpV, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              className: S.fT,
                              color: o.A.unsafe_rawColors.YELLOW_300.css,
                          }),
                          (0, r.jsx)(d.Text, { variant: "text-xs/normal", children: k }),
                      ],
                  }),
        ],
    });
}
