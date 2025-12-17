n.d(t, { Z: () => et }), n(539854), n(388685), n(290780);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(904245),
    s = n(902840),
    c = n(607070),
    u = n(367907),
    d = n(605984),
    p = n(453470),
    f = n(40330),
    h = n(600084),
    m = n(62764),
    g = n(79712),
    b = n(736052),
    C = n(216572),
    y = n(359110),
    v = n(359119),
    x = n(13279),
    O = n(248789),
    E = n(88101),
    j = n(576954),
    S = n(765104),
    _ = n(122707),
    P = n(779836),
    I = n(23750),
    Z = n(306680),
    T = n(944486),
    N = n(594174),
    A = n(55935),
    w = n(70956),
    M = n(709054),
    R = n(534091),
    L = n(554838),
    D = n(481369),
    k = n(186877),
    U = n(294218),
    V = n(534469),
    F = n(993397),
    H = n(511010),
    B = n(524444),
    G = n(977391),
    z = n(921235),
    W = n(97352),
    q = n(226027),
    K = n(959517),
    Y = n(981631),
    X = n(134612),
    J = n(388032);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function $(e) {
    return null != e && e.type === Y.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = r.memo(function (e) {
    let { file: t, channel: n, user: r, isGroupStart: l, compact: a } = e;
    return (0, i.jsx)(U.Z, {
        compact: a,
        isGroupStart: l,
        channel: n,
        message: new I.ZP({
            id: t.id,
            key: "pending-upload-".concat(t.id),
            type: Y.uaV.DEFAULT,
            author: r,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, i.jsx)(f.p, {
                    channelId: n.id,
                    file: t,
                }),
            },
        }),
    });
});
function et(e) {
    var t, n;
    let r,
        f,
        {
            channel: U,
            messages: et,
            unreadCount: en,
            showNewMessagesBar: ei,
            messageDisplayCompact: er,
            channelStream: el,
            uploads: ea,
            scrollManager: eo,
            specs: es,
            filterAfterTimestamp: ec,
            showingQuarantineBanner: eu,
            hideSummaries: ed,
            jumpBarClassName: ep,
        } = e,
        ef = N.default.getCurrentUser(),
        eh = () => eo.isInitialized() || et.ready,
        em = (0, k.$)(U),
        eg = et.length > 0 && (null == (t = et.first()) ? void 0 : t.isFirstMessageInForumPost(U)),
        eb = (0, s.ts)(U),
        eC = (0, l.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !ed),
        ey = (0, E.P)(U.id),
        ev = (0, x.z)(U.id, X.zr),
        ex = (0, d.k)(U.id),
        eO = (0, D.Z)(),
        eE = (function (e, t) {
            if (e.isDM() && null != t)
                if (t.type === v.pj.STRANGER_DANGER)
                    return (0, i.jsx)(j.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId(),
                    });
                else if (t.type === v.pj.LIKELY_ATO)
                    return (0, i.jsx)(p.M, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId(),
                    });
                else
                    return (0, i.jsx)(O.Y, {
                        channelId: e.id,
                        warningId: t.id,
                        senderId: e.getRecipientId(),
                    });
            return null;
        })(U, null != (n = null != ey ? ey : ev) ? n : ex),
        ej = U.isForumPost() && !eg ? (0, i.jsx)(m.Z, { postId: U.id }) : null,
        eS = (0, b.Z)(U.id),
        e_ = (0, C.nw)(U);
    (0, W.Z)();
    let eP = null,
        eI = [],
        eZ = el.map((e, t) => {
            if (e.type === Y.ys_.DIVIDER) {
                var n, r;
                let l = null != e.unreadId;
                return null != ec
                    ? null
                    : e.isSummaryDivider
                      ? (0, i.jsx)(P.Z, {
                            index: t,
                            item: e,
                            channel: U,
                            isBeforeGroup: null == e.content && $(el[t + 1]),
                        })
                      : (0, i.jsx)(
                            H.Z,
                            {
                                isUnread: l,
                                isBeforeGroup: null == e.content && $(el[t + 1]),
                                id: l ? K.j1 : void 0,
                                children: e.content,
                            },
                            "divider-".concat(null != (r = null != (n = e.contentKey) ? n : e.unreadId) ? r : t),
                        );
            }
            if (e.type === Y.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(
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
                e.type === Y.ys_.MESSAGE_GROUP_BLOCKED ||
                e.type === Y.ys_.MESSAGE_GROUP_IGNORED ||
                e.type === Y.ys_.MESSAGE_GROUP_SPAMMER
            ) {
                let t;
                return (
                    (t =
                        e.type === Y.ys_.MESSAGE_GROUP_BLOCKED
                            ? J.t["+FcYM/"]
                            : e.type === Y.ys_.MESSAGE_GROUP_IGNORED
                              ? J.t["VFWjc+"]
                              : J.t.xfkfTK),
                    (0, i.jsx)(
                        F.Z,
                        {
                            unreadId: K.j1,
                            messages: e,
                            channel: U,
                            compact: er,
                            collapsedReason: t,
                        },
                        e.key,
                    )
                );
            }
            if (null != ec && ec > e.content.timestamp.getTime() * w.Z.Millis.SECOND) return;
            e.type === Y.ys_.MESSAGE && null == eP && (eP = e);
            let l = e.groupId === (null == eP ? void 0 : eP.groupId) ? eP.content.id : e.groupId,
                a = e_ && e.content.isFirstMessageInForumPost(U),
                o = e.type === Y.ys_.THREAD_STARTER_MESSAGE ? V.Ru : V.ZP;
            return (0, i.jsx)(
                o,
                {
                    compact: er && !a,
                    channel: U,
                    message: e.content,
                    groupId: l,
                    flashKey: e.flashKey,
                    id: (0, R.p)(U.id, e.content.id),
                    isLastItem: t >= el.length - 1,
                    renderContentOnly: eS || a,
                },
                e.content.id,
            );
        });
    eI.push(...eZ);
    let eT = el[el.length - 1];
    if (
        (null != ef &&
            ea.forEach((e, t) => {
                let n =
                    0 === t &&
                    (0, L.J)(
                        U,
                        eT,
                        new I.ZP({
                            type: Y.uaV.DEFAULT,
                            author: ef,
                        }),
                    );
                eI.push(
                    (0, i.jsx)(
                        ee,
                        {
                            file: e,
                            channel: U,
                            user: ef,
                            isGroupStart: n,
                            compact: er,
                        },
                        "upload-".concat(e.id),
                    ),
                );
            }),
        et.hasMoreBefore && null == ec)
    ) {
        et.length > 0 &&
            eI.unshift(
                (0, i.jsx)(
                    "div",
                    {
                        style: {
                            height: K.D4,
                            flex: "0 0 auto",
                        },
                    },
                    "buffer",
                ),
            );
        let { useReducedMotion: e } = c.Z;
        ((e && eh()) || !e) && eI.unshift((0, i.jsx)(G.ZP, Q({ compact: er }, es), "has-more"));
    }
    if (
        ((et.hasMoreBefore && null == ec) ||
            eI.unshift(
                (0, i.jsx)(
                    h.Z,
                    {
                        channel: U,
                        showingBanner: eu,
                    },
                    "empty-message",
                ),
            ),
        et.hasMoreAfter && eI.push((0, i.jsx)(G.ZP, Q({ compact: er }, es), "has-more-after")),
        !eu && em && eh() && eI.push((0, i.jsx)(z.Z, { channel: U })),
        en > 0 && ei && eh())
    ) {
        let e,
            t,
            n = Z.ZP.getOldestUnreadTimestamp(U.id),
            l = 0 !== n ? n : M.default.extractTimestamp(U.id),
            o = (0, A.KC)(new Date(), new Date(l));
        if (
            (Z.ZP.isEstimated(U.id)
                ? ((e = o ? J.t.wvtbbG : J.t.tHqbtg), (t = J.t.vaPWFe))
                : ((e = o ? J.t["BctFH/"] : J.t["3wXb9P"]), (t = J.t["4H8ldG"])),
            eb && (0, s.tW)(U) && eO.includes(q.E.SUMMARIES))
        ) {
            let n = Z.ZP.ackMessageId(U.id),
                o = (0, _.q)(U.id, Z.ZP.getOldestUnreadMessageId(U.id));
            if (
                ((0, u.yw)(Y.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: o,
                    num_unread_messages: en,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: eC,
                    summaries_enabled_for_channel: (0, s.Lp)(U),
                }),
                (0, s.Lp)(U))
            ) {
                let n = eC
                    ? J.intl.format(t, { count: en })
                    : J.intl.format(e, {
                          count: en,
                          timestamp: l,
                      });
                if (eC) {
                    let e =
                        o > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: J.intl.format(t, { count: en }),
                                      }),
                                      (0, i.jsx)(g.Z, {
                                          style: {
                                              paddingLeft: 8,
                                              paddingRight: 8,
                                          },
                                          height: 4,
                                          width: 4,
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: "text-sm/medium",
                                          color: "currentColor",
                                          children: J.intl.format(J.t.CBftDc, { count: o }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: "currentColor",
                                  children: n,
                              });
                    r = (0, i.jsx)(B.G5, {
                        scrollManager: eo,
                        content: e,
                        channel: U,
                    });
                } else {
                    let e = (0, i.jsx)("div", {
                        style: {
                            display: "flex",
                            textTransform: "none",
                            alignItems: "center",
                        },
                        children:
                            o > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: J.intl.format(t, { count: en }),
                                          }),
                                          (0, i.jsx)(g.Z, {
                                              style: {
                                                  paddingLeft: 8,
                                                  paddingRight: 8,
                                              },
                                              height: 4,
                                              width: 4,
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "currentColor",
                                              children: J.intl.format(J.t.CBftDc, { count: o }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)(a.Text, {
                                      variant: "text-sm/medium",
                                      color: "currentColor",
                                      children: n,
                                  }),
                    });
                    r = (0, i.jsx)(B.LE, {
                        content: e,
                        channelId: U.id,
                    });
                }
            }
        } else
            eO.includes(q.E.NEW_MESSAGES) &&
                (r = (0, i.jsx)(B.LE, {
                    content: J.intl.format(e, {
                        count: en,
                        timestamp: l,
                    }),
                    channelId: U.id,
                }));
    }
    if (
        (null == r &&
            (0, s.Lp)(U) &&
            eC &&
            eO.includes(q.E.SUMMARIES) &&
            (r = (0, i.jsx)(B.BO, {
                channel: U,
                scrollManager: eo,
            })),
        et.error)
    )
        f = (0, i.jsx)(B.Rp, {
            loading: et.loadingMore,
            onClick: () => {
                var e;
                return (
                    (e = U.id),
                    void o.Z.fetchMessages({
                        channelId: e,
                        limit: Y.AQB,
                        truncate: !0,
                    })
                );
            },
            className: ep,
        });
    else if (et.hasMoreAfter && eh()) {
        let { jumpReturnTargetId: e } = et;
        f =
            et.loadingMore && et.jumpedToPresent
                ? (0, i.jsx)(B.DR, { className: ep })
                : null != e
                  ? (0, i.jsx)(B.DR, {
                        type: B.A7.REPLY,
                        onClick: () => {
                            o.Z.jumpToMessage({
                                channelId: U.id,
                                messageId: e,
                                flash: !0,
                            });
                        },
                        className: ep,
                    })
                  : (0, i.jsx)(B.DR, {
                        onClick: () =>
                            (function (e) {
                                o.Z.jumpToPresent(e.id, Y.AQB);
                                let t = T.Z.getChannelId();
                                e.id === t && (0, y.Kh)(e.id);
                            })(U),
                        className: ep,
                    });
    }
    return {
        channelStreamMarkup: eI,
        newMessagesBar: r,
        jumpToPresentBar: f,
        forumPostActionBar: ej,
        safetyWarningBanner: eE,
    };
}
