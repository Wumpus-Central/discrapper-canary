n.d(t, { Z: () => K });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(828700),
    c = n(442837),
    u = n(194983),
    d = n(481060),
    f = n(239091),
    h = n(884338),
    p = n(933557),
    g = n(471445),
    b = n(978003),
    m = n(245216),
    y = n(739566),
    O = n(930282),
    v = n(318713),
    j = n(47930),
    C = n(123145),
    x = n(25015),
    E = n(178480),
    S = n(518950),
    I = n(131704),
    _ = n(601964),
    P = n(592125),
    N = n(720202),
    Z = n(430824),
    w = n(821020),
    T = n(948154),
    A = n(804932),
    R = n(993609),
    D = n(987889),
    M = n(586694),
    L = n(981631),
    k = n(975114),
    G = n(388032),
    U = n(834401);
function B(e) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    let { message: t, channel: n, focusProps: l, isSelected: o, isUnread: s, groupedMessages: f } = e,
        h = n.type === L.d4z.UNKNOWN ? d.VL1 : (0, g.KS)(n, null),
        b = (0, p.ZP)(n, !1),
        m = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n.getGuildId())),
        { nick: O, colorString: v } = (0, y.ZP)(t),
        { avatarSrc: x, eventHandlers: E } = (0, S.Z)({
            userId: t.author.id,
            size: d.EFr.SIZE_32,
            guildId: null == m ? void 0 : m.id,
            animateOnHover: !0,
        }),
        I = n.type !== L.d4z.GUILD_ANNOUNCEMENT || null == m,
        P = (0, j.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0,
        }),
        w = (0, r.jsx)("div", {
            className: U.usernameTagContainer,
            inert: !0,
            children: (0, r.jsx)(C.Z, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: U.username,
            }),
        });
    return (
        (0, i.useEffect)(() => {
            null != m && N.Z.requestMember(m.id, t.author.id);
        }, [m, t.author.id]),
        (0, r.jsx)(
            d.tEY,
            F(B({}, l), {
                children: (0, r.jsxs)("div", {
                    onMouseLeave: E.onMouseLeave,
                    onMouseEnter: E.onMouseEnter,
                    className: U.messageContainer,
                    children: [
                        s && !o && (0, r.jsx)("div", { className: U.unreadDot }),
                        (0, r.jsx)(d.Kqy, {
                            align: "start",
                            style: {
                                width: "fit-content",
                                marginTop: "4px",
                            },
                            children: I
                                ? (0, r.jsx)(M.q, {
                                      "aria-label": "User Avatar",
                                      src: x,
                                      size: d.EFr.SIZE_32,
                                      cornerIconUrl: null != m ? (0, _.EB)(m, 24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                  })
                                : (0, r.jsx)(M.E, {
                                      "aria-label": "Guild Icon",
                                      src: (0, _.EB)(m, 32),
                                      size: d.EFr.SIZE_32,
                                      cornerIconUrl: t.author.getAvatarURL(m.id, 24),
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                  }),
                        }),
                        (0, r.jsxs)(d.Kqy, {
                            gap: 0,
                            style: { minWidth: 0 },
                            children: [
                                (0, r.jsxs)(d.Kqy, {
                                    direction: "horizontal",
                                    gap: 4,
                                    style: {
                                        whiteSpace: "nowrap",
                                        minWidth: 0,
                                        justifyContent: "space-between",
                                    },
                                    children: [
                                        I
                                            ? (0, r.jsxs)("div", {
                                                  className: U.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: U.username,
                                                          style: { color: null != v ? v : void 0 },
                                                          children: (0, r.jsx)(u.Z, { children: w }),
                                                      }),
                                                      P,
                                                  ],
                                              })
                                            : (0, r.jsx)(u.Z, {
                                                  children: (0, r.jsx)(d.Heading, {
                                                      variant: "text-md/semibold",
                                                      style: { color: null != v ? v : void 0 },
                                                      className: U.username,
                                                      children: m.name,
                                                  }),
                                              }),
                                        (0, r.jsxs)(d.Kqy, {
                                            direction: "horizontal",
                                            gap: 4,
                                            align: "center",
                                            style: { width: "fit-content" },
                                            children: [
                                                (0, r.jsx)(D.Z, {
                                                    message: t,
                                                    channel: n,
                                                    isUnread: s,
                                                }),
                                                t.mentioned && s
                                                    ? (0, r.jsx)(d.mAB, {
                                                          className: U.mentionBadge,
                                                          count: 1,
                                                      })
                                                    : (0, r.jsx)(W, { message: t }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(d.Kqy, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 4,
                                    inert: !0,
                                    className: a()(U.channelName, {
                                        [U.unread]: s,
                                        [U.selected]: o,
                                    }),
                                    children: [
                                        null !== h &&
                                            (0, r.jsx)(h, {
                                                size: "xxs",
                                                className: U.inlineIcon,
                                            }),
                                        (0, r.jsxs)(d.Text, {
                                            variant: "text-sm/medium",
                                            lineClamp: 1,
                                            className: a()(U.channelName, {
                                                [U.unread]: s,
                                                [U.selected]: o,
                                            }),
                                            children: [b, !I && " \xB7 ".concat(O)],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(z, {
                                    message: t,
                                    isUnread: s,
                                    isSelected: o,
                                    channel: n,
                                }),
                                f.length > 0 &&
                                    (0, r.jsx)(d.Kqy, {
                                        gap: 4,
                                        style: {
                                            minWidth: 0,
                                            marginTop: 4,
                                            marginBottom: 4,
                                        },
                                        children: (0, r.jsx)(H, { overflowMessages: f }),
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
        )
    );
}
function H(e) {
    let { overflowMessages: t } = e,
        n = (0, o.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, r.jsxs)(d.Kqy, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, r.jsx)(h.ZP, {
                users: n,
                useFallbackUserForPopout: !0,
                size: h.u8.SIZE_16,
            }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                className: U.overflowText,
                children: G.intl.formatToPlainString(k.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function W(e) {
    let { message: t } = e,
        n = (0, E.a3)(t.timestamp.getTime());
    return (0, r.jsx)(v.Z, {
        timestamp: t.timestamp,
        className: U.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function z(e) {
    let { message: t, channel: n, isUnread: l, isSelected: o } = e,
        { previewContent: s, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: o } = (0, x.Z)(t, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                });
            return (0, i.useMemo)(() => {
                let e = "" === t.content,
                    i = t.embeds.some((e) => e.type === L.hBH.GIFV),
                    s = (function (e) {
                        let t = e.embeds.some((e) => e.type === L.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    c = (0, b.Z)(t),
                    u = t.stickerItems.length > 0,
                    f = t.isPoll(),
                    h = t.type === L.uaV.POLL_RESULT,
                    p = t.hasFlag(L.iLy.IS_VOICE_MESSAGE),
                    g = t.type === L.uaV.USER_JOIN,
                    y = null;
                1 === s
                    ? (y = d.XBm)
                    : s > 1
                      ? (y = d.Ka2)
                      : c
                        ? (y = m.Z)
                        : f || h
                          ? (y = d.QDj)
                          : u
                            ? (y = d.SlE)
                            : p && (y = d.gj8);
                let v = !0,
                    j = null;
                if (e)
                    if (c) j = G.intl.string(G.t["9ddYKt"]);
                    else if (f) {
                        var C;
                        (v = !1), (j = null == (C = t.poll) ? void 0 : C.question.text);
                    } else
                        j = h
                            ? G.intl.string(G.t.sad2PH)
                            : i
                              ? G.intl.string(G.t.p0oZmy)
                              : s > 1
                                ? G.intl.formatToPlainString(G.t.rtfTKp, { count: s })
                                : 1 === s
                                  ? G.intl.string(G.t.tCcq5p)
                                  : u
                                    ? G.intl.format(G.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                    : p
                                      ? G.intl.string(G.t.slFYgi)
                                      : g
                                        ? G.intl.string(G.t.Yvvfw9)
                                        : G.intl.string(G.t.sDqZHL);
                else
                    (v = !1),
                        (j = (0, r.jsx)(O.ZP, {
                            content: o,
                            message: t,
                            compact: !1,
                            className: a()(U.message, {
                                [U.unread]: n,
                                [U.selected]: l,
                            }),
                        }));
                return (
                    e &&
                        (j = (0, r.jsx)("div", {
                            className: a()(U.message, {
                                [U.unread]: n,
                                [U.selected]: l,
                                [U.descriptionMessage]: v,
                            }),
                            children: j,
                        })),
                    {
                        previewContent: j,
                        Icon: y,
                    }
                );
            }, [t, o, n, l]);
        })({
            message: t,
            channel: n,
            isUnread: l,
            isSelected: o,
        });
    return (0, r.jsxs)(d.Kqy, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [
            null != c &&
                (0, r.jsx)(c, {
                    size: "xxs",
                    className: U.inlineIcon,
                }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/normal",
                lineClamp: 1,
                className: U.message,
                children: s,
            }),
        ],
    });
}
let K = (0, i.memo)(
    function (e) {
        var t;
        let { message: l, groupedMessages: o, isUnread: u } = e,
            h = l.message,
            p = (0, A.fJ)(),
            { params: g } = (0, s.$B)(),
            b = (0, c.e7)([P.Z], () => {
                if (null == h) return null;
                let e = P.Z.getChannel(l.channelId);
                return null != e
                    ? e
                    : new I.nl({
                          id: l.channelId,
                          guild_id: l.guildId,
                          type: L.d4z.UNKNOWN,
                          name: G.intl.string(G.t.J90oLW),
                      });
            }),
            m = (0, R.z)((e) => {
                var t;
                return e.isMenuOpenForMessage(null != (t = null == h ? void 0 : h.id) ? t : null);
            }),
            { notificationCenterVariant: y } = (0, w.pN)({ location: "NotificationsInboxMessageUnit" }),
            O = i.useMemo(
                () => "".concat(null == h ? void 0 : h.author.username, ": ").concat(null == b ? void 0 : b.name),
                [null == h ? void 0 : h.author.username, null == b ? void 0 : b.name],
            ),
            v = null != (t = null == o ? void 0 : o.map((e) => e.message).filter((e) => null != e)) ? t : [];
        return null == h || null == b
            ? null
            : (0, r.jsx)(d.kL8, {
                  "aria-label": O,
                  className: a()(U.messageClickableContainer, {
                      [U.selected]: h.id === g.messageId,
                      [U.actionMenuOpen]: m,
                  }),
                  onClick: () => {
                      T.Z.inboxItemClick({
                          message: h,
                          channel: b,
                          isUnread: u,
                          isSidebar: y === w.jP.SIDEBAR,
                          viewId: p,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, A.Qz)({
                              interactionType: A.s_.CONTEXT_MENU,
                              message: h,
                              viewId: p,
                          }),
                          (0, f.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("74922").then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, F(B({}, t), { channel: b }));
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, r.jsx)(V, {
                      message: h,
                      channel: b,
                      isSelected: h.id === g.messageId,
                      groupedMessages: v,
                      isUnread: u,
                  }),
              });
    },
    (e, t) => {
        var n, r;
        return (
            e.isUnread === t.isUnread &&
            e.message.id === t.message.id &&
            (null == (n = e.groupedMessages) ? void 0 : n.length) ===
                (null == (r = t.groupedMessages) ? void 0 : r.length)
        );
    },
);
