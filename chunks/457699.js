n.d(t, { A: () => c });
var i = n(17928),
    l = n(228366),
    a = n(320095),
    r = n(390248);
let s = {};
function o(e) {
    return `${e.channel_id}:${e.id}`;
}
function d(e) {
    let { data: t } = e;
    (s = {}),
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    s[o(e)] = (0, a.rh)(e);
                });
            });
        });
}
class u extends i.Ay.Store {
    static displayName = "SearchMessageStore";
    getMessage(e, t) {
        return s[o({ id: e, channel_id: t })];
    }
}
let c = new u(l.h, {
    SEARCH_MESSAGES_SUCCESS: d,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || null == t.channel_id) return !1;
        let n = o(t),
            i = s[n];
        return null != i && ((s[n] = (0, a.IU)(i, { attachments: t.attachments, embeds: t.embeds })), !0);
    },
    LOGOUT: function () {
        s = {};
    },
    CONNECTION_OPEN: function () {
        s = {};
    },
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = o({ id: t, channel_id: n }),
            l = s[i];
        null != l && (s[i] = (0, r.Td)(l));
    },
});
