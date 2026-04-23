a.r(n), a.d(n, { default: () => R });
var t = a(627968),
    r = a(64700),
    l = a(17928),
    i = a(214947),
    o = a(228366),
    _ = a(189252),
    c = a(994500),
    d = a(922016),
    s = a(149741),
    u = a(308368),
    I = a(308528),
    f = a(442433),
    p = a(780907),
    h = a(49229),
    C = a(956793),
    E = a(428249),
    N = a(67103),
    g = a(975732),
    T = a(734057),
    m = a(652215),
    y = a(381941),
    A = a(985018),
    S = a(383614);
function v(e) {
    let { onOpen: n, onClose: l, children: i, popoutPosition: o, popoutAlign: _ } = e,
        [c, v] = r.useState(!1),
        R = r.useRef(null),
        x = r.useCallback(() => {
            v(!1), l?.();
        }, [l]),
        { handlePrimaryAction: b, handleContextMenu: k } = {
            handlePrimaryAction: r.useCallback(
                (e) => {
                    switch (e.type) {
                        case N.c.OPEN_DIRECT_MESSAGE:
                            if (null == e.userId) return;
                            (async () => {
                                try {
                                    let n = await I.A.getOrEnsurePrivateChannel(e.userId);
                                    C.default.selectPrivateChannel(n);
                                } catch {}
                            })();
                            break;
                        case N.c.OPEN_TEXT_CHAT_CHANNEL:
                            if (null == e.channelId) return;
                            null != e.guildId
                                ? C.default.selectChannel({ guildId: e.guildId, channelId: e.channelId })
                                : C.default.selectPrivateChannel(e.channelId);
                            break;
                        case N.c.CONNECT_VOICE_CHANNEL:
                            if (null == e.channelId) return;
                            C.default.selectVoiceChannel(e.channelId);
                            break;
                        case N.c.DISCONNECT_VOICE_CHANNEL:
                            C.default.disconnect();
                            break;
                        case N.c.ACCEPT_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            h.A.addRelationship({ userId: e.userId, context: { location: "friends-popout" } });
                            break;
                        case N.c.DECLINE_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            h.A.removeRelationship(e.userId, { location: "friends-popout" });
                            break;
                        case N.c.CANCEL_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            h.A.cancelFriendRequest(e.userId, { location: "friends-popout" });
                            break;
                        case N.c.SEND_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            h.A.addRelationship({ userId: e.userId, context: { location: "friends-popout" } });
                            break;
                        case N.c.OPEN_FRIEND_MODAL:
                            if (null == e.userId) return;
                            (0, g.openUserProfileModal)({
                                userId: e.userId,
                                guildId: e.guildId ?? void 0,
                                channelId: e.channelId,
                                appContext: m.BRT.APP,
                            }),
                                x();
                            break;
                        case N.c.SEND_ACTIVITY_INVITE:
                            if (null == e.userId || null == e.activity) return;
                            u.A.sendActivityInviteUser({
                                type: m.xL.JOIN,
                                userId: e.userId,
                                activity: e.activity,
                                location: m.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case N.c.JOIN:
                            if (null == e.userId || null == e.activity) return;
                            p.Ay.join({
                                userId: e.userId,
                                sessionId: e.activity.session_id,
                                applicationId: e.activity.application_id,
                                channelId: null,
                                messageId: null,
                                source: m.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case N.c.ASK_TO_JOIN:
                            if (null == e.userId || null == e.activity) return;
                            u.A.sendActivityInviteUser({
                                type: m.xL.JOIN_REQUEST,
                                userId: e.userId,
                                activity: e.activity,
                                location: m.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case N.c.SEND_GAME_INVITE_MESSAGE: {
                            if (null == e.userId || null == e.gameEntry) return;
                            let n = e.gameEntry,
                                a = e.userId;
                            (async () => {
                                try {
                                    let e = await I.A.getOrEnsurePrivateChannel(a);
                                    C.default.selectPrivateChannel(e);
                                    let t = T.A.getChannel(e);
                                    if (null == t) return;
                                    !0 === n.extra.fake_inventory_item
                                        ? await (0, E.J)({
                                              channel: t,
                                              content: A.intl.formatToPlainString(A.t.UVBA9g, {
                                                  gameName: n.extra.game_name,
                                              }),
                                              whenReady: !0,
                                              doNotNotifyOnError: !1,
                                              location: y.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                          })
                                        : await (0, E.d)({
                                              channel: t,
                                              content: A.intl.string(A.t.DwAcMz),
                                              entry: n,
                                              whenReady: !0,
                                              doNotNotifyOnError: !1,
                                              location: y.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                          });
                                } catch {}
                            })();
                            break;
                        }
                        case N.c.SEARCH_FRIENDS:
                        case N.c.USER_CONTEXT_MENU:
                        case N.c.OPEN_SETTINGS_MODAL:
                        case N.c.TAB_CHANGE:
                            break;
                        default:
                            e.type;
                    }
                },
                [x],
            ),
            handleContextMenu: r.useCallback((e) => {
                switch (e.type) {
                    case N.K.FRIEND_ROW:
                        if (null == e.user) return;
                        (0, f.L3)(
                            e.event,
                            async () => {
                                let { default: n } = await Promise.all([a.e("97262"), a.e("32418"), a.e("22880")]).then(
                                    a.bind(a, 668569),
                                );
                                return (a) => (0, t.jsx)(n, { ...a, user: e.user, appContext: m.BRT.APP });
                            },
                            { context: m.BRT.APP },
                        );
                        break;
                    case N.K.FRIEND_GROUP:
                        if (null == e.groupId || null == e.groupName) return;
                        (0, f.L3)(e.event, async () => {
                            let { default: n } = await a.e("97717").then(a.bind(a, 607956));
                            return (a) => (0, t.jsx)(n, { ...a, groupId: e.groupId, groupName: e.groupName });
                        });
                        break;
                    case N.K.DM_CHANNEL:
                        if (null == e.channel || null == e.user) return;
                        (0, f.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                a.e("97262"),
                                a.e("84442"),
                                a.e("39778"),
                                a.e("36857"),
                            ]).then(a.bind(a, 385913));
                            return (a) => (0, t.jsx)(n, { ...a, user: e.user, channel: e.channel, showModalItems: !1 });
                        });
                        break;
                    case N.K.GROUP_DM_CHANNEL:
                        if (null == e.channel) return;
                        (0, f.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([a.e("97262"), a.e("60200")]).then(a.bind(a, 4027));
                            return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, selected: !1 });
                        });
                        break;
                    case N.K.GUILD_TEXT_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, f.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([a.e("97262"), a.e("38727"), a.e("85298")]).then(
                                a.bind(a, 468916),
                            );
                            return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case N.K.VOICE_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, f.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                a.e("97262"),
                                a.e("38727"),
                                a.e("99854"),
                                a.e("53378"),
                            ]).then(a.bind(a, 119357));
                            return (a) => (0, t.jsx)(n, { ...a, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case N.K.VOICE_USER: {
                        if (null == e.user || null == e.channelId) return;
                        let n = e.guild?.id ?? null;
                        (0, f.L3)(e.event, async () => {
                            let { default: r } = await Promise.all([a.e("97262"), a.e("32418"), a.e("22880")]).then(
                                a.bind(a, 668569),
                            );
                            return (a) =>
                                (0, t.jsx)(r, {
                                    ...a,
                                    user: e.user,
                                    guildId: n ?? void 0,
                                    channelId: e.channelId,
                                    appContext: m.BRT.APP,
                                });
                        });
                        break;
                    }
                    default:
                        e.type;
                }
            }, []),
        },
        P = r.useCallback(() => {
            v((e) => {
                let a = !e;
                return a ? n?.() : l?.(), a;
            });
        }, [l, n]),
        O = r.useCallback(
            () =>
                (0, t.jsx)("div", {
                    className: S.k,
                    children: (0, t.jsx)(s.$, { onPrimaryAction: b, onContextMenu: k }),
                }),
            [k, b],
        );
    return (0, t.jsx)(d.Y, {
        targetElementRef: R,
        animation: d.Y.Animation.NONE,
        position: o,
        align: _,
        autoInvert: !1,
        shouldShow: c,
        onRequestClose: x,
        renderPopout: O,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: a } = n;
            return i(P, a, e, R);
        },
    });
}
function R() {
    let e = (0, l.bG)([c.A], () => c.A.getPendingCount() > 0);
    return (
        r.useEffect(() => {
            o.h.dispatch({ type: "FRIENDS_LIST_POPOUT_MOUNTED" });
        }, []),
        (0, t.jsx)(v, {
            popoutPosition: "bottom",
            popoutAlign: "left",
            children: (n, a, r, l) =>
                (0, t.jsx)(_.A, {
                    ...r,
                    ref: l,
                    onClick: n,
                    icon: i.$,
                    tooltip: A.intl.string(A.t.TdEu5X),
                    showBadge: e,
                    selected: a,
                }),
        })
    );
}
