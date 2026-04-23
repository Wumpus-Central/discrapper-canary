n.d(t, { A: () => s });
var i = n(95701),
    r = n(734057),
    a = n(977997);
function s(e) {
    let { channelId: t, userId: n, activity: s } = e,
        _ = r.A.getChannel(t);
    return (
        (s?.session_id == null || (null != _ && (0, i.pQ)(_.type))
            ? t
            : a.A.getVoiceStateForSession(n, s?.session_id)?.channelId) ?? void 0
    );
}
