n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(970606),
    s = n(693546),
    c = n(826581),
    d = n(246364),
    u = n(98493),
    h = n(703656),
    p = n(496675),
    m = n(785195),
    g = n(434479),
    f = n(981631),
    _ = n(176505),
    v = n(388032);
function C(e) {
    let { guild: t, selected: n } = e,
        C = (0, r.e7)([p.Z], () => p.Z.can(f.Plq.KICK_MEMBERS, t)),
        x = (0, r.e7)([c.Z], () => c.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        Z = C && null != x ? x : 0;
    return (
        l.useEffect(() => {
            C &&
                s.Z.fetchGuildJoinRequests({
                    guildId: t.id,
                    status: d.wB.SUBMITTED,
                    limit: u.p
                });
        }, [C, t.id]),
        (0, i.jsx)(g.m, {
            id: 'application-review-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(m.Z, {
                    className: e,
                    width: 24,
                    height: 24
                }),
            text: v.intl.string(v.t.tcvVXF),
            selected: n,
            onClick: () => {
                (0, o.Q2)({
                    guildId: t.id,
                    source: f.jXE.CHANNEL_LIST,
                    tab: _.oC.MEMBER_APPLICATIONS
                }),
                    (0, h.uL)(f.Z5c.CHANNEL(t.id, _.oC.MEMBER_APPLICATIONS));
            },
            trailing: Z > 0 ? (0, i.jsx)(a.mAB, { count: Z }) : null
        })
    );
}
