n.d(t, {
    Z: function () {
        return en;
    }
}),
    n(653041),
    n(47120),
    n(733860);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
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
    C = n(79712),
    x = n(736052),
    v = n(359110),
    _ = n(359119),
    I = n(13279),
    E = n(248789),
    b = n(88101),
    Z = n(576954),
    N = n(765104),
    S = n(122707),
    T = n(779836),
    j = n(23750),
    A = n(496675),
    y = n(306680),
    P = n(944486),
    M = n(594174),
    R = n(55935),
    L = n(70956),
    k = n(709054),
    O = n(534091),
    D = n(900164),
    w = n(554838),
    B = n(481369),
    U = n(186877),
    H = n(294218),
    G = n(534469),
    F = n(993397),
    V = n(511010),
    z = n(524444),
    W = n(977391),
    K = n(921235),
    Y = n(97352),
    q = n(226027),
    X = n(959517),
    J = n(981631),
    Q = n(134612),
    $ = n(388032);
function ee(e) {
    return null != e && e.type === J.ys_.MESSAGE && e.content.id === e.groupId;
}
let et = l.memo(function (e) {
    let { file: t, channel: n, user: l, isGroupStart: r, compact: a } = e;
    return (0, i.jsx)(H.Z, {
        compact: a,
        isGroupStart: r,
        channel: n,
        message: new j.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: J.uaV.DEFAULT,
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
    var t, n;
    let l,
        o,
        { channel: m, messages: H, unreadCount: en, showNewMessagesBar: ei, messageDisplayCompact: el, channelStream: er, uploads: ea, scrollManager: es, specs: eo, filterAfterTimestamp: ec, showingQuarantineBanner: ed, hideSummaries: eu, jumpBarClassName: eh } = e,
        ep = M.default.getCurrentUser(),
        em = () => es.isInitialized() || H.ready,
        ef = (0, U.$)(m),
        eg = H.length > 0 && (null === (t = H.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(m)),
        eC = (0, c.ts)(m),
        ex = (0, r.e7)([N.Z], () => N.Z.shouldShowTopicsBar() && !eu),
        ev = (0, b.P)(m.id),
        e_ = (0, I.z)(m.id, Q.zr),
        eI = (0, h.k)(m.id),
        eE = (0, B.Z)(),
        eb = (function (e, t) {
            if (e.isDM() && null != t)
                return t.type === _.pj.STRANGER_DANGER
                    ? (0, i.jsx)(Z.M, {
                          channelId: e.id,
                          warningId: t.id,
                          senderId: e.getRecipientId()
                      })
                    : t.type === _.pj.LIKELY_ATO
                      ? (0, i.jsx)(p.M, {
                            channelId: e.id,
                            warningId: t.id,
                            senderId: e.getRecipientId()
                        })
                      : (0, i.jsx)(E.Y, {
                            channelId: e.id,
                            warningId: t.id,
                            senderId: e.getRecipientId()
                        });
            return null;
        })(m, null !== (n = null != ev ? ev : e_) && void 0 !== n ? n : eI),
        eZ = m.isForumPost() && !eg ? (0, i.jsx)(g.Z, { postId: m.id }) : null,
        eN = (0, x.Z)(m.id);
    (0, Y.Z)();
    let eS = null,
        eT = [],
        ej = er.map((e, t) => {
            if (e.type === J.ys_.DIVIDER) {
                var n, l;
                let r = null != e.unreadId;
                return null != ec
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(T.Z, {
                            index: t,
                            item: e,
                            channel: m,
                            isBeforeGroup: null == e.content && ee(er[t + 1])
                        })
                      : (0, i.jsx)(
                            V.Z,
                            {
                                isUnread: r,
                                isBeforeGroup: null == e.content && ee(er[t + 1]),
                                id: r ? X.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null !== (l = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== l ? l : t)
                        );
            }
            if (e.type === J.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
                    g.Z,
                    {
                        parentChannelId: m.parent_id,
                        postId: m.id,
                        isLastItem: t + 1 === er.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(m.id)
                );
            if (e.type === J.ys_.MESSAGE_GROUP_BLOCKED || e.type === J.ys_.MESSAGE_GROUP_IGNORED || e.type === J.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === J.ys_.MESSAGE_GROUP_BLOCKED ? $.t['+FcYMz'] : e.type === J.ys_.MESSAGE_GROUP_IGNORED ? $.t.VFWjc3 : $.t.xfkfTE),
                    (0, i.jsx)(
                        F.Z,
                        {
                            unreadId: X.j1,
                            messages: e,
                            channel: m,
                            compact: el,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != ec && ec > e.content.timestamp.getTime() * L.Z.Millis.SECOND) return;
            let r = A.Z.can(J.Plq.CREATE_INSTANT_INVITE, m);
            if ((0, D.Z)(e.content, r)) return;
            e.type === J.ys_.MESSAGE && null == eS && (eS = e);
            let a = e.groupId === (null == eS ? void 0 : eS.groupId) ? eS.content.id : e.groupId,
                s = e.type === J.ys_.THREAD_STARTER_MESSAGE ? G.Ru : G.ZP;
            return (0, i.jsx)(
                s,
                {
                    compact: el,
                    channel: m,
                    message: e.content,
                    groupId: a,
                    flashKey: e.flashKey,
                    id: (0, O.p)(m.id, e.content.id),
                    isLastItem: t >= er.length - 1,
                    renderContentOnly: eN
                },
                e.content.id
            );
        });
    eT.push(...ej);
    let eA = er[er.length - 1];
    if (
        (null != ep &&
            ea.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, w.J)(
                        m,
                        eA,
                        new j.ZP({
                            type: J.uaV.DEFAULT,
                            author: ep
                        })
                    );
                eT.push(
                    (0, i.jsx)(
                        et,
                        {
                            file: e,
                            channel: m,
                            user: ep,
                            isGroupStart: n,
                            compact: el
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        H.hasMoreBefore && null == ec)
    ) {
        H.length > 0 &&
            eT.unshift(
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
        ((e && em()) || !e) &&
            eT.unshift(
                (0, i.jsx)(
                    W.ZP,
                    {
                        compact: el,
                        ...eo
                    },
                    'has-more'
                )
            );
    }
    if (
        ((!H.hasMoreBefore || null != ec) &&
            eT.unshift(
                (0, i.jsx)(
                    f.Z,
                    {
                        channel: m,
                        showingBanner: ed
                    },
                    'empty-message'
                )
            ),
        H.hasMoreAfter &&
            eT.push(
                (0, i.jsx)(
                    W.ZP,
                    {
                        compact: el,
                        ...eo
                    },
                    'has-more-after'
                )
            ),
        !ed && ef && em() && eT.push((0, i.jsx)(K.Z, { channel: m })),
        en > 0 && ei && em())
    ) {
        let e, t;
        let n = y.ZP.getOldestUnreadTimestamp(m.id),
            r = 0 !== n ? n : k.default.extractTimestamp(m.id),
            s = (0, R.KC)(new Date(), new Date(r));
        if ((y.ZP.isEstimated(m.id) ? ((e = s ? $.t.wvtbbG : $.t.tHqbtr), (t = $.t.vaPWFR)) : ((e = s ? $.t.BctFHx : $.t['3wXb9P']), (t = $.t['4H8ldH'])), eC && (0, c.tW)(m) && eE.includes(q.E.SUMMARIES))) {
            let n = y.ZP.ackMessageId(m.id),
                s = (0, S.q)(m.id, y.ZP.getOldestUnreadMessageId(m.id));
            if (
                ((0, u.yw)(J.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: s,
                    num_unread_messages: en,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: ex,
                    summaries_enabled_for_channel: (0, c.Lp)(m)
                }),
                (0, c.Lp)(m))
            ) {
                let n = ex
                    ? $.intl.format(t, { count: en })
                    : $.intl.format(e, {
                          count: en,
                          timestamp: r
                      });
                if (ex) {
                    let e =
                        s > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: $.intl.format(t, { count: en })
                                      }),
                                      (0, i.jsx)(C.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8
                                          },
                                          height: 4,
                                          width: 4
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: $.intl.format($.t.CBftDQ, { count: s })
                                      })
                                  ]
                              })
                            : (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                              });
                    l = (0, i.jsx)(z.G5, {
                        scrollManager: es,
                        content: e,
                        channel: m
                    });
                } else {
                    let e = (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children:
                            s > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: $.intl.format(t, { count: en })
                                          }),
                                          (0, i.jsx)(C.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8
                                              },
                                              height: 4,
                                              width: 4
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: $.intl.format($.t.CBftDQ, { count: s })
                                          })
                                      ]
                                  })
                                : (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                    });
                    l = (0, i.jsx)(z.LE, {
                        content: e,
                        channelId: m.id
                    });
                }
            }
        } else
            eE.includes(q.E.NEW_MESSAGES) &&
                (l = (0, i.jsx)(z.LE, {
                    content: $.intl.format(e, {
                        count: en,
                        timestamp: r
                    }),
                    channelId: m.id
                }));
    }
    if (
        (null == l &&
            (0, c.Lp)(m) &&
            ex &&
            eE.includes(q.E.SUMMARIES) &&
            (l = (0, i.jsx)(z.BO, {
                channel: m,
                scrollManager: es
            })),
        H.error)
    )
        o = (0, i.jsx)(z.Rp, {
            loading: H.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = m.id),
                    void s.Z.fetchMessages({
                        channelId: e,
                        limit: J.AQB,
                        truncate: !0
                    })
                );
            },
            className: eh
        });
    else if (H.hasMoreAfter && em()) {
        let { jumpReturnTargetId: e } = H;
        o =
            H.loadingMore && H.jumpedToPresent
                ? (0, i.jsx)(z.DR, { className: eh })
                : null != e
                  ? (0, i.jsx)(z.DR, {
                        type: z.A7.REPLY,
                        onClick: () => {
                            var t, n;
                            return (
                                (t = m),
                                (n = e),
                                void s.Z.jumpToMessage({
                                    channelId: t.id,
                                    messageId: n,
                                    flash: !0
                                })
                            );
                        },
                        className: eh
                    })
                  : (0, i.jsx)(z.DR, {
                        onClick: () =>
                            (function (e) {
                                s.Z.jumpToPresent(e.id, J.AQB);
                                let t = P.Z.getChannelId();
                                e.id === t && (0, v.Kh)(e.id);
                            })(m),
                        className: eh
                    });
    }
    return {
        channelStreamMarkup: eT,
        newMessagesBar: l,
        jumpToPresentBar: o,
        forumPostActionBar: eZ,
        safetyWarningBanner: eb
    };
}
