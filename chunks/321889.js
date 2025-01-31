n.d(t, { Z: () => c }), n(47120);
var i = n(192379),
    r = n(135869),
    a = n(22382),
    s = n(747071),
    o = n(695346),
    l = n(626135),
    u = n(981631);
function c(e, t) {
    let { currentPreviewRef: n } = i.useContext(r.Z),
        [c, d] = i.useState(!1);
    return {
        playing: c,
        playSound: i.useCallback(() => {
            var i;
            if (null == e) return !1;
            let r = new Audio((0, a.Z)(e.soundId));
            return (
                null != n.current && n.current.pause(),
                (n.current = r),
                (r.currentTime = 0),
                (r.volume = (0, s.Z)(null !== (i = null == e ? void 0 : e.volume) && void 0 !== i ? i : 1, o.AY.getSetting())),
                r.play(),
                (r.onplay = () => d(!0)),
                (r.onpause = () => d(!1)),
                (r.onended = () => d(!1)),
                l.default.track(u.rMx.SOUNDMOJI_PLAY, {
                    guild_id: null == t ? void 0 : t.guild_id,
                    channel_id: null == t ? void 0 : t.id,
                    sound_guild_id: null == e ? void 0 : e.guildId,
                    sound_id: null == e ? void 0 : e.soundId
                }),
                !0
            );
        }, [e, t, n, d])
    };
}
