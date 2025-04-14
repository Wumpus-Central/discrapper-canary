n.d(t, { Z: () => S }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r = n(200651),
    a = n(913527),
    l = n.n(a),
    i = n(442837),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(179360),
    u = n(621628),
    m = n(645041),
    x = n(713081),
    h = n(675478),
    p = n(581883),
    b = n(899667),
    f = n(430824),
    _ = n(914010),
    g = n(981631),
    v = n(444048);
let j = [s.z.GUILD_POWERUP_PERKS_COACHMARK, s.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, s.z.GUILD_POWERUP_NOTIFICATION],
    y = [s.C.GUILD_POWERUP_LEVEL_1_COACHMARK, s.C.GUILD_POWERUP_LEVEL_2_COACHMARK, s.C.GUILD_POWERUP_LEVEL_3_COACHMARK, s.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, s.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, s.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK],
    C = [s.C.ADOPT_CLAN_IDENTITY_NOTICE];
function O(e) {
    switch (e) {
        case s.C.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_1_COACHMARK';
        case s.C.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_2_COACHMARK';
        case s.C.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_3_COACHMARK';
        case s.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK';
        case s.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK';
        case s.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK';
        case s.C.ADOPT_CLAN_IDENTITY_NOTICE:
            return 'ADOPT_CLAN_IDENTITY_NOTICE';
    }
}
async function N(e, t, n) {
    await Promise.all(
        t.map((e) =>
            o.tn.patch({
                url: g.ANM.APPLIED_BOOST_MODIFY_END_DATE(e.id),
                body: n ? {} : { ends_at: l()().add(1, 'day') },
                rejectWithError: !0
            })
        )
    ),
        (0, d.C0)(e),
        (0, x.Fm)(e, !0);
}
function S() {
    var e;
    let t = (0, i.e7)([_.Z], () => _.Z.getGuildId()),
        n = (0, i.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getGuild(t)) ? void 0 : e.name;
        }),
        a = (0, i.Wu)([p.Z], () => [...y, ...C].filter((e) => null != t && (0, m.OY)(e, t))),
        l =
            null !=
            (e = (0, i.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        o = (0, i.Wu)([b.Z], () => {
            var e;
            return null != t && null != (e = b.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        });
    if (null != t)
        return (0, r.jsxs)(c.zJl, {
            className: v.container,
            children: [
                (0, r.jsx)('div', {
                    className: v.section,
                    children: (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/normal',
                        children: 'Current guild: '.concat(n)
                    })
                }),
                (0, r.jsxs)('div', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: v.header,
                            children: 'Reset Notification Indicators'
                        }),
                        (0, r.jsx)(c.zxk, {
                            onClick: () => {
                                (0, x.Qh)();
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: 'Set Warning State'
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    onClick: () => {
                                        N(t, o.slice(Math.floor(o.length / 2)), !1);
                                    },
                                    children: 'Set Half Boosts expiring in 1 day'
                                }),
                                (0, r.jsx)(c.zxk, {
                                    onClick: () => {
                                        N(t, o, !0);
                                    },
                                    children: 'Reset End Date'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: v.header,
                            children: 'Reset User Level DCs'
                        }),
                        j.map((e) =>
                            (0, r.jsx)(
                                u.u,
                                {
                                    className: v.formSwitch,
                                    contents: l,
                                    content: s.z[e],
                                    onChange: () => {}
                                },
                                s.z[e]
                            )
                        )
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: v.header,
                            children: 'Reset Guild Level DCs'
                        }),
                        y.map((e) =>
                            (0, r.jsx)(
                                c.j7V,
                                {
                                    className: v.formSwitch,
                                    onChange: (n) => {
                                        n ? (0, m.Qd)(e, t, !1) : ((0, h.Z1)(s.z.GUILD_POWERUP_NOTIFICATION), (0, m.c7)(e, t));
                                    },
                                    value: a.includes(e),
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        children: O(e)
                                    })
                                },
                                e
                            )
                        )
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: v.section,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: 'Reset Server Tag Guild Level DCs'
                        }),
                        C.map((e) =>
                            (0, r.jsx)(
                                c.j7V,
                                {
                                    className: v.formSwitch,
                                    onChange: (n) => {
                                        n ? (0, m.Qd)(e, t, !1) : ((0, h.Z1)(s.z.GUILD_POWERUP_NOTIFICATION), (0, m.c7)(e, t));
                                    },
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        children: O(e)
                                    })
                                },
                                e
                            )
                        )
                    ]
                })
            ]
        });
}
