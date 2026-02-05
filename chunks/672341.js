n.d(t, { A: () => ee }), n(321073), n(667532);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(843472),
    o = n(432371),
    c = n(775602),
    d = n(58149),
    u = n(486227),
    h = n(454148),
    m = n(718468),
    A = n(816144),
    p = n(928764),
    g = n(640708),
    f = n(265869),
    _ = n(715757),
    E = n(378570),
    C = n(349435),
    x = n(452082),
    S = n(357179),
    T = n(74114),
    I = n(221059),
    N = n(513272),
    v = n(881020),
    y = n(637384),
    b = n(383233),
    R = n(222823),
    j = n(309010),
    M = n(287809),
    D = n(405269),
    O = n(927813),
    L = n(661191),
    P = n(375901),
    w = n(857069),
    k = n(675171),
    U = n(806621),
    G = n(636922),
    F = n(371741),
    H = n(66149),
    B = n(922529),
    V = n(652176),
    W = n(540385),
    K = n(613907),
    z = n(829444),
    Y = n(626360),
    q = n(381941),
    J = n(652215),
    $ = n(327337),
    Z = n(985018);
function X(e) {
    return null != e && e.type === J.TZK.MESSAGE && e.content.id === e.groupId;
}
let Q = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: a, compact: s } = e;
    return (0, i.jsx)(G.A, {
        compact: s,
        isGroupStart: a,
        channel: n,
        message: new b.Ay({
            id: t.id,
            key: `pending-upload-${t.id}`,
            type: J.lAJ.DEFAULT,
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
function ee(e) {
    let t,
        n,
        {
            channel: l,
            messages: m,
            unreadCount: G,
            showNewMessagesBar: ee,
            messageDisplayCompact: et,
            channelStream: en,
            uploads: ei,
            scrollManager: el,
            specs: ea,
            filterAfterTimestamp: es,
            showingQuarantineBanner: er,
            hideSummaries: eo,
            jumpBarClassName: ec,
        } = e,
        ed = M.default.getCurrentUser(),
        eu = () => el.isInitialized() || m.ready,
        eh = (0, U.r)(l),
        em = m.length > 0 && m.first()?.isFirstMessageInForumPost(l),
        eA = (0, o.cI)(l),
        ep = (0, a.bG)([N.A], () => N.A.shouldShowTopicsBar() && !eo),
        eg = (0, T.l)(l.id),
        ef = (0, x.j)(l.id, $.Rx),
        e_ = (0, u.E)(l.id),
        eE = (0, k.A)(),
        eC = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === C._j.STRANGER_DANGER)
                    return (0, i.jsx)(I.e, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                else if (t.type === C._j.LIKELY_ATO)
                    return (0, i.jsx)(h.L, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
                else return (0, i.jsx)(S._, { channelId: e.id, warningId: t.id, senderId: e.getRecipientId() });
            return null;
        })(l, eg ?? ef ?? e_),
        ex = l.isForumPost() && !em ? (0, i.jsx)(p.A, { postId: l.id }) : null,
        eS = (0, f.A)(l.id),
        eT = (0, _.W1)(l);
    (0, z.A)();
    let eI = null,
        eN = [],
        ev = en.map((e, t) => {
            if (e.type === J.TZK.DIVIDER) {
                let n = null != e.unreadId;
                return null != es
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(y.A, {
                            index: t,
                            item: e,
                            channel: l,
                            isBeforeGroup: null == e.content && X(en[t + 1]),
                        })
                      : (0, i.jsx)(
                            B.A,
                            {
                                isUnread: n,
                                isBeforeGroup: null == e.content && X(en[t + 1]),
                                id: n ? q.q4 : void 0,
                                children: e.content,
                            },
                            `divider-${e.contentKey ?? e.unreadId ?? t}`,
                        );
            }
            if (e.type === J.TZK.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    p.A,
                    { parentChannelId: l.parent_id, postId: l.id, isLastItem: t + 1 === en.length, isFirstMessage: !0 },
                    `forum-post-action-bar-${l.id}`,
                );
            if (
                e.type === J.TZK.MESSAGE_GROUP_BLOCKED ||
                e.type === J.TZK.MESSAGE_GROUP_IGNORED ||
                e.type === J.TZK.MESSAGE_GROUP_SPAMMER ||
                e.type === J.TZK.MESSAGE_GROUP_SUSPENDED_USER
            ) {
                let t,
                    n = !0;
                return (
                    e.type === J.TZK.MESSAGE_GROUP_BLOCKED
                        ? (t = Z.t["+FcYM/"])
                        : e.type === J.TZK.MESSAGE_GROUP_IGNORED
                          ? (t = Z.t["VFWjc+"])
                          : e.type === J.TZK.MESSAGE_GROUP_SUSPENDED_USER
                            ? ((t = Z.t["gLp+Wj"]), (n = !1))
                            : (t = Z.t.xfkfTK),
                    (0, i.jsx)(
                        H.A,
                        { unreadId: q.q4, messages: e, channel: l, compact: et, collapsedReason: t, canUncollapse: n },
                        e.key,
                    )
                );
            }
            if (null != es && es > e.content.timestamp.getTime() * O.A.Millis.SECOND) return;
            e.type === J.TZK.MESSAGE && null == eI && (eI = e);
            let n = e.groupId === eI?.groupId ? eI.content.id : e.groupId,
                a = eT && e.content.isFirstMessageInForumPost(l),
                s = e.type === J.TZK.THREAD_STARTER_MESSAGE ? F.VO : F.Ay;
            return (0, i.jsx)(
                s,
                {
                    compact: et && !a,
                    channel: l,
                    message: e.content,
                    groupId: n,
                    flashKey: e.flashKey,
                    id: (0, P.j)(l.id, e.content.id),
                    isLastItem: t >= en.length - 1,
                    renderContentOnly: eS || a,
                },
                e.content.id,
            );
        });
    eN.push(...ev);
    let ey = en[en.length - 1];
    if (
        (null != ed &&
            ei.forEach((e, t) => {
                let n = 0 === t && (0, w.l)(l, ey, new b.Ay({ type: J.lAJ.DEFAULT, author: ed }));
                eN.push(
                    (0, i.jsx)(Q, { file: e, channel: l, user: ed, isGroupStart: n, compact: et }, `upload-${e.id}`),
                );
            }),
        m.hasMoreBefore && null == es)
    ) {
        m.length > 0 && eN.unshift((0, i.jsx)("div", { style: { height: q.N0, flex: "0 0 auto" } }, "buffer"));
        let { useReducedMotion: e } = c.A;
        ((e && eu()) || !e) && eN.unshift((0, i.jsx)(W.Ay, { compact: et, ...ea }, "has-more"));
    }
    if (
        ((m.hasMoreBefore && null == es) ||
            eN.unshift((0, i.jsx)(A.A, { channel: l, showingBanner: er }, "empty-message")),
        m.hasMoreAfter && eN.push((0, i.jsx)(W.Ay, { compact: et, ...ea }, "has-more-after")),
        !er && eh && eu() && eN.push((0, i.jsx)(K.A, { channel: l })),
        G > 0 && ee && eu())
    ) {
        let e,
            n,
            a = R.Ay.getOldestUnreadTimestamp(l.id),
            r = 0 !== a ? a : L.default.extractTimestamp(l.id),
            c = (0, D.ro)(new Date(), new Date(r));
        if (
            (R.Ay.isEstimated(l.id)
                ? ((e = c ? Z.t.wvtbbG : Z.t.tHqbtg), (n = Z.t.vaPWFe))
                : ((e = c ? Z.t["BctFH/"] : Z.t["3wXb9P"]), (n = Z.t["4H8ldG"])),
            eA && (0, o.Kc)(l) && eE.includes(Y.i.SUMMARIES))
        ) {
            let a = R.Ay.ackMessageId(l.id),
                c = (0, v.L)(l.id, R.Ay.getOldestUnreadMessageId(l.id));
            if (
                ((0, d.zV)(J.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: c,
                    num_unread_messages: G,
                    last_ack_message_id: a,
                    summaries_enabled_by_user: ep,
                    summaries_enabled_for_channel: (0, o.pk)(l),
                }),
                (0, o.pk)(l))
            ) {
                let a = ep ? Z.intl.format(n, { count: G }) : Z.intl.format(e, { count: G, timestamp: r });
                if (ep) {
                    let e =
                        c > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: Z.intl.format(n, { count: G }),
                                      }),
                                      (0, i.jsx)(g.A, {
                                          style: { paddingLeft: 8, paddingRight: 8 },
                                          height: 4,
                                          width: 4,
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: Z.intl.format(Z.t.CBftDc, { count: c }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(s.Text, { variant: "text-sm/medium", color: "currentColor", children: a });
                    t = (0, i.jsx)(V.OZ, { scrollManager: el, content: e, channel: l });
                } else {
                    let e = (0, i.jsx)("div", {
                        style: { display: "flex", textTransform: "none", alignItems: "center" },
                        children:
                            c > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(s.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: Z.intl.format(n, { count: G }),
                                          }),
                                          (0, i.jsx)(g.A, {
                                              style: { paddingLeft: 8, paddingRight: 8 },
                                              height: 4,
                                              width: 4,
                                          }),
                                          (0, i.jsx)(s.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: Z.intl.format(Z.t.CBftDc, { count: c }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(s.Text, { variant: "text-sm/medium", color: "currentColor", children: a }),
                    });
                    t = (0, i.jsx)(V.GN, { content: e, channelId: l.id });
                }
            }
        } else
            eE.includes(Y.i.NEW_MESSAGES) &&
                (t = (0, i.jsx)(V.GN, { content: Z.intl.format(e, { count: G, timestamp: r }), channelId: l.id }));
    }
    if (
        (null == t &&
            (0, o.pk)(l) &&
            ep &&
            eE.includes(Y.i.SUMMARIES) &&
            (t = (0, i.jsx)(V.UK, { channel: l, scrollManager: el })),
        m.error)
    )
        n = (0, i.jsx)(V.Ez, {
            loading: m.loadingMore,
            onClick: () => {
                var e;
                return (e = l.id), void r.A.fetchMessages({ channelId: e, limit: J.EMb, truncate: !0 });
            },
            className: ec,
        });
    else if (m.hasMoreAfter && eu()) {
        let { jumpReturnTargetId: e } = m;
        n =
            m.loadingMore && m.jumpedToPresent
                ? (0, i.jsx)(V.Ab, { className: ec })
                : null != e
                  ? (0, i.jsx)(V.Ab, {
                        type: V.ks.REPLY,
                        onClick: () => {
                            r.A.jumpToMessage({ channelId: l.id, messageId: e, flash: !0 });
                        },
                        className: ec,
                    })
                  : (0, i.jsx)(V.Ab, {
                        onClick: () => {
                            let e;
                            return (
                                r.A.jumpToPresent(l.id, J.EMb),
                                (e = j.A.getChannelId()),
                                void (l.id === e && (0, E.iN)(l.id))
                            );
                        },
                        className: ec,
                    });
    }
    return {
        channelStreamMarkup: eN,
        newMessagesBar: t,
        jumpToPresentBar: n,
        forumPostActionBar: ex,
        safetyWarningBanner: eC,
    };
}
