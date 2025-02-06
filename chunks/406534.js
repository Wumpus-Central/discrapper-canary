n.d(t, { Z: () => en }), n(653041), n(47120), n(733860);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(904245),
    o = n(966390),
    c = n(902840),
    d = n(607070),
    u = n(367907),
    h = n(605984),
    p = n(453470),
    m = n(40330),
    f = n(600084),
    g = n(62764),
    _ = n(79712),
    C = n(736052),
    x = n(359110),
    v = n(359119),
    E = n(13279),
    I = n(248789),
    b = n(88101),
    Z = n(576954),
    N = n(765104),
    T = n(122707),
    S = n(779836),
    j = n(23750),
    y = n(496675),
    A = n(306680),
    P = n(944486),
    R = n(594174),
    M = n(55935),
    L = n(70956),
    k = n(709054),
    O = n(534091),
    D = n(900164),
    w = n(554838),
    U = n(481369),
    B = n(186877),
    F = n(294218),
    H = n(534469),
    G = n(993397),
    V = n(511010),
    z = n(524444),
    W = n(977391),
    Y = n(921235),
    q = n(97352),
    K = n(226027),
    X = n(959517),
    Q = n(981631),
    J = n(134612),
    $ = n(388032);
function ee(e) {
    return null != e && e.type === Q.ys_.MESSAGE && e.content.id === e.groupId;
}
let et = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: a, compact: r } = e;
    return (0, i.jsx)(F.Z, {
        compact: r,
        isGroupStart: a,
        channel: n,
        message: new j.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: Q.uaV.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, i.jsx)(m.p, {
                    filename: t.name,
                    progress: null != t.progress ? t.progress : 0,
                    size: t.currentSize,
                    onCancelUpload: () => {
                        o.Z.cancel(t);
                    }
                })
            }
        })
    });
});
function en(e) {
    var t, n, l, o;
    let m,
        F,
        { channel: en, messages: ei, unreadCount: el, showNewMessagesBar: ea, messageDisplayCompact: er, channelStream: es, uploads: eo, scrollManager: ec, specs: ed, filterAfterTimestamp: eu, showingQuarantineBanner: eh, hideSummaries: ep, jumpBarClassName: em } = e,
        ef = R.default.getCurrentUser(),
        eg = () => ec.isInitialized() || ei.ready,
        e_ = (0, B.$)(en),
        eC = ei.length > 0 && (null === (t = ei.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(en)),
        ex = (0, c.ts)(en),
        ev = (0, a.e7)([N.Z], () => N.Z.shouldShowTopicsBar() && !ep),
        eE = (0, b.P)(en.id),
        eI = (0, E.z)(en.id, J.zr),
        eb = (0, h.k)(en.id),
        eZ = (0, U.Z)(),
        eN =
            ((l = en),
            (o = null !== (n = null != eE ? eE : eI) && void 0 !== n ? n : eb),
            l.isDM() && null != o
                ? o.type === v.pj.STRANGER_DANGER
                    ? (0, i.jsx)(Z.M, {
                          channelId: l.id,
                          warningId: o.id,
                          senderId: l.getRecipientId()
                      })
                    : o.type === v.pj.LIKELY_ATO
                      ? (0, i.jsx)(p.M, {
                            channelId: l.id,
                            warningId: o.id,
                            senderId: l.getRecipientId()
                        })
                      : (0, i.jsx)(I.Y, {
                            channelId: l.id,
                            warningId: o.id,
                            senderId: l.getRecipientId()
                        })
                : null),
        eT = en.isForumPost() && !eC ? (0, i.jsx)(g.Z, { postId: en.id }) : null,
        eS = (0, C.Z)(en.id);
    (0, q.Z)();
    let ej = null,
        ey = [],
        eA = es.map((e, t) => {
            if (e.type === Q.ys_.DIVIDER) {
                var n, l;
                let a = null != e.unreadId;
                return null != eu
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(S.Z, {
                            index: t,
                            item: e,
                            channel: en,
                            isBeforeGroup: null == e.content && ee(es[t + 1])
                        })
                      : (0, i.jsx)(
                            V.Z,
                            {
                                isUnread: a,
                                isBeforeGroup: null == e.content && ee(es[t + 1]),
                                id: a ? X.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null !== (l = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== l ? l : t)
                        );
            }
            if (e.type === Q.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    g.Z,
                    {
                        parentChannelId: en.parent_id,
                        postId: en.id,
                        isLastItem: t + 1 === es.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(en.id)
                );
            if (e.type === Q.ys_.MESSAGE_GROUP_BLOCKED || e.type === Q.ys_.MESSAGE_GROUP_IGNORED || e.type === Q.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === Q.ys_.MESSAGE_GROUP_BLOCKED ? $.t['+FcYMz'] : e.type === Q.ys_.MESSAGE_GROUP_IGNORED ? $.t.VFWjc3 : $.t.xfkfTE),
                    (0, i.jsx)(
                        G.Z,
                        {
                            unreadId: X.j1,
                            messages: e,
                            channel: en,
                            compact: er,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != eu && eu > e.content.timestamp.getTime() * L.Z.Millis.SECOND) return;
            let a = y.Z.can(Q.Plq.CREATE_INSTANT_INVITE, en);
            if ((0, D.Z)(e.content, a)) return;
            e.type === Q.ys_.MESSAGE && null == ej && (ej = e);
            let r = e.groupId === (null == ej ? void 0 : ej.groupId) ? ej.content.id : e.groupId,
                s = e.type === Q.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
            return (0, i.jsx)(
                s,
                {
                    compact: er,
                    channel: en,
                    message: e.content,
                    groupId: r,
                    flashKey: e.flashKey,
                    id: (0, O.p)(en.id, e.content.id),
                    isLastItem: t >= es.length - 1,
                    renderContentOnly: eS
                },
                e.content.id
            );
        });
    ey.push(...eA);
    let eP = es[es.length - 1];
    if (
        (null != ef &&
            eo.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, w.J)(
                        en,
                        eP,
                        new j.ZP({
                            type: Q.uaV.DEFAULT,
                            author: ef
                        })
                    );
                ey.push(
                    (0, i.jsx)(
                        et,
                        {
                            file: e,
                            channel: en,
                            user: ef,
                            isGroupStart: n,
                            compact: er
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        ei.hasMoreBefore && null == eu)
    ) {
        ei.length > 0 &&
            ey.unshift(
                (0, i.jsx)(
                    'div',
                    {
                        style: {
                            height: X.D4,
                            flex: '0 0 auto'
                        }
                    },
                    'buffer'
                )
            );
        let { useReducedMotion: e } = d.Z;
        ((e && eg()) || !e) &&
            ey.unshift(
                (0, i.jsx)(
                    W.ZP,
                    {
                        compact: er,
                        ...ed
                    },
                    'has-more'
                )
            );
    }
    if (
        ((ei.hasMoreBefore && null == eu) ||
            ey.unshift(
                (0, i.jsx)(
                    f.Z,
                    {
                        channel: en,
                        showingBanner: eh
                    },
                    'empty-message'
                )
            ),
        ei.hasMoreAfter &&
            ey.push(
                (0, i.jsx)(
                    W.ZP,
                    {
                        compact: er,
                        ...ed
                    },
                    'has-more-after'
                )
            ),
        !eh && e_ && eg() && ey.push((0, i.jsx)(Y.Z, { channel: en })),
        el > 0 && ea && eg())
    ) {
        let e, t;
        let n = A.ZP.getOldestUnreadTimestamp(en.id),
            l = 0 !== n ? n : k.default.extractTimestamp(en.id),
            a = (0, M.KC)(new Date(), new Date(l));
        if ((A.ZP.isEstimated(en.id) ? ((e = a ? $.t.wvtbbG : $.t.tHqbtr), (t = $.t.vaPWFR)) : ((e = a ? $.t.BctFHx : $.t['3wXb9P']), (t = $.t['4H8ldH'])), ex && (0, c.tW)(en) && eZ.includes(K.E.SUMMARIES))) {
            let n = A.ZP.ackMessageId(en.id),
                a = (0, T.q)(en.id, A.ZP.getOldestUnreadMessageId(en.id));
            if (
                ((0, u.yw)(Q.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: el,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: ev,
                    summaries_enabled_for_channel: (0, c.Lp)(en)
                }),
                (0, c.Lp)(en))
            ) {
                let n = ev
                    ? $.intl.format(t, { count: el })
                    : $.intl.format(e, {
                          count: el,
                          timestamp: l
                      });
                if (ev) {
                    let e =
                        a > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: $.intl.format(t, { count: el })
                                      }),
                                      (0, i.jsx)(_.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8
                                          },
                                          height: 4,
                                          width: 4
                                      }),
                                      (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: $.intl.format($.t.CBftDQ, { count: a })
                                      })
                                  ]
                              })
                            : (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                              });
                    m = (0, i.jsx)(z.G5, {
                        scrollManager: ec,
                        content: e,
                        channel: en
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
                                          (0, i.jsx)(r.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: $.intl.format(t, { count: el })
                                          }),
                                          (0, i.jsx)(_.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8
                                              },
                                              height: 4,
                                              width: 4
                                          }),
                                          (0, i.jsx)(r.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: $.intl.format($.t.CBftDQ, { count: a })
                                          })
                                      ]
                                  })
                                : (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                    });
                    m = (0, i.jsx)(z.LE, {
                        content: e,
                        channelId: en.id
                    });
                }
            }
        } else
            eZ.includes(K.E.NEW_MESSAGES) &&
                (m = (0, i.jsx)(z.LE, {
                    content: $.intl.format(e, {
                        count: el,
                        timestamp: l
                    }),
                    channelId: en.id
                }));
    }
    if (
        (null == m &&
            (0, c.Lp)(en) &&
            ev &&
            eZ.includes(K.E.SUMMARIES) &&
            (m = (0, i.jsx)(z.BO, {
                channel: en,
                scrollManager: ec
            })),
        ei.error)
    )
        F = (0, i.jsx)(z.Rp, {
            loading: ei.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = en.id),
                    void s.Z.fetchMessages({
                        channelId: e,
                        limit: Q.AQB,
                        truncate: !0
                    })
                );
            },
            className: em
        });
    else if (ei.hasMoreAfter && eg()) {
        let { jumpReturnTargetId: e } = ei;
        F =
            ei.loadingMore && ei.jumpedToPresent
                ? (0, i.jsx)(z.DR, { className: em })
                : null != e
                  ? (0, i.jsx)(z.DR, {
                        type: z.A7.REPLY,
                        onClick: () => {
                            s.Z.jumpToMessage({
                                channelId: en.id,
                                messageId: e,
                                flash: !0
                            });
                        },
                        className: em
                    })
                  : (0, i.jsx)(z.DR, {
                        onClick: () =>
                            (function (e) {
                                s.Z.jumpToPresent(e.id, Q.AQB);
                                let t = P.Z.getChannelId();
                                e.id === t && (0, x.Kh)(e.id);
                            })(en),
                        className: em
                    });
    }
    return {
        channelStreamMarkup: ey,
        newMessagesBar: m,
        jumpToPresentBar: F,
        forumPostActionBar: eT,
        safetyWarningBanner: eN
    };
}
