n.d(t, { W: () => y });
var l = n(627968),
    i = n(64700),
    r = n(308368),
    s = n(308528),
    a = n(442433),
    u = n(544420),
    o = n(684013),
    d = n(49229),
    c = n(956793),
    h = n(428249),
    g = n(657331),
    m = n(961350),
    I = n(734057),
    E = n(810412),
    A = n(914853),
    f = n(145567),
    p = n(67103),
    S = n(34307),
    N = n(652215),
    x = n(381941),
    T = n(731854),
    _ = n(985018);
function y() {
    return {
        handlePrimaryAction: i.useCallback((e) => {
            switch (e.type) {
                case p.c.OPEN_DIRECT_MESSAGE:
                    if (null == e.userId) return;
                    (async () => {
                        try {
                            await (0, f.D$)({
                                target: { kind: f.bB.DM_USER, userId: e.userId, messageId: null },
                                source: S.B.FRIENDS_WIDGET_CLICK,
                                widgetType: N.uss.FRIENDS,
                            });
                        } catch {}
                    })(),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_LIST,
                            value: E.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "dm",
                        });
                    break;
                case p.c.OPEN_TEXT_CHAT_CHANNEL:
                    if (null == e.channelId) return;
                    (0, f.D$)({
                        target: {
                            kind: f.bB.CHANNEL,
                            channelId: e.channelId,
                            guildId: e.guildId ?? null,
                            messageId: null,
                        },
                        source: S.B.FRIENDS_WIDGET_CLICK,
                        widgetType: N.uss.FRIENDS,
                    }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_LIST,
                            value: E.IP.CHAT,
                            userId: e.userId,
                            secondaryValue: "channel",
                        });
                    break;
                case p.c.CONNECT_VOICE_CHANNEL:
                    if (null == e.channelId) return;
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.VOICE,
                        value: E.IP.CHANNEL_SELECTED,
                        secondaryValue: "voice",
                    }),
                        c.default.selectVoiceChannel(e.channelId);
                    break;
                case p.c.DISCONNECT_VOICE_CHANNEL:
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.CALL_BUTTON,
                        value: E.IP.DISABLED,
                        secondaryValue: "voice",
                        userId: m.default.getId(),
                    }),
                        c.default.disconnect();
                    break;
                case p.c.ACCEPT_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_REQUEST,
                            value: E.IP.ACCEPT_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.DECLINE_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.removeRelationship(e.userId, { location: "overlay-friends-widget" }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_REQUEST,
                            value: E.IP.DECLINE_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.CANCEL_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.cancelFriendRequest(e.userId, { location: "overlay-friends-widget" }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_REQUEST,
                            value: E.IP.CANCEL_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.SEND_FRIEND_REQUEST:
                    if (null == e.userId) return;
                    d.A.addRelationship({ userId: e.userId, context: { location: "overlay-friends-widget" } }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_REQUEST,
                            value: E.IP.SEND_REQUEST,
                            userId: e.userId,
                        });
                    break;
                case p.c.OPEN_FRIEND_MODAL:
                    if (null == e.userId) return;
                    (0, g.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId ?? void 0,
                        channelId: e.channelId,
                        appContext: N.BRT.OVERLAY,
                    }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_LIST,
                            value: E.IP.PROFILE_OPENED,
                            userId: e.userId,
                        });
                    break;
                case p.c.SEARCH_FRIENDS:
                    (0, E.YX)(N.uss.FRIENDS, { type: E.Z5.FRIEND_LIST, value: E.IP.SEARCH });
                    break;
                case p.c.SEND_ACTIVITY_INVITE:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: N.xL.JOIN,
                        userId: e.userId,
                        activity: e.activity,
                        location: N.ThZ.UNLOCKED_OVERLAY,
                    }),
                        o.A.track(N.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, E.YX)(N.uss.FRIENDS, { type: E.Z5.INVITE, value: E.IP.INVITE_SENT, userId: e.userId });
                    break;
                case p.c.JOIN:
                    if (null == e.userId || null == e.activity) return;
                    u.Ay.join({
                        userId: e.userId,
                        sessionId: e.activity.session_id,
                        applicationId: e.activity.application_id,
                        channelId: null,
                        messageId: null,
                        source: N.ThZ.UNLOCKED_OVERLAY,
                    });
                    break;
                case p.c.ASK_TO_JOIN:
                    if (null == e.userId || null == e.activity) return;
                    r.A.sendActivityInviteUser({
                        type: N.xL.JOIN_REQUEST,
                        userId: e.userId,
                        activity: e.activity,
                        location: N.ThZ.UNLOCKED_OVERLAY,
                    }),
                        o.A.track(N.HAw.OVERLAY_GAME_INVITE_SENT, { target_user_id: e.userId }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.INVITE,
                            value: E.IP.JOIN_REQUEST_SENT,
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
                                (await (0, f.D$)({
                                    target: { kind: f.bB.DM_USER, userId: n, messageId: null },
                                    source: S.B.FRIENDS_WIDGET_CLICK,
                                    widgetType: N.uss.FRIENDS,
                                }),
                                null == t)
                            )
                                return;
                            let e = await s.A.getOrEnsurePrivateChannel(n),
                                l = I.A.getChannel(e);
                            if (null == l) return;
                            !0 === t.extra.fake_inventory_item
                                ? await (0, h.J)({
                                      channel: l,
                                      content: _.intl.formatToPlainString(_.t.UVBA9g, { gameName: t.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: x.Hx.OVERLAY,
                                  })
                                : await (0, h.d)({
                                      channel: l,
                                      content: _.intl.string(_.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: x.Hx.OVERLAY,
                                  });
                        } catch {}
                    })(),
                        o.A.track(N.HAw.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: n,
                            target_content_entry_id: t?.id,
                        }),
                        (0, E.YX)(N.uss.FRIENDS, { type: E.Z5.INVITE, value: E.IP.INVITE_SENT, userId: e.userId });
                    break;
                }
                case p.c.USER_CONTEXT_MENU:
                case p.c.OPEN_SETTINGS_MODAL:
                    (0, E.YX)(N.uss.FRIENDS, { type: E.Z5.FRIEND_LIST, value: E.IP.SETTINGS_OPENED, userId: e.userId });
                    break;
                case p.c.TAB_CHANGE: {
                    let t = e.tab;
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.FRIEND_LIST,
                        value: ((e) => {
                            switch (e) {
                                case A.x.FRIENDS:
                                    return E.IP.FRIEND_TAB_SELECTED;
                                case A.x.MESSAGES:
                                    return E.IP.MESSAGES_TAB_SELECTED;
                                case A.x.VOICE:
                                    return E.IP.VOICE_TAB_SELECTED;
                                default:
                                    return E.IP.UNKNOWN;
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
                case p.K.FRIEND_ROW: {
                    let { user: t, friendGroupId: i } = e;
                    if (null == t) return;
                    (0, a.L3)(
                        e.event,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("53635"), n.e("78867")]).then(
                                n.bind(n, 341354),
                            );
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: t,
                                    appContext: N.BRT.OVERLAY,
                                    widgetType: N.uss.FRIENDS,
                                    friendGroupId: i,
                                    showManageFriendGroupsItems: !0,
                                });
                        },
                        { context: N.BRT.OVERLAY },
                    ),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_LIST,
                            value: E.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-row",
                        });
                    break;
                }
                case p.K.FRIEND_GROUP: {
                    let { groupId: t, groupName: i } = e;
                    if (null == t || null == i) return;
                    (0, a.L3)(e.event, async () => {
                        let { default: e } = await n.e("43562").then(n.bind(n, 602321));
                        return (n) => (0, l.jsx)(e, { ...n, groupId: t, groupName: i });
                    }),
                        (0, E.YX)(N.uss.FRIENDS, {
                            type: E.Z5.FRIEND_LIST,
                            value: E.IP.SETTINGS_OPENED,
                            secondaryValue: "friend-group",
                        });
                    break;
                }
                case p.K.DM_CHANNEL: {
                    let { channel: t, user: i } = e;
                    if (null == t || null == i) return;
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.TEXT_CHAT,
                        value: E.IP.SETTINGS_OPENED,
                        secondaryValue: "dm",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("53635"),
                                n.e("42128"),
                                n.e("675"),
                            ]).then(n.bind(n, 92016));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: i,
                                    channel: t,
                                    showModalItems: !1,
                                    widgetType: N.uss.FRIENDS,
                                });
                        });
                    break;
                }
                case p.K.GROUP_DM_CHANNEL:
                    if (null == e.channel) return;
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.TEXT_CHAT,
                        value: E.IP.SETTINGS_OPENED,
                        secondaryValue: "group-dm",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: t } = await n.e("77927").then(n.bind(n, 320442));
                            return (n) =>
                                (0, l.jsx)(t, { ...n, channel: e.channel, selected: !1, widgetType: N.uss.FRIENDS });
                        });
                    break;
                case p.K.GUILD_TEXT_CHANNEL: {
                    let { channel: t, guild: i } = e;
                    if (null == t || null == i) return;
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.TEXT_CHAT,
                        value: E.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-text-channel",
                    }),
                        t.isModeratorReportChannel?.()
                            ? (0, a.L3)(e.event, async () => {
                                  let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                  return (n) => (0, l.jsx)(e, { ...n, channel: t, widgetType: N.uss.FRIENDS });
                              })
                            : (0, a.L3)(e.event, async () => {
                                  let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                      n.bind(n, 813407),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: N.uss.FRIENDS });
                              });
                    break;
                }
                case p.K.VOICE_CHANNEL: {
                    let { channel: t, guild: i } = e;
                    if (null == t || null == i) return;
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.TEXT_CHAT,
                        value: E.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-channel",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                            return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: N.uss.FRIENDS });
                        });
                    break;
                }
                case p.K.VOICE_USER: {
                    let { user: t, channelId: i, guild: r } = e;
                    if (null == t || null == i) return;
                    let s = r?.id ?? null;
                    (0, E.YX)(N.uss.FRIENDS, {
                        type: E.Z5.TEXT_CHAT,
                        value: E.IP.SETTINGS_OPENED,
                        secondaryValue: "guild-voice-user",
                    }),
                        (0, a.L3)(e.event, async () => {
                            let { default: i } = await Promise.all([n.e("97262"), n.e("87997")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, l.jsx)(i, {
                                    ...n,
                                    user: t,
                                    guildId: s ?? void 0,
                                    channelId: e.channelId,
                                    mediaEngineContext: T.x.DEFAULT,
                                    appContext: N.BRT.OVERLAY,
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
