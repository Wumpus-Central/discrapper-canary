n.d(d, {
    default: () => o,
});
var a = n(627968);
n(64700);
var i = n(397927),
    t = n(442433),
    l = n(734057),
    r = n(954571),
    s = n(863922),
    u = n(652215),
    c = n(985018);

function o(e) {
    let { summary: d, onSelect: n } = e;
    return (0, a.jsx)(i.W1t, {
        "data-menu-migration-ready": !0,
        onSelect: n,
        navId: "channel-summaries-context-menu",
        "aria-label": c.intl.string(c.t.ogxXGq),
        onClose: t.Z_,
        children: (0, a.jsx)(i.rXV, {
            children: (0, a.jsx)(i.Drp, {
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
