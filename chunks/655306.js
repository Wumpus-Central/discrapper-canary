n.d(t, {
    Yy: () => v,
    ZP: () => C,
    ai: () => A
}),
    n(47120),
    n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(47770),
    a = n(46973),
    s = n(966146),
    l = n(902704),
    c = n(846519),
    u = n(621012),
    d = n(314897),
    f = n(526167),
    _ = n(70956),
    p = n(709054),
    h = n(798681),
    m = n(981631),
    g = n(65154);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = 100,
    y = 0,
    v = { any: 100 },
    O = 100,
    I = 3,
    S = 30 * _.Z.Millis.SECOND,
    T = 120 * _.Z.Millis.SECOND,
    N = -1 !== (0, f.hY)();
var A = (function (e) {
    return (e.UserSSRCUpdate = 'user-ssrc-update'), (e.Update = 'update'), e;
})({});
class C extends o.Z {
    getWantsLevel() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(t, e);
    }
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    updateCallUserIds(e) {
        e.delete(d.default.getId()), (this.otherUsers = e), this.update();
    }
    shouldReceiveFromUser(e) {
        var t, n;
        let r = !((null == (t = this.connection) ? void 0 : t.getLocalVideoDisabled(e)) || (this.userVideoDisabled(e) && (null == (n = this.videoHealthManager) ? void 0 : n.getCurrentVideoToggleState(e)) !== m.ZUi.AUTO_PROBING));
        return h.w.isIncomingVideoEnabled() && r;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var t, n, r, i, o, s;
        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null == (t = this.connection) || t.removeListener(a.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null == (n = this.connection) || n.removeListener(a.Sh.LocalMute, this.handleLocalMute), null == (r = this.connection) || r.removeListener(a.Sh.ActiveSinksChange, this.delayedUpdate), (this.connection = e), null == (i = this.connection) || i.addListener(a.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null == (o = this.connection) || o.addListener(a.Sh.LocalMute, this.handleLocalMute), null == (s = this.connection) || s.addListener(a.Sh.ActiveSinksChange, this.delayedUpdate), l && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t
            .filter((e) => {
                var t;
                return e.active && (null != (t = e.ssrc) ? t : 0) > 0;
            })
            .map((e) => {
                var t;
                return {
                    quality: null != (t = e.quality) ? t : 100,
                    ssrc: e.ssrc
                };
            });
        if (n.length > 0) (this.videoSsrcs[e] = n), this.participants.add(e);
        else {
            if (void 0 !== this.videoSsrcs[e]) for (let { ssrc: t } of this.videoSsrcs[e]) delete this.framesReceived[t];
            delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit('user-ssrc-update', e, this.audioSsrcs[e], []);
        }
        return this.update(Array.from(this.participants));
    }
    setFirstFrameReceived(e) {
        return (this.framesReceived[e] = !0), this.update();
    }
    setStreamId(e, t) {
        return null != t ? (this.streamIds[e] = t) : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]), this.update();
    }
    destroyUser(e) {
        return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e], this.update(Array.from(this.participants));
    }
    reset() {
        this.setConnection(null, !1), (this.audioSsrcs = {}), (this.videoSsrcs = {}), (this.remoteVideoSsrcs = {}), (this.framesReceived = {}), (this.streamIds = {}), (this.streamPixelCounts = {}), (this.latestWants = v), h.w.off(h.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let t = [];
        if ((null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && t.push(this.selectedParticipantId), null != e))
            if (this.participants.has(e)) (this.selectedParticipantId = e), t.push(e);
            else {
                if (this.userId !== e) return console.warn('Participant not found: '.concat(e)), this.latestWants;
                this.selectedParticipantId = e;
            }
        else this.selectedParticipantId = null;
        return this.update(
            t.filter((e) => {
                var t;
                return (null == (t = this.videoSsrcs[e]) ? void 0 : t.length) > 1;
            })
        );
    }
    setPipOpen(e) {
        return ((this.pipOpen = e), null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants;
    }
    getOffscreenDisabledUsers() {
        return this.offscreenDisabledUsers;
    }
    setSimulcastDebugOverride(e, t) {
        this.simulcastDebugOverrides.set(e, t), this.update();
    }
    setVideoSize(e, t) {
        t > 0 ? (this.streamPixelCounts[e] = t) : delete this.streamPixelCounts[e], this.delayedUpdate();
    }
    getVideoParticipantCount() {
        let e = 0;
        for (let n of Object.keys(this.videoSsrcs)) {
            var t;
            !(null == (t = this.connection) ? void 0 : t.getLocalVideoDisabled(n)) && e++;
        }
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? T : S;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : g.Z.NO_OVERRIDE;
    }
    constructor(e, t, n, r = new s.x()) {
        var o;
        super(),
            (o = this),
            E(this, 'userId', void 0),
            E(this, 'isStageChannel', void 0),
            E(this, 'supportsSeamless', void 0),
            E(this, 'ladder', void 0),
            E(this, 'connection', void 0),
            E(this, 'audioSsrcs', void 0),
            E(this, 'videoSsrcs', void 0),
            E(this, 'remoteVideoSsrcs', void 0),
            E(this, 'framesReceived', void 0),
            E(this, 'streamIds', void 0),
            E(this, 'offscreenUsers', void 0),
            E(this, 'offscreenDisabledUsers', void 0),
            E(this, 'streamPixelCounts', void 0),
            E(this, 'latestWants', void 0),
            E(this, 'participants', void 0),
            E(this, 'selectedParticipantId', void 0),
            E(this, 'delayedCall', void 0),
            E(this, 'offscreenTimeout', void 0),
            E(this, 'pipOpen', void 0),
            E(this, 'simulcastDebugOverrides', void 0),
            E(this, 'videoHealthManager', void 0),
            E(this, 'otherUsers', void 0),
            E(this, 'delayedUpdate', void 0),
            E(this, 'addLru', void 0),
            E(this, 'updateOffscreenUsers', void 0),
            E(this, 'handleLocalVideoDisabled', void 0),
            E(this, 'handleLocalMute', void 0),
            E(this, 'update', void 0),
            E(this, 'incomingVideoEnabledChanged', void 0),
            (this.userId = e),
            (this.isStageChannel = t),
            (this.supportsSeamless = n),
            (this.ladder = r),
            (this.connection = null),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.offscreenUsers = {}),
            (this.offscreenDisabledUsers = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = v),
            (this.participants = new Set()),
            (this.selectedParticipantId = null),
            (this.pipOpen = !1),
            (this.simulcastDebugOverrides = new Map()),
            (this.videoHealthManager = null),
            (this.otherUsers = new Set()),
            (this.delayedUpdate = () => {
                this.delayedCall.delay();
            }),
            (this.addLru = (e, t, n) => {
                if ((n.push(e), n.length <= I)) return;
                let r = -1,
                    i = -1;
                for (let e = 0; e < n.length; e++) {
                    let o = n[e],
                        a = t - this.offscreenUsers[o];
                    a > r && ((r = a), (i = e));
                }
                (this.offscreenDisabledUsers[n[i]] = !0), n.splice(i, 1);
            }),
            (this.updateOffscreenUsers = () => {
                var e, t;
                if (!(null == (e = this.connection) ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
                let n = Date.now(),
                    r = [];
                for (let [e, i] of p.default.entries(this.streamIds)) null != i && ((null == (t = this.connection) ? void 0 : t.getHasActiveVideoOutputSink(i)) ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e]) : null == this.offscreenUsers[e] ? ((this.offscreenUsers[e] = n), this.addLru(e, n, r)) : this.offscreenDisabledUsers[e] || (n - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs() ? (this.offscreenDisabledUsers[e] = !0) : this.addLru(e, n, r)));
                if (r.length > 0) {
                    let e = n + this.getOffscreenTimeoutMs();
                    for (let t of r) e = Math.min(e, this.offscreenUsers[t] + this.getOffscreenTimeoutMs());
                    this.offscreenTimeout.start(e - n, this.update);
                } else this.offscreenTimeout.stop();
            }),
            (this.handleLocalVideoDisabled = (e, t) => {
                this.update();
            }),
            (this.handleLocalMute = (e, t) => {
                this.update();
            }),
            (this.update = function () {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = o.getWantsLevel(),
                    a = { any: r };
                o.updateOffscreenUsers();
                let { enabledSingle: s } = u.m.getCurrentConfig({ location: 'RTCMediaSinkWantsManager.update' }, { autoTrackExposure: !1 }),
                    c = s && o.isOneToOneCall() && !o.isStageChannel;
                for (let [t, i] of p.default.entries(o.videoSsrcs)) {
                    let s = [],
                        u = !1,
                        d = null != (e = o.streamPixelCounts[o.streamIds[t]]) ? e : 0,
                        f = o.getWantsLevel(d),
                        _ = i[0].ssrc;
                    if (o.shouldReceiveFromUser(t)) {
                        let e = t === o.selectedParticipantId && r !== b && !o.pipOpen;
                        if (i.length > 1) {
                            for (let t of i) t.quality === b ? (e ? ((a[t.ssrc] = b), (_ = t.ssrc)) : (a[t.ssrc] = y)) : e ? (a[t.ssrc] = y) : (c && (a[t.ssrc] = f), (_ = t.ssrc));
                            if (o.supportsSeamless && !o.framesReceived[_]) for (let e of ((u = !0), (s = [_]), i)) e.ssrc !== _ && o.framesReceived[e.ssrc] && (e.quality === b ? (a[e.ssrc] = b) : (a[e.ssrc] = c ? f : r), s.push(e.ssrc));
                        } else e ? (a[_] = b) : c && (a[_] = f);
                    } else for (let e of i) a[e.ssrc] = y;
                    let p = o.getSimulcastOverrideQuality(t);
                    for (let e of (p === g.Z.HIGH ? (a[_] = b) : p === g.Z.LOW && (a[_] = 50), (o.supportsSeamless && u) || (s = [_]), i)) s.includes(e.ssrc) || delete o.framesReceived[e.ssrc];
                    (n.includes(t) || (void 0 !== o.remoteVideoSsrcs[t] && !(0, l.Z)(o.remoteVideoSsrcs[t], s))) && ((o.remoteVideoSsrcs[t] = [...s]), o.emit('user-ssrc-update', t, o.audioSsrcs[t], s));
                }
                for (let [e, n] of Object.entries(o.audioSsrcs)) (null == (t = o.connection) ? void 0 : t.getLocalMute(e)) && (a[n] = 0);
                return N ? o.latestWants : (null == o.connection || i().isEqual(o.latestWants, a) || ((o.latestWants = a), o.emit('update', a)), a);
            }),
            (this.incomingVideoEnabledChanged = () => {
                this.update();
            }),
            (this.delayedCall = new c.sW(O, this.update)),
            (this.offscreenTimeout = new c.V7()),
            h.w.on(h.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
}
