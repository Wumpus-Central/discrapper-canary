l.d(e, { default: () => I });
var n = l(627968),
    a = l(64700),
    i = l(96337),
    r = l(997101),
    s = l(311907),
    u = l(732955),
    o = l(397927),
    d = l(384904),
    c = l(500380),
    C = l(518977),
    h = l(295405),
    g = l(954571),
    p = l(99696),
    f = l(667455),
    m = l(652215),
    y = l(818348),
    E = l(985018),
    _ = l(615305);
let b = i.A.filter((t) => r.M.EU_COUNTRIES.has(t.alpha2)).map((t) => ({
    id: t.alpha2,
    value: t.alpha2,
    label: (0, C.Gw)(t.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, c.t)(t.alpha2), style: { height: 18 } }),
}));
function A(t) {
    let {
        codeInput: e,
        isEU: l,
        postalCodeInput: a,
        selectedBillingCountry: i,
        redemptionError: r,
        onCodeInputChange: s,
        onPostalCodeChange: u,
        onBillingCountryChange: d,
    } = t;
    return (0, n.jsxs)("div", {
        className: _.Cl,
        children: [
            null != r && (0, n.jsx)(o.wx6, { type: "critical", children: r }),
            (0, n.jsx)("span", {
                className: _.ZY,
                children: (0, n.jsx)(o.ksK, {
                    label: E.intl.string(E.t["3Ujv7z"]),
                    type: "text",
                    value: e,
                    onChange: s,
                    placeholder: E.intl.string(E.t.wgFgAA),
                    fullWidth: !0,
                }),
            }),
            l
                ? (0, n.jsx)(o.ZiE, {
                      selectionMode: "single",
                      label: E.intl.string(E.t.eDdrAD),
                      placeholder: E.intl.string(E.t.eDdrAD),
                      value: i,
                      onSelectionChange: d,
                      options: b,
                  })
                : (0, n.jsx)(o.ksK, {
                      label: E.intl.string(E.t.mfpJ9m),
                      type: "text",
                      value: a,
                      onChange: u,
                      placeholder: E.intl.string(E.t["9xLNmi"]),
                      fullWidth: !0,
                  }),
        ],
    });
}
function I(t) {
    let {
            transitionState: e,
            onClose: l,
            onComplete: i,
            initialCode: r = "",
            withRedemptionSuccessModal: o = !1,
            source: b,
            loadId: I,
        } = t,
        [v, x] = a.useState(r),
        [k, T] = a.useState(!1),
        [S, D] = a.useState(""),
        [j, R] = a.useState(null),
        [M, N] = a.useState(null),
        { isEU: U, displayCountry: w, savedPostalCode: O } = (0, f.A)(),
        P = (0, s.bG)([h.A], () => h.A.hasFetchedPaymentSources);
    a.useEffect(() => {
        P || (0, d.$o)();
    }, [P]),
        a.useEffect(() => {
            g.default.track(m.HAw.GIFT_CARD_REDEMPTION_START, { source: b, load_id: I });
        }, [b, I]);
    let F = a.useRef(!1);
    a.useEffect(() => {
        F.current || null == O || "" !== S || ((F.current = !0), D(O));
    }, [O, S]);
    let G = E.intl.string(E.t.ToslbL),
        L = a.useMemo(() => {
            if (null != w)
                return {
                    text: (0, C.Gw)(w),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, c.t)(w), className: _.IM }),
                };
        }, [w]),
        z = a.useCallback((t) => {
            x(t), N(null);
        }, []),
        H = a.useCallback(async () => {
            let t = v.trim();
            if ("" === t) return void N(E.intl.string(E.t.j8734b));
            if (U && null == j) return void N(E.intl.string(E.t["+bm+zE"]));
            T(!0), N(null);
            try {
                let e = await (0, p.Ng)(t, U ? void 0 : S.trim(), U ? (j ?? void 0) : void 0);
                i?.(),
                    l(),
                    g.default.track(m.HAw.GIFT_CARD_REDEMPTION_COMPLETED, { source: b, load_id: I }),
                    o && (0, p.cV)({ amountRedeemed: e.amount, currencyCode: e.currency, loadId: I }),
                    (0, d.$o)().then((t) => {
                        let e = (t?.body ?? []).find((t) => t.type === y.he.TDS_WALLET);
                        null != e && (0, d.YP)(e.id);
                    });
            } catch (e) {
                let t = e?.body;
                N(
                    t?.errors?.postal_code != null || t?.postal_code != null
                        ? E.intl.string(E.t.e2zhgU)
                        : E.intl.string(E.t.OBnXjv),
                ),
                    g.default.track(m.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: b, load_id: I });
                return;
            } finally {
                T(!1);
            }
        }, [v, U, j, S, i, l, o, b, I]),
        W = a.useCallback((t) => {
            D(t), N(null);
        }, []),
        B = a.useCallback((t) => {
            R(t), N(null);
        }, []);
    return (0, n.jsx)(u.aFV, {
        transitionState: e,
        onClose: l,
        title: G,
        subtitle: L,
        input: (0, n.jsx)(A, {
            codeInput: v,
            isEU: U,
            postalCodeInput: S,
            selectedBillingCountry: j,
            redemptionError: M,
            onCodeInputChange: z,
            onPostalCodeChange: W,
            onBillingCountryChange: B,
        }),
        actions: [
            { variant: "secondary", size: "md", text: E.intl.string(E.t["13/7kX"]), onClick: l },
            {
                variant: "primary",
                size: "md",
                text: E.intl.string(E.t.H2hHyf),
                loading: k,
                disabled: "" === v.trim() || (U ? null == j : "" === S.trim()),
                onClick: H,
            },
        ],
    });
}
