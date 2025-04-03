n.d(t, { f: () => p }), n(47120), n(789020);
var r = n(602715),
    i = n(258732),
    l = n(314897),
    o = n(630388),
    a = n(786761),
    s = n(3148),
    c = n(981631);
let u = new Map();
function d(e, t) {
    let n = (0, s.ZP)({
            channelId: t,
            type: c.uaV.IN_GAME_MESSAGE_NUX,
            content: '',
            author: e.author,
            flags: c.iLy.EPHEMERAL,
            state: c.yb.SENT
        }),
        r = (0, a.e5)(n);
    return (r.applicationId = e.applicationId), (r.timestamp = e.timestamp), r;
}
function p(e, t) {
    let n = (function (e, t) {
        var n, a;
        if (u.get(t.id) === e.id) return d(e, t.id);
        if (null == e.applicationId || !(0, o.yE)(e.flags, c.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === l.default.getId() || (0, o.yE)(null != (n = t.recipientFlags) ? n : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX) || u.has(t.id)) return null;
        let s = d(e, t.id);
        u.set(t.id, e.id);
        let p = (0, o.mB)(null != (a = t.recipientFlags) ? a : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return i.Z.updatePrivateChannelRecipientFlags(t.id, p), s;
    })(e, t);
    return null != n ? n : null;
}
