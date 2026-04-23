n.d(t, { A: () => v });
var i = n(311907),
    r = n(73153),
    a = n(663278),
    l = n(859703),
    s = n(792620),
    o = n(734057),
    d = n(696451),
    u = n(71393),
    c = n(430452),
    A = n(290863),
    h = n(383501),
    _ = n(994500),
    E = n(309010),
    p = n(287809),
    m = n(977997),
    g = n(954571),
    I = n(403362),
    C = n(723702),
    f = n(90924),
    T = n(592653),
    S = n(639621),
    N = n(652215),
    O = n(360469),
    L = n(165610),
    y = n(731854);
class v {
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
        for (let e of (C.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
            this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => p.default.getCurrentUser()),
            (this.rpcServer.onConnect = (e) => {
                r.h.dispatch({ type: "RPC_APP_CONNECTED", socketId: e.id, application: e.application }),
                    g.default.track(N.HAw.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport,
                    });
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                r.h.dispatch({ type: "RPC_APP_DISCONNECTED", socketId: e.id, application: e.application, reason: t });
            });
        let e = [o.A, d.Ay, A.A, m.A, c.Ay, h.A];
        new i.ru(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
            r.h.subscribe("MESSAGE_CREATE", this.handleMessage),
            r.h.subscribe("MESSAGE_UPDATE", this.handleMessage),
            r.h.subscribe("MESSAGE_DELETE", this.handleMessage),
            r.h.subscribe("SPEAKING", this.handleSpeaking),
            r.h.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            r.h.subscribe("GUILD_CREATE", this.handleGuildCreate),
            r.h.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
            r.h.subscribe("LOGOUT", this.handleLogout),
            r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            r.h.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            r.h.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            r.h.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            r.h.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            r.h.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            r.h.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            r.h.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            r.h.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            r.h.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            r.h.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            r.h.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            r.h.subscribe("USER_UPDATE", this.handleUserUpdate),
            r.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            r.h.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            r.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    terminate() {
        r.h.unsubscribe("MESSAGE_CREATE", this.handleMessage),
            r.h.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
            r.h.unsubscribe("MESSAGE_DELETE", this.handleMessage),
            r.h.unsubscribe("SPEAKING", this.handleSpeaking),
            r.h.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            r.h.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
            r.h.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
            r.h.unsubscribe("LOGOUT", this.handleLogout),
            r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            r.h.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            r.h.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            r.h.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            r.h.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            r.h.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            r.h.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            r.h.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            r.h.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            r.h.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            r.h.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            r.h.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            r.h.unsubscribe("USER_UPDATE", this.handleUserUpdate),
            r.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            r.h.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            r.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    handleMessage = (e) => {
        let t, n, i;
        if (0 === this.rpcServer.subscriptions.length) return;
        "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
        let r = null;
        switch (e.type) {
            case "MESSAGE_CREATE":
                if ("SENDING" === e.message.state) return;
                (t = N.ZE4.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (r = `${t}${e.message.id}`);
                break;
            case "MESSAGE_UPDATE":
                (t = N.ZE4.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                break;
            case "MESSAGE_DELETE":
                (t = N.ZE4.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (r = `${t}${e.id}`);
                break;
            default:
                return (0, I.xb)(e);
        }
        null != n &&
            this.rpcServer.dispatchToSubscriptions(t, { channel_id: n }, { channel_id: n, message: (0, f.Yj)(i) }, r);
    };
    handleSpeaking = (e) => {
        if (0 === this.rpcServer.subscriptions.length) return;
        let t = 0 !== e.speakingFlags ? N.ZE4.SPEAKING_START : N.ZE4.SPEAKING_STOP;
        if (e.context === y.x.DEFAULT) {
            let n = E.A.getVoiceChannelId();
            if (null != n) {
                let i = o.A.getChannel(n);
                if (null == i) return;
                let r = m.A.getVoiceState(i.getGuildId(), e.userId);
                if (null == r) return;
                this.rpcServer.dispatchToSubscriptions(
                    t,
                    { channel_id: r.channelId },
                    { channel_id: r.channelId, user_id: e.userId },
                );
            }
        }
    };
    handleVoiceChannelSelect = (e) => {
        let { guildId: t, channelId: n } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(N.ZE4.VOICE_CHANNEL_SELECT, {}, { channel_id: n, guild_id: t });
    };
    handleNotificationCreate = (e) => {
        let { channelId: t, message: n, icon: i, title: r, body: a } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(
                N.ZE4.NOTIFICATION_CREATE,
                {},
                { channel_id: t, message: (0, f.Yj)(n), icon_url: null != i ? (0, f.hk)(i) : null, title: r, body: a },
            );
    };
    handleActivityJoin = (e) => {
        let { applicationId: t, parentApplicationId: n, secret: i, intent: r, embedded: a } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let l = { application_id: t, secret: i };
        a && (l.intent = r),
            this.rpcServer.dispatchToSubscriptions(
                N.ZE4.ACTIVITY_JOIN,
                (e) => e.socket.application.id === t || (null != n && e.socket.application.parentId === n),
                l,
            ),
            this.rpcServer.dispatchToSubscriptions(N.ZE4.GAME_JOIN, (e) => e.socket.application.id === t, l);
    };
    handleActivityLayoutModeUpdate = (e) => {
        let { applicationId: t, layoutMode: n } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = n !== O.bN.FOCUSED;
        this.rpcServer.dispatchToSubscriptions(N.ZE4.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, {
            is_pip_mode: i,
        });
        let r = { layout_mode: n };
        this.rpcServer.dispatchToSubscriptions(
            N.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
            (e) => e.socket.application.id === t,
            r,
        ),
            this.rpcServer.dispatchToSubscriptions(
                N.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                r,
            );
    };
    handleFrameUpdateLayoutMode = (e) => {
        let { applicationId: t, layoutMode: n } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = n === L.y.PIP ? O.bN.PIP : O.bN.FOCUSED,
            r = i !== O.bN.FOCUSED;
        this.rpcServer.dispatchToSubscriptions(N.ZE4.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, {
            is_pip_mode: r,
        });
        let a = { layout_mode: i };
        this.rpcServer.dispatchToSubscriptions(
            N.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
            (e) => e.socket.application.id === t,
            a,
        ),
            this.rpcServer.dispatchToSubscriptions(
                N.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                a,
            );
    };
    handleThermalStateChange = (e) => {
        let { applicationId: t } = e;
        if (0 === this.rpcServer.subscriptions.length || null == t) return;
        let n = { thermal_state: (0, a.zw)() };
        this.rpcServer.dispatchToSubscriptions(N.ZE4.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
    };
    handleScreenOrientationUpdate = (e) => {
        let { screenOrientation: t } = e;
        0 === this.rpcServer.subscriptions.length ||
            this.rpcServer.dispatchToSubscriptions(N.ZE4.ORIENTATION_UPDATE, {}, { screen_orientation: t });
    };
    handleEmbeddedActivityUpdate = () => {
        if (0 === this.rpcServer.subscriptions.length) return;
        let e = (0, T.Y$)();
        this.rpcServer.dispatchToSubscriptions(N.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
    };
    handleActivityMessage = (e) => {
        let { channelId: t, message: n } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let { application: i, activity: r } = n;
        if (null == i || null == r || null == r.party_id) return;
        let a = p.default.getUser(n.author?.id);
        if (null == a) return;
        let l = p.default.getCurrentUser();
        if (null == l || a.id === l.id) return;
        let s =
            r.type === N.xL.JOIN_REQUEST
                ? A.A.getApplicationActivity(l.id, i.id)
                : A.A.getApplicationActivity(a.id, i.id);
        if (null == s || null == s.party || s.party.id !== r.party_id) return;
        let o = s.application_id;
        switch (r.type) {
            case N.xL.JOIN:
                this.rpcServer.dispatchToSubscriptions(N.ZE4.ACTIVITY_INVITE, (e) => e.socket.application.id === o, {
                    user: (0, S.A)(a),
                    activity: s,
                    type: r.type,
                    channel_id: t,
                    message_id: n.id,
                });
                break;
            case N.xL.JOIN_REQUEST:
                this.rpcServer.dispatchToSubscriptions(
                    N.ZE4.ACTIVITY_JOIN_REQUEST,
                    (e) => e.socket.application.id === o,
                    { user: (0, S.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                );
        }
    };
    handleOAuth2TokenRevoke = (e) => {
        let { accessToken: t } = e;
        this.rpcServer.sockets.forEach((e) => {
            e.authorization.accessToken === t && e.close(N.YI$.TOKEN_REVOKED, "Token revoked");
        });
    };
    handleGuildCreate = (e) => {
        let {
                guild: { id: t },
            } = e,
            n = u.A.getGuild(t);
        0 !== this.rpcServer.subscriptions.length &&
            null != n &&
            this.rpcServer.dispatchToSubscriptions(N.ZE4.GUILD_CREATE, {}, { id: t, name: n.name });
    };
    handleChannelCreate = (e) => {
        let {
            channel: { id: t, name: n, type: i },
        } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(N.ZE4.CHANNEL_CREATE, {}, { id: t, name: n, type: i });
    };
    handleLogout = () => {
        this.rpcServer.sockets.forEach((e) => e.close(N.YI$.CLOSE_NORMAL, "User logout"));
    };
    handleRelationshipAdd = (e) => {
        let {
            relationship: { id: t, type: n },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = p.default.getUser(t);
        if (null == i) return;
        let r = (0, f.Gc)(n, i);
        this.rpcServer.dispatchToSubscriptions(N.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, f.LP)(r, e.socket.application.id),
        );
    };
    handleRelationshipUpdate = (e) => {
        let {
            relationship: { id: t, type: n },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = p.default.getUser(t);
        if (null == i) return;
        let r = (0, f.Gc)(n, i);
        this.rpcServer.dispatchToSubscriptions(N.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, f.LP)(r, e.socket.application.id),
        );
    };
    handleRelationshipRemove = (e) => {
        let {
            relationship: { id: t },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let n = p.default.getUser(t);
        if (null == n) return;
        let i = (0, f.Gc)(N.eA$.NONE, n);
        this.rpcServer.dispatchToSubscriptions(N.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, f.LP)(i, e.socket.application.id),
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
                if (t === N.eA$.NONE) continue;
                let n = p.default.getUser(e);
                if (null == n) continue;
                let i = (0, f.Gc)(t, n);
                this.rpcServer.dispatchToSubscriptions(N.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, f.LP)(i, e.socket.application.id),
                );
            }
    };
    handlePresencesReplace = () => {
        if (0 !== this.rpcServer.subscriptions.length)
            for (let [e, t] of _.A.getMutableRelationships().entries()) {
                if (t === N.eA$.NONE) continue;
                let n = p.default.getUser(e);
                if (null == n) continue;
                let i = (0, f.Gc)(t, n);
                this.rpcServer.dispatchToSubscriptions(N.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, f.LP)(i, e.socket.application.id),
                );
            }
    };
    handleUserUpdate = (e) => {
        let {
            user: { id: t },
        } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let n = _.A.getRelationshipType(t);
        if (n === N.eA$.NONE) return;
        let i = p.default.getUser(t);
        if (null == i) return;
        let r = (0, f.Gc)(n, i);
        this.rpcServer.dispatchToSubscriptions(N.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
            (0, f.LP)(r, e.socket.application.id),
        );
    };
    handleEntitlementCreate = (e) => {
        let { entitlement: t } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(
                N.ZE4.ENTITLEMENT_CREATE,
                (e) => e.socket.application.id === t.application_id,
                { entitlement: t },
            );
    };
    handleEntitlementDelete = (e) => {
        let { entitlement: t } = e;
        0 !== this.rpcServer.subscriptions.length &&
            this.rpcServer.dispatchToSubscriptions(
                N.ZE4.ENTITLEMENT_DELETE,
                (e) => e.socket.application.id === t.application_id,
                { entitlement: t },
            );
    };
    handleQuestEnrollSuccess = (e) => {
        let { enrolledQuestUserStatus: t } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let n = t.questId,
            i = l.A.getQuest(n);
        if (null == i) return;
        let r = (0, s.TP)(i);
        null != r &&
            this.rpcServer.dispatchToSubscriptions(
                N.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE,
                (e) => e.socket.application.id === r && e.args?.quest_id === n,
                { quest_id: n, is_enrolled: null != t.enrolledAt, enrolled_at: t.enrolledAt },
            );
    };
}
