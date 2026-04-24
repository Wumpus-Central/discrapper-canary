a.r(n), a.d(n, { default: () => y });
var t = a(627968),
    r = a(64700),
    l = a(17928),
    i = a(214947),
    s = a(228366),
    c = a(189252),
    o = a(994500),
    _ = a(922016),
    d = a(149741),
    u = a(308368),
    f = a(308528),
    h = a(442433),
    I = a(780907),
    g = a(49229),
    m = a(956793),
    p = a(428249),
    A = a(67103),
    C = a(975732),
    E = a(734057),
    N = a(652215),
    v = a(381941),
    b = a(985018),
    T = a(383614);
function x(e) {
    let { onOpen: n, onClose: l, children: i, popoutPosition: s, popoutAlign: c } = e,
        [o, x] = r.useState(!1),
        y = r.useRef(null),
        k = r.useCallback(() => {
            x(!1), l?.();
        }, [l]),
        { handlePrimaryAction: R, handleContextMenu: S } = {
            handlePrimaryAction: r.useCallback(
                (e) => {
                    switch (e.type) {
                        case A.c.OPEN_DIRECT_MESSAGE:
                            if (null == e.userId) return;
                            (async () => {
                                try {
                                    let n = await f.A.getOrEnsurePrivateChannel(e.userId);
                                    m.default.selectPrivateChannel(n);
                                } catch {}
                            })();
                            break;
                        case A.c.OPEN_TEXT_CHAT_CHANNEL:
                            if (null == e.channelId) return;
                            null != e.guildId
                                ? m.default.selectChannel({ guildId: e.guildId, channelId: e.channelId })
                                : m.default.selectPrivateChannel(e.channelId);
                            break;
                        case A.c.CONNECT_VOICE_CHANNEL:
                            if (null == e.channelId) return;
                            m.default.selectVoiceChannel(e.channelId);
                            break;
                        case A.c.DISCONNECT_VOICE_CHANNEL:
                            m.default.disconnect();
                            break;
                        case A.c.ACCEPT_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            g.A.addRelationship({ userId: e.userId, context: { location: "friends-popout" } });
                            break;
                        case A.c.DECLINE_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            g.A.removeRelationship(e.userId, { location: "friends-popout" });
                            break;
                        case A.c.CANCEL_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            g.A.cancelFriendRequest(e.userId, { location: "friends-popout" });
                            break;
                        case A.c.SEND_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            g.A.addRelationship({ userId: e.userId, context: { location: "friends-popout" } });
                            break;
                        case A.c.OPEN_FRIEND_MODAL:
                            if (null == e.userId) return;
                            (0, C.openUserProfileModal)({
                                userId: e.userId,
                                guildId: e.guildId ?? void 0,
                                channelId: e.channelId,
                                appContext: N.BRT.APP,
                            }),
                                k();
                            break;
                        case A.c.SEND_ACTIVITY_INVITE:
                            if (null == e.userId || null == e.activity) return;
                            u.A.sendActivityInviteUser({
                                type: N.xL.JOIN,
                                userId: e.userId,
                                activity: e.activity,
                                location: N.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case A.c.JOIN:
                            if (null == e.userId || null == e.activity) return;
                            I.Ay.join({
                                userId: e.userId,
                                sessionId: e.activity.session_id,
                                applicationId: e.activity.application_id,
                                channelId: null,
                                messageId: null,
                                source: N.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case A.c.ASK_TO_JOIN:
                            if (null == e.userId || null == e.activity) return;
                            u.A.sendActivityInviteUser({
                                type: N.xL.JOIN_REQUEST,
                                userId: e.userId,
                                activity: e.activity,
                                location: N.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case A.c.SEND_GAME_INVITE_MESSAGE: {
                            if (null == e.userId || null == e.gameEntry) return;
                            let n = e.gameEntry,
                                a = e.userId;
                            (async () => {
                                try {
                                    let e = await f.A.getOrEnsurePrivateChannel(a);
                                    m.default.selectPrivateChannel(e);
                                    let t = E.A.getChannel(e);
                                    if (null == t) return;
                                    !0 === n.extra.fake_inventory_item
                                        ? await (0, p.J)({
                                              channel: t,
                                              content: b.intl.formatToPlainString(b.t.UVBA9g, {
                                                  gameName: n.extra.game_name,
                                              }),
                                              whenReady: !0,
                                              doNotNotifyOnError: !1,
                                              location: v.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                          })
                                        : await (0, p.d)({
                                              channel: t,
                                              content: b.intl.string(b.t.DwAcMz),
                                              entry: n,
                                              whenReady: !0,
                                              doNotNotifyOnError: !1,
                                              location: v.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                          });
                                } catch {}
                            })();
                            break;
                        }
                        case A.c.SEARCH_FRIENDS:
                        case A.c.USER_CONTEXT_MENU:
                        case A.c.OPEN_SETTINGS_MODAL:
                        case A.c.TAB_CHANGE:
                            break;
                        default:
                            e.type;
                    }
                },
                [k],
            ),
            handleContextMenu: r.useCallback((e) => {
                switch (e.type) {
                    case A.K.FRIEND_ROW:
                        if (null == e.user) return;
                        (0, h.L3)(
                            e.event,
                            async () => {
                                let { default: n } = await Promise.all([a.e("97262"), a.e("32418"), a.e("61657")]).then(
                                    a.bind(a, 668569),
                                );
                                return (a) => (0, t.jsx)(n, { ...a, user: e.user, appContext: N.BRT.APP });
                            },
                            { context: N.BRT.APP },
                        );
                        break;
                    case A.K.FRIEND_GROUP:
                        if (null == e.groupId || null == e.groupName) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await a.e("97717").then(a.bind(a, 607956));
                            return (a) => (0, t.jsx)(n, { ...a, groupId: e.groupId, groupName: e.groupName });
                        });
                        break;
                    case A.K.DM_CHANNEL:
                        if (null == e.channel || null == e.user) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                a.e("97262"),
                                a.e("93103"),
                                a.e("88342"),
                                a.e("35313"),
                                a.e("84442"),
                                a.e("39778"),
                                a.e("95375"),
                            ]).then(a.bind(a, 385913));
                            return (a) => (0, t.jsx)(n, { ...a, user: e.user, channel: e.channel, showModalItems: !1 });
                        });
                        break;
                    case A.K.GROUP_DM_CHANNEL:
                        if (null == e.channel) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([a.e("97262"), a.e("60200"), a.e("68530")]).then(
                                a.bind(a, 4027),
                            );
                            return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, selected: !1 });
                        });
                        break;
                    case A.K.GUILD_TEXT_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([a.e("97262"), a.e("79359"), a.e("26934")]).then(
                                a.bind(a, 468916),
                            );
                            return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case A.K.VOICE_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                a.e("97262"),
                                a.e("93103"),
                                a.e("79359"),
                                a.e("99854"),
                                a.e("48909"),
                            ]).then(a.bind(a, 119357));
                            return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case A.K.VOICE_USER: {
                        if (null == e.user || null == e.channelId) return;
                        let n = e.guild?.id ?? null;
                        (0, h.L3)(e.event, async () => {
                            let { default: r } = await Promise.all([a.e("97262"), a.e("32418"), a.e("61657")]).then(
                                a.bind(a, 668569),
                            );
                            return (a) =>
                                (0, t.jsx)(r, {
                                    ...a,
                                    user: e.user,
                                    guildId: n ?? void 0,
                                    channelId: e.channelId,
                                    appContext: N.BRT.APP,
                                });
                        });
                        break;
                    }
                    default:
                        e.type;
                }
            }, []),
        },
        w = r.useCallback(() => {
            x((e) => {
                let a = !e;
                return a ? n?.() : l?.(), a;
            });
        }, [l, n]),
        O = r.useCallback(
            () =>
                (0, t.jsx)("div", {
                    className: T.k,
                    children: (0, t.jsx)(d.$, { onPrimaryAction: R, onContextMenu: S }),
                }),
            [S, R],
        );
    return (0, t.jsx)(_.Y, {
        targetElementRef: y,
        animation: _.Y.Animation.NONE,
        position: s,
        align: c,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: k,
        renderPopout: O,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: a } = n;
            return i(w, a, e, y);
        },
    });
}
function y() {
    let e = (0, l.bG)([o.A], () => o.A.getPendingCount() > 0);
    return (
        r.useEffect(() => {
            s.h.dispatch({ type: "FRIENDS_LIST_POPOUT_MOUNTED" });
        }, []),
        (0, t.jsx)(x, {
            popoutPosition: "bottom",
            popoutAlign: "left",
            children: (n, a, r, l) =>
                (0, t.jsx)(c.A, {
                    ...r,
                    ref: l,
                    onClick: n,
                    icon: i.$,
                    tooltip: b.intl.string(b.t.TdEu5X),
                    showBadge: e,
                    selected: a,
                }),
        })
    );
}
