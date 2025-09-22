n.d(t, { Z: () => et }), n(539854), n(388685), n(290780);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(904245),
    s = n(902840),
    c = n(607070),
    u = n(367907),
    d = n(605984),
    p = n(453470),
    h = n(40330),
    f = n(600084),
    m = n(62764),
    g = n(79712),
    b = n(736052),
    y = n(216572),
    _ = n(359110),
    C = n(359119),
    v = n(13279),
    x = n(248789),
    O = n(88101),
    j = n(576954),
    E = n(765104),
    S = n(122707),
    I = n(779836),
    P = n(23750),
    Z = n(306680),
    T = n(944486),
    N = n(594174),
    A = n(55935),
    w = n(70956),
    R = n(709054),
    M = n(534091),
    D = n(554838),
    k = n(481369),
    L = n(186877),
    U = n(294218),
    B = n(534469),
    G = n(993397),
    H = n(511010),
    F = n(524444),
    V = n(977391),
    z = n(921235),
    W = n(97352),
    q = n(226027),
    Y = n(959517),
    K = n(981631),
    X = n(134612),
    Q = n(388032);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function $(e) {
    return null != e && e.type === K.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = i.memo(function (e) {
    let { file: t, channel: n, user: i, isGroupStart: l, compact: a } = e;
    return (0, r.jsx)(U.Z, {
        compact: a,
        isGroupStart: l,
        channel: n,
        message: new P.ZP({
            id: t.id,
            key: "pending-upload-".concat(t.id),
            type: K.uaV.DEFAULT,
            author: i,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, r.jsx)(h.p, {
                    channelId: n.id,
                    file: t,
                }),
            },
        }),
    });
});
function et(e) {
    var t, n;
    let i,
        h,
        {
            channel: U,
            messages: et,
            unreadCount: en,
            showNewMessagesBar: er,
            messageDisplayCompact: ei,
            channelStream: el,
            uploads: ea,
            scrollManager: eo,
            specs: es,
            filterAfterTimestamp: ec,
            showingQuarantineBanner: eu,
            hideSummaries: ed,
            jumpBarClassName: ep,
        } = e,
        eh = N.default.getCurrentUser(),
        ef = () => eo.isInitialized() || et.ready,
        em = (0, L.$)(U),
        eg = et.length > 0 && (null == (t = et.first()) ? void 0 : t.isFirstMessageInForumPost(U)),
        eb = (0, s.ts)(U),
        ey = (0, l.e7)([E.Z], () => E.Z.shouldShowTopicsBar() && !ed),
        e_ = (0, O.P)(U.id),
        eC = (0, v.z)(U.id, X.zr),
        ev = (0, d.k)(U.id),
        ex = (0, k.Z)(),
        eO = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === C.pj.STRANGER_DANGER)
                    return (0, r.jsx)(j.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId(),
                    });
                else if (t.type === C.pj.LIKELY_ATO)
                    return (0, r.jsx)(p.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId(),
                    });
                else
                    return (0, r.jsx)(x.Y, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId(),
                    });
            return null;
        })(U, null != (n = null != e_ ? e_ : eC) ? n : ev),
        ej = U.isForumPost() && !eg ? (0, r.jsx)(m.Z, { postId: U.id }) : null,
        eE = (0, b.Z)(U.id),
        eS = (0, y.nw)(U);
    (0, W.Z)();
    let eI = null,
        eP = [],
        eZ = el.map((e, t) => {
            if (e.type === K.ys_.DIVIDER) {
                var n, i;
                let l = null != e.unreadId;
                return null != ec
                    ? null
                    : e.isSummaryDivider
                      ? (0, r.jsx)(I.Z, {
                            index: t,
                            item: e,
                            channel: U,
                            isBeforeGroup: null == e.content && $(el[t + 1]),
                        })
                      : (0, r.jsx)(
                            H.Z,
                            {
                                isUnread: l,
                                isBeforeGroup: null == e.content && $(el[t + 1]),
                                id: l ? Y.j1 : void 0,
                                children: e.content,
                            },
                            "divider-".concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t),
                        );
            }
            if (e.type === K.ys_.FORUM_POST_ACTION_BAR)
                return (0, r.jsx)(
                    m.Z,
                    {
                        parentChannelId: U.parent_id,
                        postId: U.id,
                        isLastItem: t + 1 === el.length,
                        isFirstMessage: !0,
                    },
                    "forum-post-action-bar-".concat(U.id),
                );
            if (
                e.type === K.ys_.MESSAGE_GROUP_BLOCKED ||
                e.type === K.ys_.MESSAGE_GROUP_IGNORED ||
                e.type === K.ys_.MESSAGE_GROUP_SPAMMER
            ) {
                let t;
                return (
                    (t =
                        e.type === K.ys_.MESSAGE_GROUP_BLOCKED
                            ? Q.t["+FcYMz"]
                            : e.type === K.ys_.MESSAGE_GROUP_IGNORED
                              ? Q.t.VFWjc3
                              : Q.t.xfkfTE),
                    (0, r.jsx)(
                        G.Z,
                        {
                            unreadId: Y.j1,
                            messages: e,
                            channel: U,
                            compact: ei,
                            collapsedReason: t,
                        },
                        e.key,
                    )
                );
            }
            if (null != ec && ec > e.content.timestamp.getTime() * w.Z.Millis.SECOND) return;
            e.type === K.ys_.MESSAGE && null == eI && (eI = e);
            let l = e.groupId === (null == eI ? void 0 : eI.groupId) ? eI.content.id : e.groupId,
                a = eS && e.content.isFirstMessageInForumPost(U),
                o = e.type === K.ys_.THREAD_STARTER_MESSAGE ? B.Ru : B.ZP;
            return (0, r.jsx)(
                o,
                {
                    compact: ei && !a,
                    channel: U,
                    message: e.content,
                    groupId: l,
                    flashKey: e.flashKey,
                    id: (0, M.p)(U.id, e.content.id),
                    isLastItem: t >= el.length - 1,
                    renderContentOnly: eE || a,
                },
                e.content.id,
            );
        });
    eP.push(...eZ);
    let eT = el[el.length - 1];
    if (
        (null != eh &&
            ea.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, D.J)(
                        U,
                        eT,
                        new P.ZP({
                            type: K.uaV.DEFAULT,
                            author: eh,
                        }),
                    );
                eP.push(
                    (0, r.jsx)(
                        ee,
                        {
                            file: e,
                            channel: U,
                            user: eh,
                            isGroupStart: n,
                            compact: ei,
                        },
                        "upload-".concat(e.id),
                    ),
                );
            }),
        et.hasMoreBefore && null == ec)
    ) {
        et.length > 0 &&
            eP.unshift(
                (0, r.jsx)(
                    "div",
                    {
                        style: {
                            height: Y.D4,
                            flex: "0 0 auto",
                        },
                    },
                    "buffer",
                ),
            );
        let { useReducedMotion: e } = c.Z;
        ((e && ef()) || !e) && eP.unshift((0, r.jsx)(V.ZP, J({ compact: ei }, es), "has-more"));
    }
    if (
        ((et.hasMoreBefore && null == ec) ||
            eP.unshift(
                (0, r.jsx)(
                    f.Z,
                    {
                        channel: U,
                        showingBanner: eu,
                    },
                    "empty-message",
                ),
            ),
        et.hasMoreAfter && eP.push((0, r.jsx)(V.ZP, J({ compact: ei }, es), "has-more-after")),
        !eu && em && ef() && eP.push((0, r.jsx)(z.Z, { channel: U })),
        en > 0 && er && ef())
    ) {
        let e,
            t,
            n = Z.ZP.getOldestUnreadTimestamp(U.id),
            l = 0 !== n ? n : R.default.extractTimestamp(U.id),
            o = (0, A.KC)(new Date(), new Date(l));
        if (
            (Z.ZP.isEstimated(U.id)
                ? ((e = o ? Q.t.wvtbbG : Q.t.tHqbtr), (t = Q.t.vaPWFR))
                : ((e = o ? Q.t.BctFHx : Q.t["3wXb9P"]), (t = Q.t["4H8ldH"])),
            eb && (0, s.tW)(U) && ex.includes(q.E.SUMMARIES))
        ) {
            let n = Z.ZP.ackMessageId(U.id),
                o = (0, S.q)(U.id, Z.ZP.getOldestUnreadMessageId(U.id));
            if (
                ((0, u.yw)(K.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: o,
                    num_unread_messages: en,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: ey,
                    summaries_enabled_for_channel: (0, s.Lp)(U),
                }),
                (0, s.Lp)(U))
            ) {
                let n = ey
                    ? Q.intl.format(t, { count: en })
                    : Q.intl.format(e, {
                          count: en,
                          timestamp: l,
                      });
                if (ey) {
                    let e =
                        o > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: Q.intl.format(t, { count: en }),
                                      }),
                                      (0, r.jsx)(g.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8,
                                          },
                                          height: 4,
                                          width: 4,
                                      }),
                                      (0, r.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: Q.intl.format(Q.t.CBftDQ, { count: o }),
                                      }),
                                  ],
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: "currentColor",
                                  children: n,
                              });
                    i = (0, r.jsx)(F.G5, {
                        scrollManager: eo,
                        content: e,
                        channel: U,
                    });
                } else {
                    let e = (0, r.jsx)("div", {
                        style: {
                            display: "flex",
                            textTransform: "none",
                            alignItems: "center",
                        },
                        children:
                            o > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: Q.intl.format(t, { count: en }),
                                          }),
                                          (0, r.jsx)(g.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8,
                                              },
                                              height: 4,
                                              width: 4,
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: Q.intl.format(Q.t.CBftDQ, { count: o }),
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(a.Text, {
                                      variant: "text-sm/medium",
                                      color: "currentColor",
                                      children: n,
                                  }),
                    });
                    i = (0, r.jsx)(F.LE, {
                        content: e,
                        channelId: U.id,
                    });
                }
            }
        } else
            ex.includes(q.E.NEW_MESSAGES) &&
                (i = (0, r.jsx)(F.LE, {
                    content: Q.intl.format(e, {
                        count: en,
                        timestamp: l,
                    }),
                    channelId: U.id,
                }));
    }
    if (
        (null == i &&
            (0, s.Lp)(U) &&
            ey &&
            ex.includes(q.E.SUMMARIES) &&
            (i = (0, r.jsx)(F.BO, {
                channel: U,
                scrollManager: eo,
            })),
        et.error)
    )
        h = (0, r.jsx)(F.Rp, {
            loading: et.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = U.id),
                    void o.Z.fetchMessages({
                        channelId: e,
                        limit: K.AQB,
                        truncate: !0,
                    })
                );
            },
            className: ep,
        });
    else if (et.hasMoreAfter && ef()) {
        let { jumpReturnTargetId: e } = et;
        h =
            et.loadingMore && et.jumpedToPresent
                ? (0, r.jsx)(F.DR, { className: ep })
                : null != e
                  ? (0, r.jsx)(F.DR, {
                        type: F.A7.REPLY,
                        onClick: () => {
                            o.Z.jumpToMessage({
                                channelId: U.id,
                                messageId: e,
                                flash: !0,
                            });
                        },
                        className: ep,
                    })
                  : (0, r.jsx)(F.DR, {
                        onClick: () =>
                            (function (e) {
                                o.Z.jumpToPresent(e.id, K.AQB);
                                let t = T.Z.getChannelId();
                                e.id === t && (0, _.Kh)(e.id);
                            })(U),
                        className: ep,
                    });
    }
    return {
        channelStreamMarkup: eP,
        newMessagesBar: i,
        jumpToPresentBar: h,
        forumPostActionBar: ej,
        safetyWarningBanner: eO,
    };
}
