n.d(t, { Z: () => s });
var i = n(314897),
    r = n(592125),
    a = n(979651);
function s() {
    let e = a.Z.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
        t = null == e ? void 0 : e.channelId;
    return r.Z.getChannel(t);
}
