let i;
n.d(t, { A: () => Z, D: () => J });
var r = n(132500),
    a = n(636537),
    s = n(228366),
    _ = n(367513),
    l = n(155718),
    o = n(272355),
    E = n(793574),
    d = n(240591),
    c = n(627363),
    u = n(313961),
    I = n(655087),
    A = n(95701),
    T = n(495544),
    S = n(734057),
    N = n(763827),
    O = n(309010),
    R = n(287809),
    f = n(954571),
    C = n(625494),
    p = n(723702),
    m = n(240248),
    L = n(918052),
    D = n(795816),
    h = n(933958),
    g = n(692957),
    b = n(956518),
    U = n(281362),
    P = n(956549),
    M = n(170148),
    y = n(907645),
    G = n(969151),
    v = n(847381),
    B = n(166352),
    w = n(108959),
    F = n(582776),
    V = n(859007),
    H = n(652215),
    k = n(985018);
let x = {},
    W = {},
    Y = {};
function j(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, v.A)((0, p.getOS)())].release_phase };
}
function K(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (null != i || null != r) && ((W[t] = { nonce: n, locations: i, source: r }), !0);
}
function $(e, t) {
    let n = W[e];
    if (null != n && n.nonce === t) return delete W[e], n;
}
function Q(e, t) {
    setTimeout(() => $(e, t), 2e3);
}
function q(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    K({ applicationId: t, nonce: n, locations: i, source: r ?? void 0 });
}
async function X(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        r = h.Ay.getEmbeddedActivityDurationMs(n.id, t),
        s = T.default.getSessionId();
    null != i &&
        null != s &&
        (await a.Bo.post({
            url: H.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let _ = x[t],
        l = (0, G.H)(n),
        o = (0, G.D)(n),
        E = S.A.getChannel(l),
        d = R.default.getCurrentUser();
    if (null == _ || null == d) return;
    let c = h.Ay.getShelfActivities(o),
        u = (0, g.A)({ applicationId: t, activityConfigs: c }),
        { releasePhase: A } = j(u),
        N = I.A.getRawThermalState();
    f.default.track(H.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: l,
        guild_id: o,
        media_session_id: _.mediaSessionIds[0],
        activity_session_id: _.activitySessionId,
        application_id: t,
        duration_ms: r,
        user_premium_tier: d.premiumType,
        raw_thermal_state: N,
        release_phase: A,
        shelf_rank: u?.activity?.shelf_rank,
        activity_user_session_id: _.activityUserSessionId,
        channel_type: E?.type,
        media_session_ids: _.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        f.default.track(H.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: l,
            guild_id: o,
            application_id: t,
            instance_ids: null != _.launchId ? [_.launchId] : void 0,
            media_session_ids: _.mediaSessionIds,
            activity_user_session_id: _.activityUserSessionId,
            raw_thermal_state: N,
            duration_ms: r,
            embedded_activity_location_kind: n.kind,
        }),
        delete x[t];
}
function z(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: i,
        participants: a,
        embeddedActivity: s,
        location: l,
        inviterUserId: o,
    } = e;
    if (((0, F.Q)(), (0, V.y)({ applicationId: t }))) return;
    let E = T.default.getId(),
        c = a.find((e) => e.userId === E),
        A = (0, G.H)(l),
        O = (0, G.D)(l),
        C = S.A.getChannel(A);
    if ((i && null != C && C.isPrivate() && n && null == c && _.A.selectParticipant(C.id, null), null == c)) return;
    let p = N.A.getMediaSessionId(),
        D = s.compositeInstanceId,
        b = null == p && C?.isVocal() === !0 && C?.isPrivate() === !1;
    if (null == D || b) return;
    let U = (0, r.A)(),
        P = "location" in s ? 2 : 1,
        M = R.default.getCurrentUser();
    if (null == M) return;
    let y = h.Ay.getShelfActivities(O),
        v = L.A.getState().shelfOrder,
        B = (0, g.A)({ applicationId: t, activityConfigs: y }),
        w = 1 + v.findIndex((e) => e === t),
        { releasePhase: k } = j(B),
        Y = I.A.getRawThermalState(),
        K = null != p ? [p] : [],
        $ = {
            activitySessionId: D,
            activityUserSessionId: U,
            launchId: s.launchId,
            mediaSessionIds: K,
            activitiesInfraVersion: P,
        };
    x[t] = $;
    let Q = W[t];
    (0, m.uJ)(c.nonce) || c.nonce === Q?.nonce || (Q = void 0),
        f.default.track(H.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: A,
            guild_id: O,
            media_session_id: K[0],
            activity_session_id: D,
            application_id: t,
            location_stack: Q?.locations,
            user_premium_tier: M.premiumType,
            raw_thermal_state: Y,
            n_participants: null != C ? u.A.getUserParticipantCount(C.id) : null,
            is_activity_start: i,
            release_phase: k,
            shelf_rank: B?.activity?.shelf_rank,
            shelf_sorted_rank: w > 0 ? w : null,
            activity_user_session_id: U,
            channel_type: C?.type,
            source: Q?.source,
            command_context_type: null != C ? (0, d.ud)(C, t) : null,
            invite_inviter_id: o,
            interaction_id: Q?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        f.default.track(H.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: Q?.locations,
            channel_id: A,
            channel_type: C?.type,
            guild_id: O,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: K[0],
            activity_user_session_id: U,
            raw_thermal_state: Y,
            is_activity_start: i,
            shelf_rank: B?.activity?.shelf_rank,
            shelf_sorted_rank: w > 0 ? w : null,
            activities_infra_version: P,
            embedded_activity_location_kind: l.kind,
        });
}
function J(e) {
    return x[e];
}
class Z extends o.A {
    _initialize() {
        O.A.addChangeListener(this.handleSelectedChannelUpdate),
            C._.subscribe(H.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            C._.subscribe(H.jej.OPEN_EMBEDDED_ACTIVITY, z),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            s.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", X),
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
        O.A.removeChangeListener(this.handleSelectedChannelUpdate),
            C._.unsubscribe(H.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            C._.unsubscribe(H.jej.OPEN_EMBEDDED_ACTIVITY, z),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", X),
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
        let e = O.A.getVoiceChannelId();
        for (let { location: t, applicationId: n } of h.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, G.H)(t);
            null != i && (0, w.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = h.Ay.getEmbeddedActivitiesForChannel(e),
                n = T.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, G.H)(e.location),
                        n = h.Ay.getSelfEmbeddedActivityForChannel(t);
                    null == n
                        ? this.leaveActivity({ location: e.location, applicationId: e.applicationId })
                        : null == i && this.hidePIPEmbed({ location: n.location, applicationId: n.applicationId });
                }
            });
        }
        i = e ?? void 0;
    };
    handleActivityWebViewRelease = () => {
        this.releaseWebView();
    };
    handleActivityLaunchSuccess = (e) => {
        let { nonce: t, applicationId: n } = e;
        Q(n, t), (0, b.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: a, isStart: s, locationKind: _ } = e,
            l = $(a, n),
            o = await (0, y.f)(t, a);
        this.showLaunchErrorModal(o.message);
        let E = S.A.getChannel(i),
            d = I.A.getRawThermalState();
        f.default.track(H.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
            channel_id: i,
            guild_id: r ?? E?.getGuildId(),
            application_id: a,
            raw_thermal_state: d,
            is_activity_start: s,
            channel_type: E?.type,
            location_stack: l?.locations,
            error_type: o.errorType,
            error_status: o.errorStatus,
            error_code: o.errorCode,
            source: l?.source,
            embedded_activity_location_kind: _,
        });
    };
    handleActivityLaunchCancel = (e) => {
        let { nonce: t, applicationId: n } = e;
        $(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null != i && null != t) {
            for (let { applicationId: e, location: t } of h.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== H.YI$.CLOSE_NORMAL &&
                (f.default.track(H.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showErrorModal(t, i));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = O.A.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== H.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = h.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: r, inviterUserId: a } = e,
            s = S.A.getChannel(t);
        if (void 0 === s || (A.OU.has(s?.type) && O.A.getVoiceChannelId() !== t)) return;
        let _ = h.Ay.getSelfEmbeddedActivityForChannel(t);
        if (_?.applicationId === n) return;
        let l = await c.Ay.fetchApplication(n);
        if (!(0, M.A)()) return void this.showLaunchErrorModal(k.intl.string(k.t.UXoQTp));
        if (!(0, B.A)(l?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(k.intl.string(k.t.uGDCcw));
        let o = s?.getGuildId() ?? void 0,
            { activityConfigs: E, applications: d } = await (0, D.LV)({ guildId: o });
        if (null == (0, g.A)({ applicationId: n, activityConfigs: E, applications: d })) {
            let e = await (0, D.LV)({ guildId: o, force: !0 });
            (0, g.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let u = h.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (u?.userIds.size ?? 0) > 0
            ? await (0, U.E)({
                  channelId: t,
                  applicationId: n,
                  launchId: u?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: a,
              })
            : await (0, P.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: r,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        h.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                r = (0, G.D)(n);
            t.id === r && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = h.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == W[n.applicationId]) {
            let e;
            n.interactionType === l.G4.APPLICATION_COMMAND
                ? (e = [E.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === l.G4.MESSAGE_COMPONENT
                  ? (e = [E.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === l.G4.MODAL_SUBMIT && (e = [E.A.INTERACTION_MODAL_SUBMIT]),
                K({ applicationId: n.applicationId, nonce: t, locations: e }) && (Y[t] = n.applicationId);
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let i = Y[t];
        if (null == i) return;
        let r = W[i];
        null != r && (r.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = Y[t];
        null != n && (delete Y[t], Q(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = Y[t];
        null != n && (delete Y[t], $(n, t));
    };
}
