n.d(t, { Z: () => P }), n(47120);
var r = n(392711),
    i = n.n(r),
    l = n(442837),
    o = n(570140),
    a = n(176787),
    s = n(592125),
    c = n(271383),
    u = n(430824),
    d = n(131951),
    p = n(158776),
    h = n(19780),
    f = n(699516),
    g = n(944486),
    m = n(594174),
    b = n(979651),
    _ = n(626135),
    E = n(823379),
    O = n(358085),
    N = n(914946),
    v = n(238679),
    y = n(863141),
    I = n(981631),
    C = n(701488),
    S = n(65154);
function T(e, t, n) {
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
class P {
    loadServer() {
        for (let e of (O.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => m.default.getCurrentUser()),
            (this.rpcServer.onConnect = (e) => {
                o.Z.dispatch({
                    type: 'RPC_APP_CONNECTED',
                    socketId: e.id,
                    application: e.application
                }),
                    _.default.track(I.rMx.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport
                    });
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                o.Z.dispatch({
                    type: 'RPC_APP_DISCONNECTED',
                    socketId: e.id,
                    application: e.application,
                    reason: t
                });
            });
        let e = [s.Z, c.ZP, p.Z, b.Z, d.Z, h.Z];
        new l.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach('RPCServerManager'), o.Z.subscribe('MESSAGE_CREATE', this.handleMessage), o.Z.subscribe('MESSAGE_UPDATE', this.handleMessage), o.Z.subscribe('MESSAGE_DELETE', this.handleMessage), o.Z.subscribe('SPEAKING', this.handleSpeaking), o.Z.subscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), o.Z.subscribe('GUILD_CREATE', this.handleGuildCreate), o.Z.subscribe('CHANNEL_CREATE', this.handleChannelCreate), o.Z.subscribe('LOGOUT', this.handleLogout), o.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), o.Z.subscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), o.Z.subscribe('ACTIVITY_JOIN', this.handleActivityJoin), o.Z.subscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), o.Z.subscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), o.Z.subscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), o.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), o.Z.subscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), o.Z.subscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), o.Z.subscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), o.Z.subscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), o.Z.subscribe('PRESENCES_REPLACE', this.handlePresencesReplace), o.Z.subscribe('USER_UPDATE', this.handleUserUpdate), o.Z.subscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), o.Z.subscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    terminate() {
        o.Z.unsubscribe('MESSAGE_CREATE', this.handleMessage), o.Z.unsubscribe('MESSAGE_UPDATE', this.handleMessage), o.Z.unsubscribe('MESSAGE_DELETE', this.handleMessage), o.Z.unsubscribe('SPEAKING', this.handleSpeaking), o.Z.unsubscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), o.Z.unsubscribe('GUILD_CREATE', this.handleGuildCreate), o.Z.unsubscribe('CHANNEL_CREATE', this.handleChannelCreate), o.Z.unsubscribe('LOGOUT', this.handleLogout), o.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), o.Z.unsubscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), o.Z.unsubscribe('ACTIVITY_JOIN', this.handleActivityJoin), o.Z.unsubscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), o.Z.unsubscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), o.Z.unsubscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), o.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), o.Z.unsubscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), o.Z.unsubscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), o.Z.unsubscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), o.Z.unsubscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), o.Z.unsubscribe('PRESENCES_REPLACE', this.handlePresencesReplace), o.Z.unsubscribe('USER_UPDATE', this.handleUserUpdate), o.Z.unsubscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), o.Z.unsubscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    constructor(e) {
        T(this, 'rpcServer', void 0),
            T(this, 'transports', void 0),
            T(this, 'rpcCommandHandlers', void 0),
            T(this, 'rpcEventHandlers', void 0),
            T(this, 'stores', void 0),
            T(this, 'registerTransportsForEmbeddedPlatform', void 0),
            T(this, 'handleMessage', (e) => {
                let t, n, r;
                if (0 === this.rpcServer.subscriptions.length) return;
                'MESSAGE_CREATE' === e.type && this.handleActivityMessage(e);
                let i = null;
                switch (e.type) {
                    case 'MESSAGE_CREATE':
                        if ('SENDING' === e.message.state) return;
                        (t = I.zMe.MESSAGE_CREATE), (n = e.channelId), (r = e.message), (i = ''.concat(t).concat(e.message.id));
                        break;
                    case 'MESSAGE_UPDATE':
                        (t = I.zMe.MESSAGE_UPDATE), (n = e.message.channel_id), (r = e.message);
                        break;
                    case 'MESSAGE_DELETE':
                        (t = I.zMe.MESSAGE_DELETE), (n = e.channelId), (r = { id: e.id }), (i = ''.concat(t).concat(e.id));
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
                            message: (0, N.Xb)(r)
                        },
                        i
                    );
            }),
            T(this, 'handleSpeaking', (e) => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let t = 0 !== e.speakingFlags ? I.zMe.SPEAKING_START : I.zMe.SPEAKING_STOP;
                if (e.context === S.Yn.DEFAULT) {
                    let n = g.Z.getVoiceChannelId();
                    if (null != n) {
                        let r = s.Z.getChannel(n);
                        if (null == r) return;
                        let i = b.Z.getVoiceState(r.getGuildId(), e.userId);
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
            T(this, 'handleVoiceChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        I.zMe.VOICE_CHANNEL_SELECT,
                        {},
                        {
                            channel_id: n,
                            guild_id: t
                        }
                    );
            }),
            T(this, 'handleNotificationCreate', (e) => {
                let { channelId: t, message: n, icon: r, title: i, body: l } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        I.zMe.NOTIFICATION_CREATE,
                        {},
                        {
                            channel_id: t,
                            message: (0, N.Xb)(n),
                            icon_url: null != r ? (0, N.RE)(r) : null,
                            title: i,
                            body: l
                        }
                    );
            }),
            T(this, 'handleActivityJoin', (e) => {
                let { applicationId: t, secret: n, intent: r, embedded: i } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let l = { secret: n };
                i && (l.intent = r), this.rpcServer.dispatchToSubscriptions(I.zMe.ACTIVITY_JOIN, (e) => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(I.zMe.GAME_JOIN, (e) => e.socket.application.id === t, l);
            }),
            T(this, 'handleActivityLayoutModeUpdate', (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = n !== C.cE.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(I.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, { is_pip_mode: r }), this.rpcServer.dispatchToSubscriptions(I.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, { layout_mode: n });
            }),
            T(this, 'handleThermalStateChange', (e) => {
                let { applicationId: t } = e;
                if (0 === this.rpcServer.subscriptions.length || null == t) return;
                let n = { thermal_state: (0, a.bY)() };
                this.rpcServer.dispatchToSubscriptions(I.zMe.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
            }),
            T(this, 'handleScreenOrientationUpdate', (e) => {
                let { screenOrientation: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(I.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
            }),
            T(this, 'handleEmbeddedActivityUpdate', () => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let e = (0, v.dO)();
                this.rpcServer.dispatchToSubscriptions(I.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
            }),
            T(this, 'handleActivityMessage', (e) => {
                var t;
                let { channelId: n, message: r } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let { application: i, activity: l } = r;
                if (null == i || null == l || null == l.party_id) return;
                let o = m.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
                if (null == o) return;
                let a = m.default.getCurrentUser();
                if (null == a || o.id === a.id) return;
                let s = l.type === I.mFx.JOIN_REQUEST ? p.Z.getApplicationActivity(a.id, i.id) : p.Z.getApplicationActivity(o.id, i.id);
                if (null == s || null == s.party || s.party.id !== l.party_id) return;
                let c = s.application_id;
                switch (l.type) {
                    case I.mFx.JOIN:
                        this.rpcServer.dispatchToSubscriptions(I.zMe.ACTIVITY_INVITE, (e) => e.socket.application.id === c, {
                            user: (0, y.Z)(o),
                            activity: s,
                            type: l.type,
                            channel_id: n,
                            message_id: r.id
                        });
                        break;
                    case I.mFx.JOIN_REQUEST:
                        this.rpcServer.dispatchToSubscriptions(I.zMe.ACTIVITY_JOIN_REQUEST, (e) => e.socket.application.id === c, { user: (0, y.Z)(o) });
                }
            }),
            T(this, 'handleOAuth2TokenRevoke', (e) => {
                let { accessToken: t } = e;
                this.rpcServer.sockets.forEach((e) => {
                    e.authorization.accessToken === t && e.close(I.$VG.TOKEN_REVOKED, 'Token revoked');
                });
            }),
            T(this, 'handleGuildCreate', (e) => {
                let {
                        guild: { id: t }
                    } = e,
                    n = u.Z.getGuild(t);
                0 !== this.rpcServer.subscriptions.length &&
                    null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        I.zMe.GUILD_CREATE,
                        {},
                        {
                            id: t,
                            name: n.name
                        }
                    );
            }),
            T(this, 'handleChannelCreate', (e) => {
                let {
                    channel: { id: t, name: n, type: r }
                } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        I.zMe.CHANNEL_CREATE,
                        {},
                        {
                            id: t,
                            name: n,
                            type: r
                        }
                    );
            }),
            T(this, 'handleLogout', () => {
                this.rpcServer.sockets.forEach((e) => e.close(I.$VG.CLOSE_NORMAL, 'User logout'));
            }),
            T(this, 'handleRelationshipAdd', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = m.default.getUser(t);
                if (null == r) return;
                let i = (0, N._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(I.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, N.kb)(i, e.socket.application.id));
            }),
            T(this, 'handleRelationshipUpdate', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = m.default.getUser(t);
                if (null == r) return;
                let i = (0, N._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(I.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, N.kb)(i, e.socket.application.id));
            }),
            T(this, 'handleRelationshipRemove', (e) => {
                let {
                    relationship: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = m.default.getUser(t);
                if (null == n) return;
                let r = (0, N._J)(I.OGo.NONE, n);
                this.rpcServer.dispatchToSubscriptions(I.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, N.kb)(r, e.socket.application.id));
            }),
            T(this, 'handlePresenceUpdates', (e) => {
                let { updates: t } = e;
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let e of new Set(
                        t.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        })
                    ).values()) {
                        let t = f.Z.getRelationshipType(e);
                        if (t === I.OGo.NONE) continue;
                        let n = m.default.getUser(e);
                        if (null == n) continue;
                        let r = (0, N._J)(t, n);
                        this.rpcServer.dispatchToSubscriptions(I.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, N.kb)(r, e.socket.application.id));
                    }
            }),
            T(this, 'handlePresencesReplace', () => {
                0 !== this.rpcServer.subscriptions.length &&
                    i().forEach(f.Z.getRelationships(), (e, t) => {
                        if (e === I.OGo.NONE) return;
                        let n = m.default.getUser(t);
                        if (null == n) return;
                        let r = (0, N._J)(e, n);
                        this.rpcServer.dispatchToSubscriptions(I.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, N.kb)(r, e.socket.application.id));
                    });
            }),
            T(this, 'handleUserUpdate', (e) => {
                let {
                    user: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = f.Z.getRelationshipType(t);
                if (n === I.OGo.NONE) return;
                let r = m.default.getUser(t);
                if (null == r) return;
                let i = (0, N._J)(n, r);
                this.rpcServer.dispatchToSubscriptions(I.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, N.kb)(i, e.socket.application.id));
            }),
            T(this, 'handleEntitlementCreate', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(I.zMe.ENTITLEMENT_CREATE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            T(this, 'handleEntitlementDelete', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(I.zMe.ENTITLEMENT_DELETE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            (this.rpcServer = e.server),
            (this.transports = e.transports),
            (this.rpcCommandHandlers = e.commands),
            (this.rpcEventHandlers = e.events),
            (this.stores = e.stores),
            (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
    }
}
