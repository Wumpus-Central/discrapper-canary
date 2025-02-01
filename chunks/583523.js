n.d(t, { Z: () => E }), n(47120);
var i = n(570140),
    r = n(147913),
    a = n(314897),
    s = n(967368),
    o = n(592125),
    l = n(944486),
    u = n(631768),
    c = n(981631);
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
        t = s.Z.bitrate;
    if (null == e) return;
    let n = o.Z.getChannel(e);
    null != n &&
        t !== n.bitrate &&
        i.Z.dispatch({
            type: 'SET_CHANNEL_BITRATE',
            bitrate: n.bitrate
        });
}
function _() {
    var e;
    let t = l.Z.getVoiceChannelId(),
        n = u.Z.mode;
    if (null == t) return;
    let r = o.Z.getChannel(t);
    if (null == r) return;
    let a = null !== (e = r.videoQualityMode) && void 0 !== e ? e : c.Ucd.AUTO;
    n !== a &&
        i.Z.dispatch({
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
class g extends r.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                CHANNEL_UPDATES: h,
                VOICE_STATE_UPDATES: m
            });
    }
}
let E = new g();
