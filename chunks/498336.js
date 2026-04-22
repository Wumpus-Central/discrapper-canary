a.d(t, { A: () => w });
var n = a(627968),
    l = a(989349),
    i = a.n(l),
    s = a(311907),
    r = a(562465),
    o = a(554146),
    d = a(573613),
    c = a(534514),
    u = a(834730),
    m = a(821609),
    h = a(331322),
    p = a(270003),
    x = a(243721),
    g = a(923408),
    v = a(387265),
    b = a(230135),
    _ = a(45780),
    f = a(665171),
    j = a(942975),
    A = a(594061),
    y = a(617617),
    C = a(859241),
    E = a(71393),
    S = a(967198),
    N = a(642020),
    k = a(652215),
    I = a(41255);
async function D(e, t, a) {
    await r.Bo.patch({
        url: k.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : i()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, g.VU)(e),
        (0, j.Xd)(e, !0);
}
async function T(e) {
    await r.Bo.post({ url: k.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function w() {
    let e = (0, s.bG)([S.A], () => S.A.getGuildId()),
        t = (0, s.bG)([E.A], () => E.A.getGuild(e)?.name),
        a = (0, s.yK)([y.A], () => [...N.DX, ...N.gh].filter((t) => null != e && (0, _.zs)(t, e))),
        l = (0, s.yK)([C.A], () => (null != e ? (C.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, n.jsxs)(d.Ip, {
            className: I.kL,
            children: [
                (0, n.jsx)("div", {
                    className: I.uW,
                    children: (0, n.jsx)(c.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, n.jsxs)("div", {
                    className: I.uW,
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "eyebrow",
                            className: I.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, n.jsx)(m.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, j.qM)();
                            },
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: I.uW,
                    children: [
                        (0, n.jsx)(u.E, { variant: "eyebrow", className: I.wx, children: "Reset Progress Bar State" }),
                        (0, n.jsx)(m.$, { variant: "primary", text: "Reset", onClick: b.O }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: I.uW,
                    children: [
                        (0, n.jsx)(u.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        D(e, l.slice(Math.floor(l.length / 2)), !1);
                                    },
                                }),
                                (0, n.jsx)(m.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        D(e, l, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: I.uW,
                    children: [
                        (0, n.jsx)(u.E, { variant: "eyebrow", className: I.wx, children: "Reset User Level DCs" }),
                        (0, n.jsx)(h.B, {
                            gap: 16,
                            children: N.tB.map((e) => (0, n.jsx)(v.A, { className: I.z6, content: o.M[e] }, o.M[e])),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: I.uW,
                    children: (0, n.jsx)(p.n, {
                        label: "Reset Guild Level DCs",
                        children: N.DX.map((t) =>
                            (0, n.jsx)(
                                x.d,
                                {
                                    label: (0, N.Qi)(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, _._$)(t, e, !1)
                                            : ((0, A._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, _.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: I.uW,
                    children: (0, n.jsx)(p.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: N.gh.map((t) =>
                            (0, n.jsx)(
                                x.d,
                                {
                                    label: (0, N.Qi)(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, _._$)(t, e, !1)
                                            : ((0, A._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, _.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: I.uW,
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "eyebrow",
                            className: I.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        N.cC.map((e) => (0, n.jsx)(v.A, { className: I.z6, content: o.M[e] }, o.M[e])),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: I.uW,
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "eyebrow",
                            className: I.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, n.jsx)(m.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                T(e);
                            },
                        }),
                    ],
                }),
                (0, n.jsx)(m.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, f.Wp)(!1);
                    },
                }),
            ],
        });
}
