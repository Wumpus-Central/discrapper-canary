n.r(t), n.d(t, { default: () => eL });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(877227),
    d = n(17928),
    o = n(43990),
    c = n(663417),
    u = n(768622),
    m = n(944791),
    h = n(456412),
    g = n(964486),
    p = n(726249),
    x = n(742589),
    v = n(210714),
    f = n(363195),
    _ = n(875448),
    A = n(557740),
    y = n(859524),
    b = n(4106),
    I = n(105971);
function j(e) {
    return i.useCallback(async () => {
        I.k.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await b.A.fetchDehydrated({ isReloading: !0 }),
            await b.A.reloadICYMITab(),
            await b.A.getGuildChannelScores(),
            b.A.getRecommendedGuilds();
    }, [e]);
}
n(321073);
var k = n(919796),
    E = n(800319),
    T = n(596720);
function C(e, t, n) {
    return t.type === T.Mm.MESSAGE
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
        : t.type === T.Mm.ACTIVITY || t.type === T.Mm.CUSTOM_STATUS
          ? {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            }
          : t.type === T.Mm.GUILD_EVENT
            ? {
                  id: e.id,
                  timestamp: Date.now(),
                  data: { kind: "guildEvent", eventId: t.event_id },
                  score: e.score,
                  debugScore: JSON.stringify(e.score_components),
                  unread: n,
              }
            : t.type === T.Mm.RECOMMENDED_GUILDS
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
let w = 15 * n(927813).A.Millis.MINUTE;
var N = n(939249),
    S = n(698441),
    M = n(976860),
    G = n(378570),
    L = n(975732),
    D = n(681154),
    R = n(834730),
    U = n(51183),
    V = n(96098);
function H(e) {
    let { item: t } = e;
    if ("contentInventory" !== t.data.kind) return null;
    let { extra: n } = t.data.content;
    if ("custom_status_extra" !== n.type) return null;
    let i = {
            id: n.emoji_id?.toString() === "0" ? null : n.emoji_id,
            name: n.emoji_name ?? "",
            animated: n.emoji_animated,
        },
        s = null != i.id || i.name.length > 0,
        l = null != n.status && n.status.length > 0;
    return (0, a.jsx)("div", {
        className: V.kL,
        children: (0, a.jsx)("div", {
            className: V.Nr,
            children: (0, a.jsxs)("div", {
                className: V.Qs,
                children: [
                    s &&
                        (0, a.jsx)("div", {
                            className: V.qq,
                            children: (0, a.jsx)(U.A, { emoji: i, animate: !0, hideTooltip: !1 }),
                        }),
                    l &&
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
    O = n(287809),
    F = n(985018),
    Y = n(115323);
function Q(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        s = n?.author_id,
        l = n?.content_type,
        r = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        o = (0, P.h)(r),
        c = (0, d.bG)([O.default], () => (null != s ? O.default.getUser(s) : null), [s]),
        u = l === D.ContentInventoryEntryType.TOP_GAME,
        m = o?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == o || null == c || null == m
        ? null
        : (0, a.jsx)("div", {
              className: Y.kL,
              children: (0, a.jsxs)("div", {
                  className: Y.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: o.name, className: Y.Gt }),
                      (0, a.jsxs)("div", {
                          className: Y.Vx,
                          children: [
                              (0, a.jsx)(R.E, { variant: "text-md/semibold", color: "text-strong", children: o.name }),
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
var q = n(177953),
    z = n(47167),
    J = n(713654),
    B = n(435328),
    X = n(563312),
    K = n(826383),
    W = n(9448),
    $ = n(974930),
    Z = n(734057),
    ee = n(71393),
    et = n(165553);
function en(e) {
    let { eventId: t } = e,
        n = (0, d.bG)([S.Ay], () => S.Ay.getGuildScheduledEvent(t), [t]),
        s = (0, d.bG)([ee.A], () => ee.A.getGuild(n?.guild_id), [n]),
        l = (0, d.bG)([Z.A], () => Z.A.getChannel(n?.channel_id), [n]),
        r = (0, X.nh)(t, null),
        o = null != n && (0, S.Fd)(n),
        c = null != n ? (0, $.G3)(n) : null,
        u = (0, K.A)(n?.guild_id, n?.id, c),
        m = r?.startTime.toISOString(),
        { startDateTimeString: h } = i.useMemo(
            () => (o ? { startDateTimeString: F.intl.string(F.t.TxqPQR) } : (0, $.CC)(m ?? new Date().toISOString())),
            [m, o],
        ),
        g = (0, z.Ay)(l),
        p = null != n ? (0, W.oF)(n) : void 0,
        x = g ?? p,
        v = null != l ? (0, J.gU)(l) : null;
    if (null == n || null == s) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: et.Qo,
        children: [
            (0, a.jsx)("div", {
                className: et.At,
                children: (0, a.jsx)(R.E, {
                    variant: "text-sm/semibold",
                    color: o ? "status-positive" : "text-brand",
                    children: h,
                }),
            }),
            (0, a.jsx)(R.E, { variant: "text-lg/semibold", className: f ? et.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(R.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: et.tj,
                    children: (0, B.l)(n.description ?? "", !0, { guildId: s.id }),
                }),
            (0, a.jsx)("hr", { className: et.Yl }),
            (0, a.jsxs)("div", {
                className: et.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: et.ik,
                        children: [
                            (0, a.jsx)(q.n, { size: "xs", color: "currentColor" }),
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
                                children: null != x ? (0, B.l)(x, !0) : null,
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
    es = n(201275),
    el = n(384231),
    er = n(320095),
    ed = n(763754),
    eo = n(491182),
    ec = n(860227),
    eu = n(375199),
    em = n(699352),
    eh = n(715628),
    eg = n(752636),
    ep = n(352043),
    ex = n(268719),
    ev = n(935208),
    ef = n(652215),
    e_ = n(372912),
    eA = n(701628);
let ey = i.memo(function (e) {
    let {
            message: t,
            className: n,
            onContextMenu: i,
            onClick: s,
            hideSimpleEmbedContent: r = !0,
            channel: o,
            isGroupStart: c,
            animateAvatar: u,
            subscribeToComponentDispatch: m,
            renderThreadAccessory: h,
            ...g
        } = e,
        p = t.type === ef.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        x = t.isFirstMessageInForumPost(o),
        v = (0, el.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: f,
            hasSpoilerEmbeds: _,
            hasBailedAst: A,
        } = (0, eu.A)(t, {
            hideSimpleEmbedContent: r,
            allowList: x || v,
            allowHeading: x || v,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        y = (0, ei.rm)(t.id),
        b = (0, ed.Ay)(t),
        I = (0, d.bG)(
            [Z.A],
            () => t.hasFlag(ef.pr7.HAS_THREAD) && Z.A.getChannel(ev.default.castMessageIdAsChannelId(t.id)),
        ),
        j = (0, es.$7)({ guildId: o.guild_id, roleId: b.iconRoleId }),
        k = (0, ec.fF)(t),
        E = (0, ec.ZD)(t);
    return (0, a.jsx)(eo.A, {
        compact: !1,
        className: l()(n, e_.i, { [eA.M1]: (0, er.ec)(t), [eA.XN]: p }),
        disableInteraction: p,
        childrenExecutedCommand: (0, ex.A)(t, o, !1),
        childrenHeader: (0, eg.A)({
            message: t,
            channel: o,
            author: b,
            guildId: o.guild_id,
            compact: !1,
            animateAvatar: u,
            isGroupStart: !0,
            roleIcon: j,
            hideTimestamp: !0,
            hideGuildTag: !1,
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, em.J)(e, _, A),
        childrenMessageContent: (0, eh.A)(e, f),
        childrenSystemMessage: (0, ep.A)({ ...e, disableInteraction: p }),
        onContextMenu: i,
        onClick: s,
        hasThread: h && null != I && t.hasFlag(ef.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": k,
        "aria-describedby": E,
        author: b,
        ...y,
        ...g,
    });
});
function eb(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: s,
            title: l,
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
        r = (0, d.bG)([Z.A], () => (null != n ? Z.A.getChannel(n) : null), [n]),
        o = (0, d.bG)([ee.A], () => (r?.guild_id != null ? ee.A.getGuild(r.guild_id) : null), [r]),
        c = (0, d.yK)(
            [A.A, ea.A],
            () => (null == n ? [] : s.map((e) => A.A.getMessage(e) ?? ea.A.getMessage(n, e)).filter((e) => null != e)),
            [n, s],
        );
    return null == r || null == o || 0 === c.length
        ? null
        : (0, a.jsxs)("div", {
              className: et.kL,
              children: [
                  null != l
                      ? (0, a.jsx)("div", {
                            className: et.gn,
                            children: (0, a.jsx)("div", { className: et.DD, children: l }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: et.MJ,
                      children: c.map((e) =>
                          (0, a.jsx)(
                              ey,
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
function eI(e) {
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
                    return (0, a.jsx)(H, { item: t });
                case D.ContentInventoryEntryType.PLAYED_GAME:
                case D.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(Q, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var ej = n(548118),
    ek = n(995273),
    eE = n(950156);
function eT(e) {
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
        s = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return t.data.message.channel_id;
                case "forumThread":
                    return t.data.threadChannel.id;
                default:
                    return;
            }
        }, [t]),
        l = i.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = S.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        r = i.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        o = i.useMemo(() => {
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
        c = (0, d.bG)([Z.A], () => Z.A.getChannel(s), [s]),
        u = (0, z.Ay)(c),
        m = c?.guild_id ?? l,
        h = (0, d.bG)([ee.A], () => (null != m ? ee.A.getGuild(m) : null), [m]),
        g = (0, d.bG)([O.default], () => (null != r ? O.default.getUser(r) : null), [r]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: eE.kL,
              children: (0, a.jsxs)("div", {
                  className: eE.wx,
                  children: [
                      (() => {
                          if ("guild" === n && null != h)
                              return (0, a.jsx)(ej.Ay, {
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
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: eE.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: eE.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: eE.$,
                                  children: (0, a.jsxs)("div", {
                                      className: eE.gH,
                                      children: [
                                          "guild" === n && null != h
                                              ? (0, a.jsx)("div", { className: eE.DD, children: h.name })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)("div", { className: eE.DD, children: g.username })
                                                : null,
                                          (0, a.jsx)("div", { className: eE.vE, children: (0, ek.jb)(o) }),
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
                                          className: eE.VA,
                                          children: (0, a.jsx)("span", { className: eE.o4, children: e }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, J.gU)(c, h);
                                      return (0, a.jsxs)("div", {
                                          className: eE.VA,
                                          children: [
                                              (0, a.jsx)("span", { className: eE.o4, children: e }),
                                              (0, a.jsx)("span", {
                                                  className: eE.o4,
                                                  children: F.intl.string(F.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)("span", {
                                                  className: eE.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: eE.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: eE.VA,
                                            children: (0, a.jsx)("span", { className: eE.o4, children: e }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
var eC = n(709393);
function ew(e) {
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
        className: eC.k,
        onClick: n,
        children: [
            (0, a.jsx)(eT, { item: t }),
            (0, a.jsx)("div", { className: eC.o, children: (0, a.jsx)(eI, { item: t }) }),
        ],
    });
}
var eN = n(317039);
let eS = function (e) {
    let t,
        n,
        s,
        l,
        r,
        { scrollContainerRef: o } = e,
        c = (0, d.bG)([A.A], () => A.A.notificationItem(), []),
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
                [a, s] = i.useState(!1),
                {
                    unreadItems: l,
                    readItems: r,
                    allUnreadItemsHydrated: o,
                } = (function () {
                    let e = (0, d.bG)([A.A], () => A.A.getUnreadDisplayItems()),
                        t = (0, d.bG)([A.A], () => A.A.getReadDisplayItems()),
                        n = (0, d.bG)([A.A], () => A.A.getNextIndexToHydrate()),
                        a = (0, d.cf)([A.A], () => A.A.getHydratedItems()),
                        s = (0, d.bG)([A.A], () => A.A.getMissingItems());
                    i.useEffect(() => {
                        let e = Date.now() + t.length;
                        b.A.ackGravityItems(t.map((t) => ({ id: t.id, timestamp: e-- }), !0));
                    }, [t]);
                    let l = [],
                        r = [],
                        o = 0;
                    for (let t = 0; t < e.length && !(o >= n); t++) {
                        let n = e[t];
                        if ((o++, s[n.id])) continue;
                        let i = a[n.id];
                        if (
                            (null == i &&
                                n.type === T.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = C(n, i, !0);
                            null != e && l.push(e);
                        }
                    }
                    for (let e = 0; e < t.length && !(o >= n); e++) {
                        let n = t[e];
                        if ((o++, s[n.id])) continue;
                        let i = a[n.id];
                        if (
                            (null == i &&
                                n.type === T.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = C(n, i, !1);
                            null != e && r.push(e);
                        }
                    }
                    return { unreadItems: l, readItems: r, allUnreadItemsHydrated: n >= e.length };
                })(),
                c = (0, d.bG)([A.A], () => A.A.getVersion(), []),
                u = (0, d.bG)([A.A], () => !(A.A.isFirstPageHydrated() && c > 0));
            i.useEffect(() => {
                null != A.A.getLoadId() && I.k.trackFeedShown({ homeSessionId: "gravity" });
            }, [c]);
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
                        return !E.P.has(t.data.kind);
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
                e - v > w && (b.A.gravityScrollEvent(e), I.k.trackFeedFirstScrollStarted());
            }, [m, v, N, f, x, u]);
            let S = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && s(!0), 0 === t.length)) return;
                        p(t);
                        let n = [],
                            a = (0, y.P0)(t),
                            i = Date.now();
                        for (let e = a.length - 1; e >= 0; e--) {
                            let t = a[e];
                            null != t && n.push({ id: t.id, type: (0, T.xG)(t), timestamp: i++ });
                        }
                        n.length > 0 && b.A.ackGravityItems(n, !0),
                            I.k.trackItemShortImpression(
                                t,
                                a.map((e) => ({ id: e.id, type: (0, T.xG)(e) })),
                                c,
                            );
                    },
                    [c, s],
                ),
                M = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = (0, y.P0)(t);
                        I.k.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, T.xG)(e) })),
                            c,
                        ),
                            b.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !E.P.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: (0, y.px)(t),
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
                G = i.useCallback((e) => {
                    let { viewableItems: t } = e;
                    b.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !E.P.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: (0, y.px)(t),
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
            let D = j(t),
                R = (_.zF.useConfig({ location: "icymi_feed" }).enabled, !1),
                { data: U, stickyHeaderIndices: V } = i.useMemo(() => {
                    let e = [];
                    return (
                        u &&
                            null != n &&
                            n.type === T.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: (0, y.YM)(n).activity },
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
                              l.forEach((t) => {
                                  (0, y.yx)(t) || e.push(t);
                              }),
                              o && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              r.length > 0 &&
                                  r.forEach((t) => {
                                      (0, y.yx)(t) || e.push(t);
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
                }, [u, n, l, o, r, h, R]);
            return {
                data: U,
                loading: u,
                version: c,
                visibleItemIds: g,
                endVisible: a,
                isRefreshing: m,
                handleOnRefresh: D,
                stickyHeaderIndices: V,
                viewabilityConfigCallbackPairs: L,
            };
        })({ showDot: u, notificationItem: c }),
        S = j();
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
            (s = i.useRef(new Set())),
            (l = i.useRef(L)),
            (r = i.useRef(p)),
            i.useEffect(() => {
                (l.current = L), (r.current = p);
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
                                            ? s.current.has(n) || (s.current.add(n), (t = !0))
                                            : s.current.has(n) && (s.current.delete(n), (t = !0)));
                                }),
                                t)
                            ) {
                                let e = r.current,
                                    t = Array.from(s.current)
                                        .map((t) => {
                                            let n = e.findIndex((e) => e.id === t);
                                            return n >= 0 ? { index: n, item: e[n] } : null;
                                        })
                                        .filter((e) => null !== e)
                                        .sort((e, t) => e.index - t.index);
                                l.current({ viewableItems: t });
                            }
                        },
                        { root: o?.current ?? null, threshold: [0, 0.5, 1], rootMargin: "0px" },
                    )),
                    () => {
                        t.current?.disconnect();
                    }
                ),
                [o],
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
            let e = o.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                h ||
                x ||
                G ||
                (g(!0),
                (0, y._x)().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [x, h, G, R, o]);
    i.useEffect(() => {
        let e = o.current;
        if (null != e)
            return (
                e.addEventListener("scroll", U),
                () => {
                    e.removeEventListener("scroll", U);
                }
            );
    }, [U, o]);
    let V = i.useCallback(() => {
            o.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [o]),
        H = i.useCallback(() => {
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
                              { ref: (t) => D(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(ew, { item: e }) },
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
                              onClick: H,
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
        n = (0, _.c)("ICYMIPage");
    i.useEffect(() => {
        n || (0, r.pX)(ef.BVt.ME);
    }, [n]),
        i.useLayoutEffect(() => {
            n && m.I(ef.BVt.ICYMI);
        }, [n]),
        (0, g.Ay)(() => {
            n && (0, v.d)("icymi");
        });
    let s = (0, d.bG)([f.A], () => f.A.theme),
        h = (0, d.bG)([A.A], () => A.A.isRefreshing()),
        b = i.useRef(null);
    (0, p.HU)({ location: F.intl.string(F.t["jnXV/V"]) });
    let [I, k] = i.useState(!1);
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
    let E = j(),
        T = _.f8.useConfig({ location: "icymi page" }).enabled,
        C = i.useCallback(
            async (e) => {
                e.metaKey && T
                    ? await (0, y.be)(ef.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await E();
            },
            [E, T],
        ),
        w = I && T ? F.intl.string(F.t.YplSn2) : F.intl.string(F.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: l()(eG.TE, eM.kL),
              children: [
                  (0, a.jsx)(o.N, {
                      theme: s,
                      children: (e) =>
                          (0, a.jsxs)(x.A, {
                              className: e,
                              toolbar: (0, a.jsx)(x.A.Icon, {
                                  icon: c.f,
                                  tooltip: w,
                                  onClick: C,
                                  disabled: h,
                                  "aria-label": w,
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
                      className: l()(eG.Qs, eM.Qs),
                      children: (0, a.jsx)(eS, { scrollContainerRef: b }),
                  }),
              ],
          })
        : null;
});
