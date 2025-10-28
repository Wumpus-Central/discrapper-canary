n.d(t, { Z: () => I }), n(388685);
var a = n(951288),
    r = n(913527),
    l = n.n(r),
    i = n(442837),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(179360),
    u = n(87454),
    m = n(667815),
    p = n(645041),
    h = n(905551),
    x = n(713081),
    f = n(675478),
    b = n(581883),
    g = n(899667),
    v = n(430824),
    j = n(914010),
    _ = n(981631),
    y = n(617659);
let C = [
        s.z.GUILD_POWERUP_PERKS_COACHMARK,
        s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        s.z.GUILD_POWERUP_NOTIFICATION,
        s.z.GUILD_TAG_AVAILABLE_COACHMARK,
        s.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    S = [
        s.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
        s.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
        s.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
        s.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        s.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    E = [s.C.ADOPT_CLAN_IDENTITY_NOTICE],
    O = [
        s.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        s.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function T(e) {
    switch (e) {
        case s.C.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case s.C.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case s.C.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case s.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case s.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case s.C.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
    }
}
async function N(e, t, n) {
    await Promise.all(
        t.map((e) =>
            o.tn.patch({
                url: _.ANM.APPLIED_BOOST_MODIFY_END_DATE(e.id),
                body: n ? {} : { ends_at: l()().add(1, "day") },
                rejectWithError: !0,
            }),
        ),
    ),
        (0, d.C0)(e),
        (0, x.BN)(e, !0);
}
async function P(e) {
    await o.tn.post({
        url: _.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
        rejectWithError: !0,
    });
}
function I() {
    let e = (0, i.e7)([j.Z], () => j.Z.getGuildId()),
        t = (0, i.e7)([v.Z], () => {
            var t;
            return null == (t = v.Z.getGuild(e)) ? void 0 : t.name;
        }),
        n = (0, i.Wu)([b.Z], () => [...S, ...E].filter((t) => null != e && (0, p.OY)(t, e))),
        r = (0, i.Wu)([g.Z], () => {
            var t;
            return null != e && null != (t = g.Z.getAppliedGuildBoostsForGuild(e)) ? t : [];
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
                                        N(e, r.slice(Math.floor(r.length / 2)), !1);
                                    },
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        N(e, r, !0);
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
                                        content: s.z[e],
                                    },
                                    s.z[e],
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
                                    label: T(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, p.Qd)(t, e, !1)
                                            : ((0, f.Z1)(s.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e));
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
                                    label: T(t),
                                    checked: n.includes(t),
                                    onChange: (n) => {
                                        n
                                            ? (0, p.Qd)(t, e, !1)
                                            : ((0, f.Z1)(s.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e));
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
                        O.map((e) =>
                            (0, a.jsx)(
                                u.Z,
                                {
                                    className: y.formSwitch,
                                    content: s.z[e],
                                },
                                s.z[e],
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
