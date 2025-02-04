let i;
n.d(t, {
    U: () => et,
    Z: () => en
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
    b = n(19780),
    T = n(944486),
    S = n(594174),
    A = n(626135),
    N = n(585483),
    C = n(358085),
    R = n(624138),
    O = n(24933),
    D = n(115130),
    x = n(566620),
    L = n(317381),
    P = n(969345),
    w = n(148720),
    M = n(122613),
    k = n(782769),
    U = n(16609),
    G = n(761122),
    B = n(983695),
    Z = n(917107),
    F = n(981631),
    V = n(388032);
function j(e, t, n) {
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
let H = 2000,
    Y = {},
    W = {},
    K = {};
function z(e) {
    var t;
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, G.Z)((0, C.getOS)())].release_phase };
}
function q(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (
        (null != i || null != r) &&
        ((W[t] = {
            nonce: n,
            locations: i,
            source: r
        }),
        !0)
    );
}
function Q(e, t) {
    let n = W[e];
    if (null != n && n.nonce === t) return delete W[e], n;
}
function X(e, t) {
    setTimeout(() => Q(e, t), H);
}
function J(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    q({
        applicationId: t,
        nonce: n,
        locations: i,
        source: null != r ? r : void 0
    });
}
async function $(e) {
    var t, n;
    let { applicationId: i, location: r, instanceId: s } = e,
        o = L.ZP.getEmbeddedActivityDurationMs(r.id, i),
        l = y.default.getSessionId();
    null != s &&
        null != l &&
        (await a.tn.post({
            url: F.ANM.ACTIVITY_LEAVE(i, r.id, s),
            body: { session_id: l },
            retries: 2,
            rejectWithError: !1
        }));
    let u = Y[i],
        c = I.Z.getChannel((0, U.p)(r)),
        d = S.default.getCurrentUser();
    if (null == u || null == c || null == d) return;
    let f = c.getGuildId(),
        _ = L.ZP.getShelfActivities(f),
        h = (0, P.Z)({
            applicationId: i,
            activityConfigs: _
        }),
        { releasePhase: m } = z(h),
        g = p.Z.getRawThermalState();
    A.default.track(F.rMx.ACTIVITY_SESSION_LEFT, {
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
        A.default.track(F.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: c.id,
            guild_id: f,
            application_id: i,
            instance_ids: null != u.launchId ? [u.launchId] : void 0,
            media_session_ids: u.mediaSessionIds,
            activity_user_session_id: u.activityUserSessionId,
            raw_thermal_state: g,
            duration_ms: o
        }),
        delete Y[i];
}
function ee(e) {
    var t, n, i;
    let { applicationId: a, isFirstActivityInChannel: s, isStart: l, participants: u, embeddedActivity: c, location: f, inviterUserId: h } = e,
        m = y.default.getId(),
        g = u.find((e) => e.userId === m),
        E = (0, U.p)(f),
        v = I.Z.getChannel(E);
    if ((l && null != v && v.isPrivate() && s && null == g && o.Z.selectParticipant(v.id, null), null == g)) return;
    let T = b.Z.getMediaSessionId(),
        N = c.compositeInstanceId,
        C = null == T && (null == v ? void 0 : v.isVocal()) === !0 && (null == v ? void 0 : v.isPrivate()) === !1;
    if (null == N || C) return;
    let D = (0, r.Z)(),
        x = 'location' in c ? 2 : 1,
        w = null == v ? void 0 : v.getGuildId(),
        M = S.default.getCurrentUser();
    if (null == v || null == M) return;
    let k = L.ZP.getShelfActivities(w),
        G = O.Z.getState().shelfOrder,
        B = (0, P.Z)({
            applicationId: a,
            activityConfigs: k
        }),
        Z = 1 + G.findIndex((e) => e === a),
        { releasePhase: V } = z(B),
        j = p.Z.getRawThermalState(),
        H = null != T ? [T] : [],
        K = {
            activitySessionId: N,
            activityUserSessionId: D,
            launchId: c.launchId,
            mediaSessionIds: H,
            activitiesInfraVersion: x
        };
    Y[a] = K;
    let q = W[a];
    (0, R.Ew)(g.nonce) || g.nonce === (null == q ? void 0 : q.nonce) || (q = void 0),
        A.default.track(F.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: v.id,
            guild_id: v.getGuildId(),
            media_session_id: H[0],
            activity_session_id: N,
            application_id: a,
            location_stack: null == q ? void 0 : q.locations,
            user_premium_tier: M.premiumType,
            raw_thermal_state: j,
            n_participants: _.Z.getUserParticipantCount(v.id),
            is_activity_start: l,
            release_phase: V,
            activity_premium_tier_requirement: null == B ? void 0 : null === (t = B.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == B ? void 0 : null === (n = B.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: Z > 0 ? Z : null,
            activity_user_session_id: D,
            channel_type: v.type,
            source: null == q ? void 0 : q.source,
            command_context_type: (0, d.Vh)(v, a),
            invite_inviter_id: h
        }),
        A.default.track(F.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == q ? void 0 : q.locations,
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
            activities_infra_version: x
        });
}
function et(e) {
    return Y[e];
}
class en extends u.Z {
    _initialize() {
        T.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(F.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(F.CkL.OPEN_EMBEDDED_ACTIVITY, ee), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', J), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', $), s.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.subscribe('CALL_DELETE', this.handleCallDelete), s.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete), s.Z.subscribe('INTERACTION_QUEUE', this.handleInteractionQueue), s.Z.subscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), s.Z.subscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    _terminate() {
        T.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(F.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(F.CkL.OPEN_EMBEDDED_ACTIVITY, ee), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', J), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', $), s.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete), s.Z.unsubscribe('INTERACTION_QUEUE', this.handleInteractionQueue), s.Z.unsubscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), s.Z.unsubscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    constructor(...e) {
        super(...e),
            j(this, 'handleSelectedChannelUpdate', () => {
                let e = T.Z.getVoiceChannelId();
                for (let { location: t, applicationId: n } of L.ZP.getSelfEmbeddedActivities().values()) {
                    let i = (0, U.p)(t);
                    null != i &&
                        (0, Z.Z)(i) &&
                        i !== e &&
                        this.leaveActivity({
                            location: t,
                            applicationId: n
                        });
                }
                if (null != e) {
                    let t = L.ZP.getEmbeddedActivitiesForChannel(e),
                        n = y.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = (0, U.p)(e.location),
                                n = L.ZP.getSelfEmbeddedActivityForChannel(t);
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
            j(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            j(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: t, applicationId: n } = e;
                X(n, t);
            }),
            j(this, 'handleActivityLaunchFail', async (e) => {
                let t,
                    n,
                    i,
                    { error: r, nonce: a, channelId: s, applicationId: o, isStart: l } = e,
                    u = Q(o, a),
                    c = V.intl.string(V.t['IOy+Iy']);
                if (r instanceof h.Z) {
                    (t = 0), (i = r.reason);
                    let e = D.Z.getFetchState();
                    switch ((E.Sb.getSetting() && e !== D.O.LOADED && (await (0, x.$h)()), r.reason)) {
                        case h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            D.Z.inDevModeForApplication(o) && (c = V.intl.string(V.t.hXRXf3));
                            break;
                        case h.Z.Reasons.INVALID_CHANNEL:
                            c = V.intl.string(V.t.j29zCg);
                    }
                } else if (r instanceof m.Z) {
                    var d;
                    (t = 1), (i = r.reason), (c = null !== (d = (0, g.A0)(r.reason, o)) && void 0 !== d ? d : c);
                } else
                    switch (((t = 2), (n = r.status), (i = r.code), r.code)) {
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            c = V.intl.string(V.t.Gyzcra);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            c = V.intl.string(V.t.zxv7EB);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            c = V.intl.string(V.t['H+KK6e']);
                            break;
                        case F.evJ.INVALID_PERMISSIONS:
                            c = V.intl.string(V.t.hHGrW1);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            c = V.intl.string(V.t.j29zCg);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            c = V.intl.string(V.t['4WuFRE']);
                            break;
                        case F.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            c = V.intl.string(V.t.RvkXdX);
                            break;
                        case F.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            c = V.intl.string(V.t.uGDCc3);
                    }
                this.showLaunchErrorModal(c);
                let f = I.Z.getChannel(s);
                if (null == f) return;
                let _ = f.getGuildId(),
                    v = p.Z.getRawThermalState();
                A.default.track(F.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
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
            j(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e,
                    i = n.id;
                if (null != i && null != t) {
                    for (let { applicationId: e, location: t } of L.ZP.getSelfEmbeddedActivities().values())
                        e === i &&
                            this.leaveActivity({
                                location: t,
                                applicationId: i
                            });
                    t.code !== F.$VG.CLOSE_NORMAL && this.showErrorModal(t, i);
                }
            }),
            j(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = T.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            j(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== F.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            j(this, 'handleCallEnded', (e) => {
                let t = L.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        location: t.location,
                        applicationId: t.applicationId
                    });
            }),
            j(this, 'handleDeferredOpen', async (e) => {
                var t, n, i;
                let { channelId: r, applicationId: a, analyticsLocations: s, commandOrigin: o, inviterUserId: l } = e,
                    u = I.Z.getChannel(r);
                if (void 0 === u || (v.tx.has(null == u ? void 0 : u.type) && T.Z.getVoiceChannelId() !== r)) return;
                let c = L.ZP.getSelfEmbeddedActivityForChannel(r);
                if ((null == c ? void 0 : c.applicationId) === a) return;
                let d = await f.ZP.fetchApplication(a);
                if (!(0, k.a)(u)) {
                    this.showLaunchErrorModal(V.intl.string(V.t.UXoQTk));
                    return;
                }
                if (!(0, B.Z)(null == d ? void 0 : null === (t = d.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(V.intl.string(V.t.uGDCc3));
                    return;
                }
                let _ = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: p, applications: h } = await (0, x.w1)({ guildId: _ });
                if (
                    null ==
                    (0, P.Z)({
                        applicationId: a,
                        activityConfigs: p,
                        applications: h
                    })
                ) {
                    let e = await (0, x.w1)({
                        guildId: _,
                        force: !0
                    });
                    (0, P.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let m = L.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === a);
                (null !== (i = null == m ? void 0 : m.userIds.size) && void 0 !== i ? i : 0) > 0
                    ? await (0, w.k)({
                          channelId: r,
                          applicationId: a,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: s,
                          inviterUserId: l
                      })
                    : await (0, M.Z)({
                          targetApplicationId: a,
                          channelId: r,
                          analyticsLocations: s,
                          commandOrigin: o,
                          inviterUserId: l
                      });
            }),
            j(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                L.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: n, applicationId: i } = e,
                        r = (0, U.j)(n);
                    t.id === r &&
                        this.leaveActivity({
                            location: n,
                            applicationId: i
                        });
                });
            }),
            j(this, 'handleChannelDelete', (e) => {
                let { channel: t } = e,
                    n = L.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId
                    });
            }),
            j(this, 'handleInteractionQueue', (e) => {
                let { nonce: t, data: n } = e;
                if (null == W[n.applicationId]) {
                    let e;
                    n.interactionType === l.B8.APPLICATION_COMMAND ? (e = [c.Z.INTERACTION_APPLICATION_COMMAND]) : n.interactionType === l.B8.MESSAGE_COMPONENT ? (e = [c.Z.INTERACTION_MESSAGE_COMPONENT]) : n.interactionType === l.B8.MODAL_SUBMIT && (e = [c.Z.INTERACTION_MODAL_SUBMIT]),
                        q({
                            applicationId: n.applicationId,
                            nonce: t,
                            locations: e
                        }) && (K[t] = n.applicationId);
                }
            }),
            j(this, 'handleInteractionSuccess', (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = K[t];
                null != n && (delete K[t], X(n, t));
            }),
            j(this, 'handleInteractionFailure', (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = K[t];
                null != n && (delete K[t], Q(n, t));
            });
    }
}
