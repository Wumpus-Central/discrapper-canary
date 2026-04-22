"use strict";
n.d(t, { A: () => g });
var r = n(439372),
    i = n(674966),
    s = n(312006),
    a = n(105530),
    o = n(288737),
    l = n(961350),
    u = n(734057),
    d = n(430452),
    c = n(383501),
    _ = n(202232),
    f = n(652215),
    E = n(765682);
let h = null;
function p() {
    i.A.requestPermission(E.iL.AUDIO).then((e) => {
        e && (0, _.A)(!0);
    }),
        d.Ay.getMode() === f.TBI.PUSH_TO_TALK && i.A.requestPermission(E.iL.INPUT_MONITORING);
}
class m extends r.A {
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
            let { userId: n, channelId: r } = e;
            if (null != r && l.default.getId() === n && null != c.A.getRTCConnectionId() && h !== r) {
                if (!u.A.getChannel(r)?.isListenModeCapable() || s.Ay.isSpeaker(n, r)) {
                    (h = r), p();
                    return;
                }
                (t = new o.A(e)), (0, a.eY)(t) === a.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && ((h = r), p());
            }
        });
    }
}
let g = new m();
