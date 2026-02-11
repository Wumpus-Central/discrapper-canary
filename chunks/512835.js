"use strict";
n.d(t, { A: () => T });
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
    h = n(765682);
let p = null;
function g() {
    i.A.requestPermission(h.iL.AUDIO).then((e) => {
        e && (0, _.A)(!0);
    }),
        c.Ay.getMode() === f.TBI.PUSH_TO_TALK && i.A.requestPermission(h.iL.INPUT_MONITORING);
}
function E(e, t) {
    return !u.A.getChannel(t)?.isListenModeCapable() || a.Ay.isSpeaker(e, t);
}
function A(e) {
    return (0, s.eY)(e) === s.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
class I extends r.A {
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
    };
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (p = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n } = e;
            if (null != n && l.default.getId() === t && null != d.A.getRTCConnectionId() && p !== n) {
                if (E(t, n)) {
                    (p = n), g();
                    return;
                }
                A(new o.A(e)) && ((p = n), g());
            }
        });
    }
}
let T = new I();
