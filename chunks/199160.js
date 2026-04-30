n.d(t, { A: () => c });
var i = n(17928),
    l = n(228366);
let s = !1,
    r = {},
    a = new Set(),
    u = {};
function o() {
    u = {};
}
class d extends i.Ay.Store {
    static displayName = "scheduledMessageStore";
    getMessagesPendingDeletion() {
        return a;
    }
    getScheduledMessagesForInbox() {
        return r;
    }
    getPendingScheduledMessage(e) {
        return u[e];
    }
    get loading() {
        return s;
    }
}
let c = new d(l.h, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (r = { ...r, [n.scheduledMessageId]: n }), (u = { ...u }), delete u[t];
    },
    SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        r = { ...r, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (a.has(t)) return !1;
        (a = new Set(a)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!a.has(t)) return !1;
        (a = new Set(a)).delete(t), (r = { ...r }), delete r[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!a.has(t)) return !1;
        (a = new Set(a)).delete(t);
    },
    FETCH_SCHEDULED_MESSAGES: function (e) {
        let {} = e;
        s = !0;
    },
    FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        for (let e of ((r = {}), t)) r[e.scheduledMessageId] = e;
        s = !1;
    },
    FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
        let {} = e;
        s = !1;
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        u = { ...u, [t]: { channelId: t, scheduledTimestamp: n } };
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (u = { ...u }), delete u[t];
    },
    LOGOUT: o,
    CONNECTION_OPEN: o,
});
