n.d(t, { f: () => f }), n(388685), n(997841);
var i = n(602715),
    r = n(95015),
    l = n(924557),
    a = n(435064),
    o = n(258732),
    s = n(314897),
    c = n(786761),
    u = n(3148),
    d = n(981631);
let p = new Map();
function h(e, t) {
    let n = (0, u.ZP)({
            channelId: t,
            type: d.uaV.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: d.iLy.EPHEMERAL,
            state: d.yb.SENT,
        }),
        i = (0, c.e5)(n);
    return (i.applicationId = e.applicationId), (i.timestamp = e.timestamp), i;
}
function f(e, t) {
    let n = (function (e, t) {
        var n, l;
        if (p.get(t.id) === e.id) return h(e, t.id);
        if (
            null == e.applicationId ||
            !(0, r.yE)(e.flags, d.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
            !t.isDM() ||
            e.author.id === s.default.getId() ||
            null != e.activity ||
            (0, r.yE)(null != (n = t.recipientFlags) ? n : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX) ||
            p.has(t.id)
        )
            return null;
        let a = h(e, t.id);
        p.set(t.id, e.id);
        let c = (0, r.mB)(null != (l = t.recipientFlags) ? l : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return o.Z.updatePrivateChannelRecipientFlags(t.id, c), a;
    })(e, t);
    if (null != n)
        return {
            message: n,
            position: "before",
        };
    let f = (function (e, t) {
        if (
            !(0, l.NS)() ||
            null ==
                e.attachments.find((e) => {
                    var t;
                    return (0, r.yE)(null != (t = e.flags) ? t : 0, d.J0y.IS_CLIP);
                }) ||
            e.author.id === s.default.getId()
        )
            return null;
        let { clipId: n, remoteTriggerClipId: i } = (function (e) {
            let t = "__CLIP_METADATA__",
                n = e.indexOf(t);
            if (-1 === n) return {};
            let i = n + t.length,
                r = e.substring(i);
            try {
                let e = JSON.parse(r);
                return {
                    clipId: e.id,
                    remoteTriggerClipId: e.remoteTriggerClipId,
                };
            } catch (e) {
                return {};
            }
        })(e.content);
        if (null == n && null == i) return null;
        let o = a.Z.getMatchingGroupClip(n, i);
        if (null == o || a.Z.wasClipSharedInChannel(o.id, t.id)) return null;
        var p = t.id;
        let h = (0, u.ZP)({
                channelId: p,
                type: 65,
                content: "",
                author: e.author,
                state: d.yb.SENT,
            }),
            f = (0, c.e5)(h);
        return (
            (f.timestamp = e.timestamp),
            (f.messageReference = {
                channel_id: p,
                message_id: e.id,
            }),
            f
        );
    })(e, t);
    return null != f
        ? {
              message: f,
              position: "after",
          }
        : null;
}
