let r;
n.d(t, {
    U: () => en,
    Z: () => er
}),
    n(47120);
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
    v = n(592125),
    O = n(19780),
    I = n(944486),
    S = n(594174),
    T = n(626135),
    N = n(585483),
    A = n(358085),
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
let W = 2000,
    Y = {},
    K = {},
    z = {};
function q(e) {
    var t;
    return { releasePhase: null == e || null == (t = e.activity) ? void 0 : t.client_platform_config[(0, G.Z)((0, A.getOS)())].release_phase };
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
    setTimeout(() => X(e, t), W);
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
    var t;
    let { applicationId: n, location: r, instanceId: i } = e,
        a = D.ZP.getEmbeddedActivityDurationMs(r.id, n),
        s = y.default.getSessionId();
    null != i &&
        null != s &&
        (await o.tn.post({
            url: V.ANM.ACTIVITY_LEAVE(n, r.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1
        }));
    let l = Y[n],
        c = v.Z.getChannel((0, U.pY)(r)),
        u = S.default.getCurrentUser();
    if (null == l || null == u) return;
    let d = null == c ? void 0 : c.getGuildId(),
        f = D.ZP.getShelfActivities(d),
        _ = (0, L.Z)({
            applicationId: n,
            activityConfigs: f
        }),
        { releasePhase: h } = q(_),
        m = p.Z.getRawThermalState();
    T.default.track(V.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: null == c ? void 0 : c.id,
        guild_id: d,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: n,
        duration_ms: a,
        user_premium_tier: u.premiumType,
        raw_thermal_state: m,
        release_phase: h,
        shelf_rank: null == _ || null == (t = _.activity) ? void 0 : t.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: null == c ? void 0 : c.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: r.kind
    }),
        T.default.track(V.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: null == c ? void 0 : c.id,
            guild_id: d,
            application_id: n,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: m,
            duration_ms: a,
            embedded_activity_location_kind: r.kind
        }),
        delete Y[n];
}
function et(e) {
    var t, n;
    let { applicationId: r, isFirstActivityInChannel: o, isStart: a, participants: l, embeddedActivity: c, location: u, inviterUserId: f } = e,
        h = y.default.getId(),
        m = l.find((e) => e.userId === h),
        g = (0, U.pY)(u),
        E = v.Z.getChannel(g);
    if ((a && null != E && E.isPrivate() && o && null == m && s.Z.selectParticipant(E.id, null), null == m)) return;
    let b = O.Z.getMediaSessionId(),
        I = c.compositeInstanceId,
        N = null == b && (null == E ? void 0 : E.isVocal()) === !0 && (null == E ? void 0 : E.isPrivate()) === !1;
    if (null == I || N) return;
    let A = (0, i.Z)(),
        P = 'location' in c ? 2 : 1,
        w = null == E ? void 0 : E.getGuildId(),
        x = S.default.getCurrentUser();
    if (null == x) return;
    let M = D.ZP.getShelfActivities(w),
        k = R.Z.getState().shelfOrder,
        j = (0, L.Z)({
            applicationId: r,
            activityConfigs: M
        }),
        G = 1 + k.findIndex((e) => e === r),
        { releasePhase: B } = q(j),
        F = p.Z.getRawThermalState(),
        Z = null != b ? [b] : [],
        H = {
            activitySessionId: I,
            activityUserSessionId: A,
            launchId: c.launchId,
            mediaSessionIds: Z,
            activitiesInfraVersion: P
        };
    Y[r] = H;
    let W = K[r];
    (0, C.Ew)(m.nonce) || m.nonce === (null == W ? void 0 : W.nonce) || (W = void 0),
        T.default.track(V.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: null == E ? void 0 : E.id,
            guild_id: w,
            media_session_id: Z[0],
            activity_session_id: I,
            application_id: r,
            location_stack: null == W ? void 0 : W.locations,
            user_premium_tier: x.premiumType,
            raw_thermal_state: F,
            n_participants: null != E ? _.Z.getUserParticipantCount(E.id) : null,
            is_activity_start: a,
            release_phase: B,
            shelf_rank: null == j || null == (t = j.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: A,
            channel_type: null == E ? void 0 : E.type,
            source: null == W ? void 0 : W.source,
            command_context_type: null != E ? (0, d.Vh)(E, r) : null,
            invite_inviter_id: f,
            interaction_id: null == W ? void 0 : W.interactionId,
            embedded_activity_location_kind: u.kind
        }),
        T.default.track(V.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == W ? void 0 : W.locations,
            channel_id: null == E ? void 0 : E.id,
            channel_type: null == E ? void 0 : E.type,
            guild_id: w,
            application_id: r,
            instance_id: c.launchId,
            initial_media_session_id: Z[0],
            activity_user_session_id: A,
            raw_thermal_state: F,
            is_activity_start: a,
            shelf_rank: null == j || null == (n = j.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: P,
            embedded_activity_location_kind: u.kind
        });
}
function en(e) {
    return Y[e];
}
class er extends c.Z {
    _initialize() {
        I.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), a.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), a.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), a.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), a.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', ee), a.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), a.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), a.Z.subscribe('CALL_DELETE', this.handleCallDelete), a.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), a.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), a.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete), a.Z.subscribe('INTERACTION_QUEUE', this.handleInteractionQueue), a.Z.subscribe('INTERACTION_CREATE', this.handleInteractionCreate), a.Z.subscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), a.Z.subscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
    }
    _terminate() {
        I.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), a.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', $), a.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), a.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), a.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', ee), a.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), a.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), a.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), a.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), a.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), a.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete), a.Z.unsubscribe('INTERACTION_QUEUE', this.handleInteractionQueue), a.Z.unsubscribe('INTERACTION_CREATE', this.handleInteractionCreate), a.Z.unsubscribe('INTERACTION_SUCCESS', this.handleInteractionSuccess), a.Z.unsubscribe('INTERACTION_FAILURE', this.handleInteractionFailure);
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
                    { error: i, nonce: o, channelId: a, applicationId: s, isStart: l, locationKind: c } = e,
                    u = X(s, o),
                    d = Z.NW.string(Z.t['IOy+Iy']);
                if (i instanceof h.Z) {
                    (t = 0), (r = i.reason);
                    let e = P.Z.getFetchState();
                    switch ((E.Sb.getSetting() && e !== P.O.LOADED && (await (0, w.$h)()), i.reason)) {
                        case h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            P.Z.inDevModeForApplication(s) && (d = Z.NW.string(Z.t.hXRXf3));
                            break;
                        case h.Z.Reasons.INVALID_CHANNEL:
                            d = Z.NW.string(Z.t.j29zCg);
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
                            d = Z.NW.string(Z.t.Gyzcra);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = Z.NW.string(Z.t.zxv7EB);
                            break;
                        case V.evJ.INVALID_PERMISSIONS:
                            d = Z.NW.string(Z.t.hHGrW1);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = Z.NW.string(Z.t.j29zCg);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = Z.NW.string(Z.t['4WuFRE']);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = Z.NW.string(Z.t.RvkXdX);
                            break;
                        case V.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = Z.NW.string(Z.t.uGDCc3);
                    }
                this.showLaunchErrorModal(d);
                let _ = v.Z.getChannel(a),
                    b = null == _ ? void 0 : _.getGuildId(),
                    y = p.Z.getRawThermalState();
                T.default.track(V.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: a,
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
                let { channelId: i, applicationId: o, analyticsLocations: a, commandOrigin: s, inviterUserId: l } = e,
                    c = v.Z.getChannel(i);
                if (void 0 === c || (b.tx.has(null == c ? void 0 : c.type) && I.Z.getVoiceChannelId() !== i)) return;
                let u = D.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === o) return;
                let d = await f.ZP.fetchApplication(o);
                if (!(0, j.a)(c)) return void this.showLaunchErrorModal(Z.NW.string(Z.t.UXoQTk));
                if (!(0, B.Z)(null == d || null == (t = d.embedded_activity_config) ? void 0 : t.supported_platforms)) return void this.showLaunchErrorModal(Z.NW.string(Z.t.uGDCc3));
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
