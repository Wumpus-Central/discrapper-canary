d.d(a, { default: () => _ });
var t = d(627968);
d(64700);
var n = d(861672),
    i = d(477782),
    r = d(442433),
    s = d(734057),
    l = d(954571),
    c = d(863922),
    u = d(652215),
    o = d(985018);
function _(e) {
    let { summary: a, onSelect: d } = e;
    return (0, t.jsx)(n.W, {
        "data-menu-migrated-auto": !0,
        onSelect: d,
        navId: "channel-summaries-context-menu",
        "aria-label": o.intl.string(o.t.ogxXGq),
        onClose: r.Z_,
        children: (0, t.jsx)(i.rX, {
            children: (0, t.jsx)(i.Dr, {
                id: "delete-summary",
                color: "danger",
                label: o.intl.string(o.t["5AwUIg"]),
                action: () => {
                    (0, c.O$)(a);
                    let e = s.A.getChannel(a.channelId);
                    l.default.track(u.HAw.SUMMARY_DELETED, {
                        guild_id: e?.guild_id,
                        channel_id: e?.id,
                        summary_id: a.id,
                        start_message_id: a.startId,
                        end_message_id: a.endId,
                    });
                },
            }),
        }),
    });
}
