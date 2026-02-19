"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(604681),
    a = n(58149),
    o = n(761640),
    c = n(967198),
    d = n(58736),
    u = n(652215),
    h = n(985018);
function A(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([o.Ay], () => o.Ay.getSection(t)),
        A = (0, s.bG)([c.A], () => c.A.getGuildId()),
        p = n === u.YvQ.MEMBERS;
    return (0, i.jsx)(d.In, {
        tooltip: p ? h.intl.string(h.t.Axvx8c) : h.intl.string(h.t.gxChDx),
        icon: l.nFg,
        onClick: () => {
            a.Ay.trackWithMetadata(u.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: A, member_list_open: !p }),
                r.A.toggleMembersSection();
        },
        selected: p,
    });
}
