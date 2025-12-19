n.d(t, { Z: () => d }), n(539854), n(388685);
var i = n(275726),
    r = n(135938),
    l = n(55935),
    a = n(709054),
    o = n(554838),
    s = n(493892),
    c = n(356647),
    u = n(981631);
function d(e) {
    let t,
        n,
        d,
        { channel: p, messages: f, oldestUnreadMessageId: h, treatSpam: m, summaries: g, selectedSummary: b } = e,
        y = [],
        C = !1,
        v = null != h ? a.default.extractTimestamp(h) : null,
        x = null;
    return (
        f.forEach((e) => {
            var r, O, E;
            let j, S;
            if (null != g && g.length > 0) {
                let t = a.default.extractTimestamp(e.id);
                for (let e = 0; (r = e < (null == g ? void 0 : g.length)), r; e++) {
                    if (null == g[e]) continue;
                    let n = a.default.extractTimestamp(g[e].startId),
                        i = a.default.extractTimestamp(g[e].endId);
                    if (t >= n && t <= i) {
                        if (x === g[e].id) break;
                        y.push({
                            type: u.ys_.DIVIDER,
                            content: g[e].topic,
                            contentKey: g[e].id,
                        }),
                            (x = g[e].id);
                        break;
                    }
                }
            }
            let _ = (0, l.vc)(e.timestamp, "LL");
            _ !== t &&
                null == x &&
                (y.push({
                    type: u.ys_.DIVIDER,
                    content: _,
                    contentKey: _,
                }),
                (t = _));
            let P = y[y.length - 1],
                I = null,
                Z = (0, s.DQ)(e);
            C = C || Z;
            let T = (function (e, t, n) {
                if (i.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
                else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(p, e, Z && m);
            (null !== T &&
                ([I, P] =
                    ((S = O = P),
                    null == O || O.type !== T
                        ? ((j = {
                              type: T,
                              content: [],
                              key: e.id,
                          }),
                          y.push(j))
                        : (S = (j = O).content[j.content.length - 1]),
                    [j, S])),
            h === e.id && null != v)
                ? (null != P && P.type === u.ys_.DIVIDER
                      ? (P.unreadId = e.id)
                      : null !== I
                        ? ((E = I),
                          e.isFirstMessageInForumPost(p) ||
                              E.content.push({
                                  type: u.ys_.DIVIDER,
                                  unreadId: e.id,
                              }),
                          (E.hasUnread = !0))
                        : e.isFirstMessageInForumPost(p) ||
                          y.push({
                              type: u.ys_.DIVIDER,
                              unreadId: e.id,
                          }),
                  (v = null))
                : null != v &&
                  a.default.extractTimestamp(e.id) > v &&
                  (e.isFirstMessageInForumPost(p) ||
                      y.push({
                          type: u.ys_.DIVIDER,
                          unreadId: e.id,
                      }),
                  (v = null));
            let N = (0, c.f)(e, p);
            null != N &&
                "before" === N.position &&
                y.push({
                    type: u.ys_.MESSAGE,
                    content: N.message,
                    groupId: N.message.id,
                });
            let A = (null == P ? void 0 : P.type) === u.ys_.MESSAGE ? d : P;
            (0, o.J)(p, A, e) && (n = e.id);
            let w = {
                type: e.type === u.uaV.THREAD_STARTER_MESSAGE ? u.ys_.THREAD_STARTER_MESSAGE : u.ys_.MESSAGE,
                content: e,
                groupId: n,
            };
            n === e.id && (d = w);
            let { jumpSequenceId: M, jumpFlash: R, jumpTargetId: D } = f;
            R && e.id === D && null != M && (w.flashKey = M),
                f.jumpTargetId === e.id && (w.jumpTarget = !0),
                null != b &&
                    e.id === b.startId &&
                    b.count > 1 &&
                    y.push({
                        type: u.ys_.DIVIDER,
                        content: b.topic,
                        contentKey: b.startId,
                        isSummaryDivider: !0,
                    }),
                null !== I ? (I.content.push(w), w.jumpTarget && (I.hasJumpTarget = !0)) : y.push(w),
                e.isFirstMessageInForumPost(p) && y.push({ type: u.ys_.FORUM_POST_ACTION_BAR }),
                null != N &&
                    "after" === N.position &&
                    y.push({
                        type: u.ys_.MESSAGE,
                        content: N.message,
                        groupId: N.message.id,
                    }),
                null != b &&
                    e.id === b.endId &&
                    b.count > 1 &&
                    y.push({
                        type: u.ys_.DIVIDER,
                        contentKey: b.endId,
                        isSummaryDivider: !0,
                    });
        }),
        C && (0, s.P1)(p) && r.Z.trackExposure({ location: "416cc9_1" }),
        y
    );
}
