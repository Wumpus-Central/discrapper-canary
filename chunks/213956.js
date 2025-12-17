n.d(t, { Z: () => C });
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
    f = n(84613),
    m = n(392885),
    b = n(740903),
    p = n(464610),
    h = n(733629),
    x = n(598622),
    j = n(921944),
    v = n(388032),
    O = n(146473);
function C() {
    let e,
        t = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        C = (0, l.e7)([m.Z], () => m.Z.getCurrentPage());
    if (
        (i.useEffect(() => {
            (0, o.Q3)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: j.L.AUTO });
        }, []),
        null == n)
    )
        return null;
    let y = (0, x.Q)(n);
    switch (C) {
        case b.u.OVERVIEW:
            e = (0, r.jsx)(p.Z, { guild: n });
            break;
        case b.u.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(h.Z, {
                title: v.intl.string(v.t["53eF5o"]),
                settings: y[b.u.CAPTCHA_AND_RAID_PROTECTION],
            });
            break;
        case b.u.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(h.Z, {
                title: v.intl.string(v.t.O0SfFy),
                settings: y[b.u.DM_AND_SPAM_PROTECTION],
            });
            break;
        case b.u.AUTOMOD:
            e = (0, r.jsx)(c.Z, { guildId: n.id });
            break;
        case b.u.PERMISSIONS:
            e = (0, r.jsx)(h.Z, {
                title: v.intl.string(v.t.BXoNiT),
                settings: y[b.u.PERMISSIONS],
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C !== b.u.OVERVIEW &&
                (0, r.jsx)(s.P3F, {
                    className: O.back,
                    onClick: () => {
                        (0, f.K)(b.u.OVERVIEW);
                    },
                    children: (0, r.jsxs)("div", {
                        className: O.backButton,
                        children: [
                            (0, r.jsx)(d.Z, { direction: d.Z.Directions.LEFT }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: v.intl.string(v.t["13/7kX"]),
                            }),
                        ],
                    }),
                }),
            e,
        ],
    });
}
