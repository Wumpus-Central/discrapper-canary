"use strict";
n.d(t, { Ay: () => L, Jz: () => y });
var i = n(627968);
n(64700);
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
    C = n(452832),
    O = n(375708),
    R = n(448759);
function L(e) {
    let { markAsDismissed: t, recurringDismiss: n, deprecationDate: r, platformType: s, noticeType: _ } = e,
        E = T.A.getGuildId(),
        A = (0, c.DP)(),
        f = (0, o.bG)([I.default], () => I.default.locale);
    l()(E, "Guild Id must be defined");
    let p = u.A.get(s),
        m = r.toLocaleDateString(f, { month: "long", day: "numeric", year: "numeric" });
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.WARNING,
        children: [
            (0, i.jsx)(d.PM, { onClick: () => n(N.i.USER_DISMISS), noticeType: _ }),
            (0, i.jsx)("img", {
                src: "light" === A ? p?.icon.blackSVG : p?.icon.whiteSVG,
                alt: p?.name,
                className: a()(R.tV, R.Y5),
            }),
            O.intl.format(C.default.iMCLA5, { connectionName: p?.name, date: m }),
            (0, i.jsx)(d.Z_, {
                onClick: () => {
                    t(N.i.TAKE_ACTION), h.A.open(E, S.BEX.ROLES);
                },
                noticeType: _,
                className: R.NS,
                children: O.intl.string(C.default.spsZYI),
            }),
            (0, i.jsx)(d.zr, {
                onClick: () => {
                    n(N.i.USER_DISMISS);
                },
                className: R.go,
                children: O.intl.string(C.default["MVB/Ab"]),
            }),
        ],
    });
}
function y(e) {
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
