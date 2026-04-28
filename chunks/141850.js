n.d(t, { Eg: () => E, WF: () => o, xI: () => d });
var i = n(636537),
    a = n(228366),
    r = n(720149),
    _ = n(958720),
    s = n(161204);
n(705448);
var l = n(652215);
function o(e) {
    let { channelId: t, limit: n = 25, before: r, after: _, around: o, isStaleRefresh: E } = e,
        d = null != o ? "around" : null != _ ? "after" : "before";
    a.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: d });
    let c = { limit: n };
    null != r && (c.before = r),
        null != _ && (c.after = _),
        null != o && (c.around = o),
        i.Bo.get({ url: l.Rsh.CHANNEL_CONVERSATIONS(t), query: c, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => {
                a.h.dispatch({
                    type: "CONVERSATIONS_FETCH_SUCCESS",
                    channelId: t,
                    conversations: e.body.conversations.map(s.a),
                    direction: d,
                    beforeShortCircuited: e.body.before_short_circuited,
                    afterShortCircuited: e.body.after_short_circuited,
                    anchor: o ?? r ?? _,
                    isStaleRefresh: E ?? !1,
                });
            },
            () => {
                a.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t });
            },
        );
}
function E() {
    a.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function d(e, t) {
    if (
        (a.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: t }), null != e && null != t)
    ) {
        c(e, t);
        let n = _.A.getConversationMetadata(e, t);
        n?.conversation.startMessageId != null &&
            r.A.jumpToMessage({ channelId: e, messageId: n.conversation.startMessageId, flash: !1 });
    }
}
async function c(e, t) {
    a.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: t });
    try {
        let n = await i.Bo.get({
            url: l.Rsh.CHANNEL_CONVERSATION(e, t),
            query: { include_messages: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        a.h.dispatch({
            type: "CONVERSATION_FETCH_SUCCESS",
            channelId: e,
            conversationId: t,
            conversation: (0, s.a)(n.body),
            messages: n.body.messages ?? [],
        });
    } catch {
        a.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: t });
    }
}
