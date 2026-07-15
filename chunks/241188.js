n.r(t), n.d(t, { default: () => eD });
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
    x = n(726249),
    p = n(742589),
    v = n(210714),
    f = n(363195),
    A = n(519059),
    y = n(557740),
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
    w = n(596720);
function _(e, t, n) {
    switch (t.type) {
        case w.Mm.MESSAGE:
            if (t.message.id === t.message.channel_id && null != t.threadChannel)
                return {
                    id: e.id,
                    timestamp: Date.now(),
                    channelType: e.data.channel_type,
                    data: { kind: "forumThread", message: t.message, threadChannel: t.threadChannel },
                    score: e.score,
                    debugScore: JSON.stringify(e.score_components),
                    unread: n,
                };
            return {
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
            };
        case w.Mm.ACTIVITY:
        case w.Mm.CUSTOM_STATUS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case w.Mm.GUILD_EVENT:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "guildEvent", eventId: t.event_id },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case w.Mm.RECOMMENDED_GUILDS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "recommendedGuilds" },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        default:
            return null;
    }
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
    V = n(208971),
    O = n(96098);
function P(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content.extra : null,
        i = n?.type === "custom_status_extra" ? n : null,
        l = (0, V.G)(i?.status);
    if (null == i) return null;
    let s = {
            id: i.emoji_id?.toString() === "0" ? null : i.emoji_id,
            name: i.emoji_name ?? "",
            animated: i.emoji_animated,
        },
        r = null != s.id || s.name.length > 0,
        d = null != l && l.length > 0;
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
                            children: (0, a.jsx)(U.A, { emoji: s, animate: !0, hideTooltip: !1 }),
                        }),
                    d &&
                        (0, a.jsx)(R.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: O.qS,
                            children: l,
                        }),
                ],
            }),
        }),
    });
}
var H = n(429913),
    F = n(287809),
    Y = n(375708),
    z = n(115323);
