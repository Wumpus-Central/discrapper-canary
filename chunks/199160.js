"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = !1,
    a = {},
    o = new Set(),
    l = {};
function u() {
    l = {};
}
class c extends i.Ay.Store {
    static displayName = "scheduledMessageStore";
    getMessagesPendingDeletion() {
        return o;
    }
    getScheduledMessagesForInbox() {
        return a;
    }
    getPendingScheduledMessage(e) {
        return l[e];
    }
    get loading() {
        return s;
    }
}
let d = new c(r.h, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (a = { ...a, [n.scheduledMessageId]: n }), (l = { ...l }), delete l[t];
    },
    SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        a = { ...a, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (o.has(t)) return !1;
        (o = new Set(o)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!o.has(t)) return !1;
        (o = new Set(o)).delete(t), (a = { ...a }), delete a[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!o.has(t)) return !1;
        (o = new Set(o)).delete(t);
    },
    FETCH_SCHEDULED_MESSAGES: function (e) {
        let {} = e;
        s = !0;
    },
    FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        for (let e of ((a = {}), t)) a[e.scheduledMessageId] = e;
        s = !1;
    },
    FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
        let {} = e;
        s = !1;
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        l = { ...l, [t]: { channelId: t, scheduledTimestamp: n } };
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (l = { ...l }), delete l[t];
    },
    LOGOUT: u,
    CONNECTION_OPEN: u,
});
