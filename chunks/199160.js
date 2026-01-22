n.d(t, { A: () => b }), n(896048);
var r,
    l = n(311907),
    i = n(73153);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
    f = {};
function p() {
    f = {};
}
class h extends (r = l.Ay.Store) {
    getMessagesPendingDeletion() {
        return d;
    }
    getScheduledMessagesForInbox() {
        return u;
    }
    getPendingScheduledMessage(e) {
        return f[e];
    }
    get loading() {
        return c;
    }
}
a(h, "displayName", "scheduledMessageStore");
let b = new h(i.h, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (u = o(s({}, u), { [n.scheduledMessageId]: n })), (f = s({}, f)), delete f[t];
    },
    SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        u = o(s({}, u), { [t.scheduledMessageId]: t });
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (d.has(t)) return !1;
        (d = new Set(d)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!d.has(t)) return !1;
        (d = new Set(d)).delete(t), (u = s({}, u)), delete u[t];
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
        f = o(s({}, f), {
            [t]: {
                channelId: t,
                scheduledTimestamp: n,
            },
        });
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (f = s({}, f)), delete f[t];
    },
    LOGOUT: p,
    CONNECTION_OPEN: p,
});
