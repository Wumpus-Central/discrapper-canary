n.d(t, {
    Z: function () {
        return N;
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
    I = n(232203);
function N(e) {
    let t,
        { hideChangelog: n } = e,
        N = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        T = (0, l.e7)([u.Z], () => u.Z.getGuild(N)),
        j = (0, l.e7)([g.Z], () => g.Z.getCurrentPage());
    if (
        (r.useEffect(() => {
            (0, o.EW)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: v.L.AUTO });
        }, []),
        null == T)
    )
        return null;
    let b = (0, C.Q)(T);
    switch (j) {
        case x.u.OVERVIEW:
            t = (0, i.jsx)(p.Z, {
                guild: T,
                hideChangelog: n
            });
            break;
        case x.u.CAPTCHA_AND_RAID_PROTECTION:
            t = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t['53eF5u']),
                settings: b[x.u.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case x.u.DM_AND_SPAM_PROTECTION:
            t = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t.O0SfFx),
                settings: b[x.u.DM_AND_SPAM_PROTECTION]
            });
            break;
        case x.u.AUTOMOD:
            t = (0, i.jsx)(c.Z, { guildId: T.id });
            break;
        case x.u.PERMISSIONS:
            t = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t.BXoNiY),
                settings: b[x.u.PERMISSIONS]
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            j !== x.u.OVERVIEW &&
                (0, i.jsxs)(s.Button, {
                    className: I.back,
                    innerClassName: I.backButton,
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: () => {
                        (0, h.K)(x.u.OVERVIEW);
                    },
                    children: [
                        (0, i.jsx)(d.Z, {
                            className: I.__invalid_arrow,
                            direction: d.Z.Directions.LEFT
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            color: 'interactive-normal',
                            children: _.intl.string(_.t['13/7kZ'])
                        })
                    ]
                }),
            t
        ]
    });
}
