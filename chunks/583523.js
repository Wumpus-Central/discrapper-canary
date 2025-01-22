var i = r(47120);
var a = r(570140),
    o = r(147913),
    s = r(314897),
    l = r(967368),
    u = r(592125),
    c = r(944486),
    d = r(631768),
    f = r(981631);
function p(e, n, r) {
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
function h() {
    let e = c.Z.getVoiceChannelId(),
        n = l.Z.bitrate;
    if (null == e) return;
    let r = u.Z.getChannel(e);
    if (null != r)
        n !== r.bitrate &&
            a.Z.dispatch({
                type: 'SET_CHANNEL_BITRATE',
                bitrate: r.bitrate
            });
}
function _() {
    var e;
    let n = c.Z.getVoiceChannelId(),
        r = d.Z.mode;
    if (null == n) return;
    let i = u.Z.getChannel(n);
    if (null == i) return;
    let o = null !== (e = i.videoQualityMode) && void 0 !== e ? e : f.Ucd.AUTO;
    r !== o &&
        a.Z.dispatch({
            type: 'SET_CHANNEL_VIDEO_QUALITY_MODE',
            mode: o
        });
}
function m() {
    h(), _();
}
function g(e) {
    let { channels: n } = e;
    for (let e of n) c.Z.getVoiceChannelId() === e.id && m();
}
function E(e) {
    let { voiceStates: n } = e;
    n.forEach((e) => {
        s.default.getSessionId() === e.sessionId && m();
    });
}
class v extends o.Z {
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                CHANNEL_UPDATES: g,
                VOICE_STATE_UPDATES: E
            });
    }
}
n.Z = new v();
