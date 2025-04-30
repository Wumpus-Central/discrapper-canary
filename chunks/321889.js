n.d(t, { Z: () => u });
var r = n(192379),
    i = n(22382),
    o = n(747071),
    a = n(469121),
    s = n(695346),
    l = n(626135),
    c = n(981631);
function u(e, t) {
    let { isPlaying: n, playSound: u } = (0, a.Z)(null != e ? (0, i.Z)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: r.useCallback(() => {
            var n;
            return (
                !!u({ volume: (0, o.Z)(null != (n = null == e ? void 0 : e.volume) ? n : 1, s.AY.getSetting()) }) &&
                (l.default.track(c.rMx.SOUNDMOJI_PLAY, {
                    guild_id: null == t ? void 0 : t.guild_id,
                    channel_id: null == t ? void 0 : t.id,
                    sound_guild_id: null == e ? void 0 : e.guildId,
                    sound_id: null == e ? void 0 : e.soundId
                }),
                !0)
            );
        }, [null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, u, null == e ? void 0 : e.guildId, null == e ? void 0 : e.soundId, null == e ? void 0 : e.volume])
    };
}
