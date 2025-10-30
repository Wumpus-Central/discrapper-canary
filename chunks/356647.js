n.d(t, { f: () => h }), n(388685), n(997841);
var r = n(602715),
    i = n(924557),
    l = n(435064),
    a = n(258732),
    o = n(314897),
    s = n(630388),
    c = n(786761),
    u = n(3148),
    d = n(981631);
let p = new Map();
function f(e, t) {
    let n = (0, u.ZP)({
            channelId: t,
            type: d.uaV.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: d.iLy.EPHEMERAL,
            state: d.yb.SENT,
        }),
        r = (0, c.e5)(n);
    return (r.applicationId = e.applicationId), (r.timestamp = e.timestamp), r;
}
function h(e, t) {
    let n = (function (e, t) {
        var n, i;
        if (p.get(t.id) === e.id) return f(e, t.id);
        if (
            null == e.applicationId ||
            !(0, s.yE)(e.flags, d.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
            !t.isDM() ||
            e.author.id === o.default.getId() ||
            null != e.activity ||
            (0, s.yE)(null != (n = t.recipientFlags) ? n : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX) ||
            p.has(t.id)
        )
            return null;
        let l = f(e, t.id);
        p.set(t.id, e.id);
        let c = (0, s.mB)(null != (i = t.recipientFlags) ? i : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return a.Z.updatePrivateChannelRecipientFlags(t.id, c), l;
    })(e, t);
    if (null != n)
        return {
            message: n,
            position: "before",
        };
    let h = (function (e, t) {
        if (
            !(0, i.NS)() ||
            null ==
                e.attachments.find((e) => {
                    var t;
                    return (0, s.yE)(null != (t = e.flags) ? t : 0, d.J0y.IS_CLIP);
                }) ||
            e.author.id === o.default.getId()
        )
            return null;
        let { clipId: n, remoteTriggerClipId: r } = (function (e) {
            let t = "__CLIP_METADATA__",
                n = e.indexOf(t);
            if (-1 === n) return {};
            let r = n + t.length,
                i = e.substring(r);
            try {
                let e = JSON.parse(i);
                return {
                    clipId: e.id,
                    remoteTriggerClipId: e.remoteTriggerClipId,
                };
            } catch (e) {
                return {};
            }
        })(e.content);
        if (null == n && null == r) return null;
        let a = l.Z.getMatchingGroupClip(n, r);
        if (null == a || l.Z.wasClipSharedInChannel(a.id, t.id)) return null;
        var p = t.id;
        let f = (0, u.ZP)({
                channelId: p,
                type: 65,
                content: "",
                author: e.author,
                state: d.yb.SENT,
            }),
            h = (0, c.e5)(f);
        return (
            (h.timestamp = e.timestamp),
            (h.messageReference = {
                channel_id: p,
                message_id: e.id,
            }),
            h
        );
    })(e, t);
    return null != h
        ? {
              message: h,
              position: "after",
          }
        : null;
}
