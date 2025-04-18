n.d(t, { Z: () => E }), n(388685);
var r = n(570140),
    i = n(147913),
    a = n(314897),
    o = n(967368),
    s = n(592125),
    l = n(944486),
    c = n(631768),
    u = n(981631);
function d(e, t, n) {
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
function f() {
    let e = l.Z.getVoiceChannelId(),
        t = o.Z.bitrate;
    if (null == e) return;
    let n = s.Z.getChannel(e);
    null != n &&
        t !== n.bitrate &&
        r.Z.dispatch({
            type: 'SET_CHANNEL_BITRATE',
            bitrate: n.bitrate
        });
}
function _() {
    var e;
    let t = l.Z.getVoiceChannelId(),
        n = c.Z.mode;
    if (null == t) return;
    let i = s.Z.getChannel(t);
    if (null == i) return;
    let a = null != (e = i.videoQualityMode) ? e : u.Ucd.AUTO;
    n !== a &&
        r.Z.dispatch({
            type: 'SET_CHANNEL_VIDEO_QUALITY_MODE',
            mode: a
        });
}
function p() {
    f(), _();
}
function h(e) {
    let { channels: t } = e;
    for (let e of t) l.Z.getVoiceChannelId() === e.id && p();
}
function m(e) {
    let { voiceStates: t } = e;
    t.forEach((e) => {
        a.default.getSessionId() === e.sessionId && p();
    });
}
class g extends i.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                CHANNEL_UPDATES: h,
                VOICE_STATE_UPDATES: m
            });
    }
}
let E = new g();
