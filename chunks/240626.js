n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(502572),
    c = n(732955),
    d = n(397927),
    u = n(775602),
    _ = n(531260),
    m = n(657516),
    A = n(983511),
    g = n(342744),
    E = n(87719),
    h = n(287809),
    p = n(166403),
    C = n(473145),
    x = n(927578),
    T = n(432334),
    I = n(101135),
    S = n(708030),
    f = n(652215),
    N = n(788868),
    b = n(985018),
    R = n(652804);
function v(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: r,
            onUncancel: a,
            premiumSubscription: l,
            useReducedMotion: u,
            fractionalState: _,
        } = e,
        m = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        A = (0, C.I5)(t),
        g = l?.isPaused === !0 && _ === N.xc.NONE,
        E = b.intl.string(b.t.mOWsF1);
    return (0, i.jsxs)(
        "li",
        {
            className: R.Hp,
            children: [
                (0, i.jsxs)("div", {
                    className: R.YL,
                    children: [
                        (0, i.jsx)(S.A, {
                            className: R.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: A,
                            useReducedMotion: u,
                        }),
                        A && null != l
                            ? (0, i.jsx)(d.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: b.intl.format(b.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != m
                              ? (0, i.jsx)(I.A, { cooldown: m.getTime() })
                              : (0, i.jsx)(d.Text, {
                                    className: R.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: b.intl.string(b.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: R.E7,
                    children: [
                        n &&
                            !A &&
                            (0, i.jsx)(o.A, {
                                shouldShow: g,
                                text: E,
                                "aria-label": E.toString(),
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: R.LB,
                                        children: (0, i.jsx)(c.QWc, {
                                            ...e,
                                            variant: "primary",
                                            text: b.intl.string(b.t.twFU3R),
                                            onClick: () => r(t),
                                            disabled: g,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        A &&
                            (0, i.jsx)(o.A, {
                                shouldShow: g,
                                text: E,
                                "aria-label": E.toString(),
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: R.LB,
                                        children: (0, i.jsx)(c.QWc, {
                                            ...e,
                                            variant: "primary",
                                            text: b.intl.string(b.t["2glQNp"]),
                                            onClick: () => a(t),
                                            disabled: g,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                    ],
                }),
            ],
        },
        t.id,
    );
}
function O(e) {
    (0, d.mMO)(async () => (t) => (0, i.jsx)(A.default, { ...t, guildBoostSlot: e }));
}
function j(e) {
    (0, d.mMO)(async () => (t) => (0, i.jsx)(g.default, { ...t, guildBoostSlotId: e.id }));
}
let P = function (e) {
    let t,
        n,
        r,
        { guildBoostSlots: c } = e,
        A = (0, l.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        g = A?.isPausedOrPausePending === !0,
        { fractionalState: I } = (0, _.A)(),
        S = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        P = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        y = I === N.xc.FP_SUB_PAUSED,
        L = g && !y,
        {
            appliedGuildBoostSlots: D,
            unappliedGuildBoostSlots: M,
            numActiveGuildBoostSlots: G,
            hasCooldownBoosts: U,
            allGuildBoostsAreOnCooldown: k,
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                c.forEach((r) => {
                    !(0, C.I5)(r) && n++,
                        r.isOnCooldown() ? (i = !0) : (s = !1),
                        null != r.premiumGuildSubscription ? e.push(r) : t.push(r);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: s,
                }
            );
        }, [c]),
        B = null != A ? x.Ay.getNumIncludedPremiumGuildSubscriptionSlots(A.planId) : 0,
        w = Math.max(0, B - D.length),
        H = G > B,
        V = B === c.length,
        F = V ? w : 1,
        Y = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < F; t++) e.push((0, i.jsx)(T.A, { className: R.YA, useReducedMotion: S }, t));
            return e;
        }, [F, S]),
        W = s.useMemo(() => M.find((e) => e.isAvailable()), [M]);
    if (0 === M.length) return null;
    let z = M.length;
    if (
        ((t = V
            ? b.intl.formatToPlainString(k ? b.t["3DW6Dc"] : b.t["/u15Qc"], { numUnappliedGuildBoostSlots: z })
            : b.intl.formatToPlainString(k ? b.t["3DW6Dc"] : b.t.BPadnO, { numUnappliedGuildBoostSlots: z })),
        x.Ay.isPremium(P))
    ) {
        let e = (e, t) =>
            (0, i.jsx)(
                d.DUT,
                {
                    className: R.nw,
                    tag: "span",
                    onClick: () => {
                        (0, E.e)();
                    },
                    children: e,
                },
                t,
            );
        n = k
            ? b.intl.format(b.t.omcpSE, { learnMoreHook: e })
            : b.intl.format(b.t["5mAkVi"], { numUnappliedGuildBoostSlots: z, learnMoreHook: e });
    } else
        n = k
            ? b.intl.string(b.t["8pcUZi"])
            : b.intl.formatToPlainString(b.t.Kaw82o, { numUnappliedGuildBoostSlots: z });
    return (
        (r = g && I === N.xc.NONE ? b.intl.string(b.t.mOWsF1) : b.intl.string(b.t.xr4m5B)),
        (0, i.jsx)("div", {
            className: R.iE,
            children: (0, i.jsxs)("div", {
                className: a()(R.Qs, [R.Yq]),
                children: [
                    (0, i.jsxs)("div", {
                        className: R.wx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: R.RW,
                                children: [
                                    (0, i.jsx)("div", { className: R.PS, children: Y }),
                                    (0, i.jsxs)("div", {
                                        className: R.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(d.Heading, {
                                                className: R.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, i.jsx)(d.Text, {
                                                className: R.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: R.di,
                                children: (0, i.jsx)(o.A, {
                                    shouldShow: null == W || L,
                                    text: r,
                                    "aria-label": r.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(d.Button, {
                                            variant: "primary",
                                            text: b.intl.string(b.t.BMx1iy),
                                            ...e,
                                            disabled: null == W || L,
                                            onClick:
                                                null != W
                                                    ? () => {
                                                          (0, d.mMO)(
                                                              async () => (e) =>
                                                                  (0, i.jsx)(m.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [W],
                                                                      locationSection: f.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!V || U) &&
                        (0, i.jsx)("ul", {
                            className: R.LU,
                            children: M.map((e) =>
                                (0, i.jsx)(
                                    v,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: H,
                                        onCancel: O,
                                        onUncancel: j,
                                        premiumSubscription: A,
                                        useReducedMotion: S,
                                        fractionalState: I,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                ],
            }),
        })
    );
};
