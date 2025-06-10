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
    O = n(592125),
    v = n(19780),
    I = n(944486),
    T = n(594174),
    S = n(626135),
    A = n(585483),
    N = n(358085),
    C = n(624138),
    R = n(24933),
    P = n(115130),
    w = n(566620),
    D = n(317381),
    L = n(969345),
    x = n(155268),
    k = n(148720),
    M = n(122613),
    j = n(790920),
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
function X(e) {
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
function Q(e, t) {
    let n = K[e];
    if (null != n && n.nonce === t) return delete K[e], n;
}
function J(e, t) {
    setTimeout(() => Q(e, t), Y);
}
function $(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    X({
        applicationId: t,
        nonce: n,
        locations: r,
        source: null != i ? i : void 0
    });
}
async function ee(e) {
    var t;
    let { applicationId: n, location: r, instanceId: i } = e,
        o = D.ZP.getEmbeddedActivityDurationMs(r.id, n),
        s = y.default.getSessionId();
    null != i &&
        null != s &&
        (await a.tn.post({
            url: V.ANM.ACTIVITY_LEAVE(n, r.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1
        }));
    let l = W[n],
        c = (0, U.p)(r),
        u = (0, U.j)(r),
        d = O.Z.getChannel(c),
        f = T.default.getCurrentUser();
    if (null == l || null == f) return;
    let _ = D.ZP.getShelfActivities(u),
        h = (0, L.Z)({
            applicationId: n,
            activityConfigs: _
        }),
        { releasePhase: m } = q(h),
        g = p.Z.getRawThermalState();
    S.default.track(V.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: c,
        guild_id: u,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: n,
        duration_ms: o,
        user_premium_tier: f.premiumType,
        raw_thermal_state: g,
        release_phase: m,
        shelf_rank: null == h || null == (t = h.activity) ? void 0 : t.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: null == d ? void 0 : d.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: r.kind
    }),
        S.default.track(V.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: c,
            guild_id: u,
            application_id: n,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: g,
            duration_ms: o,
            embedded_activity_location_kind: r.kind
        }),
        delete W[n];
}
function et(e) {
    var t, n;
    let { applicationId: r, isFirstActivityInChannel: a, isStart: o, participants: l, embeddedActivity: c, location: u, inviterUserId: f } = e,
        h = y.default.getId(),
        m = l.find((e) => e.userId === h),
        g = (0, U.p)(u),
        E = (0, U.j)(u),
        b = O.Z.getChannel(g);
    if ((o && null != b && b.isPrivate() && a && null == m && s.Z.selectParticipant(b.id, null), null == m)) return;
    let I = v.Z.getMediaSessionId(),
        A = c.compositeInstanceId,
        N = null == I && (null == b ? void 0 : b.isVocal()) === !0 && (null == b ? void 0 : b.isPrivate()) === !1;
    if (null == A || N) return;
    let P = (0, i.Z)(),
        w = 'location' in c ? 2 : 1,
        x = T.default.getCurrentUser();
    if (null == x) return;
    let k = D.ZP.getShelfActivities(E),
        M = R.Z.getState().shelfOrder,
        j = (0, L.Z)({
            applicationId: r,
            activityConfigs: k
        }),
        G = 1 + M.findIndex((e) => e === r),
        { releasePhase: B } = q(j),
        F = p.Z.getRawThermalState(),
        Z = null != I ? [I] : [],
        H = {
            activitySessionId: A,
            activityUserSessionId: P,
            launchId: c.launchId,
            mediaSessionIds: Z,
            activitiesInfraVersion: w
        };
    W[r] = H;
    let Y = K[r];
    (0, C.Ew)(m.nonce) || m.nonce === (null == Y ? void 0 : Y.nonce) || (Y = void 0),
        S.default.track(V.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: g,
            guild_id: E,
            media_session_id: Z[0],
            activity_session_id: A,
            application_id: r,
            location_stack: null == Y ? void 0 : Y.locations,
            user_premium_tier: x.premiumType,
            raw_thermal_state: F,
            n_participants: null != b ? _.Z.getUserParticipantCount(b.id) : null,
            is_activity_start: o,
            release_phase: B,
            shelf_rank: null == j || null == (t = j.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: P,
            channel_type: null == b ? void 0 : b.type,
            source: null == Y ? void 0 : Y.source,
            command_context_type: null != b ? (0, d.Vh)(b, r) : null,
            invite_inviter_id: f,
            interaction_id: null == Y ? void 0 : Y.interactionId,
            embedded_activity_location_kind: u.kind
        }),
        S.default.track(V.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == Y ? void 0 : Y.locations,
            channel_id: g,
            channel_type: null == b ? void 0 : b.type,
            guild_id: E,
            application_id: r,
            instance_id: c.launchId,
            initial_media_session_id: Z[0],
            activity_user_session_id: P,
            raw_thermal_state: F,
            is_activity_start: o,
            shelf_rank: null == j || null == (n = j.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: w,
            embedded_activity_location_kind: u.kind
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
                    let r = (0, U.p)(t);
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
                            let t = (0, U.p)(e.location),
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
                    { error: i, nonce: a, channelId: o, guildId: s, applicationId: l, isStart: c, locationKind: u } = e,
                    d = Q(l, a),
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
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            f = Z.intl.string(Z.t.Gyzcra);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            f = Z.intl.string(Z.t.zxv7EB);
                            break;
                        case V.evJ.INVALID_PERMISSIONS:
                            f = Z.intl.string(Z.t.hHGrW1);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            f = Z.intl.string(Z.t.j29zCg);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            f = Z.intl.string(Z.t['4WuFRE']);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            f = Z.intl.string(Z.t.RvkXdX);
                            break;
                        case V.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            f = Z.intl.string(Z.t.uGDCc3);
                    }
                this.showLaunchErrorModal(f);
                let b = O.Z.getChannel(o),
                    y = p.Z.getRawThermalState();
                S.default.track(V.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: o,
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
                    t.code !== V.$VG.CLOSE_NORMAL &&
                        (S.default.track(V.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
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
                    c = O.Z.getChannel(i);
                if (void 0 === c || (b.tx.has(null == c ? void 0 : c.type) && I.Z.getVoiceChannelId() !== i)) return;
                let u = D.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let d = await f.ZP.fetchApplication(a);
                if (!(0, j.a)()) return void this.showLaunchErrorModal(Z.intl.string(Z.t.UXoQTk));
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
                    ? await (0, k.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: o,
                          inviterUserId: l
                      })
                    : await (0, M.Z)({
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
                        i = (0, U.j)(n);
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
                        X({
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
                null != n && (delete z[t], Q(n, t));
            });
    }
}
