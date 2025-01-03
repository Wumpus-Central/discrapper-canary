n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    l = n(442837),
    a = n(570140),
    s = n(176787),
    o = n(814443),
    c = n(592125),
    d = n(271383),
    u = n(430824),
    h = n(131951),
    m = n(158776),
    p = n(19780),
    g = n(699516),
    f = n(944486),
    _ = n(594174),
    E = n(979651),
    I = n(626135),
    C = n(823379),
    N = n(358085),
    v = n(914946),
    S = n(238679),
    T = n(863141),
    b = n(981631),
    A = n(701488),
    Z = n(65154);
function x(e, t, n) {
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
        (this.rpcServer.getCurrentUser = () => _.default.getCurrentUser()),
            (this.rpcServer.onConnect = (e) => {
                a.Z.dispatch({
                    type: 'RPC_APP_CONNECTED',
                    socketId: e.id,
                    application: e.application
                }),
                    I.default.track(b.rMx.AUTHORIZED_APP_CONNECTED, {
                        app_id: e.application.id,
                        transport: e.transport
                    });
            }),
            (this.rpcServer.onDisconnect = (e, t) => {
                a.Z.dispatch({
                    type: 'RPC_APP_DISCONNECTED',
                    socketId: e.id,
                    application: e.application,
                    reason: t
                });
            });
        let e = [c.Z, d.ZP, m.Z, E.Z, h.Z, p.Z];
        new l.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach('RPCServerManager'), a.Z.subscribe('MESSAGE_CREATE', (e) => this.handleMessage(e)), a.Z.subscribe('MESSAGE_UPDATE', (e) => this.handleMessage(e)), a.Z.subscribe('MESSAGE_DELETE', (e) => this.handleMessage(e)), a.Z.subscribe('SPEAKING', (e) => this.handleSpeaking(e)), a.Z.subscribe('OAUTH2_TOKEN_REVOKE', (e) => this.handleOAuth2TokenRevoke(e)), a.Z.subscribe('GUILD_CREATE', (e) => this.handleGuildCreate(e)), a.Z.subscribe('CHANNEL_CREATE', (e) => this.handleChannelCreate(e)), a.Z.subscribe('LOGOUT', () => this.handleLogout()), a.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => this.handleVoiceChannelSelect(e)), a.Z.subscribe('RPC_NOTIFICATION_CREATE', (e) => this.handleNotificationCreate(e)), a.Z.subscribe('ACTIVITY_JOIN', (e) => this.handleActivityJoin(e)), a.Z.subscribe('ACTIVITY_LAYOUT_MODE_UPDATE', (e) => this.handleActivityLayoutModeUpdate(e)), a.Z.subscribe('THERMAL_STATE_CHANGE', (e) => this.handleThermalStateChange(e)), a.Z.subscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', (e) => this.handleScreenOrientationUpdate(e)), (0, S.HU)((e) => this.rpcServer.dispatchToSubscriptions(b.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)), a.Z.subscribe('RELATIONSHIP_ADD', (e) => this.handleRelationshipAdd(e)), a.Z.subscribe('RELATIONSHIP_REMOVE', (e) => this.handleRelationshipRemove(e)), a.Z.subscribe('PRESENCE_UPDATES', (e) => this.handlePresenceUpdate(e)), a.Z.subscribe('PRESENCES_REPLACE', () => this.handlePresencesReplace()), a.Z.subscribe('ENTITLEMENT_CREATE', (e) => this.handleEntitlementCreate(e)), a.Z.subscribe('ENTITLEMENT_DELETE', (e) => this.handleEntitlementDelete(e));
    }
    handleMessage(e) {
        let t, n, i;
        if (0 === this.rpcServer.subscriptions.length) return;
        'MESSAGE_CREATE' === e.type && this.handleActivityMessage(e);
        let r = null;
        switch (e.type) {
            case 'MESSAGE_CREATE':
                if ('SENDING' === e.message.state) return;
                (t = b.zMe.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (r = ''.concat(t).concat(e.message.id));
                break;
            case 'MESSAGE_UPDATE':
                (t = b.zMe.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                break;
            case 'MESSAGE_DELETE':
                (t = b.zMe.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (r = ''.concat(t).concat(e.id));
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
                r
            );
    }
    handleSpeaking(e) {
        if (0 === this.rpcServer.subscriptions.length) return;
        let t = 0 !== e.speakingFlags ? b.zMe.SPEAKING_START : b.zMe.SPEAKING_STOP;
        if (e.context === Z.Yn.DEFAULT) {
            let n = f.Z.getVoiceChannelId();
            if (null != n) {
                let i = c.Z.getChannel(n);
                if (null == i) return;
                let r = E.Z.getVoiceState(i.getGuildId(), e.userId);
                if (null == r) return;
                this.rpcServer.dispatchToSubscriptions(
                    t,
                    { channel_id: r.channelId },
                    {
                        channel_id: r.channelId,
                        user_id: e.userId
                    }
                );
            }
        }
    }
    handleVoiceChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        if (0 !== this.rpcServer.subscriptions.length)
            this.rpcServer.dispatchToSubscriptions(
                b.zMe.VOICE_CHANNEL_SELECT,
                {},
                {
                    channel_id: n,
                    guild_id: t
                }
            );
    }
    handleNotificationCreate(e) {
        let { channelId: t, message: n, icon: i, title: r, body: l } = e;
        if (0 !== this.rpcServer.subscriptions.length)
            this.rpcServer.dispatchToSubscriptions(
                b.zMe.NOTIFICATION_CREATE,
                {},
                {
                    channel_id: t,
                    message: (0, v.Xb)(n),
                    icon_url: null != i ? (0, v.RE)(i) : null,
                    title: r,
                    body: l
                }
            );
    }
    handleActivityJoin(e) {
        let { applicationId: t, secret: n, intent: i, embedded: r } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let l = { secret: n };
        r && (l.intent = i), this.rpcServer.dispatchToSubscriptions(b.zMe.ACTIVITY_JOIN, (e) => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(b.zMe.GAME_JOIN, (e) => e.socket.application.id === t, l);
    }
    handleActivityLayoutModeUpdate(e) {
        let { applicationId: t, layoutMode: n } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let i = n !== A.cE.FOCUSED;
        this.rpcServer.dispatchToSubscriptions(b.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, { is_pip_mode: i });
        this.rpcServer.dispatchToSubscriptions(b.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, { layout_mode: n });
    }
    handleThermalStateChange(e) {
        let { applicationId: t } = e;
        if (0 === this.rpcServer.subscriptions.length || null == t) return;
        let n = { thermal_state: (0, s.bY)() };
        this.rpcServer.dispatchToSubscriptions(b.zMe.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
    }
    handleScreenOrientationUpdate(e) {
        let { screenOrientation: t } = e;
        if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(b.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
    }
    handleActivityMessage(e) {
        var t;
        let { channelId: n, message: i } = e;
        if (0 === this.rpcServer.subscriptions.length) return;
        let { application: r, activity: l } = i;
        if (null == r || null == l || null == l.party_id) return;
        let a = _.default.getUser(null === (t = i.author) || void 0 === t ? void 0 : t.id);
        if (null == a) return;
        let s = _.default.getCurrentUser();
        if (null == s || a.id === s.id) return;
        let o = l.type === b.mFx.JOIN_REQUEST ? m.Z.getApplicationActivity(s.id, r.id) : m.Z.getApplicationActivity(a.id, r.id);
        if (null == o || null == o.party || o.party.id !== l.party_id) return;
        let c = o.application_id;
        switch (l.type) {
            case b.mFx.JOIN:
                this.rpcServer.dispatchToSubscriptions(b.zMe.ACTIVITY_INVITE, (e) => e.socket.application.id === c, {
                    user: (0, T.Z)(a),
                    activity: o,
                    type: l.type,
                    channel_id: n,
                    message_id: i.id
                });
                break;
            case b.mFx.JOIN_REQUEST:
                this.rpcServer.dispatchToSubscriptions(b.zMe.ACTIVITY_JOIN_REQUEST, (e) => e.socket.application.id === c, { user: (0, T.Z)(a) });
        }
    }
    handleOAuth2TokenRevoke(e) {
        let { accessToken: t } = e;
        this.rpcServer.sockets.forEach((e) => {
            if (e.authorization.accessToken === t) e.close(b.$VG.TOKEN_REVOKED, 'Token revoked');
        });
    }
    handleGuildCreate(e) {
        let {
                guild: { id: t }
            } = e,
            n = u.Z.getGuild(t);
        if (0 !== this.rpcServer.subscriptions.length && null != n)
            this.rpcServer.dispatchToSubscriptions(
                b.zMe.GUILD_CREATE,
                {},
                {
                    id: t,
                    name: n.name
                }
            );
    }
    handleChannelCreate(e) {
        let {
            channel: { id: t, name: n, type: i }
        } = e;
        if (0 !== this.rpcServer.subscriptions.length)
            this.rpcServer.dispatchToSubscriptions(
                b.zMe.CHANNEL_CREATE,
                {},
                {
                    id: t,
                    name: n,
                    type: i
                }
            );
    }
    handleLogout() {
        this.rpcServer.sockets.forEach((e) => e.close(b.$VG.CLOSE_NORMAL, 'User logout'));
    }
    handleRelationshipAdd(e) {
        let {
            relationship: { id: t, type: n, isSpamRequest: i, userIgnored: r }
        } = e;
        if (0 !== this.rpcServer.subscriptions.length)
            this.rpcServer.dispatchToSubscriptions(
                b.zMe.RELATIONSHIP_UPDATE,
                {},
                (0, v.cD)(n, t, {
                    isSpamRequest: i,
                    userIgnored: r
                })
            );
    }
    handleRelationshipRemove(e) {
        let {
            relationship: { id: t }
        } = e;
        if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(b.zMe.RELATIONSHIP_UPDATE, {}, (0, v.cD)(b.OGo.NONE, t));
    }
    handlePresenceUpdate(e) {
        let { updates: t } = e;
        if (0 !== this.rpcServer.subscriptions.length)
            t.forEach((e) => {
                let {
                    guildId: t,
                    user: { id: n }
                } = e;
                if (null != t) return;
                let i = g.Z.getRelationshipType(n);
                i === b.OGo.NONE && o.Z.getUserAffinitiesUserIds().has(n) && (i = b.OGo.IMPLICIT), i !== b.OGo.NONE && this.rpcServer.dispatchToSubscriptions(b.zMe.RELATIONSHIP_UPDATE, {}, (0, v.cD)(i, n));
            });
    }
    handlePresencesReplace() {
        if (0 !== this.rpcServer.subscriptions.length)
            r().forEach(g.Z.getRelationships(), (e, t) => {
                this.rpcServer.dispatchToSubscriptions(b.zMe.RELATIONSHIP_UPDATE, {}, (0, v.cD)(e, t));
            });
    }
    handleEntitlementCreate(e) {
        let { entitlement: t } = e;
        if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(b.zMe.ENTITLEMENT_CREATE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
    }
    handleEntitlementDelete(e) {
        let { entitlement: t } = e;
        if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(b.zMe.ENTITLEMENT_DELETE, (e) => e.socket.application.id === t.application_id, { entitlement: t });
    }
    constructor(e) {
        x(this, 'rpcServer', void 0), x(this, 'transports', void 0), x(this, 'rpcCommandHandlers', void 0), x(this, 'rpcEventHandlers', void 0), x(this, 'stores', void 0), x(this, 'registerTransportsForEmbeddedPlatform', void 0), (this.rpcServer = e.server), (this.transports = e.transports), (this.rpcCommandHandlers = e.commands), (this.rpcEventHandlers = e.events), (this.stores = e.stores), (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
    }
}
