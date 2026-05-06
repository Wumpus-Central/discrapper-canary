t.d(e, { default: () => D });
var n = t(627968),
    a = t(64700),
    r = t(96337),
    u = t(997101),
    s = t(17928),
    i = t(189213),
    d = t(783878),
    o = t(292666),
    c = t(683071),
    h = t(753390),
    C = t(500380),
    f = t(423764),
    g = t(295405),
    p = t(174459),
    E = t(99696),
    m = t(667455),
    A = t(652215),
    y = t(818348),
    I = t(375708),
    _ = t(776409),
    S = t(133112);
let b = r.A.filter((l) => u.M.EU_COUNTRIES.has(l.alpha2)).map((l) => ({
    id: l.alpha2,
    value: l.alpha2,
    label: (0, f.Gw)(l.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, C.t)(l.alpha2), style: { height: 18 } }),
}));
function T(l) {
    let {
        codeInput: e,
        isEU: t,
        postalCodeInput: a,
        selectedBillingCountry: r,
        redemptionError: u,
        codeError: s,
        billingError: i,
        onCodeInputChange: h,
        onPostalCodeChange: C,
        onBillingCountryChange: f,
    } = l;
    return (0, n.jsxs)("div", {
        className: S.Xj,
        children: [
            null != u && (0, n.jsx)(c.w, { type: "critical", children: u }),
            (0, n.jsx)("span", {
                className: S.ZY,
                children: (0, n.jsx)(o.k, {
                    label: I.intl.string(_.default["Bn/CZQ"]),
                    type: "text",
                    value: e,
                    onChange: h,
                    placeholder: I.intl.string(_.default.dSPkHo),
                    error: s,
                    fullWidth: !0,
                }),
            }),
            t
                ? (0, n.jsx)(d.Z, {
                      selectionMode: "single",
                      label: I.intl.string(I.t.eDdrAD),
                      placeholder: I.intl.string(I.t.eDdrAD),
                      value: r,
                      onSelectionChange: f,
                      options: b,
                      errorMessage: i,
                  })
                : (0, n.jsx)(o.k, {
                      label: I.intl.string(_.default["3jjweL"]),
                      type: "text",
                      value: a,
                      onChange: C,
                      placeholder: I.intl.string(_.default["B+/GvM"]),
                      error: i,
                      fullWidth: !0,
                  }),
            (0, n.jsx)("p", {
                className: S.Bm,
                children: I.intl.format(_.default.CCVlIb, {
                    giftCardTermsUrl: A.X7G.PAID_TERMS,
                    walletTermsUrl: A.X7G.PAID_TERMS,
                }),
            }),
        ],
    });
}
function D(l) {
    let {
            transitionState: e,
            onClose: t,
            onComplete: r,
            initialCode: u = "",
            withRedemptionSuccessModal: d = !1,
            source: o,
            loadId: c,
        } = l,
        [b, D] = a.useState(u),
        [R, j] = a.useState(!1),
        [x, M] = a.useState(""),
        [k, v] = a.useState(null),
        [P, w] = a.useState(null),
        [N, U] = a.useState(null),
        [G, O] = a.useState(null),
        { isEU: B, displayCountry: L, savedPostalCode: F } = (0, m.A)(),
        H = (0, s.bG)([g.A], () => g.A.hasFetchedPaymentSources);
    a.useEffect(() => {
        H || (0, h.$o)();
    }, [H]),
        a.useEffect(() => {
            p.default.track(A.HAw.GIFT_CARD_REDEMPTION_START, { source: o, load_id: c });
        }, [o, c]);
    let Z = a.useRef(!1);
    a.useEffect(() => {
        Z.current || null == F || "" !== x || ((Z.current = !0), M(F), O(null));
    }, [F, x]);
    let W = I.intl.string(_.default["26tjwd"]),
        X = a.useMemo(() => {
            if (null != L)
                return {
                    text: (0, f.Gw)(L),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, C.t)(L), className: S.IM }),
                };
        }, [L]),
        z = a.useCallback((l) => {
            D(l), U(null), w(null);
        }, []),
        Q = a.useCallback(async () => {
            let l = b.trim(),
                e = B ? null == k : "" === x.trim(),
                n = !1;
            if (
                ("" === l && (U(I.intl.string(_.default.PZDPvQ)), (n = !0)),
                e && (O(B ? I.intl.string(I.t["+bm+zE"]) : I.intl.string(I.t.LRlhb1)), (n = !0)),
                !n)
            ) {
                j(!0), w(null);
                try {
                    let e = await (0, E.Ng)(l, B ? void 0 : x.trim(), B ? (k ?? void 0) : void 0);
                    r?.(e),
                        t(),
                        p.default.track(A.HAw.GIFT_CARD_REDEMPTION_COMPLETED, { source: o, load_id: c }),
                        d && (0, E.cV)({ amountRedeemed: e.amount, currencyCode: e.currency, loadId: c }),
                        (0, h.$o)().then((l) => {
                            let e = (l?.body ?? []).find((l) => l.type === y.he.TDS_WALLET);
                            null != e && (0, h.YP)(e.id);
                        });
                } catch (l) {
                    w((0, E.tn)(l)), p.default.track(A.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: o, load_id: c });
                    return;
                } finally {
                    j(!1);
                }
            }
        }, [b, B, k, x, r, t, d, o, c]),
        V = a.useCallback((l) => {
            M(l), O(null), w(null);
        }, []),
        Y = a.useCallback((l) => {
            v(l), O(null), w(null);
        }, []);
    return (0, n.jsx)(i.Modal, {
        transitionState: e,
        onClose: t,
        title: W,
        subtitle: X,
        input: (0, n.jsx)(T, {
            codeInput: b,
            isEU: B,
            postalCodeInput: x,
            selectedBillingCountry: k,
            redemptionError: P,
            codeError: N,
            billingError: G,
            onCodeInputChange: z,
            onPostalCodeChange: V,
            onBillingCountryChange: Y,
        }),
        actionBarInput: (0, n.jsx)("span", {}),
        actions: [{ variant: "primary", size: "md", text: I.intl.string(_.default.hnRau6), loading: R, onClick: Q }],
    });
}
