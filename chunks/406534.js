n.d(t, { Z: () => ei }), n(539854), n(388685), n(290780);
var r = n(255367),
    i = n(73800),
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
    x = n(216572),
    y = n(359110),
    C = n(359119),
    v = n(13279),
    j = n(248789),
    O = n(88101),
    E = n(576954),
    I = n(765104),
    S = n(122707),
    P = n(779836),
    Z = n(23750),
    N = n(496675),
    T = n(306680),
    A = n(944486),
    w = n(594174),
    R = n(55935),
    k = n(70956),
    M = n(709054),
    L = n(534091),
    D = n(900164),
    U = n(554838),
    B = n(481369),
    G = n(186877),
    F = n(294218),
    H = n(534469),
    V = n(993397),
    z = n(511010),
    W = n(524444),
    Y = n(977391),
    q = n(921235),
    K = n(97352),
    X = n(226027),
    Q = n(959517),
    J = n(981631),
    $ = n(134612),
    ee = n(388032);
function et(e) {
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
function en(e) {
    return null != e && e.type === J.ys_.MESSAGE && e.content.id === e.groupId;
}
let er = i.memo(function (e) {
    let { file: t, channel: n, user: i, isGroupStart: l, compact: o } = e;
    return (0, r.jsx)(F.Z, {
        compact: o,
        isGroupStart: l,
        channel: n,
        message: new Z.ZP({
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
                        s.Z.cancel(n.id, t);
                    }
                })
            }
        })
    });
});
function ei(e) {
    var t, n;
    let i,
        s,
        { channel: f, messages: F, unreadCount: ei, showNewMessagesBar: el, messageDisplayCompact: eo, channelStream: ea, uploads: es, scrollManager: ec, specs: eu, filterAfterTimestamp: ed, showingQuarantineBanner: ep, hideSummaries: eh, jumpBarClassName: ef } = e,
        em = w.default.getCurrentUser(),
        eg = () => ec.isInitialized() || F.ready,
        eb = (0, G.$)(f),
        e_ = F.length > 0 && (null == (t = F.first()) ? void 0 : t.isFirstMessageInForumPost(f)),
        ex = (0, c.ts)(f),
        ey = (0, l.e7)([I.Z], () => I.Z.shouldShowTopicsBar() && !eh),
        eC = (0, O.P)(f.id),
        ev = (0, v.z)(f.id, $.zr),
        ej = (0, p.k)(f.id),
        eO = (0, B.Z)(),
        eE = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === C.pj.STRANGER_DANGER)
                    return (0, r.jsx)(E.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId()
                    });
                else if (t.type === C.pj.LIKELY_ATO)
                    return (0, r.jsx)(h.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId()
                    });
                else
                    return (0, r.jsx)(j.Y, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId()
                    });
            return null;
        })(f, null != (n = null != eC ? eC : ev) ? n : ej),
        eI = f.isForumPost() && !e_ ? (0, r.jsx)(g.Z, { postId: f.id }) : null,
        eS = (0, _.Z)(f.id),
        eP = (0, x.nw)(f);
    (0, K.Z)();
    let eZ = null,
        eN = [],
        eT = ea.map((e, t) => {
            if (e.type === J.ys_.DIVIDER) {
                var n, i;
                let l = null != e.unreadId;
                return null != ed
                    ? null
                    : e.isSummaryDivider
                      ? (0, r.jsx)(P.Z, {
                            index: t,
                            item: e,
                            channel: f,
                            isBeforeGroup: null == e.content && en(ea[t + 1])
                        })
                      : (0, r.jsx)(
                            z.Z,
                            {
                                isUnread: l,
                                isBeforeGroup: null == e.content && en(ea[t + 1]),
                                id: l ? Q.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t)
                        );
            }
            if (e.type === J.ys_.FORUM_POST_ACTION_BAR)
                return (0, r.jsx)(
                    g.Z,
                    {
                        parentChannelId: f.parent_id,
                        postId: f.id,
                        isLastItem: t + 1 === ea.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(f.id)
                );
            if (e.type === J.ys_.MESSAGE_GROUP_BLOCKED || e.type === J.ys_.MESSAGE_GROUP_IGNORED || e.type === J.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === J.ys_.MESSAGE_GROUP_BLOCKED ? ee.t['+FcYMz'] : e.type === J.ys_.MESSAGE_GROUP_IGNORED ? ee.t.VFWjc3 : ee.t.xfkfTE),
                    (0, r.jsx)(
                        V.Z,
                        {
                            unreadId: Q.j1,
                            messages: e,
                            channel: f,
                            compact: eo,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != ed && ed > e.content.timestamp.getTime() * k.Z.Millis.SECOND) return;
            let l = N.Z.can(J.Plq.CREATE_INSTANT_INVITE, f);
            if ((0, D.Z)(e.content, l)) return;
            e.type === J.ys_.MESSAGE && null == eZ && (eZ = e);
            let o = e.groupId === (null == eZ ? void 0 : eZ.groupId) ? eZ.content.id : e.groupId,
                a = eP && e.content.isFirstMessageInForumPost(f),
                s = e.type === J.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
            return (0, r.jsx)(
                s,
                {
                    compact: eo && !a,
                    channel: f,
                    message: e.content,
                    groupId: o,
                    flashKey: e.flashKey,
                    id: (0, L.p)(f.id, e.content.id),
                    isLastItem: t >= ea.length - 1,
                    renderContentOnly: eS || a
                },
                e.content.id
            );
        });
    eN.push(...eT);
    let eA = ea[ea.length - 1];
    if (
        (null != em &&
            es.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, U.J)(
                        f,
                        eA,
                        new Z.ZP({
                            type: J.uaV.DEFAULT,
                            author: em
                        })
                    );
                eN.push(
                    (0, r.jsx)(
                        er,
                        {
                            file: e,
                            channel: f,
                            user: em,
                            isGroupStart: n,
                            compact: eo
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        F.hasMoreBefore && null == ed)
    ) {
        F.length > 0 &&
            eN.unshift(
                (0, r.jsx)(
                    'div',
                    {
                        style: {
                            height: Q.D4,
                            flex: '0 0 auto'
                        }
                    },
                    'buffer'
                )
            );
        let { useReducedMotion: e } = u.Z;
        ((e && eg()) || !e) && eN.unshift((0, r.jsx)(Y.ZP, et({ compact: eo }, eu), 'has-more'));
    }
    if (
        ((F.hasMoreBefore && null == ed) ||
            eN.unshift(
                (0, r.jsx)(
                    m.Z,
                    {
                        channel: f,
                        showingBanner: ep
                    },
                    'empty-message'
                )
            ),
        F.hasMoreAfter && eN.push((0, r.jsx)(Y.ZP, et({ compact: eo }, eu), 'has-more-after')),
        !ep && eb && eg() && eN.push((0, r.jsx)(q.Z, { channel: f })),
        ei > 0 && el && eg())
    ) {
        let e,
            t,
            n = T.ZP.getOldestUnreadTimestamp(f.id),
            l = 0 !== n ? n : M.default.extractTimestamp(f.id),
            a = (0, R.KC)(new Date(), new Date(l));
        if ((T.ZP.isEstimated(f.id) ? ((e = a ? ee.t.wvtbbG : ee.t.tHqbtr), (t = ee.t.vaPWFR)) : ((e = a ? ee.t.BctFHx : ee.t['3wXb9P']), (t = ee.t['4H8ldH'])), ex && (0, c.tW)(f) && eO.includes(X.E.SUMMARIES))) {
            let n = T.ZP.ackMessageId(f.id),
                a = (0, S.q)(f.id, T.ZP.getOldestUnreadMessageId(f.id));
            if (
                ((0, d.yw)(J.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: ei,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: ey,
                    summaries_enabled_for_channel: (0, c.Lp)(f)
                }),
                (0, c.Lp)(f))
            ) {
                let n = ey
                    ? ee.intl.format(t, { count: ei })
                    : ee.intl.format(e, {
                          count: ei,
                          timestamp: l
                      });
                if (ey) {
                    let e =
                        a > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: ee.intl.format(t, { count: ei })
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
                                          children: ee.intl.format(ee.t.CBftDQ, { count: a })
                                      })
                                  ]
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'currentColor',
                                  children: n
                              });
                    i = (0, r.jsx)(W.G5, {
                        scrollManager: ec,
                        content: e,
                        channel: f
                    });
                } else {
                    let e = (0, r.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children:
                            a > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: ee.intl.format(t, { count: ei })
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
                                              children: ee.intl.format(ee.t.CBftDQ, { count: a })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                    });
                    i = (0, r.jsx)(W.LE, {
                        content: e,
                        channelId: f.id
                    });
                }
            }
        } else
            eO.includes(X.E.NEW_MESSAGES) &&
                (i = (0, r.jsx)(W.LE, {
                    content: ee.intl.format(e, {
                        count: ei,
                        timestamp: l
                    }),
                    channelId: f.id
                }));
    }
    if (
        (null == i &&
            (0, c.Lp)(f) &&
            ey &&
            eO.includes(X.E.SUMMARIES) &&
            (i = (0, r.jsx)(W.BO, {
                channel: f,
                scrollManager: ec
            })),
        F.error)
    )
        s = (0, r.jsx)(W.Rp, {
            loading: F.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = f.id),
                    void a.Z.fetchMessages({
                        channelId: e,
                        limit: J.AQB,
                        truncate: !0
                    })
                );
            },
            className: ef
        });
    else if (F.hasMoreAfter && eg()) {
        let { jumpReturnTargetId: e } = F;
        s =
            F.loadingMore && F.jumpedToPresent
                ? (0, r.jsx)(W.DR, { className: ef })
                : null != e
                  ? (0, r.jsx)(W.DR, {
                        type: W.A7.REPLY,
                        onClick: () => {
                            a.Z.jumpToMessage({
                                channelId: f.id,
                                messageId: e,
                                flash: !0
                            });
                        },
                        className: ef
                    })
                  : (0, r.jsx)(W.DR, {
                        onClick: () =>
                            (function (e) {
                                a.Z.jumpToPresent(e.id, J.AQB);
                                let t = A.Z.getChannelId();
                                e.id === t && (0, y.Kh)(e.id);
                            })(f),
                        className: ef
                    });
    }
    return {
        channelStreamMarkup: eN,
        newMessagesBar: i,
        jumpToPresentBar: s,
        forumPostActionBar: eI,
        safetyWarningBanner: eE
    };
}
