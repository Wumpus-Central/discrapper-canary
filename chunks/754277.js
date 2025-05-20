n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = !1,
    l = !1;
function c(e) {
    let { muted: t } = e;
    (s = t), (l = !1);
}
function u(e) {
    let { play: t } = e;
    l = t;
}
function d() {
    l = !1;
}
class f extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (s = e);
    }
    isMuted() {
        return s;
    }
    shouldPlay() {
        return l;
    }
    getUserAgnosticState() {
        return s;
    }
}
a(f, 'displayName', 'StageMusicStore'), a(f, 'persistKey', 'StageMusicStore');
let _ = new f(o.Z, {
    STAGE_MUSIC_MUTE: c,
    STAGE_MUSIC_PLAY: u,
    VOICE_CHANNEL_SELECT: d
});
