var i = t(855986),
    r = t(73153);
let a = {};
function u(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return a[e] ?? n;
}
class l extends i.Ay.Store {
    static displayName = "VoiceChannelAppStore";
    isAppVisible(e, n) {
        return n && u(e, n);
    }
}
let o = new l(r.h, {
    VOICE_CHANNEL_APP_SURFACE_TOGGLE: function (e) {
        let { channelId: n } = e;
        a[n] = !u(n);
    },
    VOICE_CHANNEL_APP_CLOSE: function (e) {
        let { channelId: n } = e;
        if (!1 === a[n]) return !1;
        a[n] = !1;
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: n, currentVoiceChannelId: t } = e;
        if (null == t || t === n || void 0 === a[t]) return !1;
        delete a[t];
    },
});
t.d(n, {}, { A: o });
