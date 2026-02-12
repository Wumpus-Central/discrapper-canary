l.d(e, { default: () => N });
var n = l(627968),
    r = l(64700),
    a = l(96337),
    s = l(997101),
    i = l(934551),
    u = l(311907),
    o = l(732955),
    c = l(397927),
    d = l(384904),
    C = l(500380),
    g = l(518977),
    h = l(615405),
    p = l(295405),
    m = l(580630),
    y = l(99696),
    v = l(818348),
    x = l(985018),
    f = l(615305);
let j = a.A.filter((t) => s.M.EU_COUNTRIES.has(t.alpha2)).map((t) => ({
    id: t.alpha2,
    value: t.alpha2,
    label: (0, g.Gw)(t.alpha2),
    leading: (0, n.jsx)("img", { alt: "", src: (0, C.t)(t.alpha2), style: { height: 18 } }),
}));
function b(t) {
    let { codeInput: e, codeError: l, hasCountryMismatch: r, giftCardCountry: a, onCodeInputChange: s } = t,
        u = r && null != a;
    return (0, n.jsx)("span", {
        className: f.I6,
        children: (0, n.jsx)(c.ksK, {
            label: x.intl.string(x.t["3Ujv7z"]),
            type: "text",
            value: e,
            onChange: s,
            placeholder: x.intl.string(x.t.wgFgAA),
            error: l,
            fullWidth: !0,
            trailing: u
                ? {
                      type: "emoji",
                      button:
                          r && null != a
                              ? (0, n.jsxs)("div", {
                                    className: f.Vl,
                                    children: [
                                        (0, n.jsx)("img", { alt: "", src: (0, C.t)(a), className: f.vn }),
                                        (0, n.jsx)(i.CircleErrorIcon, { size: "sm", color: "var(--status-danger)" }),
                                    ],
                                })
                              : null,
                  }
                : void 0,
        }),
    });
}
function E(t) {
    let {
        codeInput: e,
        hasCountryMismatch: l,
        giftCardCountry: r,
        isEuGiftCard: a,
        postalCodeInput: s,
        postalCodeError: u,
        postalCodeValidated: o,
        selectedBillingCountry: d,
        billingCountryError: g,
        redemptionError: h,
        onPostalCodeChange: p,
        onPostalCodeBlur: m,
        onBillingCountryChange: y,
    } = t;
    return (0, n.jsxs)("div", {
        className: f.Cl,
        children: [
            (0, n.jsx)("span", {
                className: f.ZY,
                children: (0, n.jsx)(c.ksK, {
                    label: x.intl.string(x.t["3Ujv7z"]),
                    type: "text",
                    value: e,
                    disabled: !0,
                    error: l ? x.intl.string(x.t.SLBGNc) : null,
                    trailing: {
                        type: "emoji",
                        button:
                            null == r
                                ? null
                                : (0, n.jsxs)("div", {
                                      className: f.Vl,
                                      children: [
                                          (0, n.jsx)("img", { alt: "", src: (0, C.t)(r), className: f.vn }),
                                          l
                                              ? (0, n.jsx)(i.CircleErrorIcon, {
                                                    size: "sm",
                                                    color: "var(--status-danger)",
                                                })
                                              : (0, n.jsx)(i.CircleCheckIcon, {
                                                    size: "sm",
                                                    color: "var(--status-positive)",
                                                }),
                                      ],
                                  }),
                    },
                }),
            }),
            (() => {
                if (l) return null;
                if (a)
                    return (0, n.jsx)(c.ZiE, {
                        selectionMode: "single",
                        label: x.intl.string(x.t.eDdrAD),
                        placeholder: x.intl.string(x.t.eDdrAD),
                        value: d,
                        onSelectionChange: y,
                        options: j,
                        errorMessage: g ?? void 0,
                    });
                let t =
                    null != u
                        ? (0, n.jsx)("div", {
                              className: f.Vl,
                              children: (0, n.jsx)(i.CircleErrorIcon, { size: "sm", color: "var(--status-danger)" }),
                          })
                        : o && s.trim().length > 0
                          ? (0, n.jsx)("div", {
                                className: f.Vl,
                                children: (0, n.jsx)(i.CircleCheckIcon, {
                                    size: "sm",
                                    color: "var(--status-positive)",
                                }),
                            })
                          : null;
                return (0, n.jsx)(c.ksK, {
                    label: x.intl.string(x.t.mfpJ9m),
                    type: "text",
                    value: s,
                    onChange: p,
                    onBlur: m,
                    placeholder: x.intl.string(x.t["9xLNmi"]),
                    fullWidth: !0,
                    error: u,
                    trailing: null != t ? { type: "emoji", button: t } : void 0,
                });
            })(),
            null != h &&
                (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    style: { color: "var(--status-danger)" },
                    children: h,
                }),
        ],
    });
}
function N(t) {
    let { transitionState: e, onClose: l, initialCode: a = "" } = t,
        [i, j] = r.useState("ENTER_CODE"),
        [N, S] = r.useState(a),
        [I, _] = r.useState(!1),
        [T, k] = r.useState(null),
        [O, w] = r.useState(null),
        [M, U] = r.useState(""),
        [R, A] = r.useState(null),
        [z, B] = r.useState(!1),
        [D, F] = r.useState(null),
        [L, P] = r.useState(null),
        [V, Y] = r.useState(null),
        [G, W] = r.useState(null),
        X = O?.country ?? null,
        K = null != X && s.M.EU_COUNTRIES.has(X),
        {
            savedPostalCode: Z,
            savedCountry: $,
            hasFetchedPaymentSources: H,
            ipCountryCode: J,
        } = (0, u.cf)([p.A, h.A], () => {
            let t = p.A.defaultPaymentSource;
            return {
                savedPostalCode: t?.billingAddress.postalCode ?? null,
                savedCountry: t?.billingAddress.country ?? null,
                hasFetchedPaymentSources: p.A.hasFetchedPaymentSources,
                ipCountryCode: h.A.ipCountryCode ?? null,
            };
        });
    r.useEffect(() => {
        H || (0, d.$o)(), (0, y.IK)().then(W), (0, d.xe)();
    }, [H]);
    let Q = G?.country ?? null,
        q = r.useMemo(() => G?.allowed_currencies ?? [], [G?.allowed_currencies]),
        tt = r.useCallback(
            (t) => {
                if (0 === q.length) return !0;
                let e = t.currency.toLowerCase();
                return q.includes(e);
            },
            [q],
        ),
        te = r.useMemo(() => null != O && !tt(O), [O, tt]),
        tl = x.intl.string(x.t.ToslbL),
        tn = r.useMemo(() => {
            if (null != Q)
                return {
                    text: (0, g.Gw)(Q),
                    leadingIcon: () => (0, n.jsx)("img", { alt: "", src: (0, C.t)(Q), className: f.IM }),
                };
        }, [Q]),
        tr = r.useCallback(
            async (t, e) => {
                let l = String(t ?? M).trim(),
                    n = e ?? X;
                if (0 === l.length) return A(null), B(!1), !1;
                try {
                    return await (0, y.yy)(l, n ?? void 0), B(!0), !0;
                } catch (t) {
                    return A(x.intl.string(x.t.e2zhgU)), B(!1), !1;
                }
            },
            [M, X],
        ),
        ta = r.useCallback((t) => {
            S(t), k(null);
        }, []),
        ts = r.useCallback(
            async (t) => {
                if ((t?.preventDefault?.(), "" === N.trim())) return void k(x.intl.string(x.t.j8734b));
                _(!0), k(null);
                try {
                    let t = await (0, y.Qp)(N.trim());
                    if ((w(t), !tt(t))) return void k(x.intl.string(x.t.SLBGNc));
                    if (s.M.EU_COUNTRIES.has(t.country)) {
                        let t = $ ?? J;
                        null != t && s.M.EU_COUNTRIES.has(t) && F(t);
                    } else null != Z && (U(Z), tr(Z, t.country));
                    j("CONFIRM_COUNTRY");
                } catch (t) {
                    k(x.intl.string(x.t.OBnXjv)), w(null);
                } finally {
                    _(!1);
                }
            },
            [N, Z, $, J, tt, tr],
        ),
        ti = r.useCallback(async () => {
            if (!te) {
                if (K && null == D) return void P(x.intl.string(x.t["+bm+zE"]));
                if (K || null == X || (await tr(M, X))) {
                    _(!0), Y(null);
                    try {
                        let t = K ? D : X;
                        if (null != t)
                            try {
                                await (0, y.Xj)({ postalCode: K ? void 0 : M, country: t });
                            } catch (t) {
                                Y(x.intl.string(x.t.OBnXjv));
                                return;
                            }
                        try {
                            let t = await (0, y.Ng)(N.trim()),
                                e = x.intl.formatToPlainString(x.t.U4L4rn, {
                                    price: (0, m.$g)(t.amount, t.currency.toLowerCase()),
                                });
                            (0, c.showToast)((0, c.createToast)(e, c.ToastType.SUCCESS)),
                                l(),
                                (0, d.$o)().then((t) => {
                                    let e = (t?.body ?? []).find((t) => t.type === v.he.TDS_WALLET);
                                    null != e && (0, d.YP)(e.id);
                                });
                        } catch (t) {
                            Y(x.intl.string(x.t.OBnXjv));
                            return;
                        }
                    } finally {
                        _(!1);
                    }
                }
            }
        }, [te, K, X, D, M, N, l, tr]),
        tu = r.useCallback((t) => {
            U(t), A(null), B(!1);
        }, []),
        to = r.useCallback((t) => {
            F(t), P(null);
        }, []);
    return (0, n.jsx)(o.aFV, {
        transitionState: e,
        onClose: l,
        title: tl,
        subtitle: tn,
        input: (() => {
            switch (i) {
                case "ENTER_CODE":
                    return (0, n.jsx)(b, {
                        codeInput: N,
                        codeError: T,
                        hasCountryMismatch: te,
                        giftCardCountry: X,
                        onCodeInputChange: ta,
                    });
                case "CONFIRM_COUNTRY":
                    return (0, n.jsx)(E, {
                        codeInput: N,
                        hasCountryMismatch: te,
                        giftCardCountry: X,
                        isEuGiftCard: K,
                        postalCodeInput: M,
                        postalCodeError: R,
                        postalCodeValidated: z,
                        selectedBillingCountry: D,
                        billingCountryError: L,
                        redemptionError: V,
                        onPostalCodeChange: tu,
                        onPostalCodeBlur: () => tr(),
                        onBillingCountryChange: to,
                    });
            }
        })(),
        actions: (() => {
            switch (i) {
                case "ENTER_CODE":
                    return [
                        { variant: "secondary", size: "md", text: x.intl.string(x.t["13/7kX"]), onClick: l },
                        { variant: "primary", size: "md", text: x.intl.string(x.t.PDTjLN), loading: I, onClick: ts },
                    ];
                case "CONFIRM_COUNTRY":
                    return [
                        { variant: "primary", size: "md", text: x.intl.string(x.t.H2hHyf), loading: I, onClick: ti },
                    ];
            }
        })(),
        actionBarInput: "CONFIRM_COUNTRY" === i ? (0, n.jsx)("span", {}) : void 0,
    });
}
