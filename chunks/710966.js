"use strict";
n.d(t, { AE: () => I, Ay: () => v, Nb: () => O }), n(321073);
var r,
    i = n(735438),
    s = n.n(i),
    a = n(972347),
    o = n(205693),
    l = n(4511),
    u = n(52133),
    d = n(451988),
    c = n(8967),
    _ = n(961350),
    f = n(676279),
    E = n(927813),
    h = n(723702),
    p = n(661191),
    m = n(808180),
    g = n(652215),
    A = n(731854);
let I = { any: 100 },
    T = { any: 0 },
    S = 30 * E.A.Millis.SECOND,
    y = 120 * E.A.Millis.SECOND,
    N = -1 !== (0, f.EL)();
var O = (((r = {}).UserSSRCUpdate = "user-ssrc-update"), (r.Update = "update"), r);
function R(e) {
    let { invertWants: t } = (0, c.P)("RTCMediaSinkWantsManager.getDefaultWants");
    return t ? { ...T } : { any: e };
}
class v extends a.A {
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
    latestWants = R(100);
    participants = new Set();
    selectedParticipantId = null;
    delayedCall;
    offscreenTimeout;
    pipOpen = !1;
    simulcastDebugOverrides = new Map();
    videoHealthManager = null;
    otherUsers = new Set();
    constructor(e, t, n, r = new l.r()) {
        super(),
            (this.userId = e),
            (this.isStageChannel = t),
            (this.supportsSeamless = n),
            (this.ladder = r),
            (this.delayedCall = new d.J_(100, this.update)),
            (this.offscreenTimeout = new d.Ep()),
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
        (this.otherUsers = new Set(e)), this.otherUsers.delete(_.default.getId()), this.update();
    }
    shouldReceiveFromUser(e) {
        let t = !(
            this.connection?.getLocalVideoDisabled(e) ||
            (this.userVideoDisabled(e) && this.videoHealthManager?.getCurrentVideoToggleState(e) !== g.bb8.AUTO_PROBING)
        );
        return m.X.isIncomingVideoEnabled() && t;
    }
    addLru = (e, t, n) => {
        if ((n.push(e), n.length <= 3)) return;
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
        for (let [n, r] of p.default.entries(this.streamIds))
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
            for (let r of n) N ? (100 !== r.quality ? (e[r.ssrc] = 100) : (e[r.ssrc] = 0)) : (e[r.ssrc] = t);
        for (let t of Object.values(this.audioSsrcs)) e[t] = 100;
    }
    update = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = e.getWantsLevel(),
                r = R(n),
                i = r;
            (0, c.P)("RTCMediaSinkWantsManager.update").invertWants && (e.invertWants(r, n), N && (i = { ...r })),
                e.updateOffscreenUsers();
            let a = (0, h.isDesktop)() && e.isOneToOneCall() && !e.isStageChannel;
            for (let [i, s] of p.default.entries(e.videoSsrcs)) {
                let o = [],
                    l = !1,
                    d = e.streamPixelCounts[e.streamIds[i]] ?? 0,
                    c = e.getWantsLevel(d),
                    _ = s[0].ssrc;
                if (e.shouldReceiveFromUser(i)) {
                    let t = i === e.selectedParticipantId && 100 !== n && !e.pipOpen;
                    if (s.length > 1) {
                        for (let e of s)
                            100 === e.quality
                                ? t
                                    ? ((r[e.ssrc] = 100), (_ = e.ssrc))
                                    : (r[e.ssrc] = 0)
                                : t
                                  ? (r[e.ssrc] = 0)
                                  : (a && (r[e.ssrc] = c), (_ = e.ssrc));
                        if (e.supportsSeamless && !e.framesReceived[_])
                            for (let t of ((l = !0), (o = [_]), s))
                                t.ssrc !== _ &&
                                    e.framesReceived[t.ssrc] &&
                                    (100 === t.quality ? (r[t.ssrc] = 100) : (r[t.ssrc] = a ? c : n), o.push(t.ssrc));
                    } else t ? (r[_] = 100) : a && (r[_] = c);
                } else for (let e of s) r[e.ssrc] = 0;
                let f = e.getSimulcastOverrideQuality(i);
                for (let t of (f === A.r8.HIGH ? (r[_] = 100) : f === A.r8.LOW && (r[_] = 50),
                (e.supportsSeamless && l) || (o = [_]),
                s))
                    o.includes(t.ssrc) || delete e.framesReceived[t.ssrc];
                (t.includes(i) || (void 0 !== e.remoteVideoSsrcs[i] && !(0, u.A)(e.remoteVideoSsrcs[i], o))) &&
                    ((e.remoteVideoSsrcs[i] = [...o]), e.emit("user-ssrc-update", i, e.audioSsrcs[i], o));
            }
            let o = N ? i : r;
            for (let [t, n] of Object.entries(e.audioSsrcs)) e.connection?.getLocalMute(t) && (o[n] = 0);
            return (
                null == e.connection || s().isEqual(e.latestWants, o) || ((e.latestWants = o), e.emit("update", o)), o
            );
        };
    })();
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this.connection?.removeListener(o.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.removeListener(o.yq.LocalMute, this.handleLocalMute),
            this.connection?.removeListener(o.yq.ActiveSinksChange, this.delayedUpdate),
            (this.connection = e),
            this.connection?.addListener(o.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.addListener(o.yq.LocalMute, this.handleLocalMute),
            this.connection?.addListener(o.yq.ActiveSinksChange, this.delayedUpdate),
            t && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t
            .filter((e) => e.active && (e.ssrc ?? 0) > 0)
            .map((e) => ({ quality: e.quality ?? 100, ssrc: e.ssrc }));
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
            (this.latestWants = R(100)),
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
        return this.isStageChannel ? y : S;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : A.r8.NO_OVERRIDE;
    }
    incomingVideoEnabledChanged = () => {
        this.update();
    };
}
