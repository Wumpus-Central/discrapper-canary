"use strict";
n.d(t, { A: () => I });
var r = n(439372),
    i = n(674966),
    a = n(312006),
    s = n(105530),
    o = n(288737),
    l = n(961350),
    u = n(734057),
    c = n(430452),
    d = n(383501),
    _ = n(202232),
    f = n(652215),
    p = n(765682);
let h = null;
function m() {
    i.A.requestPermission(p.iL.AUDIO).then((e) => {
        e && (0, _.A)(!0);
    }),
        c.A.getMode() === f.TBI.PUSH_TO_TALK && i.A.requestPermission(p.iL.INPUT_MONITORING);
}
function g(e, t) {
    return !u.A.getChannel(t)?.isListenModeCapable() || a.Ay.isSpeaker(e, t);
}
function E(e) {
    return (0, s.eY)(e) === s.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
class A extends r.A {
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
    };
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (h = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n } = e;
            if (null != n && l.default.getId() === t && null != d.A.getRTCConnectionId() && h !== n) {
                if (g(t, n)) {
                    (h = n), m();
                    return;
                }
                E(new o.A(e)) && ((h = n), m());
            }
        });
    }
}
let I = new A();
