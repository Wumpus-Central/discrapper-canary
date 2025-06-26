n.d(t, { Z: () => d }), n(539854), n(388685);
var r = n(275726),
    i = n(135938),
    l = n(55935),
    o = n(709054),
    a = n(554838),
    s = n(493892),
    c = n(356647),
    u = n(981631);
function d(e) {
    let t,
        n,
        d,
        { channel: p, messages: h, oldestUnreadMessageId: f, treatSpam: m, summaries: g, selectedSummary: b } = e,
        _ = [],
        y = !1,
        C = null != f ? o.default.extractTimestamp(f) : null,
        x = null;
    return (
        h.forEach((e) => {
            var i, v, j;
            let O, E;
            if (null != g && g.length > 0) {
                let t = o.default.extractTimestamp(e.id);
                for (let e = 0; (i = e < (null == g ? void 0 : g.length)), i; e++) {
                    if (null == g[e]) continue;
                    let n = o.default.extractTimestamp(g[e].startId),
                        r = o.default.extractTimestamp(g[e].endId);
                    if (t >= n && t <= r) {
                        if (x === g[e].id) break;
                        _.push({
                            type: u.ys_.DIVIDER,
                            content: g[e].topic,
                            contentKey: g[e].id
                        }),
                            (x = g[e].id);
                        break;
                    }
                }
            }
            let I = (0, l.vc)(e.timestamp, 'LL');
            I !== t &&
                null == x &&
                (_.push({
                    type: u.ys_.DIVIDER,
                    content: I,
                    contentKey: I
                }),
                (t = I));
            let S = _[_.length - 1],
                P = null,
                Z = (0, s.DQ)(e);
            y = y || Z;
            let N = (function (e, t, n) {
                if (r.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
                else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(p, e, Z && m);
            (null !== N &&
                ([P, S] =
                    ((E = v = S),
                    null == v || v.type !== N
                        ? ((O = {
                              type: N,
                              content: [],
                              key: e.id
                          }),
                          _.push(O))
                        : (E = (O = v).content[O.content.length - 1]),
                    [O, E])),
            f === e.id && null != C)
                ? (null != S && S.type === u.ys_.DIVIDER
                      ? (S.unreadId = e.id)
                      : null !== P
                        ? ((j = P),
                          e.isFirstMessageInForumPost(p) ||
                              j.content.push({
                                  type: u.ys_.DIVIDER,
                                  unreadId: e.id
                              }),
                          (j.hasUnread = !0))
                        : e.isFirstMessageInForumPost(p) ||
                          _.push({
                              type: u.ys_.DIVIDER,
                              unreadId: e.id
                          }),
                  (C = null))
                : null != C &&
                  o.default.extractTimestamp(e.id) > C &&
                  (e.isFirstMessageInForumPost(p) ||
                      _.push({
                          type: u.ys_.DIVIDER,
                          unreadId: e.id
                      }),
                  (C = null));
            let T = (0, c.f)(e, p);
            null != T &&
                _.push({
                    type: u.ys_.MESSAGE,
                    content: T,
                    groupId: T.id
                });
            let A = (null == S ? void 0 : S.type) === u.ys_.MESSAGE ? d : S;
            (0, a.J)(p, A, e) && (n = e.id);
            let w = {
                type: e.type === u.uaV.THREAD_STARTER_MESSAGE ? u.ys_.THREAD_STARTER_MESSAGE : u.ys_.MESSAGE,
                content: e,
                groupId: n
            };
            n === e.id && (d = w);
            let { jumpSequenceId: R, jumpFlash: k, jumpTargetId: M } = h;
            k && e.id === M && null != R && (w.flashKey = R),
                h.jumpTargetId === e.id && (w.jumpTarget = !0),
                null != b &&
                    e.id === b.startId &&
                    b.count > 1 &&
                    _.push({
                        type: u.ys_.DIVIDER,
                        content: b.topic,
                        contentKey: b.startId,
                        isSummaryDivider: !0
                    }),
                null !== P ? (P.content.push(w), w.jumpTarget && (P.hasJumpTarget = !0)) : _.push(w),
                e.isFirstMessageInForumPost(p) && _.push({ type: u.ys_.FORUM_POST_ACTION_BAR }),
                null != b &&
                    e.id === b.endId &&
                    b.count > 1 &&
                    _.push({
                        type: u.ys_.DIVIDER,
                        contentKey: b.endId,
                        isSummaryDivider: !0
                    });
        }),
        y && (0, s.P1)(p) && i.Z.trackExposure({ location: '416cc9_1' }),
        _
    );
}
