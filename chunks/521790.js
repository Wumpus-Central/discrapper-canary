"use strict";
n.d(t, { Ay: () => L, Jz: () => D });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(284009),
    l = n.n(s),
    o = n(17928),
    d = n(417098),
    c = n(736653),
    u = n(573648),
    _ = n(619006),
    E = n(145643),
    A = n(826673),
    h = n(468689),
    I = n(773669),
    f = n(317525),
    p = n(71393),
    T = n(967198),
    m = n(177141),
    g = n(488926),
    S = n(652215),
    N = n(49999),
    C = n(230451),
    O = n(375708),
    R = n(789167);
function L(e) {
    let { markAsDismissed: t, recurringDismiss: n, platformType: r, noticeType: s } = e,
        _ = T.A.getGuildId(),
        E = (0, c.DP)(),
        A = (0, o.bG)([I.default], () => I.default.locale);
    l()(null != _, "Guild Id must be defined");
    let f = u.A.get(r),
        p = f.migrationData?.deprecationDate?.toLocaleDateString(A, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.WARNING,
        children: [
            (0, i.jsx)(d.PM, { onClick: () => n(N.i.USER_DISMISS), noticeType: s }),
            (0, i.jsx)("img", {
                src: "light" === E ? f?.icon.blackSVG : f?.icon.whiteSVG,
                alt: f?.name,
                className: a()(R.tV, R.Y5),
            }),
            O.intl.format(C.default.iMCLA5, { connectionName: f?.name, date: p }),
            (0, i.jsx)(d.Z_, {
                onClick: () => {
                    t(N.i.TAKE_ACTION), h.A.open(_, S.BEX.ROLES);
                },
                noticeType: s,
                className: R.NS,
                children: O.intl.string(C.default.kxlybP),
            }),
            (0, i.jsx)(d.zr, {
                onClick: () => {
                    n(N.i.USER_DISMISS);
                },
                className: R.go,
                children: O.intl.string(C.default["8qJAeT"]),
            }),
        ],
    });
}
function D(e) {
    var t;
    let n,
        { currentUser: i, selectedGuildId: r, platformTypes: a, dismissibleContent: s, noticeType: l } = e,
        o = u.A.get(a[0]);
    if (
        !o.migrationData?.getMigrationExperimentEnabled("guildRoleDeprecationNoticePredicate") ||
        m.Ay.isNoticeDismissed(l) ||
        (0, A.k8)(s)
    )
        return !1;
    let d = null != r ? p.A.getGuild(r) : null;
    return (
        null != d &&
        !!(0, g.$3)({ permission: S.xBc.ADMINISTRATOR, user: i, context: d }) &&
        ((t = f.A.getSortedRoles(d.id).filter((e) => null === e.tags.guild_connections)),
        t.forEach((e) => {
            null == E.A.getGuildRoleConnectionsConfiguration(e.id) && (0, _.os)(e.guildId, e.id);
        }),
        !!(
            null != (n = t.map((e) => E.A.getGuildRoleConnectionsConfiguration(e.id))) &&
            n.some((e) => e?.some((e) => e.some((e) => a.some((t) => t === e.connectionType))))
        ))
    );
}
