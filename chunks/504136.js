n.d(t, { A: () => u }), n(321073);
var i = n(448761),
    l = n(559149),
    a = n(405269),
    s = n(661191),
    r = n(857069),
    o = n(694318),
    c = n(117316),
    d = n(652215);
function u(e) {
    let t,
        n,
        u,
        { channel: h, messages: m, oldestUnreadMessageId: A, treatSpam: p, summaries: g, selectedSummary: f } = e,
        _ = [],
        E = !1,
        C = null != A ? s.default.extractTimestamp(A) : null,
        x = null;
    return (
        m.forEach((e) => {
            var l, S;
            let T, I;
            if (null != g && g.length > 0) {
                let t = s.default.extractTimestamp(e.id);
                for (let e = 0; e < g?.length; e++) {
                    if (null == g[e]) continue;
                    let n = s.default.extractTimestamp(g[e].startId),
                        i = s.default.extractTimestamp(g[e].endId);
                    if (t >= n && t <= i) {
                        if (x === g[e].id) break;
                        _.push({ type: d.TZK.DIVIDER, content: g[e].topic, contentKey: g[e].id }), (x = g[e].id);
                        break;
                    }
                }
            }
            let N = (0, a.i$)(e.timestamp, "LL");
            N !== t && null == x && (_.push({ type: d.TZK.DIVIDER, content: N, contentKey: N }), (t = N));
            let v = _[_.length - 1],
                y = null,
                b = (0, o.kf)(e);
            E = E || b;
            let R = (function (e, t, n) {
                if (i.M.NON_COLLAPSIBLE.has(t.type));
                else if (t.hasFlag(d.pr7.HIDDEN_SUSPENDED_USER)) return d.TZK.MESSAGE_GROUP_SUSPENDED_USER;
                else if (t.blocked) return d.TZK.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return d.TZK.MESSAGE_GROUP_IGNORED;
                else if ((0, o.iJ)(e) && n) return d.TZK.MESSAGE_GROUP_SPAMMER;
                return null;
            })(h, e, b && p);
            (null !== R &&
                ([y, v] =
                    ((I = l = v),
                    null == l || l.type !== R
                        ? ((T = { type: R, content: [], key: e.id }), _.push(T))
                        : (I = (T = l).content[T.content.length - 1]),
                    [T, I])),
            A === e.id && null != C)
                ? (null != v && v.type === d.TZK.DIVIDER
                      ? (v.unreadId = e.id)
                      : null !== y
                        ? ((S = y),
                          e.isFirstMessageInForumPost(h) || S.content.push({ type: d.TZK.DIVIDER, unreadId: e.id }),
                          (S.hasUnread = !0))
                        : e.isFirstMessageInForumPost(h) || _.push({ type: d.TZK.DIVIDER, unreadId: e.id }),
                  (C = null))
                : null != C &&
                  s.default.extractTimestamp(e.id) > C &&
                  (e.isFirstMessageInForumPost(h) || _.push({ type: d.TZK.DIVIDER, unreadId: e.id }), (C = null));
            let j = (0, c.r)(e, h);
            null != j &&
                "before" === j.position &&
                _.push({ type: d.TZK.MESSAGE, content: j.message, groupId: j.message.id });
            let M = v?.type === d.TZK.MESSAGE ? u : v;
            (0, r.l)(h, M, e) && (n = e.id);
            let D = {
                type: e.type === d.lAJ.THREAD_STARTER_MESSAGE ? d.TZK.THREAD_STARTER_MESSAGE : d.TZK.MESSAGE,
                content: e,
                groupId: n,
            };
            n === e.id && (u = D);
            let { jumpSequenceId: O, jumpFlash: L, jumpTargetId: P } = m;
            L && e.id === P && null != O && (D.flashKey = O),
                m.jumpTargetId === e.id && (D.jumpTarget = !0),
                null != f &&
                    e.id === f.startId &&
                    f.count > 1 &&
                    _.push({ type: d.TZK.DIVIDER, content: f.topic, contentKey: f.startId, isSummaryDivider: !0 }),
                null !== y ? (y.content.push(D), D.jumpTarget && (y.hasJumpTarget = !0)) : _.push(D),
                e.isFirstMessageInForumPost(h) && _.push({ type: d.TZK.FORUM_POST_ACTION_BAR }),
                null != j &&
                    "after" === j.position &&
                    _.push({ type: d.TZK.MESSAGE, content: j.message, groupId: j.message.id }),
                null != f &&
                    e.id === f.endId &&
                    f.count > 1 &&
                    _.push({ type: d.TZK.DIVIDER, contentKey: f.endId, isSummaryDivider: !0 });
        }),
        E && (0, o.iJ)(h) && l.A.trackExposure({ location: "416cc9_1" }),
        _
    );
}
