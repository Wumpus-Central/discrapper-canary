let r;
n.d(t, {
    U: () => J,
    Z: () => $,
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
    h = n(131704),
    m = n(314897),
    g = n(592125),
    E = n(19780),
    b = n(944486),
    y = n(594174),
    O = n(626135),
    v = n(585483),
    I = n(358085),
    T = n(624138),
    S = n(24933),
    A = n(566620),
    C = n(317381),
    N = n(969345),
    R = n(155268),
    P = n(148720),
    D = n(122613),
    w = n(790920),
    L = n(201567),
    x = n(16609),
    M = n(761122),
    j = n(983695),
    k = n(917107),
    U = n(981631),
    G = n(388032);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let Z = 2000,
    F = {},
    V = {},
    H = {};
function Y(e) {
    var t;
    return {
        releasePhase:
            null == e || null == (t = e.activity)
                ? void 0
                : t.client_platform_config[(0, M.Z)((0, I.getOS)())].release_phase,
    };
}
function W(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (
        (null != r || null != i) &&
        ((V[t] = {
            nonce: n,
            locations: r,
            source: i,
        }),
        !0)
    );
}
function K(e, t) {
    let n = V[e];
    if (null != n && n.nonce === t) return delete V[e], n;
}
function z(e, t) {
    setTimeout(() => K(e, t), Z);
}
function q(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    W({
        applicationId: t,
        nonce: n,
        locations: r,
        source: null != i ? i : void 0,
    });
}
async function X(e) {
    var t;
    let { applicationId: n, location: r, instanceId: i } = e,
        o = C.ZP.getEmbeddedActivityDurationMs(r.id, n),
        s = m.default.getSessionId();
    null != i &&
        null != s &&
        (await a.tn.post({
            url: U.ANM.ACTIVITY_LEAVE(n, r.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = F[n],
        c = (0, x.p)(r),
        u = (0, x.j)(r),
        d = g.Z.getChannel(c),
        f = y.default.getCurrentUser();
    if (null == l || null == f) return;
    let _ = C.ZP.getShelfActivities(u),
        h = (0, N.Z)({
            applicationId: n,
            activityConfigs: _,
        }),
        { releasePhase: E } = Y(h),
        b = p.Z.getRawThermalState();
    O.default.track(U.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: c,
        guild_id: u,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: n,
        duration_ms: o,
        user_premium_tier: f.premiumType,
        raw_thermal_state: b,
        release_phase: E,
        shelf_rank: null == h || null == (t = h.activity) ? void 0 : t.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: null == d ? void 0 : d.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: r.kind,
    }),
        O.default.track(U.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: c,
            guild_id: u,
            application_id: n,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: b,
            duration_ms: o,
            embedded_activity_location_kind: r.kind,
        }),
        delete F[n];
}
function Q(e) {
    var t, n;
    let {
            applicationId: r,
            isFirstActivityInChannel: a,
            isStart: o,
            participants: l,
            embeddedActivity: c,
            location: u,
            inviterUserId: f,
        } = e,
        h = m.default.getId(),
        b = l.find((e) => e.userId === h),
        v = (0, x.p)(u),
        I = (0, x.j)(u),
        A = g.Z.getChannel(v);
    if ((o && null != A && A.isPrivate() && a && null == b && s.Z.selectParticipant(A.id, null), null == b)) return;
    let R = E.Z.getMediaSessionId(),
        P = c.compositeInstanceId,
        D = null == R && (null == A ? void 0 : A.isVocal()) === !0 && (null == A ? void 0 : A.isPrivate()) === !1;
    if (null == P || D) return;
    let w = (0, i.Z)(),
        L = "location" in c ? 2 : 1,
        M = y.default.getCurrentUser();
    if (null == M) return;
    let j = C.ZP.getShelfActivities(I),
        k = S.Z.getState().shelfOrder,
        G = (0, N.Z)({
            applicationId: r,
            activityConfigs: j,
        }),
        B = 1 + k.findIndex((e) => e === r),
        { releasePhase: Z } = Y(G),
        H = p.Z.getRawThermalState(),
        W = null != R ? [R] : [],
        K = {
            activitySessionId: P,
            activityUserSessionId: w,
            launchId: c.launchId,
            mediaSessionIds: W,
            activitiesInfraVersion: L,
        };
    F[r] = K;
    let z = V[r];
    (0, T.Ew)(b.nonce) || b.nonce === (null == z ? void 0 : z.nonce) || (z = void 0),
        O.default.track(U.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: v,
            guild_id: I,
            media_session_id: W[0],
            activity_session_id: P,
            application_id: r,
            location_stack: null == z ? void 0 : z.locations,
            user_premium_tier: M.premiumType,
            raw_thermal_state: H,
            n_participants: null != A ? _.Z.getUserParticipantCount(A.id) : null,
            is_activity_start: o,
            release_phase: Z,
            shelf_rank: null == G || null == (t = G.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activity_user_session_id: w,
            channel_type: null == A ? void 0 : A.type,
            source: null == z ? void 0 : z.source,
            command_context_type: null != A ? (0, d.Vh)(A, r) : null,
            invite_inviter_id: f,
            interaction_id: null == z ? void 0 : z.interactionId,
            embedded_activity_location_kind: u.kind,
        }),
        O.default.track(U.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == z ? void 0 : z.locations,
            channel_id: v,
            channel_type: null == A ? void 0 : A.type,
            guild_id: I,
            application_id: r,
            instance_id: c.launchId,
            initial_media_session_id: W[0],
            activity_user_session_id: w,
            raw_thermal_state: H,
            is_activity_start: o,
            shelf_rank: null == G || null == (n = G.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activities_infra_version: L,
            embedded_activity_location_kind: u.kind,
        });
}
function J(e) {
    return F[e];
}
class $ extends c.Z {
    _initialize() {
        b.Z.addChangeListener(this.handleSelectedChannelUpdate),
            v.S.subscribe(U.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v.S.subscribe(U.CkL.OPEN_EMBEDDED_ACTIVITY, Q),
            o.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
            o.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.Z.subscribe("EMBEDDED_ACTIVITY_CLOSE", X),
            o.Z.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            o.Z.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            o.Z.subscribe("CALL_DELETE", this.handleCallDelete),
            o.Z.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            o.Z.subscribe("GUILD_DELETE", this.handleGuildDelete),
            o.Z.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            o.Z.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            o.Z.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            o.Z.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            o.Z.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    _terminate() {
        b.Z.removeChangeListener(this.handleSelectedChannelUpdate),
            v.S.unsubscribe(U.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v.S.unsubscribe(U.CkL.OPEN_EMBEDDED_ACTIVITY, Q),
            o.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
            o.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.Z.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", X),
            o.Z.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            o.Z.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            o.Z.unsubscribe("CALL_DELETE", this.handleCallDelete),
            o.Z.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            o.Z.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            o.Z.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            o.Z.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            o.Z.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            o.Z.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            o.Z.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    constructor(...e) {
        super(...e),
            B(this, "handleSelectedChannelUpdate", () => {
                let e = b.Z.getVoiceChannelId();
                for (let { location: t, applicationId: n } of C.ZP.getSelfEmbeddedActivities().values()) {
                    let r = (0, x.p)(t);
                    null != r &&
                        (0, k.Z)(r) &&
                        r !== e &&
                        this.leaveActivity({
                            location: t,
                            applicationId: n,
                        });
                }
                if (null != e) {
                    let t = C.ZP.getEmbeddedActivitiesForChannel(e),
                        n = m.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = (0, x.p)(e.location),
                                n = C.ZP.getSelfEmbeddedActivityForChannel(t);
                            null == n
                                ? this.leaveActivity({
                                      location: e.location,
                                      applicationId: e.applicationId,
                                  })
                                : null == r &&
                                  this.hidePIPEmbed({
                                      location: n.location,
                                      applicationId: n.applicationId,
                                  });
                        }
                    });
                }
                r = null != e ? e : void 0;
            }),
            B(this, "handleActivityWebViewRelease", () => {
                this.releaseWebView();
            }),
            B(this, "handleActivityLaunchSuccess", (e) => {
                let { nonce: t, applicationId: n } = e;
                z(n, t), (0, R.n9)() && this.showDevShelfOverrideEnabled();
            }),
            B(this, "handleActivityLaunchFail", async (e) => {
                let { error: t, nonce: n, channelId: r, guildId: i, applicationId: a, isStart: o, locationKind: s } = e,
                    l = K(a, n),
                    c = await (0, L.k)(t, a);
                this.showLaunchErrorModal(c.message);
                let u = g.Z.getChannel(r),
                    d = p.Z.getRawThermalState();
                O.default.track(U.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: r,
                    guild_id: null != i ? i : null == u ? void 0 : u.getGuildId(),
                    application_id: a,
                    raw_thermal_state: d,
                    is_activity_start: o,
                    channel_type: null == u ? void 0 : u.type,
                    location_stack: null == l ? void 0 : l.locations,
                    error_type: c.errorType,
                    error_status: c.errorStatus,
                    error_code: c.errorCode,
                    source: null == l ? void 0 : l.source,
                    embedded_activity_location_kind: s,
                });
            }),
            B(this, "handleActivityLaunchCancel", (e) => {
                let { nonce: t, applicationId: n } = e;
                K(n, t);
            }),
            B(this, "superHandleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, location: t } of C.ZP.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                location: t,
                                applicationId: r,
                            });
                    t.code !== U.$VG.CLOSE_NORMAL &&
                        (O.default.track(U.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: r,
                        }),
                        this.showErrorModal(t, r));
                }
            }),
            B(this, "handleCallDelete", (e) => {
                let { channelId: t } = e,
                    n = b.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            B(this, "handleRTCConnectionState", (e) => {
                if (e.state !== U.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            B(this, "handleCallEnded", (e) => {
                let t = C.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        location: t.location,
                        applicationId: t.applicationId,
                    });
            }),
            B(this, "handleDeferredOpen", async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: o, commandOrigin: s, inviterUserId: l } = e,
                    c = g.Z.getChannel(i);
                if (void 0 === c || (h.tx.has(null == c ? void 0 : c.type) && b.Z.getVoiceChannelId() !== i)) return;
                let u = C.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let d = await f.ZP.fetchApplication(a);
                if (!(0, w.a)()) return void this.showLaunchErrorModal(G.intl.string(G.t.UXoQTp));
                if (!(0, j.Z)(null == d || null == (t = d.embedded_activity_config) ? void 0 : t.supported_platforms))
                    return void this.showLaunchErrorModal(G.intl.string(G.t.uGDCcw));
                let _ = null != (n = null == c ? void 0 : c.getGuildId()) ? n : void 0,
                    { activityConfigs: p, applications: m } = await (0, A.w1)({ guildId: _ });
                if (
                    null ==
                    (0, N.Z)({
                        applicationId: a,
                        activityConfigs: p,
                        applications: m,
                    })
                ) {
                    let e = await (0, A.w1)({
                        guildId: _,
                        force: !0,
                    });
                    (0, N.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications,
                    });
                }
                let E = C.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a);
                (null != (r = null == E ? void 0 : E.userIds.size) ? r : 0) > 0
                    ? await (0, P.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == E ? void 0 : E.launchId,
                          inputApplication: null,
                          analyticsLocations: o,
                          inviterUserId: l,
                      })
                    : await (0, D.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: o,
                          commandOrigin: s,
                          inviterUserId: l,
                      });
            }),
            B(this, "handleGuildDelete", (e) => {
                let { guild: t } = e;
                C.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: n, applicationId: r } = e,
                        i = (0, x.j)(n);
                    t.id === i &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r,
                        });
                });
            }),
            B(this, "handleChannelDelete", (e) => {
                let { channel: t } = e,
                    n = C.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId,
                    });
            }),
            B(this, "handleInteractionQueue", (e) => {
                let { nonce: t, data: n } = e;
                if (null == V[n.applicationId]) {
                    let e;
                    n.interactionType === l.B8.APPLICATION_COMMAND
                        ? (e = [u.Z.INTERACTION_APPLICATION_COMMAND])
                        : n.interactionType === l.B8.MESSAGE_COMPONENT
                          ? (e = [u.Z.INTERACTION_MESSAGE_COMPONENT])
                          : n.interactionType === l.B8.MODAL_SUBMIT && (e = [u.Z.INTERACTION_MODAL_SUBMIT]),
                        W({
                            applicationId: n.applicationId,
                            nonce: t,
                            locations: e,
                        }) && (H[t] = n.applicationId);
                }
            }),
            B(this, "handleInteractionCreate", (e) => {
                let { nonce: t, interactionId: n } = e;
                if (null == t) return;
                let r = H[t];
                if (null == r) return;
                let i = V[r];
                null != i && (i.interactionId = n);
            }),
            B(this, "handleInteractionSuccess", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = H[t];
                null != n && (delete H[t], z(n, t));
            }),
            B(this, "handleInteractionFailure", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = H[t];
                null != n && (delete H[t], K(n, t));
            });
    }
}
