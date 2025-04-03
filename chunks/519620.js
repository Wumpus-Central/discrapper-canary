n.d(d, { default: () => o });
var i = n(200651);
n(192379);
var a = n(481060),
    t = n(239091),
    l = n(592125),
    s = n(626135),
    r = n(479313),
    c = n(981631),
    u = n(388032);
function o(e) {
    let { summary: d, onSelect: n } = e;
    return (0, i.jsx)(a.v2r, {
        onSelect: n,
        navId: 'channel-summaries-context-menu',
        'aria-label': u.NW.string(u.t.ogxXGh),
        onClose: t.Zy,
        children: (0, i.jsx)(a.kSQ, {
            children: (0, i.jsx)(a.sNh, {
                id: 'delete-summary',
                color: 'danger',
                label: u.NW.string(u.t['5AwUIi']),
                action: () => {
                    (0, r.$l)(d);
                    let e = l.Z.getChannel(d.channelId);
                    s.default.track(c.rMx.SUMMARY_DELETED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        summary_id: d.id,
                        start_message_id: d.startId,
                        end_message_id: d.endId
                    });
                }
            })
        })
    });
}
