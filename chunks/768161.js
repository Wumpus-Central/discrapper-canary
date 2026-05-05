e.d(t, { default: () => S });
var n = e(627968),
    a = e(64700),
    r = e(96337),
    s = e(997101),
    i = e(17928),
    u = e(189213),
    o = e(783878),
    d = e(292666),
    c = e(683071),
    h = e(753390),
    C = e(500380),
    g = e(423764),
    p = e(295405),
    E = e(174459),
    f = e(99696),
    y = e(667455),
    A = e(652215),
    m = e(818348),
    b = e(375708),
    _ = e(133112);
let I = r.A.filter((l) => s.M.EU_COUNTRIES.has(l.alpha2)).map((l) => ({
    id: l.alpha2,
    value: l.alpha2,
    label: (0, g.Gw)(l.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, C.t)(l.alpha2), style: { height: 18 } }),
}));
function k(l) {
    let {
        codeInput: t,
        isEU: e,
        postalCodeInput: a,
        selectedBillingCountry: r,
        redemptionError: s,
        codeError: i,
        billingError: u,
        onCodeInputChange: h,
        onPostalCodeChange: C,
        onBillingCountryChange: g,
    } = l;
    return (0, n.jsxs)("div", {
        className: _.Cl,
        children: [
            null != s && (0, n.jsx)(c.w, { type: "critical", children: s }),
            (0, n.jsx)("span", {
                className: _.ZY,
                children: (0, n.jsx)(d.k, {
                    label: b.intl.string(b.t["3Ujv7z"]),
                    type: "text",
                    value: t,
                    onChange: h,
                    placeholder: b.intl.string(b.t.wgFgAA),
                    error: i,
                    fullWidth: !0,
                }),
            }),
            e
                ? (0, n.jsx)(o.Z, {
                      selectionMode: "single",
                      label: b.intl.string(b.t.eDdrAD),
                      placeholder: b.intl.string(b.t.eDdrAD),
                      value: r,
                      onSelectionChange: g,
                      options: I,
                      errorMessage: u,
                  })
                : (0, n.jsx)(d.k, {
                      label: b.intl.string(b.t["E/sVK7"]),
                      type: "text",
                      value: a,
                      onChange: C,
                      placeholder: b.intl.string(b.t.XI9zkY),
                      error: u,
                      fullWidth: !0,
                  }),
        ],
    });
}
function S(l) {
    let {
            transitionState: t,
            onClose: e,
            onComplete: r,
            initialCode: s = "",
            withRedemptionSuccessModal: o = !1,
            source: d,
            loadId: c,
        } = l,
        [I, S] = a.useState(s),
        [T, v] = a.useState(!1),
        [x, D] = a.useState(""),
        [R, M] = a.useState(null),
        [N, j] = a.useState(null),
        [U, w] = a.useState(null),
        [P, O] = a.useState(null),
        { isEU: F, displayCountry: z, savedPostalCode: G } = (0, y.A)(),
        L = (0, i.bG)([p.A], () => p.A.hasFetchedPaymentSources);
    a.useEffect(() => {
        L || (0, h.$o)();
    }, [L]),
        a.useEffect(() => {
            E.default.track(A.HAw.GIFT_CARD_REDEMPTION_START, { source: d, load_id: c });
        }, [d, c]);
    let H = a.useRef(!1);
    a.useEffect(() => {
        H.current || null == G || "" !== x || ((H.current = !0), D(G), O(null));
    }, [G, x]);
    let W = b.intl.string(b.t.ToslbL),
        Y = a.useMemo(() => {
            if (null != z)
                return {
                    text: (0, g.Gw)(z),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, C.t)(z), className: _.IM }),
                };
        }, [z]),
        B = a.useCallback((l) => {
            S(l), w(null), j(null);
        }, []),
        V = a.useCallback(async () => {
            let l = I.trim(),
                t = F ? null == R : "" === x.trim(),
                n = !1;
            if (
                ("" === l && (w(b.intl.string(b.t.NeFzT7)), (n = !0)),
                t && (O(F ? b.intl.string(b.t["+bm+zE"]) : b.intl.string(b.t.LRlhb1)), (n = !0)),
                !n)
            ) {
                v(!0), j(null);
                try {
                    let t = await (0, f.Ng)(l, F ? void 0 : x.trim(), F ? (R ?? void 0) : void 0);
                    r?.(t),
                        e(),
                        E.default.track(A.HAw.GIFT_CARD_REDEMPTION_COMPLETED, { source: d, load_id: c }),
                        o && (0, f.cV)({ amountRedeemed: t.amount, currencyCode: t.currency, loadId: c }),
                        (0, h.$o)().then((l) => {
                            let t = (l?.body ?? []).find((l) => l.type === m.he.TDS_WALLET);
                            null != t && (0, h.YP)(t.id);
                        });
                } catch (l) {
                    j((0, f.tn)(l)), E.default.track(A.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: d, load_id: c });
                    return;
                } finally {
                    v(!1);
                }
            }
        }, [I, F, R, x, r, e, o, d, c]),
        X = a.useCallback((l) => {
            D(l), O(null), j(null);
        }, []),
        Z = a.useCallback((l) => {
            M(l), O(null), j(null);
        }, []);
    return (0, n.jsx)(u.Modal, {
        transitionState: t,
        onClose: e,
        title: W,
        subtitle: Y,
        input: (0, n.jsx)(k, {
            codeInput: I,
            isEU: F,
            postalCodeInput: x,
            selectedBillingCountry: R,
            redemptionError: N,
            codeError: U,
            billingError: P,
            onCodeInputChange: B,
            onPostalCodeChange: X,
            onBillingCountryChange: Z,
        }),
        actions: [
            { variant: "secondary", size: "md", text: b.intl.string(b.t["13/7kX"]), onClick: e },
            { variant: "primary", size: "md", text: b.intl.string(b.t.H2hHyf), loading: T, onClick: V },
        ],
    });
}
