"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(510398),
    a = n(587952);
class s extends r.A {
    actions = {
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
        CALL_CREATE: this.handleCallCreate,
        USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen,
    };
    handleVoiceChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        null != n && a.$.trigger({ guildId: t ?? void 0 });
    }
    handleCallCreate() {
        a.$.trigger();
    }
    handleUserSettingsModalOpen() {
        i.$.trigger();
    }
}
let o = new s();
