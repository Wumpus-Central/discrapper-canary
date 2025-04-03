n.d(t, { Z: () => m }), n(47120);
var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    s = n(430198),
    c = n(314897),
    u = n(592125),
    d = n(709054),
    p = n(522579);
let h = new Set();
class f extends (r = o.ZP.Store) {
    shouldDisplayPrompt(e) {
        return h.has(e);
    }
}
(l = 'MediaPostSharePromptStore'),
    (i = 'displayName') in f
        ? Object.defineProperty(f, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = l);
let m = new f(a.Z, {
    CONNECTION_OPEN: function () {
        h = new Set();
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.isPushNotification) return;
        let n = e.message;
        if (c.default.getId() !== (null == (t = n.author) ? void 0 : t.id) || !(0, p.z9)(n.id, n.channel_id)) return;
        let r = u.Z.getChannel(n.channel_id);
        null != r && null != r.parent_id && s.Z.isChannelGated(r.guild_id, r.parent_id) && h.add(d.default.castMessageIdAsChannelId(e.message.id));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        h.delete(t);
    },
    LOGOUT: function (e) {
        h.clear();
    }
});
