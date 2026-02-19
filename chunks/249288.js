"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153);
let l = { toastsEnabledForChannel: {} },
    r = l;
class a extends i.Ay.PersistedStore {
    static displayName = "CallChatToastsStore";
    static persistKey = "CallChatToasts";
    initialize(e) {
        r = e ?? l;
    }
    getToastsEnabled(e) {
        return r.toastsEnabledForChannel[e] ?? !0;
    }
    getState() {
        return r;
    }
}
let o = new a(s.h, {
    CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
        let { channelId: t, toastsEnabled: n } = e;
        r.toastsEnabledForChannel[t] = n;
    },
    LOGOUT: function () {
        r.toastsEnabledForChannel = {};
    },
});
