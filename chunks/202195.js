n.d(t, {
    A: () => p,
});
var r = n(311907),
    i = n(6161),
    a = n(890615),
    s = n(450149),
    o = n(616356),
    l = n(734057),
    c = n(576705),
    u = n(290863),
    d = n(977997),
    f = n(583846);

function p(e) {
    let t = (0, f.JM)(e),
        n = (0, r.bG)([d.A, l.A, c.A], () => {
            if (!t || e.author_type !== i.t.USER) return null;
            let n = d.A.getVoiceStateForUser(e.author_id),
                r = l.A.getChannel(null == n ? void 0 : n.channelId),
                s = "channel_id" in e ? e.channel_id : null;
            return (null == s || s === (null == n ? void 0 : n.channelId)) && (null == r || (0, a.A)(r, c.A))
                ? r
                : null;
        }, [e, t]),
        p = (0, r.bG)(
            [u.A],
            () => (null != t ? u.A.getPrimaryActivity(e.author_id, null == n ? void 0 : n.guild_id) : null),
            [n, e.author_id, t],
        ),
        _ = (0, r.bG)([o.A], () => (t ? o.A.getStreamForUser(e.author_id, null == n ? void 0 : n.guild_id) : null), [
            n,
            e.author_id,
            t,
        ]),
        { previewUrl: h } = (0, s.A)(
            null == _ ? void 0 : _.guildId,
            null == _ ? void 0 : _.channelId,
            null == _ ? void 0 : _.ownerId,
        );
    return {
        channel: n,
        activity: p,
        streamPreviewUrl: h,
        stream: _,
    };
}
