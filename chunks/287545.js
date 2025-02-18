let i;
n.d(t, {
    U: () => en,
    Z: () => ei
}),
    n(47120);
var r = n(772848),
    a = n(544891),
    s = n(570140),
    o = n(475179),
    l = n(911969),
    u = n(317770),
    c = n(100527),
    d = n(807169),
    f = n(728345),
    _ = n(358221),
    p = n(75060),
    h = n(233764),
    m = n(375824),
    g = n(188597),
    E = n(695346),
    v = n(131704),
    y = n(314897),
    I = n(592125),
    T = n(19780),
    S = n(944486),
    b = n(594174),
    A = n(626135),
    N = n(585483),
    C = n(358085),
    R = n(624138),
    O = n(24933),
    D = n(115130),
    L = n(566620),
    x = n(317381),
    w = n(969345),
    P = n(155268),
    M = n(148720),
    k = n(122613),
    U = n(782769),
    G = n(16609),
    B = n(761122),
    Z = n(983695),
    F = n(917107),
    V = n(981631),
    j = n(388032);
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
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, B.Z)((0, C.getOS)())].release_phase };
}
function Q(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (
        (null != i || null != r) &&
        ((K[t] = {
            nonce: n,
            locations: i,
            source: r
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
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    Q({
        applicationId: t,
        nonce: n,
        locations: i,
        source: null != r ? r : void 0
    });
}
async function ee(e) {
    var t, n;
    let { applicationId: i, location: r, instanceId: s } = e,
        o = x.ZP.getEmbeddedActivityDurationMs(r.id, i),
        l = y.default.getSessionId();
    null != s &&
        null != l &&
        (await a.tn.post({
            url: V.ANM.ACTIVITY_LEAVE(i, r.id, s),
            body: { session_id: l },
            retries: 2,
            rejectWithError: !1
        }));
    let u = W[i],
        c = I.Z.getChannel((0, G.pY)(r)),
        d = b.default.getCurrentUser();
    if (null == u || null == c || null == d) return;
    let f = c.getGuildId(),
        _ = x.ZP.getShelfActivities(f),
        h = (0, w.Z)({
            applicationId: i,
            activityConfigs: _
        }),
        { releasePhase: m } = q(h),
        g = p.Z.getRawThermalState();
    A.default.track(V.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: c.id,
        guild_id: f,
        media_session_id: u.mediaSessionIds[0],
        activity_session_id: u.activitySessionId,
        application_id: i,
        duration_ms: o,
        user_premium_tier: d.premiumType,
        raw_thermal_state: g,
        release_phase: m,
        activity_premium_tier_requirement: null == h ? void 0 : null === (t = h.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
        shelf_rank: null == h ? void 0 : null === (n = h.activity) || void 0 === n ? void 0 : n.shelf_rank,
        activity_user_session_id: u.activityUserSessionId,
        channel_type: c.type,
        media_session_ids: u.mediaSessionIds
    }),
        A.default.track(V.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: c.id,
            guild_id: f,
            application_id: i,
            instance_ids: null != u.launchId ? [u.launchId] : void 0,
            media_session_ids: u.mediaSessionIds,
            activity_user_session_id: u.activityUserSessionId,
            raw_thermal_state: g,
            duration_ms: o
        }),
        delete W[i];
}
function et(e) {
    var t, n, i;
    let { applicationId: a, isFirstActivityInChannel: s, isStart: l, participants: u, embeddedActivity: c, location: f, inviterUserId: h } = e,
        m = y.default.getId(),
        g = u.find((e) => e.userId === m),
        E = (0, G.pY)(f),
        v = I.Z.getChannel(E);
    if ((l && null != v && v.isPrivate() && s && null == g && o.Z.selectParticipant(v.id, null), null == g)) return;
    let S = T.Z.getMediaSessionId(),
        N = c.compositeInstanceId,
        C = null == S && (null == v ? void 0 : v.isVocal()) === !0 && (null == v ? void 0 : v.isPrivate()) === !1;
    if (null == N || C) return;
    let D = (0, r.Z)(),
        L = 'location' in c ? 2 : 1,
        P = null == v ? void 0 : v.getGuildId(),
        M = b.default.getCurrentUser();
    if (null == v || null == M) return;
    let k = x.ZP.getShelfActivities(P),
        U = O.Z.getState().shelfOrder,
        B = (0, w.Z)({
            applicationId: a,
            activityConfigs: k
        }),
        Z = 1 + U.findIndex((e) => e === a),
        { releasePhase: F } = q(B),
        j = p.Z.getRawThermalState(),
        H = null != S ? [S] : [],
        Y = {
            activitySessionId: N,
            activityUserSessionId: D,
            launchId: c.launchId,
            mediaSessionIds: H,
            activitiesInfraVersion: L
        };
    W[a] = Y;
    let z = K[a];
    (0, R.Ew)(g.nonce) || g.nonce === (null == z ? void 0 : z.nonce) || (z = void 0),
        A.default.track(V.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: v.id,
            guild_id: v.getGuildId(),
            media_session_id: H[0],
            activity_session_id: N,
            application_id: a,
            location_stack: null == z ? void 0 : z.locations,
            user_premium_tier: M.premiumType,
            raw_thermal_state: j,
            n_participants: _.Z.getUserParticipantCount(v.id),
            is_activity_start: l,
            release_phase: F,
            activity_premium_tier_requirement: null == B ? void 0 : null === (t = B.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == B ? void 0 : null === (n = B.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: Z > 0 ? Z : null,
            activity_user_session_id: D,
            channel_type: v.type,
            source: null == z ? void 0 : z.source,
            command_context_type: (0, d.Vh)(v, a),
            invite_inviter_id: h
        }),
        A.default.track(V.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == z ? void 0 : z.locations,
            channel_id: v.id,
            channel_type: v.type,
            guild_id: v.getGuildId(),
            application_id: a,
            instance_id: c.launchId,
            initial_media_session_id: H[0],
            activity_user_session_id: D,
            raw_thermal_state: j,
            is_activity_start: l,
            shelf_rank: null == B ? void 0 : null === (i = B.activity) || void 0 === i ? void 0 : i.shelf_rank,
            shelf_sorted_rank: Z > 0 ? Z : null,
            activities_infra_version: L
        });
}
function en(e) {
    return W[e];
}
class ei extends u.Z {
    _initialize() {
        S.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', ee), s.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.subscribe('CALL_DELETE', this.handleCallDelete), s.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete), s.Z.subscribe('INTERACTION_QUEUE', this.handleInteractionQueue), s.Z.subscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), s.Z.subscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    _terminate() {
        S.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', ee), s.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete), s.Z.unsubscribe('INTERACTION_QUEUE', this.handleInteractionQueue), s.Z.unsubscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), s.Z.unsubscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleSelectedChannelUpdate', () => {
                let e = S.Z.getVoiceChannelId();
                for (let { location: t, applicationId: n } of x.ZP.getSelfEmbeddedActivities().values()) {
                    let i = (0, G.pY)(t);
                    null != i &&
                        (0, F.Z)(i) &&
                        i !== e &&
                        this.leaveActivity({
                            location: t,
                            applicationId: n
                        });
                }
                if (null != e) {
                    let t = x.ZP.getEmbeddedActivitiesForChannel(e),
                        n = y.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = (0, G.pY)(e.location),
                                n = x.ZP.getSelfEmbeddedActivityForChannel(t);
                            null == n
                                ? this.leaveActivity({
                                      location: e.location,
                                      applicationId: e.applicationId
                                  })
                                : null == i &&
                                  this.hidePIPEmbed({
                                      location: n.location,
                                      applicationId: n.applicationId
                                  });
                        }
                    });
                }
                i = null != e ? e : void 0;
            }),
            H(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            H(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: t, applicationId: n } = e;
                J(n, t), (0, P.n9)() && this.showDevShelfOverrideEnabled();
            }),
            H(this, 'handleActivityLaunchFail', async (e) => {
                let t,
                    n,
                    i,
                    { error: r, nonce: a, channelId: s, applicationId: o, isStart: l } = e,
                    u = X(o, a),
                    c = j.intl.string(j.t['IOy+Iy']);
                if (r instanceof h.Z) {
                    (t = 0), (i = r.reason);
                    let e = D.Z.getFetchState();
                    switch ((E.Sb.getSetting() && e !== D.O.LOADED && (await (0, L.$h)()), r.reason)) {
                        case h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            D.Z.inDevModeForApplication(o) && (c = j.intl.string(j.t.hXRXf3));
                            break;
                        case h.Z.Reasons.INVALID_CHANNEL:
                            c = j.intl.string(j.t.j29zCg);
                            break;
                        case h.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                            n = r.detailCode;
                    }
                } else if (r instanceof m.Z) {
                    var d;
                    (t = 1), (i = r.reason), (c = null !== (d = (0, g.A0)(r.reason, o)) && void 0 !== d ? d : c);
                } else
                    switch (((t = 2), (n = r.status), (i = r.code), r.code)) {
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            c = j.intl.string(j.t.Gyzcra);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            c = j.intl.string(j.t.zxv7EB);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            c = j.intl.string(j.t['H+KK6e']);
                            break;
                        case V.evJ.INVALID_PERMISSIONS:
                            c = j.intl.string(j.t.hHGrW1);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            c = j.intl.string(j.t.j29zCg);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            c = j.intl.string(j.t['4WuFRE']);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            c = j.intl.string(j.t.RvkXdX);
                            break;
                        case V.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            c = j.intl.string(j.t.uGDCc3);
                    }
                this.showLaunchErrorModal(c);
                let f = I.Z.getChannel(s);
                if (null == f) return;
                let _ = f.getGuildId(),
                    v = p.Z.getRawThermalState();
                A.default.track(V.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: s,
                    guild_id: _,
                    application_id: o,
                    raw_thermal_state: v,
                    is_activity_start: l,
                    channel_type: null == f ? void 0 : f.type,
                    location_stack: null == u ? void 0 : u.locations,
                    error_type: t,
                    error_status: n,
                    error_code: i,
                    source: null == u ? void 0 : u.source
                });
            }),
            H(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e,
                    i = n.id;
                if (null != i && null != t) {
                    for (let { applicationId: e, location: t } of x.ZP.getSelfEmbeddedActivities().values())
                        e === i &&
                            this.leaveActivity({
                                location: t,
                                applicationId: i
                            });
                    t.code !== V.$VG.CLOSE_NORMAL &&
                        (A.default.track(V.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: i
                        }),
                        this.showErrorModal(t, i));
                }
            }),
            H(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = S.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            H(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== V.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            H(this, 'handleCallEnded', (e) => {
                let t = x.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        location: t.location,
                        applicationId: t.applicationId
                    });
            }),
            H(this, 'handleDeferredOpen', async (e) => {
                var t, n, i;
                let { channelId: r, applicationId: a, analyticsLocations: s, commandOrigin: o, inviterUserId: l } = e,
                    u = I.Z.getChannel(r);
                if (void 0 === u || (v.tx.has(null == u ? void 0 : u.type) && S.Z.getVoiceChannelId() !== r)) return;
                let c = x.ZP.getSelfEmbeddedActivityForChannel(r);
                if ((null == c ? void 0 : c.applicationId) === a) return;
                let d = await f.ZP.fetchApplication(a);
                if (!(0, U.a)(u)) {
                    this.showLaunchErrorModal(j.intl.string(j.t.UXoQTk));
                    return;
                }
                if (!(0, Z.Z)(null == d ? void 0 : null === (t = d.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(j.intl.string(j.t.uGDCc3));
                    return;
                }
                let _ = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: p, applications: h } = await (0, L.w1)({ guildId: _ });
                if (
                    null ==
                    (0, w.Z)({
                        applicationId: a,
                        activityConfigs: p,
                        applications: h
                    })
                ) {
                    let e = await (0, L.w1)({
                        guildId: _,
                        force: !0
                    });
                    (0, w.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let m = x.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === a);
                (null !== (i = null == m ? void 0 : m.userIds.size) && void 0 !== i ? i : 0) > 0
                    ? await (0, M.k)({
                          channelId: r,
                          applicationId: a,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: s,
                          inviterUserId: l
                      })
                    : await (0, k.Z)({
                          targetApplicationId: a,
                          channelId: r,
                          analyticsLocations: s,
                          commandOrigin: o,
                          inviterUserId: l
                      });
            }),
            H(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                x.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: n, applicationId: i } = e,
                        r = (0, G.jS)(n);
                    t.id === r &&
                        this.leaveActivity({
                            location: n,
                            applicationId: i
                        });
                });
            }),
            H(this, 'handleChannelDelete', (e) => {
                let { channel: t } = e,
                    n = x.ZP.getSelfEmbeddedActivityForChannel(t.id);
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
                    n.interactionType === l.B8.APPLICATION_COMMAND ? (e = [c.Z.INTERACTION_APPLICATION_COMMAND]) : n.interactionType === l.B8.MESSAGE_COMPONENT ? (e = [c.Z.INTERACTION_MESSAGE_COMPONENT]) : n.interactionType === l.B8.MODAL_SUBMIT && (e = [c.Z.INTERACTION_MODAL_SUBMIT]),
                        Q({
                            applicationId: n.applicationId,
                            nonce: t,
                            locations: e
                        }) && (z[t] = n.applicationId);
                }
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
