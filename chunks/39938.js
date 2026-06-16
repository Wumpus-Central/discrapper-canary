"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = !1,
    a = !1;
class o extends i.Ay.DeviceSettingsStore {
    static displayName = "StageMusicStore";
    static persistKey = "StageMusicStore";
    initialize(e) {
        null != e && (s = e);
    }
    isMuted() {
        return s;
    }
    shouldPlay() {
        return a;
    }
    getUserAgnosticState() {
        return s;
    }
}
let l = new o(r.h, {
    STAGE_MUSIC_MUTE: function (e) {
        let { muted: t } = e;
        (s = t), (a = !1);
    },
    STAGE_MUSIC_PLAY: function (e) {
        let { play: t } = e;
        a = t;
    },
    VOICE_CHANNEL_SELECT: function () {
        a = !1;
    },
});
