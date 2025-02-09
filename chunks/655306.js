n.d(t, {
    Yy: () => I,
    ZP: () => R,
    ai: () => C
}),
    n(47120),
    n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(47770),
    s = n(46973),
    o = n(966146),
    l = n(902704),
    u = n(846519),
    c = n(621012),
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
let v = 100,
    y = 0,
    I = { any: 100 },
    T = 100,
    b = 3,
    S = 30 * _.Z.Millis.SECOND,
    A = 120 * _.Z.Millis.SECOND,
    N = -1 !== (0, f.hY)();
var C = (function (e) {
    return (e.UserSSRCUpdate = 'user-ssrc-update'), (e.Update = 'update'), e;
})({});
class R extends a.Z {
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
        let i = !((null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(e)) || (this.userVideoDisabled(e) && (null === (n = this.videoHealthManager) || void 0 === n ? void 0 : n.getCurrentVideoToggleState(e)) !== m.ZUi.AUTO_PROBING));
        return h.w.isIncomingVideoEnabled() && i;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var t, n, i, r, a, o;
        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null === (t = this.connection) || void 0 === t || t.removeListener(s.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(s.Sh.LocalMute, this.handleLocalMute), null === (i = this.connection) || void 0 === i || i.removeListener(s.Sh.ActiveSinksChange, this.delayedUpdate), (this.connection = e), null === (r = this.connection) || void 0 === r || r.addListener(s.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (a = this.connection) || void 0 === a || a.addListener(s.Sh.LocalMute, this.handleLocalMute), null === (o = this.connection) || void 0 === o || o.addListener(s.Sh.ActiveSinksChange, this.delayedUpdate), l && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t
            .filter((e) => {
                var t;
                return e.active && (null !== (t = e.ssrc) && void 0 !== t ? t : 0) > 0;
            })
            .map((e) => {
                var t;
                return {
                    quality: null !== (t = e.quality) && void 0 !== t ? t : 100,
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
        this.setConnection(null, !1), (this.audioSsrcs = {}), (this.videoSsrcs = {}), (this.remoteVideoSsrcs = {}), (this.framesReceived = {}), (this.streamIds = {}), (this.streamPixelCounts = {}), (this.latestWants = I), h.w.off(h.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let t = [];
        if ((null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && t.push(this.selectedParticipantId), null != e)) {
            if (this.participants.has(e)) (this.selectedParticipantId = e), t.push(e);
            else {
                if (this.userId !== e) return console.warn('Participant not found: '.concat(e)), this.latestWants;
                this.selectedParticipantId = e;
            }
        } else this.selectedParticipantId = null;
        return this.update(
            t.filter((e) => {
                var t;
                return (null === (t = this.videoSsrcs[e]) || void 0 === t ? void 0 : t.length) > 1;
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
            !(null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(n)) && e++;
        }
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? A : S;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : g.Z.NO_OVERRIDE;
    }
    constructor(e, t, n, i = new o.x()) {
        var a;
        super(),
            (a = this),
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
            (this.ladder = i),
            (this.connection = null),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.offscreenUsers = {}),
            (this.offscreenDisabledUsers = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = I),
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
                if ((n.push(e), n.length <= b)) return;
                let i = -1,
                    r = -1;
                for (let e = 0; e < n.length; e++) {
                    let a = n[e],
                        s = t - this.offscreenUsers[a];
                    s > i && ((i = s), (r = e));
                }
                (this.offscreenDisabledUsers[n[r]] = !0), n.splice(r, 1);
            }),
            (this.updateOffscreenUsers = () => {
                var e, t;
                if (!(null === (e = this.connection) || void 0 === e ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
                let n = Date.now(),
                    i = [];
                for (let [e, r] of p.default.entries(this.streamIds)) null != r && ((null === (t = this.connection) || void 0 === t ? void 0 : t.getHasActiveVideoOutputSink(r)) ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e]) : null == this.offscreenUsers[e] ? ((this.offscreenUsers[e] = n), this.addLru(e, n, i)) : this.offscreenDisabledUsers[e] || (n - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs() ? (this.offscreenDisabledUsers[e] = !0) : this.addLru(e, n, i)));
                if (i.length > 0) {
                    let e = n + this.getOffscreenTimeoutMs();
                    for (let t of i) e = Math.min(e, this.offscreenUsers[t] + this.getOffscreenTimeoutMs());
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
                    i = a.getWantsLevel(),
                    s = { any: i };
                a.updateOffscreenUsers();
                let { enabledSingle: o } = c.m.getCurrentConfig({ location: 'RTCMediaSinkWantsManager.update' }, { autoTrackExposure: !1 }),
                    u = o && a.isOneToOneCall() && !a.isStageChannel;
                for (let [t, r] of p.default.entries(a.videoSsrcs)) {
                    let o = [],
                        c = !1,
                        d = null !== (e = a.streamPixelCounts[a.streamIds[t]]) && void 0 !== e ? e : 0,
                        f = a.getWantsLevel(d),
                        _ = r[0].ssrc;
                    if (a.shouldReceiveFromUser(t)) {
                        let e = t === a.selectedParticipantId && i !== v && !a.pipOpen;
                        if (r.length > 1) {
                            for (let t of r) t.quality === v ? (e ? ((s[t.ssrc] = v), (_ = t.ssrc)) : (s[t.ssrc] = y)) : e ? (s[t.ssrc] = y) : (u && (s[t.ssrc] = f), (_ = t.ssrc));
                            if (a.supportsSeamless && !a.framesReceived[_]) for (let e of ((c = !0), (o = [_]), r)) e.ssrc !== _ && a.framesReceived[e.ssrc] && (e.quality === v ? (s[e.ssrc] = v) : (s[e.ssrc] = u ? f : i), o.push(e.ssrc));
                        } else e ? (s[_] = v) : u && (s[_] = f);
                    } else for (let e of r) s[e.ssrc] = y;
                    let p = a.getSimulcastOverrideQuality(t);
                    for (let e of (p === g.Z.HIGH ? (s[_] = v) : p === g.Z.LOW && (s[_] = 50), (a.supportsSeamless && c) || (o = [_]), r)) o.includes(e.ssrc) || delete a.framesReceived[e.ssrc];
                    (n.includes(t) || (void 0 !== a.remoteVideoSsrcs[t] && !(0, l.Z)(a.remoteVideoSsrcs[t], o))) && ((a.remoteVideoSsrcs[t] = [...o]), a.emit('user-ssrc-update', t, a.audioSsrcs[t], o));
                }
                for (let [e, n] of Object.entries(a.audioSsrcs)) (null === (t = a.connection) || void 0 === t ? void 0 : t.getLocalMute(e)) && (s[n] = 0);
                return N ? a.latestWants : (null == a.connection || r().isEqual(a.latestWants, s) || ((a.latestWants = s), a.emit('update', s)), s);
            }),
            (this.incomingVideoEnabledChanged = () => {
                this.update();
            }),
            (this.delayedCall = new u.sW(T, this.update)),
            (this.offscreenTimeout = new u.V7()),
            h.w.on(h.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
}
