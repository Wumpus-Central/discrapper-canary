n.d(t, { A: () => c });
var i = n(17928),
    l = n(228366),
    s = n(717125),
    r = n(495544),
    a = n(734057),
    u = n(935208);
n(702841);
let o = new Set();
class d extends i.Ay.Store {
    initialize() {
        this.waitFor(r.default, a.A, s.A);
    }
    static displayName = "MediaPostSharePromptStore";
    shouldDisplayPrompt(e) {
        return o.has(e);
    }
}
let c = new d(l.h, {
    CONNECTION_OPEN: function () {
        o = new Set();
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return;
        let t = e.message;
        if (
            r.default.getId() !== t.author?.id ||
            !(function (e, t) {
                if (e !== u.default.castChannelIdAsMessageId(t)) return !1;
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
            (s.A.isChannelGated(n.guild_id, n.parent_id) && o.add(u.default.castMessageIdAsChannelId(e.message.id)));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        o.delete(t);
    },
    LOGOUT: function (e) {
        o.clear();
    },
});
