n.d(t, { Z: () => a });
var r = n(314897),
    i = n(592125),
    o = n(979651);
function a() {
    let e = o.Z.getVoiceStateForSession(r.default.getId(), r.default.getSessionId()),
        t = null == e ? void 0 : e.channelId;
    return i.Z.getChannel(t);
}
