n.d(t, { Z: () => K });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(843611),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    p = n(884338),
    h = n(933557),
    f = n(471445),
    g = n(111028),
    m = n(978003),
    b = n(245216),
    _ = n(739566),
    O = n(930282),
    y = n(318713),
    j = n(47930),
    v = n(123145),
    x = n(25015),
    C = n(178480),
    E = n(518950),
    S = n(131704),
    I = n(601964),
    P = n(592125),
    N = n(720202),
    Z = n(430824),
    T = n(821020),
    w = n(948154),
    A = n(804932),
    R = n(993609),
    D = n(987889),
    L = n(586694),
    M = n(981631),
    k = n(943910),
    G = n(388032),
    U = n(361584);
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
    let { message: t, channel: n, focusProps: l, isSelected: a, isUnread: s, groupedMessages: d } = e,
        p = n.type === M.d4z.UNKNOWN ? u.VL1 : (0, f.KS)(n, null),
        m = (0, h.ZP)(n, !1),
        b = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n.getGuildId())),
        { nick: O, colorString: y } = (0, _.ZP)(t),
        { avatarSrc: x, eventHandlers: C } = (0, E.Z)({
            userId: t.author.id,
            size: u.EFr.SIZE_32,
            guildId: null == b ? void 0 : b.id,
            animateOnHover: !0,
        }),
        S = n.type !== M.d4z.GUILD_ANNOUNCEMENT || null == b,
        P = (0, j.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0,
        }),
        T = (0, r.jsx)("div", {
            className: U.usernameTagContainer,
            inert: !0,
            children: (0, r.jsx)(v.Z, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: U.username,
            }),
        });
    return (
        (0, i.useEffect)(() => {
            null != b && N.Z.requestMember(b.id, t.author.id);
        }, [b, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            F(B({}, l), {
                children: (0, r.jsxs)("div", {
                    onMouseLeave: C.onMouseLeave,
                    onMouseEnter: C.onMouseEnter,
                    className: U.messageContainer,
                    children: [
                        s && !a && (0, r.jsx)("div", { className: U.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: "start",
                            style: {
                                width: "fit-content",
                                marginTop: "4px",
                            },
                            children: S
                                ? (0, r.jsx)(L.q, {
                                      "aria-label": "User Avatar",
                                      src: x,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != b ? (0, I.EB)(b, 24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                  })
                                : (0, r.jsx)(L.E, {
                                      "aria-label": "Guild Icon",
                                      src: (0, I.EB)(b, 32),
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: t.author.getAvatarURL(b.id, 24),
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                  }),
                        }),
                        (0, r.jsxs)(u.Kqy, {
                            gap: 0,
                            style: { minWidth: 0 },
                            children: [
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    gap: 4,
                                    style: {
                                        whiteSpace: "nowrap",
                                        minWidth: 0,
                                        justifyContent: "space-between",
                                    },
                                    children: [
                                        S
                                            ? (0, r.jsxs)("div", {
                                                  className: U.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: U.username,
                                                          style: { color: null != y ? y : void 0 },
                                                          children: (0, r.jsx)(g.Z, { children: T }),
                                                      }),
                                                      P,
                                                  ],
                                              })
                                            : (0, r.jsx)(g.Z, {
                                                  children: (0, r.jsx)(u.Heading, {
                                                      variant: "text-md/semibold",
                                                      style: { color: null != y ? y : void 0 },
                                                      className: U.username,
                                                      children: b.name,
                                                  }),
                                              }),
                                        (0, r.jsxs)(u.Kqy, {
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
                                                    ? (0, r.jsx)(u.mAB, {
                                                          className: U.mentionBadge,
                                                          count: 1,
                                                      })
                                                    : (0, r.jsx)(z, { message: t }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 4,
                                    inert: !0,
                                    className: o()(U.channelName, {
                                        [U.unread]: s,
                                        [U.selected]: a,
                                    }),
                                    children: [
                                        null !== p &&
                                            (0, r.jsx)(p, {
                                                size: "xxs",
                                                className: U.inlineIcon,
                                            }),
                                        (0, r.jsxs)(u.Text, {
                                            variant: "text-sm/medium",
                                            lineClamp: 1,
                                            className: o()(U.channelName, {
                                                [U.unread]: s,
                                                [U.selected]: a,
                                            }),
                                            children: [m, !S && " \xB7 ".concat(O)],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(W, {
                                    message: t,
                                    isUnread: s,
                                    isSelected: a,
                                    channel: n,
                                }),
                                d.length > 0 &&
                                    (0, r.jsx)(u.Kqy, {
                                        gap: 4,
                                        style: {
                                            minWidth: 0,
                                            marginTop: 4,
                                            marginBottom: 4,
                                        },
                                        children: (0, r.jsx)(H, { overflowMessages: d }),
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
        n = (0, a.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id,
        ).slice(0, 3);
    return (0, r.jsxs)(u.Kqy, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [
            (0, r.jsx)(p.ZP, {
                users: n,
                useFallbackUserForPopout: !0,
                size: p.u8.SIZE_16,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                className: U.overflowText,
                children: G.intl.formatToPlainString(k.default.NzUuLD, { count: t.length }),
            }),
        ],
    });
}
function z(e) {
    let { message: t } = e,
        n = (0, C.a3)(t.timestamp.getTime());
    return (0, r.jsx)(y.Z, {
        timestamp: t.timestamp,
        className: U.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n,
    });
}
function W(e) {
    let { message: t, channel: n, isUnread: l, isSelected: a } = e,
        { previewContent: s, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: a } = (0, x.Z)(t, {
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
                    i = t.embeds.some((e) => e.type === M.hBH.GIFV),
                    s = (function (e) {
                        let t = e.embeds.some((e) => e.type === M.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    c = (0, m.Z)(t),
                    d = t.stickerItems.length > 0,
                    p = t.isPoll(),
                    h = t.type === M.uaV.POLL_RESULT,
                    f = t.hasFlag(M.iLy.IS_VOICE_MESSAGE),
                    g = t.type === M.uaV.USER_JOIN,
                    _ = null;
                1 === s
                    ? (_ = u.XBm)
                    : s > 1
                      ? (_ = u.Ka2)
                      : c
                        ? (_ = b.Z)
                        : p || h
                          ? (_ = u.QDj)
                          : d
                            ? (_ = u.SlE)
                            : f && (_ = u.gj8);
                let y = !0,
                    j = null;
                if (e)
                    if (c) j = G.intl.string(G.t["9ddYKt"]);
                    else if (p) {
                        var v;
                        (y = !1), (j = null == (v = t.poll) ? void 0 : v.question.text);
                    } else
                        j = h
                            ? G.intl.string(G.t.sad2PH)
                            : i
                              ? G.intl.string(G.t.p0oZmy)
                              : s > 1
                                ? G.intl.formatToPlainString(G.t.rtfTKp, { count: s })
                                : 1 === s
                                  ? G.intl.string(G.t.tCcq5p)
                                  : d
                                    ? G.intl.format(G.t.zY4v1B, { stickerName: t.stickerItems[0].name })
                                    : f
                                      ? G.intl.string(G.t.slFYgi)
                                      : g
                                        ? G.intl.string(G.t.Yvvfw9)
                                        : G.intl.string(G.t.sDqZHL);
                else
                    (y = !1),
                        (j = (0, r.jsx)(O.ZP, {
                            content: a,
                            message: t,
                            compact: !1,
                            className: o()(U.message, {
                                [U.unread]: n,
                                [U.selected]: l,
                            }),
                        }));
                return (
                    e &&
                        (j = (0, r.jsx)("div", {
                            className: o()(U.message, {
                                [U.unread]: n,
                                [U.selected]: l,
                                [U.descriptionMessage]: y,
                            }),
                            children: j,
                        })),
                    {
                        previewContent: j,
                        Icon: _,
                    }
                );
            }, [t, a, n, l]);
        })({
            message: t,
            channel: n,
            isUnread: l,
            isSelected: a,
        });
    return (0, r.jsxs)(u.Kqy, {
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
            (0, r.jsx)(u.Text, {
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
        let { message: l, groupedMessages: a, isUnread: p } = e,
            h = l.message,
            f = (0, A.fJ)(),
            { params: g } = (0, s.$B)(),
            m = (0, c.e7)([P.Z], () => {
                if (null == h) return null;
                let e = P.Z.getChannel(l.channelId);
                return null != e
                    ? e
                    : new S.nl({
                          id: l.channelId,
                          guild_id: l.guildId,
                          type: M.d4z.UNKNOWN,
                          name: G.intl.string(G.t.J90oLW),
                      });
            }),
            b = (0, R.z)((e) => {
                var t;
                return e.isMenuOpenForMessage(null != (t = null == h ? void 0 : h.id) ? t : null);
            }),
            { notificationCenterVariant: _ } = (0, T.pN)({ location: "NotificationsInboxMessageUnit" }),
            O = i.useMemo(
                () => "".concat(null == h ? void 0 : h.author.username, ": ").concat(null == m ? void 0 : m.name),
                [null == h ? void 0 : h.author.username, null == m ? void 0 : m.name],
            ),
            y = null != (t = null == a ? void 0 : a.map((e) => e.message).filter((e) => null != e)) ? t : [];
        return null == h || null == m
            ? null
            : (0, r.jsx)(u.kL8, {
                  "aria-label": O,
                  className: o()(U.messageClickableContainer, {
                      [U.selected]: h.id === g.messageId,
                      [U.actionMenuOpen]: b,
                  }),
                  onClick: () => {
                      w.Z.inboxItemClick({
                          message: h,
                          channel: m,
                          isUnread: p,
                          isSidebar: _ === T.jP.SIDEBAR,
                          viewId: f,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, A.Qz)({
                              interactionType: A.s_.CONTEXT_MENU,
                              message: h,
                              viewId: f,
                          }),
                          (0, d.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("74922").then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, F(B({}, t), { channel: m }));
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, r.jsx)(V, {
                      message: h,
                      channel: m,
                      isSelected: h.id === g.messageId,
                      groupedMessages: y,
                      isUnread: p,
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
