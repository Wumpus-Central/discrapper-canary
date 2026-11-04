var r = n(855986),
    s = n(73153);
let i = new Map();
function o(e, t) {
    var n;
    return (
        (n = i.get(e)),
        (n?.status !== t.status || ("pinned" === n.status && "pinned" === t.status && n.channelId !== t.channelId)) &&
            (i.set(e, t), !0)
    );
}
class l extends r.Ay.Store {
    getOutcome(e) {
        return i.get(e) ?? null;
    }
}
let a = new l(s.h, {
    LOGOUT: function () {
        if (0 === i.size) return !1;
        i.clear();
    },
    CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
        let { projectId: t, voiceChannelPin: n } = e;
        return null != n && o(t, n);
    },
    CONJURE_VOICE_CHANNEL_PIN_RESOLVED: function (e) {
        let { projectId: t, outcome: n } = e;
        return o(t, n);
    },
});
n.d(t, {}, { A: a });
