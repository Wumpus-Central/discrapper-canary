(n.d(t, { Z: () => eo }), n(539854), n(388685), n(290780));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(904245),
    l = n(966390),
    c = n(902840),
    u = n(607070),
    d = n(367907),
    f = n(605984),
    _ = n(453470),
    p = n(40330),
    h = n(600084),
    m = n(62764),
    g = n(79712),
    E = n(736052),
    b = n(216572),
    y = n(359110),
    O = n(359119),
    v = n(13279),
    I = n(248789),
    T = n(88101),
    S = n(576954),
    A = n(765104),
    N = n(122707),
    C = n(779836),
    w = n(23750),
    R = n(306680),
    P = n(944486),
    D = n(594174),
    L = n(55935),
    x = n(70956),
    k = n(709054),
    j = n(534091),
    M = n(554838),
    U = n(481369),
    G = n(186877),
    B = n(294218),
    Z = n(534469),
    F = n(993397),
    V = n(511010),
    H = n(524444),
    Y = n(977391),
    W = n(921235),
    K = n(97352),
    z = n(226027),
    q = n(959517),
    $ = n(981631),
    X = n(134612),
    Q = n(388032);
function J(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                J(e, t, n[t]);
            }));
    }
    return e;
}
function et(e) {
    return null != e && e.type === $.ys_.MESSAGE && e.content.id === e.groupId;
}
function en(e) {
    s.Z.jumpToPresent(e.id, $.AQB);
    let t = P.Z.getChannelId();
    e.id === t && (0, y.Kh)(e.id);
}
function er(e, t) {
    s.Z.jumpToMessage({
        channelId: e.id,
        messageId: t,
        flash: !0
    });
}
function ei(e) {
    s.Z.fetchMessages({
        channelId: e,
        limit: $.AQB,
        truncate: !0
    });
}
let ea = i.memo(function (e) {
    let { file: t, channel: n, user: i, isGroupStart: a, compact: o } = e;
    return (0, r.jsx)(B.Z, {
        compact: o,
        isGroupStart: a,
        channel: n,
        message: new w.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: $.uaV.DEFAULT,
            author: i,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, r.jsx)(p.p, {
                    filename: t.name,
                    progress: null != t.progress ? t.progress : 0,
                    size: t.currentSize,
                    onCancelUpload: () => {
                        l.Z.cancel(n.id, t);
                    }
                })
            }
        })
    });
});
function eo(e) {
    var t, n;
    let i,
        s,
        { channel: l, messages: _, unreadCount: p, showNewMessagesBar: y, messageDisplayCompact: O, channelStream: I, uploads: S, scrollManager: P, specs: B, filterAfterTimestamp: J, showingQuarantineBanner: eo, hideSummaries: el, jumpBarClassName: ec } = e,
        eu = D.default.getCurrentUser(),
        ed = () => P.isInitialized() || _.ready,
        ef = (0, G.$)(l),
        e_ = _.length > 0 && (null == (t = _.first()) ? void 0 : t.isFirstMessageInForumPost(l)),
        ep = (0, c.ts)(l),
        eh = (0, a.e7)([A.Z], () => A.Z.shouldShowTopicsBar() && !el),
        em = (0, T.P)(l.id),
        eg = (0, v.z)(l.id, X.zr),
        eE = (0, f.k)(l.id),
        eb = (0, U.Z)(),
        ey = es(l, null != (n = null != em ? em : eg) ? n : eE),
        eO = l.isForumPost() && !e_ ? (0, r.jsx)(m.Z, { postId: l.id }) : null,
        ev = (0, E.Z)(l.id),
        eI = (0, b.nw)(l);
    (0, K.Z)();
    let eT = null,
        eS = [],
        eA = I.map((e, t) => {
            if (e.type === $.ys_.DIVIDER) {
                var n, i;
                let a = null != e.unreadId;
                return null != J
                    ? null
                    : e.isSummaryDivider
                      ? (0, r.jsx)(C.Z, {
                            index: t,
                            item: e,
                            channel: l,
                            isBeforeGroup: null == e.content && et(I[t + 1])
                        })
                      : (0, r.jsx)(
                            V.Z,
                            {
                                isUnread: a,
                                isBeforeGroup: null == e.content && et(I[t + 1]),
                                id: a ? q.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t)
                        );
            }
            if (e.type === $.ys_.FORUM_POST_ACTION_BAR)
                return (0, r.jsx)(
                    m.Z,
                    {
                        parentChannelId: l.parent_id,
                        postId: l.id,
                        isLastItem: t + 1 === I.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(l.id)
                );
            if (e.type === $.ys_.MESSAGE_GROUP_BLOCKED || e.type === $.ys_.MESSAGE_GROUP_IGNORED || e.type === $.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === $.ys_.MESSAGE_GROUP_BLOCKED ? Q.t['+FcYMz'] : e.type === $.ys_.MESSAGE_GROUP_IGNORED ? Q.t.VFWjc3 : Q.t.xfkfTE),
                    (0, r.jsx)(
                        F.Z,
                        {
                            unreadId: q.j1,
                            messages: e,
                            channel: l,
                            compact: O,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != J && J > e.content.timestamp.getTime() * x.Z.Millis.SECOND) return;
            e.type === $.ys_.MESSAGE && null == eT && (eT = e);
            let a = e.groupId === (null == eT ? void 0 : eT.groupId) ? eT.content.id : e.groupId,
                o = eI && e.content.isFirstMessageInForumPost(l),
                s = e.type === $.ys_.THREAD_STARTER_MESSAGE ? Z.Ru : Z.ZP;
            return (0, r.jsx)(
                s,
                {
                    compact: O && !o,
                    channel: l,
                    message: e.content,
                    groupId: a,
                    flashKey: e.flashKey,
                    id: (0, j.p)(l.id, e.content.id),
                    isLastItem: t >= I.length - 1,
                    renderContentOnly: ev || o
                },
                e.content.id
            );
        });
    eS.push(...eA);
    let eN = I[I.length - 1];
    if (
        (null != eu &&
            S.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, M.J)(
                        l,
                        eN,
                        new w.ZP({
                            type: $.uaV.DEFAULT,
                            author: eu
                        })
                    );
                eS.push(
                    (0, r.jsx)(
                        ea,
                        {
                            file: e,
                            channel: l,
                            user: eu,
                            isGroupStart: n,
                            compact: O
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        _.hasMoreBefore && null == J)
    ) {
        _.length > 0 &&
            eS.unshift(
                (0, r.jsx)(
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
        let { useReducedMotion: e } = u.Z;
        ((e && ed()) || !e) && eS.unshift((0, r.jsx)(Y.ZP, ee({ compact: O }, B), 'has-more'));
    }
    if (
        ((_.hasMoreBefore && null == J) ||
            eS.unshift(
                (0, r.jsx)(
                    h.Z,
                    {
                        channel: l,
                        showingBanner: eo
                    },
                    'empty-message'
                )
            ),
        _.hasMoreAfter && eS.push((0, r.jsx)(Y.ZP, ee({ compact: O }, B), 'has-more-after')),
        !eo && ef && ed() && eS.push((0, r.jsx)(W.Z, { channel: l })),
        p > 0 && y && ed())
    ) {
        let e,
            t,
            n = R.ZP.getOldestUnreadTimestamp(l.id),
            a = 0 !== n ? n : k.default.extractTimestamp(l.id),
            s = (0, L.KC)(new Date(), new Date(a));
        if ((R.ZP.isEstimated(l.id) ? ((e = s ? Q.t.wvtbbG : Q.t.tHqbtr), (t = Q.t.vaPWFR)) : ((e = s ? Q.t.BctFHx : Q.t['3wXb9P']), (t = Q.t['4H8ldH'])), ep && (0, c.tW)(l) && eb.includes(z.E.SUMMARIES))) {
            let n = R.ZP.ackMessageId(l.id),
                s = (0, N.q)(l.id, R.ZP.getOldestUnreadMessageId(l.id));
            if (
                ((0, d.yw)($.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: s,
                    num_unread_messages: p,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: eh,
                    summaries_enabled_for_channel: (0, c.Lp)(l)
                }),
                (0, c.Lp)(l))
            ) {
                let n = eh
                    ? Q.intl.format(t, { count: p })
                    : Q.intl.format(e, {
                          count: p,
                          timestamp: a
                      });
                if (eh) {
                    let e =
                        s > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: Q.intl.format(t, { count: p })
                                      }),
                                      (0, r.jsx)(g.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8
                                          },
                                          height: 4,
                                          width: 4
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: Q.intl.format(Q.t.CBftDQ, { count: s })
                                      })
                                  ]
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'currentColor',
                                  children: n
                              });
                    i = (0, r.jsx)(H.G5, {
                        scrollManager: P,
                        content: e,
                        channel: l
                    });
                } else {
                    let e = (0, r.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children:
                            s > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: Q.intl.format(t, { count: p })
                                          }),
                                          (0, r.jsx)(g.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8
                                              },
                                              height: 4,
                                              width: 4
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: Q.intl.format(Q.t.CBftDQ, { count: s })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                    });
                    i = (0, r.jsx)(H.LE, {
                        content: e,
                        channelId: l.id
                    });
                }
            }
        } else
            eb.includes(z.E.NEW_MESSAGES) &&
                (i = (0, r.jsx)(H.LE, {
                    content: Q.intl.format(e, {
                        count: p,
                        timestamp: a
                    }),
                    channelId: l.id
                }));
    }
    if (
        (null == i &&
            (0, c.Lp)(l) &&
            eh &&
            eb.includes(z.E.SUMMARIES) &&
            (i = (0, r.jsx)(H.BO, {
                channel: l,
                scrollManager: P
            })),
        _.error)
    )
        s = (0, r.jsx)(H.Rp, {
            loading: _.loadingMore,
            onClick: () => ei(l.id),
            className: ec
        });
    else if (_.hasMoreAfter && ed()) {
        let { jumpReturnTargetId: e } = _;
        s =
            _.loadingMore && _.jumpedToPresent
                ? (0, r.jsx)(H.DR, { className: ec })
                : null != e
                  ? (0, r.jsx)(H.DR, {
                        type: H.A7.REPLY,
                        onClick: () => er(l, e),
                        className: ec
                    })
                  : (0, r.jsx)(H.DR, {
                        onClick: () => en(l),
                        className: ec
                    });
    }
    return {
        channelStreamMarkup: eS,
        newMessagesBar: i,
        jumpToPresentBar: s,
        forumPostActionBar: eO,
        safetyWarningBanner: ey
    };
}
function es(e, t) {
    if (e.isDM() && null != t)
        if (t.type === O.pj.STRANGER_DANGER)
            return (0, r.jsx)(S.M, {
                channelId: e.id,
                warningId: t.id,
                senderId: e.getRecipientId()
            });
        else if (t.type === O.pj.LIKELY_ATO)
            return (0, r.jsx)(_.M, {
                channelId: e.id,
                warningId: t.id,
                senderId: e.getRecipientId()
            });
        else
            return (0, r.jsx)(I.Y, {
                channelId: e.id,
                warningId: t.id,
                senderId: e.getRecipientId()
            });
    return null;
}
