var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = !1,
    u = !1;
function c(e) {
    let { muted: n } = e;
    (l = n), (u = !1);
}
function d(e) {
    let { play: n } = e;
    u = n;
}
function f() {
    u = !1;
}
class p extends (i = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (l = e);
    }
    isMuted() {
        return l;
    }
    shouldPlay() {
        return u;
    }
    getUserAgnosticState() {
        return l;
    }
}
s(p, 'displayName', 'StageMusicStore'),
    s(p, 'persistKey', 'StageMusicStore'),
    (n.Z = new p(o.Z, {
        STAGE_MUSIC_MUTE: c,
        STAGE_MUSIC_PLAY: d,
        VOICE_CHANNEL_SELECT: f
    }));
