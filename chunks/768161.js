t.d(e, { default: () => T });
var n = t(627968),
    a = t(64700),
    r = t(96337),
    u = t(997101),
    s = t(17928),
    i = t(189213),
    d = t(783878),
    o = t(292666),
    c = t(683071),
    C = t(753390),
    h = t(500380),
    f = t(423764),
    g = t(295405),
    p = t(174459),
    E = t(99696),
    R = t(667455),
    _ = t(652215),
    m = t(818348),
    A = t(375708),
    y = t(776409),
    I = t(133112);
let S = r.A.filter((l) => u.M.EURO_CURRENCY_COUNTRIES.has(l.alpha2)).map((l) => ({
    id: l.alpha2,
    value: l.alpha2,
    label: (0, f.Gw)(l.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, h.t)(l.alpha2), style: { height: 18 } }),
}));
function b(l) {
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
        onBillingCountryChange: f,
    } = l;
    return (0, n.jsxs)("div", {
        className: I.Xj,
        children: [
            null != u && (0, n.jsx)(c.w, { type: "critical", children: u }),
            (0, n.jsx)("span", {
                className: I.ZY,
                children: (0, n.jsx)(o.k, {
                    label: A.intl.string(y.default["Bn/CZQ"]),
                    type: "text",
                    value: e,
                    onChange: C,
                    placeholder: A.intl.string(y.default.dSPkHo),
                    error: s,
                    fullWidth: !0,
                }),
            }),
            t
                ? (0, n.jsx)(d.Z, {
                      selectionMode: "single",
                      label: A.intl.string(A.t.eDdrAD),
                      placeholder: A.intl.string(A.t.eDdrAD),
                      value: r,
                      onSelectionChange: f,
                      options: S,
                      errorMessage: i,
                  })
                : (0, n.jsx)(o.k, {
                      label: A.intl.string(y.default["3jjweL"]),
                      type: "text",
                      value: a,
                      onChange: h,
                      placeholder: A.intl.string(y.default["B+/GvM"]),
                      error: i,
                      fullWidth: !0,
                  }),
            (0, n.jsx)("p", {
                className: I.Bm,
                children: A.intl.format(y.default.CCVlIb, {
                    giftCardTermsUrl: _.X7G.PAID_TERMS,
                    walletTermsUrl: _.X7G.PAID_TERMS,
                }),
            }),
        ],
    });
}
function T(l) {
    let {
            transitionState: e,
            onClose: t,
            onComplete: r,
            initialCode: u = "",
            withRedemptionSuccessModal: d = !1,
            source: o,
            loadId: c,
        } = l,
        [S, T] = a.useState(u),
        [D, j] = a.useState(!1),
        [x, M] = a.useState(""),
        [N, U] = a.useState(null),
        [k, v] = a.useState(null),
        [P, w] = a.useState(null),
        [O, G] = a.useState(null),
        { isEU: B, displayCountry: L, savedPostalCode: Y } = (0, R.A)(),
        F = (0, s.bG)([g.A], () => g.A.hasFetchedPaymentSources);
    a.useEffect(() => {
        F || (0, C.$o)();
    }, [F]),
        a.useEffect(() => {
            p.default.track(_.HAw.GIFT_CARD_REDEMPTION_START, { source: o, load_id: c });
        }, [o, c]);
    let H = a.useRef(!1);
    a.useEffect(() => {
        H.current || null == Y || "" !== x || ((H.current = !0), M(Y), G(null));
    }, [Y, x]);
    let Z = A.intl.string(y.default["26tjwd"]),
        W = a.useMemo(() => {
            if (null != L)
                return {
                    text: (0, f.Gw)(L),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, h.t)(L), className: I.IM }),
                };
        }, [L]),
        X = a.useCallback((l) => {
            T(l), w(null), v(null);
        }, []),
        z = a.useCallback(async () => {
            let l = S.trim(),
                e = B ? null == N : "" === x.trim(),
                n = !1;
            if (
                ("" === l && (w(A.intl.string(y.default.PZDPvQ)), (n = !0)),
                e && (G(B ? A.intl.string(A.t["+bm+zE"]) : A.intl.string(A.t.LRlhb1)), (n = !0)),
                !n)
            ) {
                j(!0), v(null);
                try {
                    let e = await (0, E.Ng)(l, B ? void 0 : x.trim(), B ? (N ?? void 0) : void 0);
                    r?.(e),
                        t(),
                        p.default.track(_.HAw.GIFT_CARD_REDEMPTION_COMPLETED, { source: o, load_id: c }),
                        d && (0, E.cV)({ amountRedeemed: e.amount, currencyCode: e.currency, loadId: c }),
                        (0, C.$o)().then((l) => {
                            let e = (l?.body ?? []).find((l) => l.type === m.he.TDS_WALLET);
                            null != e && (0, C.YP)(e.id);
                        });
                } catch (l) {
                    v((0, E.tn)(l)), p.default.track(_.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: o, load_id: c });
                    return;
                } finally {
                    j(!1);
                }
            }
        }, [S, B, N, x, r, t, d, o, c]),
        Q = a.useCallback((l) => {
            M(l), G(null), v(null);
        }, []),
        V = a.useCallback((l) => {
            U(l), G(null), v(null);
        }, []);
    return (0, n.jsx)(i.Modal, {
        transitionState: e,
        onClose: t,
        title: Z,
        subtitle: W,
        input: (0, n.jsx)(b, {
            codeInput: S,
            isEU: B,
            postalCodeInput: x,
            selectedBillingCountry: N,
            redemptionError: k,
            codeError: P,
            billingError: O,
            onCodeInputChange: X,
            onPostalCodeChange: Q,
            onBillingCountryChange: V,
        }),
        actionBarInput: (0, n.jsx)("span", {}),
        actions: [{ variant: "primary", size: "md", text: A.intl.string(y.default.hnRau6), loading: D, onClick: z }],
    });
}
