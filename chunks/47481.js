n.d(t, { Z: () => d }), n(653041), n(47120);
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
        C = !1,
        v = null != f ? o.default.extractTimestamp(f) : null,
        y = null;
    return (
        h.forEach((e) => {
            var i, x, j;
            if (null != g && g.length > 0) {
                let t = o.default.extractTimestamp(e.id);
                for (let e = 0; (i = e < (null == g ? void 0 : g.length)); e++) {
                    if (null == g[e]) continue;
                    let n = o.default.extractTimestamp(g[e].startId),
                        r = o.default.extractTimestamp(g[e].endId);
                    if (t >= n && t <= r) {
                        if (y === g[e].id) break;
                        _.push({
                            type: u.ys_.DIVIDER,
                            content: g[e].topic,
                            contentKey: g[e].id
                        }),
                            (y = g[e].id);
                        break;
                    }
                }
            }
            let O = (0, l.vc)(e.timestamp, 'LL');
            O !== t &&
                null == y &&
                (_.push({
                    type: u.ys_.DIVIDER,
                    content: O,
                    contentKey: O
                }),
                (t = O));
            let N = _[_.length - 1],
                E = null,
                P = (0, s.DQ)(e);
            C = C || P;
            let I = (function (e, t, n) {
                if (r.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
                else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(p, e, P && m);
            if (null !== I) {
                let t, n;
                [E, N] =
                    ((n = x = N),
                    null == x || x.type !== I
                        ? ((t = {
                              type: I,
                              content: [],
                              key: e.id
                          }),
                          _.push(t))
                        : (n = (t = x).content[t.content.length - 1]),
                    [t, n]);
            }
            f === e.id && null != v
                ? (null != N && N.type === u.ys_.DIVIDER
                      ? (N.unreadId = e.id)
                      : null !== E
                        ? ((j = E),
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
                  (v = null))
                : null != v &&
                  o.default.extractTimestamp(e.id) > v &&
                  (e.isFirstMessageInForumPost(p) ||
                      _.push({
                          type: u.ys_.DIVIDER,
                          unreadId: e.id
                      }),
                  (v = null));
            let S = (0, c.f)(e, p);
            null != S &&
                _.push({
                    type: u.ys_.MESSAGE,
                    content: S,
                    groupId: S.id
                });
            let Z = (null == N ? void 0 : N.type) === u.ys_.MESSAGE ? d : N;
            (0, a.J)(p, Z, e) && (n = e.id);
            let T = {
                type: e.type === u.uaV.THREAD_STARTER_MESSAGE ? u.ys_.THREAD_STARTER_MESSAGE : u.ys_.MESSAGE,
                content: e,
                groupId: n
            };
            n === e.id && (d = T);
            let { jumpSequenceId: A, jumpFlash: w, jumpTargetId: R } = h;
            w && e.id === R && null != A && (T.flashKey = A),
                h.jumpTargetId === e.id && (T.jumpTarget = !0),
                null != b &&
                    e.id === b.startId &&
                    b.count > 1 &&
                    _.push({
                        type: u.ys_.DIVIDER,
                        content: b.topic,
                        contentKey: b.startId,
                        isSummaryDivider: !0
                    }),
                null !== E ? (E.content.push(T), T.jumpTarget && (E.hasJumpTarget = !0)) : _.push(T),
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
        C && (0, s.P1)(p) && i.Z.trackExposure({ location: '416cc9_1' }),
        _
    );
}
