n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(266454),
    c = n(874993),
    d = n(768762),
    u = n(430824),
    g = n(999382),
    m = n(84613),
    p = n(392885),
    f = n(740903),
    h = n(464610),
    b = n(733629),
    x = n(598622),
    j = n(921944),
    _ = n(388032),
    v = n(824804);
function O() {
    let e,
        t = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        O = (0, l.e7)([p.Z], () => p.Z.getCurrentPage());
    if (
        (i.useEffect(() => {
            (0, o.Q3)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: j.L.AUTO });
        }, []),
        null == n)
    )
        return null;
    let C = (0, x.Q)(n);
    switch (O) {
        case f.u.OVERVIEW:
            e = (0, r.jsx)(h.Z, { guild: n });
            break;
        case f.u.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(b.Z, {
                title: _.intl.string(_.t["53eF5o"]),
                settings: C[f.u.CAPTCHA_AND_RAID_PROTECTION],
            });
            break;
        case f.u.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(b.Z, {
                title: _.intl.string(_.t.O0SfFy),
                settings: C[f.u.DM_AND_SPAM_PROTECTION],
            });
            break;
        case f.u.AUTOMOD:
            e = (0, r.jsx)(c.Z, { guildId: n.id });
            break;
        case f.u.PERMISSIONS:
            e = (0, r.jsx)(b.Z, {
                title: _.intl.string(_.t.BXoNiT),
                settings: C[f.u.PERMISSIONS],
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O !== f.u.OVERVIEW &&
                (0, r.jsx)(s.P3F, {
                    className: v.back,
                    onClick: () => {
                        (0, m.K)(f.u.OVERVIEW);
                    },
                    children: (0, r.jsxs)("div", {
                        className: v.backButton,
                        children: [
                            (0, r.jsx)(d.Z, { direction: d.Z.Directions.LEFT }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: _.intl.string(_.t["13/7kX"]),
                            }),
                        ],
                    }),
                }),
            e,
        ],
    });
}
