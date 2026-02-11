"use strict";
let r;
n.d(t, { A: () => et, D: () => ee });
var i = n(835245),
    a = n(562465),
    s = n(73153),
    o = n(367513),
    l = n(155718),
    u = n(272355),
    c = n(793574),
    d = n(240591),
    _ = n(627363),
    f = n(313961),
    h = n(655087),
    p = n(95701),
    g = n(961350),
    E = n(734057),
    A = n(383501),
    I = n(309010),
    T = n(287809),
    y = n(954571),
    S = n(203982),
    v = n(723702),
    C = n(240248),
    b = n(918052),
    N = n(795816),
    R = n(933958),
    O = n(692957),
    D = n(956518),
    L = n(281362),
    w = n(956549),
    x = n(170148),
    P = n(907645),
    M = n(969151),
    k = n(847381),
    U = n(166352),
    G = n(108959),
    F = n(448739),
    V = n(859007),
    B = n(652215),
    j = n(985018);
let H = 2e3,
    Y = {},
    W = {},
    K = {};
function $(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, k.A)((0, v.getOS)())].release_phase };
}
function z(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (null != r || null != i) && ((W[t] = { nonce: n, locations: r, source: i }), !0);
}
function q(e, t) {
    let n = W[e];
    if (null != n && n.nonce === t) return delete W[e], n;
}
function X(e, t) {
    setTimeout(() => q(e, t), H);
}
function Z(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    z({ applicationId: t, nonce: n, locations: r, source: i ?? void 0 });
}
async function Q(e) {
    let { applicationId: t, location: n, instanceId: r } = e,
        i = R.Ay.getEmbeddedActivityDurationMs(n.id, t),
        s = g.default.getSessionId();
    null != r &&
        null != s &&
        (await a.Bo.post({
            url: B.Rsh.ACTIVITY_LEAVE(t, n.id, r),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let o = Y[t],
        l = (0, M.H)(n),
        u = (0, M.D)(n),
        c = E.A.getChannel(l),
        d = T.default.getCurrentUser();
    if (null == o || null == d) return;
    let _ = R.Ay.getShelfActivities(u),
        f = (0, O.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: p } = $(f),
        A = h.A.getRawThermalState();
    y.default.track(B.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: l,
        guild_id: u,
        media_session_id: o.mediaSessionIds[0],
        activity_session_id: o.activitySessionId,
        application_id: t,
        duration_ms: i,
        user_premium_tier: d.premiumType,
        raw_thermal_state: A,
        release_phase: p,
        shelf_rank: f?.activity?.shelf_rank,
        activity_user_session_id: o.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: o.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        y.default.track(B.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: l,
            guild_id: u,
            application_id: t,
            instance_ids: null != o.launchId ? [o.launchId] : void 0,
            media_session_ids: o.mediaSessionIds,
            activity_user_session_id: o.activityUserSessionId,
            raw_thermal_state: A,
            duration_ms: i,
            embedded_activity_location_kind: n.kind,
        }),
        delete Y[t];
}
function J(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: r,
        participants: a,
        embeddedActivity: s,
        location: l,
        inviterUserId: u,
    } = e;
    if (((0, F.Q)(), (0, V.y)({ applicationId: t }))) return;
    let c = g.default.getId(),
        _ = a.find((e) => e.userId === c),
        p = (0, M.H)(l),
        I = (0, M.D)(l),
        S = E.A.getChannel(p);
    if ((r && null != S && S.isPrivate() && n && null == _ && o.A.selectParticipant(S.id, null), null == _)) return;
    let v = A.A.getMediaSessionId(),
        N = s.compositeInstanceId,
        D = null == v && S?.isVocal() === !0 && S?.isPrivate() === !1;
    if (null == N || D) return;
    let L = (0, i.A)(),
        w = "location" in s ? 2 : 1,
        x = T.default.getCurrentUser();
    if (null == x) return;
    let P = R.Ay.getShelfActivities(I),
        k = b.A.getState().shelfOrder,
        U = (0, O.A)({ applicationId: t, activityConfigs: P }),
        G = 1 + k.findIndex((e) => e === t),
        { releasePhase: j } = $(U),
        H = h.A.getRawThermalState(),
        K = null != v ? [v] : [],
        z = {
            activitySessionId: N,
            activityUserSessionId: L,
            launchId: s.launchId,
            mediaSessionIds: K,
            activitiesInfraVersion: w,
        };
    Y[t] = z;
    let q = W[t];
    (0, C.uJ)(_.nonce) || _.nonce === q?.nonce || (q = void 0),
        y.default.track(B.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: p,
            guild_id: I,
            media_session_id: K[0],
            activity_session_id: N,
            application_id: t,
            location_stack: q?.locations,
            user_premium_tier: x.premiumType,
            raw_thermal_state: H,
            n_participants: null != S ? f.A.getUserParticipantCount(S.id) : null,
            is_activity_start: r,
            release_phase: j,
            shelf_rank: U?.activity?.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: L,
            channel_type: S?.type,
            source: q?.source,
            command_context_type: null != S ? (0, d.ud)(S, t) : null,
            invite_inviter_id: u,
            interaction_id: q?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        y.default.track(B.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: q?.locations,
            channel_id: p,
            channel_type: S?.type,
            guild_id: I,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: K[0],
            activity_user_session_id: L,
            raw_thermal_state: H,
            is_activity_start: r,
            shelf_rank: U?.activity?.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: w,
            embedded_activity_location_kind: l.kind,
        });
}
function ee(e) {
    return Y[e];
}
class et extends u.A {
    _initialize() {
        I.A.addChangeListener(this.handleSelectedChannelUpdate),
            S._.subscribe(B.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.subscribe(B.jej.OPEN_EMBEDDED_ACTIVITY, J),
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
        I.A.removeChangeListener(this.handleSelectedChannelUpdate),
            S._.unsubscribe(B.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.unsubscribe(B.jej.OPEN_EMBEDDED_ACTIVITY, J),
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
    handleSelectedChannelUpdate = () => {
        let e = I.A.getVoiceChannelId();
        for (let { location: t, applicationId: n } of R.Ay.getSelfEmbeddedActivities().values()) {
            let r = (0, M.H)(t);
            null != r && (0, G.A)(r) && r !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = R.Ay.getEmbeddedActivitiesForChannel(e),
                n = g.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, M.H)(e.location),
                        n = R.Ay.getSelfEmbeddedActivityForChannel(t);
                    null == n
                        ? this.leaveActivity({ location: e.location, applicationId: e.applicationId })
                        : null == r && this.hidePIPEmbed({ location: n.location, applicationId: n.applicationId });
                }
            });
        }
        r = e ?? void 0;
    };
    handleActivityWebViewRelease = () => {
        this.releaseWebView();
    };
    handleActivityLaunchSuccess = (e) => {
        let { nonce: t, applicationId: n } = e;
        X(n, t), (0, D.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: r, guildId: i, applicationId: a, isStart: s, locationKind: o } = e,
            l = q(a, n),
            u = await (0, P.f)(t, a);
        this.showLaunchErrorModal(u.message);
        let c = E.A.getChannel(r),
            d = h.A.getRawThermalState();
        y.default.track(B.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
            channel_id: r,
            guild_id: i ?? c?.getGuildId(),
            application_id: a,
            raw_thermal_state: d,
            is_activity_start: s,
            channel_type: c?.type,
            location_stack: l?.locations,
            error_type: u.errorType,
            error_status: u.errorStatus,
            error_code: u.errorCode,
            source: l?.source,
            embedded_activity_location_kind: o,
        });
    };
    handleActivityLaunchCancel = (e) => {
        let { nonce: t, applicationId: n } = e;
        q(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            r = n.id;
        if (null != r && null != t) {
            for (let { applicationId: e, location: t } of R.Ay.getSelfEmbeddedActivities().values())
                e === r && this.leaveActivity({ location: t, applicationId: r });
            t.code !== B.YI$.CLOSE_NORMAL &&
                (y.default.track(B.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: r,
                }),
                this.showErrorModal(t, r));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = I.A.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== B.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = R.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: r, commandOrigin: i, inviterUserId: a } = e,
            s = E.A.getChannel(t);
        if (void 0 === s || (p.OU.has(s?.type) && I.A.getVoiceChannelId() !== t)) return;
        let o = R.Ay.getSelfEmbeddedActivityForChannel(t);
        if (o?.applicationId === n) return;
        let l = await _.Ay.fetchApplication(n);
        if (!(0, x.A)()) return void this.showLaunchErrorModal(j.intl.string(j.t.UXoQTp));
        if (!(0, U.A)(l?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(j.intl.string(j.t.uGDCcw));
        let u = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: d } = await (0, N.LV)({ guildId: u });
        if (null == (0, O.A)({ applicationId: n, activityConfigs: c, applications: d })) {
            let e = await (0, N.LV)({ guildId: u, force: !0 });
            (0, O.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let f = R.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (f?.userIds.size ?? 0) > 0
            ? await (0, L.E)({
                  channelId: t,
                  applicationId: n,
                  launchId: f?.launchId,
                  inputApplication: null,
                  analyticsLocations: r,
                  inviterUserId: a,
              })
            : await (0, w.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: r,
                  commandOrigin: i,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        R.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: r } = e,
                i = (0, M.D)(n);
            t.id === i && this.leaveActivity({ location: n, applicationId: r });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = R.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == W[n.applicationId]) {
            let e;
            n.interactionType === l.G4.APPLICATION_COMMAND
                ? (e = [c.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === l.G4.MESSAGE_COMPONENT
                  ? (e = [c.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === l.G4.MODAL_SUBMIT && (e = [c.A.INTERACTION_MODAL_SUBMIT]),
                z({ applicationId: n.applicationId, nonce: t, locations: e }) && (K[t] = n.applicationId);
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let r = K[t];
        if (null == r) return;
        let i = W[r];
        null != i && (i.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = K[t];
        null != n && (delete K[t], X(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = K[t];
        null != n && (delete K[t], q(n, t));
    };
}
