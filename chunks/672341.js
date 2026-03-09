n.d(t, { A: () => et }), n(321073), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(843472),
    o = n(432371),
    c = n(775602),
    d = n(58149),
    u = n(486227),
    h = n(454148),
    m = n(718468),
    A = n(816144),
    g = n(928764),
    p = n(640708),
    f = n(265869),
    _ = n(715757),
    E = n(378570),
    x = n(349435),
    C = n(452082),
    S = n(357179),
    I = n(74114),
    T = n(221059),
    N = n(513272),
    y = n(881020),
    b = n(637384),
    v = n(383233),
    j = n(222823),
    R = n(309010),
    M = n(287809),
    D = n(405269),
    O = n(927813),
    L = n(661191),
    P = n(662433),
    w = n(375901),
    k = n(857069),
    U = n(675171),
    G = n(806621),
    F = n(636922),
    H = n(371741),
    B = n(66149),
    V = n(922529),
    K = n(652176),
    W = n(540385),
    z = n(613907),
    Y = n(829444),
    q = n(626360),
    J = n(381941),
    $ = n(652215),
    Z = n(327337),
    X = n(985018);
function Q(e) {
    return null != e && e.type === $.TZK.MESSAGE && e.content.id === e.groupId;
}
let ee = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: s, compact: a } = e;
    return (0, i.jsx)(F.A, {
        compact: a,
        isGroupStart: s,
        channel: n,
        message: new v.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: $.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, i.jsx)(m.e, { channelId: n.id, file: t }),
            },
        }),
    });
});
function et(e) {
    let t,
        n,
        {
            channel: l,
            messages: m,
            unreadCount: F,
            showNewMessagesBar: et,
            messageDisplayCompact: en,
            channelStream: ei,
            uploads: el,
            scrollManager: es,
            specs: ea,
            filterAfterTimestamp: er,
            showingQuarantineBanner: eo,
            hideSummaries: ec,
            jumpBarClassName: ed,
        } = e,
        eu = M.default.getCurrentUser(),
        eh = () => es.isInitialized() || m.ready,
        em = (0, G.r)(l),
        eA = m.length > 0 && m.first()?.isFirstMessageInForumPost(l),
        eg = (0, o.cI)(l),
        ep = (0, s.bG)([N.A], () => N.A.shouldShowTopicsBar() && !ec),
        ef = (0, I.l)(l.id),
        e_ = (0, C.j)(l.id, Z.Rx),
        eE = (0, u.E)(l.id),
        ex = (0, U.A)(),
        eC = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === x._j.STRANGER_DANGER)
                    return (0, i.jsx)(T.e, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                else if (t.type === x._j.LIKELY_ATO)
                    return (0, i.jsx)(h.L, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                else return (0, i.jsx)(S._, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
            return null;
        })(l, ef ?? e_ ?? eE),
        eS = l.isForumPost() && !eA ? (0, i.jsx)(g.A, { postId: l.id }) : null,
        eI = (0, f.A)(l.id),
        eT = (0, _.W1)(l);
    (0, Y.A)();
    let eN = null,
        ey = [],
        eb = ei.map((e, t) => {
            if (e.type === $.TZK.DIVIDER) {
                let n = null != e.unreadId;
                return null != er
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(b.A, {
                            index: t,
                            item: e,
                            channel: l,
                            isBeforeGroup: null == e.content && Q(ei[t + 1]),
                        })
                      : (0, i.jsx)(
                            V.A,
                            {
                                isUnread: n,
                                isBeforeGroup: null == e.content && Q(ei[t + 1]),
                                id: n ? J.q4 : void 0,
                                children: e.content,
                            },
                            `divider-${e.contentKey ?? e.unreadId ?? t}`,
                        );
            }
            if (e.type === $.TZK.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    g.A,
                    { parentChannelId: l.parent_id, postId: l.id, isLastItem: t + 1 === ei.length, isFirstMessage: !0 },
                    `forum-post-action-bar-${l.id}`,
                );
            if (
                e.type === $.TZK.MESSAGE_GROUP_BLOCKED ||
                e.type === $.TZK.MESSAGE_GROUP_IGNORED ||
                e.type === $.TZK.MESSAGE_GROUP_SPAMMER ||
                e.type === $.TZK.MESSAGE_GROUP_SUSPENDED_USER
            ) {
                let t,
                    n = !0;
                return (
                    e.type === $.TZK.MESSAGE_GROUP_BLOCKED
                        ? (t = X.t["+FcYM/"])
                        : e.type === $.TZK.MESSAGE_GROUP_IGNORED
                          ? (t = X.t["VFWjc+"])
                          : e.type === $.TZK.MESSAGE_GROUP_SUSPENDED_USER
                            ? ((t = X.t.rHRovo), (n = !1))
                            : (t = X.t.xfkfTK),
                    (0, i.jsx)(
                        B.A,
                        { unreadId: J.q4, messages: e, channel: l, compact: en, collapsedReason: t, canUncollapse: n },
                        e.key,
                    )
                );
            }
            if (null != er && er > e.content.timestamp.getTime() * O.A.Millis.SECOND) return;
            e.type === $.TZK.MESSAGE && null == eN && (eN = e);
            let n = e.groupId === eN?.groupId ? eN.content.id : e.groupId,
                s = eT && e.content.isFirstMessageInForumPost(l),
                a = e.type === $.TZK.THREAD_STARTER_MESSAGE ? H.VO : H.Ay;
            return (0, i.jsx)(
                a,
                {
                    compact: en && !s,
                    channel: l,
                    message: e.content,
                    groupId: n,
                    flashKey: e.flashKey,
                    id: (0, w.j)(l.id, e.content.id),
                    isLastItem: t >= ei.length - 1,
                    renderContentOnly: eI || s,
                },
                e.content.id,
            );
        });
    ey.push(...eb);
    let ev = ei[ei.length - 1];
    if (
        (null != eu &&
            el.forEach((e, t) => {
                let n = 0 === t && (0, k.l)(l, ev, new v.Ay({ type: $.lAJ.DEFAULT, author: eu }));
                ey.push(
                    (0, i.jsx)(ee, { file: e, channel: l, user: eu, isGroupStart: n, compact: en }, `upload-${e.id}`),
                );
            }),
        m.hasMoreBefore && null == er)
    ) {
        m.length > 0 && ey.unshift((0, i.jsx)("div", { style: { height: J.N0, flex: "0 0 auto" } }, "buffer"));
        let { useReducedMotion: e } = c.A;
        ((e && eh()) || !e) && ey.unshift((0, i.jsx)(W.Ay, { compact: en, ...ea }, "has-more"));
    }
    if (
        ((m.hasMoreBefore && null == er) ||
            ey.unshift((0, i.jsx)(A.A, { channel: l, showingBanner: eo }, "empty-message")),
        m.hasMoreAfter && ey.push((0, i.jsx)(W.Ay, { compact: en, ...ea }, "has-more-after")),
        !eo && em && eh() && ey.push((0, i.jsx)(z.A, { channel: l })),
        F > 0 && et && eh())
    ) {
        let e,
            n,
            s = j.Ay.getOldestUnreadTimestamp(l.id),
            r = 0 !== s ? s : L.default.extractTimestamp(l.id),
            c = (0, D.ro)(new Date(), new Date(r));
        if (
            (j.Ay.isEstimated(l.id)
                ? ((e = c ? X.t.wvtbbG : X.t.tHqbtg), (n = X.t.vaPWFe))
                : ((e = c ? X.t["BctFH/"] : X.t["3wXb9P"]), (n = X.t["4H8ldG"])),
            eg && (0, o.Kc)(l) && ex.includes(q.i.SUMMARIES))
        ) {
            let s = j.Ay.ackMessageId(l.id),
                c = (0, y.L)(l.id, j.Ay.getOldestUnreadMessageId(l.id));
            if (
                ((0, d.zV)($.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: c,
                    num_unread_messages: F,
                    last_ack_message_id: s,
                    summaries_enabled_by_user: ep,
                    summaries_enabled_for_channel: (0, o.pk)(l),
                }),
                (0, o.pk)(l))
            ) {
                let s = ep ? X.intl.format(n, { count: F }) : X.intl.format(e, { count: F, timestamp: r });
                if (ep) {
                    let e =
                        c > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: X.intl.format(n, { count: F }),
                                      }),
                                      (0, i.jsx)(p.A, {
                                          style: { paddingLeft: 8, paddingRight: 8 },
                                          height: 4,
                                          width: 4,
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: X.intl.format(X.t.CBftDc, { count: c }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "currentColor", children: s });
                    t = (0, i.jsx)(K.OZ, { scrollManager: es, content: e, channel: l });
                } else {
                    let e = (0, i.jsx)("div", {
                        style: { display: "flex", textTransform: "none", alignItems: "center" },
                        children:
                            c > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: X.intl.format(n, { count: F }),
                                          }),
                                          (0, i.jsx)(p.A, {
                                              style: { paddingLeft: 8, paddingRight: 8 },
                                              height: 4,
                                              width: 4,
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: X.intl.format(X.t.CBftDc, { count: c }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "currentColor", children: s }),
                    });
                    t = (0, i.jsx)(K.GN, { content: e, channelId: l.id });
                }
            }
        } else
            ex.includes(q.i.NEW_MESSAGES) &&
                (t = (0, i.jsx)(K.GN, { content: X.intl.format(e, { count: F, timestamp: r }), channelId: l.id }));
    }
    if (
        (null == t &&
            (0, o.pk)(l) &&
            ep &&
            ex.includes(q.i.SUMMARIES) &&
            (t = (0, i.jsx)(K.UK, { channel: l, scrollManager: es })),
        m.error)
    )
        n = (0, i.jsx)(K.Ez, {
            loading: m.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = l.id),
                    void r.A.fetchMessages({ channelId: e, limit: (0, P.h)("renderStream.reload"), truncate: !0 })
                );
            },
            className: ed,
        });
    else if (m.hasMoreAfter && eh()) {
        let { jumpReturnTargetId: e } = m;
        n =
            m.loadingMore && m.jumpedToPresent
                ? (0, i.jsx)(K.Ab, { className: ed })
                : null != e
                  ? (0, i.jsx)(K.Ab, {
                        type: K.ks.REPLY,
                        onClick: () => {
                            r.A.jumpToMessage({ channelId: l.id, messageId: e, flash: !0 });
                        },
                        className: ed,
                    })
                  : (0, i.jsx)(K.Ab, {
                        onClick: () => {
                            let e;
                            return (
                                r.A.jumpToPresent(l.id, (0, P.h)("renderStream.jumpToPresent")),
                                (e = R.A.getChannelId()),
                                void (l.id === e && (0, E.iN)(l.id))
                            );
                        },
                        className: ed,
                    });
    }
    return {
        channelStreamMarkup: ey,
        newMessagesBar: t,
        jumpToPresentBar: n,
        forumPostActionBar: eS,
        safetyWarningBanner: eC,
    };
}
