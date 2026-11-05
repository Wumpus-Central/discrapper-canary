var l = n(855986),
    r = n(6161),
    o = n(890615),
    i = n(450149),
    a = n(616356),
    s = n(734057),
    c = n(576705),
    u = n(290863),
    d = n(977997),
    x = n(583846);
n.d(
    e,
    {},
    {
        A: function (t) {
            let e = (0, x.JM)(t),
                n = (0, l.bG)(
                    [d.A, s.A, c.A],
                    () => {
                        if (!e || t.author_type !== r.ContentInventoryAuthorType.USER) return null;
                        let n = d.A.getVoiceStateForUser(t.author_id),
                            l = s.A.getChannel(n?.channelId),
                            i = "channel_id" in t ? t.channel_id : null;
                        return (null == i || i === n?.channelId) && (null == l || (0, o.A)(l, c.A)) ? l : null;
                    },
                    [t, e],
                ),
                C = (0, l.bG)([u.A], () => (null != e ? u.A.getPrimaryActivity(t.author_id, n?.guild_id) : null), [
                    n,
                    t.author_id,
                    e,
                ]),
                A = (0, l.bG)([a.A], () => (e ? a.A.getStreamForUser(t.author_id, n?.guild_id) : null), [
                    n,
                    t.author_id,
                    e,
                ]),
                { previewUrl: h } = (0, i.A)(A?.guildId, A?.channelId, A?.ownerId);
            return { channel: n, activity: C, streamPreviewUrl: h, stream: A };
        },
    },
);
