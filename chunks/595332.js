n.d(t, { A: () => u });
var i = n(17928),
    a = n(228366);
let s = new Set();
class l extends i.Ay.Store {
    isChatOpen(e) {
        return s.has(e);
    }
}
let u = new l(a.h, {
    LOGOUT: function () {
        if (0 === s.size) return !1;
        s.clear();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e,
            n = null != t && s.has(t) ? t : null;
        if (s.size === +(null != n)) return !1;
        (s.clear(), null != n && s.add(n));
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        if (!s.has(t)) return !1;
        s.delete(t);
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_SET: function (e) {
        let { channelId: t, open: n } = e;
        if (s.has(t) === n) return !1;
        n ? s.add(t) : s.delete(t);
    },
});
