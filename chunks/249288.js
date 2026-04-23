t.d(n, { A: () => o });
var l = t(311907),
    i = t(73153);
let a = { toastsEnabledForChannel: {} },
    s = a;
class r extends l.Ay.PersistedStore {
    static displayName = "CallChatToastsStore";
    static persistKey = "CallChatToasts";
    initialize(e) {
        s = e ?? a;
    }
    getToastsEnabled(e) {
        return s.toastsEnabledForChannel[e] ?? !0;
    }
    getState() {
        return s;
    }
}
let o = new r(i.h, {
    CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
        let { channelId: n, toastsEnabled: t } = e;
        s.toastsEnabledForChannel[n] = t;
    },
    LOGOUT: function () {
        s.toastsEnabledForChannel = {};
    },
});
