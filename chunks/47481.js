n.d(t, { Z: () => u }), n(653041), n(47120);
var i = n(275726),
    l = n(135938),
    a = n(55935),
    r = n(709054),
    s = n(554838),
    o = n(493892),
    c = n(356647),
    d = n(981631);
function u(e) {
    let t,
        n,
        u,
        { channel: h, messages: p, oldestUnreadMessageId: m, treatSpam: f, summaries: g, selectedSummary: _ } = e,
        C = [],
        x = !1,
        v = null != m ? r.default.extractTimestamp(m) : null,
        E = null;
    return (
        p.forEach((e) => {
            var l, I, b;
            if (null != g && g.length > 0) {
                let t = r.default.extractTimestamp(e.id);
                for (let e = 0; (l = e < (null == g ? void 0 : g.length)); e++) {
                    if (null == g[e]) continue;
                    let n = r.default.extractTimestamp(g[e].startId),
                        i = r.default.extractTimestamp(g[e].endId);
                    if (t >= n && t <= i) {
                        if (E === g[e].id) break;
                        C.push({
                            type: d.ys_.DIVIDER,
                            content: g[e].topic,
                            contentKey: g[e].id
                        }),
                            (E = g[e].id);
                        break;
                    }
                }
            }
            let Z = (0, a.vc)(e.timestamp, 'LL');
            Z !== t &&
                null == E &&
                (C.push({
                    type: d.ys_.DIVIDER,
                    content: Z,
                    contentKey: Z
                }),
                (t = Z));
            let N = C[C.length - 1],
                T = null,
                S = (0, o.DQ)(e);
            x = x || S;
            let j = (function (e, t, n) {
                if (i.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return d.ys_.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return d.ys_.MESSAGE_GROUP_IGNORED;
                else if ((0, o.P1)(e) && n) return d.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(h, e, S && f);
            if (null !== j) {
                let t, n;
                [T, N] =
                    ((n = I = N),
                    null == I || I.type !== j
                        ? ((t = {
                              type: j,
                              content: [],
                              key: e.id
                          }),
                          C.push(t))
                        : (n = (t = I).content[t.content.length - 1]),
                    [t, n]);
            }
            m === e.id && null != v
                ? (null != N && N.type === d.ys_.DIVIDER
                      ? (N.unreadId = e.id)
                      : null !== T
                        ? ((b = T),
                          e.isFirstMessageInForumPost(h) ||
                              b.content.push({
                                  type: d.ys_.DIVIDER,
                                  unreadId: e.id
                              }),
                          (b.hasUnread = !0))
                        : e.isFirstMessageInForumPost(h) ||
                          C.push({
                              type: d.ys_.DIVIDER,
                              unreadId: e.id
                          }),
                  (v = null))
                : null != v &&
                  r.default.extractTimestamp(e.id) > v &&
                  (e.isFirstMessageInForumPost(h) ||
                      C.push({
                          type: d.ys_.DIVIDER,
                          unreadId: e.id
                      }),
                  (v = null));
            let A = (0, c.f)(e, h);
            null != A &&
                C.push({
                    type: d.ys_.MESSAGE,
                    content: A,
                    groupId: A.id
                });
            let y = (null == N ? void 0 : N.type) === d.ys_.MESSAGE ? u : N;
            (0, s.J)(h, y, e) && (n = e.id);
            let P = {
                type: e.type === d.uaV.THREAD_STARTER_MESSAGE ? d.ys_.THREAD_STARTER_MESSAGE : d.ys_.MESSAGE,
                content: e,
                groupId: n
            };
            n === e.id && (u = P);
            let { jumpSequenceId: R, jumpFlash: M, jumpTargetId: L } = p;
            M && e.id === L && null != R && (P.flashKey = R),
                p.jumpTargetId === e.id && (P.jumpTarget = !0),
                null != _ &&
                    e.id === _.startId &&
                    _.count > 1 &&
                    C.push({
                        type: d.ys_.DIVIDER,
                        content: _.topic,
                        contentKey: _.startId,
                        isSummaryDivider: !0
                    }),
                null !== T ? (T.content.push(P), P.jumpTarget && (T.hasJumpTarget = !0)) : C.push(P),
                e.isFirstMessageInForumPost(h) && C.push({ type: d.ys_.FORUM_POST_ACTION_BAR }),
                null != _ &&
                    e.id === _.endId &&
                    _.count > 1 &&
                    C.push({
                        type: d.ys_.DIVIDER,
                        contentKey: _.endId,
                        isSummaryDivider: !0
                    });
        }),
        x && (0, o.P1)(h) && l.Z.trackExposure({ location: '416cc9_1' }),
        C
    );
}