function J(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        l = n?.author_id,
        s = n?.content_type,
        r = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        c = (0, H.h)(r),
        o = (0, d.bG)([F.default], () => (null != l ? F.default.getUser(l) : null), [l]),
        u = s === D.ContentInventoryEntryType.TOP_GAME,
        m = c?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == c || null == o || null == m
        ? null
        : (0, a.jsx)("div", {
              className: z.kL,
              children: (0, a.jsxs)("div", {
                  className: z.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: c.name, className: z.Gt }),
                      (0, a.jsxs)("div", {
                          className: z.Vx,
                          children: [
                              (0, a.jsx)(R.E, { variant: "text-md/semibold", color: "text-strong", children: c.name }),
                              u &&
                                  (0, a.jsx)("div", {
                                      className: z.qS,
                                      children: (0, a.jsx)(R.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: Y.intl.string(Y.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var Q = n(177953),
    X = n(47167),
    q = n(713654),
    B = n(435328),
    K = n(563312),
    W = n(826383),
    Z = n(9448),
    $ = n(974930),
    ee = n(734057),
    et = n(71393),
    en = n(165553);
function ea(e) {
    let { eventId: t } = e,
        n = (0, d.bG)([S.Ay], () => S.Ay.getGuildScheduledEvent(t), [t]),
        l = (0, d.bG)([et.A], () => et.A.getGuild(n?.guild_id), [n]),
        s = (0, d.bG)([ee.A], () => ee.A.getChannel(n?.channel_id), [n]),
        r = (0, K.nh)(t, null),
        c = null != n && (0, S.Fd)(n),
        o = null != n ? (0, $.G3)(n) : null,
        u = (0, W.A)(n?.guild_id, n?.id, o),
        m = r?.startTime.toISOString(),
        { startDateTimeString: h } = i.useMemo(
            () => (c ? { startDateTimeString: Y.intl.string(Y.t.TxqPQR) } : (0, $.CC)(m ?? new Date().toISOString())),
            [m, c],
        ),
        g = (0, X.Ay)(s),
        x = null != n ? (0, Z.oF)(n) : void 0,
        p = g ?? x,
        v = null != s ? (0, q.gU)(s) : null;
    if (null == n || null == l) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: en.Qo,
        children: [
            (0, a.jsx)("div", {
                className: en.At,
                children: (0, a.jsx)(R.E, {
                    variant: "text-sm/semibold",
                    color: c ? "status-positive" : "text-brand",
                    children: h,
                }),
            }),
            (0, a.jsx)(R.E, { variant: "text-lg/semibold", className: f ? en.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(R.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: en.tj,
                    children: (0, B.l)(n.description ?? "", !0, { guildId: l.id }),
                }),
            (0, a.jsx)("hr", { className: en.Yl }),
            (0, a.jsxs)("div", {
                className: en.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: en.ik,
                        children: [
                            (0, a.jsx)(Q.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(R.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: Y.intl.format(Y.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: en.ik,
                        children: [
                            null != v ? (0, a.jsx)(v, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(R.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: en.HA,
                                children: null != p ? (0, B.l)(p, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ei = n(232835),
    el = n(837381),
    es = n(201275),
    er = n(384231),
    ed = n(320095),
    ec = n(763754),
    eo = n(491182),
    eu = n(860227),
    em = n(375199),
    eh = n(699352),
    eg = n(715628),
    ex = n(752636),
    ep = n(352043),
    ev = n(268719),
    ef = n(935208),
    eA = n(652215),
    ey = n(372912),
    eI = n(701628);
let eb = i.memo(function (e) {
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
        x = t.type === eA.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        p = t.isFirstMessageInForumPost(c),
        v = (0, er.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: f,
            hasSpoilerEmbeds: A,
            hasBailedAst: y,
        } = (0, em.A)(t, {
            hideSimpleEmbedContent: r,
            allowList: p || v,
            allowHeading: p || v,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, el.rm)(t.id),
        b = (0, ec.Ay)(t),
        j = (0, d.bG)(
            [ee.A],
            () => t.hasFlag(eA.pr7.HAS_THREAD) && ee.A.getChannel(ef.default.castMessageIdAsChannelId(t.id)),
        ),
        E = (0, es.$7)({ guildId: c.guild_id, roleId: b.iconRoleId }),
        k = (0, eu.fF)(t),
        T = (0, eu.ZD)(t);
    return (0, a.jsx)(eo.A, {
        compact: !1,
        className: s()(n, ey.i, { [eI.M1]: (0, ed.ec)(t), [eI.XN]: x }),
        disableInteraction: x,
        childrenExecutedCommand: (0, ev.A)(t, c, !1),
        childrenHeader: (0, ex.A)({
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
        childrenAccessories: e.hideAccessories ? void 0 : (0, eh.J)(e, A, y),
        childrenMessageContent: (0, eg.A)(e, f),
        childrenSystemMessage: (0, ep.A)({ ...e, disableInteraction: x }),
        onContextMenu: i,
        onClick: l,
        hasThread: h && null != j && t.hasFlag(eA.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": k,
        "aria-describedby": T,
        author: b,
        ...I,
        ...g,
    });
});
function ej(e) {
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
        r = (0, d.bG)([ee.A], () => (null != n ? ee.A.getChannel(n) : null), [n]),
        c = (0, d.bG)([et.A], () => (r?.guild_id != null ? et.A.getGuild(r.guild_id) : null), [r]),
        o = (0, d.yK)(
            [y.A, ei.A],
            () => (null == n ? [] : l.map((e) => y.A.getMessage(e) ?? ei.A.getMessage(n, e)).filter((e) => null != e)),
            [n, l],
        );
    return null == r || null == c || 0 === o.length
        ? null
        : (0, a.jsxs)("div", {
              className: en.kL,
              children: [
                  null != s
                      ? (0, a.jsx)("div", {
                            className: en.gn,
                            children: (0, a.jsx)("div", { className: en.DD, children: s }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: en.MJ,
                      children: o.map((e) =>
                          (0, a.jsx)(
                              eb,
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
function eE(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(ea, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(ej, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case D.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(P, { item: t });
                case D.ContentInventoryEntryType.PLAYED_GAME:
                case D.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(J, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var ek = n(548118),
    eT = n(995273),
    ew = n(950156);
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
                    return ef.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return ef.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        o = (0, d.bG)([ee.A], () => ee.A.getChannel(l), [l]),
        u = (0, X.Ay)(o),
        m = o?.guild_id ?? s,
        h = (0, d.bG)([et.A], () => (null != m ? et.A.getGuild(m) : null), [m]),
        g = (0, d.bG)([F.default], () => (null != r ? F.default.getUser(r) : null), [r]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: ew.kL,
              children: (0, a.jsxs)("div", {
                  className: ew.wx,
                  children: [
                      (() => {
                          if ("guild" === n && null != h)
                              return (0, a.jsx)(ek.Ay, {
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
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: ew.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: ew.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: ew.$,
                                  children: (0, a.jsxs)("div", {
                                      className: ew.gH,
                                      children: [
                                          "guild" === n && null != h
                                              ? (0, a.jsx)(R.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    className: ew.DD,
                                                    children: h.name,
                                                })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)(R.E, {
                                                      variant: "text-md/semibold",
                                                      color: "text-strong",
                                                      className: ew.DD,
                                                      children: g.username,
                                                  })
                                                : null,
                                          (0, a.jsx)(R.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              className: ew.vE,
                                              children: (0, eT.jb)(c),
                                          }),
                                      ],
                                  }),
                              }),
                              (() => {
                                  let e = (function () {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === eA.rbe.GUILD_ANNOUNCEMENT)
                                                  return Y.intl.string(Y.t["8P08G9"]);
                                              return Y.intl.string(Y.t.hMFMY9);
                                          case "guildEvent":
                                              return Y.intl.string(Y.t["6pFsLQ"]);
                                          case "forumThread":
                                              return Y.intl.string(Y.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case D.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return Y.intl.string(Y.t.fxOLPR);
                                                  case D.ContentInventoryEntryType.TOP_GAME:
                                                  case D.ContentInventoryEntryType.PLAYED_GAME:
                                                      return Y.intl.string(Y.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, a.jsx)("div", {
                                          className: ew.VA,
                                          children: (0, a.jsx)(R.E, {
                                              variant: "text-sm/medium",
                                              color: "text-subtle",
                                              tag: "span",
                                              className: ew.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != o && null != e) {
                                      let t = (0, q.gU)(o, h);
                                      return (0, a.jsxs)("div", {
                                          className: ew.VA,
                                          children: [
                                              (0, a.jsx)(R.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: ew.o4,
                                                  children: e,
                                              }),
                                              (0, a.jsx)(R.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: ew.o4,
                                                  children: Y.intl.string(Y.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)(R.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: ew.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: ew.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: ew.VA,
                                            children: (0, a.jsx)(R.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                tag: "span",
                                                className: ew.o4,
                                                children: e,
                                            }),
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
function eN(e) {
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
                            null != e && (0, M.pX)(eA.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
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
            (0, a.jsx)(e_, { item: t }),
            (0, a.jsx)("div", { className: eC.o, children: (0, a.jsx)(eE, { item: t }) }),
        ],
    });
}
var eS = n(317039);
let eM = function (e) {
    let t,
        n,
        l,
        s,
        r,
        { scrollContainerRef: c } = e,
        o = (0, d.bG)([y.A], () => y.A.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, d.bG)([y.A], () => y.A.hasNewContent(), []) },
        m = i.useRef(null),
        [h, g] = i.useState(!1),
        {
            data: x,
            loading: p,
            isRefreshing: v,
            handleOnRefresh: f,
            viewabilityConfigCallbackPairs: A,
        } = (function (e) {
            let { showDot: t, notificationItem: n } = e,
                [a, l] = i.useState(!1),
                {
                    unreadItems: s,
                    readItems: r,
                    allUnreadItemsHydrated: c,
                } = (function () {
                    let e = (0, d.bG)([y.A], () => y.A.getUnreadDisplayItems()),
                        t = (0, d.bG)([y.A], () => y.A.getReadDisplayItems()),
                        n = (0, d.bG)([y.A], () => y.A.getNextIndexToHydrate()),
                        a = (0, d.cf)([y.A], () => y.A.getHydratedItems()),
                        l = (0, d.bG)([y.A], () => y.A.getMissingItems());
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
                                n.type === w.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = _(n, i, !0);
                            null != e && s.push(e);
                        }
                    }
                    for (let e = 0; e < t.length && !(c >= n); e++) {
                        let n = t[e];
                        if ((c++, l[n.id])) continue;
                        let i = a[n.id];
                        if (
                            (null == i &&
                                n.type === w.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (i = a[n.data.message_id]),
                            null != i)
                        ) {
                            let e = _(n, i, !1);
                            null != e && r.push(e);
                        }
                    }
                    return { unreadItems: s, readItems: r, allUnreadItemsHydrated: n >= e.length };
                })(),
                o = (0, d.bG)([y.A], () => y.A.getVersion(), []),
                u = (0, d.bG)([y.A], () => !(y.A.isFirstPageHydrated() && o > 0));
            i.useEffect(() => {
                null != y.A.getLoadId() && j.k.trackFeedShown({ homeSessionId: "gravity" });
            }, [o]);
            let m = (0, d.bG)([y.A], () => y.A.isRefreshing(), []),
                h = (0, d.bG)([y.A], () => y.A.isHydrating(), []),
                [g, x] = i.useState([]),
                { loadId: p, lastScrollEventTimestamp: v } = (0, d.cf)([y.A], () => ({
                    loadId: y.A.getLoadId(),
                    lastScrollEventTimestamp: y.A.lastScrollEvent(),
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
                A = (0, k.A)(f);
            i.useEffect(() => {
                if (m || u || null == A || null == f || f === A) return;
                let e = Date.now();
                e - v > C && (b.A.gravityScrollEvent(e), j.k.trackFeedFirstScrollStarted());
            }, [m, v, A, f, p, u]);
            let N = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && l(!0), 0 === t.length)) return;
                        x(t);
                        let n = [],
                            a = (0, I.P0)(t),
                            i = Date.now();
                        for (let e = a.length - 1; e >= 0; e--) {
                            let t = a[e];
                            null != t && n.push({ id: t.id, type: (0, w.xG)(t), timestamp: i++ });
                        }
                        n.length > 0 && b.A.ackGravityItems(n, !0),
                            j.k.trackItemShortImpression(
                                t,
                                a.map((e) => ({ id: e.id, type: (0, w.xG)(e) })),
                                o,
                            );
                    },
                    [o, l],
                ),
                S = i.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = (0, I.P0)(t);
                        j.k.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, w.xG)(e) })),
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
                M = i.useCallback((e) => {
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
                G = i.useMemo(
                    () => [
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 100,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: N,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 1e3,
                            },
                            onViewableItemsChanged: S,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: M,
                        },
                    ],
                    [N, S, M],
                );
            i.useEffect(() => {
                b.A.openICYMITab();
            }, []);
            let L = E(t),
                { data: D, stickyHeaderIndices: R } = i.useMemo(() => {
                    let e = [];
                    return (
                        u &&
                            null != n &&
                            n.type === w.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: (0, I.YM)(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        u
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (s.forEach((t) => {
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
                }, [u, n, s, c, r, h]);
            return {
                data: D,
                loading: u,
                version: o,
                visibleItemIds: g,
                endVisible: a,
                isRefreshing: m,
                handleOnRefresh: L,
                stickyHeaderIndices: R,
                viewabilityConfigCallbackPairs: G,
            };
        })({ showDot: u, notificationItem: o }),
        N = E();
    i.useEffect(
        () => () => {
            N();
        },
        [N],
    );
    let S = (0, d.bG)([y.A], () => y.A.hasNewContent(), []),
        M = (0, d.bG)([y.A], () => y.A.isHydrating(), []),
        G = i.useMemo(() => A[0].onViewableItemsChanged, [A]),
        { registerItemRef: L } =
            ((t = i.useRef(null)),
            (n = i.useRef(new Map())),
            (l = i.useRef(new Set())),
            (s = i.useRef(G)),
            (r = i.useRef(x)),
            i.useEffect(() => {
                (s.current = G), (r.current = x);
            }, [G, x]),
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
        D = i.useMemo(() => x.some((e) => "end" === e.data.kind), [x]),
        R = i.useCallback(() => {
            if (D) return;
            let e = c.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                h ||
                p ||
                M ||
                (g(!0),
                (0, I._x)().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [p, h, M, D, c]);
    i.useEffect(() => {
        let e = c.current;
        if (null != e)
            return (
                e.addEventListener("scroll", R),
                () => {
                    e.removeEventListener("scroll", R);
                }
            );
    }, [R, c]);
    let U = i.useCallback(() => {
            c.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [c]),
        V = i.useCallback(() => {
            f(), U();
        }, [f, U]),
        O = i.useCallback(
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
                              { ref: (t) => L(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(eN, { item: e }) },
                              e.id,
                          ),
            [L],
        );
    return p && 0 === x.length
        ? (0, a.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, a.jsxs)("div", {
              className: eS.k,
              children: [
                  S &&
                      !v &&
                      (0, a.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, a.jsx)("button", {
                              onClick: V,
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
                      className: eS.j,
                      children: [
                          x.map((e) => O(e)),
                          !D &&
                              (h || M) &&
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
var eG = n(852456),
    eL = n(964623);
let eD = (0, h.A)(function (e) {
    let { width: t } = e,
        n = (0, A.c)("ICYMIPage");
    i.useEffect(() => {
        n || (0, r.pX)(eA.BVt.ME);
    }, [n]),
        i.useLayoutEffect(() => {
            n && m.I(eA.BVt.ICYMI);
        }, [n]),
        (0, g.Ay)(() => {
            n && (0, v.d)("icymi");
        });
    let l = (0, d.bG)([f.A], () => f.A.theme),
        h = (0, d.bG)([y.A], () => y.A.isRefreshing()),
        b = i.useRef(null);
    (0, x.HU)({ location: Y.intl.string(Y.t["jnXV/V"]) });
    let [j, k] = i.useState(!1);
    i.useEffect(() => {
        function e(e) {
            e.metaKey && k(!0);
        }
        function t(e) {
            "Meta" === e.key && k(!1);
        }
        function n() {
            k(!1);
        }
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
        w = A.f8.useConfig({ location: "icymi page" }).enabled,
        _ = i.useCallback(
            async (e) => {
                e.metaKey && w
                    ? await (0, I.be)(eA.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await T();
            },
            [T, w],
        ),
        C = j && w ? Y.intl.string(Y.t.YplSn2) : Y.intl.string(Y.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: s()(eL.TE, eG.kL),
              children: [
                  (0, a.jsx)(c.N, {
                      theme: l,
                      children: (e) =>
                          (0, a.jsxs)(p.A, {
                              className: e,
                              toolbar: (0, a.jsx)(p.A.Icon, {
                                  icon: o.f,
                                  tooltip: C,
                                  onClick: _,
                                  disabled: h,
                                  "aria-label": C,
                              }),
                              children: [
                                  (0, a.jsx)(p.A.Icon, { icon: u.g, "aria-hidden": !0 }),
                                  (0, a.jsx)(p.A.Title, { children: Y.intl.string(Y.t["jnXV/V"]) }),
                                  (0, a.jsx)(p.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: eG.HH,
                                          children: Y.intl.string(Y.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: b,
                      className: s()(eL.Qs, eG.Qs),
                      children: (0, a.jsx)(eM, { scrollContainerRef: b }),
                  }),
              ],
          })
        : null;
});
