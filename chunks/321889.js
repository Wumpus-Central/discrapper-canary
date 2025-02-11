n.d(t, { Z: () => c });
var i = n(192379),
    r = n(22382),
    a = n(747071),
    s = n(469121),
    o = n(695346),
    l = n(626135),
    u = n(981631);
function c(e, t) {
    let { isPlaying: n, playSound: c } = (0, s.Z)(null != e ? (0, r.Z)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: i.useCallback(() => {
            var n;
            return (
                !!c({ volume: (0, a.Z)(null !== (n = null == e ? void 0 : e.volume) && void 0 !== n ? n : 1, o.AY.getSetting()) }) &&
                (l.default.track(u.rMx.SOUNDMOJI_PLAY, {
                    guild_id: null == t ? void 0 : t.guild_id,
                    channel_id: null == t ? void 0 : t.id,
                    sound_guild_id: null == e ? void 0 : e.guildId,
                    sound_id: null == e ? void 0 : e.soundId
                }),
                !0)
            );
        }, [null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, c, null == e ? void 0 : e.guildId, null == e ? void 0 : e.soundId, null == e ? void 0 : e.volume])
    };
}
