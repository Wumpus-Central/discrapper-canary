n(47120);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(481060),
    c = n(570140),
    u = n(388032);
let d = !1,
    m = {},
    h = new Set();
class f extends (i = o.ZP.Store) {
    getMessagesPendingDeletion() {
        return h;
    }
    getScheduledMessagesForInbox() {
        return m;
    }
    get loading() {
        return d;
    }
}
(a = 'scheduledMessageStore'),
    (l = 'displayName') in (r = f)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new f(c.Z, {
        SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
            let { scheduledMessageSend: t } = e;
            (m = {
                ...m,
                [t.scheduledMessageId]: t
            }),
                (0, s.showToast)((0, s.createToast)(u.intl.string(u.t['CvHu/v']), s.ToastType.SUCCESS));
        },
        SCHEDULED_MESSAGES_CREATE_FAILURE: function (e) {
            let { errorMsg: t } = e;
            return (0, s.showToast)((0, s.createToast)(u.intl.formatToPlainString(u.t.PsJmUV, { error: t }), s.ToastType.FAILURE)), !1;
        },
        SCHEDULED_MESSAGES_DELETE_START: function (e) {
            let { scheduledMessageId: t } = e;
            if (h.has(t)) return !1;
            (h = new Set(h)).add(t);
        },
        SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
            let { scheduledMessageId: t } = e;
            if (!h.has(t)) return !1;
            (h = new Set(h)).delete(t), (m = { ...m }), delete m[t], (0, s.showToast)((0, s.createToast)(u.intl.string(u.t['JF/LWl']), s.ToastType.SUCCESS));
        },
        SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
            let { scheduledMessageId: t, errorMsg: n } = e;
            if (!h.has(t)) return !1;
            h.delete(t), (0, s.showToast)((0, s.createToast)(u.intl.formatToPlainString(u.t.sUvyW1, { error: n }), s.ToastType.FAILURE));
        },
        FETCH_SCHEDULED_MESSAGES: function (e) {
            let {} = e;
            d = !0;
        },
        FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
            let { messages: t } = e;
            for (let e of ((m = {}), t)) m[e.scheduledMessageId] = e;
            d = !1;
        },
        FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
            let {} = e;
            d = !1;
        }
    }));
