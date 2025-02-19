n.d(t, { Z: () => h }), n(47120);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
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
    d = {},
    u = new Set(),
    p = {};
function m() {
    p = {};
}
class f extends (r = i.ZP.Store) {
    getMessagesPendingDeletion() {
        return u;
    }
    getScheduledMessagesForInbox() {
        return d;
    }
    getPendingScheduledMessage(e) {
        return p[e];
    }
    get loading() {
        return c;
    }
}
o(f, 'displayName', 'scheduledMessageStore');
let h = new f(a.Z, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (d = s(l({}, d), { [n.scheduledMessageId]: n })), (p = l({}, p)), delete p[t];
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (u.has(t)) return !1;
        (u = new Set(u)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!u.has(t)) return !1;
        (u = new Set(u)).delete(t), (d = l({}, d)), delete d[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!u.has(t)) return !1;
        (u = new Set(u)).delete(t);
    },
    FETCH_SCHEDULED_MESSAGES: function (e) {
        let {} = e;
        c = !0;
    },
    FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        for (let e of ((d = {}), t)) d[e.scheduledMessageId] = e;
        c = !1;
    },
    FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
        let {} = e;
        c = !1;
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        p = s(l({}, p), {
            [t]: {
                channelId: t,
                scheduledTimestamp: n
            }
        });
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (p = l({}, p)), delete p[t];
    },
    LOGOUT: m,
    CONNECTION_OPEN: m
});
