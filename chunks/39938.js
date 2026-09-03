n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = !1,
    s = !1;
class l extends i.Ay.DeviceSettingsStore {
    static displayName = "StageMusicStore";
    static persistKey = "StageMusicStore";
    initialize(e) {
        null != e && (a = e);
    }
    isMuted() {
        return a;
    }
    shouldPlay() {
        return s;
    }
    getUserAgnosticState() {
        return a;
    }
}
let o = new l(r.h, {
    STAGE_MUSIC_MUTE: function (e) {
        let { muted: t } = e;
        (a = t), (s = !1);
    },
    STAGE_MUSIC_PLAY: function (e) {
        let { play: t } = e;
        s = t;
    },
    VOICE_CHANNEL_SELECT: function () {
        s = !1;
    },
});
