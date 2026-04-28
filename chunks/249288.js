n.d(t, { A: () => o });
var l = n(17928),
    i = n(228366);
let s = { toastsEnabledForChannel: {} },
    a = s;
class r extends l.Ay.PersistedStore {
    static displayName = "CallChatToastsStore";
    static persistKey = "CallChatToasts";
    initialize(e) {
        a = e ?? s;
    }
    getToastsEnabled(e) {
        return a.toastsEnabledForChannel[e] ?? !0;
    }
    getState() {
        return a;
    }
}
let o = new r(i.h, {
    CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
        let { channelId: t, toastsEnabled: n } = e;
        a.toastsEnabledForChannel[t] = n;
    },
    LOGOUT: function () {
        a.toastsEnabledForChannel = {};
    },
});
