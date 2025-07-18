(n.d(t, { Z: () => en }), n(539854), n(388685), n(290780));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(904245),
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
    P = n(122707),
    I = n(779836),
    Z = n(23750),
    T = n(306680),
    N = n(944486),
    A = n(594174),
    w = n(55935),
    R = n(70956),
    M = n(709054),
    D = n(534091),
    L = n(554838),
    k = n(481369),
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
    let { file: t, channel: n, user: i, isGroupStart: l, compact: a } = e;
    return (0, r.jsx)(B.Z, {
        compact: a,
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
        { channel: f, messages: B, unreadCount: en, showNewMessagesBar: er, messageDisplayCompact: ei, channelStream: el, uploads: ea, scrollManager: eo, specs: es, filterAfterTimestamp: ec, showingQuarantineBanner: eu, hideSummaries: ed, jumpBarClassName: ep } = e,
        eh = A.default.getCurrentUser(),
        ef = () => eo.isInitialized() || B.ready,
        em = (0, U.$)(f),
        eg = B.length > 0 && (null == (t = B.first()) ? void 0 : t.isFirstMessageInForumPost(f)),
        eb = (0, c.ts)(f),
        e_ = (0, l.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !ed),
        ey = (0, O.P)(f.id),
        eC = (0, v.z)(f.id, Q.zr),
        ex = (0, p.k)(f.id),
        ev = (0, k.Z)(),
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
    let eP = null,
        eI = [],
        eZ = el.map((e, t) => {
            if (e.type === X.ys_.DIVIDER) {
                var n, i;
                let l = null != e.unreadId;
                return null != ec
                    ? null
                    : e.isSummaryDivider
                      ? (0, r.jsx)(I.Z, {
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
            e.type === X.ys_.MESSAGE && null == eP && (eP = e);
            let l = e.groupId === (null == eP ? void 0 : eP.groupId) ? eP.content.id : e.groupId,
                a = eS && e.content.isFirstMessageInForumPost(f),
                o = e.type === X.ys_.THREAD_STARTER_MESSAGE ? F.Ru : F.ZP;
            return (0, r.jsx)(
                o,
                {
                    compact: ei && !a,
                    channel: f,
                    message: e.content,
                    groupId: l,
                    flashKey: e.flashKey,
                    id: (0, D.p)(f.id, e.content.id),
                    isLastItem: t >= el.length - 1,
                    renderContentOnly: eE || a
                },
                e.content.id
            );
        });
    eI.push(...eZ);
    let eT = el[el.length - 1];
    if (
        (null != eh &&
            ea.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, L.J)(
                        f,
                        eT,
                        new Z.ZP({
                            type: X.uaV.DEFAULT,
                            author: eh
                        })
                    );
                eI.push(
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
            eI.unshift(
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
        ((e && ef()) || !e) && eI.unshift((0, r.jsx)(z.ZP, $({ compact: ei }, es), 'has-more'));
    }
    if (
        ((B.hasMoreBefore && null == ec) ||
            eI.unshift(
                (0, r.jsx)(
                    m.Z,
                    {
                        channel: f,
                        showingBanner: eu
                    },
                    'empty-message'
                )
            ),
        B.hasMoreAfter && eI.push((0, r.jsx)(z.ZP, $({ compact: ei }, es), 'has-more-after')),
        !eu && em && ef() && eI.push((0, r.jsx)(W.Z, { channel: f })),
        en > 0 && er && ef())
    ) {
        let e,
            t,
            n = T.ZP.getOldestUnreadTimestamp(f.id),
            l = 0 !== n ? n : M.default.extractTimestamp(f.id),
            o = (0, w.KC)(new Date(), new Date(l));
        if ((T.ZP.isEstimated(f.id) ? ((e = o ? J.t.wvtbbG : J.t.tHqbtr), (t = J.t.vaPWFR)) : ((e = o ? J.t.BctFHx : J.t['3wXb9P']), (t = J.t['4H8ldH'])), eb && (0, c.tW)(f) && ev.includes(q.E.SUMMARIES))) {
            let n = T.ZP.ackMessageId(f.id),
                o = (0, P.q)(f.id, T.ZP.getOldestUnreadMessageId(f.id));
            if (
                ((0, d.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: o,
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
                        o > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(a.Text, {
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
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: J.intl.format(J.t.CBftDQ, { count: o })
                                      })
                                  ]
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'currentColor',
                                  children: n
                              });
                    i = (0, r.jsx)(V.G5, {
                        scrollManager: eo,
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
                            o > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(a.Text, {
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
                                          (0, r.jsx)(a.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'currentColor',
                                              children: J.intl.format(J.t.CBftDQ, { count: o })
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(a.Text, {
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
                scrollManager: eo
            })),
        B.error)
    )
        s = (0, r.jsx)(V.Rp, {
            loading: B.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = f.id),
                    void o.Z.fetchMessages({
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
                            o.Z.jumpToMessage({
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
                                o.Z.jumpToPresent(e.id, X.AQB);
                                let t = N.Z.getChannelId();
                                e.id === t && (0, C.Kh)(e.id);
                            })(f),
                        className: ep
                    });
    }
    return {
        channelStreamMarkup: eI,
        newMessagesBar: i,
        jumpToPresentBar: s,
        forumPostActionBar: eO,
        safetyWarningBanner: ej
    };
}
