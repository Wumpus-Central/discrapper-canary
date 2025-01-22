r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(131704),
    a = r(592125),
    o = r(979651);
function s(e) {
    var n;
    let { channelId: r, userId: s, activity: l } = e,
        u = a.Z.getChannel(r),
        c = (null == l ? void 0 : l.session_id) == null || (null != u && (0, i.Qm)(u.type)) ? r : null === (n = o.Z.getVoiceStateForSession(s, null == l ? void 0 : l.session_id)) || void 0 === n ? void 0 : n.channelId;
    return null != c ? c : void 0;
}
