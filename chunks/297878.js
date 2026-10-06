n.d(t, { A: () => s });
var i = n(991690),
    r = n(823809),
    a = n(734057);
function s(e) {
    if (e.type === i.U.APP_CHANNEL) {
        let t = a.A.getChannel(e.channelId);
        if (null != t && (0, r.sq)(t.type, t.topic_)) return i.U.MAIN;
    }
    return e.type;
}
