n.d(t, { A: () => h });
var i = n(627968),
    l = n(311907),
    s = n(397927),
    a = n(604681),
    r = n(736339),
    o = n(761640),
    c = n(58736),
    d = n(652215),
    u = n(983839);
function h(e) {
    let { channelId: t } = e,
        n = (0, l.bG)([o.Ay], () => o.Ay.getSection(t), [t]) === d.YvQ.CONVERSATIONS,
        h = (0, l.bG)([r.A], () => r.A.getChannelConversations(t).length > 0, [t]);
    return (0, i.jsx)(c.In, {
        onClick: a.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: s.oyn,
        iconSize: 20,
        "aria-label": "Conversations",
        className: h ? u.q : void 0,
        selected: n,
        showBadge: h,
    });
}
