n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(554146),
    a = n(939249),
    o = n(834730),
    d = n(826673),
    c = n(774780),
    u = n(532197),
    m = n(71393),
    g = n(555337),
    h = n(203498),
    x = n(982832),
    _ = n(660496),
    p = n(88613),
    A = n(807334),
    E = n(5558),
    f = n(49999),
    j = n(985018),
    N = n(101839);
function I() {
    let e,
        t = (0, s.bG)([g.A], () => g.A.getGuildId()),
        n = (0, s.bG)([m.A], () => m.A.getGuild(t)),
        I = (0, s.bG)([x.A], () => x.A.getCurrentPage());
    if (
        (l.useEffect(() => {
            (0, d.Dr)(r.M.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: f.i.AUTO });
        }, []),
        null == n)
    )
        return null;
    let C = (0, E.N)(n);
    switch (I) {
        case _.C.OVERVIEW:
            e = (0, i.jsx)(p.A, { guild: n });
            break;
        case _.C.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, i.jsx)(A.A, { title: j.intl.string(j.t["53eF5o"]), settings: C[_.C.CAPTCHA_AND_RAID_PROTECTION] });
            break;
        case _.C.DM_AND_SPAM_PROTECTION:
            e = (0, i.jsx)(A.A, { title: j.intl.string(j.t.O0SfFy), settings: C[_.C.DM_AND_SPAM_PROTECTION] });
            break;
        case _.C.AUTOMOD:
            e = (0, i.jsx)(c.A, { guildId: n.id });
            break;
        case _.C.PERMISSIONS:
            e = (0, i.jsx)(A.A, { title: j.intl.string(j.t.BXoNiT), settings: C[_.C.PERMISSIONS] });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            I !== _.C.OVERVIEW &&
                (0, i.jsx)(a.D, {
                    className: N.aX,
                    onClick: () => {
                        (0, h.K)(_.C.OVERVIEW);
                    },
                    children: (0, i.jsxs)("div", {
                        className: N.Gv,
                        children: [
                            (0, i.jsx)(u.A, { direction: u.A.Directions.LEFT }),
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: j.intl.string(j.t["13/7kX"]),
                            }),
                        ],
                    }),
                }),
            e,
        ],
    });
}
