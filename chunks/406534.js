(n.d(t, { Z: () => en }), n(539854), n(388685), n(290780));
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
    y = n(216572),
    C = n(359110),
    x = n(359119),
    v = n(13279),
    j = n(248789),
    O = n(88101),
    E = n(576954),
    S = n(765104),
    I = n(122707),
    P = n(779836),
    Z = n(23750),
    N = n(306680),
    T = n(944486),
    A = n(594174),
    w = n(55935),
    R = n(70956),
    k = n(709054),
    M = n(534091),
    D = n(554838),
    L = n(481369),
    U = n(186877),
    B = n(294218),
    F = n(534469),
    H = n(993397),
    G = n(511010),
    V = n(524444),
    z = n(977391),
    W = n(921235),
    Y = n(97352),
    q = n(226027),
    K = n(959517),
    X = n(981631),
    Q = n(134612),
    J = n(388032);
function $(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function ee(e) {
    return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId;
}
let et = i.memo(function (e) {
    let { file: t, channel: n, user: i, isGroupStart: l, compact: o } = e;
    return (0, r.jsx)(B.Z, {
        compact: o,
        isGroupStart: l,
        channel: n,
        message: new Z.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: X.uaV.DEFAULT,
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
function en(e) {
    var t, n;
    let i,
        s,
        { channel: f, messages: B, unreadCount: en, showNewMessagesBar: er, messageDisplayCompact: ei, channelStream: el, uploads: eo, scrollManager: ea, specs: es, filterAfterTimestamp: ec, showingQuarantineBanner: eu, hideSummaries: ed, jumpBarClassName: ep } = e,
        eh = A.default.getCurrentUser(),
        ef = () => ea.isInitialized() || B.ready,
        em = (0, U.$)(f),
        eg = B.length > 0 && (null == (t = B.first()) ? void 0 : t.isFirstMessageInForumPost(f)),
        eb = (0, c.ts)(f),
        e_ = (0, l.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !ed),
        ey = (0, O.P)(f.id),
        eC = (0, v.z)(f.id, Q.zr),
        ex = (0, p.k)(f.id),
        ev = (0, L.Z)(),
        ej = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === x.pj.STRANGER_DANGER)
                    return (0, r.jsx)(E.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId()
                    });
                else if (t.type === x.pj.LIKELY_ATO)
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
        })(f, null != (n = null != ey ? ey : eC) ? n : ex),
        eO = f.isForumPost() && !eg ? (0, r.jsx)(g.Z, { postId: f.id }) : null,
        eE = (0, _.Z)(f.id),
        eS = (0, y.nw)(f);
    (0, Y.Z)();
    let eI = null,
        eP = [],
        eZ = el.map((e, t) => {
            if (e.type === X.ys_.DIVIDER) {
                var n, i;
                let l = null != e.unreadId;
                return null != ec
                    ? null
                    : e.isSummaryDivider
                      ? (0, r.jsx)(P.Z, {
                            index: t,
                            item: e,
                            channel: f,
                            isBeforeGroup: null == e.content && ee(el[t + 1])
                        })
                      : (0, r.jsx)(
                            G.Z,
                            {
                                isUnread: l,
                                isBeforeGroup: null == e.content && ee(el[t + 1]),
                                id: l ? K.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t)
                        );
            }
            if (e.type === X.ys_.FORUM_POST_ACTION_BAR)
                return (0, r.jsx)(
                    g.Z,
                    {
                        parentChannelId: f.parent_id,
                        postId: f.id,
                        isLastItem: t + 1 === el.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(f.id)
                );
            if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_IGNORED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? J.t['+FcYMz'] : e.type === X.ys_.MESSAGE_GROUP_IGNORED ? J.t.VFWjc3 : J.t.xfkfTE),
                    (0, r.jsx)(
                        H.Z,
                        {
                            unreadId: K.j1,
                            messages: e,
                            channel: f,
                            compact: ei,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != ec && ec > e.content.timestamp.getTime() * R.Z.Millis.SECOND) return;
            e.type === X.ys_.MESSAGE && null == eI && (eI = e);
            let l = e.groupId === (null == eI ? void 0 : eI.groupId) ? eI.content.id : e.groupId,
                o = eS && e.content.isFirstMessageInForumPost(f),
                a = e.type === X.ys_.THREAD_STARTER_MESSAGE ? F.Ru : F.ZP;
            return (0, r.jsx)(
                a,
                {
                    compact: ei && !o,
                    channel: f,
                    message: e.content,
                    groupId: l,
                    flashKey: e.flashKey,
                    id: (0, M.p)(f.id, e.content.id),
                    isLastItem: t >= el.length - 1,
                    renderContentOnly: eE || o
                },
                e.content.id
            );
        });
    eP.push(...eZ);
    let eN = el[el.length - 1];
    if (
        (null != eh &&
            eo.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, D.J)(
                        f,
                        eN,
                        new Z.ZP({
                            type: X.uaV.DEFAULT,
                            author: eh
                        })
                    );
                eP.push(
                    (0, r.jsx)(
                        et,
                        {
                            file: e,
                            channel: f,
                            user: eh,
                            isGroupStart: n,
                            compact: ei
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        B.hasMoreBefore && null == ec)
    ) {
        B.length > 0 &&
            eP.unshift(
                (0, r.jsx)(
                    'div',
                    {
                        style: {
                            height: K.D4,
                            flex: '0 0 auto'
                        }
                    },
                    'buffer'
                )
            );
        let { useReducedMotion: e } = u.Z;
        ((e && ef()) || !e) && eP.unshift((0, r.jsx)(z.ZP, $({ compact: ei }, es), 'has-more'));
    }
    if (
        ((B.hasMoreBefore && null == ec) ||
            eP.unshift(
                (0, r.jsx)(
                    m.Z,
                    {
                        channel: f,
                        showingBanner: eu
                    },
                    'empty-message'
                )
            ),
        B.hasMoreAfter && eP.push((0, r.jsx)(z.ZP, $({ compact: ei }, es), 'has-more-after')),
        !eu && em && ef() && eP.push((0, r.jsx)(W.Z, { channel: f })),
        en > 0 && er && ef())
    ) {
        let e,
            t,
            n = N.ZP.getOldestUnreadTimestamp(f.id),
            l = 0 !== n ? n : k.default.extractTimestamp(f.id),
            a = (0, w.KC)(new Date(), new Date(l));
        if ((N.ZP.isEstimated(f.id) ? ((e = a ? J.t.wvtbbG : J.t.tHqbtr), (t = J.t.vaPWFR)) : ((e = a ? J.t.BctFHx : J.t['3wXb9P']), (t = J.t['4H8ldH'])), eb && (0, c.tW)(f) && ev.includes(q.E.SUMMARIES))) {
            let n = N.ZP.ackMessageId(f.id),
                a = (0, I.q)(f.id, N.ZP.getOldestUnreadMessageId(f.id));
            if (
                ((0, d.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: en,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: e_,
                    summaries_enabled_for_channel: (0, c.Lp)(f)
                }),
                (0, c.Lp)(f))
            ) {
                let n = e_
                    ? J.intl.format(t, { count: en })
                    : J.intl.format(e, {
                          count: en,
                          timestamp: l
                      });
                if (e_) {
                    let e =
                        a > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: J.intl.format(t, { count: en })
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
                                          children: J.intl.format(J.t.CBftDQ, { count: a })
                                      })
                                  ]
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'currentColor',
                                  children: n
                              });
                    i = (0, r.jsx)(V.G5, {
                        scrollManager: ea,
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
                                              children: J.intl.format(t, { count: en })
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
                                              children: J.intl.format(J.t.CBftDQ, { count: a })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: n
                                  })
                    });
                    i = (0, r.jsx)(V.LE, {
                        content: e,
                        channelId: f.id
                    });
                }
            }
        } else
            ev.includes(q.E.NEW_MESSAGES) &&
                (i = (0, r.jsx)(V.LE, {
                    content: J.intl.format(e, {
                        count: en,
                        timestamp: l
                    }),
                    channelId: f.id
                }));
    }
    if (
        (null == i &&
            (0, c.Lp)(f) &&
            e_ &&
            ev.includes(q.E.SUMMARIES) &&
            (i = (0, r.jsx)(V.BO, {
                channel: f,
                scrollManager: ea
            })),
        B.error)
    )
        s = (0, r.jsx)(V.Rp, {
            loading: B.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = f.id),
                    void a.Z.fetchMessages({
                        channelId: e,
                        limit: X.AQB,
                        truncate: !0
                    })
                );
            },
            className: ep
        });
    else if (B.hasMoreAfter && ef()) {
        let { jumpReturnTargetId: e } = B;
        s =
            B.loadingMore && B.jumpedToPresent
                ? (0, r.jsx)(V.DR, { className: ep })
                : null != e
                  ? (0, r.jsx)(V.DR, {
                        type: V.A7.REPLY,
                        onClick: () => {
                            a.Z.jumpToMessage({
                                channelId: f.id,
                                messageId: e,
                                flash: !0
                            });
                        },
                        className: ep
                    })
                  : (0, r.jsx)(V.DR, {
                        onClick: () =>
                            (function (e) {
                                a.Z.jumpToPresent(e.id, X.AQB);
                                let t = T.Z.getChannelId();
                                e.id === t && (0, C.Kh)(e.id);
                            })(f),
                        className: ep
                    });
    }
    return {
        channelStreamMarkup: eP,
        newMessagesBar: i,
        jumpToPresentBar: s,
        forumPostActionBar: eO,
        safetyWarningBanner: ej
    };
}
