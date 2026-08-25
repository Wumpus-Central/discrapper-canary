t.d(n, { A: () => r });
var i = t(17928),
    a = t(228366);
let l = new Set();
class s extends i.Ay.Store {
    isChatOpen(e) {
        return l.has(e);
    }
}
let r = new s(a.h, {
    LOGOUT: function () {
        if (0 === l.size) return !1;
        l.clear();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: n } = e,
            t = null != n && l.has(n) ? n : null;
        if (l.size === +(null != t)) return !1;
        l.clear(), null != t && l.add(t);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: n },
        } = e;
        if (!l.has(n)) return !1;
        l.delete(n);
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_SET: function (e) {
        let { channelId: n, open: t } = e;
        if (l.has(n) === t) return !1;
        t ? l.add(n) : l.delete(n);
    },
});
