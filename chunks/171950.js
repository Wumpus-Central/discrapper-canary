"use strict";
n.d(t, { A: () => g });
var i = n(439372),
    r = n(91777),
    s = n(312006),
    a = n(105530),
    o = n(288737),
    l = n(495544),
    d = n(734057),
    _ = n(969341),
    u = n(763827),
    c = n(652215),
    E = n(765682);
let h = null;
function m() {
    r.A.requestPermission(E.iL.AUDIO).then((e) => {}),
        _.Ay.getMode() === c.TBI.PUSH_TO_TALK && r.A.requestPermission(E.iL.INPUT_MONITORING);
}
class f extends i.A {
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
            var t;
            let { userId: n, channelId: i } = e;
            if (null != i && l.default.getId() === n && null != u.A.getRTCConnectionId() && h !== i) {
                if (!d.A.getChannel(i)?.isListenModeCapable() || s.Ay.isSpeaker(n, i)) {
                    (h = i), m();
                    return;
                }
                (t = new o.A(e)), (0, a.eY)(t) === a.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && ((h = i), m());
            }
        });
    }
}
let g = new f();
