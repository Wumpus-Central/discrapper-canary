n.d(t, { J: () => l }), n(388685);
var r = n(442837),
    i = n(592125),
    o = n(19780),
    a = n(760373);
function s(e) {
    var t;
    let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, i.Z];
    if (null == e || n.getChannelId() !== e) return !1;
    let s = r.getChannel(e);
    if (null == s || s.isGuildStageVoice()) return !1;
    let l = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
    return null != l && l !== a.Eg;
}
function l(e) {
    let { channelId: t } = e;
    return (0, r.e7)([o.Z, i.Z], () => s(t, [o.Z, i.Z]), [t]);
}
