"use strict";
n.r(t), n.d(t, { default: () => eD });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(877227),
    o = n(17928),
    d = n(43990),
    c = n(663417),
    _ = n(768622),
    u = n(944791),
    m = n(456412),
    g = n(964486),
    f = n(726249),
    p = n(742589),
    h = n(210714),
    x = n(363195),
    b = n(875448),
    A = n(557740),
    v = n(859524),
    C = n(4106),
    y = n(105971);
function T(e) {
    return i.useCallback(async () => {
        y.k.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await C.A.fetchDehydrated({ isReloading: !0 }),
            await C.A.reloadICYMITab(),
            await C.A.getGuildChannelScores(),
            C.A.getRecommendedGuilds();
    }, [e]);
}
n(321073);
var I = n(919796),
    k = n(800319),
    E = n(596720);
function w(e, t, n) {
    return t.type === E.Mm.MESSAGE
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
        : t.type === E.Mm.ACTIVITY || t.type === E.Mm.CUSTOM_STATUS
          ? {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            }
          : t.type === E.Mm.GUILD_EVENT
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  data: { kind: "guildEvent", eventId: t.event_id },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
            : t.type === E.Mm.RECOMMENDED_GUILDS
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
let j = 15 * n(927813).A.Millis.MINUTE;
var S = n(939249),
    M = n(698441),
    R = n(976860),
    N = n(378570),
    D = n(975732),
    G = n(681154),
    L = n(834730),
    P = n(51183),
    O = n(96098);
function U(e) {
    let { item: t } = e;
    if ("contentInventory" !== t.data.kind) return null;
    let { extra: n } = t.data.content;
    if ("custom_status_extra" !== n.type) return null;
    let i = {
            id: n.emoji_id?.toString() === "0" ? null : n.emoji_id,
            name: n.emoji_name ?? "",
            animated: n.emoji_animated,
        },
        r = null != i.id || i.name.length > 0,
        s = null != n.status && n.status.length > 0;
    return (0, a.jsx)("div", {
        className: O.kL,
        children: (0, a.jsx)("div", {
            className: O.Nr,
            children: (0, a.jsxs)("div", {
                className: O.Qs,
                children: [
                    r &&
                        (0, a.jsx)("div", {
                            className: O.qq,
                            children: (0, a.jsx)(P.A, { emoji: i, animate: !0, hideTooltip: !1 }),
                        }),
                    s &&
                        (0, a.jsx)(L.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: O.qS,
                            children: n.status,
                        }),
                ],
            }),
        }),
    });
}
var H = n(429913),
    V = n(287809),
    F = n(985018),
    B = n(115323);
