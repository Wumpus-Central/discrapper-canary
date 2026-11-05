n.d(t, { A: () => c });
var i = n(855986),
    r = n(73153),
    l = n(717125),
    s = n(46653),
    a = n(734057),
    o = n(811091);
n(164636);
let u = new Set();
class d extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default, a.A, l.A);
    }
    static displayName = "MediaPostSharePromptStore";
    shouldDisplayPrompt(e) {
        return u.has(e);
    }
}
let c = new d(r.h, {
    CONNECTION_OPEN: function () {
        u = new Set();
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return;
        let t = e.message;
        if (
            s.default.getId() !== t.author?.id ||
            !(function (e, t) {
                if (e !== o.default.castChannelIdAsMessageId(t)) return !1;
                let n = a.A.getChannel(t);
                if (null == n || !n.isForumPost()) return !1;
                let i = a.A.getChannel(n.parent_id);
                return i?.isMediaChannel() === !0;
            })(t.id, t.channel_id)
        )
            return;
        let n = a.A.getChannel(t.channel_id);
        null == n ||
            null == n.parent_id ||
            (l.A.isChannelGated(n.guild_id, n.parent_id) && u.add(o.default.castMessageIdAsChannelId(e.message.id)));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        u.delete(t);
    },
    LOGOUT: function (e) {
        u.clear();
    },
});
