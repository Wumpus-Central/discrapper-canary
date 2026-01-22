n.d(t, { r: () => h }), n(896048), n(938796);
var r = n(253506),
    l = n(665260),
    i = n(734066),
    a = n(274372),
    s = n(704844),
    o = n(961350),
    c = n(141468),
    u = n(963852),
    d = n(652215);
let f = new Map();
function p(e, t) {
    let n = (0, u.Ay)({
            channelId: t,
            type: d.lAJ.IN_GAME_MESSAGE_NUX,
            content: "",
            author: e.author,
            flags: d.pr7.EPHEMERAL,
            state: d.cmJ.SENT,
        }),
        r = (0, c.rh)(n);
    return (r.applicationId = e.applicationId), (r.timestamp = e.timestamp), r;
}
function h(e, t) {
    let n = (function (e, t) {
        var n, i;
        if (f.get(t.id) === e.id) return p(e, t.id);
        if (
            null == e.applicationId ||
            !(0, l.Lt)(e.flags, d.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ||
            !t.isDM() ||
            e.author.id === o.default.getId() ||
            null != e.activity ||
            (0, l.Lt)(null != (n = t.recipientFlags) ? n : 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX) ||
            f.has(t.id)
        )
            return null;
        let a = p(e, t.id);
        f.set(t.id, e.id);
        let c = (0, l.lA)(null != (i = t.recipientFlags) ? i : 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return s.A.updatePrivateChannelRecipientFlags(t.id, c), a;
    })(e, t);
    if (null != n)
        return {
            message: n,
            position: "before",
        };
    let h = (function (e, t) {
        var n;
        let r, s;
        if (
            !(0, i.J)() ||
            null ==
                e.attachments.find((e) => {
                    var t;
                    return (0, l.Lt)(null != (t = e.flags) ? t : 0, d.sbO.IS_CLIP);
                }) ||
            e.author.id === o.default.getId()
        )
            return null;
        let { clipId: f, remoteTriggerClipId: p } = (function (e) {
            let t = "__CLIP_METADATA__",
                n = e.indexOf(t);
            if (-1 === n) return {};
            let r = n + t.length,
                l = e.substring(r);
            try {
                let e = JSON.parse(l);
                return {
                    clipId: e.id,
                    remoteTriggerClipId: e.remoteTriggerClipId,
                };
            } catch (e) {
                return {};
            }
        })(e.content);
        if (null == f && null == p) return null;
        let h = a.A.getMatchingGroupClip(f, p);
        return null == h || a.A.wasClipSharedInChannel(h.id, t.id)
            ? null
            : ((n = t.id),
              (r = (0, u.Ay)({
                  channelId: n,
                  type: 66,
                  content: "",
                  author: e.author,
                  state: d.cmJ.SENT,
              })),
              ((s = (0, c.rh)(r)).timestamp = e.timestamp),
              (s.messageReference = {
                  channel_id: n,
                  message_id: e.id,
              }),
              s);
    })(e, t);
    return null != h
        ? {
              message: h,
              position: "after",
          }
        : null;
}
