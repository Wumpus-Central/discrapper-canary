n.d(t, { A: () => a });
var r = n(95701),
    l = n(734057),
    i = n(977997);
function a(e) {
    let { channelId: t, userId: n, activity: a } = e,
        s = l.A.getChannel(t);
    return (
        (a?.session_id == null || (null != s && (0, r.pQ)(s.type))
            ? t
            : i.A.getVoiceStateForSession(n, a?.session_id)?.channelId) ?? void 0
    );
}
