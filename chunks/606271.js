n.d(t, { Z: () => L }), n(47120);
var i = n(392711),
    l = n.n(i),
    r = n(442837),
    a = n(570140),
    s = n(173439),
    o = n(176787),
    d = n(592125),
    c = n(271383),
    u = n(430824),
    h = n(131951),
    m = n(158776),
    p = n(19780),
    g = n(699516),
    _ = n(944486),
    f = n(594174),
    E = n(979651),
    I = n(626135),
    C = n(823379),
    N = n(358085),
    v = n(914946),
    T = n(238679),
    S = n(863141),
    A = n(981631),
    Z = n(701488),
    x = n(65154);
function b(e, t, n) {
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
class L {
    loadServer() {
        for (let e of (N.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => f.default.getCurrentUser()),
            (this.rpcServer.onConnect = async (e) => {
                a.Z.dispatch({
                    type: 'RPC_APP_CONNECTED',
                    socketId: e.id,
                    application: e.application
                }),
                    I.default.track(A.rMx.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport
                    });
                let t = e.application.id;
                null != t &&
                    (await (0, s.Zw)({
                        applicationId: t,
                        socketId: e.id
                    }));
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                a.Z.dispatch({
                    type: 'RPC_APP_DISCONNECTED',
                    socketId: e.id,
                    application: e.application,
                    reason: t
                });
            });
        let e = [d.Z, c.ZP, m.Z, E.Z, h.Z, p.Z];
        new r.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach('RPCServerManager'), a.Z.subscribe('MESSAGE_CREATE', this.handleMessage), a.Z.subscribe('MESSAGE_UPDATE', this.handleMessage), a.Z.subscribe('MESSAGE_DELETE', this.handleMessage), a.Z.subscribe('SPEAKING', this.handleSpeaking), a.Z.subscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), a.Z.subscribe('GUILD_CREATE', this.handleGuildCreate), a.Z.subscribe('CHANNEL_CREATE', this.handleChannelCreate), a.Z.subscribe('LOGOUT', this.handleLogout), a.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), a.Z.subscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), a.Z.subscribe('ACTIVITY_JOIN', this.handleActivityJoin), a.Z.subscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), a.Z.subscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), a.Z.subscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), a.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), a.Z.subscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), a.Z.subscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), a.Z.subscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), a.Z.subscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), a.Z.subscribe('PRESENCES_REPLACE', this.handlePresencesReplace), a.Z.subscribe('USER_UPDATE', this.handleUserUpdate), a.Z.subscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), a.Z.subscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    terminate() {
        a.Z.unsubscribe('MESSAGE_CREATE', this.handleMessage), a.Z.unsubscribe('MESSAGE_UPDATE', this.handleMessage), a.Z.unsubscribe('MESSAGE_DELETE', this.handleMessage), a.Z.unsubscribe('SPEAKING', this.handleSpeaking), a.Z.unsubscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), a.Z.unsubscribe('GUILD_CREATE', this.handleGuildCreate), a.Z.unsubscribe('CHANNEL_CREATE', this.handleChannelCreate), a.Z.unsubscribe('LOGOUT', this.handleLogout), a.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), a.Z.unsubscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), a.Z.unsubscribe('ACTIVITY_JOIN', this.handleActivityJoin), a.Z.unsubscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), a.Z.unsubscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), a.Z.unsubscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), a.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), a.Z.unsubscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), a.Z.unsubscribe('RELATIONSHIP_UPDATE', this.handleRelationshipUpdate), a.Z.unsubscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), a.Z.unsubscribe('PRESENCE_UPDATES', this.handlePresenceUpdates), a.Z.unsubscribe('PRESENCES_REPLACE', this.handlePresencesReplace), a.Z.unsubscribe('USER_UPDATE', this.handleUserUpdate), a.Z.unsubscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), a.Z.unsubscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    constructor(e) {
        b(this, 'rpcServer', void 0),
            b(this, 'transports', void 0),
            b(this, 'rpcCommandHandlers', void 0),
            b(this, 'rpcEventHandlers', void 0),
            b(this, 'stores', void 0),
            b(this, 'registerTransportsForEmbeddedPlatform', void 0),
            b(this, 'handleMessage', (e) => {
                let t, n, i;
                if (0 === this.rpcServer.subscriptions.length) return;
                'MESSAGE_CREATE' === e.type && this.handleActivityMessage(e);
                let l = null;
                switch (e.type) {
                    case 'MESSAGE_CREATE':
                        if ('SENDING' === e.message.state) return;
                        (t = A.zMe.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (l = ''.concat(t).concat(e.message.id));
                        break;
                    case 'MESSAGE_UPDATE':
                        (t = A.zMe.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                        break;
                    case 'MESSAGE_DELETE':
                        (t = A.zMe.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (l = ''.concat(t).concat(e.id));
                        break;
                    default:
                        return (0, C.vE)(e);
                }
                null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        { channel_id: n },
                        {
                            channel_id: n,
                            message: (0, v.Xb)(i)
                        },
                        l
                    );
            }),
            b(this, 'handleSpeaking', (e) => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let t = 0 !== e.speakingFlags ? A.zMe.SPEAKING_START : A.zMe.SPEAKING_STOP;
                if (e.context === x.Yn.DEFAULT) {
                    let n = _.Z.getVoiceChannelId();
                    if (null != n) {
                        let i = d.Z.getChannel(n);
                        if (null == i) return;
                        let l = E.Z.getVoiceState(i.getGuildId(), e.userId);
                        if (null == l) return;
                        this.rpcServer.dispatchToSubscriptions(
                            t,
                            { channel_id: l.channelId },
                            {
                                channel_id: l.channelId,
                                user_id: e.userId
                            }
                        );
                    }
                }
            }),
            b(this, 'handleVoiceChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        A.zMe.VOICE_CHANNEL_SELECT,
                        {},
                        {
                            channel_id: n,
                            guild_id: t
                        }
                    );
            }),
            b(this, 'handleNotificationCreate', (e) => {
                let { channelId: t, message: n, icon: i, title: l, body: r } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        A.zMe.NOTIFICATION_CREATE,
                        {},
                        {
                            channel_id: t,
                            message: (0, v.Xb)(n),
                            icon_url: null != i ? (0, v.RE)(i) : null,
                            title: l,
                            body: r
                        }
                    );
            }),
            b(this, 'handleActivityJoin', (e) => {
                let { applicationId: t, secret: n, intent: i, embedded: l } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = { secret: n };
                l && (r.intent = i), this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_JOIN, (e) => e.socket.application.id === t, r), this.rpcServer.dispatchToSubscriptions(A.zMe.GAME_JOIN, (e) => e.socket.application.id === t, r);
            }),
            b(this, 'handleActivityLayoutModeUpdate', (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let i = n !== Z.cE.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, { is_pip_mode: i }), this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, { layout_mode: n });
            }),
            b(this, 'handleThermalStateChange', (e) => {
                let { applicationId: t } = e;
                if (0 === this.rpcServer.subscriptions.length || null == t) return;
                let n = { thermal_state: (0, o.bY)() };
                this.rpcServer.dispatchToSubscriptions(A.zMe.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
            }),
            b(this, 'handleScreenOrientationUpdate', (e) => {
                let { screenOrientation: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(A.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
            }),
            b(this, 'handleEmbeddedActivityUpdate', () => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let e = (0, T.dO)();
                this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
            }),
            b(this, 'handleActivityMessage', (e) => {
                var t;
                let { channelId: n, message: i } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let { application: l, activity: r } = i;
                if (null == l || null == r || null == r.party_id) return;
                let a = f.default.getUser(null === (t = i.author) || void 0 === t ? void 0 : t.id);
                if (null == a) return;
                let s = f.default.getCurrentUser();
                if (null == s || a.id === s.id) return;
                let o = r.type === A.mFx.JOIN_REQUEST ? m.Z.getApplicationActivity(s.id, l.id) : m.Z.getApplicationActivity(a.id, l.id);
                if (null == o || null == o.party || o.party.id !== r.party_id) return;
                let d = o.application_id;
                switch (r.type) {
                    case A.mFx.JOIN:
                        this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_INVITE, (e) => e.socket.application.id === d, {
                            user: (0, S.Z)(a),
                            activity: o,
                            type: r.type,
                            channel_id: n,
                            message_id: i.id
                        });
                        break;
                    case A.mFx.JOIN_REQUEST:
                        this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_JOIN_REQUEST, (e) => e.socket.application.id === d, { user: (0, S.Z)(a) });
                }
            }),
            b(this, 'handleOAuth2TokenRevoke', (e) => {
                let { accessToken: t } = e;
                this.rpcServer.sockets.forEach((e) => {
                    e.authorization.accessToken === t && e.close(A.$VG.TOKEN_REVOKED, 'Token revoked');
                });
            }),
            b(this, 'handleGuildCreate', (e) => {
                let {
                        guild: { id: t }
                    } = e,
                    n = u.Z.getGuild(t);
                0 !== this.rpcServer.subscriptions.length &&
                    null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        A.zMe.GUILD_CREATE,
                        {},
                        {
                            id: t,
                            name: n.name
                        }
                    );
            }),
            b(this, 'handleChannelCreate', (e) => {
                let {
                    channel: { id: t, name: n, type: i }
                } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        A.zMe.CHANNEL_CREATE,
                        {},
                        {
                            id: t,
                            name: n,
                            type: i
                        }
                    );
            }),
            b(this, 'handleLogout', () => {
                this.rpcServer.sockets.forEach((e) => e.close(A.$VG.CLOSE_NORMAL, 'User logout'));
            }),
            b(this, 'handleRelationshipAdd', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let i = f.default.getUser(t);
                if (null == i) return;
                let l = (0, v._J)(n, i);
                this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(l, e.socket.application.id));
            }),
            b(this, 'handleRelationshipUpdate', (e) => {
                let {
                    relationship: { id: t, type: n }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let i = f.default.getUser(t);
                if (null == i) return;
                let l = (0, v._J)(n, i);
                this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(l, e.socket.application.id));
            }),
            b(this, 'handleRelationshipRemove', (e) => {
                let {
                    relationship: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = f.default.getUser(t);
                if (null == n) return;
                let i = (0, v._J)(A.OGo.NONE, n);
                this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(i, e.socket.application.id));
            }),
            b(this, 'handlePresenceUpdates', (e) => {
                let { updates: t } = e;
                if (0 !== this.rpcServer.subscriptions.length)
                    for (let e of new Set(
                        t.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        })
                    ).values()) {
                        let t = g.Z.getRelationshipType(e);
                        if (t === A.OGo.NONE) continue;
                        let n = f.default.getUser(e);
                        if (null == n) continue;
                        let i = (0, v._J)(t, n);
                        this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(i, e.socket.application.id));
                    }
            }),
            b(this, 'handlePresencesReplace', () => {
                0 !== this.rpcServer.subscriptions.length &&
                    l().forEach(g.Z.getRelationships(), (e, t) => {
                        if (e === A.OGo.NONE) return;
                        let n = f.default.getUser(t);
                        if (null == n) return;
                        let i = (0, v._J)(e, n);
                        this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(i, e.socket.application.id));
                    });
            }),
            b(this, 'handleUserUpdate', (e) => {
                let {
                    user: { id: t }
                } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let n = g.Z.getRelationshipType(t);
                if (n === A.OGo.NONE) return;
                let i = f.default.getUser(t);
                if (null == i) return;
                let l = (0, v._J)(n, i);
                this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (e) => (0, v.kb)(l, e.socket.application.id));
            }),
            b(this, 'handleEntitlementCreate', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(A.zMe.ENTITLEMENT_CREATE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            b(this, 'handleEntitlementDelete', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(A.zMe.ENTITLEMENT_DELETE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            (this.rpcServer = e.server),
            (this.transports = e.transports),
            (this.rpcCommandHandlers = e.commands),
            (this.rpcEventHandlers = e.events),
            (this.stores = e.stores),
            (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
    }
}
