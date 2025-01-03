r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(442837),
    a = r(661869),
    s = r(387343),
    o = r(449605),
    l = r(199902),
    u = r(592125),
    c = r(496675),
    d = r(158776),
    f = r(979651),
    _ = r(561308);
function h(e) {
    let n = (0, i.e7)(
            [f.Z, u.Z, c.Z],
            () => {
                if (!(0, _.kr)(e) || e.author_type !== a.i.USER) return null;
                let n = f.Z.getVoiceStateForUser(e.author_id),
                    r = u.Z.getChannel(null == n ? void 0 : n.channelId),
                    i = 'channel_id' in e ? e.channel_id : null;
                return (null == i || i === (null == n ? void 0 : n.channelId)) && (null == r || (0, s.Z)(r, c.Z)) ? r : null;
            },
            [e]
        ),
        r = (0, i.e7)([d.Z], () => d.Z.getPrimaryActivity(e.author_id, null == n ? void 0 : n.guild_id), [n, e]),
        h = (0, i.e7)(
            [l.Z],
            () => {
                var n;
                return null !== (n = l.Z.getAnyStreamForUser(e.author_id)) && void 0 !== n ? n : void 0;
            },
            [e]
        ),
        { previewUrl: p } = (0, o.Z)(null == h ? void 0 : h.guildId, null == h ? void 0 : h.channelId, null == h ? void 0 : h.ownerId);
    return {
        channel: n,
        activity: r,
        streamPreviewUrl: p,
        stream: h
    };
}
