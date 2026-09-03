n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366);
let a = !1,
    s = {},
    l = new Set();
function o(e) {
    let { scheduledMessageId: t } = e;
    if (l.has(t)) return !1;
    (l = new Set(l)).add(t);
}
function d(e) {
    let { scheduledMessageId: t } = e;
    if (!l.has(t) && null == s[t]) return !1;
    (l = new Set(l)).delete(t), (s = { ...s }), delete s[t];
}
function c(e) {
    let { scheduledMessageId: t } = e;
    if (!l.has(t)) return !1;
    (l = new Set(l)).delete(t);
}
function u() {
    (a = !1), (s = {}), (l = new Set());
}
class _ extends i.Ay.Store {
    static displayName = "scheduledMessageStore";
    getMessagesPendingRemoval() {
        return l;
    }
    getScheduledMessagesForInbox() {
        return s;
    }
    get loading() {
        return a;
    }
}
let E = new _(r.h, {
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        s = { ...s, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
        let { scheduledMessageSend: t } = e;
        s = { ...s, [t.scheduledMessageId]: t };
    },
    SCHEDULED_MESSAGES_DELETE_START: o,
    SCHEDULED_MESSAGES_DELETE_SUCCESS: d,
    SCHEDULED_MESSAGES_DELETE_FAILURE: c,
    SCHEDULED_MESSAGES_SEND_NOW_START: o,
    SCHEDULED_MESSAGES_SEND_NOW_SUCCESS: d,
    SCHEDULED_MESSAGES_SEND_NOW_FAILURE: c,
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
    LOGOUT: u,
    CONNECTION_OPEN: u,
});