function Q(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        r = n?.author_id,
        s = n?.content_type,
        l = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        d = (0, H.h)(l),
        c = (0, o.bG)([V.default], () => (null != r ? V.default.getUser(r) : null), [r]),
        _ = s === G.ContentInventoryEntryType.TOP_GAME,
        u = d?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == d || null == c || null == u
        ? null
        : (0, a.jsx)("div", {
              className: B.kL,
              children: (0, a.jsxs)("div", {
                  className: B.Nr,
                  children: [
                      (0, a.jsx)("img", { src: u, alt: d.name, className: B.Gt }),
                      (0, a.jsxs)("div", {
                          className: B.Vx,
                          children: [
                              (0, a.jsx)(L.E, { variant: "text-md/semibold", color: "text-strong", children: d.name }),
                              _ &&
                                  (0, a.jsx)("div", {
                                      className: B.qS,
                                      children: (0, a.jsx)(L.E, {
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
var Y = n(177953),
    z = n(47167),
    X = n(713654),
    W = n(435328),
    q = n(563312),
    K = n(826383),
    J = n(9448),
    Z = n(974930),
    $ = n(734057),
    ee = n(71393),
    et = n(165553);
function en(e) {
    let { eventId: t } = e,
        n = (0, o.bG)([M.Ay], () => M.Ay.getGuildScheduledEvent(t), [t]),
        r = (0, o.bG)([ee.A], () => ee.A.getGuild(n?.guild_id), [n]),
        s = (0, o.bG)([$.A], () => $.A.getChannel(n?.channel_id), [n]),
        l = (0, q.nh)(t, null),
        d = null != n && (0, M.Fd)(n),
        c = null != n ? (0, Z.G3)(n) : null,
        _ = (0, K.A)(n?.guild_id, n?.id, c),
        u = l?.startTime.toISOString(),
        { startDateTimeString: m } = i.useMemo(
            () => (d ? { startDateTimeString: F.intl.string(F.t.TxqPQR) } : (0, Z.CC)(u ?? new Date().toISOString())),
            [u, d],
        ),
        g = (0, z.Ay)(s),
        f = null != n ? (0, J.oF)(n) : void 0,
        p = g ?? f,
        h = null != s ? (0, X.gU)(s) : null;
    if (null == n || null == r) return null;
    let x = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: et.Qo,
        children: [
            (0, a.jsx)("div", {
                className: et.At,
                children: (0, a.jsx)(L.E, {
                    variant: "text-sm/semibold",
                    color: d ? "status-positive" : "text-brand",
                    children: m,
                }),
            }),
            (0, a.jsx)(L.E, { variant: "text-lg/semibold", className: x ? et.X_ : void 0, children: n.name }),
            x &&
                (0, a.jsx)(L.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: et.tj,
                    children: (0, W.l)(n.description ?? "", !0, { guildId: r.id }),
                }),
            (0, a.jsx)("hr", { className: et.Yl }),
            (0, a.jsxs)("div", {
                className: et.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: et.ik,
                        children: [
                            (0, a.jsx)(Y.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(L.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: F.intl.format(F.t["+DLsD8"], { count: _ }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: et.ik,
                        children: [
                            null != h ? (0, a.jsx)(h, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(L.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: et.HA,
                                children: null != p ? (0, W.l)(p, !0) : null,
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
    er = n(201275),
    es = n(384231),
    el = n(320095),
    eo = n(763754),
    ed = n(491182),
    ec = n(860227),
    e_ = n(375199),
    eu = n(699352),
    em = n(715628),
    eg = n(752636),
    ef = n(352043),
    ep = n(268719),
    eh = n(935208),
    ex = n(652215),
    eb = n(372912),
    eA = n(701628);
let ev = i.memo(function (e) {
    let {
            message: t,
            className: n,
            onContextMenu: i,
            onClick: r,
            hideSimpleEmbedContent: l = !0,
            channel: d,
            isGroupStart: c,
            animateAvatar: _,
            subscribeToComponentDispatch: u,
            renderThreadAccessory: m,
            ...g
        } = e,
        f = t.type === ex.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        p = t.isFirstMessageInForumPost(d),
        h = (0, es.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: x,
            hasSpoilerEmbeds: b,
            hasBailedAst: A,
        } = (0, e_.A)(t, {
            hideSimpleEmbedContent: l,
            allowList: p || h,
            allowHeading: p || h,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        v = (0, ei.rm)(t.id),
        C = (0, eo.Ay)(t),
        y = (0, o.bG)(
            [$.A],
            () => t.hasFlag(ex.pr7.HAS_THREAD) && $.A.getChannel(eh.default.castMessageIdAsChannelId(t.id)),
        ),
        T = (0, er.$7)({ guildId: d.guild_id, roleId: C.iconRoleId }),
        I = (0, ec.fF)(t),
        k = (0, ec.ZD)(t);
    return (0, a.jsx)(ed.A, {
        compact: !1,
        className: s()(n, eb.i, { [eA.M1]: (0, el.ec)(t), [eA.XN]: f }),
        disableInteraction: f,
        childrenExecutedCommand: (0, ep.A)(t, d, !1),
        childrenHeader: (0, eg.A)({
            message: t,
            channel: d,
            author: C,
            guildId: d.guild_id,
            compact: !1,
            animateAvatar: _,
            isGroupStart: !0,
            roleIcon: T,
            hideTimestamp: !0,
            hideGuildTag: !1,
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, eu.J)(e, b, A),
        childrenMessageContent: (0, em.A)(e, x),
        childrenSystemMessage: (0, ef.A)({ ...e, disableInteraction: f }),
        onContextMenu: i,
        onClick: r,
        hasThread: m && null != y && t.hasFlag(ex.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": I,
        "aria-describedby": k,
        author: C,
        ...v,
        ...g,
    });
});
function eC(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: r,
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
        l = (0, o.bG)([$.A], () => (null != n ? $.A.getChannel(n) : null), [n]),
        d = (0, o.bG)([ee.A], () => (l?.guild_id != null ? ee.A.getGuild(l.guild_id) : null), [l]),
        c = (0, o.yK)(
            [A.A, ea.A],
            () => (null == n ? [] : r.map((e) => A.A.getMessage(e) ?? ea.A.getMessage(n, e)).filter((e) => null != e)),
            [n, r],
        );
    return null == l || null == d || 0 === c.length
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
                      children: c.map((e) =>
                          (0, a.jsx)(
                              ev,
                              {
                                  channel: l,
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
function ey(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(en, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(eC, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case G.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(U, { item: t });
                case G.ContentInventoryEntryType.PLAYED_GAME:
                case G.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(Q, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var eT = n(548118),
    eI = n(995273),
    ek = n(950156);
function eE(e) {
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
        r = i.useMemo(() => {
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
                let e = M.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        l = i.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        d = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return eh.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return eh.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        c = (0, o.bG)([$.A], () => $.A.getChannel(r), [r]),
        _ = (0, z.Ay)(c),
        u = c?.guild_id ?? s,
        m = (0, o.bG)([ee.A], () => (null != u ? ee.A.getGuild(u) : null), [u]),
        g = (0, o.bG)([V.default], () => (null != l ? V.default.getUser(l) : null), [l]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: ek.kL,
              children: (0, a.jsxs)("div", {
                  className: ek.wx,
                  children: [
                      (() => {
                          if ("guild" === n && null != m)
                              return (0, a.jsx)(eT.Ay, {
                                  guild: m,
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
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: ek.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: ek.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: ek.$,
                                  children: (0, a.jsxs)("div", {
                                      className: ek.gH,
                                      children: [
                                          "guild" === n && null != m
                                              ? (0, a.jsx)("div", { className: ek.DD, children: m.name })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)("div", { className: ek.DD, children: g.username })
                                                : null,
                                          (0, a.jsx)("div", { className: ek.vE, children: (0, eI.jb)(d) }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (() => {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === ex.rbe.GUILD_ANNOUNCEMENT)
                                                  return F.intl.string(F.t["8P08G9"]);
                                              return F.intl.string(F.t.hMFMY9);
                                          case "guildEvent":
                                              return F.intl.string(F.t["6pFsLQ"]);
                                          case "forumThread":
                                              return F.intl.string(F.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case G.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return F.intl.string(F.t.fxOLPR);
                                                  case G.ContentInventoryEntryType.TOP_GAME:
                                                  case G.ContentInventoryEntryType.PLAYED_GAME:
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
                                          className: ek.VA,
                                          children: (0, a.jsx)("span", { className: ek.o4, children: e }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, X.gU)(c, m);
                                      return (0, a.jsxs)("div", {
                                          className: ek.VA,
                                          children: [
                                              (0, a.jsx)("span", { className: ek.o4, children: e }),
                                              (0, a.jsx)("span", {
                                                  className: ek.o4,
                                                  children: F.intl.string(F.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)("span", {
                                                  className: ek.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: ek.p,
                                                          }),
                                                      _,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: ek.VA,
                                            children: (0, a.jsx)("span", { className: ek.o4, children: e }),
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
function ej(e) {
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
                            (0, N.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = M.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, R.pX)(ex.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, N.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, D.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(S.D, {
        className: ew.k,
        onClick: n,
        children: [
            (0, a.jsx)(eE, { item: t }),
            (0, a.jsx)("div", { className: ew.o, children: (0, a.jsx)(ey, { item: t }) }),
        ],
    });
}
var eS = n(317039);
let eM = function (e) {
    let t,
        n,
        r,
        s,
        l,
        { scrollContainerRef: d } = e,
        c = (0, o.bG)([A.A], () => A.A.notificationItem(), []),
        { showDot: _ } = { value: 0, showDot: (0, o.bG)([A.A], () => A.A.hasNewContent(), []) },
        u = i.useRef(null),
        [m, g] = i.useState(!1),
        {
            data: f,
            loading: p,
            isRefreshing: h,
            handleOnRefresh: x,
            viewabilityConfigCallbackPairs: S,
        } = (function (e) {
            let { showDot: t, notificationItem: n } = e,
                [a, r] = i.useState(!1),
                {
                    unreadItems: s,
                    readItems: l,
                    allUnreadItemsHydrated: d,
                } = (function () {
                    let e = (0, o.bG)([A.A], () => A.A.getUnreadDisplayItems()),
                        t = (0, o.bG)([A.A], () => A.A.getReadDisplayItems()),
                        n = (0, o.bG)([A.A], () => A.A.getNextIndexToHydrate()),
                        a = (0, o.cf)([A.A], () => A.A.getHydratedItems()),
                        r = (0, o.bG)([A.A], () => A.A.getMissingItems());
                    i.useEffect(() => {
                        let e = Date.now() + t.length;
                        C.A.ackGravityItems(t.map((t) => ({ id: t.id, timestamp: e-- }), !0));
                    }, [t]);
                    let s = [],
                        l = [],
                        d = 0;
                    for (let t = 0; t < e.length && !(d >= n); t++) {
                        let n = e[t];
                        if ((d++, r[n.id])) continue;
                        let i = a[n.id];
                        if (
                            (null == i &&
                                n.type === E.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = w(n, i, !0);
                            null != e && s.push(e);
                        }
                    }
                    for (let e = 0; e < t.length && !(d >= n); e++) {
                        let n = t[e];
                        if ((d++, r[n.id])) continue;
                        let i = a[n.id];
                        if (
                            (null == i &&
                                n.type === E.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = w(n, i, !1);
                            null != e && l.push(e);
                        }
                    }
                    return { unreadItems: s, readItems: l, allUnreadItemsHydrated: n >= e.length };
                })(),
                c = (0, o.bG)([A.A], () => A.A.getVersion(), []),
                _ = (0, o.bG)([A.A], () => !(A.A.isFirstPageHydrated() && c > 0));
            i.useEffect(() => {
                null != A.A.getLoadId() && y.k.trackFeedShown({ homeSessionId: "gravity" });
            }, [c]);
            let u = (0, o.bG)([A.A], () => A.A.isRefreshing(), []),
                m = (0, o.bG)([A.A], () => A.A.isHydrating(), []),
                [g, f] = i.useState([]),
                { loadId: p, lastScrollEventTimestamp: h } = (0, o.cf)([A.A], () => ({
                    loadId: A.A.getLoadId(),
                    lastScrollEventTimestamp: A.A.lastScrollEvent(),
                })),
                x = g
                    .filter((e) => {
                        let { item: t } = e;
                        return !k.P.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                S = (0, I.A)(x);
            i.useEffect(() => {
                if (u || _ || null == S || null == x || x === S) return;
                let e = Date.now();
                e - h > j && (C.A.gravityScrollEvent(e), y.k.trackFeedFirstScrollStarted());
            }, [u, h, S, x, p, _]);
            let M = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && r(!0), 0 === t.length)) return;
                        f(t);
                        let n = [],
                            a = (0, v.P0)(t),
                            i = Date.now();
                        for (let e = a.length - 1; e >= 0; e--) {
                            let t = a[e];
                            null != t && n.push({ id: t.id, type: (0, E.xG)(t), timestamp: i++ });
                        }
                        n.length > 0 && C.A.ackGravityItems(n, !0),
                            y.k.trackItemShortImpression(
                                t,
                                a.map((e) => ({ id: e.id, type: (0, E.xG)(e) })),
                                c,
                            );
                    },
                    [c, r],
                ),
                R = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = (0, v.P0)(t);
                        y.k.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, E.xG)(e) })),
                            c,
                        ),
                            C.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !k.P.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: (0, v.px)(t),
                                            triggerType: "list",
                                            itemFeedIndex: n,
                                            itemScore: t.score ?? null,
                                            itemChannelType: t.channelType ?? null,
                                            isInitiallyVisible: !1,
                                        };
                                    }),
                            );
                    },
                    [c],
                ),
                N = i.useCallback((e) => {
                    let { viewableItems: t } = e;
                    C.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !k.P.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: (0, v.px)(t),
                                    triggerType: "list",
                                    itemFeedIndex: n,
                                    itemScore: t.score ?? null,
                                    itemChannelType: t.channelType ?? null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
                }, []),
                D = i.useMemo(
                    () => [
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 100,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: M,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 1e3,
                            },
                            onViewableItemsChanged: R,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: N,
                        },
                    ],
                    [M, R, N],
                );
            i.useEffect(() => {
                C.A.openICYMITab();
            }, []);
            let G = T(t),
                L = (b.zF.useConfig({ location: "icymi_feed" }).enabled, !1),
                { data: P, stickyHeaderIndices: O } = i.useMemo(() => {
                    let e = [];
                    return (
                        _ &&
                            null != n &&
                            n.type === E.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: (0, v.YM)(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        _
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (L &&
                                  e.push({
                                      id: "sunsetBanner",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "sunsetBanner" },
                                  }),
                              s.forEach((t) => {
                                  (0, v.yx)(t) || e.push(t);
                              }),
                              d && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              l.length > 0 &&
                                  l.forEach((t) => {
                                      (0, v.yx)(t) || e.push(t);
                                  }),
                              m &&
                                  e.push({
                                      id: "bottomLoading",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "bottomLoading" },
                                  })),
                        { data: e, stickyHeaderIndices: [] }
                    );
                }, [_, n, s, d, l, m, L]);
            return {
                data: P,
                loading: _,
                version: c,
                visibleItemIds: g,
                endVisible: a,
                isRefreshing: u,
                handleOnRefresh: G,
                stickyHeaderIndices: O,
                viewabilityConfigCallbackPairs: D,
            };
        })({ showDot: _, notificationItem: c }),
        M = T();
    i.useEffect(
        () => () => {
            M();
        },
        [M],
    );
    let R = (0, o.bG)([A.A], () => A.A.hasNewContent(), []),
        N = (0, o.bG)([A.A], () => A.A.isHydrating(), []),
        D = i.useMemo(() => S[0].onViewableItemsChanged, [S]),
        { registerItemRef: G } =
            ((t = i.useRef(null)),
            (n = i.useRef(new Map())),
            (r = i.useRef(new Set())),
            (s = i.useRef(D)),
            (l = i.useRef(f)),
            i.useEffect(() => {
                (s.current = D), (l.current = f);
            }, [D, f]),
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
                                            ? r.current.has(n) || (r.current.add(n), (t = !0))
                                            : r.current.has(n) && (r.current.delete(n), (t = !0)));
                                }),
                                t)
                            ) {
                                let e = l.current,
                                    t = Array.from(r.current)
                                        .map((t) => {
                                            let n = e.findIndex((e) => e.id === t);
                                            return n >= 0 ? { index: n, item: e[n] } : null;
                                        })
                                        .filter((e) => null !== e)
                                        .sort((e, t) => e.index - t.index);
                                s.current({ viewableItems: t });
                            }
                        },
                        { root: d?.current ?? null, threshold: [0, 0.5, 1], rootMargin: "0px" },
                    )),
                    () => {
                        t.current?.disconnect();
                    }
                ),
                [d],
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
        L = i.useMemo(() => f.some((e) => "end" === e.data.kind), [f]),
        P = i.useCallback(() => {
            if (L) return;
            let e = d.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                m ||
                p ||
                N ||
                (g(!0),
                (0, v._x)().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [p, m, N, L, d]);
    i.useEffect(() => {
        let e = d.current;
        if (null != e)
            return (
                e.addEventListener("scroll", P),
                () => {
                    e.removeEventListener("scroll", P);
                }
            );
    }, [P, d]);
    let O = i.useCallback(() => {
            d.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [d]),
        U = i.useCallback(() => {
            x(), O();
        }, [x, O]),
        H = i.useCallback(
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
                              { ref: (t) => G(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(ej, { item: e }) },
                              e.id,
                          ),
            [G],
        );
    return p && 0 === f.length
        ? (0, a.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, a.jsxs)("div", {
              className: eS.k,
              children: [
                  R &&
                      !h &&
                      (0, a.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, a.jsx)("button", {
                              onClick: U,
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
                      ref: u,
                      className: eS.j,
                      children: [
                          f.map((e) => H(e)),
                          !L &&
                              (m || N) &&
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
var eR = n(852456),
    eN = n(964623);
let eD = (0, m.A)(function (e) {
    let { width: t } = e,
        n = (0, b.c)("ICYMIPage");
    i.useEffect(() => {
        n || (0, l.pX)(ex.BVt.ME);
    }, [n]),
        i.useLayoutEffect(() => {
            n && u.I(ex.BVt.ICYMI);
        }, [n]),
        (0, g.Ay)(() => {
            n && (0, h.d)("icymi");
        });
    let r = (0, o.bG)([x.A], () => x.A.theme),
        m = (0, o.bG)([A.A], () => A.A.isRefreshing()),
        C = i.useRef(null);
    (0, f.HU)({ location: F.intl.string(F.t["jnXV/V"]) });
    let [y, I] = i.useState(!1);
    i.useEffect(() => {
        let e = (e) => {
                e.metaKey && I(!0);
            },
            t = (e) => {
                "Meta" === e.key && I(!1);
            },
            n = () => {
                I(!1);
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
    let k = T(),
        E = b.f8.useConfig({ location: "icymi page" }).enabled,
        w = i.useCallback(
            async (e) => {
                e.metaKey && E
                    ? await (0, v.be)(ex.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await k();
            },
            [k, E],
        ),
        j = y && E ? F.intl.string(F.t.YplSn2) : F.intl.string(F.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: s()(eN.TE, eR.kL),
              children: [
                  (0, a.jsx)(d.N, {
                      theme: r,
                      children: (e) =>
                          (0, a.jsxs)(p.A, {
                              className: e,
                              toolbar: (0, a.jsx)(p.A.Icon, {
                                  icon: c.f,
                                  tooltip: j,
                                  onClick: w,
                                  disabled: m,
                                  "aria-label": j,
                              }),
                              children: [
                                  (0, a.jsx)(p.A.Icon, { icon: _.g, "aria-hidden": !0 }),
                                  (0, a.jsx)(p.A.Title, { children: F.intl.string(F.t["jnXV/V"]) }),
                                  (0, a.jsx)(p.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: eR.HH,
                                          children: F.intl.string(F.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: C,
                      className: s()(eN.Qs, eR.Qs),
                      children: (0, a.jsx)(eM, { scrollContainerRef: C }),
                  }),
              ],
          })
        : null;
});
