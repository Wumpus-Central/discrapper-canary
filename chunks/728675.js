function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { onBeforeBatch: r } = n,
        a = new Set();
    function s(e) {
        null != e.channel_id && a.has(e.channel_id) && t(e);
    }
    function l() {
        a.clear();
    }
    function c(e) {
        let { channelId: t } = e;
        null != t && a.add(t);
    }
    function u(e) {
        let { message: t } = e;
        null != t.channel_id && a.has(t.channel_id) && (null == r || r(), s(t));
    }
    function d(e) {
        let { channelId: t, messages: n } = e;
        a.add(t), null == r || r(), n.forEach((e) => s(e));
    }
    function f(e) {
        let { messages: n } = e;
        null == r || r(), n.forEach((e) => t(e));
    }
    function _(e) {
        let { messages: n } = e;
        null == r || r(), n.forEach((e) => t(e));
    }
    function p(e) {
        null == r || r(),
            e.messages.forEach((e) => {
                e.forEach((e) => t(e));
            });
    }
    e.actions = o(i({}, e.actions), {
        POST_CONNECTION_OPEN: l,
        MESSAGE_CREATE: {
            callback: u,
            autoSubscribe: !1
        },
        MESSAGE_UPDATE: u,
        LOAD_MESSAGES_SUCCESS: d,
        LOAD_MESSAGES_AROUND_SUCCESS: d,
        LOAD_RECENT_MENTIONS_SUCCESS: f,
        LOAD_PINNED_MESSAGES_SUCCESS: _,
        SEARCH_FINISH: p,
        MOD_VIEW_SEARCH_FINISH: p,
        CHANNEL_SELECT: {
            callback: c,
            autoSubscribe: !1
        }
    });
}
n.d(t, { Z: () => s }), n(388685);
