"use strict";
let r;
n.d(t, { A: () => ee, D: () => J });
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
    p = n(655087),
    h = n(95701),
    m = n(961350),
    g = n(734057),
    E = n(383501),
    A = n(309010),
    I = n(287809),
    T = n(954571),
    y = n(203982),
    S = n(723702),
    v = n(240248),
    C = n(918052),
    b = n(795816),
    N = n(933958),
    R = n(692957),
    O = n(956518),
    D = n(281362),
    L = n(956549),
    w = n(170148),
    x = n(907645),
    P = n(969151),
    M = n(847381),
    k = n(166352),
    U = n(108959),
    G = n(448739),
    V = n(859007),
    F = n(652215),
    B = n(985018);
let j = 2e3,
    H = {},
    Y = {},
    W = {};
function K(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, M.A)((0, S.getOS)())].release_phase };
}
function z(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (null != r || null != i) && ((Y[t] = { nonce: n, locations: r, source: i }), !0);
}
function $(e, t) {
    let n = Y[e];
    if (null != n && n.nonce === t) return delete Y[e], n;
}
function q(e, t) {
    setTimeout(() => $(e, t), j);
}
function Z(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    z({ applicationId: t, nonce: n, locations: r, source: i ?? void 0 });
}
async function Q(e) {
    let { applicationId: t, location: n, instanceId: r } = e,
        i = N.Ay.getEmbeddedActivityDurationMs(n.id, t),
        s = m.default.getSessionId();
    null != r &&
        null != s &&
        (await a.Bo.post({
            url: F.Rsh.ACTIVITY_LEAVE(t, n.id, r),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let o = H[t],
        l = (0, P.H)(n),
        u = (0, P.D)(n),
        c = g.A.getChannel(l),
        d = I.default.getCurrentUser();
    if (null == o || null == d) return;
    let _ = N.Ay.getShelfActivities(u),
        f = (0, R.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: h } = K(f),
        E = p.A.getRawThermalState();
    T.default.track(F.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: l,
        guild_id: u,
        media_session_id: o.mediaSessionIds[0],
        activity_session_id: o.activitySessionId,
        application_id: t,
        duration_ms: i,
        user_premium_tier: d.premiumType,
        raw_thermal_state: E,
        release_phase: h,
        shelf_rank: f?.activity?.shelf_rank,
        activity_user_session_id: o.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: o.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        T.default.track(F.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: l,
            guild_id: u,
            application_id: t,
            instance_ids: null != o.launchId ? [o.launchId] : void 0,
            media_session_ids: o.mediaSessionIds,
            activity_user_session_id: o.activityUserSessionId,
            raw_thermal_state: E,
            duration_ms: i,
            embedded_activity_location_kind: n.kind,
        }),
        delete H[t];
}
function X(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: r,
        participants: a,
        embeddedActivity: s,
        location: l,
        inviterUserId: u,
    } = e;
    if (((0, G.Q)(), (0, V.y)({ applicationId: t }))) return;
    let c = m.default.getId(),
        _ = a.find((e) => e.userId === c),
        h = (0, P.H)(l),
        A = (0, P.D)(l),
        y = g.A.getChannel(h);
    if ((r && null != y && y.isPrivate() && n && null == _ && o.A.selectParticipant(y.id, null), null == _)) return;
    let S = E.A.getMediaSessionId(),
        b = s.compositeInstanceId,
        O = null == S && y?.isVocal() === !0 && y?.isPrivate() === !1;
    if (null == b || O) return;
    let D = (0, i.A)(),
        L = "location" in s ? 2 : 1,
        w = I.default.getCurrentUser();
    if (null == w) return;
    let x = N.Ay.getShelfActivities(A),
        M = C.A.getState().shelfOrder,
        k = (0, R.A)({ applicationId: t, activityConfigs: x }),
        U = 1 + M.findIndex((e) => e === t),
        { releasePhase: B } = K(k),
        j = p.A.getRawThermalState(),
        W = null != S ? [S] : [],
        z = {
            activitySessionId: b,
            activityUserSessionId: D,
            launchId: s.launchId,
            mediaSessionIds: W,
            activitiesInfraVersion: L,
        };
    H[t] = z;
    let $ = Y[t];
    (0, v.uJ)(_.nonce) || _.nonce === $?.nonce || ($ = void 0),
        T.default.track(F.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: h,
            guild_id: A,
            media_session_id: W[0],
            activity_session_id: b,
            application_id: t,
            location_stack: $?.locations,
            user_premium_tier: w.premiumType,
            raw_thermal_state: j,
            n_participants: null != y ? f.A.getUserParticipantCount(y.id) : null,
            is_activity_start: r,
            release_phase: B,
            shelf_rank: k?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activity_user_session_id: D,
            channel_type: y?.type,
            source: $?.source,
            command_context_type: null != y ? (0, d.ud)(y, t) : null,
            invite_inviter_id: u,
            interaction_id: $?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        T.default.track(F.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: $?.locations,
            channel_id: h,
            channel_type: y?.type,
            guild_id: A,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: W[0],
            activity_user_session_id: D,
            raw_thermal_state: j,
            is_activity_start: r,
            shelf_rank: k?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activities_infra_version: L,
            embedded_activity_location_kind: l.kind,
        });
}
function J(e) {
    return H[e];
}
class ee extends u.A {
    _initialize() {
        A.A.addChangeListener(this.handleSelectedChannelUpdate),
            y._.subscribe(F.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            y._.subscribe(F.jej.OPEN_EMBEDDED_ACTIVITY, X),
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
        A.A.removeChangeListener(this.handleSelectedChannelUpdate),
            y._.unsubscribe(F.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            y._.unsubscribe(F.jej.OPEN_EMBEDDED_ACTIVITY, X),
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
        let e = A.A.getVoiceChannelId();
        for (let { location: t, applicationId: n } of N.Ay.getSelfEmbeddedActivities().values()) {
            let r = (0, P.H)(t);
            null != r && (0, U.A)(r) && r !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = N.Ay.getEmbeddedActivitiesForChannel(e),
                n = m.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, P.H)(e.location),
                        n = N.Ay.getSelfEmbeddedActivityForChannel(t);
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
        q(n, t), (0, O.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: r, guildId: i, applicationId: a, isStart: s, locationKind: o } = e,
            l = $(a, n),
            u = await (0, x.f)(t, a);
        this.showLaunchErrorModal(u.message);
        let c = g.A.getChannel(r),
            d = p.A.getRawThermalState();
        T.default.track(F.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
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
        $(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            r = n.id;
        if (null != r && null != t) {
            for (let { applicationId: e, location: t } of N.Ay.getSelfEmbeddedActivities().values())
                e === r && this.leaveActivity({ location: t, applicationId: r });
            t.code !== F.YI$.CLOSE_NORMAL &&
                (T.default.track(F.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: r,
                }),
                this.showErrorModal(t, r));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = A.A.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== F.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = N.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: r, commandOrigin: i, inviterUserId: a } = e,
            s = g.A.getChannel(t);
        if (void 0 === s || (h.OU.has(s?.type) && A.A.getVoiceChannelId() !== t)) return;
        let o = N.Ay.getSelfEmbeddedActivityForChannel(t);
        if (o?.applicationId === n) return;
        let l = await _.Ay.fetchApplication(n);
        if (!(0, w.A)()) return void this.showLaunchErrorModal(B.intl.string(B.t.UXoQTp));
        if (!(0, k.A)(l?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(B.intl.string(B.t.uGDCcw));
        let u = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: d } = await (0, b.LV)({ guildId: u });
        if (null == (0, R.A)({ applicationId: n, activityConfigs: c, applications: d })) {
            let e = await (0, b.LV)({ guildId: u, force: !0 });
            (0, R.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let f = N.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (f?.userIds.size ?? 0) > 0
            ? await (0, D.E)({
                  channelId: t,
                  applicationId: n,
                  launchId: f?.launchId,
                  inputApplication: null,
                  analyticsLocations: r,
                  inviterUserId: a,
              })
            : await (0, L.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: r,
                  commandOrigin: i,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        N.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: r } = e,
                i = (0, P.D)(n);
            t.id === i && this.leaveActivity({ location: n, applicationId: r });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = N.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == Y[n.applicationId]) {
            let e;
            n.interactionType === l.G4.APPLICATION_COMMAND
                ? (e = [c.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === l.G4.MESSAGE_COMPONENT
                  ? (e = [c.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === l.G4.MODAL_SUBMIT && (e = [c.A.INTERACTION_MODAL_SUBMIT]),
                z({ applicationId: n.applicationId, nonce: t, locations: e }) && (W[t] = n.applicationId);
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let r = W[t];
        if (null == r) return;
        let i = Y[r];
        null != i && (i.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = W[t];
        null != n && (delete W[t], q(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = W[t];
        null != n && (delete W[t], $(n, t));
    };
}
