n.d(t, {
    W: () => A,
});
var l = n(627968),
    r = n(64700),
    i = n(442433),
    s = n(49229),
    a = n(956793),
    o = n(657331),
    u = n(961350),
    c = n(810412),
    d = n(914853),
    h = n(145567),
    g = n(67103),
    f = n(34307),
    p = n(652215),
    I = n(731854);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function A() {
    return {
        handlePrimaryAction: r.useCallback((e) => {
            var t, n;
            switch (e.type) {
                case g.c.OPEN_DIRECT_MESSAGE:
                    if (null == e.userId) return;
                    (async () => {
                        try {
                            await (0, h.D$)({
                                target: {
                                    kind: h.bB.DM_USER,
                                    userId: e.userId,
                                    messageId: null,
                                },
                                source: f.B.FRIENDS_WIDGET_CLICK,
                                widgetType: p.uss.FRIENDS,
                            });
                        } catch (e) {}
                    })(),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_LIST,
                            value: c.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "dm",
                        });
                    break;
                case g.c.OPEN_TEXT_CHAT_CHANNEL:
                    if (null == e.channelId) return;
                    (0, h.D$)({
                        target: {
                            kind: h.bB.CHANNEL,
                            channelId: e.channelId,
                            guildId: null != (t = e.guildId) ? t : null,
                            messageId: null,
                        },
                        source: f.B.FRIENDS_WIDGET_CLICK,
                        widgetType: p.uss.FRIENDS,
                    }),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_LIST,
                            value: c.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "channel",
                        });
                    break;
                case g.c.CONNECT_VOICE_CHANNEL:
                    if (null == e.channelId) return;
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.VOICE,
                        value: c.IP.CHANNEL_SELECTED,
                        secondaryValue: "voice",
                    }),
                        a.default.selectVoiceChannel(e.channelId);
                    break;
                case g.c.DISCONNECT_VOICE_CHANNEL:
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.CALL_BUTTON,
                        value: c.IP.DISABLED,
                        secondaryValue: "voice",
                        userId: u.default.getId(),
                    }),
                        a.default.disconnect();
                    break;
                case g.c.ACCEPT_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    s.A.addRelationship({
                        userId: e.userId,
                        context: {
                            location: "overlay-friends-widget",
                        },
                    }),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_REQUEST,
                            value: c.IP.ACCEPT_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.DECLINE_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    s.A.removeRelationship(e.userId, {
                        location: "overlay-friends-widget",
                    }),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_REQUEST,
                            value: c.IP.DECLINE_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.CANCEL_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    s.A.cancelFriendRequest(e.userId, {
                        location: "overlay-friends-widget",
                    }),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_REQUEST,
                            value: c.IP.CANCEL_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.SEND_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    s.A.addRelationship({
                        userId: e.userId,
                        context: {
                            location: "overlay-friends-widget",
                        },
                    }),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_REQUEST,
                            value: c.IP.SEND_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.OPEN_FRIEND_MODAL:
                    if (null == e.userId) return;
                    (0, o.openUserProfileModal)({
                        userId: e.userId,
                        guildId: null != (n = e.guildId) ? n : void 0,
                        channelId: e.channelId,
                        appContext: p.BRT.OVERLAY,
                    }),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_LIST,
                            value: c.IP.PROFILE_OPENED,
                            userId: e.userId,
                        });
                    break;
                case g.c.SEARCH_FRIENDS:
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.FRIEND_LIST,
                        value: c.IP.SEARCH,
                    });
                    break;
                case g.c.SEND_ACTIVITY_INVITE:
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.INVITE,
                        value: c.IP.INVITE_SENT,
                        userId: e.userId,
                    });
                    break;
                case g.c.ASK_TO_JOIN:
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.INVITE,
                        value: c.IP.JOIN_REQUEST_SENT,
                        userId: e.userId,
                    });
                    break;
                case g.c.USER_CONTEXT_MENU:
                case g.c.OPEN_SETTINGS_MODAL:
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.FRIEND_LIST,
                        value: c.IP.SETTINGS_OPENED,
                        userId: e.userId,
                    });
                    break;
                case g.c.TAB_CHANGE: {
                    let t = e.tab;
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.FRIEND_LIST,
                        value: ((e) => {
                            switch (e) {
                                case d.x.FRIENDS:
                                    return c.IP.FRIEND_TAB_SELECTED;
                                case d.x.MESSAGES:
                                    return c.IP.MESSAGES_TAB_SELECTED;
                                case d.x.VOICE:
                                    return c.IP.VOICE_TAB_SELECTED;
                                default:
                                    return c.IP.UNKNOWN;
                            }
                        })(t),
                    });
                    break;
                }
                default:
                    e.type;
            }
        }, []),
        handleContextMenu: r.useCallback((e) => {
            var t, r;
            switch (e.type) {
                case g.K.FRIEND_ROW: {
                    let { user: t, friendGroupId: r } = e;
                    if (null == t) return;
                    (0, i.L3)(
                        e.event,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("77687")]).then(
                                n.bind(n, 341354),
                            );
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    E(m({}, n), {
                                        user: t,
                                        appContext: p.BRT.OVERLAY,
                                        widgetType: p.uss.FRIENDS,
                                        friendGroupId: r,
                                        showManageFriendGroupsItems: !0,
                                    }),
                                );
                        },
                        {
                            context: p.BRT.OVERLAY,
                        },
                    ),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_LIST,
                            value: c.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-row",
                        });
                    break;
                }
                case g.K.FRIEND_GROUP: {
                    let { groupId: t, groupName: r } = e;
                    if (null == t || null == r) return;
                    (0, i.L3)(e.event, async () => {
                        let { default: e } = await n.e("43562").then(n.bind(n, 602321));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                E(m({}, n), {
                                    groupId: t,
                                    groupName: r,
                                }),
                            );
                    }),
                        (0, c.YX)(p.uss.FRIENDS, {
                            type: c.Z5.FRIEND_LIST,
                            value: c.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-group",
                        });
                    break;
                }
                case g.K.DM_CHANNEL: {
                    let { channel: t, user: r } = e;
                    if (null == t || null == r) return;
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.TEXT_CHAT,
                        value: c.IP.SETTINGS_OPENED,
                        secondaryValue: "dm",
                    }),
                        (0, i.L3)(e.event, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("29534"),
                                n.e("93169"),
                                n.e("25339"),
                            ]).then(n.bind(n, 92016));
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    E(m({}, n), {
                                        user: r,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: p.uss.FRIENDS,
                                    }),
                                );
                        });
                    break;
                }
                case g.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.TEXT_CHAT,
                        value: c.IP.SETTINGS_OPENED,
                        secondaryValue: "group-dm",
                    }),
                        (0, i.L3)(e.event, async () => {
                            let { default: t } = await n.e("77927").then(n.bind(n, 320442));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    E(m({}, n), {
                                        channel: e.channel,
                                        selected: !1,
                                        widgetType: p.uss.FRIENDS,
                                    }),
                                );
                        });
                    break;
                case g.K.GUILD_TEXT_CHANNEL: {
                    let { channel: r, guild: s } = e;
                    if (null == r || null == s) return;
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.TEXT_CHAT,
                        value: c.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-text-channel",
                    }),
                        (null == (t = r.isModeratorReportChannel) ? void 0 : t.call(r))
                            ? (0, i.L3)(e.event, async () => {
                                  let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                  return (t) =>
                                      (0, l.jsx)(
                                          e,
                                          E(m({}, t), {
                                              channel: r,
                                              widgetType: p.uss.FRIENDS,
                                          }),
                                      );
                              })
                            : (0, i.L3)(e.event, async () => {
                                  let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                      n.bind(n, 813407),
                                  );
                                  return (t) =>
                                      (0, l.jsx)(
                                          e,
                                          E(m({}, t), {
                                              channel: r,
                                              guild: s,
                                              widgetType: p.uss.FRIENDS,
                                          }),
                                      );
                              });
                    break;
                }
                case g.K.VOICE_CHANNEL: {
                    let { channel: t, guild: r } = e;
                    if (null == t || null == r) return;
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.TEXT_CHAT,
                        value: c.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-channel",
                    }),
                        (0, i.L3)(e.event, async () => {
                            let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    E(m({}, n), {
                                        channel: t,
                                        guild: r,
                                        widgetType: p.uss.FRIENDS,
                                    }),
                                );
                        });
                    break;
                }
                case g.K.VOICE_USER: {
                    let { user: t, channelId: s, guild: a } = e;
                    if (null == t || null == s) return;
                    let o = null != (r = null == a ? void 0 : a.id) ? r : null;
                    (0, c.YX)(p.uss.FRIENDS, {
                        type: c.Z5.TEXT_CHAT,
                        value: c.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-user",
                    }),
                        (0, i.L3)(e.event, async () => {
                            let { default: r } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, l.jsx)(
                                    r,
                                    E(m({}, n), {
                                        user: t,
                                        guildId: null != o ? o : void 0,
                                        channelId: e.channelId,
                                        mediaEngineContext: I.x.DEFAULT,
                                        appContext: p.BRT.OVERLAY,
                                    }),
                                );
                        });
                    break;
                }
                default:
                    e.type;
            }
        }, []),
    };
}
