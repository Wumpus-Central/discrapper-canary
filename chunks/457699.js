"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(320095),
    s = n(390248);
let l = {};
function o(e) {
    return `${e.channel_id}:${e.id}`;
}
function d(e) {
    let { data: t } = e;
    (l = {}),
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    l[o(e)] = (0, a.rh)(e);
                });
            });
        });
}
class c extends i.Ay.Store {
    static displayName = "SearchMessageStore";
    getMessage(e, t) {
        return l[o({ id: e, channel_id: t })];
    }
}
let u = new c(r.h, {
    SEARCH_MESSAGES_SUCCESS: d,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || null == t.channel_id) return !1;
        let n = o(t),
            i = l[n];
        return null != i && ((l[n] = (0, a.IU)(i, { attachments: t.attachments, embeds: t.embeds })), !0);
    },
    LOGOUT: function () {
        l = {};
    },
    CONNECTION_OPEN: function () {
        l = {};
    },
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = o({ id: t, channel_id: n }),
            r = l[i];
        null != r && (l[i] = (0, s.Td)(r));
    },
});
