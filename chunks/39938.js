n.d(t, { A: () => p });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = !1,
    l = !1;
function c(e) {
    let { muted: t } = e;
    (o = t), (l = !1);
}
function u(e) {
    let { play: t } = e;
    l = t;
}
function d() {
    l = !1;
}
class f extends (r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        null != e && (o = e);
    }
    isMuted() {
        return o;
    }
    shouldPlay() {
        return l;
    }
    getUserAgnosticState() {
        return o;
    }
}
s(f, "displayName", "StageMusicStore"), s(f, "persistKey", "StageMusicStore");
let p = new f(a.h, {
    STAGE_MUSIC_MUTE: c,
    STAGE_MUSIC_PLAY: u,
    VOICE_CHANNEL_SELECT: d,
});
