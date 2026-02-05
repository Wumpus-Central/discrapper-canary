n.d(t, { A: () => o });
var i = n(311907),
    l = n(73153);
let s = { toastsEnabledForChannel: {} },
    a = s;
class r extends i.Ay.PersistedStore {
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
let o = new r(l.h, {
    CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
        let { channelId: t, toastsEnabled: n } = e;
        a.toastsEnabledForChannel[t] = n;
    },
    LOGOUT: function () {
        a.toastsEnabledForChannel = {};
    },
});
