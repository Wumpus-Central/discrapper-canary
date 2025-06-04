n.d(t, { Z: () => o });
var r = n(131704),
    i = n(592125),
    a = n(979651);
function o(e) {
    var t;
    let { channelId: n, userId: o, activity: s } = e,
        l = i.Z.getChannel(n),
        c = (null == s ? void 0 : s.session_id) == null || (null != l && (0, r.Qm)(l.type)) ? n : null == (t = a.Z.getVoiceStateForSession(o, null == s ? void 0 : s.session_id)) ? void 0 : t.channelId;
    return null != c ? c : void 0;
}
