"use strict";
n.d(t, { A: () => T, D: () => S });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    l = n(554146),
    u = n(417098),
    c = n(736653),
    d = n(573648),
    _ = n(619006),
    f = n(145643),
    h = n(826673),
    p = n(468689),
    E = n(967198),
    m = n(652215),
    g = n(452832),
    A = n(375708),
    I = n(448759);
function T(e) {
    let { markAsDismissed: t } = e,
        n = E.A.getGuildId(),
        r = (0, c.DP)();
    o()(n, "Guild Id must be defined");
    let a = d.A.get(m.fg2.RIOT_GAMES);
    return (0, i.jsxs)(u.$T, {
        color: u.Hv.WARNING,
        children: [
            (0, i.jsx)(u.PM, {
                onClick: () => (0, h.Dr)(l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: m.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === r ? a.icon.blackSVG : a.icon.whiteSVG,
                alt: A.intl.string(g.default["1S6oAo"]),
                className: s()(I.tV, I._R),
            }),
            A.intl.format(g.default["/Xhh40"], {
                settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`,
            }),
            (0, i.jsx)(u.Z_, {
                onClick: () => {
                    t(), p.A.open(n, m.BEX.ROLES);
                },
                noticeType: m.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: I.HE,
                children: A.intl.string(g.default.spsZYI),
            }),
            (0, i.jsx)(u.zr, { onClick: () => t(), className: I.wX, children: A.intl.string(g.default["MVB/Ab"]) }),
        ],
    });
}
function S(e) {
    e.forEach((e) => {
        null == f.A.getGuildRoleConnectionsConfiguration(e.id) && (0, _.os)(e.guildId, e.id);
    });
    let t = e.map((e) => f.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === m.fg2.RIOT_GAMES || e.connectionType === m.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
