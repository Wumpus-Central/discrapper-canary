n.d(t, { A: () => h });
var i = n(311907),
    l = n(73153),
    a = n(717125),
    s = n(961350),
    r = n(734057),
    o = n(661191),
    c = n(306680);
let d = new Set();
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default, r.A, a.A);
    }
    static displayName = "MediaPostSharePromptStore";
    shouldDisplayPrompt(e) {
        return d.has(e);
    }
}
let h = new u(l.h, {
    CONNECTION_OPEN: function () {
        d = new Set();
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return;
        let t = e.message;
        if (s.default.getId() !== t.author?.id || !(0, c.Co)(t.id, t.channel_id)) return;
        let n = r.A.getChannel(t.channel_id);
        null == n ||
            null == n.parent_id ||
            (a.A.isChannelGated(n.guild_id, n.parent_id) && d.add(o.default.castMessageIdAsChannelId(e.message.id)));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        d.delete(t);
    },
    LOGOUT: function (e) {
        d.clear();
    },
});
