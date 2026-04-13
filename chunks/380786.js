n.d(t, { A: () => x, D: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(284009),
    r = n.n(a),
    o = n(554146),
    d = n(397927),
    c = n(573648),
    u = n(619006),
    h = n(145643),
    A = n(826673),
    _ = n(997509),
    m = n(967198),
    p = n(652215),
    g = n(873494),
    f = n(985018),
    E = n(381703);
function x(e) {
    let { markAsDismissed: t } = e,
        n = m.A.getGuildId();
    return (
        r()(n, "Guild Id must be defined"),
        (0, i.jsxs)(d.$Td, {
            color: d.Hv$.WARNING,
            children: [
                (0, i.jsx)(d.PMB, {
                    onClick: () => (0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                    noticeType: p.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                }),
                (0, i.jsx)("img", {
                    src: c.A.get(p.fg2.RIOT_GAMES).icon.whiteSVG,
                    alt: f.intl.string(g.default["1S6oAo"]),
                    className: s()(E.tV, E._R),
                }),
                f.intl.format(g.default["/Xhh40"], {
                    settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`,
                }),
                (0, i.jsx)(d.Z_L, {
                    onClick: () => {
                        t(), _.A.open(n, p.BEX.ROLES);
                    },
                    noticeType: p.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                    className: E.HE,
                    children: f.intl.string(g.default.spsZYI),
                }),
                (0, i.jsx)(d.zr9, {
                    onClick: () => t(),
                    className: E.wX,
                    children: f.intl.string(g.default["MVB/Ab"]),
                }),
            ],
        })
    );
}
function I(e) {
    e.forEach((e) => {
        null == h.A.getGuildRoleConnectionsConfiguration(e.id) && (0, u.os)(e.guildId, e.id);
    });
    let t = e.map((e) => h.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === p.fg2.RIOT_GAMES || e.connectionType === p.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
