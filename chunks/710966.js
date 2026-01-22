n.d(t, {
    AE: () => O,
    Ay: () => N,
    Nb: () => C,
}),
    n(896048),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(972347),
    s = n(205693),
    o = n(4511),
    l = n(52133),
    c = n(451988),
    u = n(961350),
    d = n(676279),
    f = n(927813),
    p = n(723702),
    _ = n(661191),
    h = n(808180),
    m = n(652215),
    g = n(731854);

function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let b = 100,
    y = 0,
    O = {
        any: 100,
    },
    A = 100,
    v = 3,
    S = 30 * f.A.Millis.SECOND,
    I = 120 * f.A.Millis.SECOND,
    T = -1 !== (0, d.EL)();
var C = (function (e) {
    return (e.UserSSRCUpdate = "user-ssrc-update"), (e.Update = "update"), e;
})({});
class N extends a.A {
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
        (this.otherUsers = new Set(e)), this.otherUsers.delete(u.default.getId()), this.update();
    }
    shouldReceiveFromUser(e) {
        var t, n;
        let r = !(
            (null == (t = this.connection) ? void 0 : t.getLocalVideoDisabled(e)) ||
            (this.userVideoDisabled(e) &&
                (null == (n = this.videoHealthManager) ? void 0 : n.getCurrentVideoToggleState(e)) !==
                    m.bb8.AUTO_PROBING)
        );
        return h.X.isIncomingVideoEnabled() && r;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var t, n, r, i, a, o;
        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null == (t = this.connection) || t.removeListener(s.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            null == (n = this.connection) || n.removeListener(s.yq.LocalMute, this.handleLocalMute),
            null == (r = this.connection) || r.removeListener(s.yq.ActiveSinksChange, this.delayedUpdate),
            (this.connection = e),
            null == (i = this.connection) || i.addListener(s.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            null == (a = this.connection) || a.addListener(s.yq.LocalMute, this.handleLocalMute),
            null == (o = this.connection) || o.addListener(s.yq.ActiveSinksChange, this.delayedUpdate),
            l && this.update();
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
                    ssrc: e.ssrc,
                };
            });
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
            (this.latestWants = O),
            h.X.off(h.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
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
                if (this.userId !== e) return console.warn("Participant not found: ".concat(e)), this.latestWants;
                this.selectedParticipantId = e;
            }
        else this.selectedParticipantId = null;
        return this.update(
            t.filter((e) => {
                var t;
                return (null == (t = this.videoSsrcs[e]) ? void 0 : t.length) > 1;
            }),
        );
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
        for (let n of Object.keys(this.videoSsrcs)) {
            var t;
            !(null == (t = this.connection) ? void 0 : t.getLocalVideoDisabled(n)) && e++;
        }
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? I : S;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : g.r8.NO_OVERRIDE;
    }
    constructor(e, t, n, r = new o.r()) {
        var a;
        super(),
            (a = this),
            E(this, "userId", void 0),
            E(this, "isStageChannel", void 0),
            E(this, "supportsSeamless", void 0),
            E(this, "ladder", void 0),
            E(this, "connection", void 0),
            E(this, "audioSsrcs", void 0),
            E(this, "videoSsrcs", void 0),
            E(this, "remoteVideoSsrcs", void 0),
            E(this, "framesReceived", void 0),
            E(this, "streamIds", void 0),
            E(this, "offscreenUsers", void 0),
            E(this, "offscreenDisabledUsers", void 0),
            E(this, "streamPixelCounts", void 0),
            E(this, "latestWants", void 0),
            E(this, "participants", void 0),
            E(this, "selectedParticipantId", void 0),
            E(this, "delayedCall", void 0),
            E(this, "offscreenTimeout", void 0),
            E(this, "pipOpen", void 0),
            E(this, "simulcastDebugOverrides", void 0),
            E(this, "videoHealthManager", void 0),
            E(this, "otherUsers", void 0),
            E(this, "delayedUpdate", void 0),
            E(this, "addLru", void 0),
            E(this, "updateOffscreenUsers", void 0),
            E(this, "handleLocalVideoDisabled", void 0),
            E(this, "handleLocalMute", void 0),
            E(this, "update", void 0),
            E(this, "incomingVideoEnabledChanged", void 0),
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
            (this.latestWants = O),
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
                if ((n.push(e), n.length <= v)) return;
                let r = -1,
                    i = -1;
                for (let e = 0; e < n.length; e++) {
                    let a = n[e],
                        s = t - this.offscreenUsers[a];
                    s > r && ((r = s), (i = e));
                }
                (this.offscreenDisabledUsers[n[i]] = !0), n.splice(i, 1);
            }),
            (this.updateOffscreenUsers = () => {
                var e, t;
                if (!(null == (e = this.connection) ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
                let n = Date.now(),
                    r = [];
                for (let [e, i] of _.default.entries(this.streamIds))
                    null != i &&
                        ((null == (t = this.connection) ? void 0 : t.getHasActiveVideoOutputSink(i))
                            ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e])
                            : null == this.offscreenUsers[e]
                              ? ((this.offscreenUsers[e] = n), this.addLru(e, n, r))
                              : this.offscreenDisabledUsers[e] ||
                                (n - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs()
                                    ? (this.offscreenDisabledUsers[e] = !0)
                                    : this.addLru(e, n, r)));
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
                    r = a.getWantsLevel(),
                    s = {
                        any: r,
                    };
                a.updateOffscreenUsers();
                let o = (0, p.isDesktop)() && a.isOneToOneCall() && !a.isStageChannel;
                for (let [t, i] of _.default.entries(a.videoSsrcs)) {
                    let c = [],
                        u = !1,
                        d = null != (e = a.streamPixelCounts[a.streamIds[t]]) ? e : 0,
                        f = a.getWantsLevel(d),
                        p = i[0].ssrc;
                    if (a.shouldReceiveFromUser(t)) {
                        let e = t === a.selectedParticipantId && r !== b && !a.pipOpen;
                        if (i.length > 1) {
                            for (let t of i)
                                t.quality === b
                                    ? e
                                        ? ((s[t.ssrc] = b), (p = t.ssrc))
                                        : (s[t.ssrc] = y)
                                    : e
                                      ? (s[t.ssrc] = y)
                                      : (o && (s[t.ssrc] = f), (p = t.ssrc));
                            if (a.supportsSeamless && !a.framesReceived[p])
                                for (let e of ((u = !0), (c = [p]), i))
                                    e.ssrc !== p &&
                                        a.framesReceived[e.ssrc] &&
                                        (e.quality === b ? (s[e.ssrc] = b) : (s[e.ssrc] = o ? f : r), c.push(e.ssrc));
                        } else e ? (s[p] = b) : o && (s[p] = f);
                    } else for (let e of i) s[e.ssrc] = y;
                    let _ = a.getSimulcastOverrideQuality(t);
                    for (let e of (_ === g.r8.HIGH ? (s[p] = b) : _ === g.r8.LOW && (s[p] = 50),
                    (a.supportsSeamless && u) || (c = [p]),
                    i))
                        c.includes(e.ssrc) || delete a.framesReceived[e.ssrc];
                    (n.includes(t) || (void 0 !== a.remoteVideoSsrcs[t] && !(0, l.A)(a.remoteVideoSsrcs[t], c))) &&
                        ((a.remoteVideoSsrcs[t] = [...c]), a.emit("user-ssrc-update", t, a.audioSsrcs[t], c));
                }
                for (let [e, n] of Object.entries(a.audioSsrcs))
                    (null == (t = a.connection) ? void 0 : t.getLocalMute(e)) && (s[n] = 0);
                return T
                    ? a.latestWants
                    : (null == a.connection ||
                          i().isEqual(a.latestWants, s) ||
                          ((a.latestWants = s), a.emit("update", s)),
                      s);
            }),
            (this.incomingVideoEnabledChanged = () => {
                this.update();
            }),
            (this.delayedCall = new c.J_(A, this.update)),
            (this.offscreenTimeout = new c.Ep()),
            h.X.on(h.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
}
