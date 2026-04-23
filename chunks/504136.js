n.d(t, { A: () => h }), n(321073);
var i = n(448761),
    l = n(161204),
    a = n(559149),
    s = n(405269),
    r = n(661191),
    o = n(857069),
    c = n(694318),
    d = n(117316),
    u = n(652215);
function h(e) {
    let t,
        n,
        h,
        {
            channel: m,
            messages: A,
            oldestUnreadMessageId: g,
            treatSpam: _,
            summaries: p,
            selectedSummary: f,
            selectedConversation: E,
        } = e,
        C = [],
        x = !1,
        S = null != g ? r.default.extractTimestamp(g) : null,
        I = null;
    return (
        A.forEach((e) => {
            var a, v;
            let N, T;
            if (null != p && p.length > 0) {
                let t = r.default.extractTimestamp(e.id);
                for (let e = 0; e < p?.length; e++) {
                    if (null == p[e]) continue;
                    let n = r.default.extractTimestamp(p[e].startId),
                        i = r.default.extractTimestamp(p[e].endId);
                    if (t >= n && t <= i) {
                        if (I === p[e].id) break;
                        C.push({ type: u.TZK.DIVIDER, content: p[e].topic, contentKey: p[e].id }), (I = p[e].id);
                        break;
                    }
                }
            }
            let y = (0, s.i$)(e.timestamp, "LL");
            y !== t && null == I && (C.push({ type: u.TZK.DIVIDER, content: y, contentKey: y }), (t = y));
            let b = C[C.length - 1],
                j = null,
                R = (0, c.kf)(e);
            x = x || R;
            let M = (function (e, t, n) {
                if (i.M.NON_COLLAPSIBLE.has(t.type));
                else if (t.hasFlag(u.pr7.HIDDEN_SUSPENDED_USER)) return u.TZK.MESSAGE_GROUP_SUSPENDED_USER;
                else if (t.blocked) return u.TZK.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return u.TZK.MESSAGE_GROUP_IGNORED;
                else if ((0, c.iJ)(e) && n) return u.TZK.MESSAGE_GROUP_SPAMMER;
                return null;
            })(m, e, R && _);
            (null !== M &&
                ([j, b] =
                    ((T = a = b),
                    null == a || a.type !== M
                        ? ((N = { type: M, content: [], key: e.id }), C.push(N))
                        : (T = (N = a).content[N.content.length - 1]),
                    [N, T])),
            g === e.id && null != S)
                ? (null != b && b.type === u.TZK.DIVIDER
                      ? (b.unreadId = e.id)
                      : null !== j
                        ? ((v = j),
                          e.isFirstMessageInForumPost(m) || v.content.push({ type: u.TZK.DIVIDER, unreadId: e.id }),
                          (v.hasUnread = !0))
                        : e.isFirstMessageInForumPost(m) || C.push({ type: u.TZK.DIVIDER, unreadId: e.id }),
                  (S = null))
                : null != S &&
                  r.default.extractTimestamp(e.id) > S &&
                  (e.isFirstMessageInForumPost(m) || C.push({ type: u.TZK.DIVIDER, unreadId: e.id }), (S = null));
            let L = (0, d.r)(e, m);
            null != L &&
                "before" === L.position &&
                C.push({ type: u.TZK.MESSAGE, content: L.message, groupId: L.message.id });
            let D = b?.type === u.TZK.MESSAGE ? h : b;
            (0, o.l)(m, D, e) && (n = e.id);
            let P = {
                type: e.type === u.lAJ.THREAD_STARTER_MESSAGE ? u.TZK.THREAD_STARTER_MESSAGE : u.TZK.MESSAGE,
                content: e,
                groupId: n,
            };
            n === e.id && (h = P);
            let { jumpSequenceId: O, jumpFlash: w, jumpTargetId: U } = A;
            w && e.id === U && null != O && (P.flashKey = O),
                A.jumpTargetId === e.id && (P.jumpTarget = !0),
                null != f &&
                    e.id === f.startId &&
                    f.count > 1 &&
                    C.push({ type: u.TZK.DIVIDER, content: f.topic, contentKey: f.startId, isSummaryDivider: !0 }),
                null != E &&
                    e.id === E.start_message_id &&
                    E.message_count > 1 &&
                    C.push({
                        type: u.TZK.DIVIDER,
                        content: (0, l.u)(E),
                        contentKey: `conv-start-${E.id}`,
                        isConversationDivider: !0,
                    }),
                null !== j ? (j.content.push(P), P.jumpTarget && (j.hasJumpTarget = !0)) : C.push(P),
                e.isFirstMessageInForumPost(m) && C.push({ type: u.TZK.FORUM_POST_ACTION_BAR }),
                null != L &&
                    "after" === L.position &&
                    C.push({ type: u.TZK.MESSAGE, content: L.message, groupId: L.message.id }),
                null != f &&
                    e.id === f.endId &&
                    f.count > 1 &&
                    C.push({ type: u.TZK.DIVIDER, contentKey: f.endId, isSummaryDivider: !0 }),
                null != E &&
                    e.id === E.end_message_id &&
                    E.message_count > 1 &&
                    C.push({ type: u.TZK.DIVIDER, contentKey: `conv-end-${E.id}`, isConversationDivider: !0 });
        }),
        x && (0, c.iJ)(m) && a.A.trackExposure({ location: "416cc9_1" }),
        C
    );
}
