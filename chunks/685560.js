(a.d(t, { Z: () => P }), a(388685), a(410992), a(227481), a(730884), a(20464), a(341884), a(364341), a(629680), a(505025), a(918970), a(121784), a(644351), a(146733));
var n = a(255367),
    r = a(913527),
    l = a.n(r),
    i = a(442837),
    s = a(544891),
    o = a(704215),
    c = a(481060),
    d = a(179360),
    u = a(621628),
    m = a(667815),
    x = a(645041),
    p = a(713081),
    h = a(675478),
    b = a(581883),
    f = a(899667),
    v = a(430824),
    g = a(914010),
    j = a(981631),
    _ = a(444048);
let y = [o.z.GUILD_POWERUP_PERKS_COACHMARK, o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, o.z.GUILD_POWERUP_NOTIFICATION, o.z.GUILD_TAG_AVAILABLE_COACHMARK, o.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK],
    C = [o.C.GUILD_POWERUP_LEVEL_1_COACHMARK, o.C.GUILD_POWERUP_LEVEL_2_COACHMARK, o.C.GUILD_POWERUP_LEVEL_3_COACHMARK, o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK],
    O = [o.C.ADOPT_CLAN_IDENTITY_NOTICE],
    T = [o.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, o.z.VANITY_URL_POWERUP_ROLLBACK_MODAL, o.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER];
function N(e) {
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
        case o.C.ADOPT_CLAN_IDENTITY_NOTICE:
            return 'ADOPT_CLAN_IDENTITY_NOTICE';
    }
}
async function E(e, t, a) {
    (await Promise.all(
        t.map((e) =>
            s.tn.patch({
                url: j.ANM.APPLIED_BOOST_MODIFY_END_DATE(e.id),
                body: a ? {} : { ends_at: l()().add(1, 'day') },
                rejectWithError: !0
            })
        )
    ),
        (0, d.C0)(e),
        (0, p.Fm)(e, !0));
}
async function S(e) {
    await s.tn.post({
        url: j.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
        rejectWithError: !0
    });
}
function P() {
    var e;
    let t = (0, i.e7)([g.Z], () => g.Z.getGuildId()),
        a = (0, i.e7)([v.Z], () => {
            var e;
            return null == (e = v.Z.getGuild(t)) ? void 0 : e.name;
        }),
        r = (0, i.Wu)([b.Z], () => [...C, ...O].filter((e) => null != t && (0, x.OY)(e, t))),
        l =
            null !=
            (e = (0, i.e7)([b.Z], () => {
                var e;
                return null == (e = b.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        s = (0, i.Wu)([f.Z], () => {
            var e;
            return null != t && null != (e = f.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        });
    if (null != t)
        return (0, n.jsxs)(c.zJl, {
            className: _.container,
            children: [
                (0, n.jsx)('div', {
                    className: _.section,
                    children: (0, n.jsx)(c.X6q, {
                        variant: 'heading-md/normal',
                        children: 'Current guild: '.concat(a)
                    })
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: _.header,
                            children: 'Reset Notification Indicators'
                        }),
                        (0, n.jsx)(c.zxk, {
                            variant: 'primary',
                            text: 'Reset',
                            onClick: () => {
                                (0, p.Qh)();
                            }
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: _.header,
                            children: 'Reset Progress Bar State'
                        }),
                        (0, n.jsx)(c.zxk, {
                            variant: 'primary',
                            text: 'Reset',
                            onClick: m.q
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: 'Set Warning State'
                        }),
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Set Half Boosts expiring in 1 day',
                                    onClick: () => {
                                        E(t, s.slice(Math.floor(s.length / 2)), !1);
                                    }
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Reset End Date',
                                    onClick: () => {
                                        E(t, s, !0);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: _.header,
                            children: 'Reset User Level DCs'
                        }),
                        y.map((e) =>
                            (0, n.jsx)(
                                u.u,
                                {
                                    className: _.formSwitch,
                                    contents: l,
                                    content: o.z[e],
                                    onChange: () => {}
                                },
                                o.z[e]
                            )
                        )
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: _.header,
                            children: 'Reset Guild Level DCs'
                        }),
                        C.map((e) =>
                            (0, n.jsx)(
                                c.j7V,
                                {
                                    className: _.formSwitch,
                                    onChange: (a) => {
                                        a ? (0, x.Qd)(e, t, !1) : ((0, h.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, x.c7)(e, t));
                                    },
                                    value: r.includes(e),
                                    children: (0, n.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        children: N(e)
                                    })
                                },
                                e
                            )
                        )
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            children: 'Reset Server Tag Guild Level DCs'
                        }),
                        O.map((e) =>
                            (0, n.jsx)(
                                c.j7V,
                                {
                                    className: _.formSwitch,
                                    onChange: (a) => {
                                        a ? (0, x.Qd)(e, t, !1) : ((0, h.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, x.c7)(e, t));
                                    },
                                    value: r.includes(e),
                                    children: (0, n.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        children: N(e)
                                    })
                                },
                                e
                            )
                        )
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: _.header,
                            children: 'Reset Powerup Rollback DCs'
                        }),
                        T.map((e) =>
                            (0, n.jsx)(
                                u.u,
                                {
                                    className: _.formSwitch,
                                    contents: l,
                                    content: o.z[e],
                                    onChange: () => {}
                                },
                                o.z[e]
                            )
                        )
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: _.section,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'eyebrow',
                            className: _.header,
                            children: 'Send Powerups System Message'
                        }),
                        (0, n.jsx)(c.zxk, {
                            variant: 'primary',
                            text: 'Send System Message',
                            onClick: () => {
                                S(t);
                            }
                        })
                    ]
                })
            ]
        });
}
