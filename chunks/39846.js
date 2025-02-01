n.d(t, { Z: () => I }), n(47120);
var i = n(147913),
    r = n(751571),
    a = n(88751),
    s = n(590415),
    o = n(189786),
    l = n(314897),
    u = n(592125),
    c = n(131951),
    d = n(19780),
    f = n(876506),
    _ = n(981631),
    p = n(761274);
function h(e, t, n) {
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
let m = null;
function g() {
    r.Z.requestPermission(p.Eu.AUDIO).then((e) => {
        e && (0, f.Z)(!0);
    }),
        c.Z.getMode() === _.pM4.PUSH_TO_TALK && r.Z.requestPermission(p.Eu.INPUT_MONITORING);
}
function E(e, t) {
    var n;
    return null === (n = u.Z.getChannel(t)) || void 0 === n || !n.isListenModeCapable() || a.ZP.isSpeaker(e, t);
}
function v(e) {
    return (0, s.gf)(e) === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
class y extends i.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (m = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n } = e;
            if (null != n && l.default.getId() === t && null != d.Z.getRTCConnectionId() && m !== n) {
                if (E(t, n)) {
                    (m = n), g();
                    return;
                }
                v(new o.Z(e)) && ((m = n), g());
            }
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            });
    }
}
let I = new y();
