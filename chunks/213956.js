n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(704215),
    a = n(481060),
    o = n(605236),
    c = n(874993),
    u = n(768762),
    d = n(430824),
    m = n(999382),
    g = n(84613),
    p = n(392885),
    h = n(740903),
    f = n(464610),
    x = n(733629),
    b = n(598622),
    j = n(921944),
    _ = n(388032),
    v = n(296205);
function O() {
    let e,
        t = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, l.e7)([d.Z], () => d.Z.getGuild(t)),
        O = (0, l.e7)([p.Z], () => p.Z.getCurrentPage());
    if (
        (i.useEffect(() => {
            (0, o.EW)(s.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: j.L.AUTO });
        }, []),
        null == n)
    )
        return null;
    let C = (0, b.Q)(n);
    switch (O) {
        case h.u.OVERVIEW:
            e = (0, r.jsx)(f.Z, { guild: n });
            break;
        case h.u.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(x.Z, {
                title: _.intl.string(_.t['53eF5u']),
                settings: C[h.u.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case h.u.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(x.Z, {
                title: _.intl.string(_.t.O0SfFx),
                settings: C[h.u.DM_AND_SPAM_PROTECTION]
            });
            break;
        case h.u.AUTOMOD:
            e = (0, r.jsx)(c.Z, { guildId: n.id });
            break;
        case h.u.PERMISSIONS:
            e = (0, r.jsx)(x.Z, {
                title: _.intl.string(_.t.BXoNiY),
                settings: C[h.u.PERMISSIONS]
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O !== h.u.OVERVIEW &&
                (0, r.jsxs)(a.zxk, {
                    className: v.back,
                    innerClassName: v.backButton,
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.MIN,
                    onClick: () => {
                        (0, g.K)(h.u.OVERVIEW);
                    },
                    children: [
                        (0, r.jsx)(u.Z, {
                            className: v.__invalid_arrow,
                            direction: u.Z.Directions.LEFT
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            color: 'interactive-normal',
                            children: _.intl.string(_.t['13/7kZ'])
                        })
                    ]
                }),
            e
        ]
    });
}
