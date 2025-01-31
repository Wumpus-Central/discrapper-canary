function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { onBeforeBatch: i } = n,
        r = new Set();
    function a(e) {
        null != e.channel_id && r.has(e.channel_id) && t(e);
    }
    function s() {
        r.clear();
    }
    function o(e) {
        let { channelId: t } = e;
        null != t && r.add(t);
    }
    function l(e) {
        let { message: t } = e;
        null != t.channel_id && r.has(t.channel_id) && (null == i || i(), a(t));
    }
    function u(e) {
        let { channelId: t, messages: n } = e;
        r.add(t), null == i || i(), n.forEach((e) => a(e));
    }
    function c(e) {
        let { messages: n } = e;
        null == i || i(), n.forEach((e) => t(e));
    }
    function d(e) {
        let { messages: n } = e;
        null == i || i(), n.forEach((e) => t(e));
    }
    function f(e) {
        null == i || i(),
            e.messages.forEach((e) => {
                e.forEach((e) => t(e));
            });
    }
    e.actions = {
        ...e.actions,
        POST_CONNECTION_OPEN: s,
        MESSAGE_CREATE: {
            callback: l,
            autoSubscribe: !1
        },
        MESSAGE_UPDATE: l,
        LOAD_MESSAGES_SUCCESS: u,
        LOAD_MESSAGES_AROUND_SUCCESS: u,
        LOAD_RECENT_MENTIONS_SUCCESS: c,
        LOAD_PINNED_MESSAGES_SUCCESS: d,
        SEARCH_FINISH: f,
        MOD_VIEW_SEARCH_FINISH: f,
        CHANNEL_SELECT: {
            callback: o,
            autoSubscribe: !1
        }
    };
}
n.d(t, { Z: () => i }), n(47120);
