n.d(t, { W: () => N });
var i = n(627968),
    l = n(64700),
    r = n(308368),
    s = n(308528),
    a = n(442433),
    o = n(684013),
    u = n(49229),
    d = n(956793),
    c = n(428249),
    h = n(657331),
    g = n(961350),
    m = n(734057),
    f = n(810412),
    A = n(914853),
    I = n(145567),
    E = n(67103),
    p = n(34307),
    _ = n(652215),
    S = n(381941),
    x = n(731854),
    T = n(985018);
function N() {
    return {
        handlePrimaryAction: l.useCallback((e) => {
            switch (e.type) {
                case E.c.OPEN_DIRECT_MESSAGE:
                    if (null == e.userId) return;
                    (async () => {
                        try {
                            await (0, I.D$)({
                                target: { kind: I.bB.DM_USER, userId: e.userId, messageId: null },
                                source: p.B.FRIENDS_WIDGET_CLICK,
                                widgetType: _.uss.FRIENDS,
                            });
                        } catch {}
                    })(),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_LIST,
                            value: f.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "dm",
                        });
                    break;
                case E.c.OPEN_TEXT_CHAT_CHANNEL:
                    if (null == e.channelId) return;
                    (0, I.D$)({
                        target: {
                            kind: I.bB.CHANNEL,
                            channelId: e.channelId,
                            guildId: e.guildId ?? null,
                            messageId: null,
                        },
                        source: p.B.FRIENDS_WIDGET_CLICK,
                        widgetType: _.uss.FRIENDS,
                    }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_LIST,
                            value: f.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "channel",
                        });
                    break;
                case E.c.CONNECT_VOICE_CHANNEL:
                    if (null == e.channelId) return;
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.VOICE,
                        value: f.IP.CHANNEL_SELECTED,
                        secondaryValue: "voice",
                    }),
                        d.default.selectVoiceChannel(e.channelId);
                    break;
                case E.c.DISCONNECT_VOICE_CHANNEL:
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.CALL_BUTTON,
                        value: f.IP.DISABLED,
                        secondaryValue: "voice",
                        userId: g.default.getId(),
                    }),
                        d.default.disconnect();
                    break;
                case E.c.ACCEPT_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    u.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_REQUEST,
                            value: f.IP.ACCEPT_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case E.c.DECLINE_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    u.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_REQUEST,
                            value: f.IP.DECLINE_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case E.c.CANCEL_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    u.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_REQUEST,
                            value: f.IP.CANCEL_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case E.c.SEND_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    u.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_REQUEST,
                            value: f.IP.SEND_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case E.c.OPEN_FRIEND_MODAL:
                    if (null == e.userId) return;
                    (0, h.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId ?? void 0,
                        channelId: e.channelId,
                        appContext: _.BRT.OVERLAY,
                    }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_LIST,
                            value: f.IP.PROFILE_OPENED,
                            userId: e.userId,
                        });
                    break;
                case E.c.SEARCH_FRIENDS:
                    (0, f.YX)(_.uss.FRIENDS, { type: f.Z5.FRIEND_LIST, value: f.IP.SEARCH });
                    break;
                case E.c.SEND_ACTIVITY_INVITE:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: _.xL.JOIN,
                        userId: e.userId,
                        activity: e.activity,
                        location: _.ThZ.UNLOCKED_OVERLAY,
                    }),
                        o.A.track(_.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, f.YX)(_.uss.FRIENDS, { type: f.Z5.INVITE, value: f.IP.INVITE_SENT, userId: e.userId });
                    break;
                case E.c.ASK_TO_JOIN:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: _.xL.JOIN_REQUEST,
                        userId: e.userId,
                        activity: e.activity,
                        location: _.ThZ.UNLOCKED_OVERLAY,
                    }),
                        o.A.track(_.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.INVITE,
                            value: f.IP.JOIN_REQUEST_SENT,
                            userId: e.userId,
                        });
                    break;
                case E.c.SEND_GAME_INVITE_MESSAGE: {
                    if (null == e.userId) return;
                    let t = e.gameEntry,
                        n = e.userId;
                    (async () => {
                        try {
                            if (
                                (await (0, I.D$)({
                                    target: { kind: I.bB.DM_USER, userId: n, messageId: null },
                                    source: p.B.FRIENDS_WIDGET_CLICK,
                                    widgetType: _.uss.FRIENDS,
                                }),
                                null == t)
                            )
                                return;
                            let e = await s.A.getOrEnsurePrivateChannel(n),
                                i = m.A.getChannel(e);
                            if (null == i) return;
                            !0 === t.extra.fake_inventory_item
                                ? await (0, c.J)({
                                      channel: i,
                                      content: T.intl.formatToPlainString(T.t.UVBA9g, { gameName: t.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: S.Hx.OVERLAY,
                                  })
                                : await (0, c.d)({
                                      channel: i,
                                      content: T.intl.string(T.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: S.Hx.OVERLAY,
                                  });
                        } catch {}
                    })(),
                        o.A.track(_.HAw.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: n,
                            target_content_entry_id: t?.id,
                        }),
                        (0, f.YX)(_.uss.FRIENDS, { type: f.Z5.INVITE, value: f.IP.INVITE_SENT, userId: e.userId });
                    break;
                }
                case E.c.USER_CONTEXT_MENU:
                case E.c.OPEN_SETTINGS_MODAL:
                    (0, f.YX)(_.uss.FRIENDS, { type: f.Z5.FRIEND_LIST, value: f.IP.SETTINGS_OPENED, userId: e.userId });
                    break;
                case E.c.TAB_CHANGE: {
                    let t = e.tab;
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.FRIEND_LIST,
                        value: ((e) => {
                            switch (e) {
                                case A.x.FRIENDS:
                                    return f.IP.FRIEND_TAB_SELECTED;
                                case A.x.MESSAGES:
                                    return f.IP.MESSAGES_TAB_SELECTED;
                                case A.x.VOICE:
                                    return f.IP.VOICE_TAB_SELECTED;
                                default:
                                    return f.IP.UNKNOWN;
                            }
                        })(t),
                    });
                    break;
                }
                default:
                    e.type;
            }
        }, []),
        handleContextMenu: l.useCallback((e) => {
            switch (e.type) {
                case E.K.FRIEND_ROW: {
                    let { user: t, friendGroupId: l } = e;
                    if (null == t) return;
                    (0, a.L3)(
                        e.event,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("77687")]).then(
                                n.bind(n, 341354),
                            );
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t,
                                    appContext: _.BRT.OVERLAY,
                                    widgetType: _.uss.FRIENDS,
                                    friendGroupId: l,
                                    showManageFriendGroupsItems: !0,
                                });
                        },
                        { context: _.BRT.OVERLAY },
                    ),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_LIST,
                            value: f.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-row",
                        });
                    break;
                }
                case E.K.FRIEND_GROUP: {
                    let { groupId: t, groupName: l } = e;
                    if (null == t || null == l) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: e } = await n.e("43562").then(n.bind(n, 602321));
                        return (n) => (0, i.jsx)(e, { ...n, groupId: t, groupName: l });
                    }),
                        (0, f.YX)(_.uss.FRIENDS, {
                            type: f.Z5.FRIEND_LIST,
                            value: f.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-group",
                        });
                    break;
                }
                case E.K.DM_CHANNEL: {
                    let { channel: t, user: l } = e;
                    if (null == t || null == l) return;
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.TEXT_CHAT,
                        value: f.IP.SETTINGS_OPENED,
                        secondaryValue: "dm",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("6787")]).then(
                                n.bind(n, 92016),
                            );
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: l,
                                    channel: t,
                                    showModalItems: !1,
                                    widgetType: _.uss.FRIENDS,
                                });
                        });
                    break;
                }
                case E.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.TEXT_CHAT,
                        value: f.IP.SETTINGS_OPENED,
                        secondaryValue: "group-dm",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: t } = await n.e("77927").then(n.bind(n, 320442));
                            return (n) =>
                                (0, i.jsx)(t, { ...n, channel: e.channel, selected: !1, widgetType: _.uss.FRIENDS });
                        });
                    break;
                case E.K.GUILD_TEXT_CHANNEL: {
                    let { channel: t, guild: l } = e;
                    if (null == t || null == l) return;
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.TEXT_CHAT,
                        value: f.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-text-channel",
                    }),
                        t.isModeratorReportChannel?.()
                            ? (0, a.L3)(e.event, async () => {
                                  let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                  return (n) => (0, i.jsx)(e, { ...n, channel: t, widgetType: _.uss.FRIENDS });
                              })
                            : (0, a.L3)(e.event, async () => {
                                  let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                      n.bind(n, 813407),
                                  );
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: _.uss.FRIENDS });
                              });
                    break;
                }
                case E.K.VOICE_CHANNEL: {
                    let { channel: t, guild: l } = e;
                    if (null == t || null == l) return;
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.TEXT_CHAT,
                        value: f.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-channel",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                            return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: _.uss.FRIENDS });
                        });
                    break;
                }
                case E.K.VOICE_USER: {
                    let { user: t, channelId: l, guild: r } = e;
                    if (null == t || null == l) return;
                    let s = r?.id ?? null;
                    (0, f.YX)(_.uss.FRIENDS, {
                        type: f.Z5.TEXT_CHAT,
                        value: f.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-user",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: l } = await Promise.all([n.e("97262"), n.e("87997")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, i.jsx)(l, {
                                    ...n,
                                    user: t,
                                    guildId: s ?? void 0,
                                    channelId: e.channelId,
                                    mediaEngineContext: x.x.DEFAULT,
                                    appContext: _.BRT.OVERLAY,
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
