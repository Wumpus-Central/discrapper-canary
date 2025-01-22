n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(653041),
    n(47120);
var i = n(275726),
    l = n(135938),
    r = n(55935),
    a = n(709054),
    s = n(554838),
    o = n(493892),
    c = n(356647),
    d = n(981631);
function u(e) {
    let t,
        n,
        u,
        { channel: h, messages: p, oldestUnreadMessageId: m, treatSpam: f, summaries: g, selectedSummary: C } = e,
        x = [],
        v = !1,
        _ = null != m ? a.default.extractTimestamp(m) : null,
        I = null;
    return (
        p.forEach((e) => {
            var l, E, b, Z, N, S, T, j;
            if (null != g && g.length > 0) {
                let t = a.default.extractTimestamp(e.id);
                for (let e = 0; (l = e < (null == g ? void 0 : g.length)), l; e++) {
                    if (null == g[e]) continue;
                    let n = a.default.extractTimestamp(g[e].startId),
                        i = a.default.extractTimestamp(g[e].endId);
                    if (t >= n && t <= i) {
                        if (I === g[e].id) break;
                        x.push({
                            type: d.ys_.DIVIDER,
                            content: g[e].topic,
                            contentKey: g[e].id
                        }),
                            (I = g[e].id);
                        break;
                    }
                }
            }
            let A = (0, r.vc)(e.timestamp, 'LL');
            A !== t &&
                null == I &&
                (x.push({
                    type: d.ys_.DIVIDER,
                    content: A,
                    contentKey: A
                }),
                (t = A));
            let y = x[x.length - 1],
                P = null,
                M = (0, o.DQ)(e);
            v = v || M;
            let R = (function (e, t, n) {
                if (i.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return d.ys_.MESSAGE_GROUP_BLOCKED;
                else if (t.ignored) return d.ys_.MESSAGE_GROUP_IGNORED;
                else if ((0, o.P1)(e) && n) return d.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(h, e, M && f);
            if (null !== R) {
                let t, n;
                [P, y] =
                    ((E = x),
                    (b = e),
                    (Z = R),
                    (n = N = y),
                    null == N || N.type !== Z
                        ? ((t = {
                              type: Z,
                              content: [],
                              key: b.id
                          }),
                          E.push(t))
                        : (n = (t = N).content[t.content.length - 1]),
                    [t, n]);
            }
            if (m === e.id && null != _) {
                if (null != y && y.type === d.ys_.DIVIDER) (y.unreadId = e.id), (_ = null);
                else if (null !== P) {
                    (S = P),
                        (T = h),
                        (j = e).isFirstMessageInForumPost(T) ||
                            S.content.push({
                                type: d.ys_.DIVIDER,
                                unreadId: j.id
                            }),
                        (S.hasUnread = !0),
                        (_ = null);
                } else
                    !e.isFirstMessageInForumPost(h) &&
                        x.push({
                            type: d.ys_.DIVIDER,
                            unreadId: e.id
                        }),
                        (_ = null);
            } else
                null != _ &&
                    a.default.extractTimestamp(e.id) > _ &&
                    (!e.isFirstMessageInForumPost(h) &&
                        x.push({
                            type: d.ys_.DIVIDER,
                            unreadId: e.id
                        }),
                    (_ = null));
            let L = (0, c.f)(e, h);
            null != L &&
                x.push({
                    type: d.ys_.MESSAGE,
                    content: L,
                    groupId: L.id
                });
            let k = (null == y ? void 0 : y.type) === d.ys_.MESSAGE ? u : y;
            (0, s.J)(h, k, e) && (n = e.id);
            let O = {
                type: e.type === d.uaV.THREAD_STARTER_MESSAGE ? d.ys_.THREAD_STARTER_MESSAGE : d.ys_.MESSAGE,
                content: e,
                groupId: n
            };
            n === e.id && (u = O);
            let { jumpSequenceId: D, jumpFlash: w, jumpTargetId: B } = p;
            w && e.id === B && null != D && (O.flashKey = D),
                p.jumpTargetId === e.id && (O.jumpTarget = !0),
                null != C &&
                    e.id === C.startId &&
                    C.count > 1 &&
                    x.push({
                        type: d.ys_.DIVIDER,
                        content: C.topic,
                        contentKey: C.startId,
                        isSummaryDivider: !0
                    }),
                null !== P ? (P.content.push(O), O.jumpTarget && (P.hasJumpTarget = !0)) : x.push(O),
                e.isFirstMessageInForumPost(h) && x.push({ type: d.ys_.FORUM_POST_ACTION_BAR }),
                null != C &&
                    e.id === C.endId &&
                    C.count > 1 &&
                    x.push({
                        type: d.ys_.DIVIDER,
                        contentKey: C.endId,
                        isSummaryDivider: !0
                    });
        }),
        v && (0, o.P1)(h) && l.Z.trackExposure({ location: '416cc9_1' }),
        x
    );
}
