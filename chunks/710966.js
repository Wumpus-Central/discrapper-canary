"use strict";
n.d(t, { AE: () => T, Ay: () => D, Nb: () => O }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(972347),
    a = n(205693),
    o = n(4511),
    l = n(52133),
    u = n(451988),
    c = n(8967),
    d = n(961350),
    _ = n(676279),
    f = n(927813),
    p = n(723702),
    h = n(661191),
    m = n(808180),
    E = n(652215),
    g = n(731854);
let A = 100,
    I = 0,
    T = { any: 100 },
    S = { any: 0 },
    y = 100,
    v = 3,
    N = 30 * f.A.Millis.SECOND,
    C = 120 * f.A.Millis.SECOND,
    R = -1 !== (0, _.EL)();
var O = (function (e) {
    return (e.UserSSRCUpdate = "user-ssrc-update"), (e.Update = "update"), e;
})({});
function b(e) {
    let { invertWants: t } = (0, c.P)("RTCMediaSinkWantsManager.getDefaultWants");
    return t ? { ...S } : { any: e };
}
class D extends s.A {
    userId;
    isStageChannel;
    supportsSeamless;
    ladder;
    connection = null;
    audioSsrcs = {};
    videoSsrcs = {};
    remoteVideoSsrcs = {};
    framesReceived = {};
    streamIds = {};
    offscreenUsers = {};
    offscreenDisabledUsers = {};
    streamPixelCounts = {};
    latestWants = b(A);
    participants = new Set();
    selectedParticipantId = null;
    delayedCall;
    offscreenTimeout;
    pipOpen = !1;
    simulcastDebugOverrides = new Map();
    videoHealthManager = null;
    otherUsers = new Set();
    constructor(e, t, n, r = new o.r()) {
        super(),
            (this.userId = e),
            (this.isStageChannel = t),
            (this.supportsSeamless = n),
            (this.ladder = r),
            (this.delayedCall = new u.J_(y, this.update)),
            (this.offscreenTimeout = new u.Ep()),
            m.X.on(m.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    getWantsLevel() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(t, e);
    }
    delayedUpdate = () => {
        this.delayedCall.delay();
    };
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    updateCallUserIds(e) {
        (this.otherUsers = new Set(e)), this.otherUsers.delete(d.default.getId()), this.update();
    }
    shouldReceiveFromUser(e) {
        let t = !(
            this.connection?.getLocalVideoDisabled(e) ||
            (this.userVideoDisabled(e) && this.videoHealthManager?.getCurrentVideoToggleState(e) !== E.bb8.AUTO_PROBING)
        );
        return m.X.isIncomingVideoEnabled() && t;
    }
    addLru = (e, t, n) => {
        if ((n.push(e), n.length <= v)) return;
        let r = -1,
            i = -1;
        for (let e = 0; e < n.length; e++) {
            let s = n[e],
                a = t - this.offscreenUsers[s];
            a > r && ((r = a), (i = e));
        }
        (this.offscreenDisabledUsers[n[i]] = !0), n.splice(i, 1);
    };
    updateOffscreenUsers = () => {
        if (!this.connection?.getActiveOutputSinkTrackingEnabled()) return;
        let e = Date.now(),
            t = [];
        for (let [n, r] of h.default.entries(this.streamIds))
            null != r &&
                (this.connection?.getHasActiveVideoOutputSink(r)
                    ? (delete this.offscreenUsers[n], delete this.offscreenDisabledUsers[n])
                    : null == this.offscreenUsers[n]
                      ? ((this.offscreenUsers[n] = e), this.addLru(n, e, t))
                      : this.offscreenDisabledUsers[n] ||
                        (e - this.offscreenUsers[n] >= this.getOffscreenTimeoutMs()
                            ? (this.offscreenDisabledUsers[n] = !0)
                            : this.addLru(n, e, t)));
        if (t.length > 0) {
            let n = e + this.getOffscreenTimeoutMs();
            for (let e of t) n = Math.min(n, this.offscreenUsers[e] + this.getOffscreenTimeoutMs());
            this.offscreenTimeout.start(n - e, this.update);
        } else this.offscreenTimeout.stop();
    };
    handleLocalVideoDisabled = (e, t) => {
        this.update();
    };
    handleLocalMute = (e, t) => {
        this.update();
    };
    invertWants(e, t) {
        for (let n of Object.values(this.videoSsrcs))
            for (let r of n) R ? (r.quality !== A ? (e[r.ssrc] = A) : (e[r.ssrc] = I)) : (e[r.ssrc] = t);
        for (let t of Object.values(this.audioSsrcs)) e[t] = A;
    }
    update = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = e.getWantsLevel(),
                r = b(n),
                s = r;
            (0, c.P)("RTCMediaSinkWantsManager.update").invertWants && (e.invertWants(r, n), R && (s = { ...r })),
                e.updateOffscreenUsers();
            let a = (0, p.isDesktop)() && e.isOneToOneCall() && !e.isStageChannel;
            for (let [i, s] of h.default.entries(e.videoSsrcs)) {
                let o = [],
                    u = !1,
                    c = e.streamPixelCounts[e.streamIds[i]] ?? 0,
                    d = e.getWantsLevel(c),
                    _ = s[0].ssrc;
                if (e.shouldReceiveFromUser(i)) {
                    let t = i === e.selectedParticipantId && n !== A && !e.pipOpen;
                    if (s.length > 1) {
                        for (let e of s)
                            e.quality === A
                                ? t
                                    ? ((r[e.ssrc] = A), (_ = e.ssrc))
                                    : (r[e.ssrc] = I)
                                : t
                                  ? (r[e.ssrc] = I)
                                  : (a && (r[e.ssrc] = d), (_ = e.ssrc));
                        if (e.supportsSeamless && !e.framesReceived[_])
                            for (let t of ((u = !0), (o = [_]), s))
                                t.ssrc !== _ &&
                                    e.framesReceived[t.ssrc] &&
                                    (t.quality === A ? (r[t.ssrc] = A) : (r[t.ssrc] = a ? d : n), o.push(t.ssrc));
                    } else t ? (r[_] = A) : a && (r[_] = d);
                } else for (let e of s) r[e.ssrc] = I;
                let f = e.getSimulcastOverrideQuality(i);
                for (let t of (f === g.r8.HIGH ? (r[_] = A) : f === g.r8.LOW && (r[_] = 50),
                (e.supportsSeamless && u) || (o = [_]),
                s))
                    o.includes(t.ssrc) || delete e.framesReceived[t.ssrc];
                (t.includes(i) || (void 0 !== e.remoteVideoSsrcs[i] && !(0, l.A)(e.remoteVideoSsrcs[i], o))) &&
                    ((e.remoteVideoSsrcs[i] = [...o]), e.emit("user-ssrc-update", i, e.audioSsrcs[i], o));
            }
            let o = R ? s : r;
            for (let [t, n] of Object.entries(e.audioSsrcs)) e.connection?.getLocalMute(t) && (o[n] = 0);
            return (
                null == e.connection || i().isEqual(e.latestWants, o) || ((e.latestWants = o), e.emit("update", o)), o
            );
        };
    })();
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this.connection?.removeListener(a.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.removeListener(a.yq.LocalMute, this.handleLocalMute),
            this.connection?.removeListener(a.yq.ActiveSinksChange, this.delayedUpdate),
            (this.connection = e),
            this.connection?.addListener(a.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.addListener(a.yq.LocalMute, this.handleLocalMute),
            this.connection?.addListener(a.yq.ActiveSinksChange, this.delayedUpdate),
            t && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t.filter((e) => e.active && (e.ssrc ?? 0) > 0).map((e) => ({ quality: e.quality ?? A, ssrc: e.ssrc }));
        if (n.length > 0) (this.videoSsrcs[e] = n), this.participants.add(e);
        else {
            if (void 0 !== this.videoSsrcs[e])
                for (let { ssrc: t } of this.videoSsrcs[e]) delete this.framesReceived[t];
            delete this.remoteVideoSsrcs[e],
                delete this.videoSsrcs[e],
                this.participants.delete(e),
                this.emit("user-ssrc-update", e, this.audioSsrcs[e], []);
        }
        return this.update(Array.from(this.participants));
    }
    setFirstFrameReceived(e) {
        return (this.framesReceived[e] = !0), this.update();
    }
    setStreamId(e, t) {
        return (
            null != t
                ? (this.streamIds[e] = t)
                : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]),
            this.update()
        );
    }
    destroyUser(e) {
        return (
            delete this.audioSsrcs[e],
            delete this.videoSsrcs[e],
            this.participants.delete(e),
            delete this.streamPixelCounts[this.streamIds[e]],
            delete this.streamIds[e],
            this.update(Array.from(this.participants))
        );
    }
    reset() {
        this.setConnection(null, !1),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = b(A)),
            m.X.off(m.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let t = [];
        if (
            (null != this.selectedParticipantId &&
                this.selectedParticipantId !== this.userId &&
                t.push(this.selectedParticipantId),
            null != e)
        )
            if (this.participants.has(e)) (this.selectedParticipantId = e), t.push(e);
            else {
                if (this.userId !== e) return console.warn(`Participant not found: ${e}`), this.latestWants;
                this.selectedParticipantId = e;
            }
        else this.selectedParticipantId = null;
        return this.update(t.filter((e) => this.videoSsrcs[e]?.length > 1));
    }
    setPipOpen(e) {
        return ((this.pipOpen = e), null != this.selectedParticipantId)
            ? this.update([this.selectedParticipantId])
            : this.latestWants;
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
        for (let t of Object.keys(this.videoSsrcs)) !this.connection?.getLocalVideoDisabled(t) && e++;
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? C : N;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : g.r8.NO_OVERRIDE;
    }
    incomingVideoEnabledChanged = () => {
        this.update();
    };
}
