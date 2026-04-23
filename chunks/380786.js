"use strict";
n.d(t, { A: () => C, D: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(284009),
    a = n.n(s),
    o = n(554146);
if (21552 == n.j) var c = n(417098);
var u = n(736653),
    d = n(573648),
    _ = n(619006),
    E = n(145643),
    A = n(826673),
    m = n(997509),
    I = n(967198),
    T = n(652215),
    N = n(452832),
    g = n(985018),
    p = n(448759);
function C(e) {
    let { markAsDismissed: t } = e,
        n = I.A.getGuildId(),
        r = (0, u.DP)();
    a()(n, "Guild Id must be defined");
    let s = d.A.get(T.fg2.RIOT_GAMES);
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.WARNING,
        children: [
            (0, i.jsx)(c.PM, {
                onClick: () => (0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: T.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === r ? s.icon.blackSVG : s.icon.whiteSVG,
                alt: g.intl.string(N.default["1S6oAo"]),
                className: l()(p.tV, p._R),
            }),
            g.intl.format(N.default["/Xhh40"], {
                settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`,
            }),
            (0, i.jsx)(c.Z_, {
                onClick: () => {
                    t(), m.A.open(n, T.BEX.ROLES);
                },
                noticeType: T.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: p.HE,
                children: g.intl.string(N.default.spsZYI),
            }),
            (0, i.jsx)(c.zr, { onClick: () => t(), className: p.wX, children: g.intl.string(N.default["MVB/Ab"]) }),
        ],
    });
}
function f(e) {
    e.forEach((e) => {
        null == E.A.getGuildRoleConnectionsConfiguration(e.id) && (0, _.os)(e.guildId, e.id);
    });
    let t = e.map((e) => E.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === T.fg2.RIOT_GAMES || e.connectionType === T.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
