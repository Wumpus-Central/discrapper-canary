n.d(t, { Z: () => h }), n(47120);
var r,
    i = n(442837),
    a = n(570140);
function l(e, t, n) {
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = !1,
    u = {},
    d = new Set(),
    p = {};
function m() {
    p = {};
}
class f extends (r = i.ZP.Store) {
    getMessagesPendingDeletion() {
        return d;
    }
    getScheduledMessagesForInbox() {
        return u;
    }
    getPendingScheduledMessage(e) {
        return p[e];
    }
    get loading() {
        return c;
    }
}
l(f, 'displayName', 'scheduledMessageStore');
let h = new f(a.Z, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (u = s(o({}, u), { [n.scheduledMessageId]: n })), (p = o({}, p)), delete p[t];
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (d.has(t)) return !1;
        (d = new Set(d)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!d.has(t)) return !1;
        (d = new Set(d)).delete(t), (u = o({}, u)), delete u[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!d.has(t)) return !1;
        (d = new Set(d)).delete(t);
    },
    FETCH_SCHEDULED_MESSAGES: function (e) {
        let {} = e;
        c = !0;
    },
    FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        for (let e of ((u = {}), t)) u[e.scheduledMessageId] = e;
        c = !1;
    },
    FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
        let {} = e;
        c = !1;
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        p = s(o({}, p), {
            [t]: {
                channelId: t,
                scheduledTimestamp: n
            }
        });
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (p = o({}, p)), delete p[t];
    },
    LOGOUT: m,
    CONNECTION_OPEN: m
});
