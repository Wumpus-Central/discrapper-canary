n.d(t, { Z: () => d }), n(539854), n(388685);
var r = n(275726),
    i = n(135938),
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
        _ = [],
        y = !1,
        C = null != h ? a.default.extractTimestamp(h) : null,
        v = null;
    return (
        f.forEach((e) => {
            var i, O, x;
            let E, j;
            if (null != g && g.length > 0) {
                let t = a.default.extractTimestamp(e.id);
                for (let e = 0; (i = e < (null == g ? void 0 : g.length)), i; e++) {
                    if (null == g[e]) continue;
                    let n = a.default.extractTimestamp(g[e].startId),
                        r = a.default.extractTimestamp(g[e].endId);
                    if (t >= n && t <= r) {
                        if (v === g[e].id) break;
                        _.push({
                            type: u.ys_.DIVIDER,
                            content: g[e].topic,
                            contentKey: g[e].id,
                        }),
                            (v = g[e].id);
                        break;
                    }
                }
            }
            let S = (0, l.vc)(e.timestamp, "LL");
            S !== t &&
                null == v &&
                (_.push({
                    type: u.ys_.DIVIDER,
                    content: S,
                    contentKey: S,
                }),
                (t = S));
            let P = _[_.length - 1],
                I = null,
                Z = (0, s.DQ)(e);
            y = y || Z;
            let T = (function (e, t, n) {
                if (r.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
                else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(p, e, Z && m);
            (null !== T &&
                ([I, P] =
                    ((j = O = P),
                    null == O || O.type !== T
                        ? ((E = {
                              type: T,
                              content: [],
                              key: e.id,
                          }),
                          _.push(E))
                        : (j = (E = O).content[E.content.length - 1]),
                    [E, j])),
            h === e.id && null != C)
                ? (null != P && P.type === u.ys_.DIVIDER
                      ? (P.unreadId = e.id)
                      : null !== I
                        ? ((x = I),
                          e.isFirstMessageInForumPost(p) ||
                              x.content.push({
                                  type: u.ys_.DIVIDER,
                                  unreadId: e.id,
                              }),
                          (x.hasUnread = !0))
                        : e.isFirstMessageInForumPost(p) ||
                          _.push({
                              type: u.ys_.DIVIDER,
                              unreadId: e.id,
                          }),
                  (C = null))
                : null != C &&
                  a.default.extractTimestamp(e.id) > C &&
                  (e.isFirstMessageInForumPost(p) ||
                      _.push({
                          type: u.ys_.DIVIDER,
                          unreadId: e.id,
                      }),
                  (C = null));
            let N = (0, c.f)(e, p);
            null != N &&
                "before" === N.position &&
                _.push({
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
                    _.push({
                        type: u.ys_.DIVIDER,
                        content: b.topic,
                        contentKey: b.startId,
                        isSummaryDivider: !0,
                    }),
                null !== I ? (I.content.push(w), w.jumpTarget && (I.hasJumpTarget = !0)) : _.push(w),
                e.isFirstMessageInForumPost(p) && _.push({ type: u.ys_.FORUM_POST_ACTION_BAR }),
                null != N &&
                    "after" === N.position &&
                    _.push({
                        type: u.ys_.MESSAGE,
                        content: N.message,
                        groupId: N.message.id,
                    }),
                null != b &&
                    e.id === b.endId &&
                    b.count > 1 &&
                    _.push({
                        type: u.ys_.DIVIDER,
                        contentKey: b.endId,
                        isSummaryDivider: !0,
                    });
        }),
        y && (0, s.P1)(p) && i.Z.trackExposure({ location: "416cc9_1" }),
        _
    );
}
