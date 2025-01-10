let i;
r.d(n, {
    U: function () {
        return X;
    },
    Z: function () {
        return J;
    }
});
var a,
    s = r(47120);
var o = r(772848),
    l = r(544891),
    u = r(570140),
    c = r(475179),
    d = r(317770),
    f = r(728345),
    _ = r(358221),
    h = r(75060),
    p = r(233764),
    m = r(375824),
    g = r(188597),
    E = r(695346),
    v = r(131704),
    I = r(314897),
    T = r(592125),
    b = r(19780),
    y = r(944486),
    S = r(594174),
    A = r(626135),
    N = r(585483),
    C = r(358085),
    R = r(624138),
    O = r(24933),
    D = r(115130),
    L = r(566620),
    x = r(317381),
    w = r(969345),
    P = r(148720),
    M = r(122613),
    k = r(782769),
    U = r(16609),
    B = r(761122),
    G = r(983695),
    F = r(917107),
    Z = r(981631),
    V = r(388032);
function j(e, n, r) {
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
let H = 2000;
!(function (e) {
    (e[(e.ClientError = 0)] = 'ClientError'), (e[(e.CallbackError = 1)] = 'CallbackError'), (e[(e.ApiError = 2)] = 'ApiError');
})(a || (a = {}));
let Y = {},
    W = {};
function K(e) {
    var n;
    return { releasePhase: null == e ? void 0 : null === (n = e.activity) || void 0 === n ? void 0 : n.client_platform_config[(0, B.Z)((0, C.getOS)())].release_phase };
}
function z(e) {
    let { applicationId: n, nonce: r, analyticsLocations: i, source: a } = e;
    (null != i || null != a) &&
        (W[n] = {
            nonce: r,
            locations: i,
            source: a
        });
}
async function q(e) {
    var n, r;
    let { applicationId: i, location: a, instanceId: s } = e,
        o = x.ZP.getEmbeddedActivityDurationMs(a.id, i),
        u = I.default.getSessionId();
    null != s &&
        null != u &&
        (await l.tn.post({
            url: Z.ANM.ACTIVITY_LEAVE(i, a.id, s),
            body: { session_id: u },
            retries: 2,
            rejectWithError: !1
        }));
    let c = Y[i],
        d = T.Z.getChannel((0, U.p)(a)),
        f = S.default.getCurrentUser();
    if (null == c || null == d || null == f) return;
    let _ = d.getGuildId(),
        p = x.ZP.getShelfActivities(_),
        m = (0, w.Z)({
            applicationId: i,
            activityConfigs: p
        }),
        { releasePhase: g } = K(m),
        E = h.Z.getRawThermalState();
    A.default.track(Z.rMx.ACTIVITY_SESSION_LEFT, {
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
        A.default.track(Z.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: d.id,
            guild_id: _,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: E,
            duration_ms: o
        }),
        delete Y[i];
}
function Q(e) {
    var n, r, i;
    let { applicationId: a, isFirstActivityInChannel: s, isStart: l, participants: u, embeddedActivity: d, location: f } = e,
        p = I.default.getId(),
        m = u.find((e) => e.userId === p),
        g = (0, U.p)(f),
        E = T.Z.getChannel(g);
    if ((l && null != E && E.isPrivate() && s && null == m && c.Z.selectParticipant(E.id, null), null == m)) return;
    let v = b.Z.getMediaSessionId(),
        y = d.compositeInstanceId,
        N = null == v && (null == E ? void 0 : E.isVocal()) === !0 && (null == E ? void 0 : E.isPrivate()) === !1;
    if (null == y || N) return;
    let C = (0, o.Z)(),
        D = 'location' in d ? 2 : 1,
        L = null == E ? void 0 : E.getGuildId(),
        P = S.default.getCurrentUser();
    if (null == E || null == P) return;
    let M = x.ZP.getShelfActivities(L),
        k = O.Z.getState().shelfOrder,
        B = (0, w.Z)({
            applicationId: a,
            activityConfigs: M
        }),
        G = 1 + k.findIndex((e) => e === a),
        { releasePhase: F } = K(B),
        V = h.Z.getRawThermalState(),
        j = null != v ? [v] : [],
        H = {
            activitySessionId: y,
            activityUserSessionId: C,
            launchId: d.launchId,
            mediaSessionIds: j,
            activitiesInfraVersion: D
        };
    Y[a] = H;
    let z = W[a];
    !(0, R.Ew)(m.nonce) && m.nonce !== (null == z ? void 0 : z.nonce) && (z = void 0),
        A.default.track(Z.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: E.id,
            guild_id: E.getGuildId(),
            media_session_id: j[0],
            activity_session_id: y,
            application_id: a,
            location_stack: null == z ? void 0 : z.locations,
            user_premium_tier: P.premiumType,
            raw_thermal_state: V,
            n_participants: _.Z.getUserParticipantCount(E.id),
            is_activity_start: l,
            release_phase: F,
            activity_premium_tier_requirement: null == B ? void 0 : null === (n = B.activity) || void 0 === n ? void 0 : n.premium_tier_requirement,
            shelf_rank: null == B ? void 0 : null === (r = B.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: C,
            channel_type: E.type,
            source: null == z ? void 0 : z.source
        }),
        A.default.track(Z.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == z ? void 0 : z.locations,
            channel_id: E.id,
            channel_type: E.type,
            guild_id: E.getGuildId(),
            application_id: a,
            instance_id: d.launchId,
            initial_media_session_id: j[0],
            activity_user_session_id: C,
            raw_thermal_state: V,
            is_activity_start: l,
            shelf_rank: null == B ? void 0 : null === (i = B.activity) || void 0 === i ? void 0 : i.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: D
        });
}
function X(e) {
    return Y[e];
}
class J extends d.Z {
    _initialize() {
        y.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(Z.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(Z.CkL.OPEN_EMBEDDED_ACTIVITY, Q), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', z), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', q), u.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.subscribe('CALL_DELETE', this.handleCallDelete), u.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        y.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(Z.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(Z.CkL.OPEN_EMBEDDED_ACTIVITY, Q), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', z), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), u.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), u.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', q), u.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), u.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), u.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), u.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), u.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), u.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            j(this, 'handleSelectedChannelUpdate', () => {
                let e = y.Z.getVoiceChannelId();
                for (let { location: n, applicationId: r } of x.ZP.getSelfEmbeddedActivities().values()) {
                    let i = (0, U.p)(n);
                    null != i &&
                        (0, F.Z)(i) &&
                        i !== e &&
                        this.leaveActivity({
                            location: n,
                            applicationId: r
                        });
                }
                if (null != e) {
                    let n = x.ZP.getEmbeddedActivitiesForChannel(e),
                        r = I.default.getId();
                    n.forEach((e) => {
                        if (e.userIds.has(r)) {
                            let n = (0, U.p)(e.location),
                                r = x.ZP.getSelfEmbeddedActivityForChannel(n);
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
            j(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            j(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: n, applicationId: r } = e;
                setTimeout(() => {
                    let e = W[r];
                    null != e && e.nonce === n && delete W[r];
                }, H);
            }),
            j(this, 'handleActivityLaunchFail', async (e) => {
                let n,
                    r,
                    i,
                    { error: a, nonce: s, channelId: o, applicationId: l, isStart: u } = e,
                    c = W[l];
                null != c && c.nonce === s ? delete W[l] : (c = void 0);
                let d = V.intl.string(V.t['IOy+Iy']);
                if (a instanceof p.Z) {
                    (n = 0), (i = a.reason);
                    let e = D.Z.getFetchState();
                    switch ((E.Sb.getSetting() && e !== D.O.LOADED && (await (0, L.$h)()), a.reason)) {
                        case p.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            D.Z.inDevModeForApplication(l) && (d = V.intl.string(V.t.hXRXf3));
                            break;
                        case p.Z.Reasons.INVALID_CHANNEL:
                            d = V.intl.string(V.t.j29zCg);
                    }
                } else if (a instanceof m.Z) {
                    var f;
                    (n = 1), (i = a.reason), (d = null !== (f = (0, g.A0)(a.reason, l)) && void 0 !== f ? f : d);
                } else
                    switch (((n = 2), (r = a.status), (i = a.code), a.code)) {
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            d = V.intl.string(V.t.Gyzcra);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = V.intl.string(V.t.zxv7EB);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            d = V.intl.string(V.t['H+KK6e']);
                            break;
                        case Z.evJ.INVALID_PERMISSIONS:
                            d = V.intl.string(V.t.hHGrW1);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = V.intl.string(V.t.j29zCg);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = V.intl.string(V.t['4WuFRE']);
                            break;
                        case Z.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = V.intl.string(V.t.RvkXdX);
                            break;
                        case Z.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = V.intl.string(V.t.uGDCc3);
                    }
                this.showLaunchErrorModal(d);
                let _ = T.Z.getChannel(o);
                if (null == _) return;
                let v = _.getGuildId(),
                    I = h.Z.getRawThermalState();
                A.default.track(Z.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: o,
                    guild_id: v,
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
            j(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: n, application: r } = e,
                    i = r.id;
                if (null != i && null != n) {
                    for (let { applicationId: e, location: n } of x.ZP.getSelfEmbeddedActivities().values())
                        e === i &&
                            this.leaveActivity({
                                location: n,
                                applicationId: i
                            });
                    n.code !== Z.$VG.CLOSE_NORMAL && this.showErrorModal(n, i);
                }
            }),
            j(this, 'handleCallDelete', (e) => {
                let { channelId: n } = e,
                    r = y.Z.getVoiceChannelId();
                null != r && r === n && this.handleCallEnded(n);
            }),
            j(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== Z.hes.DISCONNECTED) return;
                let n = e.channelId;
                this.handleCallEnded(n);
            }),
            j(this, 'handleCallEnded', (e) => {
                let n = x.ZP.getSelfEmbeddedActivityForChannel(e);
                null != n &&
                    this.leaveActivity({
                        location: n.location,
                        applicationId: n.applicationId
                    });
            }),
            j(this, 'handleDeferredOpen', async (e) => {
                var n, r, i;
                let { channelId: a, applicationId: s, analyticsLocations: o, commandOrigin: l } = e,
                    u = T.Z.getChannel(a);
                if (void 0 === u || (v.tx.has(null == u ? void 0 : u.type) && y.Z.getVoiceChannelId() !== a)) return;
                let c = x.ZP.getSelfEmbeddedActivityForChannel(a);
                if ((null == c ? void 0 : c.applicationId) === s) return;
                let d = await f.ZP.fetchApplication(s);
                if (!(0, k.a)(u)) {
                    this.showLaunchErrorModal(V.intl.string(V.t.UXoQTk));
                    return;
                }
                if (!(0, G.Z)(null == d ? void 0 : null === (n = d.embedded_activity_config) || void 0 === n ? void 0 : n.supported_platforms)) {
                    this.showLaunchErrorModal(V.intl.string(V.t.uGDCc3));
                    return;
                }
                let _ = null !== (r = null == u ? void 0 : u.getGuildId()) && void 0 !== r ? r : void 0,
                    { activityConfigs: h, applications: p } = await (0, L.w1)({ guildId: _ });
                if (
                    null ==
                    (0, w.Z)({
                        applicationId: s,
                        activityConfigs: h,
                        applications: p
                    })
                ) {
                    let e = await (0, L.w1)({
                        guildId: _,
                        force: !0
                    });
                    (0, w.Z)({
                        applicationId: s,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let m = x.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === s);
                (null !== (i = null == m ? void 0 : m.userIds.size) && void 0 !== i ? i : 0) > 0
                    ? await (0, P.k)({
                          channelId: a,
                          applicationId: s,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: o
                      })
                    : await (0, M.Z)({
                          targetApplicationId: s,
                          channelId: a,
                          analyticsLocations: o,
                          commandOrigin: l
                      });
            }),
            j(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                x.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { location: r, applicationId: i } = e,
                        a = (0, U.j)(r);
                    n.id === a &&
                        this.leaveActivity({
                            location: r,
                            applicationId: i
                        });
                });
            }),
            j(this, 'handleChannelDelete', (e) => {
                let { channel: n } = e,
                    r = x.ZP.getSelfEmbeddedActivityForChannel(n.id);
                null != r &&
                    this.leaveActivity({
                        location: r.location,
                        applicationId: r.applicationId
                    });
            });
    }
}
