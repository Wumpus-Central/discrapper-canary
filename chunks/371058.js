"use strict";
n.d(t, { A: () => l });
var r = n(439372),
    i = n(317861),
    s = n(510398),
    a = n(587952);
class o extends r.A {
    actions = {
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
        CALL_CREATE: this.handleCallCreate,
        USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen,
    };
    handleVoiceChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        null != n && (null != t && i.c.trigger({ guildId: t }), a.$.trigger({ guildId: t ?? void 0 }));
    }
    handleCallCreate() {
        a.$.trigger();
    }
    handleUserSettingsModalOpen() {
        s.$.trigger();
    }
}
let l = new o();
