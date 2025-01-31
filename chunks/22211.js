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
    let t = (0, i.e7)(
            [d.Z, l.Z, u.Z],
            () => {
                if (!(0, f.kr)(e) || e.author_type !== r.i.USER) return null;
                let t = d.Z.getVoiceStateForUser(e.author_id),
                    n = l.Z.getChannel(null == t ? void 0 : t.channelId),
                    i = 'channel_id' in e ? e.channel_id : null;
                return (null == i || i === (null == t ? void 0 : t.channelId)) && (null == n || (0, a.Z)(n, u.Z)) ? n : null;
            },
            [e]
        ),
        n = (0, i.e7)([c.Z], () => c.Z.getPrimaryActivity(e.author_id, null == t ? void 0 : t.guild_id), [t, e]),
        _ = (0, i.e7)(
            [o.Z],
            () => {
                var t;
                return null !== (t = o.Z.getAnyStreamForUser(e.author_id)) && void 0 !== t ? t : void 0;
            },
            [e]
        ),
        { previewUrl: p } = (0, s.Z)(null == _ ? void 0 : _.guildId, null == _ ? void 0 : _.channelId, null == _ ? void 0 : _.ownerId);
    return {
        channel: t,
        activity: n,
        streamPreviewUrl: p,
        stream: _
    };
}
