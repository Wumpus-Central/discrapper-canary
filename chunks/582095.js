n.d(t, {
    A: () => j,
}),
    n(896048);
var r = n(311907),
    i = n(73153),
    l = n(663278),
    a = n(859703),
    s = n(792620),
    o = n(734057),
    c = n(696451),
    u = n(71393),
    d = n(430452),
    p = n(290863),
    f = n(383501),
    h = n(994500),
    A = n(309010),
    g = n(287809),
    m = n(977997),
    b = n(954571),
    _ = n(403362),
    E = n(723702),
    O = n(90924),
    y = n(592653),
    I = n(639621),
    v = n(652215),
    S = n(360469),
    C = n(165610),
    N = n(731854);

function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class j {
    loadServer() {
        for (let e of (E.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
            this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => g.default.getCurrentUser()),
            (this.rpcServer.onConnect = (e) => {
                i.h.dispatch({
                    type: "RPC_APP_CONNECTED",
                    socketId: e.id,
                    application: e.application,
                }),
                    b.default.track(v.HAw.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport,
                    });
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                i.h.dispatch({
                    type: "RPC_APP_DISCONNECTED",
                    socketId: e.id,
                    application: e.application,
                    reason: t,
                });
            });
        let e = [o.A, c.Ay, p.A, m.A, d.A, f.A];
        new r.ru(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
            i.h.subscribe("MESSAGE_CREATE", this.handleMessage),
            i.h.subscribe("MESSAGE_UPDATE", this.handleMessage),
            i.h.subscribe("MESSAGE_DELETE", this.handleMessage),
            i.h.subscribe("SPEAKING", this.handleSpeaking),
            i.h.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            i.h.subscribe("GUILD_CREATE", this.handleGuildCreate),
            i.h.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
            i.h.subscribe("LOGOUT", this.handleLogout),
            i.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            i.h.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            i.h.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            i.h.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            i.h.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            i.h.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            i.h.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            i.h.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            i.h.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            i.h.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            i.h.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            i.h.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            i.h.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            i.h.subscribe("USER_UPDATE", this.handleUserUpdate),
            i.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            i.h.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            i.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    terminate() {
        i.h.unsubscribe("MESSAGE_CREATE", this.handleMessage),
            i.h.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
            i.h.unsubscribe("MESSAGE_DELETE", this.handleMessage),
            i.h.unsubscribe("SPEAKING", this.handleSpeaking),
            i.h.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            i.h.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
            i.h.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
            i.h.unsubscribe("LOGOUT", this.handleLogout),
            i.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            i.h.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            i.h.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            i.h.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            i.h.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            i.h.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            i.h.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            i.h.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            i.h.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            i.h.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            i.h.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            i.h.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            i.h.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            i.h.unsubscribe("USER_UPDATE", this.handleUserUpdate),
            i.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            i.h.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            i.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    constructor(e) {
        T(this, "rpcServer", void 0),
            T(this, "transports", void 0),
            T(this, "rpcCommandHandlers", void 0),
            T(this, "rpcEventHandlers", void 0),
            T(this, "stores", void 0),
            T(this, "registerTransportsForEmbeddedPlatform", void 0),
            T(this, "handleMessage", (e) => {
                let t, n, r;
                if (0 === this.rpcServer.subscriptions.length) return;
                "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
                let i = null;
                switch (e.type) {
                    case "MESSAGE_CREATE":
                        if ("SENDING" === e.message.state) return;
                        (t = v.ZE4.MESSAGE_CREATE),
                            (n = e.channelId),
                            (r = e.message),
                            (i = "".concat(t).concat(e.message.id));
                        break;
                    case "MESSAGE_UPDATE":
                        (t = v.ZE4.MESSAGE_UPDATE), (n = e.message.channel_id), (r = e.message);
                        break;
                    case "MESSAGE_DELETE":
                        (t = v.ZE4.MESSAGE_DELETE),
                            (n = e.channelId),
                            (r = {
                                id: e.id,
                            }),
                            (i = "".concat(t).concat(e.id));
                        break;
                    default:
                        return (0, _.xb)(e);
                }
                null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        {
                            channel_id: n,
                        },
                        {
                            channel_id: n,
                            message: (0, O.Yj)(r),
                        },
                        i,
                    );
            }),
            T(this, "handleSpeaking", (e) => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let t = 0 !== e.speakingFlags ? v.ZE4.SPEAKING_START : v.ZE4.SPEAKING_STOP;
                if (e.context === N.x.DEFAULT) {
                    let n = A.A.getVoiceChannelId();
                    if (null != n) {
                        let r = o.A.getChannel(n);
                        if (null == r) return;
                        let i = m.A.getVoiceState(r.getGuildId(), e.userId);
                        if (null == i) return;
                        this.rpcServer.dispatchToSubscriptions(
                            t,
                            {
                                channel_id: i.channelId,
                            },
                            {
                                channel_id: i.channelId,
                                user_id: e.userId,
                            },
                        );
                    }
                }
            }),
            T(this, "handleVoiceChannelSelect", (e) => {
                let { guildId: t, channelId: n } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.VOICE_CHANNEL_SELECT,
                        {},
                        {
                            channel_id: n,
                            guild_id: t,
                        },
                    );
            }),
            T(this, "handleNotificationCreate", (e) => {
                let { channelId: t, message: n, icon: r, title: i, body: l } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.NOTIFICATION_CREATE,
                        {},
                        {
                            channel_id: t,
                            message: (0, O.Yj)(n),
                            icon_url: null != r ? (0, O.hk)(r) : null,
                            title: i,
                            body: l,
                        },
                    );
            }),
            T(this, "handleActivityJoin", (e) => {
                let { applicationId: t, secret: n, intent: r, embedded: i } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let l = {
                    secret: n,
                };
                i && (l.intent = r),
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.ACTIVITY_JOIN,
                        (e) => e.socket.application.id === t,
                        l,
                    ),
                    this.rpcServer.dispatchToSubscriptions(v.ZE4.GAME_JOIN, (e) => e.socket.application.id === t, l);
            }),
            T(this, "handleActivityLayoutModeUpdate", (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n !== S.bN.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(
                    v.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    {
                        is_pip_mode: r,
                    },
                );
                let i = {
                    layout_mode: n,
                };
                this.rpcServer.dispatchToSubscriptions(
                    v.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    i,
                ),
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                        (e) => e.socket.application.id === t,
                        i,
                    );
            }),
            T(this, "handleFrameUpdateLayoutMode", (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n === C.y.PIP ? S.bN.PIP : S.bN.FOCUSED,
                    i = r !== S.bN.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(
                    v.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    {
                        is_pip_mode: i,
                    },
                );
                let l = {
                    layout_mode: r,
                };
                this.rpcServer.dispatchToSubscriptions(
                    v.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    l,
                ),
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                        (e) => e.socket.application.id === t,
                        l,
                    );
            }),
            T(this, "handleThermalStateChange", (e) => {
                let { applicationId: t } = e;
                if (0 === this.rpcServer.subscriptions.length || null == t) return;
                let n = {
                    thermal_state: (0, l.zw)(),
                };
                this.rpcServer.dispatchToSubscriptions(
                    v.ZE4.THERMAL_STATE_UPDATE,
                    (e) => e.socket.application.id === t,
                    n,
                );
            }),
            T(this, "handleScreenOrientationUpdate", (e) => {
                let { screenOrientation: t } = e;
                0 === this.rpcServer.subscriptions.length ||
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.ORIENTATION_UPDATE,
                        {},
                        {
                            screen_orientation: t,
                        },
                    );
            }),
            T(this, "handleEmbeddedActivityUpdate", () => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let e = (0, y.Y$)();
                this.rpcServer.dispatchToSubscriptions(v.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
            }),
            T(this, "handleActivityMessage", (e) => {
                var t;
                let { channelId: n, message: r } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let { application: i, activity: l } = r;
                if (null == i || null == l || null == l.party_id) return;
                let a = g.default.getUser(null == (t = r.author) ? void 0 : t.id);
                if (null == a) return;
                let s = g.default.getCurrentUser();
                if (null == s || a.id === s.id) return;
                let o =
                    l.type === v.xL.JOIN_REQUEST
                        ? p.A.getApplicationActivity(s.id, i.id)
                        : p.A.getApplicationActivity(a.id, i.id);
                if (null == o || null == o.party || o.party.id !== l.party_id) return;
                let c = o.application_id;
                switch (l.type) {
                    case v.xL.JOIN:
                        this.rpcServer.dispatchToSubscriptions(
                            v.ZE4.ACTIVITY_INVITE,
                            (e) => e.socket.application.id === c,
                            {
                                user: (0, I.A)(a),
                                activity: o,
                                type: l.type,
                                channel_id: n,
                                message_id: r.id,
                            },
                        );
                        break;
                    case v.xL.JOIN_REQUEST:
                        this.rpcServer.dispatchToSubscriptions(
                            v.ZE4.ACTIVITY_JOIN_REQUEST,
                            (e) => e.socket.application.id === c,
                            {
                                user: (0, I.A)(a),
                                activity: o,
                                type: l.type,
                                channel_id: n,
                                message_id: r.id,
                            },
                        );
                }
            }),
            T(this, "handleOAuth2TokenRevoke", (e) => {
                let { accessToken: t } = e;
                this.rpcServer.sockets.forEach((e) => {
                    e.authorization.accessToken === t && e.close(v.YI$.TOKEN_REVOKED, "Token revoked");
                });
            }),
            T(this, "handleGuildCreate", (e) => {
                let {
                        guild: { id: t },
                    } = e,
                    n = u.A.getGuild(t);
                0 !== this.rpcServer.subscriptions.length &&
                    null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.GUILD_CREATE,
                        {},
                        {
                            id: t,
                            name: n.name,
                        },
                    );
            }),
            T(this, "handleChannelCreate", (e) => {
                let {
                    channel: { id: t, name: n, type: r },
                } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.CHANNEL_CREATE,
                        {},
                        {
                            id: t,
                            name: n,
                            type: r,
                        },
                    );
            }),
            T(this, "handleLogout", () => {
                this.rpcServer.sockets.forEach((e) => e.close(v.YI$.CLOSE_NORMAL, "User logout"));
            }),
            T(this, "handleRelationshipAdd", (e) => {
                let {
                    relationship: { id: t, type: n },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = g.default.getUser(t);
                if (null == r) return;
                let i = (0, O.Gc)(n, r);
                this.rpcServer.dispatchToSubscriptions(v.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, O.LP)(i, e.socket.application.id),
                );
            }),
            T(this, "handleRelationshipUpdate", (e) => {
                let {
                    relationship: { id: t, type: n },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = g.default.getUser(t);
                if (null == r) return;
                let i = (0, O.Gc)(n, r);
                this.rpcServer.dispatchToSubscriptions(v.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, O.LP)(i, e.socket.application.id),
                );
            }),
            T(this, "handleRelationshipRemove", (e) => {
                let {
                    relationship: { id: t },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = g.default.getUser(t);
                if (null == n) return;
                let r = (0, O.Gc)(v.eA$.NONE, n);
                this.rpcServer.dispatchToSubscriptions(v.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, O.LP)(r, e.socket.application.id),
                );
            }),
            T(this, "handlePresenceUpdates", (e) => {
                let { updates: t } = e;
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let e of new Set(
                        t.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        }),
                    ).values()) {
                        let t = h.A.getRelationshipType(e);
                        if (t === v.eA$.NONE) continue;
                        let n = g.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, O.Gc)(t, n);
                        this.rpcServer.dispatchToSubscriptions(v.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                            (0, O.LP)(r, e.socket.application.id),
                        );
                    }
            }),
            T(this, "handlePresencesReplace", () => {
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let [e, t] of h.A.getMutableRelationships().entries()) {
                        if (t === v.eA$.NONE) continue;
                        let n = g.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, O.Gc)(t, n);
                        this.rpcServer.dispatchToSubscriptions(v.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                            (0, O.LP)(r, e.socket.application.id),
                        );
                    }
            }),
            T(this, "handleUserUpdate", (e) => {
                let {
                    user: { id: t },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = h.A.getRelationshipType(t);
                if (n === v.eA$.NONE) return;
                let r = g.default.getUser(t);
                if (null == r) return;
                let i = (0, O.Gc)(n, r);
                this.rpcServer.dispatchToSubscriptions(v.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, O.LP)(i, e.socket.application.id),
                );
            }),
            T(this, "handleEntitlementCreate", (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.ENTITLEMENT_CREATE,
                        (e) => e.socket.application.id === t.application_id,
                        {
                            entitlement: t,
                        },
                    );
            }),
            T(this, "handleEntitlementDelete", (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.ENTITLEMENT_DELETE,
                        (e) => e.socket.application.id === t.application_id,
                        {
                            entitlement: t,
                        },
                    );
            }),
            T(this, "handleQuestEnrollSuccess", (e) => {
                let { enrolledQuestUserStatus: t } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = t.questId,
                    r = a.A.getQuest(n);
                if (null == r) return;
                let i = (0, s.TP)(r);
                null != i &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE,
                        (e) => {
                            var t;
                            return e.socket.application.id === i && (null == (t = e.args) ? void 0 : t.quest_id) === n;
                        },
                        {
                            quest_id: n,
                            is_enrolled: null != t.enrolledAt,
                            enrolled_at: t.enrolledAt,
                        },
                    );
            }),
            (this.rpcServer = e.server),
            (this.transports = e.transports),
            (this.rpcCommandHandlers = e.commands),
            (this.rpcEventHandlers = e.events),
            (this.stores = e.stores),
            (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
    }
}
