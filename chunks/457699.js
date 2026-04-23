n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    l = n(320095),
    a = n(390248);
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
                    s[o(e)] = (0, l.rh)(e);
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
let c = new u(r.h, {
    SEARCH_MESSAGES_SUCCESS: d,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || null == t.channel_id) return !1;
        let n = o(t),
            i = s[n];
        return null != i && ((s[n] = (0, l.IU)(i, { attachments: t.attachments, embeds: t.embeds })), !0);
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
            r = s[i];
        null != r && (s[i] = (0, a.Td)(r));
    },
});
