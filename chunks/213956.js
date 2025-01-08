n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(605236),
    c = n(874993),
    d = n(768762),
    u = n(430824),
    m = n(999382),
    h = n(84613),
    g = n(392885),
    x = n(740903),
    p = n(464610),
    f = n(733629),
    C = n(598622),
    v = n(921944),
    _ = n(388032),
    N = n(232203);
function I() {
    let e;
    let t = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        I = (0, l.e7)([g.Z], () => g.Z.getCurrentPage());
    if (
        (r.useEffect(() => {
            (0, o.EW)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: v.L.AUTO });
        }, []),
        null == n)
    )
        return null;
    let T = (0, C.Q)(n);
    switch (I) {
        case x.u.OVERVIEW:
            e = (0, i.jsx)(p.Z, { guild: n });
            break;
        case x.u.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t['53eF5u']),
                settings: T[x.u.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case x.u.DM_AND_SPAM_PROTECTION:
            e = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t.O0SfFx),
                settings: T[x.u.DM_AND_SPAM_PROTECTION]
            });
            break;
        case x.u.AUTOMOD:
            e = (0, i.jsx)(c.Z, { guildId: n.id });
            break;
        case x.u.PERMISSIONS:
            e = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t.BXoNiY),
                settings: T[x.u.PERMISSIONS]
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            I !== x.u.OVERVIEW &&
                (0, i.jsxs)(s.Button, {
                    className: N.back,
                    innerClassName: N.backButton,
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: () => {
                        (0, h.K)(x.u.OVERVIEW);
                    },
                    children: [
                        (0, i.jsx)(d.Z, {
                            className: N.__invalid_arrow,
                            direction: d.Z.Directions.LEFT
                        }),
                        (0, i.jsx)(s.Text, {
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
