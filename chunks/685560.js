n.d(t, { Z: () => p });
var r = n(200651),
    a = n(442837),
    l = n(704215),
    i = n(481060),
    o = n(645041),
    s = n(713081),
    c = n(675478),
    d = n(581883),
    u = n(430824),
    m = n(914010),
    x = n(444048);
let h = [l.C.GUILD_POWERUP_LEVEL_1_COACHMARK, l.C.GUILD_POWERUP_LEVEL_2_COACHMARK, l.C.GUILD_POWERUP_LEVEL_3_COACHMARK, l.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, l.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, l.C.GUILD_POWERUP_BOTH_SKU_PURCHASE_COACHMARK];
function p() {
    let e = (0, a.e7)([m.Z], () => m.Z.getGuildId()),
        t = (0, a.e7)([u.Z], () => {
            var t;
            return null == (t = u.Z.getGuild(e)) ? void 0 : t.name;
        }),
        n = (0, a.Wu)([d.Z], () => h.map((t) => null != e && (0, o.OY)(t, e)));
    if (null != e)
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsx)(i.X6q, {
                    variant: 'heading-md/normal',
                    children: 'Current guild: '.concat(t)
                }),
                (0, r.jsxs)('div', {
                    className: x.section,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'eyebrow',
                            children: 'Reset Notification Indicators'
                        }),
                        (0, r.jsx)(i.zxk, {
                            onClick: () => {
                                (0, s.Qh)();
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: x.section,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'eyebrow',
                            children: 'Reset Guild Level DCs'
                        }),
                        h.map((t, a) =>
                            (0, r.jsxs)(
                                'div',
                                {
                                    children: [
                                        (0, r.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            children: (function (e) {
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
                                                }
                                            })(t)
                                        }),
                                        (0, r.jsx)(i.rsf, {
                                            onChange: (n) => {
                                                n ? (0, o.Qd)(t, e, !1) : ((0, c.Z1)(l.z.GUILD_POWERUP_NOTIFICATION), (0, o.c7)(t, e));
                                            },
                                            checked: !0 === n[a]
                                        })
                                    ]
                                },
                                t
                            )
                        )
                    ]
                })
            ]
        });
}
