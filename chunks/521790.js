"use strict";
n.d(t, { A: () => N, X: () => C });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(284009),
    l = n.n(s),
    o = n(17928),
    d = n(554146),
    c = n(417098),
    u = n(736653),
    _ = n(573648),
    E = n(619006),
    A = n(145643),
    h = n(826673),
    I = n(468689),
    f = n(773669),
    p = n(967198),
    T = n(652215),
    m = n(230451),
    g = n(375708),
    S = n(448759);
function N(e) {
    let { markAsDismissed: t, deprecationDate: n, platformType: r } = e,
        s = p.A.getGuildId(),
        E = (0, u.DP)(),
        A = (0, o.bG)([f.default], () => f.default.locale);
    l()(s, "Guild Id must be defined");
    let N = _.A.get(r),
        C = n.toLocaleDateString(A, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.WARNING,
        children: [
            (0, i.jsx)(c.PM, {
                onClick: () => (0, h.Dr)(d.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: T.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === E ? N?.icon.blackSVG : N?.icon.whiteSVG,
                alt: g.intl.string(m.default["1S6oAo"]),
                className: a()(S.tV, S._R),
            }),
            g.intl.format(m.default.kb0maj, { date: C }),
            (0, i.jsx)(c.Z_, {
                onClick: () => {
                    t(), I.A.open(s, T.BEX.ROLES);
                },
                noticeType: T.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: S.HE,
                children: g.intl.string(m.default.spsZYI),
            }),
            (0, i.jsx)(c.zr, { onClick: () => t(), className: S.wX, children: g.intl.string(m.default["MVB/Ab"]) }),
        ],
    });
}
function C(e, t) {
    e.forEach((e) => {
        null == A.A.getGuildRoleConnectionsConfiguration(e.id) && (0, E.os)(e.guildId, e.id);
    });
    let n = e.map((e) => A.A.getGuildRoleConnectionsConfiguration(e.id));
    return null != n && n.some((e) => e?.some((e) => e.some((e) => t.some((t) => t === e.connectionType))));
}
