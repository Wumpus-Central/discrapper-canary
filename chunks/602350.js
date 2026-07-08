"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(280450),
    a = n(734057),
    s = n(446243),
    l = n(558076),
    o = n(360729);
let d = null,
    c = null;
class u extends i.A {
    actions = {
        VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: (e) => this.handleEmbeddedActivityLaunchSuccess(e),
    };
    isExperimentEnabled(e, t) {
        return o.A.getCurrentConfig({ guildId: e, location: t }).enabled;
    }
    async handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            let { userId: t, guildId: n, channelId: i } = e;
            if (t === r.default.getId() && i !== d) {
                if (
                    (null != d &&
                        null != c &&
                        this.isExperimentEnabled(c, "VOICE_STATE_UPDATE") &&
                        (await (0, s.x2)(c, d)),
                    null != i && null != n)
                ) {
                    let e = l.A.getPendingPosition() ?? { x: 0, y: 0 };
                    null != e && this.isExperimentEnabled(n, "VOICE_STATE_UPDATE") && (0, s.tB)(n, i, e);
                }
                (d = i), (c = n);
            }
        }
    }
    handleEmbeddedActivityLaunchSuccess(e) {
        if (null == e.channelId) return;
        let t = a.A.getChannel(e.channelId);
        null == t ||
            !this.isExperimentEnabled(t.guild_id, "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS") ||
            (l.A.isVisible(e.channelId) && (0, s.zD)(e.channelId, !0));
    }
}
let _ = new u();
