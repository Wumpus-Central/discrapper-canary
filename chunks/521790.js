n.d(t, { A: () => P, X: () => M });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    E = n(554146);
if (21552 == n.j) var c = n(417098);
var u = n(736653),
    _ = n(573648),
    A = n(619006),
    T = n(145643),
    d = n(826673),
    I = n(468689),
    N = n(773669),
    R = n(967198),
    S = n(652215),
    O = n(230451),
    C = n(375708),
    D = n(448759);
function P(e) {
    let { markAsDismissed: t, deprecationDate: n, platformType: l } = e,
        s = R.A.getGuildId(),
        A = (0, u.DP)(),
        T = (0, o.bG)([N.default], () => N.default.locale);
    a()(s, "Guild Id must be defined");
    let P = _.A.get(l),
        M = n.toLocaleDateString(T, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.WARNING,
        children: [
            (0, i.jsx)(c.PM, {
                onClick: () => (0, d.Dr)(E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
                noticeType: S.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
                src: "light" === A ? P?.icon.blackSVG : P?.icon.whiteSVG,
                alt: C.intl.string(O.default["1S6oAo"]),
                className: r()(D.tV, D._R),
            }),
            C.intl.format(O.default.kb0maj, { date: M }),
            (0, i.jsx)(c.Z_, {
                onClick: () => {
                    t(), I.A.open(s, S.BEX.ROLES);
                },
                noticeType: S.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                className: D.HE,
                children: C.intl.string(O.default.spsZYI),
            }),
            (0, i.jsx)(c.zr, { onClick: () => t(), className: D.wX, children: C.intl.string(O.default["MVB/Ab"]) }),
        ],
    });
}
function M(e, t) {
    e.forEach((e) => {
        null == T.A.getGuildRoleConnectionsConfiguration(e.id) && (0, A.os)(e.guildId, e.id);
    });
    let n = e.map((e) => T.A.getGuildRoleConnectionsConfiguration(e.id));
    return null != n && n.some((e) => e?.some((e) => e.some((e) => t.some((t) => t === e.connectionType))));
}
