n.r(t), n.d(t, { default: () => eL });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(877227),
    d = n(17928),
    c = n(43990),
    o = n(663417),
    u = n(768622),
    m = n(944791),
    h = n(456412),
    g = n(964486),
    p = n(726249),
    x = n(742589),
    v = n(210714),
    f = n(363195),
    y = n(875448),
    A = n(557740),
    I = n(859524),
    b = n(4106),
    j = n(105971);
function E(e) {
    return i.useCallback(async () => {
        j.k.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await b.A.fetchDehydrated({ isReloading: !0 }),
            await b.A.reloadICYMITab(),
            await b.A.getGuildChannelScores(),
            b.A.getRecommendedGuilds();
    }, [e]);
}
n(321073);
var k = n(919796),
    T = n(800319),
    _ = n(596720);
function w(e, t, n) {
    return t.type === _.Mm.MESSAGE
        ? t.message.id === t.message.channel_id && null != t.threadChannel
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  channelType: e.data.channel_type,
                  data: { kind: "forumThread", message: t.message, threadChannel: t.threadChannel },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
            : {
                  id: e.id,
                  timestamp: Date.now(),
                  channelType: e.data.channel_type,
                  data: {
                      kind: "message",
                      message: t.message,
                      mentioned: e.data.has_mention,
                      messageContext: e.data.message_context,
                  },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
        : t.type === _.Mm.ACTIVITY || t.type === _.Mm.CUSTOM_STATUS
          ? {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            }
          : t.type === _.Mm.GUILD_EVENT
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  data: { kind: "guildEvent", eventId: t.event_id },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
            : t.type === _.Mm.RECOMMENDED_GUILDS
              ? {
                    id: e.id,
                    timestamp: Date.now(),
                    data: { kind: "recommendedGuilds" },
                    score: e.score,
                    debugScore: JSON.stringify(e.score_components),
                    unread: n,
                }
              : null;
}
let C = 15 * n(927813).A.Millis.MINUTE;
var N = n(939249),
    S = n(698441),
    M = n(976860),
    G = n(378570),
    L = n(975732),
    D = n(681154),
    R = n(834730),
    U = n(51183),
    V = n(96098);
function O(e) {
    let { item: t } = e;
    if ("contentInventory" !== t.data.kind) return null;
    let { extra: n } = t.data.content;
    if ("custom_status_extra" !== n.type) return null;
    let i = {
            id: n.emoji_id?.toString() === "0" ? null : n.emoji_id,
            name: n.emoji_name ?? "",
            animated: n.emoji_animated,
        },
        l = null != i.id || i.name.length > 0,
        s = null != n.status && n.status.length > 0;
    return (0, a.jsx)("div", {
        className: V.kL,
        children: (0, a.jsx)("div", {
            className: V.Nr,
            children: (0, a.jsxs)("div", {
                className: V.Qs,
                children: [
                    l &&
                        (0, a.jsx)("div", {
                            className: V.qq,
                            children: (0, a.jsx)(U.A, { emoji: i, animate: !0, hideTooltip: !1 }),
                        }),
                    s &&
                        (0, a.jsx)(R.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: V.qS,
                            children: n.status,
                        }),
                ],
            }),
        }),
    });
}
var P = n(429913),
    H = n(287809),
    F = n(985018),
    Y = n(115323);
