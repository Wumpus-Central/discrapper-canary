n.d(t, { A: () => l }), n(896048);
var r = n(439372),
    i = n(510398),
    a = n(587952);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o extends r.A {
    handleVoiceChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        null != n && a.$.trigger({ guildId: null != t ? t : void 0 });
    }
    handleCallCreate() {
        a.$.trigger();
    }
    handleUserSettingsModalOpen() {
        i.$.trigger();
    }
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen,
            });
    }
}
let l = new o();
