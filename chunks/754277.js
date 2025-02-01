n.d(t, { Z: () => _ });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = !1,
    l = !1;
function u(e) {
    let { muted: t } = e;
    (o = t), (l = !1);
}
function c(e) {
    let { play: t } = e;
    l = t;
}
function d() {
    l = !1;
}
class f extends (i = r.ZP.DeviceSettingsStore) {
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
s(f, 'displayName', 'StageMusicStore'), s(f, 'persistKey', 'StageMusicStore');
let _ = new f(a.Z, {
    STAGE_MUSIC_MUTE: u,
    STAGE_MUSIC_PLAY: c,
    VOICE_CHANNEL_SELECT: d
});
