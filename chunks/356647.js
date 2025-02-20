n.d(t, { f: () => f }), n(47120);
var r = n(602715),
    i = n(812206),
    l = n(870822),
    o = n(258732),
    a = n(314897),
    s = n(630388),
    c = n(786761),
    u = n(3148),
    d = n(981631);
let p = new Map();
function h(e, t) {
    let n = (0, u.ZP)({
            channelId: t,
            type: d.uaV.IN_GAME_MESSAGE_NUX,
            content: '',
            author: e.author,
            flags: d.iLy.EPHEMERAL,
            state: d.yb.SENT
        }),
        r = (0, c.e5)(n);
    return (r.applicationId = e.applicationId), (r.timestamp = e.timestamp), r;
}
function f(e, t) {
    let n = (function (e, t) {
        var n, c;
        if (p.get(t.id) === e.id) return h(e, t.id);
        if (null == e.applicationId || !t.isDM() || e.author.id === a.default.getId() || (0, s.yE)(null !== (n = t.recipientFlags) && void 0 !== n ? n : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX) || p.has(t.id)) return null;
        let u = i.Z.getApplication(e.applicationId);
        if (null == u || !(0, l.Z)(u)) return null;
        let d = h(e, t.id);
        p.set(t.id, e.id);
        let f = (0, s.mB)(null !== (c = t.recipientFlags) && void 0 !== c ? c : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return o.Z.updatePrivateChannelRecipientFlags(t.id, f), d;
    })(e, t);
    return null != n ? n : null;
}
