n.d(t, { A: () => O }), n(896048);
var r = n(439372),
    i = n(674966),
    a = n(312006),
    s = n(105530),
    o = n(288737),
    l = n(961350),
    c = n(734057),
    u = n(430452),
    d = n(383501),
    f = n(202232),
    p = n(652215),
    _ = n(765682);
function h(e, t, n) {
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
let m = null;
function g() {
    i.A.requestPermission(_.iL.AUDIO).then((e) => {
        e && (0, f.A)(!0);
    }),
        u.A.getMode() === p.TBI.PUSH_TO_TALK && i.A.requestPermission(_.iL.INPUT_MONITORING);
}
function E(e, t) {
    var n;
    return null == (n = c.A.getChannel(t)) || !n.isListenModeCapable() || a.Ay.isSpeaker(e, t);
}
function b(e) {
    return (0, s.eY)(e) === s.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
class y extends r.A {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (m = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n } = e;
            if (null != n && l.default.getId() === t && null != d.A.getRTCConnectionId() && m !== n) {
                if (E(t, n)) {
                    (m = n), g();
                    return;
                }
                b(new o.A(e)) && ((m = n), g());
            }
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "actions", {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
            });
    }
}
let O = new y();
