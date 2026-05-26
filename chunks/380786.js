n.d(t, { A: () => g, D: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    c = n(17928),
    o = n(554146);
if (21552 == n.j) var d = n(417098);
var u = n(736653),
    E = n(573648),
    A = n(619006),
    _ = n(145643),
    T = n(826673),
    I = n(468689),
    N = n(773669),
    R = n(967198),
    m = n(942370),
    C = n(652215),
    p = n(230451),
    S = n(375708),
    O = n(448759);
function g(e) {
    let { markAsDismissed: t } = e,
        n = R.A.getGuildId(),
        l = (0, u.DP)(),
        s = (0, c.bG)([N.default], () => N.default.locale);
    a()(n, "Guild Id must be defined");
    let A = E.A.get(C.fg2.RIOT_GAMES),
        _ = m.af.toLocaleDateString(s, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.WARNING,
        children: [
            (0, i.jsx)(d.PM, {
                onClick: () => (0, T.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: C.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? A.icon.blackSVG : A.icon.whiteSVG,
                alt: S.intl.string(p.default["1S6oAo"]),
                className: r()(O.tV, O._R),
            }),
            S.intl.format(p.default.kb0maj, { date: _ }),
            (0, i.jsx)(d.Z_, {
                onClick: () => {
                    t(), I.A.open(n, C.BEX.ROLES);
                },
                noticeType: C.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: O.HE,
                children: S.intl.string(p.default.spsZYI),
            }),
            (0, i.jsx)(d.zr, { onClick: () => t(), className: O.wX, children: S.intl.string(p.default["MVB/Ab"]) }),
        ],
    });
}
function h(e) {
    e.forEach((e) => {
        null == _.A.getGuildRoleConnectionsConfiguration(e.id) && (0, A.os)(e.guildId, e.id);
    });
    let t = e.map((e) => _.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === C.fg2.RIOT_GAMES || e.connectionType === C.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
