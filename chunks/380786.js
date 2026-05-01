n.d(t, { A: () => C, D: () => S });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    E = n(554146);
if (21552 == n.j) var _ = n(417098);
var o = n(736653),
    A = n(573648),
    c = n(619006),
    T = n(145643),
    I = n(826673),
    N = n(997509),
    u = n(967198),
    R = n(652215),
    d = n(452832),
    O = n(985018),
    P = n(448759);
function C(e) {
    let { markAsDismissed: t } = e,
        n = u.A.getGuildId(),
        l = (0, o.DP)();
    a()(n, "Guild Id must be defined");
    let s = A.A.get(R.fg2.RIOT_GAMES);
    return (0, i.jsxs)(_.$T, {
        color: _.Hv.WARNING,
        children: [
            (0, i.jsx)(_.PM, {
                onClick: () => (0, I.Dr)(E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: R.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? s.icon.blackSVG : s.icon.whiteSVG,
                alt: O.intl.string(d.default["1S6oAo"]),
                className: r()(P.tV, P._R),
            }),
            O.intl.format(d.default["/Xhh40"], {
                settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`,
            }),
            (0, i.jsx)(_.Z_, {
                onClick: () => {
                    t(), N.A.open(n, R.BEX.ROLES);
                },
                noticeType: R.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: P.HE,
                children: O.intl.string(d.default.spsZYI),
            }),
            (0, i.jsx)(_.zr, { onClick: () => t(), className: P.wX, children: O.intl.string(d.default["MVB/Ab"]) }),
        ],
    });
}
function S(e) {
    e.forEach((e) => {
        null == T.A.getGuildRoleConnectionsConfiguration(e.id) && (0, c.os)(e.guildId, e.id);
    });
    let t = e.map((e) => T.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === R.fg2.RIOT_GAMES || e.connectionType === R.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
