n.d(t, { A: () => u });
var i = n(17928),
    a = n(228366);
let r = !1,
    l = {},
    s = new Set(),
    o = {};
function d() {
    o = {};
}
class c extends i.Ay.Store {
    static displayName = "scheduledMessageStore";
    getMessagesPendingDeletion() {
        return s;
    }
    getScheduledMessagesForInbox() {
        return l;
    }
    getPendingScheduledMessage(e) {
        return o[e];
    }
    get loading() {
        return r;
    }
}
let u = new c(a.h, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (l = { ...l, [n.scheduledMessageId]: n }), (o = { ...o }), delete o[t];
    },
    SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        l = { ...l, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (s.has(t)) return !1;
        (s = new Set(s)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!s.has(t)) return !1;
        (s = new Set(s)).delete(t), (l = { ...l }), delete l[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!s.has(t)) return !1;
        (s = new Set(s)).delete(t);
    },
    FETCH_SCHEDULED_MESSAGES: function (e) {
        let {} = e;
        r = !0;
    },
    FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        for (let e of ((l = {}), t)) l[e.scheduledMessageId] = e;
        r = !1;
    },
    FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
        let {} = e;
        r = !1;
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        o = { ...o, [t]: { channelId: t, scheduledTimestamp: n } };
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (o = { ...o }), delete o[t];
    },
    LOGOUT: d,
    CONNECTION_OPEN: d,
});
