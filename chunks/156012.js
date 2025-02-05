n.d(t, { Z: () => h }), n(47120);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140);
let o = !1,
    c = {},
    d = new Set(),
    u = {};
function m() {
    u = {};
}
class _ extends (i = r.ZP.Store) {
    getMessagesPendingDeletion() {
        return d;
    }
    getScheduledMessagesForInbox() {
        return c;
    }
    getPendingScheduledMessage(e) {
        return u[e];
    }
    get loading() {
        return o;
    }
}
(a = 'scheduledMessageStore'),
    (l = 'displayName') in _
        ? Object.defineProperty(_, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[l] = a);
let h = new _(s.Z, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (c = {
            ...c,
            [n.scheduledMessageId]: n
        }),
            (u = { ...u }),
            delete u[t];
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (d.has(t)) return !1;
        (d = new Set(d)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!d.has(t)) return !1;
        (d = new Set(d)).delete(t), (c = { ...c }), delete c[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!d.has(t)) return !1;
        (d = new Set(d)).delete(t);
    },
    FETCH_SCHEDULED_MESSAGES: function (e) {
        let {} = e;
        o = !0;
    },
    FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        for (let e of ((c = {}), t)) c[e.scheduledMessageId] = e;
        o = !1;
    },
    FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
        let {} = e;
        o = !1;
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        u = {
            ...u,
            [t]: {
                channelId: t,
                scheduledTimestamp: n
            }
        };
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (u = { ...u }), delete u[t];
    },
    LOGOUT: m,
    CONNECTION_OPEN: m
});
