n.d(t, { W: () => C });
var i = n(627968),
    l = n(64700),
    r = n(308368),
    s = n(308528),
    a = n(442433),
    o = n(544420),
    u = n(684013),
    d = n(49229),
    c = n(956793),
    h = n(428249),
    g = n(657331),
    m = n(961350),
    f = n(734057),
    A = n(810412),
    I = n(914853),
    E = n(145567),
    p = n(67103),
    _ = n(34307),
    S = n(652215),
    x = n(381941),
    T = n(731854),
    N = n(985018);
function C() {
    return {
        handlePrimaryAction: l.useCallback((e) => {
            switch (e.type) {
                case p.c.OPEN_DIRECT_MESSAGE:
                    if (null == e.userId) return;
                    (async () => {
                        try {
                            await (0, E.D$)({
                                target: { kind: E.bB.DM_USER, userId: e.userId, messageId: null },
                                source: _.B.FRIENDS_WIDGET_CLICK,
                                widgetType: S.uss.FRIENDS,
                            });
                        } catch {}
                    })(),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "dm",
                        });
                    break;
                case p.c.OPEN_TEXT_CHAT_CHANNEL:
                    if (null == e.channelId) return;
                    (0, E.D$)({
                        target: {
                            kind: E.bB.CHANNEL,
                            channelId: e.channelId,
                            guildId: e.guildId ?? null,
                            messageId: null,
                        },
                        source: _.B.FRIENDS_WIDGET_CLICK,
                        widgetType: S.uss.FRIENDS,
                    }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "channel",
                        });
                    break;
                case p.c.CONNECT_VOICE_CHANNEL:
                    if (null == e.channelId) return;
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.VOICE,
                        value: A.IP.CHANNEL_SELECTED,
                        secondaryValue: "voice",
                    }),
                        c.default.selectVoiceChannel(e.channelId);
                    break;
                case p.c.DISCONNECT_VOICE_CHANNEL:
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.CALL_BUTTON,
                        value: A.IP.DISABLED,
                        secondaryValue: "voice",
                        userId: m.default.getId(),
                    }),
                        c.default.disconnect();
                    break;
                case p.c.ACCEPT_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.ACCEPT_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.DECLINE_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.DECLINE_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.CANCEL_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.CANCEL_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.SEND_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_REQUEST,
                            value: A.IP.SEND_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.OPEN_FRIEND_MODAL:
                    if (null == e.userId) return;
                    (0, g.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId ?? void 0,
                        channelId: e.channelId,
                        appContext: S.BRT.OVERLAY,
                    }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.PROFILE_OPENED,
                            userId: e.userId,
                        });
                    break;
                case p.c.SEARCH_FRIENDS:
                    (0, A.YX)(S.uss.FRIENDS, { type: A.Z5.FRIEND_LIST, value: A.IP.SEARCH });
                    break;
                case p.c.SEND_ACTIVITY_INVITE:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: S.xL.JOIN,
                        userId: e.userId,
                        activity: e.activity,
                        location: S.ThZ.UNLOCKED_OVERLAY,
                    }),
                        u.A.track(S.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, A.YX)(S.uss.FRIENDS, { type: A.Z5.INVITE, value: A.IP.INVITE_SENT, userId: e.userId });
                    break;
                case p.c.JOIN:
                    if (null == e.userId || null == e.activity) return;
                    o.Ay.join({
                        userId: e.userId,
                        sessionId: e.activity.session_id,
                        applicationId: e.activity.application_id,
                        channelId: null,
                        messageId: null,
                        source: S.ThZ.UNLOCKED_OVERLAY,
                    });
                    break;
                case p.c.ASK_TO_JOIN:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: S.xL.JOIN_REQUEST,
                        userId: e.userId,
                        activity: e.activity,
                        location: S.ThZ.UNLOCKED_OVERLAY,
                    }),
                        u.A.track(S.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.INVITE,
                            value: A.IP.JOIN_REQUEST_SENT,
                            userId: e.userId,
                        });
                    break;
                case p.c.SEND_GAME_INVITE_MESSAGE: {
                    if (null == e.userId) return;
                    let t = e.gameEntry,
                        n = e.userId;
                    (async () => {
                        try {
                            if (
                                (await (0, E.D$)({
                                    target: { kind: E.bB.DM_USER, userId: n, messageId: null },
                                    source: _.B.FRIENDS_WIDGET_CLICK,
                                    widgetType: S.uss.FRIENDS,
                                }),
                                null == t)
                            )
                                return;
                            let e = await s.A.getOrEnsurePrivateChannel(n),
                                i = f.A.getChannel(e);
                            if (null == i) return;
                            !0 === t.extra.fake_inventory_item
                                ? await (0, h.J)({
                                      channel: i,
                                      content: N.intl.formatToPlainString(N.t.UVBA9g, { gameName: t.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: x.Hx.OVERLAY,
                                  })
                                : await (0, h.d)({
                                      channel: i,
                                      content: N.intl.string(N.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: x.Hx.OVERLAY,
                                  });
                        } catch {}
                    })(),
                        u.A.track(S.HAw.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: n,
                            target_content_entry_id: t?.id,
                        }),
                        (0, A.YX)(S.uss.FRIENDS, { type: A.Z5.INVITE, value: A.IP.INVITE_SENT, userId: e.userId });
                    break;
                }
                case p.c.USER_CONTEXT_MENU:
                case p.c.OPEN_SETTINGS_MODAL:
                    (0, A.YX)(S.uss.FRIENDS, { type: A.Z5.FRIEND_LIST, value: A.IP.SETTINGS_OPENED, userId: e.userId });
                    break;
                case p.c.TAB_CHANGE: {
                    let t = e.tab;
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.FRIEND_LIST,
                        value: ((e) => {
                            switch (e) {
                                case I.x.FRIENDS:
                                    return A.IP.FRIEND_TAB_SELECTED;
                                case I.x.MESSAGES:
                                    return A.IP.MESSAGES_TAB_SELECTED;
                                case I.x.VOICE:
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
        handleContextMenu: l.useCallback((e) => {
            switch (e.type) {
                case p.K.FRIEND_ROW: {
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
                                    appContext: S.BRT.OVERLAY,
                                    widgetType: S.uss.FRIENDS,
                                    friendGroupId: l,
                                    showManageFriendGroupsItems: !0,
                                });
                        },
                        { context: S.BRT.OVERLAY },
                    ),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-row",
                        });
                    break;
                }
                case p.K.FRIEND_GROUP: {
                    let { groupId: t, groupName: l } = e;
                    if (null == t || null == l) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: e } = await n.e("43562").then(n.bind(n, 602321));
                        return (n) => (0, i.jsx)(e, { ...n, groupId: t, groupName: l });
                    }),
                        (0, A.YX)(S.uss.FRIENDS, {
                            type: A.Z5.FRIEND_LIST,
                            value: A.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-group",
                        });
                    break;
                }
                case p.K.DM_CHANNEL: {
                    let { channel: t, user: l } = e;
                    if (null == t || null == l) return;
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
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
                                    widgetType: S.uss.FRIENDS,
                                });
                        });
                    break;
                }
                case p.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "group-dm",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: t } = await n.e("77927").then(n.bind(n, 320442));
                            return (n) =>
                                (0, i.jsx)(t, { ...n, channel: e.channel, selected: !1, widgetType: S.uss.FRIENDS });
                        });
                    break;
                case p.K.GUILD_TEXT_CHANNEL: {
                    let { channel: t, guild: l } = e;
                    if (null == t || null == l) return;
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-text-channel",
                    }),
                        t.isModeratorReportChannel?.()
                            ? (0, a.L3)(e.event, async () => {
                                  let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                  return (n) => (0, i.jsx)(e, { ...n, channel: t, widgetType: S.uss.FRIENDS });
                              })
                            : (0, a.L3)(e.event, async () => {
                                  let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                      n.bind(n, 813407),
                                  );
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: S.uss.FRIENDS });
                              });
                    break;
                }
                case p.K.VOICE_CHANNEL: {
                    let { channel: t, guild: l } = e;
                    if (null == t || null == l) return;
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-channel",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                            return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, widgetType: S.uss.FRIENDS });
                        });
                    break;
                }
                case p.K.VOICE_USER: {
                    let { user: t, channelId: l, guild: r } = e;
                    if (null == t || null == l) return;
                    let s = r?.id ?? null;
                    (0, A.YX)(S.uss.FRIENDS, {
                        type: A.Z5.TEXT_CHAT,
                        value: A.IP.SETTINGS_OPENED,
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
                                    mediaEngineContext: T.x.DEFAULT,
                                    appContext: S.BRT.OVERLAY,
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
