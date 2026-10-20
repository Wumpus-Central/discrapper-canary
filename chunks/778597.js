n.d(t, { A: () => o });
var i = n(17928),
    r = n(73153);
let u = {};
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u[e] ?? t;
}
class l extends i.Ay.Store {
    static displayName = "VoiceChannelAppStore";
    isAppVisible(e, t) {
        return t && a(e, t);
    }
}
let o = new l(r.h, {
    VOICE_CHANNEL_APP_SURFACE_TOGGLE: function (e) {
        let { channelId: t } = e;
        u[t] = !a(t);
    },
    VOICE_CHANNEL_APP_CLOSE: function (e) {
        let { channelId: t } = e;
        if (!1 === u[t]) return !1;
        u[t] = !1;
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (null == n || n === t || void 0 === u[n]) return !1;
        delete u[n];
    },
});
