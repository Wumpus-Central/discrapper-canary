let r;
n.d(t, {
    U: () => en,
    Z: () => er
}),
    n(388685);
var i = n(772848),
    a = n(544891),
    o = n(570140),
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
    v = n(592125),
    O = n(19780),
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
    F = n(917107),
    V = n(981631),
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
    var t, n;
    let { applicationId: r, location: i, instanceId: o } = e,
        s = D.ZP.getEmbeddedActivityDurationMs(i.id, r),
        l = y.default.getSessionId();
    null != o &&
        null != l &&
        (await a.tn.post({
            url: V.ANM.ACTIVITY_LEAVE(r, i.id, o),
            body: { session_id: l },
            retries: 2,
            rejectWithError: !1
        }));
    let c = W[r],
        u = v.Z.getChannel(null != (n = (0, U.pY)(i)) ? n : (0, U.wq)(i)),
        d = S.default.getCurrentUser();
    if (null == c || null == d) return;
    let f = null == u ? void 0 : u.getGuildId(),
        _ = D.ZP.getShelfActivities(f),
        h = (0, L.Z)({
            applicationId: r,
            activityConfigs: _
        }),
        { releasePhase: m } = q(h),
        g = p.Z.getRawThermalState();
    T.default.track(V.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: null == u ? void 0 : u.id,
        guild_id: f,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: r,
        duration_ms: s,
        user_premium_tier: d.premiumType,
        raw_thermal_state: g,
        release_phase: m,
        shelf_rank: null == h || null == (t = h.activity) ? void 0 : t.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: null == u ? void 0 : u.type,
        media_session_ids: c.mediaSessionIds,
        embedded_activity_location_kind: i.kind
    }),
        T.default.track(V.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: null == u ? void 0 : u.id,
            guild_id: f,
            application_id: r,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: g,
            duration_ms: s,
            embedded_activity_location_kind: i.kind
        }),
        delete W[r];
}
function et(e) {
    var t, n, r;
    let { applicationId: a, isFirstActivityInChannel: o, isStart: l, participants: c, embeddedActivity: u, location: f, inviterUserId: h } = e,
        m = y.default.getId(),
        g = c.find((e) => e.userId === m),
        E = null != (r = (0, U.pY)(f)) ? r : (0, U.wq)(f),
        b = v.Z.getChannel(E);
    if ((l && null != b && b.isPrivate() && o && null == g && s.Z.selectParticipant(b.id, null), null == g)) return;
    let I = O.Z.getMediaSessionId(),
        A = u.compositeInstanceId,
        N = null == I && (null == b ? void 0 : b.isVocal()) === !0 && (null == b ? void 0 : b.isPrivate()) === !1;
    if (null == A || N) return;
    let P = (0, i.Z)(),
        w = 'location' in u ? 2 : 1,
        x = null == b ? void 0 : b.getGuildId(),
        M = S.default.getCurrentUser();
    if (null == M) return;
    let k = D.ZP.getShelfActivities(x),
        j = R.Z.getState().shelfOrder,
        G = (0, L.Z)({
            applicationId: a,
            activityConfigs: k
        }),
        B = 1 + j.findIndex((e) => e === a),
        { releasePhase: F } = q(G),
        Z = p.Z.getRawThermalState(),
        H = null != I ? [I] : [],
        Y = {
            activitySessionId: A,
            activityUserSessionId: P,
            launchId: u.launchId,
            mediaSessionIds: H,
            activitiesInfraVersion: w
        };
    W[a] = Y;
    let z = K[a];
    (0, C.Ew)(g.nonce) || g.nonce === (null == z ? void 0 : z.nonce) || (z = void 0),
        T.default.track(V.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: null == b ? void 0 : b.id,
            guild_id: x,
            media_session_id: H[0],
            activity_session_id: A,
            application_id: a,
            location_stack: null == z ? void 0 : z.locations,
            user_premium_tier: M.premiumType,
            raw_thermal_state: Z,
            n_participants: null != b ? _.Z.getUserParticipantCount(b.id) : null,
            is_activity_start: l,
            release_phase: F,
            shelf_rank: null == G || null == (t = G.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activity_user_session_id: P,
            channel_type: null == b ? void 0 : b.type,
            source: null == z ? void 0 : z.source,
            command_context_type: null != b ? (0, d.Vh)(b, a) : null,
            invite_inviter_id: h,
            interaction_id: null == z ? void 0 : z.interactionId,
            embedded_activity_location_kind: f.kind
        }),
        T.default.track(V.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == z ? void 0 : z.locations,
            channel_id: null == b ? void 0 : b.id,
            channel_type: null == b ? void 0 : b.type,
            guild_id: x,
            application_id: a,
            instance_id: u.launchId,
            initial_media_session_id: H[0],
            activity_user_session_id: P,
            raw_thermal_state: Z,
            is_activity_start: l,
            shelf_rank: null == G || null == (n = G.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activities_infra_version: w,
            embedded_activity_location_kind: f.kind
        });
}
function en(e) {
    return W[e];
}
class er extends c.Z {
    _initialize() {
        I.Z.addChangeListener(this.handleSelectedChannelUpdate), A.S.subscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), A.S.subscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), o.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), o.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), o.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), o.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', ee), o.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), o.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), o.Z.subscribe('CALL_DELETE', this.handleCallDelete), o.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), o.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), o.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete), o.Z.subscribe('INTERACTION_QUEUE', this.handleInteractionQueue), o.Z.subscribe('INTERACTION_CREATE', this.handleInteractionCreate), o.Z.subscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), o.Z.subscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    _terminate() {
        I.Z.removeChangeListener(this.handleSelectedChannelUpdate), A.S.unsubscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), A.S.unsubscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), o.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), o.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), o.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), o.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', ee), o.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), o.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), o.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), o.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), o.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), o.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete), o.Z.unsubscribe('INTERACTION_QUEUE', this.handleInteractionQueue), o.Z.unsubscribe('INTERACTION_CREATE', this.handleInteractionCreate), o.Z.unsubscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), o.Z.unsubscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleSelectedChannelUpdate', () => {
                let e = I.Z.getVoiceChannelId();
                for (let { location: t, applicationId: n } of D.ZP.getSelfEmbeddedActivities().values()) {
                    let r = (0, U.pY)(t);
                    null != r &&
                        (0, F.Z)(r) &&
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
                    { error: i, nonce: a, channelId: o, applicationId: s, isStart: l, locationKind: c } = e,
                    u = X(s, a),
                    d = Z.intl.string(Z.t['IOy+Iy']);
                if (i instanceof h.Z) {
                    (t = 0), (r = i.reason);
                    let e = P.Z.getFetchState();
                    switch ((E.Sb.getSetting() && e !== P.O.LOADED && (await (0, w.$h)()), i.reason)) {
                        case h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            P.Z.inDevModeForApplication(s) && (d = Z.intl.string(Z.t.hXRXf3));
                            break;
                        case h.Z.Reasons.INVALID_CHANNEL:
                            d = Z.intl.string(Z.t.j29zCg);
                            break;
                        case h.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                            n = i.detailCode;
                    }
                } else if (i instanceof m.Z) {
                    var f;
                    (t = 1), (r = i.reason), (d = null != (f = (0, g.A0)(i.reason, s)) ? f : d);
                } else
                    switch (((t = 2), (n = i.status), (r = i.code), i.code)) {
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            d = Z.intl.string(Z.t.Gyzcra);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = Z.intl.string(Z.t.zxv7EB);
                            break;
                        case V.evJ.INVALID_PERMISSIONS:
                            d = Z.intl.string(Z.t.hHGrW1);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = Z.intl.string(Z.t.j29zCg);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = Z.intl.string(Z.t['4WuFRE']);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = Z.intl.string(Z.t.RvkXdX);
                            break;
                        case V.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = Z.intl.string(Z.t.uGDCc3);
                    }
                this.showLaunchErrorModal(d);
                let _ = v.Z.getChannel(o),
                    b = null == _ ? void 0 : _.getGuildId(),
                    y = p.Z.getRawThermalState();
                T.default.track(V.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: o,
                    guild_id: b,
                    application_id: s,
                    raw_thermal_state: y,
                    is_activity_start: l,
                    channel_type: null == _ ? void 0 : _.type,
                    location_stack: null == u ? void 0 : u.locations,
                    error_type: t,
                    error_status: n,
                    error_code: r,
                    source: null == u ? void 0 : u.source,
                    embedded_activity_location_kind: c
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
                    t.code !== V.$VG.CLOSE_NORMAL &&
                        (T.default.track(V.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
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
                if (e.state !== V.hes.DISCONNECTED) return;
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
                let { channelId: i, applicationId: a, analyticsLocations: o, commandOrigin: s, inviterUserId: l } = e,
                    c = v.Z.getChannel(i);
                if (void 0 === c || (b.tx.has(null == c ? void 0 : c.type) && I.Z.getVoiceChannelId() !== i)) return;
                let u = D.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let d = await f.ZP.fetchApplication(a);
                if (!(0, j.a)(c)) return void this.showLaunchErrorModal(Z.intl.string(Z.t.UXoQTk));
                if (!(0, B.Z)(null == d || null == (t = d.embedded_activity_config) ? void 0 : t.supported_platforms)) return void this.showLaunchErrorModal(Z.intl.string(Z.t.uGDCc3));
                let _ = null != (n = null == c ? void 0 : c.getGuildId()) ? n : void 0,
                    { activityConfigs: p, applications: h } = await (0, w.w1)({ guildId: _ });
                if (
                    null ==
                    (0, L.Z)({
                        applicationId: a,
                        activityConfigs: p,
                        applications: h
                    })
                ) {
                    let e = await (0, w.w1)({
                        guildId: _,
                        force: !0
                    });
                    (0, L.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let m = D.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a);
                (null != (r = null == m ? void 0 : m.userIds.size) ? r : 0) > 0
                    ? await (0, M.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: o,
                          inviterUserId: l
                      })
                    : await (0, k.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: o,
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
