n.d(t, { Z: () => f }), n(47120);
var i = n(192379),
    r = n(481060),
    a = n(135869),
    s = n(22382),
    o = n(747071),
    l = n(695346),
    u = n(626135),
    c = n(981631),
    d = n(388032);
function f(e, t) {
    let { currentPreviewRef: n } = i.useContext(a.Z),
        [f, _] = i.useState(!1);
    return {
        playing: f,
        playSound: i.useCallback(() => {
            var i;
            if (null == e) return !1;
            let a = new Audio((0, s.Z)(e.soundId));
            return (
                null != n.current && n.current.pause(),
                (n.current = a),
                (a.currentTime = 0),
                (a.volume = (0, o.Z)(null !== (i = null == e ? void 0 : e.volume) && void 0 !== i ? i : 1, l.AY.getSetting())),
                a.play().catch(() => {
                    'Safari' === platform.name && (0, r.showToast)((0, r.createToast)(d.intl.string(d.t.qAsyjI), r.ToastType.FAILURE));
                }),
                (a.onplay = () => _(!0)),
                (a.onpause = () => _(!1)),
                (a.onended = () => _(!1)),
                u.default.track(c.rMx.SOUNDMOJI_PLAY, {
                    guild_id: null == t ? void 0 : t.guild_id,
                    channel_id: null == t ? void 0 : t.id,
                    sound_guild_id: null == e ? void 0 : e.guildId,
                    sound_id: null == e ? void 0 : e.soundId
                }),
                !0
            );
        }, [e, t, n, _])
    };
}
