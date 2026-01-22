n.d(t, {
    A: () => u,
});
var r = n(64700),
    i = n(102597),
    a = n(904054),
    s = n(584014),
    o = n(253932),
    l = n(954571),
    c = n(652215);

function u(e, t) {
    let { isPlaying: n, playSound: u } = (0, s.A)(null != e ? (0, i.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: r.useCallback(() => {
            var n;
            return (
                !!u({
                    volume: (0, a.A)(null != (n = null == e ? void 0 : e.volume) ? n : 1, o.HO.getSetting()),
                }) &&
                (l.default.track(c.HAw.SOUNDMOJI_PLAY, {
                    guild_id: null == t ? void 0 : t.guild_id,
                    channel_id: null == t ? void 0 : t.id,
                    sound_guild_id: null == e ? void 0 : e.guildId,
                    sound_id: null == e ? void 0 : e.soundId,
                }),
                !0)
            );
        }, [
            null == t ? void 0 : t.guild_id,
            null == t ? void 0 : t.id,
            u,
            null == e ? void 0 : e.guildId,
            null == e ? void 0 : e.soundId,
            null == e ? void 0 : e.volume,
        ]),
    };
}
