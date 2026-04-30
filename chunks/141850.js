"use strict";
n.d(t, { Eg: () => c, WF: () => u, xI: () => d });
var i = n(636537),
    r = n(228366),
    s = n(720149),
    a = n(958720),
    o = n(161204);
n(705448);
var l = n(652215);
function u(e) {
    let { channelId: t, limit: n = 25, before: s, after: a, around: u, isStaleRefresh: c } = e,
        d = null != u ? "around" : null != a ? "after" : "before";
    r.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: d });
    let _ = { limit: n };
    null != s && (_.before = s),
        null != a && (_.after = a),
        null != u && (_.around = u),
        i.Bo.get({ url: l.Rsh.CHANNEL_CONVERSATIONS(t), query: _, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => {
                r.h.dispatch({
                    type: "CONVERSATIONS_FETCH_SUCCESS",
                    channelId: t,
                    conversations: e.body.conversations.map(o.a),
                    direction: d,
                    beforeShortCircuited: e.body.before_short_circuited,
                    afterShortCircuited: e.body.after_short_circuited,
                    anchor: u ?? s ?? a,
                    isStaleRefresh: c ?? !1,
                });
            },
            () => {
                r.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t });
            },
        );
}
function c() {
    r.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function d(e, t) {
    if (
        (r.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: t }), null != e && null != t)
    ) {
        _(e, t);
        let n = a.A.getConversationMetadata(e, t);
        n?.conversation.startMessageId != null &&
            s.A.jumpToMessage({ channelId: e, messageId: n.conversation.startMessageId, flash: !1 });
    }
}
async function _(e, t) {
    r.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: t });
    try {
        let n = await i.Bo.get({
            url: l.Rsh.CHANNEL_CONVERSATION(e, t),
            query: { include_messages: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        r.h.dispatch({
            type: "CONVERSATION_FETCH_SUCCESS",
            channelId: e,
            conversationId: t,
            conversation: (0, o.a)(n.body),
            messages: n.body.messages ?? [],
        });
    } catch {
        r.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: t });
    }
}
