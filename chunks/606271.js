n.d(t, { Z: () => j }), n(47120);
var r = n(392711),
    i = n.n(r),
    l = n(442837),
    o = n(570140),
    a = n(173439),
    s = n(176787),
    c = n(592125),
    u = n(271383),
    d = n(430824),
    p = n(131951),
    h = n(158776),
    f = n(19780),
    g = n(699516),
    m = n(944486),
    b = n(594174),
    _ = n(979651),
    E = n(626135),
    O = n(823379),
    N = n(358085),
    v = n(914946),
    y = n(238679),
    I = n(863141),
    C = n(981631),
    S = n(701488),
    T = n(65154);
function P(e, t, n) {
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
class j {
    loadServer() {
        for (let e of (N.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => b.default.getCurrentUser()),
            (this.rpcServer.onConnect = async (e) => {
                o.Z.dispatch({
                    type: 'RPC_APP_CONNECTED',
                    socketId: e.id,
                    application: e.application
                }),
                    E.default.track(C.rMx.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport
                    });
                let t = e.application.id;
                null != t &&
                    (await (0, a.Zw)({
                        applicationId: t,
                        socketId: e.id
                    }));
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                o.Z.dispatch({
                    type: 'RPC_APP_DISCONNECTED',
                    socketId: e.id,
                    application: e.application,
                    reason: t
                });
            });
        let e = [c.Z, u.ZP, h.Z, _.Z, p.Z, f.Z];
        new l.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach('RPCServerManager'), o.Z.subscribe('MESSAGE_CREATE', this.handleMessage), o.Z.subscribe('MESSAGE_UPDATE', this.handleMessage), o.Z.subscribe('MESSAGE_DELETE', this.handleMessage), o.Z.subscribe('SPEAKING', this.handleSpeaking), o.Z.subscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), o.Z.subscribe('GUILD_CREATE', this.handleGuildCreate), o.Z.subscribe('CHANNEL_CREATE', this.handleChannelCreate), o.Z.subscribe('LOGOUT', this.handleLogout), o.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), o.Z.subscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), o.Z.subscribe('ACTIVITY_JOIN', this.handleActivityJoin), o.Z.subscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), o.Z.subscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), o.Z.subscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), o.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), o.Z.subscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), o.Z.subscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), o.Z.subscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), o.Z.subscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), o.Z.subscribe('PRESENCES_REPLACE', this.handlePresencesReplace), o.Z.subscribe('USER_UPDATE', this.handleUserUpdate), o.Z.subscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), o.Z.subscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    terminate() {
        o.Z.unsubscribe('MESSAGE_CREATE', this.handleMessage), o.Z.unsubscribe('MESSAGE_UPDATE', this.handleMessage), o.Z.unsubscribe('MESSAGE_DELETE', this.handleMessage), o.Z.unsubscribe('SPEAKING', this.handleSpeaking), o.Z.unsubscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), o.Z.unsubscribe('GUILD_CREATE', this.handleGuildCreate), o.Z.unsubscribe('CHANNEL_CREATE', this.handleChannelCreate), o.Z.unsubscribe('LOGOUT', this.handleLogout), o.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), o.Z.unsubscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), o.Z.unsubscribe('ACTIVITY_JOIN', this.handleActivityJoin), o.Z.unsubscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), o.Z.unsubscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), o.Z.unsubscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), o.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), o.Z.unsubscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), o.Z.unsubscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), o.Z.unsubscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), o.Z.unsubscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), o.Z.unsubscribe('PRESENCES_REPLACE', this.handlePresencesReplace), o.Z.unsubscribe('USER_UPDATE', this.handleUserUpdate), o.Z.unsubscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), o.Z.unsubscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    constructor(e) {
        P(this, 'rpcServer', void 0),
            P(this, 'transports', void 0),
            P(this, 'rpcCommandHandlers', void 0),
            P(this, 'rpcEventHandlers', void 0),
            P(this, 'stores', void 0),
            P(this, 'registerTransportsForEmbeddedPlatform', void 0),
            P(this, 'handleMessage', (e) => {
                let t, n, r;
                if (0 === this.rpcServer.subscriptions.length) return;
                'MESSAGE_CREATE' === e.type && this.handleActivityMessage(e);
                let i = null;
                switch (e.type) {
                    case 'MESSAGE_CREATE':
                        if ('SENDING' === e.message.state) return;
                        (t = C.zMe.MESSAGE_CREATE), (n = e.channelId), (r = e.message), (i = ''.concat(t).concat(e.message.id));
                        break;
                    case 'MESSAGE_UPDATE':
                        (t = C.zMe.MESSAGE_UPDATE), (n = e.message.channel_id), (r = e.message);
                        break;
                    case 'MESSAGE_DELETE':
                        (t = C.zMe.MESSAGE_DELETE), (n = e.channelId), (r = { id: e.id }), (i = ''.concat(t).concat(e.id));
                        break;
                    default:
                        return (0, O.vE)(e);
                }
                null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        { channel_id: n },
                        {
                            channel_id: n,
                            message: (0, v.Xb)(r)
                        },
                        i
                    );
            }),
            P(this, 'handleSpeaking', (e) => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let t = 0 !== e.speakingFlags ? C.zMe.SPEAKING_START : C.zMe.SPEAKING_STOP;
                if (e.context === T.Yn.DEFAULT) {
                    let n = m.Z.getVoiceChannelId();
                    if (null != n) {
                        let r = c.Z.getChannel(n);
                        if (null == r) return;
                        let i = _.Z.getVoiceState(r.getGuildId(), e.userId);
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
            P(this, 'handleVoiceChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.VOICE_CHANNEL_SELECT,
                        {},
                        {
                            channel_id: n,
                            guild_id: t
                        }
                    );
            }),
            P(this, 'handleNotificationCreate', (e) => {
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
                            body: l
                        }
                    );
            }),
            P(this, 'handleActivityJoin', (e) => {
                let { applicationId: t, secret: n, intent: r, embedded: i } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let l = { secret: n };
                i && (l.intent = r), this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_JOIN, (e) => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(C.zMe.GAME_JOIN, (e) => e.socket.application.id === t, l);
            }),
            P(this, 'handleActivityLayoutModeUpdate', (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n !== S.cE.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, { is_pip_mode: r }), this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, { layout_mode: n });
            }),
            P(this, 'handleThermalStateChange', (e) => {
                let { applicationId: t } = e;
                if (0 === this.rpcServer.subscriptions.length || null == t) return;
                let n = { thermal_state: (0, s.bY)() };
                this.rpcServer.dispatchToSubscriptions(C.zMe.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
            }),
            P(this, 'handleScreenOrientationUpdate', (e) => {
                let { screenOrientation: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
            }),
            P(this, 'handleEmbeddedActivityUpdate', () => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let e = (0, y.dO)();
                this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
            }),
            P(this, 'handleActivityMessage', (e) => {
                var t;
                let { channelId: n, message: r } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let { application: i, activity: l } = r;
                if (null == i || null == l || null == l.party_id) return;
                let o = b.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
                if (null == o) return;
                let a = b.default.getCurrentUser();
                if (null == a || o.id === a.id) return;
                let s = l.type === C.mFx.JOIN_REQUEST ? h.Z.getApplicationActivity(a.id, i.id) : h.Z.getApplicationActivity(o.id, i.id);
                if (null == s || null == s.party || s.party.id !== l.party_id) return;
                let c = s.application_id;
                switch (l.type) {
                    case C.mFx.JOIN:
                        this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_INVITE, (e) => e.socket.application.id === c, {
                            user: (0, I.Z)(o),
                            activity: s,
                            type: l.type,
                            channel_id: n,
                            message_id: r.id
                        });
                        break;
                    case C.mFx.JOIN_REQUEST:
                        this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_JOIN_REQUEST, (e) => e.socket.application.id === c, { user: (0, I.Z)(o) });
                }
            }),
            P(this, 'handleOAuth2TokenRevoke', (e) => {
                let { accessToken: t } = e;
                this.rpcServer.sockets.forEach((e) => {
                    e.authorization.accessToken === t && e.close(C.$VG.TOKEN_REVOKED, 'Token revoked');
                });
            }),
            P(this, 'handleGuildCreate', (e) => {
                let {
                        guild: { id: t }
                    } = e,
                    n = d.Z.getGuild(t);
                0 !== this.rpcServer.subscriptions.length &&
                    null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.GUILD_CREATE,
                        {},
                        {
                            id: t,
                            name: n.name
                        }
                    );
            }),
            P(this, 'handleChannelCreate', (e) => {
                let {
                    channel: { id: t, name: n, type: r }
                } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        C.zMe.CHANNEL_CREATE,
                        {},
                        {
                            id: t,
                            name: n,
                            type: r
                        }
                    );
            }),
            P(this, 'handleLogout', () => {
                this.rpcServer.sockets.forEach((e) => e.close(C.$VG.CLOSE_NORMAL, 'User logout'));
            }),
            P(this, 'handleRelationshipAdd', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = b.default.getUser(t);
                if (null == r) return;
                let i = (0, v._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(i, e.socket.application.id));
            }),
            P(this, 'handleRelationshipUpdate', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = b.default.getUser(t);
                if (null == r) return;
                let i = (0, v._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(i, e.socket.application.id));
            }),
            P(this, 'handleRelationshipRemove', (e) => {
                let {
                    relationship: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = b.default.getUser(t);
                if (null == n) return;
                let r = (0, v._J)(C.OGo.NONE, n);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(r, e.socket.application.id));
            }),
            P(this, 'handlePresenceUpdates', (e) => {
                let { updates: t } = e;
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let e of new Set(
                        t.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        })
                    ).values()) {
                        let t = g.Z.getRelationshipType(e);
                        if (t === C.OGo.NONE) continue;
                        let n = b.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, v._J)(t, n);
                        this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(r, e.socket.application.id));
                    }
            }),
            P(this, 'handlePresencesReplace', () => {
                0 !== this.rpcServer.subscriptions.length &&
                    i().forEach(g.Z.getRelationships(), (e, t) => {
                        if (e === C.OGo.NONE) return;
                        let n = b.default.getUser(t);
                        if (null == n) return;
                        let r = (0, v._J)(e, n);
                        this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(r, e.socket.application.id));
                    });
            }),
            P(this, 'handleUserUpdate', (e) => {
                let {
                    user: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = g.Z.getRelationshipType(t);
                if (n === C.OGo.NONE) return;
                let r = b.default.getUser(t);
                if (null == r) return;
                let i = (0, v._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(i, e.socket.application.id));
            }),
            P(this, 'handleEntitlementCreate', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.ENTITLEMENT_CREATE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            P(this, 'handleEntitlementDelete', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.ENTITLEMENT_DELETE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            (this.rpcServer = e.server),
            (this.transports = e.transports),
            (this.rpcCommandHandlers = e.commands),
            (this.rpcEventHandlers = e.events),
            (this.stores = e.stores),
            (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
    }
}
