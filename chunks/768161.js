l.d(e, { default: () => S });
var n = l(627968),
    a = l(64700),
    i = l(96337),
    s = l(997101),
    r = l(311907),
    u = l(732955),
    o = l(397927),
    c = l(384904),
    d = l(500380),
    h = l(518977),
    p = l(615405),
    C = l(295405),
    g = l(99696),
    y = l(818348),
    m = l(985018),
    f = l(615305);
let b = i.A.filter((t) => s.M.EU_COUNTRIES.has(t.alpha2)).map((t) => ({
    id: t.alpha2,
    value: t.alpha2,
    label: (0, h.Gw)(t.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, d.t)(t.alpha2), style: { height: 18 } }),
}));
function x(t) {
    let {
        codeInput: e,
        isEU: l,
        postalCodeInput: a,
        selectedBillingCountry: i,
        redemptionError: s,
        onCodeInputChange: r,
        onPostalCodeChange: u,
        onBillingCountryChange: c,
    } = t;
    return (0, n.jsxs)("div", {
        className: f.Cl,
        children: [
            null != s && (0, n.jsx)(o.wx6, { type: "critical", children: s }),
            (0, n.jsx)("span", {
                className: f.ZY,
                children: (0, n.jsx)(o.ksK, {
                    label: m.intl.string(m.t["3Ujv7z"]),
                    type: "text",
                    value: e,
                    onChange: r,
                    placeholder: m.intl.string(m.t.wgFgAA),
                    fullWidth: !0,
                }),
            }),
            l
                ? (0, n.jsx)(o.ZiE, {
                      selectionMode: "single",
                      label: m.intl.string(m.t.eDdrAD),
                      placeholder: m.intl.string(m.t.eDdrAD),
                      value: i,
                      onSelectionChange: c,
                      options: b,
                  })
                : (0, n.jsx)(o.ksK, {
                      label: m.intl.string(m.t.mfpJ9m),
                      type: "text",
                      value: a,
                      onChange: u,
                      placeholder: m.intl.string(m.t["9xLNmi"]),
                      fullWidth: !0,
                  }),
        ],
    });
}
function S(t) {
    let { transitionState: e, onClose: l, onComplete: i, initialCode: o = "", withRedemptionSuccessModal: b = !1 } = t,
        [S, E] = a.useState(o),
        [v, j] = a.useState(!1),
        [k, A] = a.useState(""),
        [I, _] = a.useState(null),
        [U, N] = a.useState(null),
        [M, w] = a.useState(null),
        [T, P] = a.useState(!1),
        {
            savedPostalCode: z,
            savedCountry: D,
            hasFetchedPaymentSources: F,
            ipCountryCode: O,
        } = (0, r.cf)([C.A, p.A], () => {
            let t = C.A.defaultPaymentSource;
            return {
                savedPostalCode: t?.billingAddress.postalCode ?? null,
                savedCountry: t?.billingAddress.country ?? null,
                hasFetchedPaymentSources: C.A.hasFetchedPaymentSources,
                ipCountryCode: p.A.ipCountryCode ?? null,
            };
        });
    a.useEffect(() => {
        F || (0, c.$o)(), (0, g.IK)().then(w), (0, c.xe)();
    }, [F]);
    let R = M?.country ?? null;
    a.useEffect(() => {
        "" === k && null != z && A(z);
    }, [z, k]),
        a.useEffect(() => {
            let t = M?.country ?? null;
            null != t
                ? P(s.M.EU_COUNTRIES.has(t))
                : null != D
                  ? P(s.M.EU_COUNTRIES.has(D))
                  : null != O
                    ? P(s.M.EU_COUNTRIES.has(O))
                    : P(!1);
        }, [O, D, M]);
    let L = m.intl.string(m.t.ToslbL),
        W = a.useMemo(() => {
            if (null != R)
                return {
                    text: (0, h.Gw)(R),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, d.t)(R), className: f.IM }),
                };
        }, [R]),
        B = a.useCallback((t) => {
            E(t), N(null);
        }, []),
        K = a.useCallback(async () => {
            let t = S.trim();
            if ("" === t) return void N(m.intl.string(m.t.j8734b));
            if (T && null == I) return void N(m.intl.string(m.t["+bm+zE"]));
            j(!0), N(null);
            try {
                let e = await (0, g.Ng)(t, T ? void 0 : k.trim());
                i?.(),
                    l(),
                    b && (0, g.cV)({ amountRedeemed: e.amount, currencyCode: e.currency }),
                    (0, c.$o)().then((t) => {
                        let e = (t?.body ?? []).find((t) => t.type === y.he.TDS_WALLET);
                        null != e && (0, c.YP)(e.id);
                    });
            } catch (e) {
                let t = e?.body;
                N(
                    t?.errors?.postal_code != null || t?.postal_code != null
                        ? m.intl.string(m.t.e2zhgU)
                        : m.intl.string(m.t.OBnXjv),
                );
                return;
            } finally {
                j(!1);
            }
        }, [S, T, I, k, i, l, b]),
        Y = a.useCallback((t) => {
            A(t), N(null);
        }, []),
        Z = a.useCallback((t) => {
            _(t), N(null);
        }, []);
    return (0, n.jsx)(u.aFV, {
        transitionState: e,
        onClose: l,
        title: L,
        subtitle: W,
        input: (0, n.jsx)(x, {
            codeInput: S,
            isEU: T,
            postalCodeInput: k,
            selectedBillingCountry: I,
            redemptionError: U,
            onCodeInputChange: B,
            onPostalCodeChange: Y,
            onBillingCountryChange: Z,
        }),
        actions: [
            { variant: "secondary", size: "md", text: m.intl.string(m.t["13/7kX"]), onClick: l },
            { variant: "primary", size: "md", text: m.intl.string(m.t.H2hHyf), loading: v, onClick: K },
        ],
    });
}
