n.d(t, { A: () => s });
var r = n(961350),
    i = n(734057),
    a = n(977997);
function s() {
    let e = a.A.getVoiceStateForSession(r.default.getId(), r.default.getSessionId()),
        t = null == e ? void 0 : e.channelId;
    return i.A.getChannel(t);
}
