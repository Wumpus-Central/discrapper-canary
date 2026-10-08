(n.d(t, { AT: () => L, DV: () => M, Pd: () => b, al: () => y, iG: () => U, ms: () => P, vJ: () => R }), n(321073));
var i = n(132500),
    r = n(344351),
    a = n(731738),
    s = n(240591),
    l = n(587895),
    o = n(20015),
    d = n(198052),
    c = n(655087),
    u = n(807393),
    _ = n(859703),
    E = n(639214),
    A = n(734057),
    h = n(763827),
    f = n(287809),
    I = n(174459),
    p = n(723702),
    T = n(918052),
    m = n(933958),
    g = n(692957),
    S = n(950803),
    N = n(847381),
    C = n(400115),
    O = n(652215);
let R = {},
    L = {};
function y(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, N.A)((0, p.getOS)())].release_phase };
}
function D(e, t) {
    let n = (0, C.S)(e),
        i = t ?? n;
    if (null == i) return;
    let r = L[e];
    return {
        ...i,
        analyticsLocations: i.analyticsLocations ?? r?.locations,
        source: i.source ?? r?.source,
        interactionId: i.interactionId ?? r?.interactionId,
    };
}
function v(e, t) {
    let n = l.A.getApplication(e);
    if (!(0, o.n)(n, O.gfo.QUEST)) return;
    let i = (0, E.jm)(_.A.quests, e, !0);
    if (i.length > 0) {
        let n = [`application_id:${e}`],
            r = i.find((e) => e.userStatus?.enrolledAt != null)?.id;
        (null != r && n.push(`quest_id:${r}`), u.A.increment({ name: t, tags: n }));
    }
}
function b(e, t) {
    let n = D(e, t);
    if (null == n) return;
    let {
            isStart: l,
            inviterUserId: o,
            channelId: u,
            launchId: _,
            compositeInstanceId: E,
            activitiesInfraVersion: p,
            analyticsLocations: S,
            source: N,
            interactionId: C,
        } = n,
        L = f.default.getCurrentUser();
    if (null == L) return;
    let b = null != u ? A.A.getChannel(u) : null,
        M = n.guildId ?? b?.getGuildId() ?? null,
        P = n.locationKind ?? (null == b ? void 0 : null != M ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL),
        U = h.A.getMediaSessionId(),
        w = null != U ? [U] : [],
        G = (0, i.A)();
    R[e] = {
        activitySessionId: E,
        activityUserSessionId: G,
        launchId: _,
        mediaSessionIds: w,
        activitiesInfraVersion: p,
        connectedSince: Date.now(),
        frameChannelId: u,
        frameGuildId: M,
        frameLocationKind: P,
    };
    let x = m.Ay.getShelfActivities(M),
        k = T.A.getState().shelfOrder,
        F = (0, g.A)({ applicationId: e, activityConfigs: x }),
        B = 1 + k.findIndex((t) => t === e),
        { releasePhase: V } = y(F),
        H = c.A.getRawThermalState();
    (I.default.track(O.HAw.ACTIVITY_SESSION_JOINED, {
        channel_id: u,
        guild_id: M,
        media_session_id: w[0],
        activity_session_id: E,
        application_id: e,
        location_stack: S,
        user_premium_tier: L.premiumType,
        raw_thermal_state: H,
        n_participants: null != b ? d.A.getUserParticipantCount(b.id) : null,
        is_activity_start: l,
        release_phase: V,
        shelf_rank: F?.activity?.shelf_rank,
        shelf_sorted_rank: B > 0 ? B : null,
        activity_user_session_id: G,
        channel_type: b?.type,
        source: N,
        command_context_type: null != b ? (0, s.ud)(b, e) : null,
        invite_inviter_id: o,
        interaction_id: C,
        embedded_activity_location_kind: P,
    }),
        v(e, a.K.FRAME_SESSION_JOIN),
        I.default.track(O.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: S,
            channel_id: u,
            channel_type: b?.type,
            guild_id: M,
            application_id: e,
            instance_id: _,
            initial_media_session_id: w[0],
            activity_user_session_id: G,
            raw_thermal_state: H,
            is_activity_start: l,
            shelf_rank: F?.activity?.shelf_rank,
            shelf_sorted_rank: B > 0 ? B : null,
            activities_infra_version: p,
            embedded_activity_location_kind: P,
        }));
}
function M(e) {
    return R[e];
}
async function P(e, t, n) {
    let i = D(e, n);
    if (null == i) return;
    let { isStart: r, channelId: s, guildId: l, locationKind: o, analyticsLocations: d, source: u } = i,
        _ = null != s ? A.A.getChannel(s) : null,
        E = await (0, S.f)(t, e);
    (I.default.track(O.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: s,
        guild_id: l ?? _?.getGuildId(),
        application_id: e,
        raw_thermal_state: c.A.getRawThermalState(),
        is_activity_start: r,
        channel_type: _?.type,
        location_stack: d,
        error_type: E.errorType,
        error_status: E.errorStatus,
        error_code: E.errorCode,
        source: u,
        embedded_activity_location_kind: o,
    }),
        v(e, a.K.FRAME_SESSION_JOIN_FAILED));
}
function U(e) {
    let t = R[e],
        n = f.default.getCurrentUser();
    if (null == t || null == n) return;
    let i = t.frameChannelId ?? null,
        r = t.frameGuildId ?? null,
        a = null != i ? A.A.getChannel(i) : null,
        s = m.Ay.getShelfActivities(r),
        l = (0, g.A)({ applicationId: e, activityConfigs: s }),
        { releasePhase: o } = y(l),
        d = c.A.getRawThermalState(),
        u = null != t.connectedSince ? Date.now() - t.connectedSince : null;
    (I.default.track(O.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: i,
        guild_id: r,
        media_session_id: t.mediaSessionIds[0],
        activity_session_id: t.activitySessionId,
        application_id: e,
        duration_ms: u,
        user_premium_tier: n.premiumType,
        raw_thermal_state: d,
        release_phase: o,
        shelf_rank: l?.activity?.shelf_rank,
        activity_user_session_id: t.activityUserSessionId,
        channel_type: a?.type,
        media_session_ids: t.mediaSessionIds,
        embedded_activity_location_kind: t.frameLocationKind,
    }),
        I.default.track(O.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: i,
            guild_id: r,
            application_id: e,
            instance_ids: null != t.launchId ? [t.launchId] : void 0,
            media_session_ids: t.mediaSessionIds,
            activity_user_session_id: t.activityUserSessionId,
            raw_thermal_state: d,
            duration_ms: u,
            embedded_activity_location_kind: t.frameLocationKind,
        }),
        delete R[e]);
}
