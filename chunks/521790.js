n.d(t, { Ay: () => M, Jz: () => g });
var i = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    o = n(17928);
if (221552 == n.j) var E = n(417098);
var c = n(736653),
    u = n(573648),
    _ = n(619006),
    A = n(145643),
    d = n(826673),
    T = n(468689),
    I = n(773669),
    N = n(317525),
    R = n(71393),
    C = n(967198),
    S = n(177141),
    O = n(488926),
    D = n(652215),
    m = n(49999),
    P = n(211180),
    p = n(375708),
    f = n(971656);
function M(e) {
    let { markAsDismissed: t, recurringDismiss: n, platformType: l, noticeType: s } = e,
        _ = C.A.getGuildId(),
        A = (0, c.DP)(),
        d = (0, o.bG)([I.default], () => I.default.locale);
    a()(null != _, "Guild Id must be defined");
    let N = u.A.get(l),
        R = N.migrationData?.deprecationDate?.toLocaleDateString(d, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(E.$T, {
        color: E.Hv.WARNING,
        children: [
            (0, i.jsx)(E.PM, { onClick: () => n(m.i.USER_DISMISS), noticeType: s }),
            (0, i.jsx)("img", {
                src: "light" === A ? N?.icon.blackSVG : N?.icon.whiteSVG,
                alt: N?.name,
                className: r()(f.tV, f.Y5),
            }),
            p.intl.format(P.default.iMCLA5, { connectionName: N?.name, date: R }),
            (0, i.jsx)(E.Z_, {
                onClick: () => {
                    t(m.i.TAKE_ACTION), T.A.open(_, D.BEX.ROLES);
                },
                noticeType: s,
                className: f.NS,
                children: p.intl.string(P.default.kxlybP),
            }),
            (0, i.jsx)(E.zr, {
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
        o = u.A.get(r[0]);
    if (
        !o.migrationData?.getMigrationExperimentEnabled("guildRoleDeprecationNoticePredicate") ||
        S.Ay.isNoticeDismissed(a) ||
        (0, d.k8)(s)
    )
        return !1;
    let E = null != l ? R.A.getGuild(l) : null;
    return (
        null != E &&
        !!(0, O.$3)({ permission: D.xBc.ADMINISTRATOR, user: i, context: E }) &&
        ((t = N.A.getSortedRoles(E.id).filter((e) => null === e.tags.guild_connections)),
        t.forEach((e) => {
            null == A.A.getGuildRoleConnectionsConfiguration(e.id) && (0, _.os)(e.guildId, e.id);
        }),
        !!(
            null != (n = t.map((e) => A.A.getGuildRoleConnectionsConfiguration(e.id))) &&
            n.some((e) => e?.some((e) => e.some((e) => r.some((t) => t === e.connectionType))))
        ))
    );
}
