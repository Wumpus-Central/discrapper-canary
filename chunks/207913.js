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
    f = n(933557),
    h = n(471445),
    g = n(111028),
    m = n(978003),
    b = n(245216),
    O = n(739566),
    y = n(930282),
    _ = n(318713),
    v = n(47930),
    j = n(123145),
    x = n(25015),
    C = n(178480),
    E = n(518950),
    S = n(131704),
    P = n(601964),
    I = n(592125),
    N = n(720202),
    Z = n(430824),
    w = n(821020),
    T = n(948154),
    A = n(804932),
    R = n(993609),
    D = n(987889),
    M = n(586694),
    L = n(981631),
    k = n(997998),
    U = n(388032),
    G = n(66449);
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
function V(e, t) {
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
function F(e) {
    let { message: t, channel: n, focusProps: l, isSelected: a, isUnread: s, groupedMessages: d } = e,
        p = n.type === L.d4z.UNKNOWN ? u.VL1 : (0, h.KS)(n, null),
        m = (0, f.ZP)(n, !1),
        b = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n.getGuildId())),
        { nick: y, colorString: _ } = (0, O.ZP)(t),
        { avatarSrc: x, eventHandlers: C } = (0, E.Z)({
            userId: t.author.id,
            size: u.EFr.SIZE_32,
            guildId: null == b ? void 0 : b.id,
            animateOnHover: !0,
        }),
        S = n.type !== L.d4z.GUILD_ANNOUNCEMENT || null == b,
        I = (0, v.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0,
        }),
        w = (0, r.jsx)("div", {
            className: G.usernameTagContainer,
            inert: !0,
            children: (0, r.jsx)(j.Z, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: G.username,
            }),
        });
    return (
        (0, i.useEffect)(() => {
            null != b && N.Z.requestMember(b.id, t.author.id);
        }, [b, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            V(B({}, l), {
                children: (0, r.jsxs)("div", {
                    onMouseLeave: C.onMouseLeave,
                    onMouseEnter: C.onMouseEnter,
                    className: G.messageContainer,
                    children: [
                        s && !a && (0, r.jsx)("div", { className: G.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: "start",
                            style: {
                                width: "fit-content",
                                marginTop: "4px",
                            },
                            children: S
                                ? (0, r.jsx)(M.q, {
                                      "aria-label": "User Avatar",
                                      src: x,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != b ? (0, P.EB)(b, 24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                  })
                                : (0, r.jsx)(M.E, {
                                      "aria-label": "Guild Icon",
                                      src: (0, P.EB)(b, 32),
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
                                                  className: G.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          className: G.username,
                                                          style: { color: null != _ ? _ : void 0 },
                                                          children: (0, r.jsx)(g.Z, { children: w }),
                                                      }),
                                                      I,
                                                  ],
                                              })
                                            : (0, r.jsx)(g.Z, {
                                                  children: (0, r.jsx)(u.X6q, {
                                                      variant: "text-md/semibold",
                                                      style: { color: null != _ ? _ : void 0 },
                                                      className: G.username,
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
                                                          className: G.mentionBadge,
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
                                    className: o()(G.channelName, {
                                        [G.unread]: s,
                                        [G.selected]: a,
                                    }),
                                    children: [
                                        null !== p &&
                                            (0, r.jsx)(p, {
                                                size: "xxs",
                                                className: G.inlineIcon,
                                            }),
                                        (0, r.jsxs)(u.Text, {
                                            variant: "text-sm/medium",
                                            lineClamp: 1,
                                            className: o()(G.channelName, {
                                                [G.unread]: s,
                                                [G.selected]: a,
                                            }),
                                            children: [m, !S && " \xB7 ".concat(y)],
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
                className: G.overflowText,
                children: U.intl.formatToPlainString(k.default.NzUuLC, { count: t.length }),
            }),
        ],
    });
}
function z(e) {
    let { message: t } = e,
        n = (0, C.a3)(t.timestamp.getTime());
    return (0, r.jsx)(_.Z, {
        timestamp: t.timestamp,
        className: G.timestamp,
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
                    i = t.embeds.some((e) => e.type === L.hBH.GIFV),
                    s = (function (e) {
                        let t = e.embeds.some((e) => e.type === L.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    c = (0, m.Z)(t),
                    d = t.stickerItems.length > 0,
                    p = t.isPoll(),
                    f = t.type === L.uaV.POLL_RESULT,
                    h = t.hasFlag(L.iLy.IS_VOICE_MESSAGE),
                    g = t.type === L.uaV.USER_JOIN,
                    O = null;
                1 === s
                    ? (O = u.XBm)
                    : s > 1
                      ? (O = u.Ka2)
                      : c
                        ? (O = b.Z)
                        : p || f
                          ? (O = u.QDj)
                          : d
                            ? (O = u.SlE)
                            : h && (O = u.gj8);
                let _ = !0,
                    v = null;
                if (e)
                    if (c) v = U.intl.string(U.t["9ddYKi"]);
                    else if (p) {
                        var j;
                        (_ = !1), (v = null == (j = t.poll) ? void 0 : j.question.text);
                    } else
                        v = f
                            ? U.intl.string(U.t.sad2PD)
                            : i
                              ? U.intl.string(U.t.p0oZm5)
                              : s > 1
                                ? U.intl.formatToPlainString(U.t.rtfTKi, { count: s })
                                : 1 === s
                                  ? U.intl.string(U.t.tCcq5u)
                                  : d
                                    ? U.intl.format(U.t.zY4v1N, { stickerName: t.stickerItems[0].name })
                                    : h
                                      ? U.intl.string(U.t.slFYgo)
                                      : g
                                        ? U.intl.string(U.t.Yvvfw8)
                                        : U.intl.string(U.t.sDqZHB);
                else
                    (_ = !1),
                        (v = (0, r.jsx)(y.ZP, {
                            content: a,
                            message: t,
                            compact: !1,
                            className: o()(G.message, {
                                [G.unread]: n,
                                [G.selected]: l,
                            }),
                        }));
                return (
                    e &&
                        (v = (0, r.jsx)("div", {
                            className: o()(G.message, {
                                [G.unread]: n,
                                [G.selected]: l,
                                [G.descriptionMessage]: _,
                            }),
                            children: v,
                        })),
                    {
                        previewContent: v,
                        Icon: O,
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
                    className: G.inlineIcon,
                }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                lineClamp: 1,
                className: G.message,
                children: s,
            }),
        ],
    });
}
let K = (0, i.memo)(
    function (e) {
        var t;
        let { message: l, groupedMessages: a, isUnread: p } = e,
            f = l.message,
            h = (0, A.fJ)(),
            { params: g } = (0, s.$B)(),
            m = (0, c.e7)([I.Z], () => {
                if (null == f) return null;
                let e = I.Z.getChannel(l.channelId);
                return null != e
                    ? e
                    : new S.nl({
                          id: l.channelId,
                          guild_id: l.guildId,
                          type: L.d4z.UNKNOWN,
                          name: U.intl.string(U.t.J90oLS),
                      });
            }),
            b = (0, R.z)((e) => {
                var t;
                return e.isMenuOpenForMessage(null != (t = null == f ? void 0 : f.id) ? t : null);
            }),
            { notificationCenterVariant: O } = (0, w.pN)({ location: "NotificationsInboxMessageUnit" }),
            y = i.useMemo(
                () => "".concat(null == f ? void 0 : f.author.username, ": ").concat(null == m ? void 0 : m.name),
                [null == f ? void 0 : f.author.username, null == m ? void 0 : m.name],
            ),
            _ = null != (t = null == a ? void 0 : a.map((e) => e.message).filter((e) => null != e)) ? t : [];
        return null == f || null == m
            ? null
            : (0, r.jsx)(u.kL8, {
                  "aria-label": y,
                  className: o()(G.messageClickableContainer, {
                      [G.selected]: f.id === g.messageId,
                      [G.actionMenuOpen]: b,
                  }),
                  onClick: () => {
                      T.Z.inboxItemClick({
                          message: f,
                          channel: m,
                          isUnread: p,
                          isSidebar: O === w.jP.SIDEBAR,
                          viewId: h,
                      });
                  },
                  onContextMenu: (e) => {
                      e.preventDefault(),
                          (0, A.Qz)({
                              interactionType: A.s_.CONTEXT_MENU,
                              message: f,
                              viewId: h,
                          }),
                          (0, d.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e("74922").then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, V(B({}, t), { channel: m }));
                              },
                              { disableClickTrap: !0 },
                          );
                  },
                  children: (0, r.jsx)(F, {
                      message: f,
                      channel: m,
                      isSelected: f.id === g.messageId,
                      groupedMessages: _,
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
