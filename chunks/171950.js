"use strict";
n.d(t, { A: () => m });
var i = n(439372),
    r = n(91777),
    s = n(312006),
    a = n(105530),
    o = n(288737),
    l = n(495544),
    u = n(734057),
    c = n(890063),
    d = n(763827),
    _ = n(652215),
    h = n(765682);
let f = null;
function p() {
    r.A.requestPermission(h.iL.AUDIO).then((e) => {}),
        c.Ay.getMode() === _.TBI.PUSH_TO_TALK && r.A.requestPermission(h.iL.INPUT_MONITORING);
}
class E extends i.A {
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
    };
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (f = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            var t;
            let { userId: n, channelId: i } = e;
            if (null != i && l.default.getId() === n && null != d.A.getRTCConnectionId() && f !== i) {
                if (!u.A.getChannel(i)?.isListenModeCapable() || s.Ay.isSpeaker(n, i)) {
                    (f = i), p();
                    return;
                }
                (t = new o.A(e)), (0, a.eY)(t) === a.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && ((f = i), p());
            }
        });
    }
}
let m = new E();
