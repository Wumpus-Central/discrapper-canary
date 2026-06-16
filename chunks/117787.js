"use strict";
n.d(t, { A: () => p });
var i = n(439372),
    r = n(840251),
    s = n(688151);
let a = new r.E([], s.$G.OPEN_USER_SETTINGS, { location: "open user settings" });
var o = n(593643),
    l = n(186369),
    u = n(581007),
    c = n(164891),
    d = n(164696);
let _ = (0, n(600975).C)({
        kind: "guild",
        id: "2026-04_voice_call_trigger_point",
        label: "Voice Call Trigger Point Experiment",
        commonTriggerPoint: s.$G.VOICE_CALL,
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Treatment", config: { enabled: !0 } }],
    }),
    h = new r.E([c.A, l.S, u.aC, d.Ay, _, o._U], s.$G.VOICE_CALL, { location: "voice call initiated" });
class f extends i.A {
    actions = {
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
        CALL_CREATE: this.handleCallCreate,
        USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen,
    };
    handleVoiceChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        null != n && h.trigger({ guildId: t ?? void 0 });
    }
    handleCallCreate() {
        h.trigger();
    }
    handleUserSettingsModalOpen() {
        a.trigger();
    }
}
let p = new f();
