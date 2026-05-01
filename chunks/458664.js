let i;
n.d(t, { A: () => J, D: () => X });
var a = n(132500),
    r = n(636537),
    s = n(228366),
    l = n(367513),
    o = n(155718),
    d = n(272355),
    c = n(793574),
    _ = n(240591),
    E = n(627363),
    u = n(313961),
    A = n(655087),
    I = n(95701),
    T = n(495544),
    h = n(734057),
    S = n(763827),
    N = n(309010),
    f = n(287809),
    p = n(954571),
    m = n(625494),
    O = n(723702),
    C = n(240248),
    R = n(918052),
    g = n(795816),
    L = n(933958),
    D = n(692957),
    b = n(956518),
    M = n(281362),
    P = n(956549),
    U = n(170148),
    v = n(907645),
    y = n(969151),
    G = n(847381),
    w = n(166352),
    x = n(108959),
    V = n(582776),
    B = n(859007),
    F = n(652215),
    k = n(985018);
let H = {},
    j = {},
    Y = {};
function W(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, G.A)((0, O.getOS)())].release_phase };
}
function K(e) {
    let { applicationId: t, nonce: n, locations: i, source: a } = e;
    return (null != i || null != a) && ((j[t] = { nonce: n, locations: i, source: a }), !0);
}
function $(e, t) {
    let n = j[e];
    if (null != n && n.nonce === t) return delete j[e], n;
}
function Z(e, t) {
    setTimeout(() => $(e, t), 2e3);
}
function q(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: a } = e;
    K({ applicationId: t, nonce: n, locations: i, source: a ?? void 0 });
}
async function Q(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        a = L.Ay.getEmbeddedActivityDurationMs(n.id, t),
        s = T.default.getSessionId();
    null != i &&
        null != s &&
        (await r.Bo.post({
            url: F.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = H[t],
        o = (0, y.H)(n),
        d = (0, y.D)(n),
        c = h.A.getChannel(o),
        _ = f.default.getCurrentUser();
    if (null == l || null == _) return;
    let E = L.Ay.getShelfActivities(d),
        u = (0, D.A)({ applicationId: t, activityConfigs: E }),
        { releasePhase: I } = W(u),
        S = A.A.getRawThermalState();
    p.default.track(F.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: o,
        guild_id: d,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: t,
        duration_ms: a,
        user_premium_tier: _.premiumType,
        raw_thermal_state: S,
        release_phase: I,
        shelf_rank: u?.activity?.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        p.default.track(F.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: o,
            guild_id: d,
            application_id: t,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: S,
            duration_ms: a,
            embedded_activity_location_kind: n.kind,
        }),
        delete H[t];
}
function z(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: i,
        participants: r,
        embeddedActivity: s,
        location: o,
        inviterUserId: d,
    } = e;
    if (((0, V.Q)(), (0, B.y)({ applicationId: t }))) return;
    let c = T.default.getId(),
        E = r.find((e) => e.userId === c),
        I = (0, y.H)(o),
        N = (0, y.D)(o),
        m = h.A.getChannel(I);
    if ((i && null != m && m.isPrivate() && n && null == E && l.A.selectParticipant(m.id, null), null == E)) return;
    let O = S.A.getMediaSessionId(),
        g = s.compositeInstanceId,
        b = null == O && m?.isVocal() === !0 && m?.isPrivate() === !1;
    if (null == g || b) return;
    let M = (0, a.A)(),
        P = "location" in s ? 2 : 1,
        U = f.default.getCurrentUser();
    if (null == U) return;
    let v = L.Ay.getShelfActivities(N),
        G = R.A.getState().shelfOrder,
        w = (0, D.A)({ applicationId: t, activityConfigs: v }),
        x = 1 + G.findIndex((e) => e === t),
        { releasePhase: k } = W(w),
        Y = A.A.getRawThermalState(),
        K = null != O ? [O] : [],
        $ = {
            activitySessionId: g,
            activityUserSessionId: M,
            launchId: s.launchId,
            mediaSessionIds: K,
            activitiesInfraVersion: P,
        };
    H[t] = $;
    let Z = j[t];
    (0, C.uJ)(E.nonce) || E.nonce === Z?.nonce || (Z = void 0),
        p.default.track(F.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: I,
            guild_id: N,
            media_session_id: K[0],
            activity_session_id: g,
            application_id: t,
            location_stack: Z?.locations,
            user_premium_tier: U.premiumType,
            raw_thermal_state: Y,
            n_participants: null != m ? u.A.getUserParticipantCount(m.id) : null,
            is_activity_start: i,
            release_phase: k,
            shelf_rank: w?.activity?.shelf_rank,
            shelf_sorted_rank: x > 0 ? x : null,
            activity_user_session_id: M,
            channel_type: m?.type,
            source: Z?.source,
            command_context_type: null != m ? (0, _.ud)(m, t) : null,
            invite_inviter_id: d,
            interaction_id: Z?.interactionId,
            embedded_activity_location_kind: o.kind,
        }),
        p.default.track(F.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: Z?.locations,
            channel_id: I,
            channel_type: m?.type,
            guild_id: N,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: K[0],
            activity_user_session_id: M,
            raw_thermal_state: Y,
            is_activity_start: i,
            shelf_rank: w?.activity?.shelf_rank,
            shelf_sorted_rank: x > 0 ? x : null,
            activities_infra_version: P,
            embedded_activity_location_kind: o.kind,
        });
}
function X(e) {
    return H[e];
}
class J extends d.A {
    _initialize() {
        N.A.addChangeListener(this.handleSelectedChannelUpdate),
            m._.subscribe(F.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            m._.subscribe(F.jej.OPEN_EMBEDDED_ACTIVITY, z),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
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
        N.A.removeChangeListener(this.handleSelectedChannelUpdate),
            m._.unsubscribe(F.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            m._.unsubscribe(F.jej.OPEN_EMBEDDED_ACTIVITY, z),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q),
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
        let e = N.A.getVoiceChannelId();
        for (let { location: t, applicationId: n } of L.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, y.H)(t);
            null != i && (0, x.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = L.Ay.getEmbeddedActivitiesForChannel(e),
                n = T.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, y.H)(e.location),
                        n = L.Ay.getSelfEmbeddedActivityForChannel(t);
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
        Z(n, t), (0, b.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: a, applicationId: r, isStart: s, locationKind: l } = e,
            o = $(r, n),
            d = await (0, v.f)(t, r);
        this.showLaunchErrorModal(d.message);
        let c = h.A.getChannel(i),
            _ = A.A.getRawThermalState();
        p.default.track(F.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
            channel_id: i,
            guild_id: a ?? c?.getGuildId(),
            application_id: r,
            raw_thermal_state: _,
            is_activity_start: s,
            channel_type: c?.type,
            location_stack: o?.locations,
            error_type: d.errorType,
            error_status: d.errorStatus,
            error_code: d.errorCode,
            source: o?.source,
            embedded_activity_location_kind: l,
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
            for (let { applicationId: e, location: t } of L.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== F.YI$.CLOSE_NORMAL &&
                (p.default.track(F.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showErrorModal(t, i));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = N.A.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== F.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = L.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: a, inviterUserId: r } = e,
            s = h.A.getChannel(t);
        if (void 0 === s || (I.OU.has(s?.type) && N.A.getVoiceChannelId() !== t)) return;
        let l = L.Ay.getSelfEmbeddedActivityForChannel(t);
        if (l?.applicationId === n) return;
        let o = await E.Ay.fetchApplication(n);
        if (!(0, U.A)()) return void this.showLaunchErrorModal(k.intl.string(k.t.UXoQTp));
        if (!(0, w.A)(o?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(k.intl.string(k.t.uGDCcw));
        let d = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: _ } = await (0, g.LV)({ guildId: d });
        if (null == (0, D.A)({ applicationId: n, activityConfigs: c, applications: _ })) {
            let e = await (0, g.LV)({ guildId: d, force: !0 });
            (0, D.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let u = L.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (u?.userIds.size ?? 0) > 0
            ? await (0, M.E)({
                  channelId: t,
                  applicationId: n,
                  launchId: u?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: r,
              })
            : await (0, P.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: a,
                  inviterUserId: r,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        L.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                a = (0, y.D)(n);
            t.id === a && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = L.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == j[n.applicationId]) {
            let e;
            n.interactionType === o.G4.APPLICATION_COMMAND
                ? (e = [c.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === o.G4.MESSAGE_COMPONENT
                  ? (e = [c.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === o.G4.MODAL_SUBMIT && (e = [c.A.INTERACTION_MODAL_SUBMIT]),
                K({ applicationId: n.applicationId, nonce: t, locations: e }) && (Y[t] = n.applicationId);
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let i = Y[t];
        if (null == i) return;
        let a = j[i];
        null != a && (a.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = Y[t];
        null != n && (delete Y[t], Z(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = Y[t];
        null != n && (delete Y[t], $(n, t));
    };
}
