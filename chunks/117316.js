n.d(t, { r: () => A }), n(938796);
var i = n(253506),
    l = n(665260),
    a = n(734066),
    s = n(274372),
    r = n(704844),
    o = n(961350),
    c = n(141468),
    d = n(963852),
    u = n(652215);
let h = new Map();
function m(e, t) {
    let n = (0, d.Ay)({
            channelId: t,
            type: u.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: u.pr7.EPHEMERAL,
            state: u.cmJ.SENT,
        }),
        i = (0, c.rh)(n);
    return (i.applicationId = e.applicationId), (i.timestamp = e.timestamp), i;
}
function A(e, t) {
    let n = (function (e, t) {
        if (h.get(t.id) === e.id) return m(e, t.id);
        if (
            null == e.applicationId ||
            !(0, l.Lt)(e.flags, u.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
            !t.isDM() ||
            e.author.id === o.default.getId() ||
            null != e.activity ||
            (0, l.Lt)(t.recipientFlags ?? 0, i.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
            h.has(t.id)
        )
            return null;
        let n = m(e, t.id);
        h.set(t.id, e.id);
        let a = (0, l.lA)(t.recipientFlags ?? 0, i.o.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return r.A.updatePrivateChannelRecipientFlags(t.id, a), n;
    })(e, t);
    if (null != n) return { message: n, position: "before" };
    let A = (function (e, t) {
        var n;
        let i, r;
        if (
            !(0, a.J)() ||
            null == e.attachments.find((e) => (0, l.Lt)(e.flags ?? 0, u.sbO.IS_CLIP)) ||
            e.author.id === o.default.getId()
        )
            return null;
        let { clipId: h, remoteTriggerClipId: m } = (function (e) {
            let t = "__CLIP_METADATA__",
                n = e.indexOf(t);
            if (-1 === n) return {};
            let i = n + t.length,
                l = e.substring(i);
            try {
                let e = JSON.parse(l);
                return { clipId: e.id, remoteTriggerClipId: e.remoteTriggerClipId };
            } catch (e) {
                return {};
            }
        })(e.content);
        if (null == h && null == m) return null;
        let A = s.A.getMatchingGroupClip(h, m);
        return null == A || s.A.wasClipSharedInChannel(A.id, t.id)
            ? null
            : ((n = t.id),
              (i = (0, d.Ay)({ channelId: n, type: 66, content: "", author: e.author, state: u.cmJ.SENT })),
              ((r = (0, c.rh)(i)).timestamp = e.timestamp),
              (r.messageReference = { channel_id: n, message_id: e.id }),
              r);
    })(e, t);
    return null != A ? { message: A, position: "after" } : null;
}
