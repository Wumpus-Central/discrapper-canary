n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(604681),
    s = n(58149),
    o = n(761640),
    c = n(967198),
    u = n(58736),
    d = n(652215),
    f = n(985018);
function p(e) {
    let { channelId: t } = e,
        n = (0, l.bG)([o.Ay], () => o.Ay.getSection(t)),
        p = (0, l.bG)([c.A], () => c.A.getGuildId()),
        h = n === d.YvQ.MEMBERS;
    return (0, r.jsx)(u.In, {
        tooltip: h ? f.intl.string(f.t.Axvx8c) : f.intl.string(f.t.gxChDx),
        icon: i.nFg,
        onClick: () => {
            s.Ay.trackWithMetadata(d.HAw.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: p,
                member_list_open: !h,
            }),
                a.A.toggleMembersSection();
        },
        selected: h,
    });
}
