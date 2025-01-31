n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(816782),
    s = n(367907),
    o = n(433355),
    c = n(914010),
    d = n(665149),
    u = n(981631),
    h = n(388032);
function p(e) {
    let { channelId: t } = e,
        n = (0, l.e7)([o.ZP], () => o.ZP.getSection(t)),
        p = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
        m = n === u.ULH.MEMBERS;
    return (0, i.jsx)(d.JO, {
        tooltip: m ? h.intl.string(h.t.Axvx8f) : h.intl.string(h.t.gxChDw),
        icon: a.BFJ,
        onClick: () => {
            s.ZP.trackWithMetadata(u.rMx.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: p,
                member_list_open: !m
            }),
                r.Z.toggleMembersSection();
        },
        selected: m
    });
}
