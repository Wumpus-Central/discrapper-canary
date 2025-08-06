(n.d(t, { Z: () => S }), n(388685));
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            }));
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = !1,
    d = {},
    f = new Set(),
    _ = {};
function p(e) {
    let { channelId: t, scheduledMessageSend: n } = e;
    ((d = c(s({}, d), { [n.scheduledMessageId]: n })), (_ = s({}, _)), delete _[t]);
}
function h(e) {
    let { scheduledMessageId: t } = e;
    if (f.has(t)) return !1;
    (f = new Set(f)).add(t);
}
function m(e) {
    let { scheduledMessageId: t } = e;
    if (!f.has(t)) return !1;
    ((f = new Set(f)).delete(t), (d = s({}, d)), delete d[t]);
}
function g(e) {
    let { scheduledMessageId: t } = e;
    if (!f.has(t)) return !1;
    (f = new Set(f)).delete(t);
}
function E() {
    _ = {};
}
function b(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    _ = c(s({}, _), {
        [t]: {
            channelId: t,
            scheduledTimestamp: n
        }
    });
}
function y(e) {
    let { channelId: t } = e;
    ((_ = s({}, _)), delete _[t]);
}
function O(e) {
    let { messages: t } = e;
    for (let e of ((d = {}), t)) d[e.scheduledMessageId] = e;
    u = !1;
}
function v(e) {
    let {} = e;
    u = !1;
}
function I(e) {
    let {} = e;
    u = !0;
}
class T extends (r = i.ZP.Store) {
    getMessagesPendingDeletion() {
        return f;
    }
    getScheduledMessagesForInbox() {
        return d;
    }
    getPendingScheduledMessage(e) {
        return _[e];
    }
    get loading() {
        return u;
    }
}
a(T, 'displayName', 'scheduledMessageStore');
let S = new T(o.Z, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: p,
    SCHEDULED_MESSAGES_DELETE_START: h,
    SCHEDULED_MESSAGES_DELETE_SUCCESS: m,
    SCHEDULED_MESSAGES_DELETE_FAILURE: g,
    FETCH_SCHEDULED_MESSAGES: I,
    FETCH_SCHEDULED_MESSAGES_SUCCESS: O,
    FETCH_SCHEDULED_MESSAGES_FAILURE: v,
    CREATE_PENDING_SCHEDULED_MESSAGE: b,
    DELETE_PENDING_SCHEDULED_MESSAGE: y,
    LOGOUT: E,
    CONNECTION_OPEN: E
});
