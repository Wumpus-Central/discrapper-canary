n.d(t, { A: () => u });
var i = n(17928),
    r = n(73153),
    a = n(181041),
    s = n(987741);
let l = null,
    o = 0,
    d = 0;
class c extends i.Ay.Store {
    static displayName = "SelectedConversationStore";
    initialize() {
        this.syncWith([a.A, s.A], () => null != l);
    }
    getSelectedConversationId(e) {
        return l?.channelId === e ? l.conversationId : null;
    }
    getConversation(e) {
        if (l?.channelId !== e) return null;
        let { cacheType: t, conversationId: n } = l;
        switch (t) {
            case "channel":
                return a.A.getConversation(e, n);
            case "preview":
                return s.A.getConversation(n);
            default:
                return null;
        }
    }
    getHydratedMessages(e) {
        if (l?.channelId !== e) return null;
        let { cacheType: t, conversationId: n } = l;
        switch (t) {
            case "channel":
                return a.A.getHydratedMessages(e, n);
            case "preview":
                return s.A.getHydratedMessages(n);
            default:
                return null;
        }
    }
    isFullyHydrated(e) {
        if (l?.channelId !== e) return !1;
        let { cacheType: t, conversationId: n } = l;
        switch (t) {
            case "channel":
                return a.A.isFullyHydrated(e, n);
            case "preview":
                return s.A.isFullyHydrated(n);
            default:
                return !1;
        }
    }
    isConversationFetchPending(e, t) {
        if (l?.channelId !== e) return !1;
        let { cacheType: n, conversationId: i } = l;
        switch (n) {
            case "channel":
                return a.A.isConversationFetchPending(i, t);
            case "preview":
                return s.A.isConversationFetchPending(i, t);
            default:
                return !1;
        }
    }
    consumeFocusRequest() {
        return o !== d && ((d = o), !0);
    }
}
let u = new c(r.h, {
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n, cacheType: i } = e;
        l = { channelId: t, conversationId: n, cacheType: i };
    },
    CLEAR_CONVERSATION_SELECTION: function (e) {
        let { channelId: t, conversationId: n } = e;
        if (l?.channelId !== t || (null != n && l.conversationId !== n)) return !1;
        l = null;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == l || l.channelId === t) return !1;
        l = null;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (l?.channelId !== t.id) return !1;
        l = null;
    },
    CONVERSATION_FOCUS_REQUEST: function () {
        o++;
    },
    LOGOUT: function () {
        l = null;
    },
});
