n.d(t, { f: () => h }), n(47120), n(789020);
var r = n(602715),
    i = n(812206),
    l = n(258732),
    o = n(314897),
    a = n(630388),
    s = n(786761),
    c = n(3148),
    u = n(981631);
let d = new Map();
function p(e, t) {
    let n = (0, c.ZP)({
            channelId: t,
            type: u.uaV.IN_GAME_MESSAGE_NUX,
            content: '',
            author: e.author,
            flags: u.iLy.EPHEMERAL,
            state: u.yb.SENT
        }),
        r = (0, s.e5)(n);
    return (r.applicationId = e.applicationId), (r.timestamp = e.timestamp), r;
}
function h(e, t) {
    let n = (function (e, t) {
        var n, s;
        if (d.get(t.id) === e.id) return p(e, t.id);
        if (null == e.applicationId || !t.isDM() || e.author.id === o.default.getId() || (0, a.yE)(null !== (n = t.recipientFlags) && void 0 !== n ? n : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX) || d.has(t.id)) return null;
        let c = i.Z.getApplication(e.applicationId);
        if (null == c || !(0, a.yE)(c.flags, u.udG.SOCIAL_LAYER_INTEGRATION)) return null;
        let h = p(e, t.id);
        d.set(t.id, e.id);
        let f = (0, a.mB)(null !== (s = t.recipientFlags) && void 0 !== s ? s : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return l.Z.updatePrivateChannelRecipientFlags(t.id, f), h;
    })(e, t);
    return null != n ? n : null;
}
