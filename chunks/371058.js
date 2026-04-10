"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(510398),
    s = n(587952);
class a extends r.A {
    actions = {
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
        CALL_CREATE: this.handleCallCreate,
        USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen,
    };
    handleVoiceChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        null != n && s.$.trigger({ guildId: t ?? void 0 });
    }
    handleCallCreate() {
        s.$.trigger();
    }
    handleUserSettingsModalOpen() {
        i.$.trigger();
    }
}
let o = new a();
