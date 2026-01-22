let r;
n.d(t, {
    A: () => ee,
    D: () => J,
}),
    n(896048);
var i = n(835245),
    a = n(562465),
    s = n(73153),
    o = n(367513),
    l = n(155718),
    c = n(272355),
    u = n(793574),
    d = n(240591),
    f = n(627363),
    p = n(313961),
    _ = n(655087),
    h = n(95701),
    m = n(961350),
    g = n(734057),
    E = n(383501),
    b = n(309010),
    y = n(287809),
    O = n(954571),
    A = n(203982),
    v = n(723702),
    S = n(240248),
    I = n(918052),
    T = n(795816),
    C = n(933958),
    N = n(692957),
    R = n(956518),
    w = n(281362),
    P = n(956549),
    D = n(170148),
    x = n(907645),
    L = n(969151),
    j = n(847381),
    M = n(166352),
    k = n(108959),
    U = n(859007),
    G = n(652215),
    V = n(985018);
function F(e, t, n) {
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
let B = 2000,
    H = {},
    Y = {},
    W = {};
function K(e) {
    var t;
    return {
        releasePhase:
            null == e || null == (t = e.activity)
                ? void 0
                : t.client_platform_config[(0, j.A)((0, v.getOS)())].release_phase,
    };
}
function z(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (
        (null != r || null != i) &&
        ((Y[t] = {
            nonce: n,
            locations: r,
            source: i,
        }),
        !0)
    );
}
function q(e, t) {
    let n = Y[e];
    if (null != n && n.nonce === t) return delete Y[e], n;
}
function X(e, t) {
    setTimeout(() => q(e, t), B);
}
function Z(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    z({
        applicationId: t,
        nonce: n,
        locations: r,
        source: null != i ? i : void 0,
    });
}
async function Q(e) {
    var t;
    let { applicationId: n, location: r, instanceId: i } = e,
        s = C.Ay.getEmbeddedActivityDurationMs(r.id, n),
        o = m.default.getSessionId();
    null != i &&
        null != o &&
        (await a.Bo.post({
            url: G.Rsh.ACTIVITY_LEAVE(n, r.id, i),
            body: { session_id: o },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = H[n],
        c = (0, L.H)(r),
        u = (0, L.D)(r),
        d = g.A.getChannel(c),
        f = y.default.getCurrentUser();
    if (null == l || null == f) return;
    let p = C.Ay.getShelfActivities(u),
        h = (0, N.A)({
            applicationId: n,
            activityConfigs: p,
        }),
        { releasePhase: E } = K(h),
        b = _.A.getRawThermalState();
    O.default.track(G.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: c,
        guild_id: u,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: n,
        duration_ms: s,
        user_premium_tier: f.premiumType,
        raw_thermal_state: b,
        release_phase: E,
        shelf_rank: null == h || null == (t = h.activity) ? void 0 : t.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: null == d ? void 0 : d.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: r.kind,
    }),
        O.default.track(G.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: c,
            guild_id: u,
            application_id: n,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: b,
            duration_ms: s,
            embedded_activity_location_kind: r.kind,
        }),
        delete H[n];
}
function $(e) {
    var t, n;
    let {
        applicationId: r,
        isFirstActivityInChannel: a,
        isStart: s,
        participants: l,
        embeddedActivity: c,
        location: u,
        inviterUserId: f,
    } = e;
    if ((0, U.y)({ applicationId: r })) return;
    let h = m.default.getId(),
        b = l.find((e) => e.userId === h),
        A = (0, L.H)(u),
        v = (0, L.D)(u),
        T = g.A.getChannel(A);
    if ((s && null != T && T.isPrivate() && a && null == b && o.A.selectParticipant(T.id, null), null == b)) return;
    let R = E.A.getMediaSessionId(),
        w = c.compositeInstanceId,
        P = null == R && (null == T ? void 0 : T.isVocal()) === !0 && (null == T ? void 0 : T.isPrivate()) === !1;
    if (null == w || P) return;
    let D = (0, i.A)(),
        x = "location" in c ? 2 : 1,
        j = y.default.getCurrentUser();
    if (null == j) return;
    let M = C.Ay.getShelfActivities(v),
        k = I.A.getState().shelfOrder,
        V = (0, N.A)({
            applicationId: r,
            activityConfigs: M,
        }),
        F = 1 + k.findIndex((e) => e === r),
        { releasePhase: B } = K(V),
        W = _.A.getRawThermalState(),
        z = null != R ? [R] : [],
        q = {
            activitySessionId: w,
            activityUserSessionId: D,
            launchId: c.launchId,
            mediaSessionIds: z,
            activitiesInfraVersion: x,
        };
    H[r] = q;
    let X = Y[r];
    (0, S.uJ)(b.nonce) || b.nonce === (null == X ? void 0 : X.nonce) || (X = void 0),
        O.default.track(G.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: A,
            guild_id: v,
            media_session_id: z[0],
            activity_session_id: w,
            application_id: r,
            location_stack: null == X ? void 0 : X.locations,
            user_premium_tier: j.premiumType,
            raw_thermal_state: W,
            n_participants: null != T ? p.A.getUserParticipantCount(T.id) : null,
            is_activity_start: s,
            release_phase: B,
            shelf_rank: null == V || null == (t = V.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activity_user_session_id: D,
            channel_type: null == T ? void 0 : T.type,
            source: null == X ? void 0 : X.source,
            command_context_type: null != T ? (0, d.ud)(T, r) : null,
            invite_inviter_id: f,
            interaction_id: null == X ? void 0 : X.interactionId,
            embedded_activity_location_kind: u.kind,
        }),
        O.default.track(G.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == X ? void 0 : X.locations,
            channel_id: A,
            channel_type: null == T ? void 0 : T.type,
            guild_id: v,
            application_id: r,
            instance_id: c.launchId,
            initial_media_session_id: z[0],
            activity_user_session_id: D,
            raw_thermal_state: W,
            is_activity_start: s,
            shelf_rank: null == V || null == (n = V.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activities_infra_version: x,
            embedded_activity_location_kind: u.kind,
        });
}
function J(e) {
    return H[e];
}
class ee extends c.A {
    _initialize() {
        b.A.addChangeListener(this.handleSelectedChannelUpdate),
            A._.subscribe(G.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            A._.subscribe(G.jej.OPEN_EMBEDDED_ACTIVITY, $),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", Z),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            s.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", Q),
            s.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            s.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            s.h.subscribe("CALL_DELETE", this.handleCallDelete),
            s.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            s.h.subscribe("GUILD_DELETE", this.handleGuildDelete),
            s.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            s.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            s.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            s.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            s.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    _terminate() {
        b.A.removeChangeListener(this.handleSelectedChannelUpdate),
            A._.unsubscribe(G.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            A._.unsubscribe(G.jej.OPEN_EMBEDDED_ACTIVITY, $),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", Z),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", Q),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            s.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            s.h.unsubscribe("CALL_DELETE", this.handleCallDelete),
            s.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            s.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            s.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            s.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            s.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            s.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            s.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    constructor(...e) {
        super(...e),
            F(this, "handleSelectedChannelUpdate", () => {
                let e = b.A.getVoiceChannelId();
                for (let { location: t, applicationId: n } of C.Ay.getSelfEmbeddedActivities().values()) {
                    let r = (0, L.H)(t);
                    null != r &&
                        (0, k.A)(r) &&
                        r !== e &&
                        this.leaveActivity({
                            location: t,
                            applicationId: n,
                        });
                }
                if (null != e) {
                    let t = C.Ay.getEmbeddedActivitiesForChannel(e),
                        n = m.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = (0, L.H)(e.location),
                                n = C.Ay.getSelfEmbeddedActivityForChannel(t);
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
            F(this, "handleActivityWebViewRelease", () => {
                this.releaseWebView();
            }),
            F(this, "handleActivityLaunchSuccess", (e) => {
                let { nonce: t, applicationId: n } = e;
                X(n, t), (0, R.sF)() && this.showDevShelfOverrideEnabled();
            }),
            F(this, "handleActivityLaunchFail", async (e) => {
                let { error: t, nonce: n, channelId: r, guildId: i, applicationId: a, isStart: s, locationKind: o } = e,
                    l = q(a, n),
                    c = await (0, x.f)(t, a);
                this.showLaunchErrorModal(c.message);
                let u = g.A.getChannel(r),
                    d = _.A.getRawThermalState();
                O.default.track(G.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: r,
                    guild_id: null != i ? i : null == u ? void 0 : u.getGuildId(),
                    application_id: a,
                    raw_thermal_state: d,
                    is_activity_start: s,
                    channel_type: null == u ? void 0 : u.type,
                    location_stack: null == l ? void 0 : l.locations,
                    error_type: c.errorType,
                    error_status: c.errorStatus,
                    error_code: c.errorCode,
                    source: null == l ? void 0 : l.source,
                    embedded_activity_location_kind: o,
                });
            }),
            F(this, "handleActivityLaunchCancel", (e) => {
                let { nonce: t, applicationId: n } = e;
                q(n, t);
            }),
            F(this, "superHandleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, location: t } of C.Ay.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                location: t,
                                applicationId: r,
                            });
                    t.code !== G.YI$.CLOSE_NORMAL &&
                        (O.default.track(G.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: r,
                        }),
                        this.showErrorModal(t, r));
                }
            }),
            F(this, "handleCallDelete", (e) => {
                let { channelId: t } = e,
                    n = b.A.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            F(this, "handleRTCConnectionState", (e) => {
                if (e.state !== G.S7L.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            F(this, "handleCallEnded", (e) => {
                let t = C.Ay.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        location: t.location,
                        applicationId: t.applicationId,
                    });
            }),
            F(this, "handleDeferredOpen", async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: s, commandOrigin: o, inviterUserId: l } = e,
                    c = g.A.getChannel(i);
                if (void 0 === c || (h.OU.has(null == c ? void 0 : c.type) && b.A.getVoiceChannelId() !== i)) return;
                let u = C.Ay.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let d = await f.Ay.fetchApplication(a);
                if (!(0, D.A)()) return void this.showLaunchErrorModal(V.intl.string(V.t.UXoQTp));
                if (!(0, M.A)(null == d || null == (r = d.embedded_activity_config) ? void 0 : r.supported_platforms))
                    return void this.showLaunchErrorModal(V.intl.string(V.t.uGDCcw));
                let p = null != (t = null == c ? void 0 : c.getGuildId()) ? t : void 0,
                    { activityConfigs: _, applications: m } = await (0, T.LV)({ guildId: p });
                if (
                    null ==
                    (0, N.A)({
                        applicationId: a,
                        activityConfigs: _,
                        applications: m,
                    })
                ) {
                    let e = await (0, T.LV)({
                        guildId: p,
                        force: !0,
                    });
                    (0, N.A)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications,
                    });
                }
                let E = C.Ay.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a);
                (null != (n = null == E ? void 0 : E.userIds.size) ? n : 0) > 0
                    ? await (0, w.E)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == E ? void 0 : E.launchId,
                          inputApplication: null,
                          analyticsLocations: s,
                          inviterUserId: l,
                      })
                    : await (0, P.A)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: s,
                          commandOrigin: o,
                          inviterUserId: l,
                      });
            }),
            F(this, "handleGuildDelete", (e) => {
                let { guild: t } = e;
                C.Ay.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: n, applicationId: r } = e,
                        i = (0, L.D)(n);
                    t.id === i &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r,
                        });
                });
            }),
            F(this, "handleChannelDelete", (e) => {
                let { channel: t } = e,
                    n = C.Ay.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId,
                    });
            }),
            F(this, "handleInteractionQueue", (e) => {
                let { nonce: t, data: n } = e;
                if (null == Y[n.applicationId]) {
                    let e;
                    n.interactionType === l.G4.APPLICATION_COMMAND
                        ? (e = [u.A.INTERACTION_APPLICATION_COMMAND])
                        : n.interactionType === l.G4.MESSAGE_COMPONENT
                          ? (e = [u.A.INTERACTION_MESSAGE_COMPONENT])
                          : n.interactionType === l.G4.MODAL_SUBMIT && (e = [u.A.INTERACTION_MODAL_SUBMIT]),
                        z({
                            applicationId: n.applicationId,
                            nonce: t,
                            locations: e,
                        }) && (W[t] = n.applicationId);
                }
            }),
            F(this, "handleInteractionCreate", (e) => {
                let { nonce: t, interactionId: n } = e;
                if (null == t) return;
                let r = W[t];
                if (null == r) return;
                let i = Y[r];
                null != i && (i.interactionId = n);
            }),
            F(this, "handleInteractionSuccess", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = W[t];
                null != n && (delete W[t], X(n, t));
            }),
            F(this, "handleInteractionFailure", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = W[t];
                null != n && (delete W[t], q(n, t));
            });
    }
}
