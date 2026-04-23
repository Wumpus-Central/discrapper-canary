e.d(l, { default: () => S });
var n = e(627968),
    a = e(64700),
    r = e(96337),
    i = e(997101),
    s = e(17928),
    u = e(189213),
    o = e(783878),
    d = e(292666),
    c = e(683071),
    C = e(323082),
    g = e(500380),
    h = e(518977),
    p = e(295405),
    f = e(954571),
    E = e(99696),
    m = e(667455),
    y = e(652215),
    A = e(818348),
    b = e(985018),
    _ = e(133112);
let I = r.A.filter((t) => i.M.EU_COUNTRIES.has(t.alpha2)).map((t) => ({
    id: t.alpha2,
    value: t.alpha2,
    label: (0, h.Gw)(t.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, g.t)(t.alpha2), style: { height: 18 } }),
}));
function x(t) {
    let {
        codeInput: l,
        isEU: e,
        postalCodeInput: a,
        selectedBillingCountry: r,
        redemptionError: i,
        codeError: s,
        billingError: u,
        onCodeInputChange: C,
        onPostalCodeChange: g,
        onBillingCountryChange: h,
    } = t;
    return (0, n.jsxs)("div", {
        className: _.Cl,
        children: [
            null != i && (0, n.jsx)(c.w, { type: "critical", children: i }),
            (0, n.jsx)("span", {
                className: _.ZY,
                children: (0, n.jsx)(d.k, {
                    label: b.intl.string(b.t["3Ujv7z"]),
                    type: "text",
                    value: l,
                    onChange: C,
                    placeholder: b.intl.string(b.t.wgFgAA),
                    error: s,
                    fullWidth: !0,
                }),
            }),
            e
                ? (0, n.jsx)(o.Z, {
                      selectionMode: "single",
                      label: b.intl.string(b.t.eDdrAD),
                      placeholder: b.intl.string(b.t.eDdrAD),
                      value: r,
                      onSelectionChange: h,
                      options: I,
                      errorMessage: u,
                  })
                : (0, n.jsx)(d.k, {
                      label: b.intl.string(b.t.mfpJ9m),
                      type: "text",
                      value: a,
                      onChange: g,
                      placeholder: b.intl.string(b.t["9xLNmi"]),
                      error: u,
                      fullWidth: !0,
                  }),
        ],
    });
}
function S(t) {
    let {
            transitionState: l,
            onClose: e,
            onComplete: r,
            initialCode: i = "",
            withRedemptionSuccessModal: o = !1,
            source: d,
            loadId: c,
        } = t,
        [I, S] = a.useState(i),
        [T, k] = a.useState(!1),
        [v, D] = a.useState(""),
        [M, R] = a.useState(null),
        [N, j] = a.useState(null),
        [U, w] = a.useState(null),
        [O, P] = a.useState(null),
        { isEU: F, displayCountry: L, savedPostalCode: G } = (0, m.A)(),
        z = (0, s.bG)([p.A], () => p.A.hasFetchedPaymentSources);
    a.useEffect(() => {
        z || (0, C.$o)();
    }, [z]),
        a.useEffect(() => {
            f.default.track(y.HAw.GIFT_CARD_REDEMPTION_START, { source: d, load_id: c });
        }, [d, c]);
    let H = a.useRef(!1);
    a.useEffect(() => {
        H.current || null == G || "" !== v || ((H.current = !0), D(G), P(null));
    }, [G, v]);
    let W = b.intl.string(b.t.ToslbL),
        B = a.useMemo(() => {
            if (null != L)
                return {
                    text: (0, h.Gw)(L),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, g.t)(L), className: _.IM }),
                };
        }, [L]),
        Y = a.useCallback((t) => {
            S(t), w(null), j(null);
        }, []),
        Z = a.useCallback(async () => {
            let t = I.trim(),
                l = F ? null == M : "" === v.trim(),
                n = !1;
            if (
                ("" === t && (w(b.intl.string(b.t.NeFzT7)), (n = !0)),
                l && (P(F ? b.intl.string(b.t["+bm+zE"]) : b.intl.string(b.t.LRlhb1)), (n = !0)),
                !n)
            ) {
                k(!0), j(null);
                try {
                    let l = await (0, E.Ng)(t, F ? void 0 : v.trim(), F ? (M ?? void 0) : void 0);
                    r?.(l),
                        e(),
                        f.default.track(y.HAw.GIFT_CARD_REDEMPTION_COMPLETED, { source: d, load_id: c }),
                        o && (0, E.cV)({ amountRedeemed: l.amount, currencyCode: l.currency, loadId: c }),
                        (0, C.$o)().then((t) => {
                            let l = (t?.body ?? []).find((t) => t.type === A.he.TDS_WALLET);
                            null != l && (0, C.YP)(l.id);
                        });
                } catch (t) {
                    j(b.intl.string(b.t.OBnXjv)),
                        f.default.track(y.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: d, load_id: c });
                    return;
                } finally {
                    k(!1);
                }
            }
        }, [I, F, M, v, r, e, o, d, c]),
        X = a.useCallback((t) => {
            D(t), P(null), j(null);
        }, []),
        $ = a.useCallback((t) => {
            R(t), P(null), j(null);
        }, []);
    return (0, n.jsx)(u.Modal, {
        transitionState: l,
        onClose: e,
        title: W,
        subtitle: B,
        input: (0, n.jsx)(x, {
            codeInput: I,
            isEU: F,
            postalCodeInput: v,
            selectedBillingCountry: M,
            redemptionError: N,
            codeError: U,
            billingError: O,
            onCodeInputChange: Y,
            onPostalCodeChange: X,
            onBillingCountryChange: $,
        }),
        actions: [
            { variant: "secondary", size: "md", text: b.intl.string(b.t["13/7kX"]), onClick: e },
            { variant: "primary", size: "md", text: b.intl.string(b.t.H2hHyf), loading: T, onClick: Z },
        ],
    });
}
