n.d(t, { Z: () => g }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r = n(200651),
    a = n(442837),
    l = n(704215),
    i = n(481060),
    o = n(621628),
    s = n(645041),
    c = n(713081),
    d = n(675478),
    u = n(581883),
    m = n(430824),
    x = n(914010),
    h = n(444048);
let p = [l.z.GUILD_POWERUP_PERKS_COACHMARK, l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, l.z.GUILD_POWERUP_NOTIFICATION],
    b = [l.C.GUILD_POWERUP_LEVEL_1_COACHMARK, l.C.GUILD_POWERUP_LEVEL_2_COACHMARK, l.C.GUILD_POWERUP_LEVEL_3_COACHMARK, l.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, l.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, l.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK],
    f = [l.C.ADOPT_CLAN_IDENTITY_NOTICE];
function _(e) {
    switch (e) {
        case l.C.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_1_COACHMARK';
        case l.C.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_2_COACHMARK';
        case l.C.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return 'GUILD_POWERUP_LEVEL_3_COACHMARK';
        case l.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK';
        case l.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK';
        case l.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK:
            return 'GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK';
        case l.C.ADOPT_CLAN_IDENTITY_NOTICE:
            return 'ADOPT_CLAN_IDENTITY_NOTICE';
    }
}
function g() {
    var e;
    let t = (0, a.e7)([x.Z], () => x.Z.getGuildId()),
        n = (0, a.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getGuild(t)) ? void 0 : e.name;
        }),
        g = (0, a.Wu)([u.Z], () => [...b, ...f].filter((e) => null != t && (0, s.OY)(e, t))),
        v =
            null !=
            (e = (0, a.e7)([u.Z], () => {
                var e;
                return null == (e = u.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array();
    if (null != t)
        return (0, r.jsxs)(i.zJl, {
            className: h.container,
            children: [
                (0, r.jsx)('div', {
                    className: h.section,
                    children: (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/normal',
                        children: 'Current guild: '.concat(n)
                    })
                }),
                (0, r.jsxs)('div', {
                    className: h.section,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'eyebrow',
                            className: h.header,
                            children: 'Reset Notification Indicators'
                        }),
                        (0, r.jsx)(i.zxk, {
                            onClick: () => {
                                (0, c.Qh)();
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: h.section,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'eyebrow',
                            className: h.header,
                            children: 'Reset User Level DCs'
                        }),
                        p.map((e) =>
                            (0, r.jsx)(
                                o.u,
                                {
                                    className: h.formSwitch,
                                    contents: v,
                                    content: l.z[e],
                                    onChange: () => {}
                                },
                                l.z[e]
                            )
                        )
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: h.section,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'eyebrow',
                            className: h.header,
                            children: 'Reset Guild Level DCs'
                        }),
                        b.map((e) =>
                            (0, r.jsx)(
                                i.j7V,
                                {
                                    className: h.formSwitch,
                                    onChange: (n) => {
                                        n ? (0, s.Qd)(e, t, !1) : ((0, d.Z1)(l.z.GUILD_POWERUP_NOTIFICATION), (0, s.c7)(e, t));
                                    },
                                    value: g.includes(e),
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/normal',
                                        children: _(e)
                                    })
                                },
                                e
                            )
                        )
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: h.section,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'eyebrow',
                            children: 'Reset Server Tag Guild Level DCs'
                        }),
                        f.map((e) =>
                            (0, r.jsx)(
                                i.j7V,
                                {
                                    className: h.formSwitch,
                                    onChange: (n) => {
                                        n ? (0, s.Qd)(e, t, !1) : ((0, d.Z1)(l.z.GUILD_POWERUP_NOTIFICATION), (0, s.c7)(e, t));
                                    },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/normal',
                                        children: _(e)
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
