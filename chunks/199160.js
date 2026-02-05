n.d(t, { A: () => u });
var i = n(311907),
    l = n(73153);
let a = !1,
    s = {},
    r = new Set(),
    o = {};
function c() {
    o = {};
}
class d extends i.Ay.Store {
    static displayName = "scheduledMessageStore";
    getMessagesPendingDeletion() {
        return r;
    }
    getScheduledMessagesForInbox() {
        return s;
    }
    getPendingScheduledMessage(e) {
        return o[e];
    }
    get loading() {
        return a;
    }
}
let u = new d(l.h, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t, scheduledMessageSend: n } = e;
        (s = { ...s, [n.scheduledMessageId]: n }), (o = { ...o }), delete o[t];
    },
    SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        s = { ...s, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_DELETE_START: function (e) {
        let { scheduledMessageId: t } = e;
        if (r.has(t)) return !1;
        (r = new Set(r)).add(t);
    },
    SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
        let { scheduledMessageId: t } = e;
        if (!r.has(t)) return !1;
        (r = new Set(r)).delete(t), (s = { ...s }), delete s[t];
    },
    SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
        let { scheduledMessageId: t } = e;
        if (!r.has(t)) return !1;
        (r = new Set(r)).delete(t);
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
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        o = { ...o, [t]: { channelId: t, scheduledTimestamp: n } };
    },
    DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        (o = { ...o }), delete o[t];
    },
    LOGOUT: c,
    CONNECTION_OPEN: c,
});
