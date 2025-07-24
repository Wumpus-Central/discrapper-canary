(n.d(t, { Z: () => T }), n(388685));
var r = n(442837),
    i = n(570140),
    l = n(107105),
    a = n(592125),
    o = n(271383),
    s = n(430824),
    c = n(131951),
    u = n(158776),
    d = n(19780),
    p = n(699516),
    h = n(944486),
    f = n(594174),
    g = n(979651),
    m = n(626135),
    b = n(823379),
    _ = n(358085),
    O = n(914946),
    E = n(238679),
    y = n(863141),
    v = n(981631),
    I = n(701488),
    C = n(408491),
    S = n(65154);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class T {
    loadServer() {
        for (let e of (_.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        ((this.rpcServer.getCurrentUser = () => f.default.getCurrentUser()),
            (this.rpcServer.onConnect = (e) => {
                (i.Z.dispatch({
                    type: 'RPC_APP_CONNECTED',
                    socketId: e.id,
                    application: e.application
                }),
                    m.default.track(v.rMx.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport
                    }));
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                i.Z.dispatch({
                    type: 'RPC_APP_DISCONNECTED',
                    socketId: e.id,
                    application: e.application,
                    reason: t
                });
            }));
        let e = [a.Z, o.ZP, u.Z, g.Z, c.Z, d.Z];
        (new r.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach('RPCServerManager'), i.Z.subscribe('MESSAGE_CREATE', this.handleMessage), i.Z.subscribe('MESSAGE_UPDATE', this.handleMessage), i.Z.subscribe('MESSAGE_DELETE', this.handleMessage), i.Z.subscribe('SPEAKING', this.handleSpeaking), i.Z.subscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), i.Z.subscribe('GUILD_CREATE', this.handleGuildCreate), i.Z.subscribe('CHANNEL_CREATE', this.handleChannelCreate), i.Z.subscribe('LOGOUT', this.handleLogout), i.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), i.Z.subscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), i.Z.subscribe('ACTIVITY_JOIN', this.handleActivityJoin), i.Z.subscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), i.Z.subscribe('FRAME_UPDATE_LAYOUT_MODE', this.handleFrameUpdateLayoutMode), i.Z.subscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), i.Z.subscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), i.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), i.Z.subscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), i.Z.subscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), i.Z.subscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), i.Z.subscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), i.Z.subscribe('PRESENCES_REPLACE', this.handlePresencesReplace), i.Z.subscribe('USER_UPDATE', this.handleUserUpdate), i.Z.subscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), i.Z.subscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete));
    }
    terminate() {
        (i.Z.unsubscribe('MESSAGE_CREATE', this.handleMessage), i.Z.unsubscribe('MESSAGE_UPDATE', this.handleMessage), i.Z.unsubscribe('MESSAGE_DELETE', this.handleMessage), i.Z.unsubscribe('SPEAKING', this.handleSpeaking), i.Z.unsubscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), i.Z.unsubscribe('GUILD_CREATE', this.handleGuildCreate), i.Z.unsubscribe('CHANNEL_CREATE', this.handleChannelCreate), i.Z.unsubscribe('LOGOUT', this.handleLogout), i.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), i.Z.unsubscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), i.Z.unsubscribe('ACTIVITY_JOIN', this.handleActivityJoin), i.Z.unsubscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), i.Z.unsubscribe('FRAME_UPDATE_LAYOUT_MODE', this.handleFrameUpdateLayoutMode), i.Z.unsubscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), i.Z.unsubscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), i.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), i.Z.unsubscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), i.Z.unsubscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), i.Z.unsubscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), i.Z.unsubscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), i.Z.unsubscribe('PRESENCES_REPLACE', this.handlePresencesReplace), i.Z.unsubscribe('USER_UPDATE', this.handleUserUpdate), i.Z.unsubscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), i.Z.unsubscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete));
    }
    constructor(e) {
        (N(this, 'rpcServer', void 0),
            N(this, 'transports', void 0),
            N(this, 'rpcCommandHandlers', void 0),
            N(this, 'rpcEventHandlers', void 0),
            N(this, 'stores', void 0),
            N(this, 'registerTransportsForEmbeddedPlatform', void 0),
            N(this, 'handleMessage', (e) => {
                let t, n, r;
                if (0 === this.rpcServer.subscriptions.length) return;
                'MESSAGE_CREATE' === e.type && this.handleActivityMessage(e);
                let i = null;
                switch (e.type) {
                    case 'MESSAGE_CREATE':
                        if ('SENDING' === e.message.state) return;
                        ((t = v.zMe.MESSAGE_CREATE), (n = e.channelId), (r = e.message), (i = ''.concat(t).concat(e.message.id)));
                        break;
                    case 'MESSAGE_UPDATE':
                        ((t = v.zMe.MESSAGE_UPDATE), (n = e.message.channel_id), (r = e.message));
                        break;
                    case 'MESSAGE_DELETE':
                        ((t = v.zMe.MESSAGE_DELETE), (n = e.channelId), (r = { id: e.id }), (i = ''.concat(t).concat(e.id)));
                        break;
                    default:
                        return (0, b.vE)(e);
                }
                null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        { channel_id: n },
                        {
                            channel_id: n,
                            message: (0, O.Xb)(r)
                        },
                        i
                    );
            }),
            N(this, 'handleSpeaking', (e) => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let t = 0 !== e.speakingFlags ? v.zMe.SPEAKING_START : v.zMe.SPEAKING_STOP;
                if (e.context === S.Yn.DEFAULT) {
                    let n = h.Z.getVoiceChannelId();
                    if (null != n) {
                        let r = a.Z.getChannel(n);
                        if (null == r) return;
                        let i = g.Z.getVoiceState(r.getGuildId(), e.userId);
                        if (null == i) return;
                        this.rpcServer.dispatchToSubscriptions(
                            t,
                            { channel_id: i.channelId },
                            {
                                channel_id: i.channelId,
                                user_id: e.userId
                            }
                        );
                    }
                }
            }),
            N(this, 'handleVoiceChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.zMe.VOICE_CHANNEL_SELECT,
                        {},
                        {
                            channel_id: n,
                            guild_id: t
                        }
                    );
            }),
            N(this, 'handleNotificationCreate', (e) => {
                let { channelId: t, message: n, icon: r, title: i, body: l } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.zMe.NOTIFICATION_CREATE,
                        {},
                        {
                            channel_id: t,
                            message: (0, O.Xb)(n),
                            icon_url: null != r ? (0, O.RE)(r) : null,
                            title: i,
                            body: l
                        }
                    );
            }),
            N(this, 'handleActivityJoin', (e) => {
                let { applicationId: t, secret: n, intent: r, embedded: i } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let l = { secret: n };
                (i && (l.intent = r), this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_JOIN, (e) => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(v.zMe.GAME_JOIN, (e) => e.socket.application.id === t, l));
            }),
            N(this, 'handleActivityLayoutModeUpdate', (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n !== I.cE.FOCUSED;
                (this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, { is_pip_mode: r }), this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, { layout_mode: n }));
            }),
            N(this, 'handleFrameUpdateLayoutMode', (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n === C.U.PIP ? I.cE.PIP : I.cE.FOCUSED,
                    i = r !== I.cE.FOCUSED;
                (this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, { is_pip_mode: i }), this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, { layout_mode: r }));
            }),
            N(this, 'handleThermalStateChange', (e) => {
                let { applicationId: t } = e;
                if (0 === this.rpcServer.subscriptions.length || null == t) return;
                let n = { thermal_state: (0, l.bY)() };
                this.rpcServer.dispatchToSubscriptions(v.zMe.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
            }),
            N(this, 'handleScreenOrientationUpdate', (e) => {
                let { screenOrientation: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
            }),
            N(this, 'handleEmbeddedActivityUpdate', () => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let e = (0, E.dO)();
                this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
            }),
            N(this, 'handleActivityMessage', (e) => {
                var t;
                let { channelId: n, message: r } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let { application: i, activity: l } = r;
                if (null == i || null == l || null == l.party_id) return;
                let a = f.default.getUser(null == (t = r.author) ? void 0 : t.id);
                if (null == a) return;
                let o = f.default.getCurrentUser();
                if (null == o || a.id === o.id) return;
                let s = l.type === v.mFx.JOIN_REQUEST ? u.Z.getApplicationActivity(o.id, i.id) : u.Z.getApplicationActivity(a.id, i.id);
                if (null == s || null == s.party || s.party.id !== l.party_id) return;
                let c = s.application_id;
                switch (l.type) {
                    case v.mFx.JOIN:
                        this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_INVITE, (e) => e.socket.application.id === c, {
                            user: (0, y.Z)(a),
                            activity: s,
                            type: l.type,
                            channel_id: n,
                            message_id: r.id
                        });
                        break;
                    case v.mFx.JOIN_REQUEST:
                        this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_JOIN_REQUEST, (e) => e.socket.application.id === c, {
                            user: (0, y.Z)(a),
                            activity: s,
                            type: l.type,
                            channel_id: n,
                            message_id: r.id
                        });
                }
            }),
            N(this, 'handleOAuth2TokenRevoke', (e) => {
                let { accessToken: t } = e;
                this.rpcServer.sockets.forEach((e) => {
                    e.authorization.accessToken === t && e.close(v.$VG.TOKEN_REVOKED, 'Token revoked');
                });
            }),
            N(this, 'handleGuildCreate', (e) => {
                let {
                        guild: { id: t }
                    } = e,
                    n = s.Z.getGuild(t);
                0 !== this.rpcServer.subscriptions.length &&
                    null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.zMe.GUILD_CREATE,
                        {},
                        {
                            id: t,
                            name: n.name
                        }
                    );
            }),
            N(this, 'handleChannelCreate', (e) => {
                let {
                    channel: { id: t, name: n, type: r }
                } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        v.zMe.CHANNEL_CREATE,
                        {},
                        {
                            id: t,
                            name: n,
                            type: r
                        }
                    );
            }),
            N(this, 'handleLogout', () => {
                this.rpcServer.sockets.forEach((e) => e.close(v.$VG.CLOSE_NORMAL, 'User logout'));
            }),
            N(this, 'handleRelationshipAdd', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = f.default.getUser(t);
                if (null == r) return;
                let i = (0, O._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, O.kb)(i, e.socket.application.id));
            }),
            N(this, 'handleRelationshipUpdate', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = f.default.getUser(t);
                if (null == r) return;
                let i = (0, O._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, O.kb)(i, e.socket.application.id));
            }),
            N(this, 'handleRelationshipRemove', (e) => {
                let {
                    relationship: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = f.default.getUser(t);
                if (null == n) return;
                let r = (0, O._J)(v.OGo.NONE, n);
                this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, O.kb)(r, e.socket.application.id));
            }),
            N(this, 'handlePresenceUpdates', (e) => {
                let { updates: t } = e;
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let e of new Set(
                        t.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        })
                    ).values()) {
                        let t = p.Z.getRelationshipType(e);
                        if (t === v.OGo.NONE) continue;
                        let n = f.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, O._J)(t, n);
                        this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, O.kb)(r, e.socket.application.id));
                    }
            }),
            N(this, 'handlePresencesReplace', () => {
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let [e, t] of p.Z.getMutableRelationships().entries()) {
                        if (t === v.OGo.NONE) continue;
                        let n = f.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, O._J)(t, n);
                        this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, O.kb)(r, e.socket.application.id));
                    }
            }),
            N(this, 'handleUserUpdate', (e) => {
                let {
                    user: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = p.Z.getRelationshipType(t);
                if (n === v.OGo.NONE) return;
                let r = f.default.getUser(t);
                if (null == r) return;
                let i = (0, O._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, O.kb)(i, e.socket.application.id));
            }),
            N(this, 'handleEntitlementCreate', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.zMe.ENTITLEMENT_CREATE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            N(this, 'handleEntitlementDelete', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.zMe.ENTITLEMENT_DELETE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            (this.rpcServer = e.server),
            (this.transports = e.transports),
            (this.rpcCommandHandlers = e.commands),
            (this.rpcEventHandlers = e.events),
            (this.stores = e.stores),
            (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform));
    }
}
