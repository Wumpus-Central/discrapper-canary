t.r(n), t.d(n, { default: () => k });
var a = t(627968),
    l = t(64700),
    r = t(17928),
    u = t(214947),
    i = t(228366),
    s = t(189252),
    c = t(994500),
    d = t(922016),
    o = t(149741),
    I = t(308368),
    E = t(308528),
    h = t(442433),
    N = t(780907),
    _ = t(717398),
    C = t(730852),
    T = t(428249),
    f = t(67103),
    p = t(975732),
    A = t(734057),
    R = t(652215),
    y = t(381941),
    g = t(375708),
    b = t(383614);
function O(e) {
    let { onOpen: n, onClose: r, children: u, popoutPosition: i, popoutAlign: s } = e,
        [c, O] = l.useState(!1),
        k = l.useRef(null),
        P = l.useCallback(() => {
            O(!1), r?.();
        }, [r]),
        { handlePrimaryAction: S, handleContextMenu: v } = {
            handlePrimaryAction: l.useCallback(
                (e) => {
                    switch (e.type) {
                        case f.c.OPEN_DIRECT_MESSAGE:
                            if (null == e.userId) return;
                            (async () => {
                                try {
                                    let n = await E.A.getOrEnsurePrivateChannel(e.userId);
                                    C.default.selectPrivateChannel(n);
                                } catch {}
                            })();
                            break;
                        case f.c.OPEN_TEXT_CHAT_CHANNEL:
                            if (null == e.channelId) return;
                            null != e.guildId
                                ? C.default.selectChannel({ guildId: e.guildId, channelId: e.channelId })
                                : C.default.selectPrivateChannel(e.channelId);
                            break;
                        case f.c.CONNECT_VOICE_CHANNEL:
                            if (null == e.channelId) return;
                            C.default.selectVoiceChannel(e.channelId);
                            break;
                        case f.c.DISCONNECT_VOICE_CHANNEL:
                            C.default.disconnect();
                            break;
                        case f.c.ACCEPT_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            _.A.addRelationship({ userId: e.userId, context: { location: "friends-popout" } });
                            break;
                        case f.c.DECLINE_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            _.A.removeRelationship(e.userId, { location: "friends-popout" });
                            break;
                        case f.c.CANCEL_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            _.A.cancelFriendRequest(e.userId, { location: "friends-popout" });
                            break;
                        case f.c.SEND_FRIEND_REQUEST:
                            if (null == e.userId) return;
                            _.A.addRelationship({ userId: e.userId, context: { location: "friends-popout" } });
                            break;
                        case f.c.OPEN_FRIEND_MODAL:
                            if (null == e.userId) return;
                            (0, p.openUserProfileModal)({
                                userId: e.userId,
                                guildId: e.guildId ?? void 0,
                                channelId: e.channelId,
                                appContext: R.BRT.APP,
                            }),
                                P();
                            break;
                        case f.c.SEND_ACTIVITY_INVITE:
                            if (null == e.userId || null == e.activity) return;
                            I.A.sendActivityInviteUser({
                                type: R.xL.JOIN,
                                userId: e.userId,
                                activity: e.activity,
                                location: R.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case f.c.JOIN:
                            if (null == e.userId || null == e.activity) return;
                            N.Ay.join({
                                userId: e.userId,
                                sessionId: e.activity.session_id,
                                applicationId: e.activity.application_id,
                                channelId: null,
                                messageId: null,
                                source: R.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case f.c.ASK_TO_JOIN:
                            if (null == e.userId || null == e.activity) return;
                            I.A.sendActivityInviteUser({
                                type: R.xL.JOIN_REQUEST,
                                userId: e.userId,
                                activity: e.activity,
                                location: R.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            break;
                        case f.c.SEND_GAME_INVITE_MESSAGE: {
                            if (null == e.userId || null == e.gameEntry) return;
                            let n = e.gameEntry,
                                t = e.userId;
                            (async () => {
                                try {
                                    let e = await E.A.getOrEnsurePrivateChannel(t);
                                    C.default.selectPrivateChannel(e);
                                    let a = A.A.getChannel(e);
                                    if (null == a) return;
                                    !0 === n.extra.fake_inventory_item
                                        ? await (0, T.J)({
                                              channel: a,
                                              content: g.intl.formatToPlainString(g.t.UVBA9g, {
                                                  gameName: n.extra.game_name,
                                              }),
                                              whenReady: !0,
                                              doNotNotifyOnError: !1,
                                              location: y.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                          })
                                        : await (0, T.d)({
                                              channel: a,
                                              content: g.intl.string(g.t.DwAcMz),
                                              entry: n,
                                              whenReady: !0,
                                              doNotNotifyOnError: !1,
                                              location: y.Hx.CONTENT_INVENTORY_MEMBERLIST,
                                          });
                                } catch {}
                            })();
                            break;
                        }
                        case f.c.SEARCH_FRIENDS:
                        case f.c.USER_CONTEXT_MENU:
                        case f.c.OPEN_SETTINGS_MODAL:
                        case f.c.TAB_CHANGE:
                            break;
                        default:
                            e.type;
                    }
                },
                [P],
            ),
            handleContextMenu: l.useCallback((e) => {
                switch (e.type) {
                    case f.K.FRIEND_ROW:
                        if (null == e.user) return;
                        (0, h.L3)(
                            e.event,
                            async () => {
                                let { default: n } = await Promise.all([
                                    t.e("20706"),
                                    t.e("94881"),
                                    t.e("26132"),
                                    t.e("46652"),
                                    t.e("93190"),
                                    t.e("34552"),
                                    t.e("8757"),
                                    t.e("89673"),
                                    t.e("85968"),
                                    t.e("60195"),
                                    t.e("68403"),
                                    t.e("29787"),
                                    t.e("97558"),
                                    t.e("94000"),
                                    t.e("91994"),
                                    t.e("76665"),
                                    t.e("76273"),
                                    t.e("24198"),
                                    t.e("32418"),
                                ]).then(t.bind(t, 668569));
                                return (t) => (0, a.jsx)(n, { ...t, user: e.user, appContext: R.BRT.APP });
                            },
                            { context: R.BRT.APP },
                        );
                        break;
                    case f.K.FRIEND_GROUP:
                        if (null == e.groupId || null == e.groupName) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await t.e("97717").then(t.bind(t, 607956));
                            return (t) => (0, a.jsx)(n, { ...t, groupId: e.groupId, groupName: e.groupName });
                        });
                        break;
                    case f.K.DM_CHANNEL:
                        if (null == e.channel || null == e.user) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("20706"),
                                t.e("8516"),
                                t.e("23531"),
                                t.e("94881"),
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("34552"),
                                t.e("93103"),
                                t.e("8757"),
                                t.e("91763"),
                                t.e("89673"),
                                t.e("85968"),
                                t.e("60195"),
                                t.e("68403"),
                                t.e("29787"),
                                t.e("71210"),
                                t.e("97558"),
                                t.e("94000"),
                                t.e("88342"),
                                t.e("91994"),
                                t.e("38730"),
                                t.e("42451"),
                                t.e("76665"),
                                t.e("98965"),
                                t.e("35313"),
                                t.e("76273"),
                                t.e("36564"),
                                t.e("34971"),
                                t.e("45996"),
                                t.e("792"),
                                t.e("92822"),
                                t.e("23427"),
                                t.e("29422"),
                                t.e("9291"),
                                t.e("74610"),
                                t.e("38056"),
                                t.e("7059"),
                                t.e("8829"),
                                t.e("42339"),
                                t.e("16054"),
                                t.e("98199"),
                                t.e("41175"),
                                t.e("39778"),
                            ]).then(t.bind(t, 385913));
                            return (t) => (0, a.jsx)(n, { ...t, user: e.user, channel: e.channel, showModalItems: !1 });
                        });
                        break;
                    case f.K.GROUP_DM_CHANNEL:
                        if (null == e.channel) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("91763"),
                                t.e("38730"),
                                t.e("34971"),
                                t.e("42339"),
                                t.e("68530"),
                                t.e("12520"),
                                t.e("53416"),
                                t.e("60200"),
                            ]).then(t.bind(t, 4027));
                            return (t) => (0, a.jsx)(n, { ...t, channel: e.channel, selected: !1 });
                        });
                        break;
                    case f.K.GUILD_TEXT_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("91763"),
                                t.e("38730"),
                                t.e("35321"),
                                t.e("50033"),
                                t.e("34971"),
                                t.e("3998"),
                                t.e("43266"),
                                t.e("9004"),
                                t.e("30997"),
                                t.e("12255"),
                                t.e("40959"),
                                t.e("79995"),
                                t.e("42339"),
                                t.e("44058"),
                                t.e("91377"),
                                t.e("35723"),
                                t.e("12520"),
                                t.e("66540"),
                                t.e("29542"),
                                t.e("12052"),
                                t.e("25173"),
                            ]).then(t.bind(t, 468916));
                            return (t) => (0, a.jsx)(n, { ...t, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case f.K.VOICE_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("93103"),
                                t.e("91763"),
                                t.e("38730"),
                                t.e("35321"),
                                t.e("50033"),
                                t.e("34971"),
                                t.e("3998"),
                                t.e("43266"),
                                t.e("9004"),
                                t.e("74610"),
                                t.e("30997"),
                                t.e("12255"),
                                t.e("40959"),
                                t.e("79995"),
                                t.e("42339"),
                                t.e("44058"),
                                t.e("91377"),
                                t.e("35723"),
                                t.e("12520"),
                                t.e("66540"),
                                t.e("29542"),
                                t.e("19690"),
                                t.e("26792"),
                                t.e("12052"),
                                t.e("18663"),
                                t.e("99990"),
                                t.e("99854"),
                            ]).then(t.bind(t, 119357));
                            return (t) => (0, a.jsx)(n, { ...t, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case f.K.VOICE_USER: {
                        if (null == e.user || null == e.channelId) return;
                        let n = e.guild?.id ?? null;
                        (0, h.L3)(e.event, async () => {
                            let { default: l } = await Promise.all([
                                t.e("20706"),
                                t.e("94881"),
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("34552"),
                                t.e("8757"),
                                t.e("89673"),
                                t.e("85968"),
                                t.e("60195"),
                                t.e("68403"),
                                t.e("29787"),
                                t.e("97558"),
                                t.e("94000"),
                                t.e("91994"),
                                t.e("76665"),
                                t.e("76273"),
                                t.e("24198"),
                                t.e("32418"),
                            ]).then(t.bind(t, 668569));
                            return (t) =>
                                (0, a.jsx)(l, {
                                    ...t,
                                    user: e.user,
                                    guildId: n ?? void 0,
                                    channelId: e.channelId,
                                    appContext: R.BRT.APP,
                                });
                        });
                        break;
                    }
                    default:
                        e.type;
                }
            }, []),
        },
        m = l.useCallback(() => {
            O((e) => {
                let t = !e;
                return t ? n?.() : r?.(), t;
            });
        }, [r, n]),
        x = l.useCallback(
            () =>
                (0, a.jsx)("div", {
                    className: b.k,
                    children: (0, a.jsx)(o.$, { onPrimaryAction: S, onContextMenu: v }),
                }),
            [v, S],
        );
    return (0, a.jsx)(d.Y, {
        targetElementRef: k,
        animation: d.Y.Animation.NONE,
        position: i,
        align: s,
        autoInvert: !1,
        shouldShow: c,
        onRequestClose: P,
        renderPopout: x,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return u(m, t, e, k);
        },
    });
}
function k() {
    let e = (0, r.bG)([c.A], () => c.A.getPendingCount() > 0);
    return (
        l.useEffect(() => {
            i.h.dispatch({ type: "FRIENDS_LIST_POPOUT_MOUNTED" });
        }, []),
        (0, a.jsx)(O, {
            popoutPosition: "bottom",
            popoutAlign: "left",
            children: (n, t, l, r) =>
                (0, a.jsx)(s.A, {
                    ...l,
                    ref: r,
                    onClick: n,
                    icon: u.$,
                    tooltip: g.intl.string(g.t.TdEu5X),
                    showBadge: e,
                    selected: t,
                }),
        })
    );
}