function z(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        l = n?.author_id,
        s = n?.content_type,
        r = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        c = (0, P.h)(r),
        o = (0, d.bG)([H.default], () => (null != l ? H.default.getUser(l) : null), [l]),
        u = s === D.ContentInventoryEntryType.TOP_GAME,
        m = c?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == c || null == o || null == m
        ? null
        : (0, a.jsx)("div", {
              className: Y.kL,
              children: (0, a.jsxs)("div", {
                  className: Y.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: c.name, className: Y.Gt }),
                      (0, a.jsxs)("div", {
                          className: Y.Vx,
                          children: [
                              (0, a.jsx)(R.E, { variant: "text-md/semibold", color: "text-strong", children: c.name }),
                              u &&
                                  (0, a.jsx)("div", {
                                      className: Y.qS,
                                      children: (0, a.jsx)(R.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: F.intl.string(F.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var J = n(177953),
    B = n(47167),
    Q = n(713654),
    X = n(435328),
    q = n(563312),
    K = n(826383),
    W = n(9448),
    Z = n(974930),
    $ = n(734057),
    ee = n(71393),
    et = n(165553);
function en(e) {
    let { eventId: t } = e,
        n = (0, d.bG)([S.Ay], () => S.Ay.getGuildScheduledEvent(t), [t]),
        l = (0, d.bG)([ee.A], () => ee.A.getGuild(n?.guild_id), [n]),
        s = (0, d.bG)([$.A], () => $.A.getChannel(n?.channel_id), [n]),
        r = (0, q.nh)(t, null),
        c = null != n && (0, S.Fd)(n),
        o = null != n ? (0, Z.G3)(n) : null,
        u = (0, K.A)(n?.guild_id, n?.id, o),
        m = r?.startTime.toISOString(),
        { startDateTimeString: h } = i.useMemo(
            () => (c ? { startDateTimeString: F.intl.string(F.t.TxqPQR) } : (0, Z.CC)(m ?? new Date().toISOString())),
            [m, c],
        ),
        g = (0, B.Ay)(s),
        p = null != n ? (0, W.oF)(n) : void 0,
        x = g ?? p,
        v = null != s ? (0, Q.gU)(s) : null;
    if (null == n || null == l) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: et.Qo,
        children: [
            (0, a.jsx)("div", {
                className: et.At,
                children: (0, a.jsx)(R.E, {
                    variant: "text-sm/semibold",
                    color: c ? "status-positive" : "text-brand",
                    children: h,
                }),
            }),
            (0, a.jsx)(R.E, { variant: "text-lg/semibold", className: f ? et.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(R.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: et.tj,
                    children: (0, X.l)(n.description ?? "", !0, { guildId: l.id }),
                }),
            (0, a.jsx)("hr", { className: et.Yl }),
            (0, a.jsxs)("div", {
                className: et.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: et.ik,
                        children: [
                            (0, a.jsx)(J.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(R.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: F.intl.format(F.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: et.ik,
                        children: [
                            null != v ? (0, a.jsx)(v, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(R.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: et.HA,
                                children: null != x ? (0, X.l)(x, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ea = n(232835),
    ei = n(837381),
    el = n(201275),
    es = n(384231),
    er = n(320095),
    ed = n(763754),
    ec = n(491182),
    eo = n(860227),
    eu = n(375199),
    em = n(699352),
    eh = n(715628),
    eg = n(752636),
    ep = n(352043),
    ex = n(268719),
    ev = n(935208),
    ef = n(652215),
    ey = n(372912),
    eA = n(701628);
let eI = i.memo(function (e) {
    let {
            message: t,
            className: n,
            onContextMenu: i,
            onClick: l,
            hideSimpleEmbedContent: r = !0,
            channel: c,
            isGroupStart: o,
            animateAvatar: u,
            subscribeToComponentDispatch: m,
            renderThreadAccessory: h,
            ...g
        } = e,
        p = t.type === ef.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        x = t.isFirstMessageInForumPost(c),
        v = (0, es.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: f,
            hasSpoilerEmbeds: y,
            hasBailedAst: A,
        } = (0, eu.A)(t, {
            hideSimpleEmbedContent: r,
            allowList: x || v,
            allowHeading: x || v,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, ei.rm)(t.id),
        b = (0, ed.Ay)(t),
        j = (0, d.bG)(
            [$.A],
            () => t.hasFlag(ef.pr7.HAS_THREAD) && $.A.getChannel(ev.default.castMessageIdAsChannelId(t.id)),
        ),
        E = (0, el.$7)({ guildId: c.guild_id, roleId: b.iconRoleId }),
        k = (0, eo.fF)(t),
        T = (0, eo.ZD)(t);
    return (0, a.jsx)(ec.A, {
        compact: !1,
        className: s()(n, ey.i, { [eA.M1]: (0, er.ec)(t), [eA.XN]: p }),
        disableInteraction: p,
        childrenExecutedCommand: (0, ex.A)(t, c, !1),
        childrenHeader: (0, eg.A)({
            message: t,
            channel: c,
            author: b,
            guildId: c.guild_id,
            compact: !1,
            animateAvatar: u,
            isGroupStart: !0,
            roleIcon: E,
            hideTimestamp: !0,
            hideGuildTag: !1,
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, em.J)(e, y, A),
        childrenMessageContent: (0, eh.A)(e, f),
        childrenSystemMessage: (0, ep.A)({ ...e, disableInteraction: p }),
        onContextMenu: i,
        onClick: l,
        hasThread: h && null != j && t.hasFlag(ef.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": k,
        "aria-describedby": T,
        author: b,
        ...I,
        ...g,
    });
});
function eb(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: l,
            title: s,
        } = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return { channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0 };
                case "forumThread":
                    return { channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: void 0 };
                default:
                    return { channelId: void 0, messageIds: [], title: void 0 };
            }
        }, [t]),
        r = (0, d.bG)([$.A], () => (null != n ? $.A.getChannel(n) : null), [n]),
        c = (0, d.bG)([ee.A], () => (r?.guild_id != null ? ee.A.getGuild(r.guild_id) : null), [r]),
        o = (0, d.yK)(
            [A.A, ea.A],
            () => (null == n ? [] : l.map((e) => A.A.getMessage(e) ?? ea.A.getMessage(n, e)).filter((e) => null != e)),
            [n, l],
        );
    return null == r || null == c || 0 === o.length
        ? null
        : (0, a.jsxs)("div", {
              className: et.kL,
              children: [
                  null != s
                      ? (0, a.jsx)("div", {
                            className: et.gn,
                            children: (0, a.jsx)("div", { className: et.DD, children: s }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: et.MJ,
                      children: o.map((e) =>
                          (0, a.jsx)(
                              eI,
                              {
                                  channel: r,
                                  message: e,
                                  renderThreadAccessory: !1,
                                  disableReactionCreates: !1,
                                  disableReactionUpdates: !1,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function ej(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(en, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(eb, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case D.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(O, { item: t });
                case D.ContentInventoryEntryType.PLAYED_GAME:
                case D.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(z, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var eE = n(548118),
    ek = n(995273),
    eT = n(950156);
function e_(e) {
    let { item: t } = e,
        n = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "guildEvent":
                case "forumThread":
                    return "guild";
                case "contentInventory":
                    return "user";
                default:
                    return "unknown";
            }
        }, [t]),
        l = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return t.data.message.channel_id;
                case "forumThread":
                    return t.data.threadChannel.id;
                default:
                    return;
            }
        }, [t]),
        s = i.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = S.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        r = i.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        c = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return ev.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return ev.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        o = (0, d.bG)([$.A], () => $.A.getChannel(l), [l]),
        u = (0, B.Ay)(o),
        m = o?.guild_id ?? s,
        h = (0, d.bG)([ee.A], () => (null != m ? ee.A.getGuild(m) : null), [m]),
        g = (0, d.bG)([H.default], () => (null != r ? H.default.getUser(r) : null), [r]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: eT.kL,
              children: (0, a.jsxs)("div", {
                  className: eT.wx,
                  children: [
                      (() => {
                          if ("guild" === n && null != h)
                              return (0, a.jsx)(eE.Ay, {
                                  guild: h,
                                  size: "Medium",
                                  active: !1,
                                  showBadge: !1,
                                  textScale: 1,
                                  showTooltip: !1,
                                  tooltipPosition: "top",
                                  animate: !1,
                              });
                          if ("user" === n && null != g) {
                              let e = g.getAvatarURL(void 0, 50);
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: eT.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: eT.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: eT.$,
                                  children: (0, a.jsxs)("div", {
                                      className: eT.gH,
                                      children: [
                                          "guild" === n && null != h
                                              ? (0, a.jsx)("div", { className: eT.DD, children: h.name })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)("div", { className: eT.DD, children: g.username })
                                                : null,
                                          (0, a.jsx)("div", { className: eT.vE, children: (0, ek.jb)(c) }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (() => {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === ef.rbe.GUILD_ANNOUNCEMENT)
                                                  return F.intl.string(F.t["8P08G9"]);
                                              return F.intl.string(F.t.hMFMY9);
                                          case "guildEvent":
                                              return F.intl.string(F.t["6pFsLQ"]);
                                          case "forumThread":
                                              return F.intl.string(F.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case D.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return F.intl.string(F.t.fxOLPR);
                                                  case D.ContentInventoryEntryType.TOP_GAME:
                                                  case D.ContentInventoryEntryType.PLAYED_GAME:
                                                      return F.intl.string(F.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, a.jsx)("div", {
                                          className: eT.VA,
                                          children: (0, a.jsx)("span", { className: eT.o4, children: e }),
                                      });
                                  if (null != o && null != e) {
                                      let t = (0, Q.gU)(o, h);
                                      return (0, a.jsxs)("div", {
                                          className: eT.VA,
                                          children: [
                                              (0, a.jsx)("span", { className: eT.o4, children: e }),
                                              (0, a.jsx)("span", {
                                                  className: eT.o4,
                                                  children: F.intl.string(F.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)("span", {
                                                  className: eT.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: eT.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: eT.VA,
                                            children: (0, a.jsx)("span", { className: eT.o4, children: e }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
var ew = n(709393);
function eC(e) {
    let { item: t } = e,
        n = i.useCallback(
            (e) => {
                if (
                    null ==
                    e.target.closest(
                        'img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]',
                    )
                )
                    switch (t.data.kind) {
                        case "message":
                            (0, G.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = S.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, M.pX)(ef.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, G.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, L.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(N.D, {
        className: ew.k,
        onClick: n,
        children: [
            (0, a.jsx)(e_, { item: t }),
            (0, a.jsx)("div", { className: ew.o, children: (0, a.jsx)(ej, { item: t }) }),
        ],
    });
}
var eN = n(317039);
let eS = function (e) {
    let t,
        n,
        l,
        s,
        r,
        { scrollContainerRef: c } = e,
        o = (0, d.bG)([A.A], () => A.A.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, d.bG)([A.A], () => A.A.hasNewContent(), []) },
        m = i.useRef(null),
        [h, g] = i.useState(!1),
        {
            data: p,
            loading: x,
            isRefreshing: v,
            handleOnRefresh: f,
            viewabilityConfigCallbackPairs: N,
        } = (function (e) {
            let { showDot: t, notificationItem: n } = e,
                [a, l] = i.useState(!1),
                {
                    unreadItems: s,
                    readItems: r,
                    allUnreadItemsHydrated: c,
                } = (function () {
                    let e = (0, d.bG)([A.A], () => A.A.getUnreadDisplayItems()),
                        t = (0, d.bG)([A.A], () => A.A.getReadDisplayItems()),
                        n = (0, d.bG)([A.A], () => A.A.getNextIndexToHydrate()),
                        a = (0, d.cf)([A.A], () => A.A.getHydratedItems()),
                        l = (0, d.bG)([A.A], () => A.A.getMissingItems());
                    i.useEffect(() => {
                        let e = Date.now() + t.length;
                        b.A.ackGravityItems(t.map((t) => ({ id: t.id, timestamp: e-- }), !0));
                    }, [t]);
                    let s = [],
                        r = [],
                        c = 0;
                    for (let t = 0; t < e.length && !(c >= n); t++) {
                        let n = e[t];
                        if ((c++, l[n.id])) continue;
                        let i = a[n.id];
                        if (
                            (null == i &&
                                n.type === _.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = w(n, i, !0);
                            null != e && s.push(e);
                        }
                    }
                    for (let e = 0; e < t.length && !(c >= n); e++) {
                        let n = t[e];
                        if ((c++, l[n.id])) continue;
                        let i = a[n.id];
                        if (
                            (null == i &&
                                n.type === _.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = w(n, i, !1);
                            null != e && r.push(e);
                        }
                    }
                    return { unreadItems: s, readItems: r, allUnreadItemsHydrated: n >= e.length };
                })(),
                o = (0, d.bG)([A.A], () => A.A.getVersion(), []),
                u = (0, d.bG)([A.A], () => !(A.A.isFirstPageHydrated() && o > 0));
            i.useEffect(() => {
                null != A.A.getLoadId() && j.k.trackFeedShown({ homeSessionId: "gravity" });
            }, [o]);
            let m = (0, d.bG)([A.A], () => A.A.isRefreshing(), []),
                h = (0, d.bG)([A.A], () => A.A.isHydrating(), []),
                [g, p] = i.useState([]),
                { loadId: x, lastScrollEventTimestamp: v } = (0, d.cf)([A.A], () => ({
                    loadId: A.A.getLoadId(),
                    lastScrollEventTimestamp: A.A.lastScrollEvent(),
                })),
                f = g
                    .filter((e) => {
                        let { item: t } = e;
                        return !T.P.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                N = (0, k.A)(f);
            i.useEffect(() => {
                if (m || u || null == N || null == f || f === N) return;
                let e = Date.now();
                e - v > C && (b.A.gravityScrollEvent(e), j.k.trackFeedFirstScrollStarted());
            }, [m, v, N, f, x, u]);
            let S = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && l(!0), 0 === t.length)) return;
                        p(t);
                        let n = [],
                            a = (0, I.P0)(t),
                            i = Date.now();
                        for (let e = a.length - 1; e >= 0; e--) {
                            let t = a[e];
                            null != t && n.push({ id: t.id, type: (0, _.xG)(t), timestamp: i++ });
                        }
                        n.length > 0 && b.A.ackGravityItems(n, !0),
                            j.k.trackItemShortImpression(
                                t,
                                a.map((e) => ({ id: e.id, type: (0, _.xG)(e) })),
                                o,
                            );
                    },
                    [o, l],
                ),
                M = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = (0, I.P0)(t);
                        j.k.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, _.xG)(e) })),
                            o,
                        ),
                            b.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !T.P.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: (0, I.px)(t),
                                            triggerType: "list",
                                            itemFeedIndex: n,
                                            itemScore: t.score ?? null,
                                            itemChannelType: t.channelType ?? null,
                                            isInitiallyVisible: !1,
                                        };
                                    }),
                            );
                    },
                    [o],
                ),
                G = i.useCallback((e) => {
                    let { viewableItems: t } = e;
                    b.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !T.P.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: (0, I.px)(t),
                                    triggerType: "list",
                                    itemFeedIndex: n,
                                    itemScore: t.score ?? null,
                                    itemChannelType: t.channelType ?? null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
                }, []),
                L = i.useMemo(
                    () => [
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 100,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: S,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 1e3,
                            },
                            onViewableItemsChanged: M,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: G,
                        },
                    ],
                    [S, M, G],
                );
            i.useEffect(() => {
                b.A.openICYMITab();
            }, []);
            let D = E(t),
                R = (y.zF.useConfig({ location: "icymi_feed" }).enabled, !1),
                { data: U, stickyHeaderIndices: V } = i.useMemo(() => {
                    let e = [];
                    return (
                        u &&
                            null != n &&
                            n.type === _.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: (0, I.YM)(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        u
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (R &&
                                  e.push({
                                      id: "sunsetBanner",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "sunsetBanner" },
                                  }),
                              s.forEach((t) => {
                                  (0, I.yx)(t) || e.push(t);
                              }),
                              c && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              r.length > 0 &&
                                  r.forEach((t) => {
                                      (0, I.yx)(t) || e.push(t);
                                  }),
                              h &&
                                  e.push({
                                      id: "bottomLoading",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "bottomLoading" },
                                  })),
                        { data: e, stickyHeaderIndices: [] }
                    );
                }, [u, n, s, c, r, h, R]);
            return {
                data: U,
                loading: u,
                version: o,
                visibleItemIds: g,
                endVisible: a,
                isRefreshing: m,
                handleOnRefresh: D,
                stickyHeaderIndices: V,
                viewabilityConfigCallbackPairs: L,
            };
        })({ showDot: u, notificationItem: o }),
        S = E();
    i.useEffect(
        () => () => {
            S();
        },
        [S],
    );
    let M = (0, d.bG)([A.A], () => A.A.hasNewContent(), []),
        G = (0, d.bG)([A.A], () => A.A.isHydrating(), []),
        L = i.useMemo(() => N[0].onViewableItemsChanged, [N]),
        { registerItemRef: D } =
            ((t = i.useRef(null)),
            (n = i.useRef(new Map())),
            (l = i.useRef(new Set())),
            (s = i.useRef(L)),
            (r = i.useRef(p)),
            i.useEffect(() => {
                (s.current = L), (r.current = p);
            }, [L, p]),
            i.useEffect(
                () => (
                    (t.current = new IntersectionObserver(
                        (e) => {
                            let t = !1;
                            if (
                                (e.forEach((e) => {
                                    let n = e.target.getAttribute("data-item-id");
                                    null != n &&
                                        (e.isIntersecting && e.intersectionRatio >= 0.5
                                            ? l.current.has(n) || (l.current.add(n), (t = !0))
                                            : l.current.has(n) && (l.current.delete(n), (t = !0)));
                                }),
                                t)
                            ) {
                                let e = r.current,
                                    t = Array.from(l.current)
                                        .map((t) => {
                                            let n = e.findIndex((e) => e.id === t);
                                            return n >= 0 ? { index: n, item: e[n] } : null;
                                        })
                                        .filter((e) => null !== e)
                                        .sort((e, t) => e.index - t.index);
                                s.current({ viewableItems: t });
                            }
                        },
                        { root: c?.current ?? null, threshold: [0, 0.5, 1], rootMargin: "0px" },
                    )),
                    () => {
                        t.current?.disconnect();
                    }
                ),
                [c],
            ),
            {
                registerItemRef: i.useCallback((e, a) => {
                    if (null != a) n.current.set(e, a), null != t.current && t.current.observe(a);
                    else {
                        let a = n.current.get(e);
                        null != a && (t.current?.unobserve(a), n.current.delete(e));
                    }
                }, []),
            }),
        R = i.useMemo(() => p.some((e) => "end" === e.data.kind), [p]),
        U = i.useCallback(() => {
            if (R) return;
            let e = c.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                h ||
                x ||
                G ||
                (g(!0),
                (0, I._x)().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [x, h, G, R, c]);
    i.useEffect(() => {
        let e = c.current;
        if (null != e)
            return (
                e.addEventListener("scroll", U),
                () => {
                    e.removeEventListener("scroll", U);
                }
            );
    }, [U, c]);
    let V = i.useCallback(() => {
            c.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [c]),
        O = i.useCallback(() => {
            f(), V();
        }, [f, V]),
        P = i.useCallback(
            (e) =>
                "loading" === e.data.kind
                    ? (0, a.jsx)(
                          "div",
                          {
                              style: { padding: "32px", textAlign: "center" },
                              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
                          },
                          e.id,
                      )
                    : "bottomLoading" === e.data.kind
                      ? (0, a.jsx)(
                            "div",
                            {
                                style: { padding: "16px", textAlign: "center" },
                                children: (0, a.jsx)("div", { children: "Loading more..." }),
                            },
                            e.id,
                        )
                      : "end" === e.data.kind
                        ? (0, a.jsx)(
                              "div",
                              {
                                  style: { padding: "32px", textAlign: "center", color: "#949ba4" },
                                  children: (0, a.jsx)("div", { children: "You're all caught up!" }),
                              },
                              e.id,
                          )
                        : (0, a.jsx)(
                              "div",
                              { ref: (t) => D(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(eC, { item: e }) },
                              e.id,
                          ),
            [D],
        );
    return x && 0 === p.length
        ? (0, a.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, a.jsxs)("div", {
              className: eN.k,
              children: [
                  M &&
                      !v &&
                      (0, a.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, a.jsx)("button", {
                              onClick: O,
                              style: {
                                  background: "#5865f2",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "16px",
                                  padding: "8px 16px",
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  fontWeight: 500,
                              },
                              children: "New content available",
                          }),
                      }),
                  (0, a.jsxs)("div", {
                      ref: m,
                      className: eN.j,
                      children: [
                          p.map((e) => P(e)),
                          !R &&
                              (h || G) &&
                              (0, a.jsx)("div", {
                                  style: { padding: "16px", textAlign: "center" },
                                  children: (0, a.jsx)("div", {
                                      style: { color: "#949ba4" },
                                      children: "Loading more...",
                                  }),
                              }),
                      ],
                  }),
              ],
          });
};
var eM = n(852456),
    eG = n(964623);
let eL = (0, h.A)(function (e) {
    let { width: t } = e,
        n = (0, y.c)("ICYMIPage");
    i.useEffect(() => {
        n || (0, r.pX)(ef.BVt.ME);
    }, [n]),
        i.useLayoutEffect(() => {
            n && m.I(ef.BVt.ICYMI);
        }, [n]),
        (0, g.Ay)(() => {
            n && (0, v.d)("icymi");
        });
    let l = (0, d.bG)([f.A], () => f.A.theme),
        h = (0, d.bG)([A.A], () => A.A.isRefreshing()),
        b = i.useRef(null);
    (0, p.HU)({ location: F.intl.string(F.t["jnXV/V"]) });
    let [j, k] = i.useState(!1);
    i.useEffect(() => {
        let e = (e) => {
                e.metaKey && k(!0);
            },
            t = (e) => {
                "Meta" === e.key && k(!1);
            },
            n = () => {
                k(!1);
            };
        return (
            window.addEventListener("keydown", e),
            window.addEventListener("keyup", t),
            window.addEventListener("blur", n),
            () => {
                window.removeEventListener("keydown", e),
                    window.removeEventListener("keyup", t),
                    window.removeEventListener("blur", n);
            }
        );
    }, []);
    let T = E(),
        _ = y.f8.useConfig({ location: "icymi page" }).enabled,
        w = i.useCallback(
            async (e) => {
                e.metaKey && _
                    ? await (0, I.be)(ef.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await T();
            },
            [T, _],
        ),
        C = j && _ ? F.intl.string(F.t.YplSn2) : F.intl.string(F.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: s()(eG.TE, eM.kL),
              children: [
                  (0, a.jsx)(c.N, {
                      theme: l,
                      children: (e) =>
                          (0, a.jsxs)(x.A, {
                              className: e,
                              toolbar: (0, a.jsx)(x.A.Icon, {
                                  icon: o.f,
                                  tooltip: C,
                                  onClick: w,
                                  disabled: h,
                                  "aria-label": C,
                              }),
                              children: [
                                  (0, a.jsx)(x.A.Icon, { icon: u.g, "aria-hidden": !0 }),
                                  (0, a.jsx)(x.A.Title, { children: F.intl.string(F.t["jnXV/V"]) }),
                                  (0, a.jsx)(x.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: eM.HH,
                                          children: F.intl.string(F.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: b,
                      className: s()(eG.Qs, eM.Qs),
                      children: (0, a.jsx)(eS, { scrollContainerRef: b }),
                  }),
              ],
          })
        : null;
});
