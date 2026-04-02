n.d(t, { W: () => y });
var l = n(627968),
    i = n(64700),
    r = n(308368),
    s = n(308528),
    a = n(442433),
    u = n(684013),
    o = n(49229),
    d = n(956793),
    c = n(428249),
    h = n(657331),
    g = n(961350),
    I = n(734057),
    A = n(810412),
    f = n(914853),
    E = n(145567),
    m = n(67103),
    S = n(34307),
    _ = n(652215),
    p = n(381941),
    N = n(731854),
    T = n(985018);
function y() {
    return {
        handlePrimaryAction: i.useCallback((e) => {
            switch (e.type) {
                case m.c.OPEN_DIRECT_MESSAGE:
                    if (null == e.userId) return;
                    (async () => {
                        try {
                            await (0, E.D$)({
                                target: { kind: E.bB.DM_USER, userId: e.userId, messageId: null },
                                source: S.B.FRIENDS_WIDGET_CLICK,
                                widgetType: _.uss.FRIENDS,
                            });
                        } catch {}
                    })(),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "dm",
                        });
                    break;
                case m.c.OPEN_TEXT_CHAT_CHANNEL:
                    if (null == e.channelId) return;
                    (0, E.D$)({
                        target: {
                            kind: E.bB.CHANNEL,
                            channelId: e.channelId,
                            guildId: e.guildId ?? null,
                            messageId: null,
                        },
                        source: S.B.FRIENDS_WIDGET_CLICK,
                        widgetType: _.uss.FRIENDS,
                    }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "channel",
                        });
                    break;
                case m.c.CONNECT_VOICE_CHANNEL:
                    if (null == e.channelId) return;
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.VOICE,
                        value: A.IP.CHANNEL_SELECTED,
                        secondaryValue: "voice",
                    }),
                        d.default.selectVoiceChannel(e.channelId);
                    break;
                case m.c.DISCONNECT_VOICE_CHANNEL:
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.CALL_BUTTON,
                        value: A.IP.DISABLED,
                        secondaryValue: "voice",
                        userId: g.default.getId(),
                    }),
                        d.default.disconnect();
                    break;
                case m.c.ACCEPT_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    o.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.ACCEPT_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case m.c.DECLINE_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    o.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.DECLINE_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case m.c.CANCEL_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    o.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.CANCEL_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case m.c.SEND_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    o.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.SEND_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case m.c.OPEN_FRIEND_MODAL:
                    if (null == e.userId) return;
                    (0, h.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId ?? void 0,
                        channelId: e.channelId,
                        appContext: _.BRT.OVERLAY,
                    }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.PROFILE_OPENED,
                            userId: e.userId,
                        });
                    break;
                case m.c.SEARCH_FRIENDS:
                    (0, A.YX)(_.uss.FRIENDS, { type: A.Z5.FRIEND_LIST, value: A.IP.SEARCH });
                    break;
                case m.c.SEND_ACTIVITY_INVITE:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: _.xL.JOIN,
                        userId: e.userId,
                        activity: e.activity,
                        location: _.ThZ.UNLOCKED_OVERLAY,
                    }),
                        u.A.track(_.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, A.YX)(_.uss.FRIENDS, { type: A.Z5.INVITE, value: A.IP.INVITE_SENT, userId: e.userId });
                    break;
                case m.c.ASK_TO_JOIN:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: _.xL.JOIN_REQUEST,
                        userId: e.userId,
                        activity: e.activity,
                        location: _.ThZ.UNLOCKED_OVERLAY,
                    }),
                        u.A.track(_.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.INVITE,
                            value: A.IP.JOIN_REQUEST_SENT,
                            userId: e.userId,
                        });
                    break;
                case m.c.SEND_GAME_INVITE_MESSAGE: {
                    if (null == e.userId) return;
                    let t = e.gameEntry,
                        n = e.userId;
                    (async () => {
                        try {
                            if (
                                (await (0, E.D$)({
                                    target: { kind: E.bB.DM_USER, userId: n, messageId: null },
                                    source: S.B.FRIENDS_WIDGET_CLICK,
                                    widgetType: _.uss.FRIENDS,
                                }),
                                null == t)
                            )
                                return;
                            let e = await s.A.getOrEnsurePrivateChannel(n),
                                l = I.A.getChannel(e);
                            if (null == l) return;
                            !0 === t.extra.fake_inventory_item
                                ? await (0, c.J)({
                                      channel: l,
                                      content: T.intl.formatToPlainString(T.t.UVBA9g, { gameName: t.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: p.Hx.OVERLAY,
                                  })
                                : await (0, c.d)({
                                      channel: l,
                                      content: T.intl.string(T.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: p.Hx.OVERLAY,
                                  });
                        } catch {}
                    })(),
                        u.A.track(_.HAw.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: n,
                            target_content_entry_id: t?.id,
                        }),
                        (0, A.YX)(_.uss.FRIENDS, { type: A.Z5.INVITE, value: A.IP.INVITE_SENT, userId: e.userId });
                    break;
                }
                case m.c.USER_CONTEXT_MENU:
                case m.c.OPEN_SETTINGS_MODAL:
                    (0, A.YX)(_.uss.FRIENDS, { type: A.Z5.FRIEND_LIST, value: A.IP.SETTINGS_OPENED, userId: e.userId });
                    break;
                case m.c.TAB_CHANGE: {
                    let t = e.tab;
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.FRIEND_LIST,
                        value: ((e) => {
                            switch (e) {
                                case f.x.FRIENDS:
                                    return A.IP.FRIEND_TAB_SELECTED;
                                case f.x.MESSAGES:
                                    return A.IP.MESSAGES_TAB_SELECTED;
                                case f.x.VOICE:
                                    return A.IP.VOICE_TAB_SELECTED;
                                default:
                                    return A.IP.UNKNOWN;
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
                case m.K.FRIEND_ROW: {
                    let { user: t, friendGroupId: i } = e;
                    if (null == t) return;
                    (0, a.L3)(
                        e.event,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("77687")]).then(
                                n.bind(n, 341354),
                            );
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: t,
                                    appContext: _.BRT.OVERLAY,
                                    widgetType: _.uss.FRIENDS,
                                    friendGroupId: i,
                                    showManageFriendGroupsItems: !0,
                                });
                        },
                        { context: _.BRT.OVERLAY },
                    ),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-row",
                        });
                    break;
                }
                case m.K.FRIEND_GROUP: {
                    let { groupId: t, groupName: i } = e;
                    if (null == t || null == i) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: e } = await n.e("43562").then(n.bind(n, 602321));
                        return (n) => (0, l.jsx)(e, { ...n, groupId: t, groupName: i });
                    }),
                        (0, A.YX)(_.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-group",
                        });
                    break;
                }
                case m.K.DM_CHANNEL: {
                    let { channel: t, user: i } = e;
                    if (null == t || null == i) return;
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "dm",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("47895")]).then(
                                n.bind(n, 92016),
                            );
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: i,
                                    channel: t,
                                    showModalItems: !1,
                                    widgetType: _.uss.FRIENDS,
                                });
                        });
                    break;
                }
                case m.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "group-dm",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: t } = await n.e("77927").then(n.bind(n, 320442));
                            return (n) =>
                                (0, l.jsx)(t, { ...n, channel: e.channel, selected: !1, widgetType: _.uss.FRIENDS });
                        });
                    break;
                case m.K.GUILD_TEXT_CHANNEL: {
                    let { channel: t, guild: i } = e;
                    if (null == t || null == i) return;
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-text-channel",
                    }),
                        t.isModeratorReportChannel?.()
                            ? (0, a.L3)(e.event, async () => {
                                  let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                  return (n) => (0, l.jsx)(e, { ...n, channel: t, widgetType: _.uss.FRIENDS });
                              })
                            : (0, a.L3)(e.event, async () => {
                                  let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                      n.bind(n, 813407),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: _.uss.FRIENDS });
                              });
                    break;
                }
                case m.K.VOICE_CHANNEL: {
                    let { channel: t, guild: i } = e;
                    if (null == t || null == i) return;
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-channel",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                            return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: _.uss.FRIENDS });
                        });
                    break;
                }
                case m.K.VOICE_USER: {
                    let { user: t, channelId: i, guild: r } = e;
                    if (null == t || null == i) return;
                    let s = r?.id ?? null;
                    (0, A.YX)(_.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-user",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: i } = await Promise.all([n.e("97262"), n.e("87997"), n.e("7202")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, l.jsx)(i, {
                                    ...n,
                                    user: t,
                                    guildId: s ?? void 0,
                                    channelId: e.channelId,
                                    mediaEngineContext: N.x.DEFAULT,
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
