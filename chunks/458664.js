let r;
n.d(t, {
    A: () => et,
    D: () => ee,
}),
    n(896048);
var i = n(835245),
    a = n(562465),
    o = n(73153),
    s = n(367513),
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
    y = n(309010),
    b = n(287809),
    O = n(954571),
    v = n(203982),
    A = n(723702),
    I = n(240248),
    S = n(918052),
    T = n(795816),
    C = n(933958),
    N = n(692957),
    w = n(956518),
    R = n(281362),
    P = n(956549),
    D = n(170148),
    L = n(907645),
    x = n(969151),
    M = n(847381),
    j = n(166352),
    k = n(108959),
    U = n(448739),
    G = n(859007),
    F = n(652215),
    V = n(985018);

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
let H = 2e3,
    Y = {},
    W = {},
    K = {};

function z(e) {
    var t;
    return {
        releasePhase:
            null == e || null == (t = e.activity)
                ? void 0
                : t.client_platform_config[(0, M.A)((0, A.getOS)())].release_phase,
    };
}

function q(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (
        (null != r || null != i) &&
        ((W[t] = {
            nonce: n,
            locations: r,
            source: i,
        }),
        !0)
    );
}

function Z(e, t) {
    let n = W[e];
    if (null != n && n.nonce === t) return delete W[e], n;
}

function Q(e, t) {
    setTimeout(() => Z(e, t), H);
}

