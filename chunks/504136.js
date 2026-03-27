n.d(t, { A: () => h }), n(321073);
var i = n(448761),
    l = n(161204),
    s = n(559149),
    a = n(405269),
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
            treatSpam: p,
            summaries: f,
            selectedSummary: _,
            selectedConversation: E,
        } = e,
        x = [],
        C = !1,
        S = null != g ? r.default.extractTimestamp(g) : null,
        I = null;
    return (
        A.forEach((e) => {
            var s, T;
            let v, N;
            if (null != f && f.length > 0) {
                let t = r.default.extractTimestamp(e.id);
                for (let e = 0; e < f?.length; e++) {
                    if (null == f[e]) continue;
                    let n = r.default.extractTimestamp(f[e].startId),
                        i = r.default.extractTimestamp(f[e].endId);
                    if (t >= n && t <= i) {
                        if (I === f[e].id) break;
                        x.push({ type: u.TZK.DIVIDER, content: f[e].topic, contentKey: f[e].id }), (I = f[e].id);
                        break;
                    }
                }
            }
            let y = (0, a.i$)(e.timestamp, "LL");
            y !== t && null == I && (x.push({ type: u.TZK.DIVIDER, content: y, contentKey: y }), (t = y));
            let b = x[x.length - 1],
                j = null,
                R = (0, c.kf)(e);
            C = C || R;
            let M = (function (e, t, n) {
                if (i.M.NON_COLLAPSIBLE.has(t.type));
                else if (t.hasFlag(u.pr7.HIDDEN_SUSPENDED_USER)) return u.TZK.MESSAGE_GROUP_SUSPENDED_USER;
                else if (t.blocked) return u.TZK.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return u.TZK.MESSAGE_GROUP_IGNORED;
                else if ((0, c.iJ)(e) && n) return u.TZK.MESSAGE_GROUP_SPAMMER;
                return null;
            })(m, e, R && p);
            (null !== M &&
                ([j, b] =
                    ((N = s = b),
                    null == s || s.type !== M
                        ? ((v = { type: M, content: [], key: e.id }), x.push(v))
                        : (N = (v = s).content[v.content.length - 1]),
                    [v, N])),
            g === e.id && null != S)
                ? (null != b && b.type === u.TZK.DIVIDER
                      ? (b.unreadId = e.id)
                      : null !== j
                        ? ((T = j),
                          e.isFirstMessageInForumPost(m) || T.content.push({ type: u.TZK.DIVIDER, unreadId: e.id }),
                          (T.hasUnread = !0))
                        : e.isFirstMessageInForumPost(m) || x.push({ type: u.TZK.DIVIDER, unreadId: e.id }),
                  (S = null))
                : null != S &&
                  r.default.extractTimestamp(e.id) > S &&
                  (e.isFirstMessageInForumPost(m) || x.push({ type: u.TZK.DIVIDER, unreadId: e.id }), (S = null));
            let D = (0, d.r)(e, m);
            null != D &&
                "before" === D.position &&
                x.push({ type: u.TZK.MESSAGE, content: D.message, groupId: D.message.id });
            let O = b?.type === u.TZK.MESSAGE ? h : b;
            (0, o.l)(m, O, e) && (n = e.id);
            let L = {
                type: e.type === u.lAJ.THREAD_STARTER_MESSAGE ? u.TZK.THREAD_STARTER_MESSAGE : u.TZK.MESSAGE,
                content: e,
                groupId: n,
            };
            n === e.id && (h = L);
            let { jumpSequenceId: P, jumpFlash: w, jumpTargetId: k } = A;
            w && e.id === k && null != P && (L.flashKey = P),
                A.jumpTargetId === e.id && (L.jumpTarget = !0),
                null != _ &&
                    e.id === _.startId &&
                    _.count > 1 &&
                    x.push({ type: u.TZK.DIVIDER, content: _.topic, contentKey: _.startId, isSummaryDivider: !0 }),
                null != E &&
                    e.id === E.start_message_id &&
                    E.message_count > 1 &&
                    x.push({
                        type: u.TZK.DIVIDER,
                        content: (0, l.u)(E),
                        contentKey: `conv-start-${E.id}`,
                        isConversationDivider: !0,
                    }),
                null !== j ? (j.content.push(L), L.jumpTarget && (j.hasJumpTarget = !0)) : x.push(L),
                e.isFirstMessageInForumPost(m) && x.push({ type: u.TZK.FORUM_POST_ACTION_BAR }),
                null != D &&
                    "after" === D.position &&
                    x.push({ type: u.TZK.MESSAGE, content: D.message, groupId: D.message.id }),
                null != _ &&
                    e.id === _.endId &&
                    _.count > 1 &&
                    x.push({ type: u.TZK.DIVIDER, contentKey: _.endId, isSummaryDivider: !0 }),
                null != E &&
                    e.id === E.end_message_id &&
                    E.message_count > 1 &&
                    x.push({ type: u.TZK.DIVIDER, contentKey: `conv-end-${E.id}`, isConversationDivider: !0 });
        }),
        C && (0, c.iJ)(m) && s.A.trackExposure({ location: "416cc9_1" }),
        x
    );
}
