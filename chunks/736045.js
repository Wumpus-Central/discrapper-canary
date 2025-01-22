r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(314897),
    a = r(592125),
    o = r(979651);
function s() {
    let e = o.Z.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
        n = null == e ? void 0 : e.channelId;
    return a.Z.getChannel(n);
}
