n.d(e, { A: () => C });
var l = n(17928),
    r = n(6161),
    i = n(890615),
    o = n(450149),
    a = n(616356),
    s = n(734057),
    u = n(576705),
    c = n(290863),
    d = n(977997),
    x = n(583846);
function C(t) {
    let e = (0, x.JM)(t),
        n = (0, l.bG)(
            [d.A, s.A, u.A],
            () => {
                if (!e || t.author_type !== r.ContentInventoryAuthorType.USER) return null;
                let n = d.A.getVoiceStateForUser(t.author_id),
                    l = s.A.getChannel(n?.channelId),
                    o = "channel_id" in t ? t.channel_id : null;
                return (null == o || o === n?.channelId) && (null == l || (0, i.A)(l, u.A)) ? l : null;
            },
            [t, e],
        ),
        C = (0, l.bG)([c.A], () => (null != e ? c.A.getPrimaryActivity(t.author_id, n?.guild_id) : null), [
            n,
            t.author_id,
            e,
        ]),
        A = (0, l.bG)([a.A], () => (e ? a.A.getStreamForUser(t.author_id, n?.guild_id) : null), [n, t.author_id, e]),
        { previewUrl: h } = (0, o.A)(A?.guildId, A?.channelId, A?.ownerId);
    return { channel: n, activity: C, streamPreviewUrl: h, stream: A };
}
