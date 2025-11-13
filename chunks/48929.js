n.d(t, { Z: () => f }), n(388685);
var i,
    r,
    l = n(442837),
    a = n(570140),
    o = n(430198),
    s = n(314897),
    c = n(592125),
    u = n(709054),
    d = n(522579);
let p = new Set();
class h extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.default, c.Z, o.Z);
    }
    shouldDisplayPrompt(e) {
        return p.has(e);
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "MediaPostSharePromptStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "MediaPostSharePromptStore");
let f = new h(a.Z, {
    CONNECTION_OPEN: function () {
        p = new Set();
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.isPushNotification) return;
        let n = e.message;
        if (s.default.getId() !== (null == (t = n.author) ? void 0 : t.id) || !(0, d.z9)(n.id, n.channel_id)) return;
        let i = c.Z.getChannel(n.channel_id);
        null != i &&
            null != i.parent_id &&
            o.Z.isChannelGated(i.guild_id, i.parent_id) &&
            p.add(u.default.castMessageIdAsChannelId(e.message.id));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        p.delete(t);
    },
    LOGOUT: function (e) {
        p.clear();
    },
});
