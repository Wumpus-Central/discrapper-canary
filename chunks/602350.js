n.d(t, { A: () => u });
var i = n(439372),
    r = n(280450),
    a = n(446243),
    s = n(558076),
    l = n(360729);
let o = null,
    d = null;
class c extends i.A {
    actions = {
        VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
        CONNECTION_RESUMED: () => this.handleConnectionResumed(),
    };
    isExperimentEnabled(e, t) {
        return (0, l.W8)({ guildId: e, location: t }).enabled;
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            let { userId: t, guildId: n, channelId: i, sessionId: l, oldChannelId: c } = e;
            if (t !== r.default.getId()) {
                null != c && c !== i && (0, a.WQ)(t, c);
                continue;
            }
            if (l === r.default.getSessionId() && i !== o) {
                if (
                    (null != o && null != d && this.isExperimentEnabled(d, "VOICE_STATE_UPDATE") && (0, a.x2)(d, o),
                    null != i && null != n)
                ) {
                    let e = s.A.getPendingPosition(),
                        t = s.A.getPendingSeat();
                    this.isExperimentEnabled(n, "VOICE_STATE_UPDATE") && (0, a.tB)(n, i, e, t);
                }
                (o = i), (d = n);
            }
        }
    }
    handleConnectionResumed() {
        null == o || null == d || (this.isExperimentEnabled(d, "CONNECTION_RESUMED") && (0, a.z5)(d, o));
    }
}
let u = new c();
