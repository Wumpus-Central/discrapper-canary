e.d(l, { default: () => I });
var n = e(627968),
    a = e(64700),
    r = e(96337),
    i = e(997101),
    s = e(311907),
    u = e(732955),
    o = e(397927),
    d = e(384904),
    c = e(500380),
    C = e(518977),
    g = e(295405),
    h = e(954571),
    p = e(99696),
    f = e(667455),
    E = e(652215),
    m = e(818348),
    y = e(985018),
    A = e(615305);
let b = r.A.filter((t) => i.M.EU_COUNTRIES.has(t.alpha2)).map((t) => ({
    id: t.alpha2,
    value: t.alpha2,
    label: (0, C.Gw)(t.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, c.t)(t.alpha2), style: { height: 18 } }),
}));
function _(t) {
    let {
        codeInput: l,
        isEU: e,
        postalCodeInput: a,
        selectedBillingCountry: r,
        redemptionError: i,
        codeError: s,
        billingError: u,
        onCodeInputChange: d,
        onPostalCodeChange: c,
        onBillingCountryChange: C,
    } = t;
    return (0, n.jsxs)("div", {
        className: A.Cl,
        children: [
            null != i && (0, n.jsx)(o.wx6, { type: "critical", children: i }),
            (0, n.jsx)("span", {
                className: A.ZY,
                children: (0, n.jsx)(o.ksK, {
                    label: y.intl.string(y.t["3Ujv7z"]),
                    type: "text",
                    value: l,
                    onChange: d,
                    placeholder: y.intl.string(y.t.wgFgAA),
                    error: s,
                    fullWidth: !0,
                }),
            }),
            e
                ? (0, n.jsx)(o.ZiE, {
                      selectionMode: "single",
                      label: y.intl.string(y.t.eDdrAD),
                      placeholder: y.intl.string(y.t.eDdrAD),
                      value: r,
                      onSelectionChange: C,
                      options: b,
                      errorMessage: u,
                  })
                : (0, n.jsx)(o.ksK, {
                      label: y.intl.string(y.t.mfpJ9m),
                      type: "text",
                      value: a,
                      onChange: c,
                      placeholder: y.intl.string(y.t["9xLNmi"]),
                      error: u,
                      fullWidth: !0,
                  }),
        ],
    });
}
function I(t) {
    let {
            transitionState: l,
            onClose: e,
            onComplete: r,
            initialCode: i = "",
            withRedemptionSuccessModal: o = !1,
            source: b,
            loadId: I,
        } = t,
        [x, S] = a.useState(i),
        [T, k] = a.useState(!1),
        [v, D] = a.useState(""),
        [R, M] = a.useState(null),
        [N, j] = a.useState(null),
        [U, w] = a.useState(null),
        [F, O] = a.useState(null),
        { isEU: P, displayCountry: L, savedPostalCode: G } = (0, f.A)(),
        z = (0, s.bG)([g.A], () => g.A.hasFetchedPaymentSources);
    a.useEffect(() => {
        z || (0, d.$o)();
    }, [z]),
        a.useEffect(() => {
            h.default.track(E.HAw.GIFT_CARD_REDEMPTION_START, { source: b, load_id: I });
        }, [b, I]);
    let H = a.useRef(!1);
    a.useEffect(() => {
        H.current || null == G || "" !== v || ((H.current = !0), D(G), O(null));
    }, [G, v]);
    let W = y.intl.string(y.t.ToslbL),
        B = a.useMemo(() => {
            if (null != L)
                return {
                    text: (0, C.Gw)(L),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, c.t)(L), className: A.IM }),
                };
        }, [L]),
        Y = a.useCallback((t) => {
            S(t), w(null), j(null);
        }, []),
        Z = a.useCallback(async () => {
            let t = x.trim(),
                l = P ? null == R : "" === v.trim(),
                n = !1;
            if (
                ("" === t && (w(y.intl.string(y.t.NeFzT7)), (n = !0)),
                l && (O(P ? y.intl.string(y.t["+bm+zE"]) : y.intl.string(y.t.LRlhb1)), (n = !0)),
                !n)
            ) {
                k(!0), j(null);
                try {
                    let l = await (0, p.Ng)(t, P ? void 0 : v.trim(), P ? (R ?? void 0) : void 0);
                    r?.(l),
                        e(),
                        h.default.track(E.HAw.GIFT_CARD_REDEMPTION_COMPLETED, { source: b, load_id: I }),
                        o && (0, p.cV)({ amountRedeemed: l.amount, currencyCode: l.currency, loadId: I }),
                        (0, d.$o)().then((t) => {
                            let l = (t?.body ?? []).find((t) => t.type === m.he.TDS_WALLET);
                            null != l && (0, d.YP)(l.id);
                        });
                } catch (t) {
                    j(y.intl.string(y.t.OBnXjv)),
                        h.default.track(E.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: b, load_id: I });
                    return;
                } finally {
                    k(!1);
                }
            }
        }, [x, P, R, v, r, e, o, b, I]),
        K = a.useCallback((t) => {
            D(t), O(null), j(null);
        }, []),
        V = a.useCallback((t) => {
            M(t), O(null), j(null);
        }, []);
    return (0, n.jsx)(u.aFV, {
        transitionState: l,
        onClose: e,
        title: W,
        subtitle: B,
        input: (0, n.jsx)(_, {
            codeInput: x,
            isEU: P,
            postalCodeInput: v,
            selectedBillingCountry: R,
            redemptionError: N,
            codeError: U,
            billingError: F,
            onCodeInputChange: Y,
            onPostalCodeChange: K,
            onBillingCountryChange: V,
        }),
        actions: [
            { variant: "secondary", size: "md", text: y.intl.string(y.t["13/7kX"]), onClick: e },
            { variant: "primary", size: "md", text: y.intl.string(y.t.H2hHyf), loading: T, onClick: Z },
        ],
    });
}
