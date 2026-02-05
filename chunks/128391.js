"use strict";
function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { onBeforeBatch: r } = n,
        i = new Set();
    function a(e) {
        null != e.channel_id && i.has(e.channel_id) && t(e);
    }
    function s() {
        i.clear();
    }
    function o(e) {
        let { channelId: t } = e;
        null != t && i.add(t);
    }
    function l(e) {
        let { message: t } = e;
        null != t.channel_id && i.has(t.channel_id) && (r?.(), a(t));
    }
    function u(e) {
        let { channelId: t, messages: n } = e;
        i.add(t), r?.(), n.forEach((e) => a(e));
    }
    function c(e) {
        let { messages: n } = e;
        r?.(), n.forEach((e) => t(e));
    }
    function d(e) {
        let { pins: n } = e;
        r?.(),
            n.forEach((e) => {
                let { message: n } = e;
                return t(n);
            });
    }
    function _(e) {
        let { data: n } = e;
        r?.(),
            n.forEach((e) => {
                let { messages: n } = e;
                n.forEach((e) => {
                    e.forEach((e) => t(e));
                });
            });
    }
    e.actions = {
        ...e.actions,
        POST_CONNECTION_OPEN: s,
        MESSAGE_CREATE: { callback: l, autoSubscribe: !1 },
        MESSAGE_UPDATE: l,
        LOAD_MESSAGES_SUCCESS: u,
        LOAD_MESSAGES_AROUND_SUCCESS: u,
        LOAD_RECENT_MENTIONS_SUCCESS: c,
        LOAD_PINNED_MESSAGES_SUCCESS: d,
        SEARCH_MESSAGES_SUCCESS: _,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: _,
        CHANNEL_SELECT: { callback: o, autoSubscribe: !1 },
    };
}
n.d(t, { A: () => r });
