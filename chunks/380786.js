n.d(t, { A: () => I, D: () => C });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(284009),
    r = n.n(a),
    o = n(554146),
    d = n(397927),
    c = n(736653),
    u = n(573648),
    h = n(619006),
    A = n(145643),
    _ = n(826673),
    m = n(997509),
    p = n(967198),
    g = n(652215),
    f = n(873494),
    E = n(985018),
    x = n(381703);
function I(e) {
    let { markAsDismissed: t } = e,
        n = p.A.getGuildId(),
        l = (0, c.DP)();
    r()(n, "Guild Id must be defined");
    let a = u.A.get(g.fg2.RIOT_GAMES);
    return (0, i.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [
            (0, i.jsx)(d.PMB, {
                onClick: () => (0, _.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: g.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? a.icon.blackSVG : a.icon.whiteSVG,
                alt: E.intl.string(f.default["1S6oAo"]),
                className: s()(x.tV, x._R),
            }),
            E.intl.format(f.default["/Xhh40"], {
                settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`,
            }),
            (0, i.jsx)(d.Z_L, {
                onClick: () => {
                    t(), m.A.open(n, g.BEX.ROLES);
                },
                noticeType: g.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: x.HE,
                children: E.intl.string(f.default.spsZYI),
            }),
            (0, i.jsx)(d.zr9, { onClick: () => t(), className: x.wX, children: E.intl.string(f.default["MVB/Ab"]) }),
        ],
    });
}
function C(e) {
    e.forEach((e) => {
        null == A.A.getGuildRoleConnectionsConfiguration(e.id) && (0, h.os)(e.guildId, e.id);
    });
    let t = e.map((e) => A.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === g.fg2.RIOT_GAMES || e.connectionType === g.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
