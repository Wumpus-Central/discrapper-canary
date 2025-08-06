n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(816782),
    s = n(367907),
    o = n(433355),
    c = n(914010),
    u = n(665149),
    d = n(981631),
    h = n(388032);
function p(e) {
    let { channelId: t } = e,
        n = (0, i.e7)([o.ZP], () => o.ZP.getSection(t)),
        p = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        f = n === d.ULH.MEMBERS;
    return (0, r.jsx)(u.JO, {
        tooltip: f ? h.intl.string(h.t.Axvx8f) : h.intl.string(h.t.gxChDw),
        icon: l.BFJ,
        onClick: () => {
            s.ZP.trackWithMetadata(d.rMx.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: p,
                member_list_open: !f,
            }),
                a.Z.toggleMembersSection();
        },
        selected: f,
    });
}
