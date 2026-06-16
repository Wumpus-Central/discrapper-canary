"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(717125),
    a = n(495544),
    o = n(734057),
    l = n(935208);
n(702841);
let u = new Set();
class c extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default, o.A, s.A);
    }
    static displayName = "MediaPostSharePromptStore";
    shouldDisplayPrompt(e) {
        return u.has(e);
    }
}
let d = new c(r.h, {
    CONNECTION_OPEN: function () {
        u = new Set();
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return;
        let t = e.message;
        if (
            a.default.getId() !== t.author?.id ||
            !(function (e, t) {
                if (e !== l.default.castChannelIdAsMessageId(t)) return !1;
                let n = o.A.getChannel(t);
                if (null == n || !n.isForumPost()) return !1;
                let i = o.A.getChannel(n.parent_id);
                return i?.isMediaChannel() === !0;
            })(t.id, t.channel_id)
        )
            return;
        let n = o.A.getChannel(t.channel_id);
        null == n ||
            null == n.parent_id ||
            (s.A.isChannelGated(n.guild_id, n.parent_id) && u.add(l.default.castMessageIdAsChannelId(e.message.id)));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let { threadId: t } = e;
        u.delete(t);
    },
    LOGOUT: function (e) {
        u.clear();
    },
});
