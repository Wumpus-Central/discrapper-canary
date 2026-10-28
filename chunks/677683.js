n.d(t, { A: () => a });
var r = n(17928),
    s = n(73153);
let o = new Map();
function i(e, t) {
    var n;
    return (
        (n = o.get(e)),
        (n?.status !== t.status || ("pinned" === n.status && "pinned" === t.status && n.channelId !== t.channelId)) &&
            (o.set(e, t), !0)
    );
}
class l extends r.Ay.Store {
    getOutcome(e) {
        return o.get(e) ?? null;
    }
}
let a = new l(s.h, {
    LOGOUT: function () {
        if (0 === o.size) return !1;
        o.clear();
    },
    CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
        let { projectId: t, voiceChannelPin: n } = e;
        return null != n && i(t, n);
    },
    CONJURE_VOICE_CHANNEL_PIN_RESOLVED: function (e) {
        let { projectId: t, outcome: n } = e;
        return i(t, n);
    },
});
