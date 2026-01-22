n.d(d, { default: () => o });
var i = n(627968);
n(64700);
var t = n(397927),
    a = n(442433),
    l = n(734057),
    s = n(954571),
    r = n(863922),
    c = n(652215),
    u = n(985018);
function o(e) {
    let { summary: d, onSelect: n } = e;
    return (0, i.jsx)(t.W1t, {
        onSelect: n,
        navId: "channel-summaries-context-menu",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: a.Z_,
        children: (0, i.jsx)(t.rXV, {
            children: (0, i.jsx)(t.Drp, {
                id: "delete-summary",
                color: "danger",
                label: u.intl.string(u.t["5AwUIg"]),
                action: () => {
                    (0, r.O$)(d);
                    let e = l.A.getChannel(d.channelId);
                    s.default.track(c.HAw.SUMMARY_DELETED, {
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
