n.d(t, { A: () => a });
var l = n(95701),
    r = n(734057),
    i = n(977997);
function a(e) {
    let { channelId: t, userId: n, activity: a } = e,
        u = r.A.getChannel(t);
    return (
        (a?.session_id == null || (null != u && (0, l.pQ)(u.type))
            ? t
            : i.A.getVoiceStateForSession(n, a?.session_id)?.channelId) ?? void 0
    );
}
