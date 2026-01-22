n.d(t, {
    A: () => h,
}),
    n(896048);
var r,
    l,
    i = n(311907),
    a = n(73153),
    s = n(717125),
    o = n(961350),
    c = n(734057),
    u = n(661191),
    d = n(306680);
let f = new Set();
class p extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default, c.A, s.A);
    }
    shouldDisplayPrompt(e) {
        return f.has(e);
    }
}
(l = "displayName") in p
    ? Object.defineProperty(p, l, {
          value: "MediaPostSharePromptStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[l] = "MediaPostSharePromptStore");
let h = new p(a.h, {
    CONNECTION_OPEN: function () {
        f = new Set();
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.isPushNotification) return;
        let n = e.message;
        if (o.default.getId() !== (null == (t = n.author) ? void 0 : t.id) || !(0, d.Co)(n.id, n.channel_id)) return;
        let r = c.A.getChannel(n.channel_id);
        null == r ||
            null == r.parent_id ||
            (s.A.isChannelGated(r.guild_id, r.parent_id) && f.add(u.default.castMessageIdAsChannelId(e.message.id)));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        f.delete(t);
    },
    LOGOUT: function (e) {
        f.clear();
    },
});
