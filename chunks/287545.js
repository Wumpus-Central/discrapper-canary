let i;
r.d(n, {
    U: function () {
        return J;
    },
    Z: function () {
        return $;
    }
});
var a,
    s = r(47120);
var o = r(772848),
    l = r(544891),
    u = r(570140),
    c = r(475179),
    d = r(317770),
    f = r(807169),
    _ = r(728345),
    h = r(358221),
    p = r(75060),
    m = r(233764),
    g = r(375824),
    E = r(188597),
    v = r(695346),
    I = r(131704),
    T = r(314897),
    b = r(592125),
    y = r(19780),
    S = r(944486),
    A = r(594174),
    N = r(626135),
    C = r(585483),
    R = r(358085),
    O = r(624138),
    D = r(24933),
    L = r(115130),
    x = r(566620),
    w = r(317381),
    P = r(969345),
    M = r(148720),
    k = r(122613),
    U = r(782769),
    B = r(16609),
    G = r(761122),
    Z = r(983695),
    F = r(917107),
    V = r(981631),
    j = r(388032);
function H(e, n, r) {
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
let Y = 2000;
!(function (e) {
    (e[(e.ClientError = 0)] = 'ClientError'), (e[(e.CallbackError = 1)] = 'CallbackError'), (e[(e.ApiError = 2)] = 'ApiError');
})(a || (a = {}));
let W = {},
    K = {};
function z(e) {
    var n;
    return { releasePhase: null == e ? void 0 : null === (n = e.activity) || void 0 === n ? void 0 : n.client_platform_config[(0, G.Z)((0, R.getOS)())].release_phase };
}
function q(e) {
    let { applicationId: n, nonce: r, analyticsLocations: i, source: a } = e;
    (null != i || null != a) &&
        (K[n] = {
            nonce: r,
            locations: i,
            source: a
        });
}
async function Q(e) {
    var n, r;
    let { applicationId: i, location: a, instanceId: s } = e,
        o = w.ZP.getEmbeddedActivityDurationMs(a.id, i),
        u = T.default.getSessionId();
    null != s &&
        null != u &&
        (await l.tn.post({
            url: V.ANM.ACTIVITY_LEAVE(i, a.id, s),
            body: { session_id: u },
            retries: 2,
            rejectWithError: !1
        }));
    let c = W[i],
        d = b.Z.getChannel((0, B.p)(a)),
        f = A.default.getCurrentUser();
    if (null == c || null == d || null == f) return;
    let _ = d.getGuildId(),
        h = w.ZP.getShelfActivities(_),
        m = (0, P.Z)({
            applicationId: i,
            activityConfigs: h
        }),
        { releasePhase: g } = z(m),
        E = p.Z.getRawThermalState();
    N.default.track(V.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: d.id,
        guild_id: _,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: o,
        user_premium_tier: f.premiumType,
        raw_thermal_state: E,
        release_phase: g,
        activity_premium_tier_requirement: null == m ? void 0 : null === (n = m.activity) || void 0 === n ? void 0 : n.premium_tier_requirement,
        shelf_rank: null == m ? void 0 : null === (r = m.activity) || void 0 === r ? void 0 : r.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: d.type,
        media_session_ids: c.mediaSessionIds
    }),
        N.default.track(V.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: d.id,
            guild_id: _,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: E,
            duration_ms: o
        }),
        delete W[i];
}
function X(e) {
    var n, r, i;
    let { applicationId: a, isFirstActivityInChannel: s, isStart: l, participants: u, embeddedActivity: d, location: _, inviterUserId: m } = e,
        g = T.default.getId(),
        E = u.find((e) => e.userId === g),
        v = (0, B.p)(_),
        I = b.Z.getChannel(v);
    if ((l && null != I && I.isPrivate() && s && null == E && c.Z.selectParticipant(I.id, null), null == E)) return;
    let S = y.Z.getMediaSessionId(),
        C = d.compositeInstanceId,
        R = null == S && (null == I ? void 0 : I.isVocal()) === !0 && (null == I ? void 0 : I.isPrivate()) === !1;
    if (null == C || R) return;
    let L = (0, o.Z)(),
        x = 'location' in d ? 2 : 1,
        M = null == I ? void 0 : I.getGuildId(),
        k = A.default.getCurrentUser();
    if (null == I || null == k) return;
    let U = w.ZP.getShelfActivities(M),
        G = D.Z.getState().shelfOrder,
        Z = (0, P.Z)({
            applicationId: a,
            activityConfigs: U
        }),
        F = 1 + G.findIndex((e) => e === a),
        { releasePhase: j } = z(Z),
        H = p.Z.getRawThermalState(),
        Y = null != S ? [S] : [],
        q = {
            activitySessionId: C,
            activityUserSessionId: L,
            launchId: d.launchId,
            mediaSessionIds: Y,
            activitiesInfraVersion: x
        };
    W[a] = q;
    let Q = K[a];
    !(0, O.Ew)(E.nonce) && E.nonce !== (null == Q ? void 0 : Q.nonce) && (Q = void 0),
        N.default.track(V.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: I.id,
            guild_id: I.getGuildId(),
            media_session_id: Y[0],
            activity_session_id: C,
            application_id: a,
            location_stack: null == Q ? void 0 : Q.locations,
            user_premium_tier: k.premiumType,
            raw_thermal_state: H,
            n_participants: h.Z.getUserParticipantCount(I.id),
            is_activity_start: l,
            release_phase: j,
            activity_premium_tier_requirement: null == Z ? void 0 : null === (n = Z.activity) || void 0 === n ? void 0 : n.premium_tier_requirement,
            shelf_rank: null == Z ? void 0 : null === (r = Z.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activity_user_session_id: L,
            channel_type: I.type,
            source: null == Q ? void 0 : Q.source,
            command_context_type: (0, f.Vh)(I, a),
            invite_inviter_id: m
        }),
        N.default.track(V.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == Q ? void 0 : Q.locations,
            channel_id: I.id,
            channel_type: I.type,
            guild_id: I.getGuildId(),
            application_id: a,
            instance_id: d.launchId,
            initial_media_session_id: Y[0],
            activity_user_session_id: L,
            raw_thermal_state: H,
            is_activity_start: l,
            shelf_rank: null == Z ? void 0 : null === (i = Z.activity) || void 0 === i ? void 0 : i.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activities_infra_version: x
        });
}
function J(e) {
    return W[e];
}
class $ extends d.Z {
    _initialize() {
        S.Z.addChangeListener(this.handleSelectedChannelUpdate), C.S.subscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), C.S.subscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, X), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', q), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', Q), u.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.subscribe('CALL_DELETE', this.handleCallDelete), u.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        S.Z.removeChangeListener(this.handleSelectedChannelUpdate), C.S.unsubscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), C.S.unsubscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, X), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', q), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', Q), u.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), u.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleSelectedChannelUpdate', () => {
                let e = S.Z.getVoiceChannelId();
                for (let { location: n, applicationId: r } of w.ZP.getSelfEmbeddedActivities().values()) {
                    let i = (0, B.p)(n);
                    null != i &&
                        (0, F.Z)(i) &&
                        i !== e &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r
                        });
                }
                if (null != e) {
                    let n = w.ZP.getEmbeddedActivitiesForChannel(e),
                        r = T.default.getId();
                    n.forEach((e) => {
                        if (e.userIds.has(r)) {
                            let n = (0, B.p)(e.location),
                                r = w.ZP.getSelfEmbeddedActivityForChannel(n);
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
            H(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            H(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: n, applicationId: r } = e;
                setTimeout(() => {
                    let e = K[r];
                    null != e && e.nonce === n && delete K[r];
                }, Y);
            }),
            H(this, 'handleActivityLaunchFail', async (e) => {
                let n,
                    r,
                    i,
                    { error: a, nonce: s, channelId: o, applicationId: l, isStart: u } = e,
                    c = K[l];
                null != c && c.nonce === s ? delete K[l] : (c = void 0);
                let d = j.intl.string(j.t['IOy+Iy']);
                if (a instanceof m.Z) {
                    (n = 0), (i = a.reason);
                    let e = L.Z.getFetchState();
                    switch ((v.Sb.getSetting() && e !== L.O.LOADED && (await (0, x.$h)()), a.reason)) {
                        case m.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            L.Z.inDevModeForApplication(l) && (d = j.intl.string(j.t.hXRXf3));
                            break;
                        case m.Z.Reasons.INVALID_CHANNEL:
                            d = j.intl.string(j.t.j29zCg);
                    }
                } else if (a instanceof g.Z) {
                    var f;
                    (n = 1), (i = a.reason), (d = null !== (f = (0, E.A0)(a.reason, l)) && void 0 !== f ? f : d);
                } else
                    switch (((n = 2), (r = a.status), (i = a.code), a.code)) {
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            d = j.intl.string(j.t.Gyzcra);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = j.intl.string(j.t.zxv7EB);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            d = j.intl.string(j.t['H+KK6e']);
                            break;
                        case V.evJ.INVALID_PERMISSIONS:
                            d = j.intl.string(j.t.hHGrW1);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = j.intl.string(j.t.j29zCg);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = j.intl.string(j.t['4WuFRE']);
                            break;
                        case V.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = j.intl.string(j.t.RvkXdX);
                            break;
                        case V.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = j.intl.string(j.t.uGDCc3);
                    }
                this.showLaunchErrorModal(d);
                let _ = b.Z.getChannel(o);
                if (null == _) return;
                let h = _.getGuildId(),
                    I = p.Z.getRawThermalState();
                N.default.track(V.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: o,
                    guild_id: h,
                    application_id: l,
                    raw_thermal_state: I,
                    is_activity_start: u,
                    channel_type: null == _ ? void 0 : _.type,
                    location_stack: null == c ? void 0 : c.locations,
                    error_type: n,
                    error_status: r,
                    error_code: i,
                    source: null == c ? void 0 : c.source
                });
            }),
            H(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: n, application: r } = e,
                    i = r.id;
                if (null != i && null != n) {
                    for (let { applicationId: e, location: n } of w.ZP.getSelfEmbeddedActivities().values())
                        e === i &&
                            this.leaveActivity({
                                location: n,
                                applicationId: i
                            });
                    n.code !== V.$VG.CLOSE_NORMAL && this.showErrorModal(n, i);
                }
            }),
            H(this, 'handleCallDelete', (e) => {
                let { channelId: n } = e,
                    r = S.Z.getVoiceChannelId();
                null != r && r === n && this.handleCallEnded(n);
            }),
            H(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== V.hes.DISCONNECTED) return;
                let n = e.channelId;
                this.handleCallEnded(n);
            }),
            H(this, 'handleCallEnded', (e) => {
                let n = w.ZP.getSelfEmbeddedActivityForChannel(e);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId
                    });
            }),
            H(this, 'handleDeferredOpen', async (e) => {
                var n, r, i;
                let { channelId: a, applicationId: s, analyticsLocations: o, commandOrigin: l, inviterUserId: u } = e,
                    c = b.Z.getChannel(a);
                if (void 0 === c || (I.tx.has(null == c ? void 0 : c.type) && S.Z.getVoiceChannelId() !== a)) return;
                let d = w.ZP.getSelfEmbeddedActivityForChannel(a);
                if ((null == d ? void 0 : d.applicationId) === s) return;
                let f = await _.ZP.fetchApplication(s);
                if (!(0, U.a)(c)) {
                    this.showLaunchErrorModal(j.intl.string(j.t.UXoQTk));
                    return;
                }
                if (!(0, Z.Z)(null == f ? void 0 : null === (n = f.embedded_activity_config) || void 0 === n ? void 0 : n.supported_platforms)) {
                    this.showLaunchErrorModal(j.intl.string(j.t.uGDCc3));
                    return;
                }
                let h = null !== (r = null == c ? void 0 : c.getGuildId()) && void 0 !== r ? r : void 0,
                    { activityConfigs: p, applications: m } = await (0, x.w1)({ guildId: h });
                if (
                    null ==
                    (0, P.Z)({
                        applicationId: s,
                        activityConfigs: p,
                        applications: m
                    })
                ) {
                    let e = await (0, x.w1)({
                        guildId: h,
                        force: !0
                    });
                    (0, P.Z)({
                        applicationId: s,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let g = w.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === s);
                (null !== (i = null == g ? void 0 : g.userIds.size) && void 0 !== i ? i : 0) > 0
                    ? await (0, M.k)({
                          channelId: a,
                          applicationId: s,
                          launchId: null == g ? void 0 : g.launchId,
                          inputApplication: null,
                          analyticsLocations: o,
                          inviterUserId: u
                      })
                    : await (0, k.Z)({
                          targetApplicationId: s,
                          channelId: a,
                          analyticsLocations: o,
                          commandOrigin: l,
                          inviterUserId: u
                      });
            }),
            H(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                w.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: r, applicationId: i } = e,
                        a = (0, B.j)(r);
                    n.id === a &&
                        this.leaveActivity({
                            location: r,
                            applicationId: i
                        });
                });
            }),
            H(this, 'handleChannelDelete', (e) => {
                let { channel: n } = e,
                    r = w.ZP.getSelfEmbeddedActivityForChannel(n.id);
                null != r &&
                    this.leaveActivity({
                        location: r.location,
                        applicationId: r.applicationId
                    });
            });
    }
}
