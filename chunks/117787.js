n.d(t, { A: () => A });
var i = n(439372),
    r = n(840251),
    a = n(688151);
let s = new r.E([], a.$G.OPEN_USER_SETTINGS, { location: "open user settings" });
var l = n(593643),
    o = n(186369),
    d = n(581007),
    c = n(164696);
let u = (0, n(600975).C)({
        kind: "guild",
        id: "2026-04_voice_call_trigger_point",
        label: "Voice Call Trigger Point Experiment",
        commonTriggerPoint: a.$G.VOICE_CALL,
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Treatment", config: { enabled: !0 } }],
    }),
    _ = new r.E([o.S, d.aC, c.Ay, u, l._U], a.$G.VOICE_CALL, { location: "voice call initiated" });
class E extends i.A {
    actions = {
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
        CALL_CREATE: this.handleCallCreate,
        USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen,
    };
    handleVoiceChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        null != n && _.trigger({ guildId: t ?? void 0 });
    }
    handleCallCreate() {
        _.trigger();
    }
    handleUserSettingsModalOpen() {
        s.trigger();
    }
}
let A = new E();
