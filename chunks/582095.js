n.d(t, { A: () => y });
var i = n(311907),
    l = n(73153),
    r = n(663278),
    a = n(859703),
    s = n(792620),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    u = n(430452),
    A = n(290863),
    h = n(383501),
    _ = n(994500),
    m = n(309010),
    g = n(287809),
    p = n(977997),
    E = n(954571),
    I = n(403362),
    f = n(723702),
    C = n(90924),
    T = n(592653),
    N = n(639621),
    S = n(652215),
    x = n(360469),
    v = n(165610),
    b = n(731854);
class y {
    rpcServer;
    transports;
    rpcCommandHandlers;
    rpcEventHandlers;
    stores;
    registerTransportsForEmbeddedPlatform;
    constructor(e) {
        (this.rpcServer = e.server),
            (this.transports = e.transports),
            (this.rpcCommandHandlers = e.commands),
            (this.rpcEventHandlers = e.events),
            (this.stores = e.stores),
            (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
    }
    loadServer() {
        for (let e of (f.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
            this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => g.default.getCurrentUser()),
            (this.rpcServer.onConnect = (e) => {
                l.h.dispatch({ type: "RPC_APP_CONNECTED", socketId: e.id, application: e.application }),
                    E.default.track(S.HAw.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport,
                    });
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                l.h.dispatch({ type: "RPC_APP_DISCONNECTED", socketId: e.id, application: e.application, reason: t });
            });
        let e = [o.A, d.Ay, A.A, p.A, u.Ay, h.A];
        new i.ru(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
            l.h.subscribe("MESSAGE_CREATE", this.handleMessage),
            l.h.subscribe("MESSAGE_UPDATE", this.handleMessage),
            l.h.subscribe("MESSAGE_DELETE", this.handleMessage),
            l.h.subscribe("SPEAKING", this.handleSpeaking),
            l.h.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            l.h.subscribe("GUILD_CREATE", this.handleGuildCreate),
            l.h.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
            l.h.subscribe("LOGOUT", this.handleLogout),
            l.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            l.h.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            l.h.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            l.h.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            l.h.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            l.h.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            l.h.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            l.h.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            l.h.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            l.h.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            l.h.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            l.h.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            l.h.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            l.h.subscribe("USER_UPDATE", this.handleUserUpdate),
            l.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            l.h.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            l.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    terminate() {
        l.h.unsubscribe("MESSAGE_CREATE", this.handleMessage),
            l.h.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
            l.h.unsubscribe("MESSAGE_DELETE", this.handleMessage),
            l.h.unsubscribe("SPEAKING", this.handleSpeaking),
            l.h.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            l.h.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
            l.h.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
            l.h.unsubscribe("LOGOUT", this.handleLogout),
            l.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            l.h.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            l.h.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            l.h.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            l.h.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            l.h.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            l.h.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            l.h.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            l.h.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            l.h.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            l.h.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            l.h.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            l.h.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            l.h.unsubscribe("USER_UPDATE", this.handleUserUpdate),
            l.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            l.h.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            l.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    handleMessage = (e) => {
        let t, n, i;
        if (0 === this.rpcServer.subscriptions.length) return;
        "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
        let l = null;
        switch (e.type) {
            case "MESSAGE_CREATE":
                if ("SENDING" === e.message.state) return;
                (t = S.ZE4.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (l = `${t}${e.message.id}`);
                break;
            case "MESSAGE_UPDATE":
                (t = S.ZE4.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                break;
            case "MESSAGE_DELETE":
                (t = S.ZE4.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (l = `${t}${e.id}`);
                break;
            default:
                return (0, I.xb)(e);
        }
        null != n &&
            this.rpcServer.dispatchToSubscriptions(t, { channel_id: n }, { channel_id: n, message: (0, C.Yj)(i) }, l);
    };
    handleSpeaking = (e) => {
        if (0 === this.rpcServer.subscriptions.length) return;
        let t = 0 !== e.speakingFlags ? S.ZE4.SPEAKING_START : S.ZE4.SPEAKING_STOP;
        if (e.context === b.x.DEFAULT) {
            let n = m.A.getVoiceChannelId();
            if (null != n) {
                let i = o.A.getChannel(n);
                if (null == i) return;
                let l = p.A.getVoiceState(i.getGuildId(), e.userId);
                if (null == l) return;
                this.rpcServer.dispatchToSubscriptions(
                    t,
                    { channel_id: l.channelId },
                    { channel_id: l.channelId, user_id: e.userId },
                );
            }
        }
    };
    handleVoiceChannelSelect = (e) => {
        let { guildId: t, channelId: n } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(S.ZE4.VOICE_CHANNEL_SELECT, {}, { channel_id: n, guild_id: t });
    };
    handleNotificationCreate = (e) => {
        let { channelId: t, message: n, icon: i, title: l, body: r } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(
                S.ZE4.NOTIFICATION_CREATE,
                {},
                { channel_id: t, message: (0, C.Yj)(n), icon_url: null != i ? (0, C.hk)(i) : null, title: l, body: r },
            );
    };
    handleActivityJoin = (e) => {
        let { applicationId: t, parentApplicationId: n, secret: i, intent: l, embedded: r } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let a = { application_id: t, secret: i };
        r && (a.intent = l),
            this.rpcServer.dispatchToSubscriptions(
                S.ZE4.ACTIVITY_JOIN,
                (e) => e.socket.application.id === t || (null != n && e.socket.application.parentId === n),
                a,
            ),
            this.rpcServer.dispatchToSubscriptions(S.ZE4.GAME_JOIN, (e) => e.socket.application.id === t, a);
    };
    handleActivityLayoutModeUpdate = (e) => {
        let { applicationId: t, layoutMode: n } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = n !== x.bN.FOCUSED;
        this.rpcServer.dispatchToSubscriptions(S.ZE4.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, {
            is_pip_mode: i,
        });
        let l = { layout_mode: n };
        this.rpcServer.dispatchToSubscriptions(
            S.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
            (e) => e.socket.application.id === t,
            l,
        ),
            this.rpcServer.dispatchToSubscriptions(
                S.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                l,
            );
    };
    handleFrameUpdateLayoutMode = (e) => {
        let { applicationId: t, layoutMode: n } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = n === v.y.PIP ? x.bN.PIP : x.bN.FOCUSED,
            l = i !== x.bN.FOCUSED;
        this.rpcServer.dispatchToSubscriptions(S.ZE4.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, {
            is_pip_mode: l,
        });
        let r = { layout_mode: i };
        this.rpcServer.dispatchToSubscriptions(
            S.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
            (e) => e.socket.application.id === t,
            r,
        ),
            this.rpcServer.dispatchToSubscriptions(
                S.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                r,
            );
    };
    handleThermalStateChange = (e) => {
        let { applicationId: t } = e;
        if (0 === this.rpcServer.subscriptions.length || null == t) return;
        let n = { thermal_state: (0, r.zw)() };
        this.rpcServer.dispatchToSubscriptions(S.ZE4.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
    };
    handleScreenOrientationUpdate = (e) => {
        let { screenOrientation: t } = e;
        0 === this.rpcServer.subscriptions.length ||
            this.rpcServer.dispatchToSubscriptions(S.ZE4.ORIENTATION_UPDATE, {}, { screen_orientation: t });
    };
    handleEmbeddedActivityUpdate = () => {
        if (0 === this.rpcServer.subscriptions.length) return;
        let e = (0, T.Y$)();
        this.rpcServer.dispatchToSubscriptions(S.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
    };
    handleActivityMessage = (e) => {
        let { channelId: t, message: n } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let { application: i, activity: l } = n;
        if (null == i || null == l || null == l.party_id) return;
        let r = g.default.getUser(n.author?.id);
        if (null == r) return;
        let a = g.default.getCurrentUser();
        if (null == a || r.id === a.id) return;
        let s =
            l.type === S.xL.JOIN_REQUEST
                ? A.A.getApplicationActivity(a.id, i.id)
                : A.A.getApplicationActivity(r.id, i.id);
        if (null == s || null == s.party || s.party.id !== l.party_id) return;
        let o = s.application_id;
        switch (l.type) {
            case S.xL.JOIN:
                this.rpcServer.dispatchToSubscriptions(S.ZE4.ACTIVITY_INVITE, (e) => e.socket.application.id === o, {
                    user: (0, N.A)(r),
                    activity: s,
                    type: l.type,
                    channel_id: t,
                    message_id: n.id,
                });
                break;
            case S.xL.JOIN_REQUEST:
                this.rpcServer.dispatchToSubscriptions(
                    S.ZE4.ACTIVITY_JOIN_REQUEST,
                    (e) => e.socket.application.id === o,
                    { user: (0, N.A)(r), activity: s, type: l.type, channel_id: t, message_id: n.id },
                );
        }
    };
    handleOAuth2TokenRevoke = (e) => {
        let { accessToken: t } = e;
        this.rpcServer.sockets.forEach((e) => {
            e.authorization.accessToken === t && e.close(S.YI$.TOKEN_REVOKED, "Token revoked");
        });
    };
    handleGuildCreate = (e) => {
        let {
                guild: { id: t },
            } = e,
            n = c.A.getGuild(t);
        0 !== this.rpcServer.subscriptions.length &&
            null != n &&
            this.rpcServer.dispatchToSubscriptions(S.ZE4.GUILD_CREATE, {}, { id: t, name: n.name });
    };
    handleChannelCreate = (e) => {
        let {
            channel: { id: t, name: n, type: i },
        } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(S.ZE4.CHANNEL_CREATE, {}, { id: t, name: n, type: i });
    };
    handleLogout = () => {
        this.rpcServer.sockets.forEach((e) => e.close(S.YI$.CLOSE_NORMAL, "User logout"));
    };
    handleRelationshipAdd = (e) => {
        let {
            relationship: { id: t, type: n },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = g.default.getUser(t);
        if (null == i) return;
        let l = (0, C.Gc)(n, i);
        this.rpcServer.dispatchToSubscriptions(S.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, C.LP)(l, e.socket.application.id),
        );
    };
    handleRelationshipUpdate = (e) => {
        let {
            relationship: { id: t, type: n },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = g.default.getUser(t);
        if (null == i) return;
        let l = (0, C.Gc)(n, i);
        this.rpcServer.dispatchToSubscriptions(S.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, C.LP)(l, e.socket.application.id),
        );
    };
    handleRelationshipRemove = (e) => {
        let {
            relationship: { id: t },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let n = g.default.getUser(t);
        if (null == n) return;
        let i = (0, C.Gc)(S.eA$.NONE, n);
        this.rpcServer.dispatchToSubscriptions(S.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, C.LP)(i, e.socket.application.id),
        );
    };
    handlePresenceUpdates = (e) => {
        let { updates: t } = e;
        if (0 !== this.rpcServer.subscriptions.length)
            for (let e of new Set(
                t.map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            ).values()) {
                let t = _.A.getRelationshipType(e);
                if (t === S.eA$.NONE) continue;
                let n = g.default.getUser(e);
                if (null == n) continue;
                let i = (0, C.Gc)(t, n);
                this.rpcServer.dispatchToSubscriptions(S.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, C.LP)(i, e.socket.application.id),
                );
            }
    };
    handlePresencesReplace = () => {
        if (0 !== this.rpcServer.subscriptions.length)
            for (let [e, t] of _.A.getMutableRelationships().entries()) {
                if (t === S.eA$.NONE) continue;
                let n = g.default.getUser(e);
                if (null == n) continue;
                let i = (0, C.Gc)(t, n);
                this.rpcServer.dispatchToSubscriptions(S.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, C.LP)(i, e.socket.application.id),
                );
            }
    };
    handleUserUpdate = (e) => {
        let {
            user: { id: t },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let n = _.A.getRelationshipType(t);
        if (n === S.eA$.NONE) return;
        let i = g.default.getUser(t);
        if (null == i) return;
        let l = (0, C.Gc)(n, i);
        this.rpcServer.dispatchToSubscriptions(S.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, C.LP)(l, e.socket.application.id),
        );
    };
    handleEntitlementCreate = (e) => {
        let { entitlement: t } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(
                S.ZE4.ENTITLEMENT_CREATE,
                (e) => e.socket.application.id === t.application_id,
                { entitlement: t },
            );
    };
    handleEntitlementDelete = (e) => {
        let { entitlement: t } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(
                S.ZE4.ENTITLEMENT_DELETE,
                (e) => e.socket.application.id === t.application_id,
                { entitlement: t },
            );
    };
    handleQuestEnrollSuccess = (e) => {
        let { enrolledQuestUserStatus: t } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let n = t.questId,
            i = a.A.getQuest(n);
        if (null == i) return;
        let l = (0, s.TP)(i);
        null != l &&
            this.rpcServer.dispatchToSubscriptions(
                S.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE,
                (e) => e.socket.application.id === l && e.args?.quest_id === n,
                { quest_id: n, is_enrolled: null != t.enrolledAt, enrolled_at: t.enrolledAt },
            );
    };
}
