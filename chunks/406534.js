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
    y = n(359119),
    x = n(13279),
    v = n(248789),
    j = n(88101),
    O = n(576954),
    E = n(765104),
    N = n(122707),
    I = n(779836),
    P = n(23750),
    S = n(496675),
    Z = n(306680),
    T = n(944486),
    A = n(594174),
    w = n(55935),
    R = n(70956),
    M = n(709054),
    k = n(534091),
    L = n(900164),
    D = n(554838),
    W = n(481369),
    U = n(186877),
    B = n(294218),
    H = n(534469),
    F = n(993397),
    G = n(511010),
    V = n(524444),
    z = n(977391),
    Y = n(921235),
    q = n(97352),
    K = n(226027),
    X = n(959517),
    Q = n(981631),
    J = n(134612),
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
    return null != e && e.type === Q.ys_.MESSAGE && e.content.id === e.groupId;
}
let en = i.memo(function (e) {
    let { file: t, channel: n, user: i, isGroupStart: l, compact: o } = e;
    return (0, r.jsx)(B.Z, {
        compact: o,
        isGroupStart: l,
        channel: n,
        message: new P.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: Q.uaV.DEFAULT,
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
    var t, n;
    let i,
        s,
        { channel: f, messages: B, unreadCount: er, showNewMessagesBar: ei, messageDisplayCompact: el, channelStream: eo, uploads: ea, scrollManager: es, specs: ec, filterAfterTimestamp: eu, showingQuarantineBanner: ed, hideSummaries: ep, jumpBarClassName: eh } = e,
        ef = A.default.getCurrentUser(),
        em = () => es.isInitialized() || B.ready,
        eg = (0, U.$)(f),
        eb = B.length > 0 && (null == (t = B.first()) ? void 0 : t.isFirstMessageInForumPost(f)),
        e_ = (0, c.ts)(f),
        eC = (0, l.e7)([E.Z], () => E.Z.shouldShowTopicsBar() && !ep),
        ey = (0, j.P)(f.id),
        ex = (0, x.z)(f.id, J.zr),
        ev = (0, p.k)(f.id),
        ej = (0, W.Z)(),
        eO = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === y.pj.STRANGER_DANGER)
                    return (0, r.jsx)(O.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId()
                    });
                else if (t.type === y.pj.LIKELY_ATO)
                    return (0, r.jsx)(h.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId()
                    });
                else
                    return (0, r.jsx)(v.Y, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId()
                    });
            return null;
        })(f, null != (n = null != ey ? ey : ex) ? n : ev),
        eE = f.isForumPost() && !eb ? (0, r.jsx)(g.Z, { postId: f.id }) : null,
        eN = (0, _.Z)(f.id);
    (0, q.Z)();
    let eI = null,
        eP = [],
        eS = eo.map((e, t) => {
            if (e.type === Q.ys_.DIVIDER) {
                var n, i;
                let l = null != e.unreadId;
                return null != eu
                    ? null
                    : e.isSummaryDivider
                      ? (0, r.jsx)(I.Z, {
                            index: t,
                            item: e,
                            channel: f,
                            isBeforeGroup: null == e.content && et(eo[t + 1])
                        })
                      : (0, r.jsx)(
                            G.Z,
                            {
                                isUnread: l,
                                isBeforeGroup: null == e.content && et(eo[t + 1]),
                                id: l ? X.j1 : void 0,
                                children: e.content
                            },
                            'divider-'.concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t)
                        );
            }
            if (e.type === Q.ys_.FORUM_POST_ACTION_BAR)
                return (0, r.jsx)(
                    g.Z,
                    {
                        parentChannelId: f.parent_id,
                        postId: f.id,
                        isLastItem: t + 1 === eo.length,
                        isFirstMessage: !0
                    },
                    'forum-post-action-bar-'.concat(f.id)
                );
            if (e.type === Q.ys_.MESSAGE_GROUP_BLOCKED || e.type === Q.ys_.MESSAGE_GROUP_IGNORED || e.type === Q.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return (
                    (t = e.type === Q.ys_.MESSAGE_GROUP_BLOCKED ? $.t['+FcYMz'] : e.type === Q.ys_.MESSAGE_GROUP_IGNORED ? $.t.VFWjc3 : $.t.xfkfTE),
                    (0, r.jsx)(
                        F.Z,
                        {
                            unreadId: X.j1,
                            messages: e,
                            channel: f,
                            compact: el,
                            collapsedReason: t
                        },
                        e.key
                    )
                );
            }
            if (null != eu && eu > e.content.timestamp.getTime() * R.Z.Millis.SECOND) return;
            let l = S.Z.can(Q.Plq.CREATE_INSTANT_INVITE, f);
            if ((0, L.Z)(e.content, l)) return;
            e.type === Q.ys_.MESSAGE && null == eI && (eI = e);
            let o = e.groupId === (null == eI ? void 0 : eI.groupId) ? eI.content.id : e.groupId,
                a = e.type === Q.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
            return (0, r.jsx)(
                a,
                {
                    compact: el,
                    channel: f,
                    message: e.content,
                    groupId: o,
                    flashKey: e.flashKey,
                    id: (0, k.p)(f.id, e.content.id),
                    isLastItem: t >= eo.length - 1,
                    renderContentOnly: eN
                },
                e.content.id
            );
        });
    eP.push(...eS);
    let eZ = eo[eo.length - 1];
    if (
        (null != ef &&
            ea.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, D.J)(
                        f,
                        eZ,
                        new P.ZP({
                            type: Q.uaV.DEFAULT,
                            author: ef
                        })
                    );
                eP.push(
                    (0, r.jsx)(
                        en,
                        {
                            file: e,
                            channel: f,
                            user: ef,
                            isGroupStart: n,
                            compact: el
                        },
                        'upload-'.concat(e.id)
                    )
                );
            }),
        B.hasMoreBefore && null == eu)
    ) {
        B.length > 0 &&
            eP.unshift(
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
        ((e && em()) || !e) && eP.unshift((0, r.jsx)(z.ZP, ee({ compact: el }, ec), 'has-more'));
    }
    if (
        ((B.hasMoreBefore && null == eu) ||
            eP.unshift(
                (0, r.jsx)(
                    m.Z,
                    {
                        channel: f,
                        showingBanner: ed
                    },
                    'empty-message'
                )
            ),
        B.hasMoreAfter && eP.push((0, r.jsx)(z.ZP, ee({ compact: el }, ec), 'has-more-after')),
        !ed && eg && em() && eP.push((0, r.jsx)(Y.Z, { channel: f })),
        er > 0 && ei && em())
    ) {
        let e,
            t,
            n = Z.ZP.getOldestUnreadTimestamp(f.id),
            l = 0 !== n ? n : M.default.extractTimestamp(f.id),
            a = (0, w.KC)(new Date(), new Date(l));
        if ((Z.ZP.isEstimated(f.id) ? ((e = a ? $.t.wvtbbG : $.t.tHqbtr), (t = $.t.vaPWFR)) : ((e = a ? $.t.BctFHx : $.t['3wXb9P']), (t = $.t['4H8ldH'])), e_ && (0, c.tW)(f) && ej.includes(K.E.SUMMARIES))) {
            let n = Z.ZP.ackMessageId(f.id),
                a = (0, N.q)(f.id, Z.ZP.getOldestUnreadMessageId(f.id));
            if (
                ((0, d.yw)(Q.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: er,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: eC,
                    summaries_enabled_for_channel: (0, c.Lp)(f)
                }),
                (0, c.Lp)(f))
            ) {
                let n = eC
                    ? $.NW.format(t, { count: er })
                    : $.NW.format(e, {
                          count: er,
                          timestamp: l
                      });
                if (eC) {
                    let e =
                        a > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'currentColor',
                                          children: $.NW.format(t, { count: er })
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
                                          children: $.NW.format($.t.CBftDQ, { count: a })
                                      })
                                  ]
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'currentColor',
                                  children: n
                              });
                    i = (0, r.jsx)(V.G5, {
                        scrollManager: es,
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
                                              children: $.NW.format(t, { count: er })
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
                                              children: $.NW.format($.t.CBftDQ, { count: a })
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
            ej.includes(K.E.NEW_MESSAGES) &&
                (i = (0, r.jsx)(V.LE, {
                    content: $.NW.format(e, {
                        count: er,
                        timestamp: l
                    }),
                    channelId: f.id
                }));
    }
    if (
        (null == i &&
            (0, c.Lp)(f) &&
            eC &&
            ej.includes(K.E.SUMMARIES) &&
            (i = (0, r.jsx)(V.BO, {
                channel: f,
                scrollManager: es
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
                        limit: Q.AQB,
                        truncate: !0
                    })
                );
            },
            className: eh
        });
    else if (B.hasMoreAfter && em()) {
        let { jumpReturnTargetId: e } = B;
        s =
            B.loadingMore && B.jumpedToPresent
                ? (0, r.jsx)(V.DR, { className: eh })
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
                        className: eh
                    })
                  : (0, r.jsx)(V.DR, {
                        onClick: () =>
                            (function (e) {
                                a.Z.jumpToPresent(e.id, Q.AQB);
                                let t = T.Z.getChannelId();
                                e.id === t && (0, C.Kh)(e.id);
                            })(f),
                        className: eh
                    });
    }
    return {
        channelStreamMarkup: eP,
        newMessagesBar: i,
        jumpToPresentBar: s,
        forumPostActionBar: eE,
        safetyWarningBanner: eO
    };
}
