r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(47120);
function a(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { onBeforeBatch: i } = r,
        a = new Set();
    function o(e) {
        null != e.channel_id && a.has(e.channel_id) && n(e);
    }
    function s() {
        a.clear();
    }
    function l(e) {
        let { channelId: n } = e;
        null != n && a.add(n);
    }
    function u(e) {
        let { message: n } = e;
        if (null != n.channel_id && !!a.has(n.channel_id)) null == i || i(), o(n);
    }
    function c(e) {
        let { channelId: n, messages: r } = e;
        a.add(n), null == i || i(), r.forEach((e) => o(e));
    }
    function d(e) {
        let { messages: r } = e;
        null == i || i(), r.forEach((e) => n(e));
    }
    function f(e) {
        let { messages: r } = e;
        null == i || i(), r.forEach((e) => n(e));
    }
    function p(e) {
        null == i || i(),
            e.messages.forEach((e) => {
                e.forEach((e) => n(e));
            });
    }
    e.actions = {
        ...e.actions,
        POST_CONNECTION_OPEN: s,
        MESSAGE_CREATE: {
            callback: u,
            autoSubscribe: !1
        },
        MESSAGE_UPDATE: u,
        LOAD_MESSAGES_SUCCESS: c,
        LOAD_MESSAGES_AROUND_SUCCESS: c,
        LOAD_RECENT_MENTIONS_SUCCESS: d,
        LOAD_PINNED_MESSAGES_SUCCESS: f,
        SEARCH_FINISH: p,
        MOD_VIEW_SEARCH_FINISH: p,
        CHANNEL_SELECT: {
            callback: l,
            autoSubscribe: !1
        }
    };
}
