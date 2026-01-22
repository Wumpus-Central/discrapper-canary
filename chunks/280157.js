n.d(t, { A: () => c });
var r = n(47167),
    i = n(734057),
    a = n(994500),
    s = n(287809),
    o = n(926140),
    l = n(652215);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.A,
        u = t.getChannel(e);
    if (null == u) return null;
    let d = (0, r.m1)(u, n, c);
    switch (u.type) {
        case l.rbe.DM: {
            let e = n.getUser(u.getRecipientId());
            if (null == e) return null;
            return {
                type: o.rD.USER,
                record: e,
                score: 0,
                comparator: d,
            };
        }
        case l.rbe.GROUP_DM:
            return {
                type: o.rD.GROUP_DM,
                record: u,
                score: 0,
                comparator: d,
            };
        case l.rbe.GUILD_VOICE:
        case l.rbe.GUILD_STAGE_VOICE:
            return {
                type: o.rD.VOICE_CHANNEL,
                record: u,
                score: 0,
                comparator: d,
            };
        default:
            return {
                type: o.rD.TEXT_CHANNEL,
                record: u,
                score: 0,
                comparator: d,
            };
    }
}
