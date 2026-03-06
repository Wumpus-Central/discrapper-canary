l.d(e, { default: () => I });
var n = l(627968),
    a = l(64700),
    i = l(96337),
    s = l(997101),
    r = l(311907),
    u = l(732955),
    o = l(397927),
    d = l(384904),
    c = l(500380),
    h = l(518977),
    C = l(615405),
    p = l(295405),
    g = l(954571),
    f = l(99696),
    y = l(652215),
    m = l(818348),
    E = l(985018),
    _ = l(762623);
let b = i.A.filter((t) => s.M.EU_COUNTRIES.has(t.alpha2)).map((t) => ({
    id: t.alpha2,
    value: t.alpha2,
    label: (0, h.Gw)(t.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, c.t)(t.alpha2), style: { height: 18 } }),
}));
function A(t) {
    let {
        codeInput: e,
        isEU: l,
        postalCodeInput: a,
        selectedBillingCountry: i,
        redemptionError: s,
        onCodeInputChange: r,
        onPostalCodeChange: u,
        onBillingCountryChange: d,
    } = t;
    return (0, n.jsxs)("div", {
        className: _.Cl,
        children: [
            null != s && (0, n.jsx)(o.wx6, { type: "critical", children: s }),
            (0, n.jsx)("span", {
                className: _.ZY,
                children: (0, n.jsx)(o.ksK, {
                    label: E.intl.string(E.t["3Ujv7z"]),
                    type: "text",
                    value: e,
                    onChange: r,
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
            initialCode: o = "",
            withRedemptionSuccessModal: b = !1,
            source: I,
            loadId: x,
        } = t,
        [S, k] = a.useState(o),
        [T, v] = a.useState(!1),
        [j, D] = a.useState(""),
        [R, M] = a.useState(null),
        [N, U] = a.useState(null),
        [w, P] = a.useState(null),
        [F, O] = a.useState(!1),
        {
            savedPostalCode: L,
            savedCountry: z,
            hasFetchedPaymentSources: G,
            ipCountryCode: H,
        } = (0, r.cf)([p.A, C.A], () => {
            let t = p.A.defaultPaymentSource;
            return {
                savedPostalCode: t?.billingAddress.postalCode ?? null,
                savedCountry: t?.billingAddress.country ?? null,
                hasFetchedPaymentSources: p.A.hasFetchedPaymentSources,
                ipCountryCode: C.A.ipCountryCode ?? null,
            };
        });
    a.useEffect(() => {
        G || (0, d.$o)(), (0, f.IK)().then(P), (0, d.xe)();
    }, [G]),
        a.useEffect(() => {
            g.default.track(y.HAw.GIFT_CARD_REDEMPTION_START, { source: I, load_id: x });
        }, [I, x]);
    let W = w?.country ?? null,
        B = a.useRef(!1);
    a.useEffect(() => {
        B.current || null == L || "" !== j || ((B.current = !0), D(L));
    }, [L, j]),
        a.useEffect(() => {
            let t = w?.country ?? null;
            null != t
                ? O(s.M.EU_COUNTRIES.has(t))
                : null != z
                  ? O(s.M.EU_COUNTRIES.has(z))
                  : null != H
                    ? O(s.M.EU_COUNTRIES.has(H))
                    : O(!1);
        }, [H, z, w]);
    let K = E.intl.string(E.t.ToslbL),
        Y = a.useMemo(() => {
            if (null != W)
                return {
                    text: (0, h.Gw)(W),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, c.t)(W), className: _.IM }),
                };
        }, [W]),
        Z = a.useCallback((t) => {
            k(t), U(null);
        }, []),
        V = a.useCallback(async () => {
            let t = S.trim();
            if ("" === t) return void U(E.intl.string(E.t.j8734b));
            if (F && null == R) return void U(E.intl.string(E.t["+bm+zE"]));
            v(!0), U(null);
            try {
                let e = await (0, f.Ng)(t, F ? void 0 : j.trim());
                i?.(),
                    l(),
                    g.default.track(y.HAw.GIFT_CARD_REDEMPTION_COMPLETED, { source: I, load_id: x }),
                    b && (0, f.cV)({ amountRedeemed: e.amount, currencyCode: e.currency, loadId: x }),
                    (0, d.$o)().then((t) => {
                        let e = (t?.body ?? []).find((t) => t.type === m.he.TDS_WALLET);
                        null != e && (0, d.YP)(e.id);
                    });
            } catch (e) {
                let t = e?.body;
                U(
                    t?.errors?.postal_code != null || t?.postal_code != null
                        ? E.intl.string(E.t.e2zhgU)
                        : E.intl.string(E.t.OBnXjv),
                ),
                    g.default.track(y.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: I, load_id: x });
                return;
            } finally {
                v(!1);
            }
        }, [S, F, R, j, i, l, b, I, x]),
        X = a.useCallback((t) => {
            D(t), U(null);
        }, []),
        $ = a.useCallback((t) => {
            M(t), U(null);
        }, []);
    return (0, n.jsx)(u.aFV, {
        transitionState: e,
        onClose: l,
        title: K,
        subtitle: Y,
        input: (0, n.jsx)(A, {
            codeInput: S,
            isEU: F,
            postalCodeInput: j,
            selectedBillingCountry: R,
            redemptionError: N,
            onCodeInputChange: Z,
            onPostalCodeChange: X,
            onBillingCountryChange: $,
        }),
        actions: [
            { variant: "secondary", size: "md", text: E.intl.string(E.t["13/7kX"]), onClick: l },
            {
                variant: "primary",
                size: "md",
                text: E.intl.string(E.t.H2hHyf),
                loading: T,
                disabled: "" === S.trim() || (F ? null == R : "" === j.trim()),
                onClick: V,
            },
        ],
    });
}
