"use strict";
n.d(t, { A: () => f });
var i = n(439372),
    r = n(840251),
    s = n(688151);
let a = new r.E([], s.$G.OPEN_USER_SETTINGS, { location: "open user settings" });
var o = n(593643),
    l = n(186369),
    d = n(581007),
    _ = n(962392),
    u = n(164891),
    c = n(164696);
let E = (0, n(600975).C)({
        kind: "guild",
        id: "2026-04_voice_call_trigger_point",
        label: "Voice Call Trigger Point Experiment",
        commonTriggerPoint: s.$G.VOICE_CALL,
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Treatment", config: { enabled: !0 } }],
    }),
    h = new r.E([u.A, l.S, d.aC, _.O, c.Ay, E, o._U], s.$G.VOICE_CALL, { location: "voice call initiated" });
class m extends i.A {
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
let f = new m();
