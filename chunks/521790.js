n.d(t, { Ay: () => M, Jz: () => g });
var i = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    E = n(17928);
if (221552 == n.j) var o = n(417098);
var c = n(736653),
    _ = n(573648),
    u = n(619006),
    A = n(145643),
    T = n(826673),
    d = n(468689),
    I = n(773669),
    N = n(317525),
    R = n(71393),
    O = n(967198),
    S = n(177141),
    C = n(488926),
    D = n(652215),
    m = n(49999),
    P = n(990459),
    p = n(375708),
    f = n(971656);
function M(e) {
    let { markAsDismissed: t, recurringDismiss: n, platformType: l, noticeType: s } = e,
        u = O.A.getGuildId(),
        A = (0, c.DP)(),
        T = (0, E.bG)([I.default], () => I.default.locale);
    a()(null != u, "Guild Id must be defined");
    let N = _.A.get(l),
        R = N.migrationData?.deprecationDate?.toLocaleDateString(T, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(o.$T, {
        color: o.Hv.WARNING,
        children: [
            (0, i.jsx)(o.PM, { onClick: () => n(m.i.USER_DISMISS), noticeType: s }),
            (0, i.jsx)("img", {
                src: "light" === A ? N?.icon.blackSVG : N?.icon.whiteSVG,
                alt: N?.name,
                className: r()(f.tV, f.Y5),
            }),
            p.intl.format(P.default.iMCLA5, { connectionName: N?.name, date: R }),
            (0, i.jsx)(o.Z_, {
                onClick: () => {
                    t(m.i.TAKE_ACTION), d.A.open(u, D.BEX.ROLES);
                },
                noticeType: s,
                className: f.NS,
                children: p.intl.string(P.default.kxlybP),
            }),
            (0, i.jsx)(o.zr, {
                onClick: () => {
                    n(m.i.USER_DISMISS);
                },
                className: f.go,
                children: p.intl.string(P.default["8qJAeT"]),
            }),
        ],
    });
}
function g(e) {
    var t;
    let n,
        { currentUser: i, selectedGuildId: l, platformTypes: r, dismissibleContent: s, noticeType: a } = e,
        E = _.A.get(r[0]);
    if (
        !E.migrationData?.getMigrationExperimentEnabled("guildRoleDeprecationNoticePredicate") ||
        S.Ay.isNoticeDismissed(a) ||
        (0, T.k8)(s)
    )
        return !1;
    let o = null != l ? R.A.getGuild(l) : null;
    return (
        null != o &&
        !!(0, C.$3)({ permission: D.xBc.ADMINISTRATOR, user: i, context: o }) &&
        ((t = N.A.getSortedRoles(o.id).filter((e) => null === e.tags.guild_connections)),
        t.forEach((e) => {
            null == A.A.getGuildRoleConnectionsConfiguration(e.id) && (0, u.os)(e.guildId, e.id);
        }),
        !!(
            null != (n = t.map((e) => A.A.getGuildRoleConnectionsConfiguration(e.id))) &&
            n.some((e) => e?.some((e) => e.some((e) => r.some((t) => t === e.connectionType))))
        ))
    );
}
