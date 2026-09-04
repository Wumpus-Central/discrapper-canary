n.d(t, { A: () => f });
var i = n(439372),
    r = n(91777),
    a = n(312006),
    s = n(105530),
    l = n(288737),
    o = n(280450),
    d = n(734057),
    c = n(303277),
    u = n(763827),
    _ = n(652215),
    E = n(765682);
let A = null;
function h() {
    r.A.requestPermission(E.iL.AUDIO).then((e) => {}),
        c.Ay.getMode() === _.TBI.PUSH_TO_TALK && r.A.requestPermission(E.iL.INPUT_MONITORING);
}
class I extends i.A {
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
    };
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (A = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            var t;
            let { userId: n, channelId: i } = e;
            if (null != i && o.default.getId() === n && null != u.A.getRTCConnectionId() && A !== i) {
                if (!d.A.getChannel(i)?.isListenModeCapable() || a.Ay.isSpeaker(n, i)) {
                    (A = i), h();
                    return;
                }
                (t = new l.A(e)), (0, s.eY)(t) === s.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && ((A = i), h());
            }
        });
    }
}
let f = new I();
