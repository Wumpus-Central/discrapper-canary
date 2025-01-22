r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(135869),
    s = r(22382),
    l = r(747071),
    u = r(695346),
    c = r(626135),
    d = r(981631);
function f(e, n) {
    let { currentPreviewRef: r } = a.useContext(o.Z),
        [i, f] = a.useState(!1);
    return {
        playing: i,
        playSound: a.useCallback(() => {
            var i;
            if (null == e) return !1;
            let a = new Audio((0, s.Z)(e.soundId));
            return (
                null != r.current && r.current.pause(),
                (r.current = a),
                (a.currentTime = 0),
                (a.volume = (0, l.Z)(null !== (i = null == e ? void 0 : e.volume) && void 0 !== i ? i : 1, u.AY.getSetting())),
                a.play(),
                (a.onplay = () => f(!0)),
                (a.onpause = () => f(!1)),
                (a.onended = () => f(!1)),
                c.default.track(d.rMx.SOUNDMOJI_PLAY, {
                    guild_id: null == n ? void 0 : n.guild_id,
                    channel_id: null == n ? void 0 : n.id,
                    sound_guild_id: null == e ? void 0 : e.guildId,
                    sound_id: null == e ? void 0 : e.soundId
                }),
                !0
            );
        }, [e, n, r, f])
    };
}
