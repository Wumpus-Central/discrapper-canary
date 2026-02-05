n.d(t, { W: () => f });
var l = n(627968),
    i = n(64700),
    s = n(442433),
    r = n(49229),
    a = n(956793),
    u = n(657331),
    o = n(961350),
    d = n(810412),
    c = n(914853),
    h = n(145567),
    g = n(67103),
    I = n(34307),
    E = n(652215),
    A = n(731854);
function f() {
    return {
        handlePrimaryAction: i.useCallback((e) => {
            switch (e.type) {
                case g.c.OPEN_DIRECT_MESSAGE:
                    if (null == e.userId) return;
                    (async () => {
                        try {
                            await (0, h.D$)({
                                target: { kind: h.bB.DM_USER, userId: e.userId, messageId: null },
                                source: I.B.FRIENDS_WIDGET_CLICK,
                                widgetType: E.uss.FRIENDS,
                            });
                        } catch {}
                    })(),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_LIST,
                            value: d.IP.CHAT,
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
                            guildId: e.guildId ?? null,
                            messageId: null,
                        },
                        source: I.B.FRIENDS_WIDGET_CLICK,
                        widgetType: E.uss.FRIENDS,
                    }),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_LIST,
                            value: d.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "channel",
                        });
                    break;
                case g.c.CONNECT_VOICE_CHANNEL:
                    if (null == e.channelId) return;
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.VOICE,
                        value: d.IP.CHANNEL_SELECTED,
                        secondaryValue: "voice",
                    }),
                        a.default.selectVoiceChannel(e.channelId);
                    break;
                case g.c.DISCONNECT_VOICE_CHANNEL:
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.CALL_BUTTON,
                        value: d.IP.DISABLED,
                        secondaryValue: "voice",
                        userId: o.default.getId(),
                    }),
                        a.default.disconnect();
                    break;
                case g.c.ACCEPT_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    r.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_REQUEST,
                            value: d.IP.ACCEPT_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.DECLINE_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    r.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_REQUEST,
                            value: d.IP.DECLINE_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.CANCEL_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    r.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_REQUEST,
                            value: d.IP.CANCEL_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.SEND_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    r.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_REQUEST,
                            value: d.IP.SEND_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case g.c.OPEN_FRIEND_MODAL:
                    if (null == e.userId) return;
                    (0, u.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId ?? void 0,
                        channelId: e.channelId,
                        appContext: E.BRT.OVERLAY,
                    }),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_LIST,
                            value: d.IP.PROFILE_OPENED,
                            userId: e.userId,
                        });
                    break;
                case g.c.SEARCH_FRIENDS:
                    (0, d.YX)(E.uss.FRIENDS, { type: d.Z5.FRIEND_LIST, value: d.IP.SEARCH });
                    break;
                case g.c.SEND_ACTIVITY_INVITE:
                    (0, d.YX)(E.uss.FRIENDS, { type: d.Z5.INVITE, value: d.IP.INVITE_SENT, userId: e.userId });
                    break;
                case g.c.ASK_TO_JOIN:
                    (0, d.YX)(E.uss.FRIENDS, { type: d.Z5.INVITE, value: d.IP.JOIN_REQUEST_SENT, userId: e.userId });
                    break;
                case g.c.USER_CONTEXT_MENU:
                case g.c.OPEN_SETTINGS_MODAL:
                    (0, d.YX)(E.uss.FRIENDS, { type: d.Z5.FRIEND_LIST, value: d.IP.SETTINGS_OPENED, userId: e.userId });
                    break;
                case g.c.TAB_CHANGE: {
                    let t = e.tab;
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.FRIEND_LIST,
                        value: ((e) => {
                            switch (e) {
                                case c.x.FRIENDS:
                                    return d.IP.FRIEND_TAB_SELECTED;
                                case c.x.MESSAGES:
                                    return d.IP.MESSAGES_TAB_SELECTED;
                                case c.x.VOICE:
                                    return d.IP.VOICE_TAB_SELECTED;
                                default:
                                    return d.IP.UNKNOWN;
                            }
                        })(t),
                    });
                    break;
                }
                default:
                    e.type;
            }
        }, []),
        handleContextMenu: i.useCallback((e) => {
            switch (e.type) {
                case g.K.FRIEND_ROW: {
                    let { user: t, friendGroupId: i } = e;
                    if (null == t) return;
                    (0, s.L3)(
                        e.event,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("77687")]).then(
                                n.bind(n, 341354),
                            );
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: t,
                                    appContext: E.BRT.OVERLAY,
                                    widgetType: E.uss.FRIENDS,
                                    friendGroupId: i,
                                    showManageFriendGroupsItems: !0,
                                });
                        },
                        { context: E.BRT.OVERLAY },
                    ),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_LIST,
                            value: d.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-row",
                        });
                    break;
                }
                case g.K.FRIEND_GROUP: {
                    let { groupId: t, groupName: i } = e;
                    if (null == t || null == i) return;
                    (0, s.L3)(e.event, async () => {
                        let { default: e } = await n.e("43562").then(n.bind(n, 602321));
                        return (n) => (0, l.jsx)(e, { ...n, groupId: t, groupName: i });
                    }),
                        (0, d.YX)(E.uss.FRIENDS, {
                            type: d.Z5.FRIEND_LIST,
                            value: d.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-group",
                        });
                    break;
                }
                case g.K.DM_CHANNEL: {
                    let { channel: t, user: i } = e;
                    if (null == t || null == i) return;
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.TEXT_CHAT,
                        value: d.IP.SETTINGS_OPENED,
                        secondaryValue: "dm",
                    }),
                        (0, s.L3)(e.event, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("25339")]).then(
                                n.bind(n, 92016),
                            );
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: i,
                                    channel: t,
                                    showModalItems: !1,
                                    widgetType: E.uss.FRIENDS,
                                });
                        });
                    break;
                }
                case g.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.TEXT_CHAT,
                        value: d.IP.SETTINGS_OPENED,
                        secondaryValue: "group-dm",
                    }),
                        (0, s.L3)(e.event, async () => {
                            let { default: t } = await n.e("77927").then(n.bind(n, 320442));
                            return (n) =>
                                (0, l.jsx)(t, { ...n, channel: e.channel, selected: !1, widgetType: E.uss.FRIENDS });
                        });
                    break;
                case g.K.GUILD_TEXT_CHANNEL: {
                    let { channel: t, guild: i } = e;
                    if (null == t || null == i) return;
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.TEXT_CHAT,
                        value: d.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-text-channel",
                    }),
                        t.isModeratorReportChannel?.()
                            ? (0, s.L3)(e.event, async () => {
                                  let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                  return (n) => (0, l.jsx)(e, { ...n, channel: t, widgetType: E.uss.FRIENDS });
                              })
                            : (0, s.L3)(e.event, async () => {
                                  let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                      n.bind(n, 813407),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: E.uss.FRIENDS });
                              });
                    break;
                }
                case g.K.VOICE_CHANNEL: {
                    let { channel: t, guild: i } = e;
                    if (null == t || null == i) return;
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.TEXT_CHAT,
                        value: d.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-channel",
                    }),
                        (0, s.L3)(e.event, async () => {
                            let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                            return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: E.uss.FRIENDS });
                        });
                    break;
                }
                case g.K.VOICE_USER: {
                    let { user: t, channelId: i, guild: r } = e;
                    if (null == t || null == i) return;
                    let a = r?.id ?? null;
                    (0, d.YX)(E.uss.FRIENDS, {
                        type: d.Z5.TEXT_CHAT,
                        value: d.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-user",
                    }),
                        (0, s.L3)(e.event, async () => {
                            let { default: i } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, l.jsx)(i, {
                                    ...n,
                                    user: t,
                                    guildId: a ?? void 0,
                                    channelId: e.channelId,
                                    mediaEngineContext: A.x.DEFAULT,
                                    appContext: E.BRT.OVERLAY,
                                });
                        });
                    break;
                }
                default:
                    e.type;
            }
        }, []),
    };
}
