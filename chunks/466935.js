n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(970606),
    a = n(693546),
    c = n(826581),
    u = n(246364),
    d = n(98493),
    h = n(703656),
    p = n(496675),
    f = n(785195),
    g = n(434479),
    m = n(981631),
    b = n(176505),
    _ = n(388032);
function y(e) {
    let { guild: t, selected: n } = e,
        y = (0, l.e7)([p.Z], () => p.Z.can(m.Plq.KICK_MEMBERS, t)),
        v = (0, l.e7)([c.Z], () => c.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        O = y && null != v ? v : 0;
    return (
        i.useEffect(() => {
            y &&
                a.Z.fetchGuildJoinRequests({
                    guildId: t.id,
                    status: u.wB.SUBMITTED,
                    limit: d.p
                });
        }, [y, t.id]),
        (0, r.jsx)(g.m, {
            id: 'application-review-'.concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(f.Z, {
                    className: e,
                    width: 24,
                    height: 24
                }),
            text: _.NW.string(_.t.tcvVXF),
            selected: n,
            onClick: () => {
                (0, s.Q2)({
                    guildId: t.id,
                    source: m.jXE.CHANNEL_LIST,
                    tab: b.oC.MEMBER_APPLICATIONS
                }),
                    (0, h.uL)(m.Z5c.CHANNEL(t.id, b.oC.MEMBER_APPLICATIONS));
            },
            trailing: O > 0 ? (0, r.jsx)(o.mAB, { count: O }) : null
        })
    );
}
