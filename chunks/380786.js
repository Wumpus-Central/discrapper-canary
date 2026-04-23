n.d(t, { A: () => S, D: () => C });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    E = n(554146);
if (21552 == n.j) var o = n(417098);
var _ = n(736653),
    c = n(573648),
    A = n(619006),
    I = n(145643),
    u = n(826673),
    T = n(997509),
    d = n(967198),
    N = n(652215),
    R = n(452832),
    O = n(985018),
    P = n(448759);
function S(e) {
    let { markAsDismissed: t } = e,
        n = d.A.getGuildId(),
        l = (0, _.DP)();
    a()(n, "Guild Id must be defined");
    let s = c.A.get(N.fg2.RIOT_GAMES);
    return (0, i.jsxs)(o.$T, {
        color: o.Hv.WARNING,
        children: [
            (0, i.jsx)(o.PM, {
                onClick: () => (0, u.Dr)(E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? s.icon.blackSVG : s.icon.whiteSVG,
                alt: O.intl.string(R.default["1S6oAo"]),
                className: r()(P.tV, P._R),
            }),
            O.intl.format(R.default["/Xhh40"], {
                settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`,
            }),
            (0, i.jsx)(o.Z_, {
                onClick: () => {
                    t(), T.A.open(n, N.BEX.ROLES);
                },
                noticeType: N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: P.HE,
                children: O.intl.string(R.default.spsZYI),
            }),
            (0, i.jsx)(o.zr, { onClick: () => t(), className: P.wX, children: O.intl.string(R.default["MVB/Ab"]) }),
        ],
    });
}
function C(e) {
    e.forEach((e) => {
        null == I.A.getGuildRoleConnectionsConfiguration(e.id) && (0, A.os)(e.guildId, e.id);
    });
    let t = e.map((e) => I.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === N.fg2.RIOT_GAMES || e.connectionType === N.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
