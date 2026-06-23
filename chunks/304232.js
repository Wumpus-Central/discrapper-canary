n.d(a, { default: () => _ });
var t = n(627968);
n(64700);
var d = n(980707),
    i = n(477782),
    r = n(442433),
    s = n(734057),
    l = n(174459),
    c = n(863922),
    u = n(652215),
    o = n(375708);
function _(e) {
    let { summary: a, onSelect: n } = e;
    return (0, t.jsx)(d.W, {
        "data-menu-migrated-auto": !0,
        onSelect: n,
        navId: "channel-summaries-context-menu",
        "aria-label": o.intl.string(o.t.ogxXGq),
        onClose: r.Z_,
        children: (0, t.jsx)(i.rX, {
            children: (0, t.jsx)(i.Dr, {
                id: "delete-summary",
                color: "danger",
                label: o.intl.string(o.t["5AwUIg"]),
                action: function () {
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
