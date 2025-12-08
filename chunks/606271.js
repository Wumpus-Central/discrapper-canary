n.d(t, { Z: () => P }), n(388685);
var r = n(442837),
    i = n(570140),
    l = n(107105),
    a = n(616022),
    s = n(254579),
    o = n(592125),
    c = n(271383),
    u = n(430824),
    d = n(131951),
    p = n(158776),
    f = n(19780),
    h = n(699516),
    g = n(944486),
    m = n(594174),
    _ = n(979651),
    b = n(626135),
    E = n(823379),
    O = n(358085),
    v = n(914946),
    y = n(238679),
    I = n(863141),
    C = n(981631),
    S = n(701488),
    T = n(408491),
    N = n(65154);
function j(e, t, n) {
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
class P {
    loadServer() {
        for (let e of (O.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
            this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => m.default.getCurrentUser()),
            (this.rpcServer.onConnect = (e) => {
                i.Z.dispatch({
                    type: "RPC_APP_CONNECTED",
                    socketId: e.id,
                    application: e.application,
                }),
                    b.default.track(C.rMx.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport,
                    });
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                i.Z.dispatch({
                    type: "RPC_APP_DISCONNECTED",
                    socketId: e.id,
                    application: e.application,
                    reason: t,
                });
            });
        let e = [o.Z, c.ZP, p.Z, _.Z, d.Z, f.Z];
        new r.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
            i.Z.subscribe("MESSAGE_CREATE", this.handleMessage),
            i.Z.subscribe("MESSAGE_UPDATE", this.handleMessage),
            i.Z.subscribe("MESSAGE_DELETE", this.handleMessage),
            i.Z.subscribe("SPEAKING", this.handleSpeaking),
            i.Z.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            i.Z.subscribe("GUILD_CREATE", this.handleGuildCreate),
            i.Z.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
            i.Z.subscribe("LOGOUT", this.handleLogout),
            i.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            i.Z.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            i.Z.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            i.Z.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            i.Z.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            i.Z.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            i.Z.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            i.Z.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            i.Z.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            i.Z.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            i.Z.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            i.Z.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            i.Z.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            i.Z.subscribe("USER_UPDATE", this.handleUserUpdate),
            i.Z.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            i.Z.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            i.Z.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    terminate() {
        i.Z.unsubscribe("MESSAGE_CREATE", this.handleMessage),
            i.Z.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
            i.Z.unsubscribe("MESSAGE_DELETE", this.handleMessage),
            i.Z.unsubscribe("SPEAKING", this.handleSpeaking),
            i.Z.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
            i.Z.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
            i.Z.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
            i.Z.unsubscribe("LOGOUT", this.handleLogout),
            i.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            i.Z.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
            i.Z.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
            i.Z.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
            i.Z.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
            i.Z.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
            i.Z.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
            i.Z.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
            i.Z.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
            i.Z.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
            i.Z.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
            i.Z.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
            i.Z.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
            i.Z.unsubscribe("USER_UPDATE", this.handleUserUpdate),
            i.Z.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
            i.Z.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
            i.Z.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
    }
    constructor(e) {
        j(this, "rpcServer", void 0),
            j(this, "transports", void 0),
            j(this, "rpcCommandHandlers", void 0),
            j(this, "rpcEventHandlers", void 0),
            j(this, "stores", void 0),
            j(this, "registerTransportsForEmbeddedPlatform", void 0),
            j(this, "handleMessage", (e) => {
                let t, n, r;
                if (0 === this.rpcServer.subscriptions.length) return;
                "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
                let i = null;
                switch (e.type) {
                    case "MESSAGE_CREATE":
                        if ("SENDING" === e.message.state) return;
                        (t = C.zMe.MESSAGE_CREATE),
                            (n = e.channelId),
                            (r = e.message),
                            (i = "".concat(t).concat(e.message.id));
                        break;
                    case "MESSAGE_UPDATE":
                        (t = C.zMe.MESSAGE_UPDATE), (n = e.message.channel_id), (r = e.message);
                        break;
                    case "MESSAGE_DELETE":
                        (t = C.zMe.MESSAGE_DELETE),
                            (n = e.channelId),
                            (r = { id: e.id }),
                            (i = "".concat(t).concat(e.id));
                        break;
                    default:
                        return (0, E.vE)(e);
                }
                null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        { channel_id: n },
                        {
                            channel_id: n,
                            message: (0, v.Xb)(r),
                        },
                        i,
                    );
            }),
            j(this, "handleSpeaking", (e) => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let t = 0 !== e.speakingFlags ? C.zMe.SPEAKING_START : C.zMe.SPEAKING_STOP;
                if (e.context === N.Yn.DEFAULT) {
                    let n = g.Z.getVoiceChannelId();
                    if (null != n) {
                        let r = o.Z.getChannel(n);
                        if (null == r) return;
                        let i = _.Z.getVoiceState(r.getGuildId(), e.userId);
                        if (null == i) return;
                        this.rpcServer.dispatchToSubscriptions(
                            t,
                            { channel_id: i.channelId },
                            {
                                channel_id: i.channelId,
                                user_id: e.userId,
                            },
                        );
                    }
                }
            }),
            j(this, "handleVoiceChannelSelect", (e) => {
                let { guildId: t, channelId: n } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.VOICE_CHANNEL_SELECT,
                        {},
                        {
                            channel_id: n,
                            guild_id: t,
                        },
                    );
            }),
            j(this, "handleNotificationCreate", (e) => {
                let { channelId: t, message: n, icon: r, title: i, body: l } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.NOTIFICATION_CREATE,
                        {},
                        {
                            channel_id: t,
                            message: (0, v.Xb)(n),
                            icon_url: null != r ? (0, v.RE)(r) : null,
                            title: i,
                            body: l,
                        },
                    );
            }),
            j(this, "handleActivityJoin", (e) => {
                let { applicationId: t, secret: n, intent: r, embedded: i } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let l = { secret: n };
                i && (l.intent = r),
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.ACTIVITY_JOIN,
                        (e) => e.socket.application.id === t,
                        l,
                    ),
                    this.rpcServer.dispatchToSubscriptions(C.zMe.GAME_JOIN, (e) => e.socket.application.id === t, l);
            }),
            j(this, "handleActivityLayoutModeUpdate", (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n !== S.cE.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(
                    C.zMe.ACTIVITY_PIP_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    { is_pip_mode: r },
                ),
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.ACTIVITY_LAYOUT_MODE_UPDATE,
                        (e) => e.socket.application.id === t,
                        { layout_mode: n },
                    );
            }),
            j(this, "handleFrameUpdateLayoutMode", (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n === T.U.PIP ? S.cE.PIP : S.cE.FOCUSED,
                    i = r !== S.cE.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(
                    C.zMe.ACTIVITY_PIP_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    { is_pip_mode: i },
                ),
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.ACTIVITY_LAYOUT_MODE_UPDATE,
                        (e) => e.socket.application.id === t,
                        { layout_mode: r },
                    );
            }),
            j(this, "handleThermalStateChange", (e) => {
                let { applicationId: t } = e;
                if (0 === this.rpcServer.subscriptions.length || null == t) return;
                let n = { thermal_state: (0, l.bY)() };
                this.rpcServer.dispatchToSubscriptions(
                    C.zMe.THERMAL_STATE_UPDATE,
                    (e) => e.socket.application.id === t,
                    n,
                );
            }),
            j(this, "handleScreenOrientationUpdate", (e) => {
                let { screenOrientation: t } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(C.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
            }),
            j(this, "handleEmbeddedActivityUpdate", () => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let e = (0, y.dO)();
                this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
            }),
            j(this, "handleActivityMessage", (e) => {
                var t;
                let { channelId: n, message: r } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let { application: i, activity: l } = r;
                if (null == i || null == l || null == l.party_id) return;
                let a = m.default.getUser(null == (t = r.author) ? void 0 : t.id);
                if (null == a) return;
                let s = m.default.getCurrentUser();
                if (null == s || a.id === s.id) return;
                let o =
                    l.type === C.mFx.JOIN_REQUEST
                        ? p.Z.getApplicationActivity(s.id, i.id)
                        : p.Z.getApplicationActivity(a.id, i.id);
                if (null == o || null == o.party || o.party.id !== l.party_id) return;
                let c = o.application_id;
                switch (l.type) {
                    case C.mFx.JOIN:
                        this.rpcServer.dispatchToSubscriptions(
                            C.zMe.ACTIVITY_INVITE,
                            (e) => e.socket.application.id === c,
                            {
                                user: (0, I.Z)(a),
                                activity: o,
                                type: l.type,
                                channel_id: n,
                                message_id: r.id,
                            },
                        );
                        break;
                    case C.mFx.JOIN_REQUEST:
                        this.rpcServer.dispatchToSubscriptions(
                            C.zMe.ACTIVITY_JOIN_REQUEST,
                            (e) => e.socket.application.id === c,
                            {
                                user: (0, I.Z)(a),
                                activity: o,
                                type: l.type,
                                channel_id: n,
                                message_id: r.id,
                            },
                        );
                }
            }),
            j(this, "handleOAuth2TokenRevoke", (e) => {
                let { accessToken: t } = e;
                this.rpcServer.sockets.forEach((e) => {
                    e.authorization.accessToken === t && e.close(C.$VG.TOKEN_REVOKED, "Token revoked");
                });
            }),
            j(this, "handleGuildCreate", (e) => {
                let {
                        guild: { id: t },
                    } = e,
                    n = u.Z.getGuild(t);
                0 !== this.rpcServer.subscriptions.length &&
                    null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.GUILD_CREATE,
                        {},
                        {
                            id: t,
                            name: n.name,
                        },
                    );
            }),
            j(this, "handleChannelCreate", (e) => {
                let {
                    channel: { id: t, name: n, type: r },
                } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.CHANNEL_CREATE,
                        {},
                        {
                            id: t,
                            name: n,
                            type: r,
                        },
                    );
            }),
            j(this, "handleLogout", () => {
                this.rpcServer.sockets.forEach((e) => e.close(C.$VG.CLOSE_NORMAL, "User logout"));
            }),
            j(this, "handleRelationshipAdd", (e) => {
                let {
                    relationship: { id: t, type: n },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = m.default.getUser(t);
                if (null == r) return;
                let i = (0, v._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, v.kb)(i, e.socket.application.id),
                );
            }),
            j(this, "handleRelationshipUpdate", (e) => {
                let {
                    relationship: { id: t, type: n },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = m.default.getUser(t);
                if (null == r) return;
                let i = (0, v._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, v.kb)(i, e.socket.application.id),
                );
            }),
            j(this, "handleRelationshipRemove", (e) => {
                let {
                    relationship: { id: t },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = m.default.getUser(t);
                if (null == n) return;
                let r = (0, v._J)(C.OGo.NONE, n);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, v.kb)(r, e.socket.application.id),
                );
            }),
            j(this, "handlePresenceUpdates", (e) => {
                let { updates: t } = e;
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let e of new Set(
                        t.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        }),
                    ).values()) {
                        let t = h.Z.getRelationshipType(e);
                        if (t === C.OGo.NONE) continue;
                        let n = m.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, v._J)(t, n);
                        this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) =>
                            (0, v.kb)(r, e.socket.application.id),
                        );
                    }
            }),
            j(this, "handlePresencesReplace", () => {
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let [e, t] of h.Z.getMutableRelationships().entries()) {
                        if (t === C.OGo.NONE) continue;
                        let n = m.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, v._J)(t, n);
                        this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) =>
                            (0, v.kb)(r, e.socket.application.id),
                        );
                    }
            }),
            j(this, "handleUserUpdate", (e) => {
                let {
                    user: { id: t },
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = h.Z.getRelationshipType(t);
                if (n === C.OGo.NONE) return;
                let r = m.default.getUser(t);
                if (null == r) return;
                let i = (0, v._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) =>
                    (0, v.kb)(i, e.socket.application.id),
                );
            }),
            j(this, "handleEntitlementCreate", (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.ENTITLEMENT_CREATE,
                        (e) => e.socket.application.id === t.application_id,
                        { entitlement: t },
                    );
            }),
            j(this, "handleEntitlementDelete", (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.ENTITLEMENT_DELETE,
                        (e) => e.socket.application.id === t.application_id,
                        { entitlement: t },
                    );
            }),
            j(this, "handleQuestEnrollSuccess", (e) => {
                let { enrolledQuestUserStatus: t } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = t.questId,
                    r = a.Z.getQuest(n);
                if (null == r) return;
                let i = (0, s.nY)(r);
                null != i &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.QUEST_ENROLLMENT_STATUS_UPDATE,
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
