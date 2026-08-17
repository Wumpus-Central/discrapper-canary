t.r(n), t.d(n, { default: () => k });
var a = t(477900),
    l = t(582128),
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
    N = t(183208),
    _ = t(717398),
    C = t(730852),
    T = t(428249),
    f = t(67103),
    p = t(975732),
    A = t(734057),
    R = t(652215),
    y = t(381941),
    g = t(375708),
    b = t(829014);
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
                                    t.e("158696"),
                                    t.e("397705"),
                                    t.e("926132"),
                                    t.e("146652"),
                                    t.e("893190"),
                                    t.e("834552"),
                                    t.e("708757"),
                                    t.e("585968"),
                                    t.e("189673"),
                                    t.e("468403"),
                                    t.e("229787"),
                                    t.e("882073"),
                                    t.e("797558"),
                                    t.e("691994"),
                                    t.e("576665"),
                                    t.e("776273"),
                                    t.e("624198"),
                                    t.e("532418"),
                                ]).then(t.bind(t, 668569));
                                return (t) => (0, a.jsx)(n, { ...t, user: e.user, appContext: R.BRT.APP });
                            },
                            { context: R.BRT.APP },
                        );
                        break;
                    case f.K.FRIEND_GROUP:
                        if (null == e.groupId || null == e.groupName) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await t.e("297717").then(t.bind(t, 607956));
                            return (t) => (0, a.jsx)(n, { ...t, groupId: e.groupId, groupName: e.groupName });
                        });
                        break;
                    case f.K.DM_CHANNEL:
                        if (null == e.channel || null == e.user) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("158696"),
                                t.e("943630"),
                                t.e("676279"),
                                t.e("545309"),
                                t.e("397705"),
                                t.e("926132"),
                                t.e("146652"),
                                t.e("993103"),
                                t.e("893190"),
                                t.e("834552"),
                                t.e("391763"),
                                t.e("708757"),
                                t.e("585968"),
                                t.e("189673"),
                                t.e("571210"),
                                t.e("468403"),
                                t.e("238730"),
                                t.e("229787"),
                                t.e("88342"),
                                t.e("882073"),
                                t.e("797558"),
                                t.e("691994"),
                                t.e("311802"),
                                t.e("698965"),
                                t.e("576665"),
                                t.e("235313"),
                                t.e("776273"),
                                t.e("947502"),
                                t.e("474610"),
                                t.e("436564"),
                                t.e("245996"),
                                t.e("700792"),
                                t.e("592822"),
                                t.e("965789"),
                                t.e("823427"),
                                t.e("529422"),
                                t.e("838056"),
                                t.e("309291"),
                                t.e("307059"),
                                t.e("508829"),
                                t.e("187048"),
                                t.e("516054"),
                                t.e("298199"),
                                t.e("17244"),
                                t.e("864464"),
                                t.e("439778"),
                            ]).then(t.bind(t, 385913));
                            return (t) => (0, a.jsx)(n, { ...t, user: e.user, channel: e.channel, showModalItems: !1 });
                        });
                        break;
                    case f.K.GROUP_DM_CHANNEL:
                        if (null == e.channel) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("926132"),
                                t.e("146652"),
                                t.e("893190"),
                                t.e("391763"),
                                t.e("238730"),
                                t.e("947502"),
                                t.e("965789"),
                                t.e("368530"),
                                t.e("187048"),
                                t.e("566378"),
                                t.e("17244"),
                                t.e("153416"),
                                t.e("760200"),
                            ]).then(t.bind(t, 4027));
                            return (t) => (0, a.jsx)(n, { ...t, channel: e.channel, selected: !1 });
                        });
                        break;
                    case f.K.GUILD_TEXT_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("926132"),
                                t.e("146652"),
                                t.e("893190"),
                                t.e("391763"),
                                t.e("238730"),
                                t.e("535321"),
                                t.e("550033"),
                                t.e("947502"),
                                t.e("603998"),
                                t.e("343266"),
                                t.e("309004"),
                                t.e("965789"),
                                t.e("412255"),
                                t.e("63340"),
                                t.e("430997"),
                                t.e("379995"),
                                t.e("187048"),
                                t.e("544058"),
                                t.e("65200"),
                                t.e("591377"),
                                t.e("35723"),
                                t.e("566378"),
                                t.e("256372"),
                                t.e("29542"),
                                t.e("248804"),
                                t.e("25173"),
                            ]).then(t.bind(t, 468916));
                            return (t) => (0, a.jsx)(n, { ...t, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case f.K.VOICE_CHANNEL:
                        if (null == e.channel || null == e.guild) return;
                        (0, h.L3)(e.event, async () => {
                            let { default: n } = await Promise.all([
                                t.e("926132"),
                                t.e("146652"),
                                t.e("993103"),
                                t.e("893190"),
                                t.e("391763"),
                                t.e("238730"),
                                t.e("535321"),
                                t.e("550033"),
                                t.e("947502"),
                                t.e("474610"),
                                t.e("603998"),
                                t.e("343266"),
                                t.e("309004"),
                                t.e("965789"),
                                t.e("412255"),
                                t.e("63340"),
                                t.e("430997"),
                                t.e("379995"),
                                t.e("187048"),
                                t.e("544058"),
                                t.e("591377"),
                                t.e("35723"),
                                t.e("566378"),
                                t.e("256372"),
                                t.e("29542"),
                                t.e("419690"),
                                t.e("426792"),
                                t.e("248804"),
                                t.e("318663"),
                                t.e("599990"),
                                t.e("599854"),
                            ]).then(t.bind(t, 119357));
                            return (t) => (0, a.jsx)(n, { ...t, channel: e.channel, guild: e.guild });
                        });
                        break;
                    case f.K.VOICE_USER: {
                        if (null == e.user || null == e.channelId) return;
                        let n = e.guild?.id ?? null;
                        (0, h.L3)(e.event, async () => {
                            let { default: l } = await Promise.all([
                                t.e("158696"),
                                t.e("397705"),
                                t.e("926132"),
                                t.e("146652"),
                                t.e("893190"),
                                t.e("834552"),
                                t.e("708757"),
                                t.e("585968"),
                                t.e("189673"),
                                t.e("468403"),
                                t.e("229787"),
                                t.e("882073"),
                                t.e("797558"),
                                t.e("691994"),
                                t.e("576665"),
                                t.e("776273"),
                                t.e("624198"),
                                t.e("532418"),
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
