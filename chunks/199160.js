"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366);
let a = !1,
    s = {},
    l = new Set();
function o() {
    (a = !1), (s = {}), (l = new Set());
}
class d extends i.Ay.Store {
    static displayName = "scheduledMessageStore";
    getMessagesPendingDeletion() {
        return l;
    }
    getScheduledMessagesForInbox() {
        return s;
    }
    get loading() {
        return a;
    }
}
let c = new d(r.h, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        s = { ...s, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        s = { ...s, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (l.has(t)) return !1;
        (l = new Set(l)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!l.has(t)) return !1;
        (l = new Set(l)).delete(t), (s = { ...s }), delete s[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!l.has(t)) return !1;
        (l = new Set(l)).delete(t);
    },
    FETCH_SCHEDULED_MESSAGES: function (e) {
        let {} = e;
        a = !0;
    },
    FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        for (let e of ((s = {}), t)) s[e.scheduledMessageId] = e;
        a = !1;
    },
    FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
        let {} = e;
        a = !1;
    },
    LOGOUT: o,
    CONNECTION_OPEN: o,
});
