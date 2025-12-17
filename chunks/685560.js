n.d(t, { Z: () => T }), n(388685);
var a = n(54381),
    r = n(913527),
    l = n.n(r),
    i = n(442837),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(179360),
    u = n(87454),
    m = n(667815),
    p = n(645041),
    h = n(905551),
    f = n(713081),
    x = n(675478),
    b = n(581883),
    g = n(899667),
    v = n(430824),
    j = n(914010),
    y = n(65212),
    C = n(981631),
    _ = n(379481);
async function S(e, t, n) {
    await s.tn.patch({
        url: C.ANM.APPLIED_BOOST_MODIFY_END_DATE,
        body: {
            applied_boost_ids: t.map((e) => e.id),
            ends_at: n ? null : l()().add(1, "day"),
        },
        rejectWithError: !0,
    }),
        (0, d.C0)(e),
        (0, f.BN)(e, !0);
}
async function E(e) {
    await s.tn.post({
        url: C.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
        rejectWithError: !0,
    });
}
function T() {
    let e = (0, i.e7)([j.Z], () => j.Z.getGuildId()),
        t = (0, i.e7)([v.Z], () => {
            var t;
            return null == (t = v.Z.getGuild(e)) ? void 0 : t.name;
        }),
        n = (0, i.Wu)([b.Z], () => [...y.d9, ...y.QT].filter((t) => null != e && (0, p.OY)(t, e))),
        r = (0, i.Wu)([g.Z], () => {
            var t;
            return null != e && null != (t = g.Z.getAppliedGuildBoostsForGuild(e)) ? t : [];
        });
    if (null != e)
        return (0, a.jsxs)(c.zJl, {
            className: _.container,
            children: [
                (0, a.jsx)("div", {
                    className: _.section,
                    children: (0, a.jsx)(c.Heading, {
                        variant: "heading-md/normal",
                        children: "Current guild: ".concat(t),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: _.header,
                            children: "Reset Notification Indicators",
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, f.Qh)();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: _.header,
                            children: "Reset Progress Bar State",
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: "Reset",
                            onClick: m.q,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            children: "Set Warning State",
                        }),
                        (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        S(e, r.slice(Math.floor(r.length / 2)), !1);
                                    },
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        S(e, r, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: _.header,
                            children: "Reset User Level DCs",
                        }),
                        (0, a.jsx)(c.Kqy, {
                            gap: 16,
                            children: y.Uz.map((e) =>
                                (0, a.jsx)(
                                    u.Z,
                                    {
                                        className: _.formSwitch,
                                        content: o.z[e],
                                    },
                                    o.z[e],
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: _.section,
                    children: (0, a.jsx)(c.C3N, {
                        label: "Reset Guild Level DCs",
                        children: y.d9.map((t) =>
                            (0, a.jsx)(
                                c.rsf,
                                {
                                    label: (0, y.eq)(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, p.Qd)(t, e, !1)
                                            : ((0, x.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: _.section,
                    children: (0, a.jsx)(c.C3N, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: y.QT.map((t) =>
                            (0, a.jsx)(
                                c.rsf,
                                {
                                    label: (0, y.eq)(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, p.Qd)(t, e, !1)
                                            : ((0, x.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: _.header,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        y.d3.map((e) =>
                            (0, a.jsx)(
                                u.Z,
                                {
                                    className: _.formSwitch,
                                    content: o.z[e],
                                },
                                o.z[e],
                            ),
                        ),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: _.header,
                            children: "Send Powerups System Message",
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                E(e);
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(c.Button, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, h.WY)(!1);
                    },
                }),
            ],
        });
}
