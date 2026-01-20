let r;
n.d(t, {
    U: () => $,
    Z: () => ee,
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
    p = n(358221),
    _ = n(75060),
    h = n(131704),
    m = n(314897),
    g = n(592125),
    E = n(19780),
    b = n(944486),
    y = n(594174),
    O = n(626135),
    v = n(585483),
    S = n(358085),
    I = n(624138),
    T = n(24933),
    C = n(566620),
    A = n(317381),
    N = n(969345),
    P = n(155268),
    w = n(148720),
    R = n(122613),
    D = n(790920),
    x = n(201567),
    L = n(16609),
    j = n(761122),
    M = n(983695),
    k = n(917107),
    U = n(784976),
    G = n(981631),
    Z = n(388032);
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
    V = {},
    H = {},
    Y = {};
function W(e) {
    var t;
    return {
        releasePhase:
            null == e || null == (t = e.activity)
                ? void 0
                : t.client_platform_config[(0, j.Z)((0, S.getOS)())].release_phase,
    };
}
function K(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (
        (null != r || null != i) &&
        ((H[t] = {
            nonce: n,
            locations: r,
            source: i,
        }),
        !0)
    );
}
function z(e, t) {
    let n = H[e];
    if (null != n && n.nonce === t) return delete H[e], n;
}
function q(e, t) {
    setTimeout(() => z(e, t), B);
}
function Q(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    K({
        applicationId: t,
        nonce: n,
        locations: r,
        source: null != i ? i : void 0,
    });
}
async function X(e) {
    var t;
    let { applicationId: n, location: r, instanceId: i } = e,
        o = A.ZP.getEmbeddedActivityDurationMs(r.id, n),
        s = m.default.getSessionId();
    null != i &&
        null != s &&
        (await a.tn.post({
            url: G.ANM.ACTIVITY_LEAVE(n, r.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = V[n],
        c = (0, L.p)(r),
        u = (0, L.j)(r),
        d = g.Z.getChannel(c),
        f = y.default.getCurrentUser();
    if (null == l || null == f) return;
    let p = A.ZP.getShelfActivities(u),
        h = (0, N.Z)({
            applicationId: n,
            activityConfigs: p,
        }),
        { releasePhase: E } = W(h),
        b = _.Z.getRawThermalState();
    O.default.track(G.rMx.ACTIVITY_SESSION_LEFT, {
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
        O.default.track(G.rMx.ACTIVITY_IFRAME_UNMOUNT, {
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
        delete V[n];
}
function J(e) {
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
    if ((0, U.R)({ applicationId: r })) return;
    let h = m.default.getId(),
        b = l.find((e) => e.userId === h),
        v = (0, L.p)(u),
        S = (0, L.j)(u),
        C = g.Z.getChannel(v);
    if ((o && null != C && C.isPrivate() && a && null == b && s.Z.selectParticipant(C.id, null), null == b)) return;
    let P = E.Z.getMediaSessionId(),
        w = c.compositeInstanceId,
        R = null == P && (null == C ? void 0 : C.isVocal()) === !0 && (null == C ? void 0 : C.isPrivate()) === !1;
    if (null == w || R) return;
    let D = (0, i.Z)(),
        x = "location" in c ? 2 : 1,
        j = y.default.getCurrentUser();
    if (null == j) return;
    let M = A.ZP.getShelfActivities(S),
        k = T.Z.getState().shelfOrder,
        Z = (0, N.Z)({
            applicationId: r,
            activityConfigs: M,
        }),
        F = 1 + k.findIndex((e) => e === r),
        { releasePhase: B } = W(Z),
        Y = _.Z.getRawThermalState(),
        K = null != P ? [P] : [],
        z = {
            activitySessionId: w,
            activityUserSessionId: D,
            launchId: c.launchId,
            mediaSessionIds: K,
            activitiesInfraVersion: x,
        };
    V[r] = z;
    let q = H[r];
    (0, I.Ew)(b.nonce) || b.nonce === (null == q ? void 0 : q.nonce) || (q = void 0),
        O.default.track(G.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: v,
            guild_id: S,
            media_session_id: K[0],
            activity_session_id: w,
            application_id: r,
            location_stack: null == q ? void 0 : q.locations,
            user_premium_tier: j.premiumType,
            raw_thermal_state: Y,
            n_participants: null != C ? p.Z.getUserParticipantCount(C.id) : null,
            is_activity_start: o,
            release_phase: B,
            shelf_rank: null == Z || null == (t = Z.activity) ? void 0 : t.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activity_user_session_id: D,
            channel_type: null == C ? void 0 : C.type,
            source: null == q ? void 0 : q.source,
            command_context_type: null != C ? (0, d.Vh)(C, r) : null,
            invite_inviter_id: f,
            interaction_id: null == q ? void 0 : q.interactionId,
            embedded_activity_location_kind: u.kind,
        }),
        O.default.track(G.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == q ? void 0 : q.locations,
            channel_id: v,
            channel_type: null == C ? void 0 : C.type,
            guild_id: S,
            application_id: r,
            instance_id: c.launchId,
            initial_media_session_id: K[0],
            activity_user_session_id: D,
            raw_thermal_state: Y,
            is_activity_start: o,
            shelf_rank: null == Z || null == (n = Z.activity) ? void 0 : n.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activities_infra_version: x,
            embedded_activity_location_kind: u.kind,
        });
}
function $(e) {
    return V[e];
}
class ee extends c.Z {
    _initialize() {
        b.Z.addChangeListener(this.handleSelectedChannelUpdate),
            v.S.subscribe(G.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v.S.subscribe(G.CkL.OPEN_EMBEDDED_ACTIVITY, J),
            o.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", Q),
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
            v.S.unsubscribe(G.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v.S.unsubscribe(G.CkL.OPEN_EMBEDDED_ACTIVITY, J),
            o.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", Q),
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
            F(this, "handleSelectedChannelUpdate", () => {
                let e = b.Z.getVoiceChannelId();
                for (let { location: t, applicationId: n } of A.ZP.getSelfEmbeddedActivities().values()) {
                    let r = (0, L.p)(t);
                    null != r &&
                        (0, k.Z)(r) &&
                        r !== e &&
                        this.leaveActivity({
                            location: t,
                            applicationId: n,
                        });
                }
                if (null != e) {
                    let t = A.ZP.getEmbeddedActivitiesForChannel(e),
                        n = m.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = (0, L.p)(e.location),
                                n = A.ZP.getSelfEmbeddedActivityForChannel(t);
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
                q(n, t), (0, P.n9)() && this.showDevShelfOverrideEnabled();
            }),
            F(this, "handleActivityLaunchFail", async (e) => {
                let { error: t, nonce: n, channelId: r, guildId: i, applicationId: a, isStart: o, locationKind: s } = e,
                    l = z(a, n),
                    c = await (0, x.k)(t, a);
                this.showLaunchErrorModal(c.message);
                let u = g.Z.getChannel(r),
                    d = _.Z.getRawThermalState();
                O.default.track(G.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
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
            F(this, "handleActivityLaunchCancel", (e) => {
                let { nonce: t, applicationId: n } = e;
                z(n, t);
            }),
            F(this, "superHandleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, location: t } of A.ZP.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                location: t,
                                applicationId: r,
                            });
                    t.code !== G.$VG.CLOSE_NORMAL &&
                        (O.default.track(G.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: r,
                        }),
                        this.showErrorModal(t, r));
                }
            }),
            F(this, "handleCallDelete", (e) => {
                let { channelId: t } = e,
                    n = b.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            F(this, "handleRTCConnectionState", (e) => {
                if (e.state !== G.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            F(this, "handleCallEnded", (e) => {
                let t = A.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        location: t.location,
                        applicationId: t.applicationId,
                    });
            }),
            F(this, "handleDeferredOpen", async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: o, commandOrigin: s, inviterUserId: l } = e,
                    c = g.Z.getChannel(i);
                if (void 0 === c || (h.tx.has(null == c ? void 0 : c.type) && b.Z.getVoiceChannelId() !== i)) return;
                let u = A.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let d = await f.ZP.fetchApplication(a);
                if (!(0, D.a)()) return void this.showLaunchErrorModal(Z.intl.string(Z.t.UXoQTp));
                if (!(0, M.Z)(null == d || null == (t = d.embedded_activity_config) ? void 0 : t.supported_platforms))
                    return void this.showLaunchErrorModal(Z.intl.string(Z.t.uGDCcw));
                let p = null != (n = null == c ? void 0 : c.getGuildId()) ? n : void 0,
                    { activityConfigs: _, applications: m } = await (0, C.w1)({ guildId: p });
                if (
                    null ==
                    (0, N.Z)({
                        applicationId: a,
                        activityConfigs: _,
                        applications: m,
                    })
                ) {
                    let e = await (0, C.w1)({
                        guildId: p,
                        force: !0,
                    });
                    (0, N.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications,
                    });
                }
                let E = A.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a);
                (null != (r = null == E ? void 0 : E.userIds.size) ? r : 0) > 0
                    ? await (0, w.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == E ? void 0 : E.launchId,
                          inputApplication: null,
                          analyticsLocations: o,
                          inviterUserId: l,
                      })
                    : await (0, R.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: o,
                          commandOrigin: s,
                          inviterUserId: l,
                      });
            }),
            F(this, "handleGuildDelete", (e) => {
                let { guild: t } = e;
                A.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: n, applicationId: r } = e,
                        i = (0, L.j)(n);
                    t.id === i &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r,
                        });
                });
            }),
            F(this, "handleChannelDelete", (e) => {
                let { channel: t } = e,
                    n = A.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId,
                    });
            }),
            F(this, "handleInteractionQueue", (e) => {
                let { nonce: t, data: n } = e;
                if (null == H[n.applicationId]) {
                    let e;
                    n.interactionType === l.B8.APPLICATION_COMMAND
                        ? (e = [u.Z.INTERACTION_APPLICATION_COMMAND])
                        : n.interactionType === l.B8.MESSAGE_COMPONENT
                          ? (e = [u.Z.INTERACTION_MESSAGE_COMPONENT])
                          : n.interactionType === l.B8.MODAL_SUBMIT && (e = [u.Z.INTERACTION_MODAL_SUBMIT]),
                        K({
                            applicationId: n.applicationId,
                            nonce: t,
                            locations: e,
                        }) && (Y[t] = n.applicationId);
                }
            }),
            F(this, "handleInteractionCreate", (e) => {
                let { nonce: t, interactionId: n } = e;
                if (null == t) return;
                let r = Y[t];
                if (null == r) return;
                let i = H[r];
                null != i && (i.interactionId = n);
            }),
            F(this, "handleInteractionSuccess", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = Y[t];
                null != n && (delete Y[t], q(n, t));
            }),
            F(this, "handleInteractionFailure", (e) => {
                let { nonce: t } = e;
                if (null == t) return;
                let n = Y[t];
                null != n && (delete Y[t], z(n, t));
            });
    }
}
