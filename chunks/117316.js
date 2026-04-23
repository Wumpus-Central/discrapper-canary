n.d(t, { r: () => h }), n(938796);
var i = n(253506),
    l = n(665260),
    a = n(704844),
    s = n(961350),
    r = n(141468),
    o = n(963852),
    c = n(652215);
let d = new Map();
function u(e, t) {
    let n = (0, o.Ay)({
            channelId: t,
            type: c.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: c.pr7.EPHEMERAL,
            state: c.cmJ.SENT,
        }),
        i = (0, r.rh)(n);
    return (i.applicationId = e.applicationId), (i.timestamp = e.timestamp), i;
}
function h(e, t) {
    let n = (function (e, t) {
        if (d.get(t.id) === e.id) return u(e, t.id);
        if (
            null == e.applicationId ||
            !(0, l.Lt)(e.flags, c.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
            !t.isDM() ||
            e.author.id === s.default.getId() ||
            null != e.activity ||
            (0, l.Lt)(t.recipientFlags ?? 0, i.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
            d.has(t.id)
        )
            return null;
        let n = u(e, t.id);
        d.set(t.id, e.id);
        let r = (0, l.lA)(t.recipientFlags ?? 0, i.o.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return a.A.updatePrivateChannelRecipientFlags(t.id, r), n;
    })(e, t);
    return null != n ? { message: n, position: "before" } : null;
}
