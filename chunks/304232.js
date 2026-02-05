t.d(a, { default: () => o });
var d = t(627968);
t(64700);
var n = t(397927),
    i = t(442433),
    r = t(734057),
    s = t(954571),
    l = t(863922),
    c = t(652215),
    u = t(985018);
function o(e) {
    let { summary: a, onSelect: t } = e;
    return (0, d.jsx)(n.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: t,
        navId: "channel-summaries-context-menu",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: i.Z_,
        children: (0, d.jsx)(n.rXV, {
            children: (0, d.jsx)(n.Drp, {
                id: "delete-summary",
                color: "danger",
                label: u.intl.string(u.t["5AwUIg"]),
                action: () => {
                    (0, l.O$)(a);
                    let e = r.A.getChannel(a.channelId);
                    s.default.track(c.HAw.SUMMARY_DELETED, {
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
