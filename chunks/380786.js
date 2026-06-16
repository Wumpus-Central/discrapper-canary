n.d(t, { A: () => M, D: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    E = n(17928),
    o = n(554146);
if (21552 == n.j) var c = n(417098);
var _ = n(736653),
    u = n(573648),
    A = n(619006),
    T = n(145643),
    d = n(826673),
    I = n(468689),
    N = n(773669),
    R = n(967198),
    S = n(942370),
    O = n(652215),
    C = n(230451),
    P = n(375708),
    D = n(448759);
function M(e) {
    let { markAsDismissed: t } = e,
        n = R.A.getGuildId(),
        l = (0, _.DP)(),
        s = (0, E.bG)([N.default], () => N.default.locale);
    a()(n, "Guild Id must be defined");
    let A = u.A.get(O.fg2.RIOT_GAMES),
        T = S.af.toLocaleDateString(s, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.WARNING,
        children: [
            (0, i.jsx)(c.PM, {
                onClick: () => (0, d.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: O.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? A.icon.blackSVG : A.icon.whiteSVG,
                alt: P.intl.string(C.default["1S6oAo"]),
                className: r()(D.tV, D._R),
            }),
            P.intl.format(C.default.kb0maj, { date: T }),
            (0, i.jsx)(c.Z_, {
                onClick: () => {
                    t(), I.A.open(n, O.BEX.ROLES);
                },
                noticeType: O.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: D.HE,
                children: P.intl.string(C.default.spsZYI),
            }),
            (0, i.jsx)(c.zr, { onClick: () => t(), className: D.wX, children: P.intl.string(C.default["MVB/Ab"]) }),
        ],
    });
}
function p(e) {
    e.forEach((e) => {
        null == T.A.getGuildRoleConnectionsConfiguration(e.id) && (0, A.os)(e.guildId, e.id);
    });
    let t = e.map((e) => T.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === O.fg2.RIOT_GAMES || e.connectionType === O.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
