a.d(t, { A: () => G });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(562465),
    o = a(554146),
    d = a(534514),
    c = a(939249),
    u = a(834730),
    m = a(933832),
    h = a(624479),
    p = a(241326),
    x = a(289873),
    g = a(573613),
    v = a(821609),
    b = a(691885),
    _ = a(472229),
    f = a(694080),
    j = a(594061),
    A = a(816733),
    y = a(957565),
    C = a(405269),
    E = a(927578),
    S = a(2915),
    N = a(367744),
    k = a(652215),
    I = a(788868),
    D = a(214868),
    T = a(505206);
let w = async () => {
        try {
            let { body: e } = await r.Bo.get({ url: k.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    O = async (e, t) => {
        try {
            await r.Bo.post({ url: k.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, f._D)();
        }
    },
    R = async (e, t) => {
        try {
            await r.Bo.del({ url: k.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, f._D)();
        }
    },
    L = async () => {
        try {
            let { body: e } = await r.Bo.get({ url: k.Rsh.USER_OFFERS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    M = async () => {
        try {
            await r.Bo.del({ url: k.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await A.A.forceReset(), await (0, f._D)();
        }
    },
    P = async (e) => {
        await r.Bo.post({ url: k.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function U(e) {
    let { offer: t, offerOptions: a, forceRefetch: i } = e,
        [o, g] = l.useState(!1),
        [v, b] = l.useState(!1),
        [j, A] = l.useState(!1),
        [S, N] = l.useState(!1);
    l.useEffect(() => {
        j && N(!0);
        let e = setTimeout(() => {
            N(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: T, expires_at: w, redeemed_at: O, trial_id: L, subscription_trial: M, referrer: P } = t,
        U =
            a.find((e) => {
                let { value: t } = e;
                return t === L;
            })?.label ?? "Unknown";
    null != P && (U = `${U} from @${P.username}`);
    let B = null != w,
        G = null != w && new Date(w).getTime() < Date.now(),
        F = M?.sku_id === I.pe.TIER_0,
        V = async () => {
            A(!0), B ? await $({ expiresAt: null }) : await (0, f.u1)(t), i(), A(!1);
        },
        $ = async (e) => {
            A(!0);
            try {
                await r.Bo.patch({
                    url: k.Rsh.UPDATE_USER_OFFER(T, "trial"),
                    body: {
                        ...("expiresAt" in e && { expires_at: e.expiresAt }),
                        ...("referrerId" in e && { referrer_id: e.referrerId }),
                    },
                    rejectWithError: !0,
                });
            } finally {
                i(), A(!1);
            }
        };
    l.useEffect(() => {
        if (o) {
            let e = setTimeout(() => {
                g(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (v) {
            let e = setTimeout(() => {
                b(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [o, v]);
    let W = "Active";
    return (
        B && (W = "Acked"),
        G && (W = "Expired"),
        (0, n.jsxs)("div", {
            className: s()(D.Nr, F ? D.Qf : D.C1),
            children: [
                (0, n.jsx)("div", {
                    className: s()(D.nM, D.S7),
                    children: (0, n.jsx)(d.D, { variant: "heading-lg/semibold", color: "always-white", children: U }),
                }),
                (0, n.jsxs)(c.D, {
                    className: s()(D.nM, D.QB),
                    onClick: () => {
                        (0, y.C)(T, () => g(!0));
                    },
                    children: [
                        (0, n.jsxs)(u.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", T] }),
                        o
                            ? (0, n.jsx)(m.A, { size: "md", color: "currentColor", className: D.Kk })
                            : (0, n.jsx)(h.T, { size: "xs", color: "currentColor", className: D.Kk }),
                    ],
                }),
                (0, n.jsxs)(c.D, {
                    className: s()(D.nM, D.QB),
                    onClick: () => {
                        (0, y.C)(L, () => b(!0));
                    },
                    children: [
                        (0, n.jsxs)(u.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", L] }),
                        v
                            ? (0, n.jsx)(m.A, { size: "md", color: "currentColor", className: D.Kk })
                            : (0, n.jsx)(h.T, { size: "xs", color: "currentColor", className: D.Kk }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: D.nM,
                    children: (0, n.jsxs)(u.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, E.re)({
                                intervalType: M?.interval ?? I.WT.MONTH,
                                intervalCount: M?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: D.nM,
                    children: [
                        (0, n.jsxs)(u.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, _.A)(), "):"],
                        }),
                        (0, n.jsx)("input", {
                            type: "datetime-local",
                            value: (0, C.Xm)(w),
                            onChange: (e) => {
                                $({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: D.nM,
                    children: [
                        (0, n.jsx)(u.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, n.jsx)("input", {
                            type: "text",
                            value: P?.id ?? "",
                            onChange: (e) => $({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: D.fC,
                    children: [
                        (0, n.jsx)(c.D, {
                            onClick: V,
                            className: s()(D.qS, D.vk, { [D.R1]: B, [D._7]: G }),
                            children: (0, n.jsx)(u.E, {
                                variant: "eyebrow",
                                color: "Acked" === W ? void 0 : "always-white",
                                children: W,
                            }),
                        }),
                        null != O &&
                            (0, n.jsx)("div", {
                                className: s()(D.qS, D.k3),
                                children: (0, n.jsx)(u.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.D, {
                    onClick: async () => {
                        A(!0), await R(T, "trial"), i(), A(!1);
                    },
                    children: (0, n.jsx)(p.u, { size: "md", color: "currentColor", className: s()(D.Kk, D.IT) }),
                }),
                (0, n.jsx)("div", { className: s()(D.g4, { [D.VP]: j || S }), children: (0, n.jsx)(x.y, {}) }),
            ],
        })
    );
}
function B(e) {
    let { offer: t, offerOptions: a, forceRefetch: i } = e,
        [o, g] = l.useState(!1),
        [v, b] = l.useState(!1),
        [j, A] = l.useState(!1),
        [E, S] = l.useState(!1);
    l.useEffect(() => {
        j && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: N, expires_at: I, applied_at: T, discount_id: w, discount: O } = t,
        L =
            a.find((e) => {
                let { value: t } = e;
                return t === w;
            })?.label ?? "Unknown",
        M = null != I,
        P = null != I && new Date(I).getTime() < Date.now(),
        U = async () => {
            A(!0), M ? await B({ expiresAt: null }) : await (0, f.u1)(void 0, t), i(), A(!1);
        },
        B = async (e) => {
            let { expiresAt: t } = e;
            A(!0);
            try {
                await r.Bo.patch({
                    url: k.Rsh.UPDATE_USER_OFFER(N, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                i(), A(!1);
            }
        };
    l.useEffect(() => {
        if (o) {
            let e = setTimeout(() => {
                g(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (v) {
            let e = setTimeout(() => {
                b(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [o, v]);
    let G = "Active";
    return (
        P && (G = "Expired"),
        M && (G = "Acked"),
        (0, n.jsxs)("div", {
            className: s()(D.Nr, D.id),
            children: [
                (0, n.jsx)("div", {
                    className: s()(D.nM, D.S7),
                    children: (0, n.jsx)(d.D, { variant: "heading-lg/semibold", color: "text-default", children: L }),
                }),
                (0, n.jsxs)(c.D, {
                    className: s()(D.nM, D.QB),
                    onClick: () => {
                        (0, y.C)(N, () => g(!0));
                    },
                    children: [
                        (0, n.jsxs)(u.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", N] }),
                        o
                            ? (0, n.jsx)(m.A, { size: "md", color: "currentColor", className: s()(D.Kk, D.mK) })
                            : (0, n.jsx)(h.T, { size: "xs", color: "currentColor", className: D.Kk }),
                    ],
                }),
                (0, n.jsxs)(c.D, {
                    className: s()(D.nM, D.QB),
                    onClick: () => {
                        (0, y.C)(w, () => b(!0));
                    },
                    children: [
                        (0, n.jsxs)(u.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", w] }),
                        v
                            ? (0, n.jsx)(m.A, { size: "md", color: "currentColor", className: s()(D.Kk, D.mK) })
                            : (0, n.jsx)(h.T, { size: "xs", color: "currentColor", className: D.Kk }),
                    ],
                }),
                O?.amount != null &&
                    (0, n.jsx)("div", {
                        children: (0, n.jsxs)(u.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [O.amount, "% off"],
                        }),
                    }),
                (0, n.jsxs)("div", {
                    className: D.nM,
                    children: [
                        (0, n.jsxs)(u.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, _.A)(), "):"],
                        }),
                        (0, n.jsx)("input", {
                            type: "datetime-local",
                            value: (0, C.Xm)(I),
                            onChange: (e) =>
                                B({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: D.fC,
                    children: [
                        (0, n.jsx)(c.D, {
                            onClick: U,
                            className: s()(D.qS, D.vk, { [D.R1]: M, [D._7]: P }),
                            children: (0, n.jsx)(u.E, {
                                variant: "eyebrow",
                                color: "Acked" === G ? void 0 : "always-white",
                                children: G,
                            }),
                        }),
                        null != T &&
                            (0, n.jsx)("div", {
                                className: s()(D.qS, D.k3),
                                children: (0, n.jsx)(u.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.D, {
                    className: D.aR,
                    onClick: async () => {
                        A(!0), await R(N, "discount"), i(), A(!1);
                    },
                    children: (0, n.jsx)(p.u, { size: "md", color: "currentColor", className: s()(D.Kk, D.fy) }),
                }),
                (0, n.jsx)("div", { className: s()(D.g4, { [D.VP]: j || E }), children: (0, n.jsx)(x.y, {}) }),
            ],
        })
    );
}
function G() {
    let [e, t] = l.useState([]),
        [a, i] = l.useState([]),
        [s, r] = l.useState(),
        [c, m] = l.useState(),
        [h, p] = l.useState([]),
        [x, _] = l.useState([]),
        [y, C] = l.useState(!0),
        [E, I] = l.useState(10080),
        [R, G] = l.useState([]),
        { entitlements: F, deleteFractionalPremium: V, refreshEntitlementList: $ } = (0, N.o)();
    l.useEffect(() => {
        $();
    }, [$]),
        l.useEffect(() => {
            G(F.filter((e) => e.sourceType === k.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [F]),
        l.useEffect(() => {
            (0 === e.length || 0 === a.length || y) &&
                w().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        n = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), i(n), null == s && r(a[0].value), null == c && m(n[0].value);
                });
        }, [e, a, s, c, y]),
        l.useEffect(() => {
            y &&
                (C(!1),
                A.A.forceReset(),
                (0, f._D)(),
                L().then((e) => {
                    p(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        _(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [y]);
    let W = async () => {
            null != s && (await O(s, "trial"), C(!0));
        },
        H = async () => {
            null != c && (await O(c, "discount"), C(!0));
        },
        z = async () => {
            await M(), C(!0);
        },
        K = async () => {
            let e = new Date(Date.now() + 60 * E * 1e3).toISOString();
            await P(e), $();
        };
    return (0, n.jsx)(g.Ip, {
        className: T.nd,
        children: (0, n.jsxs)("div", {
            className: D.l$,
            children: [
                (0, n.jsxs)("section", {
                    className: D.uW,
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, n.jsxs)("div", {
                            className: D.Uo,
                            children: [
                                (0, n.jsx)(v.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: z,
                                }),
                                (0, n.jsx)(v.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, j.xB)(o.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, n.jsx)(v.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, j._N)(o.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, n.jsx)(v.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => C(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)("section", {
                    className: D.uW,
                    children: (0, n.jsxs)("div", {
                        className: D.bd,
                        children: [
                            (0, n.jsx)(b.l, {
                                label: "Create a Trial Offer",
                                options: e,
                                formatOption: (e) => {
                                    let { label: t, value: a } = e;
                                    return { label: t, value: a, id: a };
                                },
                                value: s,
                                placeholder: "Trial Type",
                                onSelectionChange: r,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(v.$, { variant: "primary", text: "Create", onClick: W }),
                        ],
                    }),
                }),
                (0, n.jsx)("section", {
                    className: D.uW,
                    children: (0, n.jsxs)("div", {
                        className: D.bd,
                        children: [
                            (0, n.jsx)(b.l, {
                                label: "Create a Discount Offer",
                                options: a,
                                formatOption: (e) => {
                                    let { label: t, value: a } = e;
                                    return { label: t, value: a, id: a };
                                },
                                value: c,
                                placeholder: "Discount Type",
                                onSelectionChange: m,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(v.$, { variant: "primary", text: "Create", onClick: H }),
                        ],
                    }),
                }),
                h.length > 0 &&
                    (0, n.jsxs)("section", {
                        className: D.uW,
                        children: [
                            (0, n.jsx)(d.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            h.map((t) => (0, n.jsx)(U, { offer: t, offerOptions: e, forceRefetch: () => C(!0) }, t.id)),
                        ],
                    }),
                x.length > 0 &&
                    (0, n.jsxs)("section", {
                        className: D.uW,
                        children: [
                            (0, n.jsx)(d.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            x.map((e) => (0, n.jsx)(B, { offer: e, offerOptions: a, forceRefetch: () => C(!0) }, e.id)),
                        ],
                    }),
                (0, n.jsx)("section", {
                    className: D.uW,
                    children: (0, n.jsxs)("div", {
                        className: D.bd,
                        children: [
                            (0, n.jsx)(b.l, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    { id: "5min", label: "5 minutes", value: 5 },
                                    { id: "1hour", label: "1 hour", value: 60 },
                                    { id: "1day", label: "1 day", value: 1440 },
                                    { id: "1week", label: "1 week", value: 10080 },
                                ],
                                value: E,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: I,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(v.$, { variant: "primary", text: "Create", onClick: K }),
                        ],
                    }),
                }),
                R.length > 0 &&
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(u.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, n.jsx)("div", {
                                children: R.map((e) =>
                                    (0, n.jsx)(S.I, { entitlement: e, active: !0, onDelete: () => V(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
