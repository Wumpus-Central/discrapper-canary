d.d(n, { default: () => o });
var i = d(200651);
d(192379);
var t = d(481060),
    a = d(239091),
    l = d(592125),
    s = d(626135),
    r = d(479313),
    c = d(981631),
    u = d(388032);
function o(e) {
    let { summary: n, onSelect: d } = e;
    return (0, i.jsx)(t.v2r, {
        onSelect: d,
        navId: 'channel-summaries-context-menu',
        'aria-label': u.intl.string(u.t.ogxXGh),
        onClose: a.Zy,
        children: (0, i.jsx)(t.kSQ, {
            children: (0, i.jsx)(t.sNh, {
                id: 'delete-summary',
                color: 'danger',
                label: u.intl.string(u.t['5AwUIi']),
                action: () => {
                    (0, r.$l)(n);
                    let e = l.Z.getChannel(n.channelId);
                    s.default.track(c.rMx.SUMMARY_DELETED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        summary_id: n.id,
                        start_message_id: n.startId,
                        end_message_id: n.endId
                    });
                }
            })
        })
    });
}
