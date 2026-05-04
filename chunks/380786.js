"use strict";
n.d(t, { A: () => y, D: () => C });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    l = n(17928),
    u = n(554146),
    c = n(417098),
    d = n(736653),
    _ = n(573648),
    f = n(619006),
    h = n(145643),
    p = n(826673),
    E = n(468689),
    m = n(773669),
    g = n(967198),
    A = n(942370),
    I = n(652215),
    T = n(452832),
    S = n(375708),
    N = n(448759);
function y(e) {
    let { markAsDismissed: t } = e,
        n = g.A.getGuildId(),
        r = (0, d.DP)(),
        a = (0, l.bG)([m.default], () => m.default.locale);
    o()(n, "Guild Id must be defined");
    let f = _.A.get(I.fg2.RIOT_GAMES),
        h = A.af.toLocaleDateString(a, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.WARNING,
        children: [
            (0, i.jsx)(c.PM, {
                onClick: () => (0, p.Dr)(u.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: I.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === r ? f.icon.blackSVG : f.icon.whiteSVG,
                alt: S.intl.string(T.default["1S6oAo"]),
                className: s()(N.tV, N._R),
            }),
            S.intl.format(T.default.kb0maj, { date: h }),
            (0, i.jsx)(c.Z_, {
                onClick: () => {
                    t(), E.A.open(n, I.BEX.ROLES);
                },
                noticeType: I.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: N.HE,
                children: S.intl.string(T.default.spsZYI),
            }),
            (0, i.jsx)(c.zr, { onClick: () => t(), className: N.wX, children: S.intl.string(T.default["MVB/Ab"]) }),
        ],
    });
}
function C(e) {
    e.forEach((e) => {
        null == h.A.getGuildRoleConnectionsConfiguration(e.id) && (0, f.os)(e.guildId, e.id);
    });
    let t = e.map((e) => h.A.getGuildRoleConnectionsConfiguration(e.id));
    return (
        null != t &&
        t.some((e) =>
            e?.some((e) =>
                e.some((e) => e.connectionType === I.fg2.RIOT_GAMES || e.connectionType === I.fg2.LEAGUE_OF_LEGENDS),
            ),
        )
    );
}
