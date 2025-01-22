n.d(t, {
    Z: function () {
        return et;
    }
}),
    n(653041),
    n(47120),
    n(733860);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(904245),
    s = n(966390),
    o = n(902840),
    c = n(607070),
    d = n(367907),
    u = n(605984),
    h = n(453470),
    p = n(40330),
    m = n(600084),
    f = n(62764),
    g = n(79712),
    C = n(736052),
    x = n(359110),
    v = n(359119),
    _ = n(13279),
    I = n(248789),
    E = n(88101),
    b = n(576954),
    Z = n(765104),
    N = n(122707),
    S = n(779836),
    T = n(23750),
    j = n(496675),
    A = n(306680),
    y = n(944486),
    P = n(594174),
    M = n(55935),
    R = n(70956),
    L = n(709054),
    k = n(534091),
    O = n(900164),
    D = n(554838),
    w = n(481369),
    B = n(186877),
    U = n(294218),
    H = n(534469),
    G = n(993397),
    F = n(511010),
    V = n(524444),
    z = n(977391),
    W = n(921235),
    K = n(97352),
    Y = n(226027),
    q = n(959517),
    X = n(981631),
    J = n(134612),
    Q = n(388032);
function $(e) {
    return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: r, compact: a } = e;
    return (0, i.jsx)(U.Z, {
        compact: a,
        isGroupStart: r,
        channel: n,
        message: new T.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: X.uaV.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, i.jsx)(p.p, {
                    filename: t.name,
                    progress: null != t.progress ? t.progress : 0,
                    size: t.currentSize,
                    onCancelUpload: () => {
                        s.Z.cancel(t);
                    }
                })
            }
        })
    });
});
function et(e) {
    var t, n;
    let l,
        s,
        { channel: p, messages: U, unreadCount: et, showNewMessagesBar: en, messageDisplayCompact: ei, channelStream: el, uploads: er, scrollManager: ea, specs: es, filterAfterTimestamp: eo, showingQuarantineBanner: ec, hideSummaries: ed, jumpBarClassName: eu } = e,
        eh = P.default.getCurrentUser(),
        ep = () => ea.isInitialized() || U.ready,
        em = (0, B.$)(p),
        ef = U.length > 0 && (null === (t = U.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(p)),
        eg = (0, o.ts)(p),
        eC = (0, r.e7)([Z.Z], () => Z.Z.shouldShowTopicsBar() && !ed),
        ex = (0, E.P)(p.id),
        ev = (0, _.z)(p.id, J.zr),
        e_ = (0, u.k)(p.id),
        eI = (0, w.Z)(),
        eE = (function (e, t) {
            if (e.isDM() && null != t)
                return t.type === v.pj.STRANGER_DANGER
                    ? (0, i.jsx)(b.M, {
                          channelId: e.id,
                          warningId: t.id,
                          senderId: e.getRecipientId()
                      })
                    : t.type === v.pj.LIKELY_ATO
                      ? (0, i.jsx)(h.M, {
                            channelId: e.id,
                            warningId: t.id,
                            senderId: e.getRecipientId()
                        })
                      : (0, i.jsx)(I.Y, {
                            channelId: e.id,
                            warningId: t.id,
                            senderId: e.getRecipientId()
                        });
            return null;
        })(p, null !== (n = null != ex ? ex : ev) && void 0 !== n ? n : e_),
        eb = p.isForumPost() && !ef ? (0, i.jsx)(f.Z, { postId: p.id }) : null,
        eZ = (0, C.Z)(p.id);
    (0, K.Z)();
    let eN = null,
        eS = [],
        eT = el.map((e, t) => {
            if (e.type === X.ys_.DIVIDER) {
                var n, l;
                let r = null != e.unreadId;
                return null != eo
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(S.Z, {
                            index: t,
                            item: e,
                            channel: p,
                            isBeforeGroup: null == e.content && $(el[t + 1])
                        })
                      : (0, i.jsx)(
                            F.Z,
                            {
                                isUnread: r,
                                isBeforeGroup: null == e.content && $(el[t + 1]),
                                id: r ? q.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null !== (l = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== l ? l : t)
                        );
            }
            if (e.type === X.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    f.Z,
                    {
                        parentChannelId: p.parent_id,
                        postId: p.id,
                        isLastItem: t + 1 === el.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(p.id)
                );
            if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_IGNORED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? Q.t['+FcYMz'] : e.type === X.ys_.MESSAGE_GROUP_IGNORED ? Q.t.VFWjc3 : Q.t.xfkfTE),
                    (0, i.jsx)(
                        G.Z,
                        {
                            unreadId: q.j1,
                            messages: e,
                            channel: p,
                            compact: ei,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != eo && eo > e.content.timestamp.getTime() * R.Z.Millis.SECOND) return;
            let r = j.Z.can(X.Plq.CREATE_INSTANT_INVITE, p);
            if ((0, O.Z)(e.content, r)) return;
            e.type === X.ys_.MESSAGE && null == eN && (eN = e);
            let a = e.groupId === (null == eN ? void 0 : eN.groupId) ? eN.content.id : e.groupId,
                s = e.type === X.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
            return (0, i.jsx)(
                s,
                {
                    compact: ei,
                    channel: p,
                    message: e.content,
                    groupId: a,
                    flashKey: e.flashKey,
                    id: (0, k.p)(p.id, e.content.id),
                    isLastItem: t >= el.length - 1,
                    renderContentOnly: eZ
                },
                e.content.id
            );
        });
    eS.push(...eT);
    let ej = el[el.length - 1];
    if (
        (null != eh &&
            er.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, D.J)(
                        p,
                        ej,
                        new T.ZP({
                            type: X.uaV.DEFAULT,
                            author: eh
                        })
                    );
                eS.push(
                    (0, i.jsx)(
                        ee,
                        {
                            file: e,
                            channel: p,
                            user: eh,
                            isGroupStart: n,
                            compact: ei
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        U.hasMoreBefore && null == eo)
    ) {
        U.length > 0 &&
            eS.unshift(
                (0, i.jsx)(
                    'div',
                    {
                        style: {
                            height: q.D4,
                            flex: '0 0 auto'
                        }
                    },
                    'buffer'
                )
            );
        let { useReducedMotion: e } = c.Z;
        ((e && ep()) || !e) &&
            eS.unshift(
                (0, i.jsx)(
                    z.ZP,
                    {
                        compact: ei,
                        ...es
                    },
                    'has-more'
                )
            );
    }
    if (
        ((!U.hasMoreBefore || null != eo) &&
            eS.unshift(
                (0, i.jsx)(
                    m.Z,
                    {
                        channel: p,
                        showingBanner: ec
                    },
                    'empty-message'
                )
            ),
        U.hasMoreAfter &&
            eS.push(
                (0, i.jsx)(
                    z.ZP,
                    {
                        compact: ei,
                        ...es
                    },
                    'has-more-after'
                )
            ),
        !ec && em && ep() && eS.push((0, i.jsx)(W.Z, { channel: p })),
        et > 0 && en && ep())
    ) {
        let e, t;
        let n = A.ZP.getOldestUnreadTimestamp(p.id),
            r = 0 !== n ? n : L.default.extractTimestamp(p.id),
            a = (0, M.KC)(new Date(), new Date(r));
        if ((A.ZP.isEstimated(p.id) ? ((e = a ? Q.t.wvtbbG : Q.t.tHqbtr), (t = Q.t.vaPWFR)) : ((e = a ? Q.t.BctFHx : Q.t['3wXb9P']), (t = Q.t['4H8ldH'])), eg && (0, o.tW)(p) && eI.includes(Y.E.SUMMARIES))) {
            let n = A.ZP.ackMessageId(p.id),
                a = (0, N.q)(p.id, A.ZP.getOldestUnreadMessageId(p.id));
            if (
                ((0, d.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: et,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: eC,
                    summaries_enabled_for_channel: (0, o.Lp)(p)
                }),
                (0, o.Lp)(p))
            ) {
                let n = eC
                    ? Q.intl.format(t, { count: et })
                    : Q.intl.format(e, {
                          count: et,
                          timestamp: r
                      });
                if (eC) {
                    let e =
                        a > 0
                            ? (0, i.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      textTransform: 'none',
                                      alignItems: 'center',
                                      position: 'absolute',
                                      left: '40%'
                                  },
                                  children: [
                                      Q.intl.format(t, { count: et }),
                                      (0, i.jsx)(g.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8
                                          },
                                          height: 4,
                                          width: 4
                                      }),
                                      Q.intl.format(Q.t.CBftDQ, { count: a })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  style: {
                                      display: 'flex',
                                      textTransform: 'none',
                                      alignItems: 'center',
                                      position: 'absolute',
                                      left: '45%'
                                  },
                                  children: n
                              });
                    l = (0, i.jsx)(V.G5, {
                        scrollManager: ea,
                        content: e,
                        channel: p
                    });
                } else {
                    let e = (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children:
                            a > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          Q.intl.format(t, { count: et }),
                                          (0, i.jsx)(g.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8
                                              },
                                              height: 4,
                                              width: 4
                                          }),
                                          Q.intl.format(Q.t.CBftDQ, { count: a })
                                      ]
                                  })
                                : (0, i.jsx)(i.Fragment, { children: n })
                    });
                    l = (0, i.jsx)(V.LE, {
                        content: e,
                        channelId: p.id
                    });
                }
            }
        } else
            eI.includes(Y.E.NEW_MESSAGES) &&
                (l = (0, i.jsx)(V.LE, {
                    content: Q.intl.format(e, {
                        count: et,
                        timestamp: r
                    }),
                    channelId: p.id
                }));
    }
    if (
        (null == l &&
            (0, o.Lp)(p) &&
            eC &&
            eI.includes(Y.E.SUMMARIES) &&
            (l = (0, i.jsx)(V.BO, {
                channel: p,
                scrollManager: ea
            })),
        U.error)
    )
        s = (0, i.jsx)(V.Rp, {
            loading: U.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = p.id),
                    void a.Z.fetchMessages({
                        channelId: e,
                        limit: X.AQB,
                        truncate: !0
                    })
                );
            },
            className: eu
        });
    else if (U.hasMoreAfter && ep()) {
        let { jumpReturnTargetId: e } = U;
        s =
            U.loadingMore && U.jumpedToPresent
                ? (0, i.jsx)(V.DR, { className: eu })
                : null != e
                  ? (0, i.jsx)(V.DR, {
                        type: V.A7.REPLY,
                        onClick: () => {
                            var t, n;
                            return (
                                (t = p),
                                (n = e),
                                void a.Z.jumpToMessage({
                                    channelId: t.id,
                                    messageId: n,
                                    flash: !0
                                })
                            );
                        },
                        className: eu
                    })
                  : (0, i.jsx)(V.DR, {
                        onClick: () =>
                            (function (e) {
                                a.Z.jumpToPresent(e.id, X.AQB);
                                let t = y.Z.getChannelId();
                                e.id === t && (0, x.Kh)(e.id);
                            })(p),
                        className: eu
                    });
    }
    return {
        channelStreamMarkup: eS,
        newMessagesBar: l,
        jumpToPresentBar: s,
        forumPostActionBar: eb,
        safetyWarningBanner: eE
    };
}
