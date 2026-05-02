n.d(t, { A: () => C, D: () => P });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    E = n(554146);
if (21552 == n.j) var o = n(417098);
var c = n(736653),
    _ = n(573648),
    u = n(619006),
    A = n(145643),
    T = n(826673),
    d = n(468689),
    I = n(967198),
    N = n(652215),
    R = n(452832),
    S = n(375708),
    O = n(448759);
function C(e) {
    let { markAsDismissed: t } = e,
        n = I.A.getGuildId(),
        l = (0, c.DP)();
    a()(n, "Guild Id must be defined");
    let s = _.A.get(N.fg2.RIOT_GAMES);
    return (0, i.jsxs)(o.$T, {
        color: o.Hv.WARNING,
        children: [
            (0, i.jsx)(o.PM, {
                onClick: () => (0, T.Dr)(E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? s.icon.blackSVG : s.icon.whiteSVG,
                alt: S.intl.string(R.default["1S6oAo"]),
                className: r()(O.tV, O._R),
            }),
            S.intl.format(R.default["/Xhh40"], {
                settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`,
            }),
            (0, i.jsx)(o.Z_, {
                onClick: () => {
                    t(), d.A.open(n, N.BEX.ROLES);
                },
                noticeType: N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: O.HE,
                children: S.intl.string(R.default.spsZYI),
            }),
            (0, i.jsx)(o.zr, { onClick: () => t(), className: O.wX, children: S.intl.string(R.default["MVB/Ab"]) }),
        ],
    });
}
function P(e) {
    e.forEach((e) => {
        null == A.A.getGuildRoleConnectionsConfiguration(e.id) && (0, u.os)(e.guildId, e.id);
    });
    let t = e.map((e) => A.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === N.fg2.RIOT_GAMES || e.connectionType === N.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
