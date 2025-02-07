n.d(t, { Z: () => _ });
var i = n(442837),
    r = n(661869),
    a = n(387343),
    s = n(449605),
    o = n(199902),
    l = n(592125),
    u = n(496675),
    c = n(158776),
    d = n(979651),
    f = n(561308);
function _(e) {
    let t = (0, f.kr)(e),
        n = (0, i.e7)(
            [d.Z, l.Z, u.Z],
            () => {
                if (!t || e.author_type !== r.i.USER) return null;
                let n = d.Z.getVoiceStateForUser(e.author_id),
                    i = l.Z.getChannel(null == n ? void 0 : n.channelId),
                    s = 'channel_id' in e ? e.channel_id : null;
                return (null == s || s === (null == n ? void 0 : n.channelId)) && (null == i || (0, a.Z)(i, u.Z)) ? i : null;
            },
            [e, t]
        ),
        _ = (0, i.e7)([c.Z], () => (null != t ? c.Z.getPrimaryActivity(e.author_id, null == n ? void 0 : n.guild_id) : null), [n, e.author_id, t]),
        p = (0, i.e7)([o.Z], () => (t ? o.Z.getStreamForUser(e.author_id, null == n ? void 0 : n.guild_id) : null), [n, e.author_id, t]),
        { previewUrl: h } = (0, s.Z)(null == p ? void 0 : p.guildId, null == p ? void 0 : p.channelId, null == p ? void 0 : p.ownerId);
    return {
        channel: n,
        activity: _,
        streamPreviewUrl: h,
        stream: p
    };
}
