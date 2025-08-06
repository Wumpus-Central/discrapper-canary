(n.d(t, { f: () => _ }), n(388685), n(997841));
var r = n(602715),
    i = n(258732),
    o = n(314897),
    a = n(630388),
    s = n(786761),
    l = n(3148),
    c = n(981631);
let u = new Map();
function d(e, t) {
    let n = (0, l.ZP)({
            channelId: t,
            type: c.uaV.IN_GAME_MESSAGE_NUX,
            content: '',
            author: e.author,
            flags: c.iLy.EPHEMERAL,
            state: c.yb.SENT
        }),
        r = (0, s.e5)(n);
    return ((r.applicationId = e.applicationId), (r.timestamp = e.timestamp), r);
}
function f(e, t) {
    var n, s;
    if (u.get(t.id) === e.id) return d(e, t.id);
    if (null == e.applicationId || !(0, a.yE)(e.flags, c.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === o.default.getId() || (0, a.yE)(null != (n = t.recipientFlags) ? n : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX) || u.has(t.id)) return null;
    let l = d(e, t.id);
    u.set(t.id, e.id);
    let f = (0, a.mB)(null != (s = t.recipientFlags) ? s : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
    return (i.Z.updatePrivateChannelRecipientFlags(t.id, f), l);
}
function _(e, t) {
    let n = f(e, t);
    return null != n ? n : null;
}
