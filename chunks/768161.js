t.d(e, { default: () => U });
var n = t(627968),
    a = t(64700),
    r = t(96337),
    u = t(997101),
    s = t(17928),
    i = t(189213),
    o = t(783878),
    d = t(292666),
    c = t(683071),
    C = t(753390),
    h = t(500380),
    g = t(423764),
    p = t(295405),
    f = t(99696),
    m = t(667455),
    E = t(652215),
    R = t(818348),
    y = t(375708),
    b = t(743292),
    S = t(146744);
let j = r.A.filter((l) => u.M.EURO_CURRENCY_COUNTRIES.has(l.alpha2)).map((l) => ({
    id: l.alpha2,
    value: l.alpha2,
    label: (0, g.Gw)(l.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, h.t)(l.alpha2), style: { height: 18 } }),
}));
function x(l) {
    let {
        codeInput: e,
        isEU: t,
        postalCodeInput: a,
        selectedBillingCountry: r,
        redemptionError: u,
        codeError: s,
        billingError: i,
        onCodeInputChange: C,
        onPostalCodeChange: h,
        onBillingCountryChange: g,
    } = l;
    return (0, n.jsxs)("div", {
        className: S.Xj,
        children: [
            null != u && (0, n.jsx)(c.w, { type: "critical", children: u }),
            (0, n.jsx)("span", {
                className: S.ZY,
                children: (0, n.jsx)(d.k, {
                    label: y.intl.string(b.default["Bn/CZQ"]),
                    type: "text",
                    value: e,
                    onChange: C,
                    placeholder: y.intl.string(b.default.dSPkHo),
                    error: s,
                    fullWidth: !0,
                }),
            }),
            t
                ? (0, n.jsx)(o.Z, {
                      selectionMode: "single",
                      label: y.intl.string(y.t.eDdrAD),
                      placeholder: y.intl.string(y.t.eDdrAD),
                      value: r,
                      onSelectionChange: g,
                      options: j,
                      errorMessage: i,
                  })
                : (0, n.jsx)(d.k, {
                      label: y.intl.string(b.default["3jjweL"]),
                      type: "text",
                      value: a,
                      onChange: h,
                      placeholder: y.intl.string(b.default["B+/GvM"]),
                      error: i,
                      fullWidth: !0,
                  }),
            (0, n.jsx)("p", {
                className: S.Bm,
                children: y.intl.format(b.default.CCVlIb, {
                    giftCardTermsUrl: E.X7G.GIFT_CARD_TERMS,
                    walletTermsUrl: E.X7G.WALLET_TERMS,
                }),
            }),
        ],
    });
}
function U(l) {
    let {
            transitionState: e,
            onClose: t,
            onComplete: r,
            initialCode: u = "",
            withRedemptionSuccessModal: o = !1,
            source: d,
            loadId: c,
        } = l,
        [E, j] = a.useState(u),
        [U, v] = a.useState(!1),
        [A, I] = a.useState(""),
        [_, k] = a.useState(null),
        [M, N] = a.useState(null),
        [T, w] = a.useState(null),
        [P, D] = a.useState(null),
        { isEU: O, displayCountry: G, savedPostalCode: B } = (0, m.A)(),
        L = (0, s.bG)([p.A], () => p.A.hasFetchedPaymentSources);
    a.useEffect(() => {
        L || (0, C.$o)();
    }, [L]);
    let Y = a.useMemo(() => ({ source: d, loadId: c }), [d, c]);
    a.useEffect(() => {
        (0, f.Pc)(Y);
    }, [Y]);
    let W = a.useRef(!1);
    a.useEffect(() => {
        W.current || null == B || "" !== A || ((W.current = !0), I(B), D(null));
    }, [B, A]);
    let Z = y.intl.string(b.default["26tjwd"]),
        X = a.useMemo(() => {
            if (null != G)
                return {
                    text: (0, g.Gw)(G),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, h.t)(G), className: S.IM }),
                };
        }, [G]),
        $ = a.useCallback((l) => {
            j(l), w(null), N(null);
        }, []),
        z = a.useCallback(async () => {
            let l = E.trim(),
                e = O ? null == _ : "" === A.trim(),
                n = !1;
            if (
                ("" === l && (w(y.intl.string(b.default.PZDPvQ)), (n = !0)),
                e && (D(O ? y.intl.string(y.t["+bm+zE"]) : y.intl.string(y.t.LRlhb1)), (n = !0)),
                !n)
            ) {
                v(!0), N(null);
                try {
                    let e = await (0, f.Ng)(l, O ? void 0 : A.trim(), O ? (_ ?? void 0) : void 0);
                    (0, f.Ey)(e, Y),
                        r?.(e),
                        t(),
                        o && (0, f.cV)({ amountRedeemed: e.amount, currencyCode: e.currency, loadId: Y.loadId }),
                        (0, C.$o)().then((l) => {
                            let e = (l?.body ?? []).find((l) => l.type === R.he.TDS_WALLET);
                            null != e && (0, C.YP)(e.id);
                        });
                } catch (l) {
                    N((0, f.tn)(l)), (0, f.k$)(Y);
                    return;
                } finally {
                    v(!1);
                }
            }
        }, [E, O, _, A, r, t, o, Y]),
        F = a.useCallback((l) => {
            I(l), D(null), N(null);
        }, []),
        Q = a.useCallback((l) => {
            k(l), D(null), N(null);
        }, []);
    return (0, n.jsx)(i.Modal, {
        transitionState: e,
        onClose: t,
        title: Z,
        subtitle: X,
        input: (0, n.jsx)(x, {
            codeInput: E,
            isEU: O,
            postalCodeInput: A,
            selectedBillingCountry: _,
            redemptionError: M,
            codeError: T,
            billingError: P,
            onCodeInputChange: $,
            onPostalCodeChange: F,
            onBillingCountryChange: Q,
        }),
        actionBarInput: (0, n.jsx)("span", {}),
        actions: [{ variant: "primary", size: "md", text: y.intl.string(b.default.hnRau6), loading: U, onClick: z }],
    });
}
