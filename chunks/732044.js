n.d(t, { A: () => h });
var i = n(627968),
    l = n(311907),
    s = n(534890),
    a = n(604681),
    r = n(736339),
    o = n(761640),
    d = n(58736),
    c = n(652215),
    u = n(678959);
function h(e) {
    let { channelId: t } = e,
        n = (0, l.bG)([o.Ay], () => o.Ay.getSection(t), [t]) === c.YvQ.CONVERSATIONS,
        h = (0, l.bG)([r.A], () => r.A.getChannelConversations(t).length > 0, [t]);
    return (0, i.jsx)(d.In, {
        onClick: a.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: s.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: h ? u.q : void 0,
        selected: n,
        showBadge: h,
    });
}
