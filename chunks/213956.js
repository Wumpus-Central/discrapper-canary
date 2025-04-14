n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(605236),
    c = n(874993),
    d = n(768762),
    u = n(430824),
    m = n(999382),
    g = n(84613),
    p = n(392885),
    h = n(740903),
    f = n(464610),
    x = n(733629),
    b = n(598622),
    j = n(921944),
    N = n(388032),
    _ = n(296205);
function v() {
    let e,
        t = (0, s.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
        v = (0, s.e7)([p.Z], () => p.Z.getCurrentPage());
    if (
        (i.useEffect(() => {
            (0, o.EW)(l.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: j.L.AUTO });
        }, []),
        null == n)
    )
        return null;
    let O = (0, b.Q)(n);
    switch (v) {
        case h.u.OVERVIEW:
            e = (0, r.jsx)(f.Z, { guild: n });
            break;
        case h.u.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(x.Z, {
                title: N.NW.string(N.t['53eF5u']),
                settings: O[h.u.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case h.u.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(x.Z, {
                title: N.NW.string(N.t.O0SfFx),
                settings: O[h.u.DM_AND_SPAM_PROTECTION]
            });
            break;
        case h.u.AUTOMOD:
            e = (0, r.jsx)(c.Z, { guildId: n.id });
            break;
        case h.u.PERMISSIONS:
            e = (0, r.jsx)(x.Z, {
                title: N.NW.string(N.t.BXoNiY),
                settings: O[h.u.PERMISSIONS]
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            v !== h.u.OVERVIEW &&
                (0, r.jsxs)(a.zxk, {
                    className: _.back,
                    innerClassName: _.backButton,
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.MIN,
                    onClick: () => {
                        (0, g.K)(h.u.OVERVIEW);
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            className: _.__invalid_arrow,
                            direction: d.Z.Directions.LEFT
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            color: 'interactive-normal',
                            children: N.NW.string(N.t['13/7kZ'])
                        })
                    ]
                }),
            e
        ]
    });
}
