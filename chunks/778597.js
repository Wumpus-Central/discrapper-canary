n.d(t, { A: () => o });
var i = n(17928),
    l = n(73153);
let a = {};
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return a[e] ?? t;
}
class r extends i.Ay.Store {
    static displayName = "VoiceChannelAppStore";
    isAppVisible(e, t) {
        return t && s(e, t);
    }
}
let o = new r(l.h, {
    VOICE_CHANNEL_APP_SURFACE_TOGGLE: function (e) {
        let { channelId: t } = e;
        a[t] = !s(t);
    },
    VOICE_CHANNEL_APP_CLOSE: function (e) {
        let { channelId: t } = e;
        if (!1 === a[t]) return !1;
        a[t] = !1;
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (null == n || n === t || void 0 === a[n]) return !1;
        delete a[n];
    },
});
