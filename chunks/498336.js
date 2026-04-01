n.d(t, { A: () => T });
var a = n(627968),
    i = n(989349),
    s = n.n(i),
    l = n(311907),
    r = n(562465),
    o = n(554146),
    d = n(397927),
    c = n(923408),
    u = n(387265),
    m = n(230135),
    h = n(45780),
    x = n(665171),
    p = n(942975),
    g = n(594061),
    _ = n(617617),
    f = n(859241),
    v = n(71393),
    b = n(967198),
    j = n(642020),
    A = n(652215),
    C = n(819895);
async function y(e, t, n) {
    await r.Bo.patch({
        url: A.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: n ? null : s()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, c.VU)(e),
        (0, p.Xd)(e, !0);
}
async function S(e) {
    await r.Bo.post({ url: A.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function T() {
    let e = (0, l.bG)([b.A], () => b.A.getGuildId()),
        t = (0, l.bG)([v.A], () => v.A.getGuild(e)?.name),
        n = (0, l.yK)([_.A], () => [...j.DX, ...j.gh].filter((t) => null != e && (0, h.zs)(t, e))),
        i = (0, l.yK)([f.A], () => (null != e ? (f.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, a.jsxs)(d.IpV, {
            className: C.kL,
            children: [
                (0, a.jsx)("div", {
                    className: C.uW,
                    children: (0, a.jsx)(d.Heading, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, a.jsxs)("div", {
                    className: C.uW,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            className: C.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, p.qM)();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: C.uW,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            className: C.wx,
                            children: "Reset Progress Bar State",
                        }),
                        (0, a.jsx)(d.Button, { variant: "primary", text: "Reset", onClick: m.O }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: C.uW,
                    children: [
                        (0, a.jsx)(d.Text, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        y(e, i.slice(Math.floor(i.length / 2)), !1);
                                    },
                                }),
                                (0, a.jsx)(d.Button, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        y(e, i, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: C.uW,
                    children: [
                        (0, a.jsx)(d.Text, { variant: "eyebrow", className: C.wx, children: "Reset User Level DCs" }),
                        (0, a.jsx)(d.BJc, {
                            gap: 16,
                            children: j.tB.map((e) => (0, a.jsx)(u.A, { className: C.z6, content: o.M[e] }, o.M[e])),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: C.uW,
                    children: (0, a.jsx)(d.nVY, {
                        label: "Reset Guild Level DCs",
                        children: j.DX.map((t) =>
                            (0, a.jsx)(
                                d.dOG,
                                {
                                    label: (0, j.Qi)(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, h._$)(t, e, !1)
                                            : ((0, g._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, h.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: C.uW,
                    children: (0, a.jsx)(d.nVY, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: j.gh.map((t) =>
                            (0, a.jsx)(
                                d.dOG,
                                {
                                    label: (0, j.Qi)(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, h._$)(t, e, !1)
                                            : ((0, g._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, h.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: C.uW,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            className: C.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        j.cC.map((e) => (0, a.jsx)(u.A, { className: C.z6, content: o.M[e] }, o.M[e])),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: C.uW,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "eyebrow",
                            className: C.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                S(e);
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(d.Button, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, x.Wp)(!1);
                    },
                }),
            ],
        });
}
