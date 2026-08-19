"use strict";
n.d(t, { A: () => d });
var i = n(47167),
    r = n(734057),
    a = n(994500),
    s = n(287809),
    l = n(926140),
    o = n(652215);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
        d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.A,
        c = t.getChannel(e);
    if (null == c) return null;
    let u = (0, i.m1)(c, n, d);
    switch (c.type) {
        case o.rbe.DM: {
            let e = n.getUser(c.getRecipientId());
            if (null == e) return null;
            return { type: l.rD.USER, record: e, score: 0, comparator: u };
        }
        case o.rbe.GROUP_DM:
            return { type: l.rD.GROUP_DM, record: c, score: 0, comparator: u };
        case o.rbe.GUILD_VOICE:
        case o.rbe.GUILD_STAGE_VOICE:
            return { type: l.rD.VOICE_CHANNEL, record: c, score: 0, comparator: u };
        default:
            return { type: l.rD.TEXT_CHANNEL, record: c, score: 0, comparator: u };
    }
}
