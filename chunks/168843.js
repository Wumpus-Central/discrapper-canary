n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(816782),
    s = n(367907),
    o = n(433355),
    c = n(914010),
    d = n(665149),
    u = n(981631),
    p = n(388032);
function h(e) {
    let { channelId: t } = e,
        n = (0, i.e7)([o.ZP], () => o.ZP.getSection(t)),
        h = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        f = n === u.ULH.MEMBERS;
    return (0, r.jsx)(d.JO, {
        tooltip: f ? p.intl.string(p.t.Axvx8c) : p.intl.string(p.t.gxChDx),
        icon: l.BFJ,
        onClick: () => {
            s.ZP.trackWithMetadata(u.rMx.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: h,
                member_list_open: !f,
            }),
                a.Z.toggleMembersSection();
        },
        selected: f,
    });
}
