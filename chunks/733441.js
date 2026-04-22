n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(177953),
    a = n(604681),
    r = n(58149),
    o = n(761640),
    d = n(967198),
    c = n(58736),
    u = n(652215),
    h = n(985018);
function A(e) {
    let { channelId: t } = e,
        n = (0, l.bG)([o.Ay], () => o.Ay.getSection(t)),
        A = (0, l.bG)([d.A], () => d.A.getGuildId()),
        _ = n === u.YvQ.MEMBERS;
    return (0, i.jsx)(c.In, {
        tooltip: _ ? h.intl.string(h.t.Axvx8c) : h.intl.string(h.t.gxChDx),
        icon: s.n,
        onClick: () => {
            r.Ay.trackWithMetadata(u.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: A, member_list_open: !_ }),
                a.A.toggleMembersSection();
        },
        selected: _,
    });
}
