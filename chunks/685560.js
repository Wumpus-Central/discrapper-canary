n.d(t, { Z: () => N }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var a = n(200651),
    r = n(913527),
    l = n.n(r),
    i = n(442837),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(179360),
    u = n(621628),
    m = n(645041),
    x = n(713081),
    h = n(675478),
    p = n(581883),
    b = n(899667),
    f = n(430824),
    v = n(914010),
    g = n(981631),
    j = n(444048);
let _ = [o.z.GUILD_POWERUP_PERKS_COACHMARK, o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, o.z.GUILD_POWERUP_NOTIFICATION],
    y = [o.C.GUILD_POWERUP_LEVEL_1_COACHMARK, o.C.GUILD_POWERUP_LEVEL_2_COACHMARK, o.C.GUILD_POWERUP_LEVEL_3_COACHMARK, o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, o.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK],
    O = [o.C.ADOPT_CLAN_IDENTITY_NOTICE];
function C(e) {
    switch (e) {
        case o.C.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_1_COACHMARK';
        case o.C.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_2_COACHMARK';
        case o.C.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_3_COACHMARK';
        case o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK';
        case o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK';
        case o.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK';
        case o.C.ADOPT_CLAN_IDENTITY_NOTICE:
            return 'ADOPT_CLAN_IDENTITY_NOTICE';
    }
}
async function E(e, t, n) {
    await Promise.all(
        t.map((e) =>
            s.tn.patch({
                url: g.ANM.APPLIED_BOOST_MODIFY_END_DATE(e.id),
                body: n ? {} : { ends_at: l()().add(1, 'day') },
                rejectWithError: !0
            })
        )
    ),
        (0, d.C0)(e),
        (0, x.Fm)(e, !0);
}
function N() {
    var e;
    let t = (0, i.e7)([v.Z], () => v.Z.getGuildId()),
        n = (0, i.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getGuild(t)) ? void 0 : e.name;
        }),
        r = (0, i.Wu)([p.Z], () => [...y, ...O].filter((e) => null != t && (0, m.OY)(e, t))),
        l =
            null !=
            (e = (0, i.e7)([p.Z], () => {
                var e;
                return null == (e = p.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        s = (0, i.Wu)([b.Z], () => {
            var e;
            return null != t && null != (e = b.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        });
    if (null != t)
        return (0, a.jsxs)(c.zJl, {
            className: j.container,
            children: [
                (0, a.jsx)('div', {
                    className: j.section,
                    children: (0, a.jsx)(c.X6q, {
                        variant: 'heading-md/normal',
                        children: 'Current guild: '.concat(n)
                    })
                }),
                (0, a.jsxs)('div', {
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: j.header,
                            children: 'Reset Notification Indicators'
                        }),
                        (0, a.jsx)(c.zxk, {
                            onClick: () => {
                                (0, x.Qh)();
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: 'Set Warning State'
                        }),
                        (0, a.jsxs)('div', {
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    onClick: () => {
                                        E(t, s.slice(Math.floor(s.length / 2)), !1);
                                    },
                                    children: 'Set Half Boosts expiring in 1 day'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: () => {
                                        E(t, s, !0);
                                    },
                                    children: 'Reset End Date'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: j.header,
                            children: 'Reset User Level DCs'
                        }),
                        _.map((e) =>
                            (0, a.jsx)(
                                u.u,
                                {
                                    className: j.formSwitch,
                                    contents: l,
                                    content: o.z[e],
                                    onChange: () => {}
                                },
                                o.z[e]
                            )
                        )
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: j.header,
                            children: 'Reset Guild Level DCs'
                        }),
                        y.map((e) =>
                            (0, a.jsx)(
                                c.j7V,
                                {
                                    className: j.formSwitch,
                                    onChange: (n) => {
                                        n ? (0, m.Qd)(e, t, !1) : ((0, h.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, m.c7)(e, t));
                                    },
                                    value: r.includes(e),
                                    children: (0, a.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        children: C(e)
                                    })
                                },
                                e
                            )
                        )
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: j.section,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: 'Reset Server Tag Guild Level DCs'
                        }),
                        O.map((e) =>
                            (0, a.jsx)(
                                c.j7V,
                                {
                                    className: j.formSwitch,
                                    onChange: (n) => {
                                        n ? (0, m.Qd)(e, t, !1) : ((0, h.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, m.c7)(e, t));
                                    },
                                    children: (0, a.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        children: C(e)
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
