let i;
r.d(n, {
    U: function () {
        return er;
    },
    Z: function () {
        return ei;
    }
});
var a,
    o = r(47120);
var s = r(772848),
    l = r(544891),
    u = r(570140),
    c = r(475179),
    d = r(911969),
    f = r(317770),
    p = r(100527),
    h = r(807169),
    _ = r(728345),
    m = r(358221),
    g = r(75060),
    E = r(233764),
    v = r(375824),
    y = r(188597),
    b = r(695346),
    I = r(131704),
    T = r(314897),
    S = r(592125),
    A = r(19780),
    C = r(944486),
    N = r(594174),
    R = r(626135),
    O = r(585483),
    D = r(358085),
    L = r(624138),
    x = r(24933),
    w = r(115130),
    P = r(566620),
    M = r(317381),
    k = r(969345),
    U = r(148720),
    B = r(122613),
    G = r(782769),
    Z = r(16609),
    F = r(761122),
    V = r(983695),
    j = r(917107),
    H = r(981631),
    Y = r(388032);
function W(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let K = 2000;
!(function (e) {
    (e[(e.ClientError = 0)] = 'ClientError'), (e[(e.CallbackError = 1)] = 'CallbackError'), (e[(e.ApiError = 2)] = 'ApiError');
})(a || (a = {}));
let z = {},
    q = {},
    Q = {};
function X(e) {
    var n;
    return { releasePhase: null == e ? void 0 : null === (n = e.activity) || void 0 === n ? void 0 : n.client_platform_config[(0, F.Z)((0, D.getOS)())].release_phase };
}
function J(e) {
    let { applicationId: n, nonce: r, locations: i, source: a } = e;
    return (
        (null != i || null != a) &&
        ((q[n] = {
            nonce: r,
            locations: i,
            source: a
        }),
        !0)
    );
}
function $(e, n) {
    let r = q[e];
    if (null != r && r.nonce === n) return delete q[e], r;
}
function ee(e) {
    let { applicationId: n, nonce: r, analyticsLocations: i, source: a } = e;
    J({
        applicationId: n,
        nonce: r,
        locations: i,
        source: null != a ? a : void 0
    });
}
async function et(e) {
    var n, r;
    let { applicationId: i, location: a, instanceId: o } = e,
        s = M.ZP.getEmbeddedActivityDurationMs(a.id, i),
        u = T.default.getSessionId();
    null != o &&
        null != u &&
        (await l.tn.post({
            url: H.ANM.ACTIVITY_LEAVE(i, a.id, o),
            body: { session_id: u },
            retries: 2,
            rejectWithError: !1
        }));
    let c = z[i],
        d = S.Z.getChannel((0, Z.p)(a)),
        f = N.default.getCurrentUser();
    if (null == c || null == d || null == f) return;
    let p = d.getGuildId(),
        h = M.ZP.getShelfActivities(p),
        _ = (0, k.Z)({
            applicationId: i,
            activityConfigs: h
        }),
        { releasePhase: m } = X(_),
        E = g.Z.getRawThermalState();
    R.default.track(H.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: d.id,
        guild_id: p,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: s,
        user_premium_tier: f.premiumType,
        raw_thermal_state: E,
        release_phase: m,
        activity_premium_tier_requirement: null == _ ? void 0 : null === (n = _.activity) || void 0 === n ? void 0 : n.premium_tier_requirement,
        shelf_rank: null == _ ? void 0 : null === (r = _.activity) || void 0 === r ? void 0 : r.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: d.type,
        media_session_ids: c.mediaSessionIds
    }),
        R.default.track(H.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: d.id,
            guild_id: p,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: E,
            duration_ms: s
        }),
        delete z[i];
}
function en(e) {
    var n, r, i;
    let { applicationId: a, isFirstActivityInChannel: o, isStart: l, participants: u, embeddedActivity: d, location: f, inviterUserId: p } = e,
        _ = T.default.getId(),
        E = u.find((e) => e.userId === _),
        v = (0, Z.p)(f),
        y = S.Z.getChannel(v);
    if ((l && null != y && y.isPrivate() && o && null == E && c.Z.selectParticipant(y.id, null), null == E)) return;
    let b = A.Z.getMediaSessionId(),
        I = d.compositeInstanceId,
        C = null == b && (null == y ? void 0 : y.isVocal()) === !0 && (null == y ? void 0 : y.isPrivate()) === !1;
    if (null == I || C) return;
    let O = (0, s.Z)(),
        D = 'location' in d ? 2 : 1,
        w = null == y ? void 0 : y.getGuildId(),
        P = N.default.getCurrentUser();
    if (null == y || null == P) return;
    let U = M.ZP.getShelfActivities(w),
        B = x.Z.getState().shelfOrder,
        G = (0, k.Z)({
            applicationId: a,
            activityConfigs: U
        }),
        F = 1 + B.findIndex((e) => e === a),
        { releasePhase: V } = X(G),
        j = g.Z.getRawThermalState(),
        Y = null != b ? [b] : [],
        W = {
            activitySessionId: I,
            activityUserSessionId: O,
            launchId: d.launchId,
            mediaSessionIds: Y,
            activitiesInfraVersion: D
        };
    z[a] = W;
    let K = q[a];
    !(0, L.Ew)(E.nonce) && E.nonce !== (null == K ? void 0 : K.nonce) && (K = void 0),
        R.default.track(H.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: y.id,
            guild_id: y.getGuildId(),
            media_session_id: Y[0],
            activity_session_id: I,
            application_id: a,
            location_stack: null == K ? void 0 : K.locations,
            user_premium_tier: P.premiumType,
            raw_thermal_state: j,
            n_participants: m.Z.getUserParticipantCount(y.id),
            is_activity_start: l,
            release_phase: V,
            activity_premium_tier_requirement: null == G ? void 0 : null === (n = G.activity) || void 0 === n ? void 0 : n.premium_tier_requirement,
            shelf_rank: null == G ? void 0 : null === (r = G.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activity_user_session_id: O,
            channel_type: y.type,
            source: null == K ? void 0 : K.source,
            command_context_type: (0, h.Vh)(y, a),
            invite_inviter_id: p
        }),
        R.default.track(H.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == K ? void 0 : K.locations,
            channel_id: y.id,
            channel_type: y.type,
            guild_id: y.getGuildId(),
            application_id: a,
            instance_id: d.launchId,
            initial_media_session_id: Y[0],
            activity_user_session_id: O,
            raw_thermal_state: j,
            is_activity_start: l,
            shelf_rank: null == G ? void 0 : null === (i = G.activity) || void 0 === i ? void 0 : i.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activities_infra_version: D
        });
}
function er(e) {
    return z[e];
}
class ei extends f.Z {
    _initialize() {
        C.Z.addChangeListener(this.handleSelectedChannelUpdate), O.S.subscribe(H.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), O.S.subscribe(H.CkL.OPEN_EMBEDDED_ACTIVITY, en), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', ee), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', et), u.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.subscribe('CALL_DELETE', this.handleCallDelete), u.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete), u.Z.subscribe('INTERACTION_QUEUE', this.handleInteractionQueue), u.Z.subscribe('INTERACTION_SUCCESS', this.handleInteractionCompleted), u.Z.subscribe('INTERACTION_FAILURE', this.handleInteractionCompleted);
    }
    _terminate() {
        C.Z.removeChangeListener(this.handleSelectedChannelUpdate), O.S.unsubscribe(H.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), O.S.unsubscribe(H.CkL.OPEN_EMBEDDED_ACTIVITY, en), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', ee), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', et), u.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), u.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete), u.Z.unsubscribe('INTERACTION_QUEUE', this.handleInteractionQueue), u.Z.unsubscribe('INTERACTION_SUCCESS', this.handleInteractionCompleted), u.Z.unsubscribe('INTERACTION_FAILURE', this.handleInteractionCompleted);
    }
    constructor(...e) {
        super(...e),
            W(this, 'handleSelectedChannelUpdate', () => {
                let e = C.Z.getVoiceChannelId();
                for (let { location: n, applicationId: r } of M.ZP.getSelfEmbeddedActivities().values()) {
                    let i = (0, Z.p)(n);
                    null != i &&
                        (0, j.Z)(i) &&
                        i !== e &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r
                        });
                }
                if (null != e) {
                    let n = M.ZP.getEmbeddedActivitiesForChannel(e),
                        r = T.default.getId();
                    n.forEach((e) => {
                        if (e.userIds.has(r)) {
                            let n = (0, Z.p)(e.location),
                                r = M.ZP.getSelfEmbeddedActivityForChannel(n);
                            null == r
                                ? this.leaveActivity({
                                      location: e.location,
                                      applicationId: e.applicationId
                                  })
                                : null == i &&
                                  this.hidePIPEmbed({
                                      location: r.location,
                                      applicationId: r.applicationId
                                  });
                        }
                    });
                }
                i = null != e ? e : void 0;
            }),
            W(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            W(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: n, applicationId: r } = e;
                setTimeout(() => $(r, n), K);
            }),
            W(this, 'handleActivityLaunchFail', async (e) => {
                let n,
                    r,
                    i,
                    { error: a, nonce: o, channelId: s, applicationId: l, isStart: u } = e,
                    c = $(l, o),
                    d = Y.intl.string(Y.t['IOy+Iy']);
                if (a instanceof E.Z) {
                    (n = 0), (i = a.reason);
                    let e = w.Z.getFetchState();
                    switch ((b.Sb.getSetting() && e !== w.O.LOADED && (await (0, P.$h)()), a.reason)) {
                        case E.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            w.Z.inDevModeForApplication(l) && (d = Y.intl.string(Y.t.hXRXf3));
                            break;
                        case E.Z.Reasons.INVALID_CHANNEL:
                            d = Y.intl.string(Y.t.j29zCg);
                    }
                } else if (a instanceof v.Z) {
                    var f;
                    (n = 1), (i = a.reason), (d = null !== (f = (0, y.A0)(a.reason, l)) && void 0 !== f ? f : d);
                } else
                    switch (((n = 2), (r = a.status), (i = a.code), a.code)) {
                        case H.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            d = Y.intl.string(Y.t.Gyzcra);
                            break;
                        case H.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = Y.intl.string(Y.t.zxv7EB);
                            break;
                        case H.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            d = Y.intl.string(Y.t['H+KK6e']);
                            break;
                        case H.evJ.INVALID_PERMISSIONS:
                            d = Y.intl.string(Y.t.hHGrW1);
                            break;
                        case H.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = Y.intl.string(Y.t.j29zCg);
                            break;
                        case H.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = Y.intl.string(Y.t['4WuFRE']);
                            break;
                        case H.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = Y.intl.string(Y.t.RvkXdX);
                            break;
                        case H.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = Y.intl.string(Y.t.uGDCc3);
                    }
                this.showLaunchErrorModal(d);
                let p = S.Z.getChannel(s);
                if (null == p) return;
                let h = p.getGuildId(),
                    _ = g.Z.getRawThermalState();
                R.default.track(H.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: s,
                    guild_id: h,
                    application_id: l,
                    raw_thermal_state: _,
                    is_activity_start: u,
                    channel_type: null == p ? void 0 : p.type,
                    location_stack: null == c ? void 0 : c.locations,
                    error_type: n,
                    error_status: r,
                    error_code: i,
                    source: null == c ? void 0 : c.source
                });
            }),
            W(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: n, application: r } = e,
                    i = r.id;
                if (null != i && null != n) {
                    for (let { applicationId: e, location: n } of M.ZP.getSelfEmbeddedActivities().values())
                        e === i &&
                            this.leaveActivity({
                                location: n,
                                applicationId: i
                            });
                    n.code !== H.$VG.CLOSE_NORMAL && this.showErrorModal(n, i);
                }
            }),
            W(this, 'handleCallDelete', (e) => {
                let { channelId: n } = e,
                    r = C.Z.getVoiceChannelId();
                null != r && r === n && this.handleCallEnded(n);
            }),
            W(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== H.hes.DISCONNECTED) return;
                let n = e.channelId;
                this.handleCallEnded(n);
            }),
            W(this, 'handleCallEnded', (e) => {
                let n = M.ZP.getSelfEmbeddedActivityForChannel(e);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId
                    });
            }),
            W(this, 'handleDeferredOpen', async (e) => {
                var n, r, i;
                let { channelId: a, applicationId: o, analyticsLocations: s, commandOrigin: l, inviterUserId: u } = e,
                    c = S.Z.getChannel(a);
                if (void 0 === c || (I.tx.has(null == c ? void 0 : c.type) && C.Z.getVoiceChannelId() !== a)) return;
                let d = M.ZP.getSelfEmbeddedActivityForChannel(a);
                if ((null == d ? void 0 : d.applicationId) === o) return;
                let f = await _.ZP.fetchApplication(o);
                if (!(0, G.a)(c)) {
                    this.showLaunchErrorModal(Y.intl.string(Y.t.UXoQTk));
                    return;
                }
                if (!(0, V.Z)(null == f ? void 0 : null === (n = f.embedded_activity_config) || void 0 === n ? void 0 : n.supported_platforms)) {
                    this.showLaunchErrorModal(Y.intl.string(Y.t.uGDCc3));
                    return;
                }
                let p = null !== (r = null == c ? void 0 : c.getGuildId()) && void 0 !== r ? r : void 0,
                    { activityConfigs: h, applications: m } = await (0, P.w1)({ guildId: p });
                if (
                    null ==
                    (0, k.Z)({
                        applicationId: o,
                        activityConfigs: h,
                        applications: m
                    })
                ) {
                    let e = await (0, P.w1)({
                        guildId: p,
                        force: !0
                    });
                    (0, k.Z)({
                        applicationId: o,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let g = M.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === o);
                (null !== (i = null == g ? void 0 : g.userIds.size) && void 0 !== i ? i : 0) > 0
                    ? await (0, U.k)({
                          channelId: a,
                          applicationId: o,
                          launchId: null == g ? void 0 : g.launchId,
                          inputApplication: null,
                          analyticsLocations: s,
                          inviterUserId: u
                      })
                    : await (0, B.Z)({
                          targetApplicationId: o,
                          channelId: a,
                          analyticsLocations: s,
                          commandOrigin: l,
                          inviterUserId: u
                      });
            }),
            W(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                M.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: r, applicationId: i } = e,
                        a = (0, Z.j)(r);
                    n.id === a &&
                        this.leaveActivity({
                            location: r,
                            applicationId: i
                        });
                });
            }),
            W(this, 'handleChannelDelete', (e) => {
                let { channel: n } = e,
                    r = M.ZP.getSelfEmbeddedActivityForChannel(n.id);
                null != r &&
                    this.leaveActivity({
                        location: r.location,
                        applicationId: r.applicationId
                    });
            }),
            W(this, 'handleInteractionQueue', (e) => {
                let { nonce: n, data: r } = e;
                if (null != q[r.applicationId]) {
                    let e;
                    r.interactionType === d.B8.APPLICATION_COMMAND ? (e = [p.Z.INTERACTION_APPLICATION_COMMAND]) : r.interactionType === d.B8.MESSAGE_COMPONENT ? (e = [p.Z.INTERACTION_MESSAGE_COMPONENT]) : r.interactionType === d.B8.MODAL_SUBMIT && (e = [p.Z.INTERACTION_MODAL_SUBMIT]),
                        J({
                            applicationId: r.applicationId,
                            nonce: n,
                            locations: e
                        }) && (Q[n] = r.applicationId);
                }
            }),
            W(this, 'handleInteractionCompleted', (e) => {
                let { nonce: n } = e;
                if (null == n) return;
                let r = Q[n];
                null != r && (delete Q[n], $(r, n));
            });
    }
}
