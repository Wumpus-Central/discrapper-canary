"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153),
    s = n(141468),
    a = n(390248);
let o = {};
function l(e) {
    return `${e.channel_id}:${e.id}`;
}
function u(e) {
    let { data: t } = e;
    (o = {}),
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    o[l(e)] = (0, s.rh)(e);
                });
            });
        });
}
class c extends r.Ay.Store {
    static displayName = "SearchMessageStore";
    getMessage(e, t) {
        return o[l({ id: e, channel_id: t })];
    }
}
let d = new c(i.h, {
    SEARCH_MESSAGES_SUCCESS: u,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: u,
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || null == t.channel_id) return !1;
        let n = l(t),
            r = o[n];
        return null != r && ((o[n] = (0, s.IU)(r, { attachments: t.attachments, embeds: t.embeds })), !0);
    },
    LOGOUT: function () {
        o = {};
    },
    CONNECTION_OPEN: function () {
        o = {};
    },
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            r = l({ id: t, channel_id: n }),
            i = o[r];
        null != i && (o[r] = (0, a.Td)(i));
    },
});
