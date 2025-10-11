n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(704215),
    s = n(755721),
    o = n(481060),
    c = n(266454),
    d = n(874993),
    u = n(768762),
    g = n(430824),
    m = n(999382),
    p = n(84613),
    f = n(392885),
    h = n(740903),
    b = n(464610),
    x = n(733629),
    j = n(598622),
    v = n(921944),
    _ = n(388032),
    C = n(824804);
function O() {
    let e,
        t = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, l.e7)([g.Z], () => g.Z.getGuild(t)),
        O = (0, l.e7)([f.Z], () => f.Z.getCurrentPage());
    if (
        (i.useEffect(() => {
            (0, c.Q3)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: v.L.AUTO });
        }, []),
        null == n)
    )
        return null;
    let y = (0, j.Q)(n);
    switch (O) {
        case h.u.OVERVIEW:
            e = (0, r.jsx)(b.Z, { guild: n });
            break;
        case h.u.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(x.Z, {
                title: _.intl.string(_.t["53eF5u"]),
                settings: y[h.u.CAPTCHA_AND_RAID_PROTECTION],
            });
            break;
        case h.u.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(x.Z, {
                title: _.intl.string(_.t.O0SfFx),
                settings: y[h.u.DM_AND_SPAM_PROTECTION],
            });
            break;
        case h.u.AUTOMOD:
            e = (0, r.jsx)(d.Z, { guildId: n.id });
            break;
        case h.u.PERMISSIONS:
            e = (0, r.jsx)(x.Z, {
                title: _.intl.string(_.t.BXoNiY),
                settings: y[h.u.PERMISSIONS],
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O !== h.u.OVERVIEW &&
                (0, r.jsxs)(s.zx, {
                    className: C.back,
                    innerClassName: C.backButton,
                    look: s.zx.Looks.BLANK,
                    size: s.zx.Sizes.MIN,
                    onClick: () => {
                        (0, p.K)(h.u.OVERVIEW);
                    },
                    children: [
                        (0, r.jsx)(u.Z, {
                            className: C.__invalid_arrow,
                            direction: u.Z.Directions.LEFT,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: _.intl.string(_.t["13/7kZ"]),
                        }),
                    ],
                }),
            e,
        ],
    });
}
