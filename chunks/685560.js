n.d(t, { Z: () => I }), n(388685);
var a = n(951288),
    r = n(913527),
    l = n.n(r),
    i = n(442837),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(179360),
    u = n(87454),
    m = n(667815),
    x = n(645041),
    h = n(744993),
    p = n(713081),
    f = n(675478),
    v = n(581883),
    b = n(899667),
    g = n(430824),
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
    N = [
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
function O(e) {
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
async function S(e, t, n) {
    await Promise.all(
        t.map((e) =>
            s.tn.patch({
                url: _.ANM.APPLIED_BOOST_MODIFY_END_DATE(e.id),
                body: n ? {} : { ends_at: l()().add(1, "day") },
                rejectWithError: !0,
            }),
        ),
    ),
        (0, d.C0)(e),
        (0, p.Fm)(e, !0);
}
async function P(e) {
    await s.tn.post({
        url: _.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
        rejectWithError: !0,
    });
}
function I() {
    let e = (0, i.e7)([j.Z], () => j.Z.getGuildId()),
        t = (0, i.e7)([g.Z], () => {
            var t;
            return null == (t = g.Z.getGuild(e)) ? void 0 : t.name;
        }),
        n = (0, i.Wu)([v.Z], () => [...N, ...E].filter((t) => null != e && (0, x.OY)(t, e))),
        r = (0, i.Wu)([b.Z], () => {
            var t;
            return null != e && null != (t = b.Z.getAppliedGuildBoostsForGuild(e)) ? t : [];
        });
    if (null != e)
        return (0, a.jsxs)(c.zJl, {
            className: y.container,
            children: [
                (0, a.jsx)("div", {
                    className: y.section,
                    children: (0, a.jsx)(c.X6q, {
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
                        (0, a.jsx)(c.zxk, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, p.Qh)();
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
                        (0, a.jsx)(c.zxk, {
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
                                (0, a.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        S(e, r.slice(Math.floor(r.length / 2)), !1);
                                    },
                                }),
                                (0, a.jsx)(c.zxk, {
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
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            className: y.header,
                            children: "Reset User Level DCs",
                        }),
                        C.map((e) =>
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
                            children: "Reset Guild Level DCs",
                        }),
                        N.map((t) =>
                            (0, a.jsx)(
                                c.j7V,
                                {
                                    className: y.formSwitch,
                                    onChange: (n) => {
                                        n
                                            ? (0, x.Qd)(t, e, !1)
                                            : ((0, f.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, x.c7)(t, e));
                                    },
                                    value: n.includes(t),
                                    children: (0, a.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        children: O(t),
                                    }),
                                },
                                t,
                            ),
                        ),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            children: "Reset Server Tag Guild Level DCs",
                        }),
                        E.map((t) =>
                            (0, a.jsx)(
                                c.j7V,
                                {
                                    className: y.formSwitch,
                                    onChange: (n) => {
                                        n
                                            ? (0, x.Qd)(t, e, !1)
                                            : ((0, f.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, x.c7)(t, e));
                                    },
                                    value: n.includes(t),
                                    children: (0, a.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        children: O(t),
                                    }),
                                },
                                t,
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
                        (0, a.jsx)(c.zxk, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                P(e);
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(c.zxk, {
                    variant: "primary",
                    text: "Reset Portkey ToS",
                    onClick: () => {
                        (0, h.g$)(!1);
                    },
                }),
            ],
        });
}
