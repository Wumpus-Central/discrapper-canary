"use strict";
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { onBeforeBatch: i } = n,
        r = new Set();
    function s(e) {
        null != e.channel_id && r.has(e.channel_id) && t(e);
    }
    function a(e) {
        let { message: t } = e;
        null != t.channel_id && r.has(t.channel_id) && (i?.(), s(t));
    }
    function o(e) {
        let { channelId: t, messages: n } = e;
        r.add(t), i?.(), n.forEach((e) => s(e));
    }
    function l(e) {
        let { data: n } = e;
        i?.(),
            n.forEach((e) => {
                let { messages: n } = e;
                n.forEach((e) => {
                    e.forEach((e) => t(e));
                });
            });
    }
    e.actions = {
        ...e.actions,
        POST_CONNECTION_OPEN: function () {
            r.clear();
        },
        MESSAGE_CREATE: { callback: a, autoSubscribe: !1 },
        MESSAGE_UPDATE: a,
        LOAD_MESSAGES_SUCCESS: o,
        LOAD_MESSAGES_AROUND_SUCCESS: o,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: n } = e;
            i?.(), n.forEach((e) => t(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: n } = e;
            i?.(),
                n.forEach((e) => {
                    let { message: n } = e;
                    return t(n);
                });
        },
        SEARCH_MESSAGES_SUCCESS: l,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: l,
        CHANNEL_SELECT: {
            callback: function (e) {
                let { channelId: t } = e;
                null != t && r.add(t);
            },
            autoSubscribe: !1,
        },
    };
}
n.d(t, { A: () => i });
