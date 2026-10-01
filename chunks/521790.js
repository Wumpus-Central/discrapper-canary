n.d(t, { Ay: () => P, Jz: () => h });
var i = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    o = n(17928);
if (221552 == n.j) var c = n(417098);
var E = n(736653),
    u = n(573648),
    d = n(619006),
    _ = n(145643),
    A = n(826673),
    T = n(468689),
    I = n(773669),
    N = n(317525),
    R = n(71393),
    C = n(967198),
    O = n(177141),
    m = n(488926),
    S = n(652215),
    f = n(49999),
    p = n(211180),
    D = n(375708),
    g = n(971656);
function P(e) {
    let { markAsDismissed: t, recurringDismiss: n, platformType: l, noticeType: s } = e,
        d = C.A.getGuildId(),
        _ = (0, E.DP)(),
        A = (0, o.bG)([I.default], () => I.default.locale);
    a()(null != d, "Guild Id must be defined");
    let N = u.A.get(l),
        R = N.migrationData?.deprecationDate?.toLocaleDateString(A, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.WARNING,
        children: [
            (0, i.jsx)(c.PM, { onClick: () => n(f.i.USER_DISMISS), noticeType: s }),
            (0, i.jsx)("img", {
                src: "light" === _ ? N?.icon.blackSVG : N?.icon.whiteSVG,
                alt: N?.name,
                className: r()(g.tV, g.Y5),
            }),
            D.intl.format(p.default.iMCLA5, { connectionName: N?.name, date: R }),
            (0, i.jsx)(c.Z_, {
                onClick: () => {
                    (t(f.i.TAKE_ACTION), T.default.open(d, S.BEX.ROLES));
                },
                noticeType: s,
                className: g.NS,
                children: D.intl.string(p.default.kxlybP),
            }),
            (0, i.jsx)(c.zr, {
                onClick: () => {
                    n(f.i.USER_DISMISS);
                },
                className: g.go,
                children: D.intl.string(p.default["8qJAeT"]),
            }),
        ],
    });
}
function h(e) {
    var t;
    let n,
        { currentUser: i, selectedGuildId: l, platformTypes: r, dismissibleContent: s, noticeType: a } = e,
        o = u.A.get(r[0]);
    if (
        !o.migrationData?.getMigrationExperimentEnabled("guildRoleDeprecationNoticePredicate") ||
        O.Ay.isNoticeDismissed(a) ||
        (0, A.k8)(s)
    )
        return !1;
    let c = null != l ? R.A.getGuild(l) : null;
    return (
        null != c &&
        !!(0, m.$3)({ permission: S.xBc.ADMINISTRATOR, user: i, context: c }) &&
        ((t = N.A.getSortedRoles(c.id).filter((e) => null === e.tags.guild_connections)),
        t.forEach((e) => {
            null == _.A.getGuildRoleConnectionsConfiguration(e.id) && (0, d.os)(e.guildId, e.id);
        }),
        !!(
            null != (n = t.map((e) => _.A.getGuildRoleConnectionsConfiguration(e.id))) &&
            n.some((e) => e?.some((e) => e.some((e) => r.some((t) => t === e.connectionType))))
        ))
    );
}
