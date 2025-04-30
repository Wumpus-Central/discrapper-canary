let r;
n.d(t, {
    U: () => en,
    Z: () => er
}),
    n(388685);
var i = n(772848),
    o = n(544891),
    a = n(570140),
    s = n(475179),
    l = n(911969),
    c = n(317770),
    u = n(100527),
    d = n(807169),
    f = n(728345),
    _ = n(358221),
    p = n(75060),
    h = n(233764),
    m = n(375824),
    g = n(188597),
    E = n(695346),
    b = n(131704),
    y = n(314897),
    O = n(592125),
    v = n(19780),
    I = n(944486),
    S = n(594174),
    T = n(626135),
    A = n(585483),
    N = n(358085),
    C = n(624138),
    R = n(24933),
    P = n(115130),
    w = n(566620),
    D = n(317381),
    L = n(969345),
    x = n(155268),
    M = n(148720),
    k = n(122613),
    j = n(782769),
    U = n(16609),
    G = n(761122),
    B = n(983695),
    V = n(917107),
    F = n(981631),
    Z = n(388032);
function H(e, t, n) {
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
let Y = 2000,
    W = {},
    K = {},
    z = {};
function q(e) {
    var t;
    return { releasePhase: null == e || null == (t = e.activity) ? void 0 : t.client_platform_config[(0, G.Z)((0, N.getOS)())].release_phase };
}
function Q(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (
        (null != r || null != i) &&
        ((K[t] = {
            nonce: n,
            locations: r,
            source: i
        }),
        !0)
    );
}
function X(e, t) {
    let n = K[e];
    if (null != n && n.nonce === t) return delete K[e], n;
}
function J(e, t) {
    setTimeout(() => X(e, t), Y);
}
function $(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    Q({
        applicationId: t,
        nonce: n,
        locations: r,
        source: null != i ? i : void 0
    });
}
async function ee(e) {
    var t, n, r;
    let { applicationId: i, location: a, instanceId: s } = e,
        l = D.ZP.getEmbeddedActivityDurationMs(a.id, i),
        c = y.default.getSessionId();
    null != s &&
        null != c &&
        (await o.tn.post({
            url: F.ANM.ACTIVITY_LEAVE(i, a.id, s),
            body: { session_id: c },
            retries: 2,
            rejectWithError: !1
        }));
    let u = W[i],
        d = null != (n = (0, U.pY)(a)) ? n : (0, U.wq)(a),
        f = null != (r = (0, U.jS)(a)) ? r : (0, U.hu)(a),
        _ = O.Z.getChannel(d),
        h = S.default.getCurrentUser();
    if (null == u || null == h) return;
    let m = D.ZP.getShelfActivities(f),
        g = (0, L.Z)({
            applicationId: i,
            activityConfigs: m
        }),
        { releasePhase: E } = q(g),
        b = p.Z.getRawThermalState();
    T.default.track(F.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: d,
        guild_id: f,
        media_session_id: u.mediaSessionIds[0],
        activity_session_id: u.activitySessionId,
        application_id: i,
        duration_ms: l,
        user_premium_tier: h.premiumType,
        raw_thermal_state: b,
        release_phase: E,
        shelf_rank: null == g || null == (t = g.activity) ? void 0 : t.shelf_rank,
        activity_user_session_id: u.activityUserSessionId,
        channel_type: null == _ ? void 0 : _.type,
        media_session_ids: u.mediaSessionIds,
        embedded_activity_location_kind: a.kind
    }),
        T.default.track(F.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: d,
            guild_id: f,
            application_id: i,
            instance_ids: null != u.launchId ? [u.launchId] : void 0,
            media_session_ids: u.mediaSessionIds,
            activity_user_session_id: u.activityUserSessionId,
            raw_thermal_state: b,
            duration_ms: l,
            embedded_activity_location_kind: a.kind
        }),
        delete W[i];
}
function et(e) {
    var t, n, r, o;
    let { applicationId: a, isFirstActivityInChannel: l, isStart: c, participants: u, embeddedActivity: f, location: h, inviterUserId: m } = e,
        g = y.default.getId(),
        E = u.find((e) => e.userId === g),
        b = null != (r = (0, U.pY)(h)) ? r : (0, U.wq)(h),
        I = null != (o = (0, U.jS)(h)) ? o : (0, U.hu)(h),
        A = O.Z.getChannel(b);
    if ((c && null != A && A.isPrivate() && l && null == E && s.Z.selectParticipant(A.id, null), null == E)) return;
    let N = v.Z.getMediaSessionId(),
        P = f.compositeInstanceId,
        w = null == N && (null == A ? void 0 : A.isVocal()) === !0 && (null == A ? void 0 : A.isPrivate()) === !1;
    if (null == P || w) return;
    let x = (0, i.Z)(),
        M = 'location' in f ? 2 : 1,
        k = S.default.getCurrentUser();
    if (null == k) return;
    let j = D.ZP.getShelfActivities(I),
        G = R.Z.getState().shelfOrder,
        B = (0, L.Z)({
            applicationId: a,
            activityConfigs: j
        }),
        V = 1 + G.findIndex((e) => e === a),
        { releasePhase: Z } = q(B),
        H = p.Z.getRawThermalState(),
        Y = null != N ? [N] : [],
        z = {
            activitySessionId: P,
            activityUserSessionId: x,
            launchId: f.launchId,
            mediaSessionIds: Y,
            activitiesInfraVersion: M
        };
    W[a] = z;
    let Q = K[a];
    (0, C.Ew)(E.nonce) || E.nonce === (null == Q ? void 0 : Q.nonce) || (Q = void 0),
        T.default.track(F.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: b,
            guild_id: I,
            media_session_id: Y[0],
            activity_session_id: P,
            application_id: a,
            location_stack: null == Q ? void 0 : Q.locations,
            user_premium_tier: k.premiumType,
            raw_thermal_state: H,
            n_participants: null != A ? _.Z.getUserParticipantCount(A.id) : null,
            is_activity_start: c,
            release_phase: Z,
            shelf_rank: null == B || null == (t = B.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: V > 0 ? V : null,
            activity_user_session_id: x,
            channel_type: null == A ? void 0 : A.type,
            source: null == Q ? void 0 : Q.source,
            command_context_type: null != A ? (0, d.Vh)(A, a) : null,
            invite_inviter_id: m,
            interaction_id: null == Q ? void 0 : Q.interactionId,
            embedded_activity_location_kind: h.kind
        }),
        T.default.track(F.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == Q ? void 0 : Q.locations,
            channel_id: b,
            channel_type: null == A ? void 0 : A.type,
            guild_id: I,
            application_id: a,
            instance_id: f.launchId,
            initial_media_session_id: Y[0],
            activity_user_session_id: x,
            raw_thermal_state: H,
            is_activity_start: c,
            shelf_rank: null == B || null == (n = B.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: V > 0 ? V : null,
            activities_infra_version: M,
            embedded_activity_location_kind: h.kind
        });
}
function en(e) {
    return W[e];
}
class er extends c.Z {
    _initialize() {
        I.Z.addChangeListener(this.handleSelectedChannelUpdate), A.S.subscribe(F.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), A.S.subscribe(F.CkL.OPEN_EMBEDDED_ACTIVITY, et), a.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), a.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), a.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), a.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', ee), a.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), a.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), a.Z.subscribe('CALL_DELETE', this.handleCallDelete), a.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), a.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), a.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete), a.Z.subscribe('INTERACTION_QUEUE', this.handleInteractionQueue), a.Z.subscribe('INTERACTION_CREATE', this.handleInteractionCreate), a.Z.subscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), a.Z.subscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    _terminate() {
        I.Z.removeChangeListener(this.handleSelectedChannelUpdate), A.S.unsubscribe(F.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), A.S.unsubscribe(F.CkL.OPEN_EMBEDDED_ACTIVITY, et), a.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), a.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), a.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), a.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', ee), a.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), a.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), a.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), a.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), a.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), a.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete), a.Z.unsubscribe('INTERACTION_QUEUE', this.handleInteractionQueue), a.Z.unsubscribe('INTERACTION_CREATE', this.handleInteractionCreate), a.Z.unsubscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), a.Z.unsubscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleSelectedChannelUpdate', () => {
                let e = I.Z.getVoiceChannelId();
                for (let { location: t, applicationId: n } of D.ZP.getSelfEmbeddedActivities().values()) {
                    let r = (0, U.pY)(t);
                    null != r &&
                        (0, V.Z)(r) &&
                        r !== e &&
                        this.leaveActivity({
                            location: t,
                            applicationId: n
                        });
                }
                if (null != e) {
                    let t = D.ZP.getEmbeddedActivitiesForChannel(e),
                        n = y.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = (0, U.pY)(e.location),
                                n = D.ZP.getSelfEmbeddedActivityForChannel(t);
                            null == n
                                ? this.leaveActivity({
                                      location: e.location,
                                      applicationId: e.applicationId
                                  })
                                : null == r &&
                                  this.hidePIPEmbed({
                                      location: n.location,
                                      applicationId: n.applicationId
                                  });
                        }
                    });
                }
                r = null != e ? e : void 0;
            }),
            H(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            H(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: t, applicationId: n } = e;
                J(n, t), (0, x.n9)() && this.showDevShelfOverrideEnabled();
            }),
            H(this, 'handleActivityLaunchFail', async (e) => {
                let t,
                    n,
                    r,
                    { error: i, nonce: o, channelId: a, guildId: s, applicationId: l, isStart: c, locationKind: u } = e,
                    d = X(l, o),
                    f = Z.intl.string(Z.t['IOy+Iy']);
                if (i instanceof h.Z) {
                    (t = 0), (r = i.reason);
                    let e = P.Z.getFetchState();
                    switch ((E.Sb.getSetting() && e !== P.O.LOADED && (await (0, w.$h)()), i.reason)) {
                        case h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            P.Z.inDevModeForApplication(l) && (f = Z.intl.string(Z.t.hXRXf3));
                            break;
                        case h.Z.Reasons.INVALID_CHANNEL:
                            f = Z.intl.string(Z.t.j29zCg);
                            break;
                        case h.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                            n = i.detailCode;
                    }
                } else if (i instanceof m.Z) {
                    var _;
                    (t = 1), (r = i.reason), (f = null != (_ = (0, g.A0)(i.reason, l)) ? _ : f);
                } else
                    switch (((t = 2), (n = i.status), (r = i.code), i.code)) {
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            f = Z.intl.string(Z.t.Gyzcra);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            f = Z.intl.string(Z.t.zxv7EB);
                            break;
                        case F.evJ.INVALID_PERMISSIONS:
                            f = Z.intl.string(Z.t.hHGrW1);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            f = Z.intl.string(Z.t.j29zCg);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            f = Z.intl.string(Z.t['4WuFRE']);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            f = Z.intl.string(Z.t.RvkXdX);
                            break;
                        case F.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            f = Z.intl.string(Z.t.uGDCc3);
                    }
                this.showLaunchErrorModal(f);
                let b = O.Z.getChannel(a),
                    y = p.Z.getRawThermalState();
                T.default.track(F.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: a,
                    guild_id: null != s ? s : null == b ? void 0 : b.getGuildId(),
                    application_id: l,
                    raw_thermal_state: y,
                    is_activity_start: c,
                    channel_type: null == b ? void 0 : b.type,
                    location_stack: null == d ? void 0 : d.locations,
                    error_type: t,
                    error_status: n,
                    error_code: r,
                    source: null == d ? void 0 : d.source,
                    embedded_activity_location_kind: u
                });
            }),
            H(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, location: t } of D.ZP.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                location: t,
                                applicationId: r
                            });
                    t.code !== F.$VG.CLOSE_NORMAL &&
                        (T.default.track(F.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: r
                        }),
                        this.showErrorModal(t, r));
                }
            }),
            H(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = I.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            H(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== F.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            H(this, 'handleCallEnded', (e) => {
                let t = D.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        location: t.location,
                        applicationId: t.applicationId
                    });
            }),
            H(this, 'handleDeferredOpen', async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: o, analyticsLocations: a, commandOrigin: s, inviterUserId: l } = e,
                    c = O.Z.getChannel(i);
                if (void 0 === c || (b.tx.has(null == c ? void 0 : c.type) && I.Z.getVoiceChannelId() !== i)) return;
                let u = D.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === o) return;
                let d = await f.ZP.fetchApplication(o);
                if (!(0, j.a)(c)) return void this.showLaunchErrorModal(Z.intl.string(Z.t.UXoQTk));
                if (!(0, B.Z)(null == d || null == (t = d.embedded_activity_config) ? void 0 : t.supported_platforms)) return void this.showLaunchErrorModal(Z.intl.string(Z.t.uGDCc3));
                let _ = null != (n = null == c ? void 0 : c.getGuildId()) ? n : void 0,
                    { activityConfigs: p, applications: h } = await (0, w.w1)({ guildId: _ });
                if (
                    null ==
                    (0, L.Z)({
                        applicationId: o,
                        activityConfigs: p,
                        applications: h
                    })
                ) {
                    let e = await (0, w.w1)({
                        guildId: _,
                        force: !0
                    });
                    (0, L.Z)({
                        applicationId: o,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let m = D.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === o);
                (null != (r = null == m ? void 0 : m.userIds.size) ? r : 0) > 0
                    ? await (0, M.k)({
                          channelId: i,
                          applicationId: o,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: a,
                          inviterUserId: l
                      })
                    : await (0, k.Z)({
                          targetApplicationId: o,
                          channelId: i,
                          analyticsLocations: a,
                          commandOrigin: s,
                          inviterUserId: l
                      });
            }),
            H(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                D.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: n, applicationId: r } = e,
                        i = (0, U.jS)(n);
                    t.id === i &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r
                        });
                });
            }),
            H(this, 'handleChannelDelete', (e) => {
                let { channel: t } = e,
                    n = D.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId
                    });
            }),
            H(this, 'handleInteractionQueue', (e) => {
                let { nonce: t, data: n } = e;
                if (null == K[n.applicationId]) {
                    let e;
                    n.interactionType === l.B8.APPLICATION_COMMAND ? (e = [u.Z.INTERACTION_APPLICATION_COMMAND]) : n.interactionType === l.B8.MESSAGE_COMPONENT ? (e = [u.Z.INTERACTION_MESSAGE_COMPONENT]) : n.interactionType === l.B8.MODAL_SUBMIT && (e = [u.Z.INTERACTION_MODAL_SUBMIT]),
                        Q({
                            applicationId: n.applicationId,
                            nonce: t,
                            locations: e
                        }) && (z[t] = n.applicationId);
                }
            }),
            H(this, 'handleInteractionCreate', (e) => {
                let { nonce: t, interactionId: n } = e;
                if (null == t) return;
                let r = z[t];
                if (null == r) return;
                let i = K[r];
                null != i && (i.interactionId = n);
            }),
            H(this, 'handleInteractionSuccess', (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = z[t];
                null != n && (delete z[t], J(n, t));
            }),
            H(this, 'handleInteractionFailure', (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = z[t];
                null != n && (delete z[t], X(n, t));
            });
    }
}
