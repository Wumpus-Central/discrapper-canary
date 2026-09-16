s.d(t, { A: () => i });
var n = s(17928),
    l = s(228366);
let a = { toastsEnabledForChannel: {} },
    r = a;
class u extends n.Ay.PersistedStore {
    static displayName = "CallChatToastsStore";
    static persistKey = "CallChatToasts";
    initialize(e) {
        r = e ?? a;
    }
    getToastsEnabled(e) {
        return r.toastsEnabledForChannel[e] ?? !0;
    }
    getState() {
        return r;
    }
}
let i = new u(l.h, {
    CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
        let { channelId: t, toastsEnabled: s } = e;
        r.toastsEnabledForChannel[t] = s;
    },
    LOGOUT: function () {
        r.toastsEnabledForChannel = {};
    },
});
