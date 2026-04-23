"use strict";
let r;
n.d(t, { A: () => J, D: () => Z });
var i = n(835245),
    s = n(562465),
    a = n(73153),
    o = n(367513),
    l = n(155718),
    u = n(272355),
    c = n(793574),
    d = n(240591),
    _ = n(627363),
    f = n(313961),
    p = n(655087),
    h = n(95701),
    E = n(961350),
    m = n(734057),
    g = n(383501),
    A = n(309010),
    I = n(287809),
    T = n(954571),
    S = n(203982),
    y = n(723702),
    N = n(240248),
    v = n(918052),
    C = n(795816),
    O = n(933958),
    R = n(692957),
    b = n(956518),
    D = n(281362),
    L = n(956549),
    w = n(170148),
    M = n(907645),
    P = n(969151),
    x = n(847381),
    k = n(166352),
    U = n(108959),
    G = n(448739),
    F = n(859007),
    V = n(652215),
    B = n(985018);
let H = {},
    j = {},
    Y = {};
function W(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, x.A)((0, y.getOS)())].release_phase };
}
function K(e) {
    let { applicationId: t, nonce: n, locations: r, source: i } = e;
    return (null != r || null != i) && ((j[t] = { nonce: n, locations: r, source: i }), !0);
}
function $(e, t) {
    let n = j[e];
    if (null != n && n.nonce === t) return delete j[e], n;
}
function z(e, t) {
    setTimeout(() => $(e, t), 2e3);
}
function q(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    K({ applicationId: t, nonce: n, locations: r, source: i ?? void 0 });
}
async function X(e) {
    let { applicationId: t, location: n, instanceId: r } = e,
        i = O.Ay.getEmbeddedActivityDurationMs(n.id, t),
        a = E.default.getSessionId();
    null != r &&
        null != a &&
        (await s.Bo.post({
            url: V.Rsh.ACTIVITY_LEAVE(t, n.id, r),
            body: { session_id: a },
            retries: 2,
            rejectWithError: !1,
        }));
    let o = H[t],
        l = (0, P.H)(n),
        u = (0, P.D)(n),
        c = m.A.getChannel(l),
        d = I.default.getCurrentUser();
    if (null == o || null == d) return;
    let _ = O.Ay.getShelfActivities(u),
        f = (0, R.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: h } = W(f),
        g = p.A.getRawThermalState();
    T.default.track(V.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: l,
        guild_id: u,
        media_session_id: o.mediaSessionIds[0],
        activity_session_id: o.activitySessionId,
        application_id: t,
        duration_ms: i,
        user_premium_tier: d.premiumType,
        raw_thermal_state: g,
        release_phase: h,
        shelf_rank: f?.activity?.shelf_rank,
        activity_user_session_id: o.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: o.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        T.default.track(V.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: l,
            guild_id: u,
            application_id: t,
            instance_ids: null != o.launchId ? [o.launchId] : void 0,
            media_session_ids: o.mediaSessionIds,
            activity_user_session_id: o.activityUserSessionId,
            raw_thermal_state: g,
            duration_ms: i,
            embedded_activity_location_kind: n.kind,
        }),
        delete H[t];
}
function Q(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: r,
        participants: s,
        embeddedActivity: a,
        location: l,
        inviterUserId: u,
    } = e;
    if (((0, G.Q)(), (0, F.y)({ applicationId: t }))) return;
    let c = E.default.getId(),
        _ = s.find((e) => e.userId === c),
        h = (0, P.H)(l),
        A = (0, P.D)(l),
        S = m.A.getChannel(h);
    if ((r && null != S && S.isPrivate() && n && null == _ && o.A.selectParticipant(S.id, null), null == _)) return;
    let y = g.A.getMediaSessionId(),
        C = a.compositeInstanceId,
        b = null == y && S?.isVocal() === !0 && S?.isPrivate() === !1;
    if (null == C || b) return;
    let D = (0, i.A)(),
        L = "location" in a ? 2 : 1,
        w = I.default.getCurrentUser();
    if (null == w) return;
    let M = O.Ay.getShelfActivities(A),
        x = v.A.getState().shelfOrder,
        k = (0, R.A)({ applicationId: t, activityConfigs: M }),
        U = 1 + x.findIndex((e) => e === t),
        { releasePhase: B } = W(k),
        Y = p.A.getRawThermalState(),
        K = null != y ? [y] : [],
        $ = {
            activitySessionId: C,
            activityUserSessionId: D,
            launchId: a.launchId,
            mediaSessionIds: K,
            activitiesInfraVersion: L,
        };
    H[t] = $;
    let z = j[t];
    (0, N.uJ)(_.nonce) || _.nonce === z?.nonce || (z = void 0),
        T.default.track(V.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: h,
            guild_id: A,
            media_session_id: K[0],
            activity_session_id: C,
            application_id: t,
            location_stack: z?.locations,
            user_premium_tier: w.premiumType,
            raw_thermal_state: Y,
            n_participants: null != S ? f.A.getUserParticipantCount(S.id) : null,
            is_activity_start: r,
            release_phase: B,
            shelf_rank: k?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activity_user_session_id: D,
            channel_type: S?.type,
            source: z?.source,
            command_context_type: null != S ? (0, d.ud)(S, t) : null,
            invite_inviter_id: u,
            interaction_id: z?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        T.default.track(V.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: z?.locations,
            channel_id: h,
            channel_type: S?.type,
            guild_id: A,
            application_id: t,
            instance_id: a.launchId,
            initial_media_session_id: K[0],
            activity_user_session_id: D,
            raw_thermal_state: Y,
            is_activity_start: r,
            shelf_rank: k?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activities_infra_version: L,
            embedded_activity_location_kind: l.kind,
        });
}
function Z(e) {
    return H[e];
}
class J extends u.A {
    _initialize() {
        A.A.addChangeListener(this.handleSelectedChannelUpdate),
            S._.subscribe(V.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.subscribe(V.jej.OPEN_EMBEDDED_ACTIVITY, Q),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            a.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", X),
            a.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            a.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            a.h.subscribe("CALL_DELETE", this.handleCallDelete),
            a.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            a.h.subscribe("GUILD_DELETE", this.handleGuildDelete),
            a.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            a.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            a.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            a.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            a.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    _terminate() {
        A.A.removeChangeListener(this.handleSelectedChannelUpdate),
            S._.unsubscribe(V.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.unsubscribe(V.jej.OPEN_EMBEDDED_ACTIVITY, Q),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", X),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            a.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            a.h.unsubscribe("CALL_DELETE", this.handleCallDelete),
            a.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            a.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            a.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            a.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            a.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            a.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            a.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    handleSelectedChannelUpdate = () => {
        let e = A.A.getVoiceChannelId();
        for (let { location: t, applicationId: n } of O.Ay.getSelfEmbeddedActivities().values()) {
            let r = (0, P.H)(t);
            null != r && (0, U.A)(r) && r !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = O.Ay.getEmbeddedActivitiesForChannel(e),
                n = E.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, P.H)(e.location),
                        n = O.Ay.getSelfEmbeddedActivityForChannel(t);
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
        z(n, t), (0, b.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: r, guildId: i, applicationId: s, isStart: a, locationKind: o } = e,
            l = $(s, n),
            u = await (0, M.f)(t, s);
        this.showLaunchErrorModal(u.message);
        let c = m.A.getChannel(r),
            d = p.A.getRawThermalState();
        T.default.track(V.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
            channel_id: r,
            guild_id: i ?? c?.getGuildId(),
            application_id: s,
            raw_thermal_state: d,
            is_activity_start: a,
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
            for (let { applicationId: e, location: t } of O.Ay.getSelfEmbeddedActivities().values())
                e === r && this.leaveActivity({ location: t, applicationId: r });
            t.code !== V.YI$.CLOSE_NORMAL &&
                (T.default.track(V.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
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
        if (e.state !== V.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = O.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: r, commandOrigin: i, inviterUserId: s } = e,
            a = m.A.getChannel(t);
        if (void 0 === a || (h.OU.has(a?.type) && A.A.getVoiceChannelId() !== t)) return;
        let o = O.Ay.getSelfEmbeddedActivityForChannel(t);
        if (o?.applicationId === n) return;
        let l = await _.Ay.fetchApplication(n);
        if (!(0, w.A)()) return void this.showLaunchErrorModal(B.intl.string(B.t.UXoQTp));
        if (!(0, k.A)(l?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(B.intl.string(B.t.uGDCcw));
        let u = a?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: d } = await (0, C.LV)({ guildId: u });
        if (null == (0, R.A)({ applicationId: n, activityConfigs: c, applications: d })) {
            let e = await (0, C.LV)({ guildId: u, force: !0 });
            (0, R.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let f = O.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (f?.userIds.size ?? 0) > 0
            ? await (0, D.E)({
                  channelId: t,
                  applicationId: n,
                  launchId: f?.launchId,
                  inputApplication: null,
                  analyticsLocations: r,
                  inviterUserId: s,
              })
            : await (0, L.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: r,
                  commandOrigin: i,
                  inviterUserId: s,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        O.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: r } = e,
                i = (0, P.D)(n);
            t.id === i && this.leaveActivity({ location: n, applicationId: r });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = O.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == j[n.applicationId]) {
            let e;
            n.interactionType === l.G4.APPLICATION_COMMAND
                ? (e = [c.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === l.G4.MESSAGE_COMPONENT
                  ? (e = [c.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === l.G4.MODAL_SUBMIT && (e = [c.A.INTERACTION_MODAL_SUBMIT]),
                K({ applicationId: n.applicationId, nonce: t, locations: e }) && (Y[t] = n.applicationId);
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let r = Y[t];
        if (null == r) return;
        let i = j[r];
        null != i && (i.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = Y[t];
        null != n && (delete Y[t], z(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = Y[t];
        null != n && (delete Y[t], $(n, t));
    };
}
