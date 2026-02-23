l.d(e, { default: () => E });
var n = l(627968),
    a = l(64700),
    i = l(96337),
    s = l(997101),
    r = l(311907),
    o = l(732955),
    u = l(397927),
    c = l(384904),
    d = l(500380),
    h = l(518977),
    p = l(615405),
    C = l(295405),
    g = l(580630),
    y = l(99696),
    f = l(818348),
    m = l(985018),
    b = l(615305);
let S = i.A.filter((t) => s.M.EU_COUNTRIES.has(t.alpha2)).map((t) => ({
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
        onPostalCodeChange: o,
        onBillingCountryChange: c,
    } = t;
    return (0, n.jsxs)("div", {
        className: b.Cl,
        children: [
            null != s && (0, n.jsx)(u.wx6, { type: "critical", children: s }),
            (0, n.jsx)("span", {
                className: b.ZY,
                children: (0, n.jsx)(u.ksK, {
                    label: m.intl.string(m.t["3Ujv7z"]),
                    type: "text",
                    value: e,
                    onChange: r,
                    placeholder: m.intl.string(m.t.wgFgAA),
                    fullWidth: !0,
                }),
            }),
            l
                ? (0, n.jsx)(u.ZiE, {
                      selectionMode: "single",
                      label: m.intl.string(m.t.eDdrAD),
                      placeholder: m.intl.string(m.t.eDdrAD),
                      value: i,
                      onSelectionChange: c,
                      options: S,
                  })
                : (0, n.jsx)(u.ksK, {
                      label: m.intl.string(m.t.mfpJ9m),
                      type: "text",
                      value: a,
                      onChange: o,
                      placeholder: m.intl.string(m.t["9xLNmi"]),
                      fullWidth: !0,
                  }),
        ],
    });
}
function E(t) {
    let { transitionState: e, onClose: l, onComplete: i, initialCode: S = "" } = t,
        [E, v] = a.useState(S),
        [j, k] = a.useState(!1),
        [A, U] = a.useState(""),
        [I, T] = a.useState(null),
        [_, w] = a.useState(null),
        [N, M] = a.useState(null),
        [P, L] = a.useState(!1),
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
        F || (0, c.$o)(), (0, y.IK)().then(M), (0, c.xe)();
    }, [F]);
    let R = N?.country ?? null;
    a.useEffect(() => {
        "" === A && null != z && U(z);
    }, [z, A]),
        a.useEffect(() => {
            let t = N?.country ?? null;
            null != t
                ? L(s.M.EU_COUNTRIES.has(t))
                : null != D
                  ? L(s.M.EU_COUNTRIES.has(D))
                  : null != O
                    ? L(s.M.EU_COUNTRIES.has(O))
                    : L(!1);
        }, [O, D, N]);
    let W = m.intl.string(m.t.ToslbL),
        B = a.useMemo(() => {
            if (null != R)
                return {
                    text: (0, h.Gw)(R),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, d.t)(R), className: b.IM }),
                };
        }, [R]),
        K = a.useCallback((t) => {
            v(t), w(null);
        }, []),
        Y = a.useCallback(async () => {
            let t = E.trim();
            if ("" === t) return void w(m.intl.string(m.t.j8734b));
            if (P && null == I) return void w(m.intl.string(m.t["+bm+zE"]));
            k(!0), w(null);
            try {
                let e = await (0, y.Ng)(t, P ? void 0 : A.trim()),
                    n = m.intl.formatToPlainString(m.t.U4L4rn, {
                        price: (0, g.$g)(e.amount, e.currency.toLowerCase()),
                    });
                (0, u.showToast)((0, u.createToast)(n, u.ToastType.SUCCESS)),
                    i?.(),
                    l(),
                    (0, c.$o)().then((t) => {
                        let e = (t?.body ?? []).find((t) => t.type === f.he.TDS_WALLET);
                        null != e && (0, c.YP)(e.id);
                    });
            } catch (e) {
                let t = e?.body;
                w(
                    t?.errors?.postal_code != null || t?.postal_code != null
                        ? m.intl.string(m.t.e2zhgU)
                        : m.intl.string(m.t.OBnXjv),
                );
                return;
            } finally {
                k(!1);
            }
        }, [E, P, I, A, i, l]),
        Z = a.useCallback((t) => {
            U(t), w(null);
        }, []),
        $ = a.useCallback((t) => {
            T(t), w(null);
        }, []);
    return (0, n.jsx)(o.aFV, {
        transitionState: e,
        onClose: l,
        title: W,
        subtitle: B,
        input: (0, n.jsx)(x, {
            codeInput: E,
            isEU: P,
            postalCodeInput: A,
            selectedBillingCountry: I,
            redemptionError: _,
            onCodeInputChange: K,
            onPostalCodeChange: Z,
            onBillingCountryChange: $,
        }),
        actions: [
            { variant: "secondary", size: "md", text: m.intl.string(m.t["13/7kX"]), onClick: l },
            { variant: "primary", size: "md", text: m.intl.string(m.t.H2hHyf), loading: j, onClick: Y },
        ],
    });
}
