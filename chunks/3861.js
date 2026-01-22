n.d(t, {
    A: () => s,
});
var r = n(95701),
    i = n(734057),
    a = n(977997);

function s(e) {
    var t;
    let { channelId: n, userId: s, activity: o } = e,
        l = i.A.getChannel(n),
        c =
            (null == o ? void 0 : o.session_id) == null || (null != l && (0, r.pQ)(l.type))
                ? n
                : null == (t = a.A.getVoiceStateForSession(s, null == o ? void 0 : o.session_id))
                  ? void 0
                  : t.channelId;
    return null != c ? c : void 0;
}
