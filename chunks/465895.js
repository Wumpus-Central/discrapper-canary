n.d(t, {
    A: () => w,
}),
    n(896048),
    n(638769);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(562465),
    o = n(554146),
    c = n(397927),
    d = n(472229),
    u = n(694080),
    m = n(594061),
    p = n(816733),
    h = n(957565),
    f = n(405269),
    x = n(927578),
    b = n(2915),
    g = n(367744),
    v = n(652215),
    j = n(788868),
    y = n(815907),
    _ = n(661251);
let A = async () => {
        try {
            let { body: e } = await s.Bo.get({
                url: v.Rsh.USER_OFFER_IDS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    C = async (e, t) => {
        try {
            await s.Bo.post({
                url: v.Rsh.CREATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u._D)();
        }
    },
    S = async (e, t) => {
        try {
            await s.Bo.del({
                url: v.Rsh.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await (0, u._D)();
        }
    },
    O = async () => {
        try {
            let { body: e } = await s.Bo.get({
                url: v.Rsh.USER_OFFERS,
                rejectWithError: !0,
            });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: [],
            };
        }
    },
    E = async () => {
        try {
            await s.Bo.del({
                url: v.Rsh.USER_OFFERS,
                rejectWithError: !0,
            });
        } catch (e) {
        } finally {
            await p.A.forceReset(), await (0, u._D)();
        }
    },
    N = async (e) => {
        await s.Bo.post({
            url: v.Rsh.CREATE_REVERSE_TRIAL,
            body: {
                ends_at: e,
            },
            rejectWithError: !0,
        });
    };

function T(e) {
    var t, n, i, o, m;
    let { offer: p, offerOptions: b, forceRefetch: g } = e,
        [_, A] = l.useState(!1),
        [C, O] = l.useState(!1),
        [E, N] = l.useState(!1),
        [T, I] = l.useState(!1);
    l.useEffect(() => {
        E && I(!0);
        let e = setTimeout(() => {
            I(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [E]);
    let { id: w, expires_at: k, redeemed_at: P, trial_id: R, subscription_trial: D, referrer: M } = p,
        L =
            null !=
            (t =
                null ==
                (m = b.find((e) => {
                    let { value: t } = e;
                    return t === R;
                }))
                    ? void 0
                    : m.label)
                ? t
                : "Unknown";
    null != M && (L = "".concat(L, " from @").concat(M.username));
    let U = null != k,
        B = null != k && new Date(k).getTime() < Date.now(),
        G = (null == D ? void 0 : D.sku_id) === j.pe.TIER_0,
        F = async () => {
            N(!0),
                U
                    ? await V({
                          expiresAt: null,
                      })
                    : await (0, u.u1)(p),
                g(),
                N(!1);
        },
        V = async (e) => {
            N(!0);
            try {
                await s.Bo.patch({
                    url: v.Rsh.UPDATE_USER_OFFER(w, "trial"),
                    body: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {},
                        "expiresAt" in e && {
                            expires_at: e.expiresAt,
                        },
                        "referrerId" in e && {
                            referrer_id: e.referrerId,
                        },
                    ),
                    rejectWithError: !0,
                });
            } finally {
                g(), N(!1);
            }
        };
    l.useEffect(() => {
        if (_) {
            let e = setTimeout(() => {
                A(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (C) {
            let e = setTimeout(() => {
                O(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [_, C]);
    let H = "Active";
    return (
        U && (H = "Acked"),
        B && (H = "Expired"),
        (0, a.jsxs)("div", {
            className: r()(y.Nr, G ? y.Qf : y.C1),
            children: [
                (0, a.jsx)("div", {
                    className: r()(y.nM, y.S7),
                    children: (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        color: "always-white",
                        children: L,
                    }),
                }),
                (0, a.jsxs)(c.DUT, {
                    className: r()(y.nM, y.QB),
                    onClick: () => {
                        (0, h.C)(w, () => A(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", w],
                        }),
                        _
                            ? (0, a.jsx)(c.A9s, {
                                  size: "md",
                                  color: "currentColor",
                                  className: y.Kk,
                              })
                            : (0, a.jsx)(c.TdU, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.Kk,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.DUT, {
                    className: r()(y.nM, y.QB),
                    onClick: () => {
                        (0, h.C)(R, () => O(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", R],
                        }),
                        C
                            ? (0, a.jsx)(c.A9s, {
                                  size: "md",
                                  color: "currentColor",
                                  className: y.Kk,
                              })
                            : (0, a.jsx)(c.TdU, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.Kk,
                              }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: y.nM,
                    children: (0, a.jsxs)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, x.re)({
                                intervalType: null != (n = null == D ? void 0 : D.interval) ? n : j.WT.MONTH,
                                intervalCount: null != (i = null == D ? void 0 : D.interval_count) ? i : 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: y.nM,
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, d.A)(), "):"],
                        }),
                        (0, a.jsx)("input", {
                            type: "datetime-local",
                            value: (0, f.Xm)(k),
                            onChange: (e) => {
                                V({
                                    expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null,
                                });
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.nM,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: "Referrer ID:",
                        }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: null != (o = null == M ? void 0 : M.id) ? o : "",
                            onChange: (e) =>
                                V({
                                    referrerId: e.target.value,
                                }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.fC,
                    children: [
                        (0, a.jsx)(c.DUT, {
                            onClick: F,
                            className: r()(y.qS, y.vk, {
                                [y.R1]: U,
                                [y._7]: B,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === H ? void 0 : "always-white",
                                children: H,
                            }),
                        }),
                        null != P &&
                            (0, a.jsx)("div", {
                                className: r()(y.qS, y.k3),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(c.DUT, {
                    onClick: async () => {
                        N(!0), await S(w, "trial"), g(), N(!1);
                    },
                    children: (0, a.jsx)(c.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: r()(y.Kk, y.IT),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: r()(y.g4, {
                        [y.VP]: E || T,
                    }),
                    children: (0, a.jsx)(c.y$y, {}),
                }),
            ],
        })
    );
}

function I(e) {
    var t, n;
    let { offer: i, offerOptions: o, forceRefetch: m } = e,
        [p, x] = l.useState(!1),
        [b, g] = l.useState(!1),
        [j, _] = l.useState(!1),
        [A, C] = l.useState(!1);
    l.useEffect(() => {
        j && C(!0);
        let e = setTimeout(() => {
            C(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: O, expires_at: E, applied_at: N, discount_id: T, discount: I } = i,
        w =
            null !=
            (t =
                null ==
                (n = o.find((e) => {
                    let { value: t } = e;
                    return t === T;
                }))
                    ? void 0
                    : n.label)
                ? t
                : "Unknown",
        k = null != E,
        P = null != E && new Date(E).getTime() < Date.now(),
        R = async () => {
            _(!0),
                k
                    ? await D({
                          expiresAt: null,
                      })
                    : await (0, u.u1)(void 0, i),
                m(),
                _(!1);
        },
        D = async (e) => {
            let { expiresAt: t } = e;
            _(!0);
            try {
                await s.Bo.patch({
                    url: v.Rsh.UPDATE_USER_OFFER(O, "discount"),
                    body: {
                        expires_at: t,
                    },
                    rejectWithError: !0,
                });
            } finally {
                m(), _(!1);
            }
        };
    l.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                x(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (b) {
            let e = setTimeout(() => {
                g(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, b]);
    let M = "Active";
    return (
        P && (M = "Expired"),
        k && (M = "Acked"),
        (0, a.jsxs)("div", {
            className: r()(y.Nr, y.id),
            children: [
                (0, a.jsx)("div", {
                    className: r()(y.nM, y.S7),
                    children: (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        children: w,
                    }),
                }),
                (0, a.jsxs)(c.DUT, {
                    className: r()(y.nM, y.QB),
                    onClick: () => {
                        (0, h.C)(O, () => x(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Offer: ", O],
                        }),
                        p
                            ? (0, a.jsx)(c.A9s, {
                                  size: "md",
                                  color: "currentColor",
                                  className: r()(y.Kk, y.mK),
                              })
                            : (0, a.jsx)(c.TdU, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.Kk,
                              }),
                    ],
                }),
                (0, a.jsxs)(c.DUT, {
                    className: r()(y.nM, y.QB),
                    onClick: () => {
                        (0, h.C)(T, () => g(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ["Discount: ", T],
                        }),
                        b
                            ? (0, a.jsx)(c.A9s, {
                                  size: "md",
                                  color: "currentColor",
                                  className: r()(y.Kk, y.mK),
                              })
                            : (0, a.jsx)(c.TdU, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: y.Kk,
                              }),
                    ],
                }),
                (null == I ? void 0 : I.amount) != null &&
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [I.amount, "% off"],
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: y.nM,
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, d.A)(), "):"],
                        }),
                        (0, a.jsx)("input", {
                            type: "datetime-local",
                            value: (0, f.Xm)(E),
                            onChange: (e) =>
                                D({
                                    expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null,
                                }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.fC,
                    children: [
                        (0, a.jsx)(c.DUT, {
                            onClick: R,
                            className: r()(y.qS, y.vk, {
                                [y.R1]: k,
                                [y._7]: P,
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acked" === M ? void 0 : "always-white",
                                children: M,
                            }),
                        }),
                        null != N &&
                            (0, a.jsx)("div", {
                                className: r()(y.qS, y.k3),
                                children: (0, a.jsx)(c.Text, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(c.DUT, {
                    className: y.aR,
                    onClick: async () => {
                        _(!0), await S(O, "discount"), m(), _(!1);
                    },
                    children: (0, a.jsx)(c.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: r()(y.Kk, y.fy),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: r()(y.g4, {
                        [y.VP]: j || A,
                    }),
                    children: (0, a.jsx)(c.y$y, {}),
                }),
            ],
        })
    );
}

function w() {
    let [e, t] = l.useState([]),
        [n, i] = l.useState([]),
        [r, s] = l.useState(),
        [d, h] = l.useState(),
        [f, x] = l.useState([]),
        [j, S] = l.useState([]),
        [w, k] = l.useState(!0),
        [P, R] = l.useState(10080),
        [D, M] = l.useState([]),
        { entitlements: L, deleteFractionalPremium: U, refreshEntitlementList: B } = (0, g.o)();
    l.useEffect(() => {
        B();
    }, [B]),
        l.useEffect(() => {
            M(L.filter((e) => e.sourceType === v.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [L]),
        l.useEffect(() => {
            (0 === e.length || 0 === n.length || w) &&
                A().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t],
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t],
                        }));
                    t(n), i(a), null == r && s(n[0].value), null == d && h(a[0].value);
                });
        }, [e, n, r, d, w]),
        l.useEffect(() => {
            w &&
                (k(!1),
                p.A.forceReset(),
                (0, u._D)(),
                O().then((e) => {
                    x(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        S(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [w]);
    let G = async () => {
            null != r && (await C(r, "trial"), k(!0));
        },
        F = async () => {
            null != d && (await C(d, "discount"), k(!0));
        },
        V = async () => {
            await E(), k(!0);
        },
        H = async () => {
            let e = new Date(Date.now() + 60 * P * 1e3).toISOString();
            await N(e), B();
        };
    return (0, a.jsx)(c.IpV, {
        className: _.nd,
        children: (0, a.jsxs)("div", {
            className: y.l$,
            children: [
                (0, a.jsxs)("section", {
                    className: y.uW,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            children: "Utils",
                        }),
                        (0, a.jsxs)("div", {
                            className: y.Uo,
                            children: [
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: V,
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, m.xB)(o.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, m._N)(o.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => k(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("section", {
                    className: y.uW,
                    children: (0, a.jsxs)("div", {
                        className: y.bd,
                        children: [
                            (0, a.jsx)(c.l6P, {
                                label: "Create a Trial Offer",
                                options: e,
                                formatOption: (e) => {
                                    let { label: t, value: n } = e;
                                    return {
                                        label: t,
                                        value: n,
                                        id: n,
                                    };
                                },
                                value: r,
                                placeholder: "Trial Type",
                                onSelectionChange: s,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Create",
                                onClick: G,
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)("section", {
                    className: y.uW,
                    children: (0, a.jsxs)("div", {
                        className: y.bd,
                        children: [
                            (0, a.jsx)(c.l6P, {
                                label: "Create a Discount Offer",
                                options: n,
                                formatOption: (e) => {
                                    let { label: t, value: n } = e;
                                    return {
                                        label: t,
                                        value: n,
                                        id: n,
                                    };
                                },
                                value: d,
                                placeholder: "Discount Type",
                                onSelectionChange: h,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Create",
                                onClick: F,
                            }),
                        ],
                    }),
                }),
                f.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: y.uW,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers",
                            }),
                            f.map((t) =>
                                (0, a.jsx)(
                                    T,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => k(!0),
                                    },
                                    t.id,
                                ),
                            ),
                        ],
                    }),
                j.length > 0 &&
                    (0, a.jsxs)("section", {
                        className: y.uW,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers",
                            }),
                            j.map((e) =>
                                (0, a.jsx)(
                                    I,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => k(!0),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                (0, a.jsx)("section", {
                    className: y.uW,
                    children: (0, a.jsxs)("div", {
                        className: y.bd,
                        children: [
                            (0, a.jsx)(c.l6P, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    {
                                        id: "5min",
                                        label: "5 minutes",
                                        value: 5,
                                    },
                                    {
                                        id: "1hour",
                                        label: "1 hour",
                                        value: 60,
                                    },
                                    {
                                        id: "1day",
                                        label: "1 day",
                                        value: 1440,
                                    },
                                    {
                                        id: "1week",
                                        label: "1 week",
                                        value: 10080,
                                    },
                                ],
                                value: P,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: R,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Create",
                                onClick: H,
                            }),
                        ],
                    }),
                }),
                D.length > 0 &&
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: {
                                    marginTop: "15px",
                                },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, a.jsx)("div", {
                                children: D.map((e) =>
                                    (0, a.jsx)(
                                        b.I,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => U(e.id),
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
