"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let a = !1,
    s = !1;
function o(e) {
    let { muted: t } = e;
    (a = t), (s = !1);
}
function l(e) {
    let { play: t } = e;
    s = t;
}
function u() {
    s = !1;
}
class c extends r.Ay.DeviceSettingsStore {
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
let d = new c(i.h, { STAGE_MUSIC_MUTE: o, STAGE_MUSIC_PLAY: l, VOICE_CHANNEL_SELECT: u });