function X(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    q({
        applicationId: t,
        nonce: n,
        locations: r,
        source: null != i ? i : void 0,
    });
}
async function J(e) {
    var t;
    let { applicationId: n, location: r, instanceId: i } = e,
        o = C.Ay.getEmbeddedActivityDurationMs(r.id, n),
        s = m.default.getSessionId();
    null != i &&
        null != s &&
        (await a.Bo.post({
            url: F.Rsh.ACTIVITY_LEAVE(n, r.id, i),
            body: {
                session_id: s,
            },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = Y[n],
        c = (0, x.H)(r),
        u = (0, x.D)(r),
        d = g.A.getChannel(c),
        f = b.default.getCurrentUser();
    if (null == l || null == f) return;
    let p = C.Ay.getShelfActivities(u),
        h = (0, N.A)({
            applicationId: n,
            activityConfigs: p,
        }),
        { releasePhase: E } = z(h),
        y = _.A.getRawThermalState();
    O.default.track(F.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: c,
        guild_id: u,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: n,
        duration_ms: o,
        user_premium_tier: f.premiumType,
        raw_thermal_state: y,
        release_phase: E,
        shelf_rank: null == h || null == (t = h.activity) ? void 0 : t.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: null == d ? void 0 : d.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: r.kind,
    }),
        O.default.track(F.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: c,
            guild_id: u,
            application_id: n,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: y,
            duration_ms: o,
            embedded_activity_location_kind: r.kind,
        }),
        delete Y[n];
}

function $(e) {
    var t, n;
    let {
        applicationId: r,
        isFirstActivityInChannel: a,
        isStart: o,
        participants: l,
        embeddedActivity: c,
        location: u,
        inviterUserId: f,
    } = e;
    if (
        ((0, U.Q)(),
        (0, G.y)({
            applicationId: r,
        }))
    )
        return;
    let h = m.default.getId(),
        y = l.find((e) => e.userId === h),
        v = (0, x.H)(u),
        A = (0, x.D)(u),
        T = g.A.getChannel(v);
    if ((o && null != T && T.isPrivate() && a && null == y && s.A.selectParticipant(T.id, null), null == y)) return;
    let w = E.A.getMediaSessionId(),
        R = c.compositeInstanceId,
        P = null == w && (null == T ? void 0 : T.isVocal()) === !0 && (null == T ? void 0 : T.isPrivate()) === !1;
    if (null == R || P) return;
    let D = (0, i.A)(),
        L = "location" in c ? 2 : 1,
        M = b.default.getCurrentUser();
    if (null == M) return;
    let j = C.Ay.getShelfActivities(A),
        k = S.A.getState().shelfOrder,
        V = (0, N.A)({
            applicationId: r,
            activityConfigs: j,
        }),
        B = 1 + k.findIndex((e) => e === r),
        { releasePhase: H } = z(V),
        K = _.A.getRawThermalState(),
        q = null != w ? [w] : [],
        Z = {
            activitySessionId: R,
            activityUserSessionId: D,
            launchId: c.launchId,
            mediaSessionIds: q,
            activitiesInfraVersion: L,
        };
    Y[r] = Z;
    let Q = W[r];
    (0, I.uJ)(y.nonce) || y.nonce === (null == Q ? void 0 : Q.nonce) || (Q = void 0),
        O.default.track(F.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: v,
            guild_id: A,
            media_session_id: q[0],
            activity_session_id: R,
            application_id: r,
            location_stack: null == Q ? void 0 : Q.locations,
            user_premium_tier: M.premiumType,
            raw_thermal_state: K,
            n_participants: null != T ? p.A.getUserParticipantCount(T.id) : null,
            is_activity_start: o,
            release_phase: H,
            shelf_rank: null == V || null == (t = V.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activity_user_session_id: D,
            channel_type: null == T ? void 0 : T.type,
            source: null == Q ? void 0 : Q.source,
            command_context_type: null != T ? (0, d.ud)(T, r) : null,
            invite_inviter_id: f,
            interaction_id: null == Q ? void 0 : Q.interactionId,
            embedded_activity_location_kind: u.kind,
        }),
        O.default.track(F.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == Q ? void 0 : Q.locations,
            channel_id: v,
            channel_type: null == T ? void 0 : T.type,
            guild_id: A,
            application_id: r,
            instance_id: c.launchId,
            initial_media_session_id: q[0],
            activity_user_session_id: D,
            raw_thermal_state: K,
            is_activity_start: o,
            shelf_rank: null == V || null == (n = V.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activities_infra_version: L,
            embedded_activity_location_kind: u.kind,
        });
}

function ee(e) {
    return Y[e];
}
class et extends c.A {
    _initialize() {
        y.A.addChangeListener(this.handleSelectedChannelUpdate),
            v._.subscribe(F.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v._.subscribe(F.jej.OPEN_EMBEDDED_ACTIVITY, $),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", X),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", J),
            o.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            o.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            o.h.subscribe("CALL_DELETE", this.handleCallDelete),
            o.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            o.h.subscribe("GUILD_DELETE", this.handleGuildDelete),
            o.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            o.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            o.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            o.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            o.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    _terminate() {
        y.A.removeChangeListener(this.handleSelectedChannelUpdate),
            v._.unsubscribe(F.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v._.unsubscribe(F.jej.OPEN_EMBEDDED_ACTIVITY, $),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", X),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", J),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            o.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            o.h.unsubscribe("CALL_DELETE", this.handleCallDelete),
            o.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            o.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            o.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            o.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            o.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            o.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            o.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    constructor(...e) {
        super(...e),
            B(this, "handleSelectedChannelUpdate", () => {
                let e = y.A.getVoiceChannelId();
                for (let { location: t, applicationId: n } of C.Ay.getSelfEmbeddedActivities().values()) {
                    let r = (0, x.H)(t);
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
                            let t = (0, x.H)(e.location),
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
            B(this, "handleActivityWebViewRelease", () => {
                this.releaseWebView();
            }),
            B(this, "handleActivityLaunchSuccess", (e) => {
                let { nonce: t, applicationId: n } = e;
                Q(n, t), (0, w.sF)() && this.showDevShelfOverrideEnabled();
            }),
            B(this, "handleActivityLaunchFail", async (e) => {
                let { error: t, nonce: n, channelId: r, guildId: i, applicationId: a, isStart: o, locationKind: s } = e,
                    l = Z(a, n),
                    c = await (0, L.f)(t, a);
                this.showLaunchErrorModal(c.message);
                let u = g.A.getChannel(r),
                    d = _.A.getRawThermalState();
                O.default.track(F.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
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
                Z(n, t);
            }),
            B(this, "superHandleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, location: t } of C.Ay.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                location: t,
                                applicationId: r,
                            });
                    t.code !== F.YI$.CLOSE_NORMAL &&
                        (O.default.track(F.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: r,
                        }),
                        this.showErrorModal(t, r));
                }
            }),
            B(this, "handleCallDelete", (e) => {
                let { channelId: t } = e,
                    n = y.A.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            B(this, "handleRTCConnectionState", (e) => {
                if (e.state !== F.S7L.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            B(this, "handleCallEnded", (e) => {
                let t = C.Ay.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        location: t.location,
                        applicationId: t.applicationId,
                    });
            }),
            B(this, "handleDeferredOpen", async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: o, commandOrigin: s, inviterUserId: l } = e,
                    c = g.A.getChannel(i);
                if (void 0 === c || (h.OU.has(null == c ? void 0 : c.type) && y.A.getVoiceChannelId() !== i)) return;
                let u = C.Ay.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let d = await f.Ay.fetchApplication(a);
                if (!(0, D.A)()) return void this.showLaunchErrorModal(V.intl.string(V.t.UXoQTp));
                if (!(0, j.A)(null == d || null == (r = d.embedded_activity_config) ? void 0 : r.supported_platforms))
                    return void this.showLaunchErrorModal(V.intl.string(V.t.uGDCcw));
                let p = null != (t = null == c ? void 0 : c.getGuildId()) ? t : void 0,
                    { activityConfigs: _, applications: m } = await (0, T.LV)({
                        guildId: p,
                    });
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
                    ? await (0, R.E)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == E ? void 0 : E.launchId,
                          inputApplication: null,
                          analyticsLocations: o,
                          inviterUserId: l,
                      })
                    : await (0, P.A)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: o,
                          commandOrigin: s,
                          inviterUserId: l,
                      });
            }),
            B(this, "handleGuildDelete", (e) => {
                let { guild: t } = e;
                C.Ay.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: n, applicationId: r } = e,
                        i = (0, x.D)(n);
                    t.id === i &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r,
                        });
                });
            }),
            B(this, "handleChannelDelete", (e) => {
                let { channel: t } = e,
                    n = C.Ay.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId,
                    });
            }),
            B(this, "handleInteractionQueue", (e) => {
                let { nonce: t, data: n } = e;
                if (null == W[n.applicationId]) {
                    let e;
                    n.interactionType === l.G4.APPLICATION_COMMAND
                        ? (e = [u.A.INTERACTION_APPLICATION_COMMAND])
                        : n.interactionType === l.G4.MESSAGE_COMPONENT
                          ? (e = [u.A.INTERACTION_MESSAGE_COMPONENT])
                          : n.interactionType === l.G4.MODAL_SUBMIT && (e = [u.A.INTERACTION_MODAL_SUBMIT]),
                        q({
                            applicationId: n.applicationId,
                            nonce: t,
                            locations: e,
                        }) && (K[t] = n.applicationId);
                }
            }),
            B(this, "handleInteractionCreate", (e) => {
                let { nonce: t, interactionId: n } = e;
                if (null == t) return;
                let r = K[t];
                if (null == r) return;
                let i = W[r];
                null != i && (i.interactionId = n);
            }),
            B(this, "handleInteractionSuccess", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = K[t];
                null != n && (delete K[t], Q(n, t));
            }),
            B(this, "handleInteractionFailure", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = K[t];
                null != n && (delete K[t], Z(n, t));
            });
    }
}
