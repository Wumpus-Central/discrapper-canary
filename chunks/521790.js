n.d(t, { Ay: () => f, Jz: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    E = n(17928);
if (21552 == n.j) var o = n(417098);
var c = n(736653),
    u = n(573648),
    _ = n(619006),
    A = n(145643),
    T = n(826673),
    d = n(468689),
    I = n(773669),
    N = n(317525),
    R = n(71393),
    S = n(967198),
    O = n(177141),
    C = n(488926),
    D = n(652215),
    m = n(49999),
    p = n(452832),
    P = n(375708),
    M = n(789167);
function f(e) {
    let { markAsDismissed: t, recurringDismiss: n, deprecationDate: l, platformType: s, noticeType: _ } = e,
        A = S.A.getGuildId(),
        T = (0, c.DP)(),
        N = (0, E.bG)([I.default], () => I.default.locale);
    a()(A, "Guild Id must be defined");
    let R = u.A.get(s),
        O = l.toLocaleDateString(N, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(o.$T, {
        color: o.Hv.WARNING,
        children: [
            (0, i.jsx)(o.PM, { onClick: () => n(m.i.USER_DISMISS), noticeType: _ }),
            (0, i.jsx)("img", {
                src: "light" === T ? R?.icon.blackSVG : R?.icon.whiteSVG,
                alt: R?.name,
                className: r()(M.tV, M.Y5),
            }),
            P.intl.format(p.default.iMCLA5, { connectionName: R?.name, date: O }),
            (0, i.jsx)(o.Z_, {
                onClick: () => {
                    t(m.i.TAKE_ACTION), d.A.open(A, D.BEX.ROLES);
                },
                noticeType: _,
                className: M.NS,
                children: P.intl.string(p.default.kxlybP),
            }),
            (0, i.jsx)(o.zr, {
                onClick: () => {
                    n(m.i.USER_DISMISS);
                },
                className: M.go,
                children: P.intl.string(p.default["8qJAeT"]),
            }),
        ],
    });
}
function g(e) {
    var t;
    let n,
        { currentUser: i, selectedGuildId: l, platformTypes: r, dismissibleContent: s, noticeType: a } = e,
        E = u.A.get(r[0]);
    if (
        !E.migrationData?.getMigrationExperimentEnabled("guildRoleDeprecationNoticePredicate") ||
        O.Ay.isNoticeDismissed(a) ||
        (0, T.k8)(s)
    )
        return !1;
    let o = null != l ? R.A.getGuild(l) : null;
    return (
        null != o &&
        !!(0, C.$3)({ permission: D.xBc.ADMINISTRATOR, user: i, context: o }) &&
        ((t = N.A.getSortedRoles(o.id).filter((e) => null === e.tags.guild_connections)),
        t.forEach((e) => {
            null == A.A.getGuildRoleConnectionsConfiguration(e.id) && (0, _.os)(e.guildId, e.id);
        }),
        !!(
            null != (n = t.map((e) => A.A.getGuildRoleConnectionsConfiguration(e.id))) &&
            n.some((e) => e?.some((e) => e.some((e) => r.some((t) => t === e.connectionType))))
        ))
    );
}
