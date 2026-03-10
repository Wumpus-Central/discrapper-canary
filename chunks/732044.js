"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(604681),
    r = n(736339),
    o = n(761640),
    c = n(58736),
    d = n(652215),
    u = n(320378);
function h(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([o.Ay], () => o.Ay.getSection(t), [t]) === d.YvQ.CONVERSATIONS,
        h = (0, s.bG)([r.A], () => r.A.getChannelConversations(t).length > 0, [t]);
    return (0, i.jsx)(c.In, {
        onClick: a.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: l.oyn,
        iconSize: 20,
        "aria-label": "Conversations",
        className: h ? u.q : void 0,
        selected: n,
        showBadge: h,
    });
}
