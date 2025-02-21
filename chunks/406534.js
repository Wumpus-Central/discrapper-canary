n.d(t, { Z: () => er }), n(653041), n(47120), n(733860);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(904245),
    s = n(966390),
    c = n(902840),
    u = n(607070),
    d = n(367907),
    p = n(605984),
    h = n(453470),
    f = n(40330),
    m = n(600084),
    g = n(62764),
    b = n(79712),
    _ = n(736052),
    C = n(359110),
    v = n(359119),
    y = n(13279),
    x = n(248789),
    j = n(88101),
    O = n(576954),
    N = n(765104),
    E = n(122707),
    P = n(779836),
    I = n(23750),
    S = n(496675),
    Z = n(306680),
    T = n(944486),
    A = n(594174),
    w = n(55935),
    R = n(70956),
    k = n(709054),
    M = n(534091),
    L = n(900164),
    D = n(554838),
    W = n(481369),
    U = n(186877),
    B = n(294218),
    F = n(534469),
    H = n(993397),
    G = n(511010),
    V = n(524444),
    z = n(977391),
    q = n(921235),
    Y = n(97352),
    K = n(226027),
    X = n(959517),
    J = n(981631),
    Q = n(134612),
    $ = n(388032);
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function et(e) {
    return null != e && e.type === J.ys_.MESSAGE && e.content.id === e.groupId;
}
let en = i.memo(function (e) {
    let { file: t, channel: n, user: i, isGroupStart: l, compact: o } = e;
    return (0, r.jsx)(B.Z, {
        compact: o,
        isGroupStart: l,
        channel: n,
        message: new I.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: J.uaV.DEFAULT,
            author: i,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, r.jsx)(f.p, {
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
function er(e) {
    var t, n, i, s;
    let f,
        B,
        { channel: er, messages: ei, unreadCount: el, showNewMessagesBar: eo, messageDisplayCompact: ea, channelStream: es, uploads: ec, scrollManager: eu, specs: ed, filterAfterTimestamp: ep, showingQuarantineBanner: eh, hideSummaries: ef, jumpBarClassName: em } = e,
        eg = A.default.getCurrentUser(),
        eb = () => eu.isInitialized() || ei.ready,
        e_ = (0, U.$)(er),
        eC = ei.length > 0 && (null === (t = ei.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(er)),
        ev = (0, c.ts)(er),
        ey = (0, l.e7)([N.Z], () => N.Z.shouldShowTopicsBar() && !ef),
        ex = (0, j.P)(er.id),
        ej = (0, y.z)(er.id, Q.zr),
        eO = (0, p.k)(er.id),
        eN = (0, W.Z)(),
        eE =
            ((i = er),
            (s = null !== (n = null != ex ? ex : ej) && void 0 !== n ? n : eO),
            i.isDM() && null != s
                ? s.type === v.pj.STRANGER_DANGER
                    ? (0, r.jsx)(O.M, {
                          channelId: i.id,
                          warningId: s.id,
                          senderId: i.getRecipientId()
                      })
                    : s.type === v.pj.LIKELY_ATO
                      ? (0, r.jsx)(h.M, {
                            channelId: i.id,
                            warningId: s.id,
                            senderId: i.getRecipientId()
                        })
                      : (0, r.jsx)(x.Y, {
                            channelId: i.id,
                            warningId: s.id,
                            senderId: i.getRecipientId()
                        })
                : null),
        eP = er.isForumPost() && !eC ? (0, r.jsx)(g.Z, { postId: er.id }) : null,
        eI = (0, _.Z)(er.id);
    (0, Y.Z)();
    let eS = null,
        eZ = [],
        eT = es.map((e, t) => {
            if (e.type === J.ys_.DIVIDER) {
                var n, i;
                let l = null != e.unreadId;
                return null != ep
                    ? null
                    : e.isSummaryDivider
                      ? (0, r.jsx)(P.Z, {
                            index: t,
                            item: e,
                            channel: er,
                            isBeforeGroup: null == e.content && et(es[t + 1])
                        })
                      : (0, r.jsx)(
                            G.Z,
                            {
                                isUnread: l,
                                isBeforeGroup: null == e.content && et(es[t + 1]),
                                id: l ? X.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null !== (i = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== i ? i : t)
                        );
            }
            if (e.type === J.ys_.FORUM_POST_ACTION_BAR)
                return (0, r.jsx)(
                    g.Z,
                    {
                        parentChannelId: er.parent_id,
                        postId: er.id,
                        isLastItem: t + 1 === es.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(er.id)
                );
            if (e.type === J.ys_.MESSAGE_GROUP_BLOCKED || e.type === J.ys_.MESSAGE_GROUP_IGNORED || e.type === J.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === J.ys_.MESSAGE_GROUP_BLOCKED ? $.t['+FcYMz'] : e.type === J.ys_.MESSAGE_GROUP_IGNORED ? $.t.VFWjc3 : $.t.xfkfTE),
                    (0, r.jsx)(
                        H.Z,
                        {
                            unreadId: X.j1,
                            messages: e,
                            channel: er,
                            compact: ea,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != ep && ep > e.content.timestamp.getTime() * R.Z.Millis.SECOND) return;
            let l = S.Z.can(J.Plq.CREATE_INSTANT_INVITE, er);
            if ((0, L.Z)(e.content, l)) return;
            e.type === J.ys_.MESSAGE && null == eS && (eS = e);
            let o = e.groupId === (null == eS ? void 0 : eS.groupId) ? eS.content.id : e.groupId,
                a = e.type === J.ys_.THREAD_STARTER_MESSAGE ? F.Ru : F.ZP;
            return (0, r.jsx)(
                a,
                {
                    compact: ea,
                    channel: er,
                    message: e.content,
                    groupId: o,
                    flashKey: e.flashKey,
                    id: (0, M.p)(er.id, e.content.id),
                    isLastItem: t >= es.length - 1,
                    renderContentOnly: eI
                },
                e.content.id
            );
        });
    eZ.push(...eT);
    let eA = es[es.length - 1];
    if (
        (null != eg &&
            ec.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, D.J)(
                        er,
                        eA,
                        new I.ZP({
                            type: J.uaV.DEFAULT,
                            author: eg
                        })
                    );
                eZ.push(
                    (0, r.jsx)(
                        en,
                        {
                            file: e,
                            channel: er,
                            user: eg,
                            isGroupStart: n,
                            compact: ea
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        ei.hasMoreBefore && null == ep)
    ) {
        ei.length > 0 &&
            eZ.unshift(
                (0, r.jsx)(
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
        let { useReducedMotion: e } = u.Z;
        ((e && eb()) || !e) && eZ.unshift((0, r.jsx)(z.ZP, ee({ compact: ea }, ed), 'has-more'));
    }
    if (
        ((ei.hasMoreBefore && null == ep) ||
            eZ.unshift(
                (0, r.jsx)(
                    m.Z,
                    {
                        channel: er,
                        showingBanner: eh
                    },
                    'empty-message'
                )
            ),
        ei.hasMoreAfter && eZ.push((0, r.jsx)(z.ZP, ee({ compact: ea }, ed), 'has-more-after')),
        !eh && e_ && eb() && eZ.push((0, r.jsx)(q.Z, { channel: er })),
        el > 0 && eo && eb())
    ) {
        let e, t;
        let n = Z.ZP.getOldestUnreadTimestamp(er.id),
            i = 0 !== n ? n : k.default.extractTimestamp(er.id),
            l = (0, w.KC)(new Date(), new Date(i));
        if ((Z.ZP.isEstimated(er.id) ? ((e = l ? $.t.wvtbbG : $.t.tHqbtr), (t = $.t.vaPWFR)) : ((e = l ? $.t.BctFHx : $.t['3wXb9P']), (t = $.t['4H8ldH'])), ev && (0, c.tW)(er) && eN.includes(K.E.SUMMARIES))) {
            let n = Z.ZP.ackMessageId(er.id),
                l = (0, E.q)(er.id, Z.ZP.getOldestUnreadMessageId(er.id));
            if (
                ((0, d.yw)(J.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: l,
                    num_unread_messages: el,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: ey,
                    summaries_enabled_for_channel: (0, c.Lp)(er)
                }),
                (0, c.Lp)(er))
            ) {
                let n = ey
                    ? $.NW.format(t, { count: el })
                    : $.NW.format(e, {
                          count: el,
                          timestamp: i
                      });
                if (ey) {
                    let e =
                        l > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: $.NW.format(t, { count: el })
                                      }),
                                      (0, r.jsx)(b.Z, {
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
                                          children: $.NW.format($.t.CBftDQ, { count: l })
                                      })
                                  ]
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'currentColor',
                                  children: n
                              });
                    f = (0, r.jsx)(V.G5, {
                        scrollManager: eu,
                        content: e,
                        channel: er
                    });
                } else {
                    let e = (0, r.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children:
                            l > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: $.NW.format(t, { count: el })
                                          }),
                                          (0, r.jsx)(b.Z, {
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
                                              children: $.NW.format($.t.CBftDQ, { count: l })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                    });
                    f = (0, r.jsx)(V.LE, {
                        content: e,
                        channelId: er.id
                    });
                }
            }
        } else
            eN.includes(K.E.NEW_MESSAGES) &&
                (f = (0, r.jsx)(V.LE, {
                    content: $.NW.format(e, {
                        count: el,
                        timestamp: i
                    }),
                    channelId: er.id
                }));
    }
    if (
        (null == f &&
            (0, c.Lp)(er) &&
            ey &&
            eN.includes(K.E.SUMMARIES) &&
            (f = (0, r.jsx)(V.BO, {
                channel: er,
                scrollManager: eu
            })),
        ei.error)
    )
        B = (0, r.jsx)(V.Rp, {
            loading: ei.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = er.id),
                    void a.Z.fetchMessages({
                        channelId: e,
                        limit: J.AQB,
                        truncate: !0
                    })
                );
            },
            className: em
        });
    else if (ei.hasMoreAfter && eb()) {
        let { jumpReturnTargetId: e } = ei;
        B =
            ei.loadingMore && ei.jumpedToPresent
                ? (0, r.jsx)(V.DR, { className: em })
                : null != e
                  ? (0, r.jsx)(V.DR, {
                        type: V.A7.REPLY,
                        onClick: () => {
                            a.Z.jumpToMessage({
                                channelId: er.id,
                                messageId: e,
                                flash: !0
                            });
                        },
                        className: em
                    })
                  : (0, r.jsx)(V.DR, {
                        onClick: () =>
                            (function (e) {
                                a.Z.jumpToPresent(e.id, J.AQB);
                                let t = T.Z.getChannelId();
                                e.id === t && (0, C.Kh)(e.id);
                            })(er),
                        className: em
                    });
    }
    return {
        channelStreamMarkup: eZ,
        newMessagesBar: f,
        jumpToPresentBar: B,
        forumPostActionBar: eP,
        safetyWarningBanner: eE
    };
}
