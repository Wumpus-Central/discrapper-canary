n.d(t, { A: () => w });
var i = n(132500),
    a = n(827343),
    s = n(91242),
    l = n(636401),
    r = n(36810),
    o = n(738566),
    d = n(280450),
    c = n(453028),
    u = n(763827),
    h = n(287809),
    p = n(977997);
function g(e) {
    let { x: t, y: n, z: i } = e;
    return Math.sqrt(t * t + n * n + i * i);
}
function f(e) {
    let t = g(e);
    return t < Number.EPSILON ? null : { x: e.x / t, y: e.y / t, z: e.z / t };
}
function m(e, t) {
    return { x: e.y * t.z - e.z * t.y, y: e.z * t.x - e.x * t.z, z: e.x * t.y - e.y * t.x };
}
function v(e, t) {
    return e.x * t.x + e.y * t.y + e.z * t.z;
}
var b = n(652215),
    y = n(731854);
let A = { x: 0, y: 0, z: -1 };
class I {
    session = null;
    frameVisibility = new Map();
    updateTimer = null;
    getCapabilitiesForSocket(e) {
        return this.validateFrame(e), this.getCapabilities();
    }
    getParticipantsForSession(e, t) {
        let n = this.validateSession(e, t);
        return this.getParticipants(n.channelId);
    }
    getCapabilities() {
        let e = this.getSpatialCapabilities();
        return {
            available: !0,
            connected: null != this.getConnectedRTCConnection(),
            participant_updates: !0,
            binary_speaking: !0,
            spatial: e,
        };
    }
    getSpatialCapabilities() {
        let { enabled: e } = o.A.getConfig({ location: "VibegrationsVoiceSessionCoordinator" }),
            t = c.Ay.supports(y.O5.SPATIAL_AUDIO),
            n = e && t;
        return {
            available: n,
            source_positioning: n,
            source_gain: !1,
            source_spatial_blend: !1,
            listener_pose: n,
            room_size: !1,
            reflections: !1,
            max_sources: 50,
            max_updates_per_second: 20,
        };
    }
    getConnectedRTCConnection() {
        let e = u.A.getRTCConnection();
        return null == e || "RTC_CONNECTED" !== e.state || null == e.getMediaEngineConnectionId() ? null : e;
    }
    getParticipants(e) {
        return Object.values(p.A.getVoiceStatesForChannel(e)).flatMap((e) => {
            let t = h.default.getUser(e.userId);
            return null == t
                ? []
                : [
                      {
                          user_id: e.userId,
                          username: t.username,
                          global_name: t.globalName ?? null,
                          avatar: t.avatar ?? null,
                          mute: e.mute,
                          deaf: e.deaf,
                          self_mute: e.selfMute,
                          self_deaf: e.selfDeaf,
                      },
                  ];
        });
    }
    start(e) {
        let { frameId: t, applicationId: n } = this.validateFrame(e),
            a = this.getConnectedRTCConnection(),
            s = a?.getMediaEngineConnectionId();
        if (null == a || null == s)
            throw new l.A({ errorCode: b.Lw6.INVALID_CHANNEL }, "Join a voice channel before starting a voice session");
        if (null != this.session) {
            if (this.session.socketId !== e.id || this.session.frameId !== t)
                throw new l.A({ errorCode: b.Lw6.INVALID_COMMAND }, "Another RPC session owns the voice session");
            this.release();
        }
        let r = {
            id: (0, i.A)(),
            socketId: e.id,
            frameId: t,
            applicationId: n,
            channelId: a.channelId,
            rtcConnectionId: a.getRTCConnectionId(),
            mediaEngineConnectionId: s,
            spatialEnabled: !1,
            backgrounded: !1 === this.frameVisibility.get(t),
            sources: [],
            appliedUserIds: new Set(),
        };
        if (((this.session = r), !this.hasMediaEngineConnection(r)))
            throw (
                ((this.session = null),
                new l.A({ errorCode: b.Lw6.INVALID_CHANNEL }, "The voice connection is unavailable"))
            );
        return r;
    }
    enableSpatial(e, t) {
        let n = this.validateSession(e, t);
        if (!this.getSpatialCapabilities().available)
            throw new l.A({ errorCode: b.Lw6.INVALID_COMMAND }, "Spatial voice is not supported by this client");
        let i = c.Ay.getAudioMixerSettings();
        if (
            ((!0 !== i.enabled || !0 !== i.distanceAttenuationEnabled) &&
                a.A.setAudioMixerSettings({ ...i, enabled: !0, distanceAttenuationEnabled: !0 }),
            (n.spatialEnabled = !0),
            !n.backgrounded && !this.activateEffects(n))
        )
            throw new l.A({ errorCode: b.Lw6.INVALID_CHANNEL }, "The voice connection is unavailable");
    }
    disableSpatial(e, t) {
        let n = this.validateSession(e, t);
        (n.spatialEnabled = !1), this.deactivateEffects(n);
    }
    update(e, t, n, i) {
        let a = this.validateSession(e, t);
        if (!a.spatialEnabled)
            throw new l.A(
                { errorCode: b.Lw6.INVALID_COMMAND },
                "Enable spatial voice on this session before sending a spatial snapshot",
            );
        if (i.length > 50)
            throw new l.A({ errorCode: b.Lw6.INVALID_PAYLOAD }, "Spatial voice supports at most 50 sources");
        let s = this.getParticipantIds(a.channelId),
            r = d.default.getId(),
            o = new Set();
        (a.sources = i.map((e) => {
            var t;
            let i,
                a,
                d,
                c,
                u,
                h = e.user_id;
            if (h === r || !s.has(h) || o.has(h))
                throw new l.A({ errorCode: b.Lw6.INVALID_PAYLOAD }, `Invalid spatial voice source ${e.user_id}`);
            return (
                o.add(h),
                {
                    userId: h,
                    position:
                        ((t = e.position),
                        (a =
                            0.99 > Math.abs((i = f(n.forward) ?? { x: 0, y: 0, z: -1 }).y)
                                ? { x: 0, y: 1, z: 0 }
                                : { x: 0, y: 0, z: 1 }),
                        (d = f(m(i, a)) ?? { x: 1, y: 0, z: 0 }),
                        (c = f(m(d, i)) ?? { x: 0, y: 1, z: 0 }),
                        0.001 > g((u = { x: t.x - n.position.x, y: t.y - n.position.y, z: t.z - n.position.z }))
                            ? { x: 0, y: 0, z: -0.001 }
                            : { x: v(u, d), y: v(u, c), z: -v(u, i) }),
                }
            );
        })),
            a.backgrounded || this.scheduleApply(a);
    }
    stop(e, t) {
        this.validateSession(e, t), this.release();
    }
    validateEventSubscription(e, t) {
        this.validateSession(e, t);
    }
    getParticipantsForEventSubscription(e, t) {
        try {
            let n = this.validateSession(e, t);
            return this.getParticipants(n.channelId);
        } catch {
            return null;
        }
    }
    getActiveSessionIdForChannel(e) {
        let t = this.session;
        if (null == t || t.channelId !== e) return null;
        let n = u.A.getRTCConnection();
        return null == n ||
            n.channelId !== t.channelId ||
            n.getRTCConnectionId() !== t.rtcConnectionId ||
            n.getMediaEngineConnectionId() !== t.mediaEngineConnectionId
            ? null
            : t.id;
    }
    releaseSocket(e) {
        this.session?.socketId === e && this.release();
    }
    releaseUnlessChannel(e) {
        null != this.session && this.session.channelId !== e && this.release();
    }
    setFrameVisible(e, t) {
        this.frameVisibility.set(e, t);
        let n = this.session;
        if (null != n && n.frameId === e && !t !== n.backgrounded && ((n.backgrounded = !t), n.spatialEnabled)) {
            if (!t) return void this.deactivateEffects(n);
            this.activateEffects(n);
        }
    }
    releaseFrame(e) {
        this.frameVisibility.delete(e), this.session?.frameId === e && this.release();
    }
    release() {
        let e = this.session;
        null != e && (this.cancelPendingUpdate(), this.clearAppliedSources(e), (this.session = null));
    }
    reconcileParticipants() {
        let e = this.session;
        if (null == e) return;
        let t = u.A.getRTCConnection();
        if (
            null == t ||
            t.channelId !== e.channelId ||
            t.getRTCConnectionId() !== e.rtcConnectionId ||
            t.getMediaEngineConnectionId() !== e.mediaEngineConnectionId
        )
            return void this.release();
        if (e.spatialEnabled && !this.getSpatialCapabilities().available) {
            (e.spatialEnabled = !1), (e.sources = []), this.deactivateEffects(e);
            return;
        }
        let n = this.getParticipantIds(e.channelId);
        e.sources = e.sources.filter((e) => {
            let { userId: t } = e;
            return n.has(t);
        });
        let i = [...e.appliedUserIds].filter((e) => !n.has(e));
        if (0 !== i.length) {
            if (
                !this.withMediaEngineConnection(e, (e) => {
                    for (let t of i) e.setUserPosition(t, A);
                })
            )
                return void this.release();
            for (let t of i) e.appliedUserIds.delete(t);
        }
    }
    deactivateEffects(e) {
        this.cancelPendingUpdate(), this.clearAppliedSources(e);
    }
    activateEffects(e) {
        return (
            this.cancelPendingUpdate(), this.resetParticipantEffects(e), !!this.applySources(e) || (this.release(), !1)
        );
    }
    scheduleApply(e) {
        null == this.updateTimer &&
            (this.updateTimer = setTimeout(() => {
                (this.updateTimer = null),
                    this.session !== e || !e.spatialEnabled || e.backgrounded || this.applySources(e) || this.release();
            }, 50));
    }
    applySources(e) {
        let t = new Set(
                e.sources.map((e) => {
                    let { userId: t } = e;
                    return t;
                }),
            ),
            n = [...e.appliedUserIds].filter((e) => !t.has(e)),
            i = this.withMediaEngineConnection(e, (t) => {
                for (let e of n) t.setUserPosition(e, A);
                for (let { userId: n, position: i } of e.sources) t.setUserPosition(n, i);
            });
        return i && (e.appliedUserIds = t), i;
    }
    clearAppliedSources(e) {
        0 !== e.appliedUserIds.size &&
            (this.withMediaEngineConnection(e, (t) => {
                for (let n of e.appliedUserIds) t.setUserPosition(n, A);
            }),
            e.appliedUserIds.clear());
    }
    resetParticipantEffects(e) {
        let t = d.default.getId();
        this.withMediaEngineConnection(e, (n) => {
            for (let i of this.getParticipantIds(e.channelId)) i !== t && n.setUserPosition(i, A);
        });
    }
    getParticipantIds(e) {
        return new Set(Object.keys(p.A.getVoiceStatesForChannel(e)));
    }
    hasMediaEngineConnection(e) {
        return this.withMediaEngineConnection(e, () => {});
    }
    withMediaEngineConnection(e, t) {
        let n = !1;
        return (
            c.Ay.getMediaEngine().eachConnection((i) => {
                i.mediaEngineConnectionId === e.mediaEngineConnectionId && ((n = !0), t(i));
            }, y.x.DEFAULT),
            n
        );
    }
    cancelPendingUpdate() {
        null != this.updateTimer && (clearTimeout(this.updateTimer), (this.updateTimer = null));
    }
    validateFrame(e) {
        let { applicationId: t, iframeId: n } = (0, r.A)(e),
            i = s.A.getFrameByIframeId(n);
        if (null == i || i.applicationId !== t)
            throw new l.A(
                { errorCode: b.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                "The RPC socket does not belong to this Frame",
            );
        return { frameId: i.id, applicationId: i.applicationId };
    }
    validateSession(e, t) {
        let { frameId: n, applicationId: i } = this.validateFrame(e),
            a = this.session;
        if (null == a || a.id !== t || a.socketId !== e.id || a.frameId !== n || a.applicationId !== i)
            throw new l.A({ errorCode: b.Lw6.INVALID_COMMAND }, "Unknown or stale voice session");
        let s = u.A.getRTCConnection();
        if (
            null == s ||
            s.channelId !== a.channelId ||
            s.getRTCConnectionId() !== a.rtcConnectionId ||
            s.getMediaEngineConnectionId() !== a.mediaEngineConnectionId
        )
            throw (this.release(), new l.A({ errorCode: b.Lw6.INVALID_CHANNEL }, "The voice session was invalidated"));
        return a;
    }
}
let w = new I();
