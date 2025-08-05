(n.d(t, { Z: () => p }), n(539854), n(388685));
var r = n(275726),
    i = n(135938),
    a = n(55935),
    o = n(709054),
    s = n(554838),
    l = n(493892),
    c = n(356647),
    u = n(981631);
function d(e, t, n) {
    if (r.V.NON_COLLAPSIBLE.has(t.type));
    else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
    else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
    else if ((0, l.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
    return null;
}
function f(e, t, n, r) {
    let i,
        a = r;
    return (
        null == r || r.type !== n
            ? ((i = {
                  type: n,
                  content: [],
                  key: t.id
              }),
              e.push(i))
            : (a = (i = r).content[i.content.length - 1]),
        [i, a]
    );
}
function _(e, t, n) {
    (n.isFirstMessageInForumPost(t) ||
        e.content.push({
            type: u.ys_.DIVIDER,
            unreadId: n.id
        }),
        (e.hasUnread = !0));
}
function p(e) {
    let t,
        n,
        r,
        { channel: p, messages: h, oldestUnreadMessageId: m, treatSpam: g, summaries: E, selectedSummary: b } = e,
        y = [],
        O = !1,
        v = null != m ? o.default.extractTimestamp(m) : null,
        I = null;
    return (
        h.forEach((e) => {
            if (null != E && E.length > 0) {
                var i;
                let t = o.default.extractTimestamp(e.id);
                for (let e = 0; (i = e < (null == E ? void 0 : E.length)), i; e++) {
                    if (null == E[e]) continue;
                    let n = o.default.extractTimestamp(E[e].startId),
                        r = o.default.extractTimestamp(E[e].endId);
                    if (t >= n && t <= r) {
                        if (I === E[e].id) break;
                        (y.push({
                            type: u.ys_.DIVIDER,
                            content: E[e].topic,
                            contentKey: E[e].id
                        }),
                            (I = E[e].id));
                        break;
                    }
                }
            }
            let T = (0, a.vc)(e.timestamp, 'LL');
            T !== t &&
                null == I &&
                (y.push({
                    type: u.ys_.DIVIDER,
                    content: T,
                    contentKey: T
                }),
                (t = T));
            let S = y[y.length - 1],
                A = null,
                N = (0, l.DQ)(e);
            O = O || N;
            let C = d(p, e, N && g);
            (null !== C && ([A, S] = f(y, e, C, S)),
                m === e.id && null != v
                    ? (null != S && S.type === u.ys_.DIVIDER
                          ? (S.unreadId = e.id)
                          : null !== A
                            ? _(A, p, e)
                            : e.isFirstMessageInForumPost(p) ||
                              y.push({
                                  type: u.ys_.DIVIDER,
                                  unreadId: e.id
                              }),
                      (v = null))
                    : null != v &&
                      o.default.extractTimestamp(e.id) > v &&
                      (e.isFirstMessageInForumPost(p) ||
                          y.push({
                              type: u.ys_.DIVIDER,
                              unreadId: e.id
                          }),
                      (v = null)));
            let w = (0, c.f)(e, p);
            null != w &&
                y.push({
                    type: u.ys_.MESSAGE,
                    content: w,
                    groupId: w.id
                });
            let R = (null == S ? void 0 : S.type) === u.ys_.MESSAGE ? r : S;
            (0, s.J)(p, R, e) && (n = e.id);
            let P = {
                type: e.type === u.uaV.THREAD_STARTER_MESSAGE ? u.ys_.THREAD_STARTER_MESSAGE : u.ys_.MESSAGE,
                content: e,
                groupId: n
            };
            n === e.id && (r = P);
            let { jumpSequenceId: D, jumpFlash: L, jumpTargetId: x } = h;
            (L && e.id === x && null != D && (P.flashKey = D),
                h.jumpTargetId === e.id && (P.jumpTarget = !0),
                null != b &&
                    e.id === b.startId &&
                    b.count > 1 &&
                    y.push({
                        type: u.ys_.DIVIDER,
                        content: b.topic,
                        contentKey: b.startId,
                        isSummaryDivider: !0
                    }),
                null !== A ? (A.content.push(P), P.jumpTarget && (A.hasJumpTarget = !0)) : y.push(P),
                e.isFirstMessageInForumPost(p) && y.push({ type: u.ys_.FORUM_POST_ACTION_BAR }),
                null != b &&
                    e.id === b.endId &&
                    b.count > 1 &&
                    y.push({
                        type: u.ys_.DIVIDER,
                        contentKey: b.endId,
                        isSummaryDivider: !0
                    }));
        }),
        O && (0, l.P1)(p) && i.Z.trackExposure({ location: '416cc9_1' }),
        y
    );
}
