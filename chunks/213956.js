n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(704215),
    l = n(481060),
    o = n(605236),
    c = n(874993),
    d = n(768762),
    u = n(430824),
    m = n(999382),
    p = n(84613),
    g = n(392885),
    h = n(740903),
    f = n(464610),
    b = n(733629),
    x = n(598622),
    j = n(921944),
    N = n(388032),
    v = n(412856);
function _() {
    let e;
    let t = (0, s.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
        _ = (0, s.e7)([g.Z], () => g.Z.getCurrentPage());
    if (
        (i.useEffect(() => {
            (0, o.EW)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: j.L.AUTO });
        }, []),
        null == n)
    )
        return null;
    let O = (0, x.Q)(n);
    switch (_) {
        case h.u.OVERVIEW:
            e = (0, r.jsx)(f.Z, { guild: n });
            break;
        case h.u.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(b.Z, {
                title: N.NW.string(N.t['53eF5u']),
                settings: O[h.u.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case h.u.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(b.Z, {
                title: N.NW.string(N.t.O0SfFx),
                settings: O[h.u.DM_AND_SPAM_PROTECTION]
            });
            break;
        case h.u.AUTOMOD:
            e = (0, r.jsx)(c.Z, { guildId: n.id });
            break;
        case h.u.PERMISSIONS:
            e = (0, r.jsx)(b.Z, {
                title: N.NW.string(N.t.BXoNiY),
                settings: O[h.u.PERMISSIONS]
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            _ !== h.u.OVERVIEW &&
                (0, r.jsxs)(l.zxk, {
                    className: v.back,
                    innerClassName: v.backButton,
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.MIN,
                    onClick: () => {
                        (0, p.K)(h.u.OVERVIEW);
                    },
                    children: [
                        (0, r.jsx)(d.Z, {
                            className: v.__invalid_arrow,
                            direction: d.Z.Directions.LEFT
                        }),
                        (0, r.jsx)(l.Text, {
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
