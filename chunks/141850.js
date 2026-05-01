n.d(t, { Eg: () => c, WF: () => d, xI: () => _ });
var i = n(636537),
    a = n(228366),
    r = n(720149),
    s = n(958720),
    l = n(161204);
n(705448);
var o = n(652215);
function d(e) {
    let { channelId: t, limit: n = 25, before: r, after: s, around: d, isStaleRefresh: c } = e,
        _ = null != d ? "around" : null != s ? "after" : "before";
    a.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: _ });
    let E = { limit: n };
    null != r && (E.before = r),
        null != s && (E.after = s),
        null != d && (E.around = d),
        i.Bo.get({ url: o.Rsh.CHANNEL_CONVERSATIONS(t), query: E, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => {
                a.h.dispatch({
                    type: "CONVERSATIONS_FETCH_SUCCESS",
                    channelId: t,
                    conversations: e.body.conversations.map(l.a),
                    direction: _,
                    beforeShortCircuited: e.body.before_short_circuited,
                    afterShortCircuited: e.body.after_short_circuited,
                    anchor: d ?? r ?? s,
                    isStaleRefresh: c ?? !1,
                });
            },
            () => {
                a.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t });
            },
        );
}
function c() {
    a.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function _(e, t) {
    if (
        (a.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: t }), null != e && null != t)
    ) {
        E(e, t);
        let n = s.A.getConversationMetadata(e, t);
        n?.conversation.startMessageId != null &&
            r.A.jumpToMessage({ channelId: e, messageId: n.conversation.startMessageId, flash: !1 });
    }
}
async function E(e, t) {
    a.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: t });
    try {
        let n = await i.Bo.get({
            url: o.Rsh.CHANNEL_CONVERSATION(e, t),
            query: { include_messages: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        a.h.dispatch({
            type: "CONVERSATION_FETCH_SUCCESS",
            channelId: e,
            conversationId: t,
            conversation: (0, l.a)(n.body),
            messages: n.body.messages ?? [],
        });
    } catch {
        a.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: t });
    }
}
