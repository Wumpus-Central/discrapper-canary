n.d(t, { Z: () => I }), n(388685);
var a = n(54381),
    l = n(913527),
    i = n.n(l),
    r = n(442837),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(179360),
    u = n(87454),
    m = n(667815),
    p = n(645041),
    h = n(905551),
    x = n(713081),
    f = n(675478),
    g = n(581883),
    b = n(899667),
    v = n(430824),
    j = n(914010),
    _ = n(981631),
    y = n(617659);
let C = [
        o.z.GUILD_POWERUP_PERKS_COACHMARK,
        o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        o.z.GUILD_POWERUP_NOTIFICATION,
        o.z.GUILD_TAG_AVAILABLE_COACHMARK,
        o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    S = [
        o.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
        o.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
        o.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
        o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    E = [o.C.ADOPT_CLAN_IDENTITY_NOTICE],
    T = [
        o.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        o.z.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        o.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function N(e) {
    switch (e) {
        case o.C.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case o.C.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case o.C.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case o.C.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
    }
}
async function O(e, t, n) {
    await s.tn.patch({
        url: _.ANM.APPLIED_BOOST_MODIFY_END_DATE,
        body: {
            applied_boost_ids: t.map((e) => e.id),
            ends_at: n ? null : i()().add(1, "day"),
        },
        rejectWithError: !0,
    }),
        (0, d.C0)(e),
        (0, x.BN)(e, !0);
}
async function P(e) {
    await s.tn.post({
        url: _.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
        rejectWithError: !0,
    });
}
function I() {
    let e = (0, r.e7)([j.Z], () => j.Z.getGuildId()),
        t = (0, r.e7)([v.Z], () => {
            var t;
            return null == (t = v.Z.getGuild(e)) ? void 0 : t.name;
        }),
        n = (0, r.Wu)([g.Z], () => [...S, ...E].filter((t) => null != e && (0, p.OY)(t, e))),
        l = (0, r.Wu)([b.Z], () => {
            var t;
            return null != e && null != (t = b.Z.getAppliedGuildBoostsForGuild(e)) ? t : [];
        });
    if (null != e)
        return (0, a.jsxs)(c.zJl, {
            className: y.container,
            children: [
                (0, a.jsx)("div", {
                    className: y.section,
                    children: (0, a.jsx)(c.Heading, {
                        variant: "heading-md/normal",
                        children: "Current guild: ".concat(t),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: y.header,
                            children: "Reset Notification Indicators",
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, x.Qh)();
                            },
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: y.header,
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
                    className: y.section,
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
                                        O(e, l.slice(Math.floor(l.length / 2)), !1);
                                    },
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        O(e, l, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: y.header,
                            children: "Reset User Level DCs",
                        }),
                        (0, a.jsx)(c.Kqy, {
                            gap: 16,
                            children: C.map((e) =>
                                (0, a.jsx)(
                                    u.Z,
                                    {
                                        className: y.formSwitch,
                                        content: o.z[e],
                                    },
                                    o.z[e],
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: y.section,
                    children: (0, a.jsx)(c.C3N, {
                        label: "Reset Guild Level DCs",
                        children: S.map((t) =>
                            (0, a.jsx)(
                                c.rsf,
                                {
                                    label: N(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, p.Qd)(t, e, !1)
                                            : ((0, f.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, a.jsx)("div", {
                    className: y.section,
                    children: (0, a.jsx)(c.C3N, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: E.map((t) =>
                            (0, a.jsx)(
                                c.rsf,
                                {
                                    label: N(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, p.Qd)(t, e, !1)
                                            : ((0, f.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: y.header,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        T.map((e) =>
                            (0, a.jsx)(
                                u.Z,
                                {
                                    className: y.formSwitch,
                                    content: o.z[e],
                                },
                                o.z[e],
                            ),
                        ),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: y.header,
                            children: "Send Powerups System Message",
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                P(e);
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
