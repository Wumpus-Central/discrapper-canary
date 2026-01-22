n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(397927),
    c = n(826673),
    o = n(774780),
    d = n(532197),
    u = n(71393),
    f = n(555337),
    g = n(203498),
    b = n(982832),
    m = n(660496),
    p = n(88613),
    x = n(807334),
    h = n(5558),
    j = n(49999),
    O = n(985018),
    y = n(690450);
function v() {
    let e,
        t = (0, l.bG)([f.A], () => f.A.getGuildId()),
        n = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        v = (0, l.bG)([b.A], () => b.A.getCurrentPage());
    if (
        (i.useEffect(() => {
            (0, c.Dr)(s.M.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: j.i.AUTO });
        }, []),
        null == n)
    )
        return null;
    let A = (0, h.N)(n);
    switch (v) {
        case m.C.OVERVIEW:
            e = (0, r.jsx)(p.A, { guild: n });
            break;
        case m.C.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(x.A, {
                title: O.intl.string(O.t["53eF5o"]),
                settings: A[m.C.CAPTCHA_AND_RAID_PROTECTION],
            });
            break;
        case m.C.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(x.A, {
                title: O.intl.string(O.t.O0SfFy),
                settings: A[m.C.DM_AND_SPAM_PROTECTION],
            });
            break;
        case m.C.AUTOMOD:
            e = (0, r.jsx)(o.A, { guildId: n.id });
            break;
        case m.C.PERMISSIONS:
            e = (0, r.jsx)(x.A, {
                title: O.intl.string(O.t.BXoNiT),
                settings: A[m.C.PERMISSIONS],
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            v !== m.C.OVERVIEW &&
                (0, r.jsx)(a.DUT, {
                    className: y.aX,
                    onClick: () => {
                        (0, g.K)(m.C.OVERVIEW);
                    },
                    children: (0, r.jsxs)("div", {
                        className: y.Gv,
                        children: [
                            (0, r.jsx)(d.A, { direction: d.A.Directions.LEFT }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: O.intl.string(O.t["13/7kX"]),
                            }),
                        ],
                    }),
                }),
            e,
        ],
    });
}
