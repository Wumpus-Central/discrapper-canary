"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(397927),
    o = n(826673),
    d = n(774780),
    c = n(532197),
    u = n(71393),
    m = n(555337),
    g = n(203498),
    x = n(982832),
    h = n(660496),
    _ = n(88613),
    A = n(807334),
    p = n(5558),
    f = n(49999),
    j = n(985018),
    N = n(690450);
function E() {
    let e,
        t = (0, l.bG)([m.A], () => m.A.getGuildId()),
        n = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        E = (0, l.bG)([x.A], () => x.A.getCurrentPage());
    if (
        (s.useEffect(() => {
            (0, o.Dr)(r.M.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: f.i.AUTO });
        }, []),
        null == n)
    )
        return null;
    let b = (0, p.N)(n);
    switch (E) {
        case h.C.OVERVIEW:
            e = (0, i.jsx)(_.A, { guild: n });
            break;
        case h.C.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, i.jsx)(A.A, { title: j.intl.string(j.t["53eF5o"]), settings: b[h.C.CAPTCHA_AND_RAID_PROTECTION] });
            break;
        case h.C.DM_AND_SPAM_PROTECTION:
            e = (0, i.jsx)(A.A, { title: j.intl.string(j.t.O0SfFy), settings: b[h.C.DM_AND_SPAM_PROTECTION] });
            break;
        case h.C.AUTOMOD:
            e = (0, i.jsx)(d.A, { guildId: n.id });
            break;
        case h.C.PERMISSIONS:
            e = (0, i.jsx)(A.A, { title: j.intl.string(j.t.BXoNiT), settings: b[h.C.PERMISSIONS] });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            E !== h.C.OVERVIEW &&
                (0, i.jsx)(a.DUT, {
                    className: N.aX,
                    onClick: () => {
                        (0, g.K)(h.C.OVERVIEW);
                    },
                    children: (0, i.jsxs)("div", {
                        className: N.Gv,
                        children: [
                            (0, i.jsx)(c.A, { direction: c.A.Directions.LEFT }),
                            (0, i.jsx)(a.Text, {
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
