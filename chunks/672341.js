n.d(t, { A: () => en }), n(321073), n(667532);
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
    A = n(655377),
    g = n(816144),
    p = n(928764),
    f = n(640708),
    _ = n(265869),
    E = n(715757),
    x = n(378570),
    C = n(349435),
    S = n(452082),
    I = n(357179),
    T = n(74114),
    v = n(221059),
    N = n(513272),
    y = n(881020),
    b = n(637384),
    j = n(383233),
    R = n(222823),
    M = n(309010),
    D = n(287809),
    O = n(405269),
    L = n(927813),
    P = n(661191),
    w = n(662433),
    k = n(375901),
    U = n(857069),
    G = n(675171),
    F = n(806621),
    H = n(636922),
    B = n(371741),
    V = n(66149),
    K = n(922529),
    W = n(652176),
    z = n(540385),
    Y = n(613907),
    q = n(829444),
    J = n(626360),
    $ = n(381941),
    Z = n(652215),
    X = n(327337),
    Q = n(985018);
function ee(e) {
    return null != e && e.type === Z.TZK.MESSAGE && e.content.id === e.groupId;
}
let et = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: s, compact: a } = e;
    return (0, i.jsx)(H.A, {
        compact: a,
        isGroupStart: s,
        channel: n,
        message: new j.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: Z.lAJ.DEFAULT,
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
function en(e) {
    let t,
        n,
        {
            channel: l,
            messages: m,
            unreadCount: H,
            showNewMessagesBar: en,
            messageDisplayCompact: ei,
            channelStream: el,
            uploads: es,
            scrollManager: ea,
            specs: er,
            filterAfterTimestamp: eo,
            showingQuarantineBanner: ec,
            hideSummaries: ed,
            jumpBarClassName: eu,
        } = e,
        eh = D.default.getCurrentUser(),
        em = () => ea.isInitialized() || m.ready,
        eA = (0, F.r)(l),
        eg = m.length > 0 && m.first()?.isFirstMessageInForumPost(l),
        ep = (0, o.cI)(l),
        ef = (0, s.bG)([N.A], () => N.A.shouldShowTopicsBar() && !ed),
        e_ = (0, T.l)(l.id),
        eE = (0, S.j)(l.id, X.Rx),
        ex = (0, u.E)(l.id),
        eC = (0, G.A)(),
        eS = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === C._j.STRANGER_DANGER)
                    return (0, i.jsx)(v.e, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                else if (t.type === C._j.LIKELY_ATO)
                    return (0, i.jsx)(h.L, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                else return (0, i.jsx)(I._, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
            return null;
        })(l, e_ ?? eE ?? ex),
        eI = l.isForumPost() && !eg ? (0, i.jsx)(p.A, { postId: l.id }) : null,
        eT = (0, _.A)(l.id),
        ev = (0, E.W1)(l);
    (0, q.A)();
    let eN = null,
        ey = [],
        eb = el.map((e, t) => {
            if (e.type === Z.TZK.DIVIDER) {
                let n = null != e.unreadId;
                return null != eo
                    ? null
                    : e.isConversationDivider
                      ? (0, i.jsx)(A.A, { index: t, item: e, channel: l }, `conv-divider-${e.contentKey ?? t}`)
                      : e.isSummaryDivider
                        ? (0, i.jsx)(b.A, {
                              index: t,
                              item: e,
                              channel: l,
                              isBeforeGroup: null == e.content && ee(el[t + 1]),
                          })
                        : (0, i.jsx)(
                              K.A,
                              {
                                  isUnread: n,
                                  isBeforeGroup: null == e.content && ee(el[t + 1]),
                                  id: n ? $.q4 : void 0,
                                  children: e.content,
                              },
                              `divider-${e.contentKey ?? e.unreadId ?? t}`,
                          );
            }
            if (e.type === Z.TZK.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    p.A,
                    { parentChannelId: l.parent_id, postId: l.id, isLastItem: t + 1 === el.length, isFirstMessage: !0 },
                    `forum-post-action-bar-${l.id}`,
                );
            if (
                e.type === Z.TZK.MESSAGE_GROUP_BLOCKED ||
                e.type === Z.TZK.MESSAGE_GROUP_IGNORED ||
                e.type === Z.TZK.MESSAGE_GROUP_SPAMMER ||
                e.type === Z.TZK.MESSAGE_GROUP_SUSPENDED_USER
            ) {
                let t,
                    n = !0;
                return (
                    e.type === Z.TZK.MESSAGE_GROUP_BLOCKED
                        ? (t = Q.t["+FcYM/"])
                        : e.type === Z.TZK.MESSAGE_GROUP_IGNORED
                          ? (t = Q.t["VFWjc+"])
                          : e.type === Z.TZK.MESSAGE_GROUP_SUSPENDED_USER
                            ? ((t = Q.t.rHRovo), (n = !1))
                            : (t = Q.t.xfkfTK),
                    (0, i.jsx)(
                        V.A,
                        { unreadId: $.q4, messages: e, channel: l, compact: ei, collapsedReason: t, canUncollapse: n },
                        e.key,
                    )
                );
            }
            if (null != eo && eo > e.content.timestamp.getTime() * L.A.Millis.SECOND) return;
            e.type === Z.TZK.MESSAGE && null == eN && (eN = e);
            let n = e.groupId === eN?.groupId ? eN.content.id : e.groupId,
                s = ev && e.content.isFirstMessageInForumPost(l),
                a = e.type === Z.TZK.THREAD_STARTER_MESSAGE ? B.VO : B.Ay;
            return (0, i.jsx)(
                a,
                {
                    compact: ei && !s,
                    channel: l,
                    message: e.content,
                    groupId: n,
                    flashKey: e.flashKey,
                    id: (0, k.j)(l.id, e.content.id),
                    isLastItem: t >= el.length - 1,
                    renderContentOnly: eT || s,
                },
                e.content.id,
            );
        });
    ey.push(...eb);
    let ej = el[el.length - 1];
    if (
        (null != eh &&
            es.forEach((e, t) => {
                let n = 0 === t && (0, U.l)(l, ej, new j.Ay({ type: Z.lAJ.DEFAULT, author: eh }));
                ey.push(
                    (0, i.jsx)(et, { file: e, channel: l, user: eh, isGroupStart: n, compact: ei }, `upload-${e.id}`),
                );
            }),
        m.hasMoreBefore && null == eo)
    ) {
        m.length > 0 && ey.unshift((0, i.jsx)("div", { style: { height: $.N0, flex: "0 0 auto" } }, "buffer"));
        let { useReducedMotion: e } = c.A;
        ((e && em()) || !e) && ey.unshift((0, i.jsx)(z.Ay, { compact: ei, ...er }, "has-more"));
    }
    if (
        ((m.hasMoreBefore && null == eo) ||
            ey.unshift((0, i.jsx)(g.A, { channel: l, showingBanner: ec }, "empty-message")),
        m.hasMoreAfter && ey.push((0, i.jsx)(z.Ay, { compact: ei, ...er }, "has-more-after")),
        !ec && eA && em() && ey.push((0, i.jsx)(Y.A, { channel: l })),
        H > 0 && en && em())
    ) {
        let e,
            n,
            s = R.Ay.getOldestUnreadTimestamp(l.id),
            r = 0 !== s ? s : P.default.extractTimestamp(l.id),
            c = (0, O.ro)(new Date(), new Date(r));
        if (
            (R.Ay.isEstimated(l.id)
                ? ((e = c ? Q.t.wvtbbG : Q.t.tHqbtg), (n = Q.t.vaPWFe))
                : ((e = c ? Q.t["BctFH/"] : Q.t["3wXb9P"]), (n = Q.t["4H8ldG"])),
            ep && (0, o.Kc)(l) && eC.includes(J.i.SUMMARIES))
        ) {
            let s = R.Ay.ackMessageId(l.id),
                c = (0, y.L)(l.id, R.Ay.getOldestUnreadMessageId(l.id));
            if (
                ((0, d.zV)(Z.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: c,
                    num_unread_messages: H,
                    last_ack_message_id: s,
                    summaries_enabled_by_user: ef,
                    summaries_enabled_for_channel: (0, o.pk)(l),
                }),
                (0, o.pk)(l))
            ) {
                let s = ef ? Q.intl.format(n, { count: H }) : Q.intl.format(e, { count: H, timestamp: r });
                if (ef) {
                    let e =
                        c > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: Q.intl.format(n, { count: H }),
                                      }),
                                      (0, i.jsx)(f.A, {
                                          style: { paddingLeft: 8, paddingRight: 8 },
                                          height: 4,
                                          width: 4,
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: Q.intl.format(Q.t.CBftDc, { count: c }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "currentColor", children: s });
                    t = (0, i.jsx)(W.OZ, { scrollManager: ea, content: e, channel: l });
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
                                              children: Q.intl.format(n, { count: H }),
                                          }),
                                          (0, i.jsx)(f.A, {
                                              style: { paddingLeft: 8, paddingRight: 8 },
                                              height: 4,
                                              width: 4,
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: Q.intl.format(Q.t.CBftDc, { count: c }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "currentColor", children: s }),
                    });
                    t = (0, i.jsx)(W.GN, { content: e, channelId: l.id });
                }
            }
        } else
            eC.includes(J.i.NEW_MESSAGES) &&
                (t = (0, i.jsx)(W.GN, { content: Q.intl.format(e, { count: H, timestamp: r }), channelId: l.id }));
    }
    if (
        (null == t &&
            (0, o.pk)(l) &&
            ef &&
            eC.includes(J.i.SUMMARIES) &&
            (t = (0, i.jsx)(W.UK, { channel: l, scrollManager: ea })),
        m.error)
    )
        n = (0, i.jsx)(W.Ez, {
            loading: m.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = l.id),
                    void r.A.fetchMessages({ channelId: e, limit: (0, w.h)("renderStream.reload"), truncate: !0 })
                );
            },
            className: eu,
        });
    else if (m.hasMoreAfter && em()) {
        let { jumpReturnTargetId: e } = m;
        n =
            m.loadingMore && m.jumpedToPresent
                ? (0, i.jsx)(W.Ab, { className: eu })
                : null != e
                  ? (0, i.jsx)(W.Ab, {
                        type: W.ks.REPLY,
                        onClick: () => {
                            r.A.jumpToMessage({ channelId: l.id, messageId: e, flash: !0 });
                        },
                        className: eu,
                    })
                  : (0, i.jsx)(W.Ab, {
                        onClick: () => {
                            let e;
                            return (
                                r.A.jumpToPresent(l.id, (0, w.h)("renderStream.jumpToPresent")),
                                (e = M.A.getChannelId()),
                                void (l.id === e && (0, x.iN)(l.id))
                            );
                        },
                        className: eu,
                    });
    }
    return {
        channelStreamMarkup: ey,
        newMessagesBar: t,
        jumpToPresentBar: n,
        forumPostActionBar: eI,
        safetyWarningBanner: eS,
    };
}
