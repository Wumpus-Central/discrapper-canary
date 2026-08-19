i.d(t, { A: () => w });
var n = i(132500),
    s = i(827343),
    a = i(91242),
    l = i(636401),
    r = i(36810),
    o = i(738566),
    d = i(280450),
    c = i(966497),
    u = i(763827),
    h = i(287809),
    p = i(977997);
function g(e) {
    let { x: t, y: i, z: n } = e;
    return Math.sqrt(t * t + i * i + n * n);
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
var y = i(652215),
    b = i(731854);
let A = { x: 0, y: 0, z: -1 };
class I {
    session = null;
    frameVisibility = new Map();
    updateTimer = null;
    getCapabilitiesForSocket(e) {
        return this.validateFrame(e), this.getCapabilities();
    }
    getParticipantsForSession(e, t) {
        let i = this.validateSession(e, t);
        return this.getParticipants(i.channelId);
    }
    getCapabilities() {
        let { enabled: e } = o.A.getConfig({ location: "VibegrationsVoiceSessionCoordinator" }),
            t = c.Ay.supports(b.O5.SPATIAL_AUDIO),
            i = e && t;
        return {
            available: i,
            source_positioning: i,
            source_gain: !1,
            source_spatial_blend: !1,
            listener_pose: i,
            room_size: !1,
            reflections: !1,
            binary_speaking: i,
            participant_updates: i,
            max_sources: 50,
            max_updates_per_second: 20,
        };
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
        if (!this.getCapabilities().available)
            throw new l.A({ errorCode: y.Lw6.INVALID_COMMAND }, "Spatial voice is not supported by this client");
        let { frameId: t, applicationId: i } = this.validateFrame(e),
            a = u.A.getRTCConnection(),
            r = a?.getMediaEngineConnectionId();
        if (null == a || "RTC_CONNECTED" !== a.state || null == r)
            throw new l.A({ errorCode: y.Lw6.INVALID_CHANNEL }, "Join a voice channel before starting spatial voice");
        if (null != this.session) {
            if (this.session.socketId !== e.id || this.session.frameId !== t)
                throw new l.A(
                    { errorCode: y.Lw6.INVALID_COMMAND },
                    "Another RPC session owns the spatial voice session",
                );
            this.release();
        }
        let o = {
            id: (0, n.A)(),
            socketId: e.id,
            frameId: t,
            applicationId: i,
            channelId: a.channelId,
            rtcConnectionId: a.getRTCConnectionId(),
            mediaEngineConnectionId: r,
            suspended: !1,
            backgrounded: !1 === this.frameVisibility.get(t),
            sources: [],
            appliedUserIds: new Set(),
        };
        if (((this.session = o), !this.hasMediaEngineConnection(o)))
            throw (
                ((this.session = null),
                new l.A({ errorCode: y.Lw6.INVALID_CHANNEL }, "The voice connection is unavailable"))
            );
        let d = c.Ay.getAudioMixerSettings();
        return (
            (!0 !== d.enabled || !0 !== d.distanceAttenuationEnabled) &&
                s.A.setAudioMixerSettings({ ...d, enabled: !0, distanceAttenuationEnabled: !0 }),
            this.resetParticipantEffects(o),
            o
        );
    }
    update(e, t, i, n) {
        let s = this.validateSession(e, t);
        if (n.length > 50)
            throw new l.A({ errorCode: y.Lw6.INVALID_PAYLOAD }, "Spatial voice supports at most 50 sources");
        let a = this.getParticipantIds(s.channelId),
            r = d.default.getId(),
            o = new Set();
        (s.sources = n.map((e) => {
            var t;
            let n,
                s,
                d,
                c,
                u,
                h = e.user_id;
            if (h === r || !a.has(h) || o.has(h))
                throw new l.A({ errorCode: y.Lw6.INVALID_PAYLOAD }, `Invalid spatial voice source ${e.user_id}`);
            return (
                o.add(h),
                {
                    userId: h,
                    position:
                        ((t = e.position),
                        (s =
                            0.99 > Math.abs((n = f(i.forward) ?? { x: 0, y: 0, z: -1 }).y)
                                ? { x: 0, y: 1, z: 0 }
                                : { x: 0, y: 0, z: 1 }),
                        (d = f(m(n, s)) ?? { x: 1, y: 0, z: 0 }),
                        (c = f(m(d, n)) ?? { x: 0, y: 1, z: 0 }),
                        0.001 > g((u = { x: t.x - i.position.x, y: t.y - i.position.y, z: t.z - i.position.z }))
                            ? { x: 0, y: 0, z: -0.001 }
                            : { x: v(u, d), y: v(u, c), z: -v(u, n) }),
                }
            );
        })),
            s.suspended || s.backgrounded || this.scheduleApply(s);
    }
    suspend(e, t) {
        let i = this.validateSession(e, t);
        (i.suspended = !0), this.deactivateEffects(i);
    }
    resume(e, t) {
        let i = this.validateSession(e, t);
        if (!i.backgrounded && !this.activateEffects(i))
            throw new l.A({ errorCode: y.Lw6.INVALID_CHANNEL }, "The voice connection is unavailable");
        i.suspended = !1;
    }
    stop(e, t) {
        this.validateSession(e, t), this.release();
    }
    validateEventSubscription(e, t) {
        this.validateSession(e, t);
    }
    getParticipantsForEventSubscription(e, t) {
        try {
            let i = this.validateSession(e, t);
            return this.getParticipants(i.channelId);
        } catch {
            return null;
        }
    }
    getActiveSessionIdForChannel(e) {
        let t = this.session;
        if (null == t || t.channelId !== e) return null;
        let i = u.A.getRTCConnection();
        return this.getCapabilities().available &&
            null != i &&
            i.channelId === t.channelId &&
            i.getRTCConnectionId() === t.rtcConnectionId &&
            i.getMediaEngineConnectionId() === t.mediaEngineConnectionId
            ? t.id
            : null;
    }
    releaseSocket(e) {
        this.session?.socketId === e && this.release();
    }
    releaseUnlessChannel(e) {
        null != this.session && this.session.channelId !== e && this.release();
    }
    setFrameVisible(e, t) {
        this.frameVisibility.set(e, t);
        let i = this.session;
        if (null != i && i.frameId === e && !t !== i.backgrounded) {
            if (((i.backgrounded = !t), !t)) return void this.deactivateEffects(i);
            i.suspended || this.activateEffects(i);
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
        if (!this.getCapabilities().available) return void this.release();
        let t = u.A.getRTCConnection();
        if (
            null == t ||
            t.channelId !== e.channelId ||
            t.getRTCConnectionId() !== e.rtcConnectionId ||
            t.getMediaEngineConnectionId() !== e.mediaEngineConnectionId
        )
            return void this.release();
        let i = this.getParticipantIds(e.channelId);
        e.sources = e.sources.filter((e) => {
            let { userId: t } = e;
            return i.has(t);
        });
        let n = [...e.appliedUserIds].filter((e) => !i.has(e));
        if (0 !== n.length) {
            if (
                !this.withMediaEngineConnection(e, (e) => {
                    for (let t of n) e.setUserPosition(t, A);
                })
            )
                return void this.release();
            for (let t of n) e.appliedUserIds.delete(t);
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
                    this.session !== e || e.suspended || e.backgrounded || this.applySources(e) || this.release();
            }, 50));
    }
    applySources(e) {
        let t = new Set(
                e.sources.map((e) => {
                    let { userId: t } = e;
                    return t;
                }),
            ),
            i = [...e.appliedUserIds].filter((e) => !t.has(e)),
            n = this.withMediaEngineConnection(e, (t) => {
                for (let e of i) t.setUserPosition(e, A);
                for (let { userId: i, position: n } of e.sources) t.setUserPosition(i, n);
            });
        return n && (e.appliedUserIds = t), n;
    }
    clearAppliedSources(e) {
        0 !== e.appliedUserIds.size &&
            (this.withMediaEngineConnection(e, (t) => {
                for (let i of e.appliedUserIds) t.setUserPosition(i, A);
            }),
            e.appliedUserIds.clear());
    }
    resetParticipantEffects(e) {
        let t = d.default.getId();
        this.withMediaEngineConnection(e, (i) => {
            for (let n of this.getParticipantIds(e.channelId)) n !== t && i.setUserPosition(n, A);
        });
    }
    getParticipantIds(e) {
        return new Set(Object.keys(p.A.getVoiceStatesForChannel(e)));
    }
    hasMediaEngineConnection(e) {
        return this.withMediaEngineConnection(e, () => {});
    }
    withMediaEngineConnection(e, t) {
        let i = !1;
        return (
            c.Ay.getMediaEngine().eachConnection((n) => {
                n.mediaEngineConnectionId === e.mediaEngineConnectionId && ((i = !0), t(n));
            }, b.x.DEFAULT),
            i
        );
    }
    cancelPendingUpdate() {
        null != this.updateTimer && (clearTimeout(this.updateTimer), (this.updateTimer = null));
    }
    validateFrame(e) {
        let { applicationId: t, iframeId: i } = (0, r.A)(e),
            n = a.A.getFrameByIframeId(i);
        if (null == n || n.applicationId !== t)
            throw new l.A(
                { errorCode: y.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                "The RPC socket does not belong to this Frame",
            );
        return { frameId: n.id, applicationId: n.applicationId };
    }
    validateSession(e, t) {
        let { frameId: i, applicationId: n } = this.validateFrame(e),
            s = this.session;
        if (null == s || s.id !== t || s.socketId !== e.id || s.frameId !== i || s.applicationId !== n)
            throw new l.A({ errorCode: y.Lw6.INVALID_COMMAND }, "Unknown or stale spatial voice session");
        if (!this.getCapabilities().available)
            throw (
                (this.release(),
                new l.A({ errorCode: y.Lw6.INVALID_COMMAND }, "Spatial voice is no longer supported by this client"))
            );
        let a = u.A.getRTCConnection();
        if (
            null == a ||
            a.channelId !== s.channelId ||
            a.getRTCConnectionId() !== s.rtcConnectionId ||
            a.getMediaEngineConnectionId() !== s.mediaEngineConnectionId
        )
            throw (
                (this.release(),
                new l.A({ errorCode: y.Lw6.INVALID_CHANNEL }, "The spatial voice session was invalidated"))
            );
        return s;
    }
}
let w = new I();
