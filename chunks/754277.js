n.d(t, { Z: () => f });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
    ((s = t), (l = !1));
}
function u(e) {
    let { play: t } = e;
    l = t;
}
function d() {
    l = !1;
}
class _ extends (r = i.ZP.DeviceSettingsStore) {
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
(o(_, 'displayName', 'StageMusicStore'), o(_, 'persistKey', 'StageMusicStore'));
let f = new _(a.Z, {
    STAGE_MUSIC_MUTE: c,
    STAGE_MUSIC_PLAY: u,
    VOICE_CHANNEL_SELECT: d
});
