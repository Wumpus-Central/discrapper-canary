n.d(t, { Z: () => a });
var r = n(131704),
    i = n(592125),
    o = n(979651);
function a(e) {
    var t;
    let { channelId: n, userId: a, activity: s } = e,
        l = i.Z.getChannel(n),
        c = (null == s ? void 0 : s.session_id) == null || (null != l && (0, r.Qm)(l.type)) ? n : null == (t = o.Z.getVoiceStateForSession(a, null == s ? void 0 : s.session_id)) ? void 0 : t.channelId;
    return null != c ? c : void 0;
}
