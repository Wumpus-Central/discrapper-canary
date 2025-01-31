n.d(t, { f: () => p }), n(47120), n(789020);
var i = n(602715),
    l = n(812206),
    a = n(258732),
    r = n(314897),
    s = n(630388),
    o = n(786761),
    c = n(3148),
    d = n(981631);
let u = new Map();
function h(e, t) {
    let n = (0, c.ZP)({
            channelId: t,
            type: d.uaV.IN_GAME_MESSAGE_NUX,
            content: '',
            author: e.author,
            flags: d.iLy.EPHEMERAL,
            state: d.yb.SENT
        }),
        i = (0, o.e5)(n);
    return (i.applicationId = e.applicationId), (i.timestamp = e.timestamp), i;
}
function p(e, t) {
    let n = (function (e, t) {
        var n, o;
        if (u.get(t.id) === e.id) return h(e, t.id);
        if (null == e.applicationId || !t.isDM() || e.author.id === r.default.getId() || (0, s.yE)(null !== (n = t.recipientFlags) && void 0 !== n ? n : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX) || u.has(t.id)) return null;
        let c = l.Z.getApplication(e.applicationId);
        if (null == c || !(0, s.yE)(c.flags, d.udG.SOCIAL_LAYER_INTEGRATION)) return null;
        let p = h(e, t.id);
        u.set(t.id, e.id);
        let m = (0, s.mB)(null !== (o = t.recipientFlags) && void 0 !== o ? o : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return a.Z.updatePrivateChannelRecipientFlags(t.id, m), p;
    })(e, t);
    return null != n ? n : null;
}
