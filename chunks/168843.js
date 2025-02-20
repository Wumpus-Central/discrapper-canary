n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(816782),
    a = n(367907),
    s = n(433355),
    c = n(914010),
    u = n(665149),
    d = n(981631),
    p = n(388032);
function h(e) {
    let { channelId: t } = e,
        n = (0, i.e7)([s.ZP], () => s.ZP.getSection(t)),
        h = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        f = n === d.ULH.MEMBERS;
    return (0, r.jsx)(u.JO, {
        tooltip: f ? p.NW.string(p.t.Axvx8f) : p.NW.string(p.t.gxChDw),
        icon: l.BFJ,
        onClick: () => {
            a.ZP.trackWithMetadata(d.rMx.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: h,
                member_list_open: !f
            }),
                o.Z.toggleMembersSection();
        },
        selected: f
    });
}
