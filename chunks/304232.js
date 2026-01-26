a.d(d, {
    default: () => o,
});
var n = a(627968);
a(64700);
var t = a(397927),
    i = a(442433),
    l = a(734057),
    r = a(954571),
    s = a(863922),
    u = a(652215),
    c = a(985018);

function o(e) {
    let { summary: d, onSelect: a } = e;
    return (0, n.jsx)(t.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: a,
        navId: "channel-summaries-context-menu",
        "aria-label": c.intl.string(c.t.ogxXGq),
        onClose: i.Z_,
        children: (0, n.jsx)(t.rXV, {
            children: (0, n.jsx)(t.Drp, {
                id: "delete-summary",
                color: "danger",
                label: c.intl.string(c.t["5AwUIg"]),
                action: () => {
                    (0, s.O$)(d);
                    let e = l.A.getChannel(d.channelId);
                    r.default.track(u.HAw.SUMMARY_DELETED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        summary_id: d.id,
                        start_message_id: d.startId,
                        end_message_id: d.endId,
                    });
                },
            }),
        }),
    });
}
