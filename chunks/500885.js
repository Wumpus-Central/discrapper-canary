n.d(t, { Z: () => s });
var l = n(442837),
    i = n(523746),
    a = n(592125),
    r = n(979651);
function s(e) {
    let { userId: t, channelId: n } = e,
        s = (0, l.e7)([i.Z], () => {
            let e = null != n ? i.Z.getCall(n) : void 0;
            return (null == e ? void 0 : e.messageId) != null ? e : void 0;
        });
    return {
        callChannel: (0, l.e7)([a.Z], () => (null != s ? a.Z.getChannel(s.channelId) : void 0)),
        callState: (0, l.e7)([r.Z], () => (null != s && null != t ? r.Z.getVoiceStateForChannel(s.channelId, t) : void 0))
    };
}
