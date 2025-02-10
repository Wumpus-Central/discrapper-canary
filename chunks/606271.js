n.d(t, { Z: () => y }), n(47120);
var i = n(392711),
    l = n.n(i),
    r = n(442837),
    a = n(570140),
    s = n(173439),
    o = n(176787),
    c = n(814443),
    d = n(592125),
    u = n(271383),
    h = n(430824),
    m = n(131951),
    p = n(158776),
    g = n(19780),
    _ = n(699516),
    f = n(944486),
    E = n(594174),
    I = n(979651),
    C = n(626135),
    N = n(823379),
    v = n(358085),
    T = n(914946),
    S = n(238679),
    Z = n(863141),
    A = n(981631),
    b = n(701488),
    x = n(65154);
function L(e, t, n) {
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
class y {
    loadServer() {
        for (let e of (v.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
        for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
        for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
    }
    init() {
        (this.rpcServer.getCurrentUser = () => E.default.getCurrentUser()),
            (this.rpcServer.onConnect = async (e) => {
                a.Z.dispatch({
                    type: 'RPC_APP_CONNECTED',
                    socketId: e.id,
                    application: e.application
                }),
                    C.default.track(A.rMx.AUTHORIZED_APP_CONNECTED, {
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
        let e = [d.Z, u.ZP, p.Z, I.Z, m.Z, g.Z];
        new r.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach('RPCServerManager'), a.Z.subscribe('MESSAGE_CREATE', this.handleMessage), a.Z.subscribe('MESSAGE_UPDATE', this.handleMessage), a.Z.subscribe('MESSAGE_DELETE', this.handleMessage), a.Z.subscribe('SPEAKING', this.handleSpeaking), a.Z.subscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), a.Z.subscribe('GUILD_CREATE', this.handleGuildCreate), a.Z.subscribe('CHANNEL_CREATE', this.handleChannelCreate), a.Z.subscribe('LOGOUT', this.handleLogout), a.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), a.Z.subscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), a.Z.subscribe('ACTIVITY_JOIN', this.handleActivityJoin), a.Z.subscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), a.Z.subscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), a.Z.subscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), a.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), a.Z.subscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), a.Z.subscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), a.Z.subscribe('PRESENCE_UPDATES', this.handlePresenceUpdate), a.Z.subscribe('PRESENCES_REPLACE', this.handlePresencesReplace), a.Z.subscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), a.Z.subscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    terminate() {
        a.Z.unsubscribe('MESSAGE_CREATE', this.handleMessage), a.Z.unsubscribe('MESSAGE_UPDATE', this.handleMessage), a.Z.unsubscribe('MESSAGE_DELETE', this.handleMessage), a.Z.unsubscribe('SPEAKING', this.handleSpeaking), a.Z.unsubscribe('OAUTH2_TOKEN_REVOKE', this.handleOAuth2TokenRevoke), a.Z.unsubscribe('GUILD_CREATE', this.handleGuildCreate), a.Z.unsubscribe('CHANNEL_CREATE', this.handleChannelCreate), a.Z.unsubscribe('LOGOUT', this.handleLogout), a.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), a.Z.unsubscribe('RPC_NOTIFICATION_CREATE', this.handleNotificationCreate), a.Z.unsubscribe('ACTIVITY_JOIN', this.handleActivityJoin), a.Z.unsubscribe('ACTIVITY_LAYOUT_MODE_UPDATE', this.handleActivityLayoutModeUpdate), a.Z.unsubscribe('THERMAL_STATE_CHANGE', this.handleThermalStateChange), a.Z.unsubscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', this.handleScreenOrientationUpdate), a.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE', this.handleEmbeddedActivityUpdate), a.Z.unsubscribe('RELATIONSHIP_ADD', this.handleRelationshipAdd), a.Z.unsubscribe('RELATIONSHIP_REMOVE', this.handleRelationshipRemove), a.Z.unsubscribe('PRESENCE_UPDATES', this.handlePresenceUpdate), a.Z.unsubscribe('PRESENCES_REPLACE', this.handlePresencesReplace), a.Z.unsubscribe('ENTITLEMENT_CREATE', this.handleEntitlementCreate), a.Z.unsubscribe('ENTITLEMENT_DELETE', this.handleEntitlementDelete);
    }
    constructor(e) {
        L(this, 'rpcServer', void 0),
            L(this, 'transports', void 0),
            L(this, 'rpcCommandHandlers', void 0),
            L(this, 'rpcEventHandlers', void 0),
            L(this, 'stores', void 0),
            L(this, 'registerTransportsForEmbeddedPlatform', void 0),
            L(this, 'handleMessage', (e) => {
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
                        return (0, N.vE)(e);
                }
                null != n &&
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        { channel_id: n },
                        {
                            channel_id: n,
                            message: (0, T.Xb)(i)
                        },
                        l
                    );
            }),
            L(this, 'handleSpeaking', (e) => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let t = 0 !== e.speakingFlags ? A.zMe.SPEAKING_START : A.zMe.SPEAKING_STOP;
                if (e.context === x.Yn.DEFAULT) {
                    let n = f.Z.getVoiceChannelId();
                    if (null != n) {
                        let i = d.Z.getChannel(n);
                        if (null == i) return;
                        let l = I.Z.getVoiceState(i.getGuildId(), e.userId);
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
            L(this, 'handleVoiceChannelSelect', (e) => {
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
            L(this, 'handleNotificationCreate', (e) => {
                let { channelId: t, message: n, icon: i, title: l, body: r } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        A.zMe.NOTIFICATION_CREATE,
                        {},
                        {
                            channel_id: t,
                            message: (0, T.Xb)(n),
                            icon_url: null != i ? (0, T.RE)(i) : null,
                            title: l,
                            body: r
                        }
                    );
            }),
            L(this, 'handleActivityJoin', (e) => {
                let { applicationId: t, secret: n, intent: i, embedded: l } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let r = { secret: n };
                l && (r.intent = i), this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_JOIN, (e) => e.socket.application.id === t, r), this.rpcServer.dispatchToSubscriptions(A.zMe.GAME_JOIN, (e) => e.socket.application.id === t, r);
            }),
            L(this, 'handleActivityLayoutModeUpdate', (e) => {
                let { applicationId: t, layoutMode: n } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let i = n !== b.cE.FOCUSED;
                this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, { is_pip_mode: i }), this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, { layout_mode: n });
            }),
            L(this, 'handleThermalStateChange', (e) => {
                let { applicationId: t } = e;
                if (0 === this.rpcServer.subscriptions.length || null == t) return;
                let n = { thermal_state: (0, o.bY)() };
                this.rpcServer.dispatchToSubscriptions(A.zMe.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
            }),
            L(this, 'handleScreenOrientationUpdate', (e) => {
                let { screenOrientation: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(A.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
            }),
            L(this, 'handleEmbeddedActivityUpdate', () => {
                if (0 === this.rpcServer.subscriptions.length) return;
                let e = (0, S.dO)();
                this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
            }),
            L(this, 'handleActivityMessage', (e) => {
                var t;
                let { channelId: n, message: i } = e;
                if (0 === this.rpcServer.subscriptions.length) return;
                let { application: l, activity: r } = i;
                if (null == l || null == r || null == r.party_id) return;
                let a = E.default.getUser(null === (t = i.author) || void 0 === t ? void 0 : t.id);
                if (null == a) return;
                let s = E.default.getCurrentUser();
                if (null == s || a.id === s.id) return;
                let o = r.type === A.mFx.JOIN_REQUEST ? p.Z.getApplicationActivity(s.id, l.id) : p.Z.getApplicationActivity(a.id, l.id);
                if (null == o || null == o.party || o.party.id !== r.party_id) return;
                let c = o.application_id;
                switch (r.type) {
                    case A.mFx.JOIN:
                        this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_INVITE, (e) => e.socket.application.id === c, {
                            user: (0, Z.Z)(a),
                            activity: o,
                            type: r.type,
                            channel_id: n,
                            message_id: i.id
                        });
                        break;
                    case A.mFx.JOIN_REQUEST:
                        this.rpcServer.dispatchToSubscriptions(A.zMe.ACTIVITY_JOIN_REQUEST, (e) => e.socket.application.id === c, { user: (0, Z.Z)(a) });
                }
            }),
            L(this, 'handleOAuth2TokenRevoke', (e) => {
                let { accessToken: t } = e;
                this.rpcServer.sockets.forEach((e) => {
                    e.authorization.accessToken === t && e.close(A.$VG.TOKEN_REVOKED, 'Token revoked');
                });
            }),
            L(this, 'handleGuildCreate', (e) => {
                let {
                        guild: { id: t }
                    } = e,
                    n = h.Z.getGuild(t);
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
            L(this, 'handleChannelCreate', (e) => {
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
            L(this, 'handleLogout', () => {
                this.rpcServer.sockets.forEach((e) => e.close(A.$VG.CLOSE_NORMAL, 'User logout'));
            }),
            L(this, 'handleRelationshipAdd', (e) => {
                let {
                    relationship: { id: t, type: n, isSpamRequest: i, userIgnored: l, originApplicationId: r }
                } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    this.rpcServer.dispatchToSubscriptions(
                        A.zMe.RELATIONSHIP_UPDATE,
                        {},
                        (0, T.cD)(n, t, {
                            isSpamRequest: i,
                            userIgnored: l,
                            originApplicationId: r
                        })
                    );
            }),
            L(this, 'handleRelationshipRemove', (e) => {
                let {
                    relationship: { id: t }
                } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (0, T.cD)(A.OGo.NONE, t));
            }),
            L(this, 'handlePresenceUpdate', (e) => {
                let { updates: t } = e;
                0 !== this.rpcServer.subscriptions.length &&
                    t.forEach((e) => {
                        let {
                            guildId: t,
                            user: { id: n }
                        } = e;
                        if (null != t) return;
                        let i = _.Z.getRelationshipType(n);
                        i === A.OGo.NONE && c.Z.getUserAffinitiesUserIds().has(n) && (i = A.OGo.IMPLICIT), i !== A.OGo.NONE && this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (0, T.cD)(i, n));
                    });
            }),
            L(this, 'handlePresencesReplace', () => {
                0 !== this.rpcServer.subscriptions.length &&
                    l().forEach(_.Z.getRelationships(), (e, t) => {
                        this.rpcServer.dispatchToSubscriptions(A.zMe.RELATIONSHIP_UPDATE, {}, (0, T.cD)(e, t));
                    });
            }),
            L(this, 'handleEntitlementCreate', (e) => {
                let { entitlement: t } = e;
                0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(A.zMe.ENTITLEMENT_CREATE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
            }),
            L(this, 'handleEntitlementDelete', (e) => {
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
