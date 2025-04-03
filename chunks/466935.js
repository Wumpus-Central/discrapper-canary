n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(970606),
    s = n(693546),
    c = n(826581),
    u = n(246364),
    d = n(98493),
    p = n(703656),
    h = n(496675),
    f = n(785195),
    g = n(434479),
    m = n(981631),
    b = n(176505),
    y = n(388032);
function _(e) {
    let { guild: t, selected: n } = e,
        _ = (0, l.e7)([h.Z], () => h.Z.can(m.Plq.KICK_MEMBERS, t)),
        v = (0, l.e7)([c.Z], () => c.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        O = _ && null != v ? v : 0;
    return (
        i.useEffect(() => {
            _ &&
                s.Z.fetchGuildJoinRequests({
                    guildId: t.id,
                    status: u.wB.SUBMITTED,
                    limit: d.p
                });
        }, [_, t.id]),
        (0, r.jsx)(g.m, {
            id: 'application-review-'.concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(f.Z, {
                    className: e,
                    width: 24,
                    height: 24
                }),
            text: y.NW.string(y.t.tcvVXF),
            selected: n,
            onClick: () => {
                (0, a.Q2)({
                    guildId: t.id,
                    source: m.jXE.CHANNEL_LIST,
                    tab: b.oC.MEMBER_APPLICATIONS
                }),
                    (0, p.uL)(m.Z5c.CHANNEL(t.id, b.oC.MEMBER_APPLICATIONS));
            },
            trailing: O > 0 ? (0, r.jsx)(o.mAB, { count: O }) : null
        })
    );
}
