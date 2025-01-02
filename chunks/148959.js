r.d(n, {
    Z: function () {
        return b;
    },
    y: function () {
        return i;
    }
});
var i,
    a,
    s,
    o = r(47120);
var l = r(392711),
    u = r.n(l),
    c = r(47770),
    d = r(846519),
    f = r(710845),
    _ = r(314897),
    h = r(70956),
    p = r(960048),
    m = r(65154);
function g(e, n, r) {
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
let E = 10 * h.Z.Millis.SECOND,
    v = 10 * h.Z.Millis.SECOND,
    I = 500;
function T(e, n) {
    !e && p.Z.captureMessage('Assert failed in GoLiveQualityManager: ' + n);
}
!(function (e) {
    (e.RequestedSSRCsUpdate = 'requested-ssrcs-update'), (e.RequestedStreamsUpdate = 'requested-streams-update');
})(i || (i = {})),
    !(function (e) {
        (e[(e.Ready = 0)] = 'Ready'), (e[(e.Pending = 1)] = 'Pending'), (e[(e.PendingSeamless = 2)] = 'PendingSeamless'), (e[(e.Finalizing = 3)] = 'Finalizing');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.None = 0)] = 'None'), (e[(e.Low = 60)] = 'Low'), (e[(e.High = 100)] = 'High');
    })(s || (s = {}));
class b extends c.Z {
    setUserID(e) {
        this.userId = e;
    }
    getUserID() {
        return this.userId;
    }
    updateAudioAndVideoStreamInfo(e, n) {
        let r = n.filter((e) => e.active),
            i = this.videoStreams.length !== r.length;
        if (((this.audioSSRC = e), (this.videoStreams = r), this.videoStreams.length > 1)) {
            var a, s, o, l;
            let e = null !== (o = null === (a = u().minBy(this.videoStreams, (e) => e.quality)) || void 0 === a ? void 0 : a.ssrc) && void 0 !== o ? o : 0,
                n = null !== (l = null === (s = u().maxBy(this.videoStreams, (e) => e.quality)) || void 0 === s ? void 0 : s.ssrc) && void 0 !== l ? l : 0;
            (e !== this.lqSSRC || n !== this.hqSSRC || i) && ((this.lqSSRC = e), (this.hqSSRC = n), this.reset(), this.update());
        } else i && this.reset(), this.update();
    }
    setGoLiveStreamDowngraded(e) {
        if (!(!this.senderSupportsSimulcast() || this.isOneToOneCall()) && this.debugQualityOverride === m.Z.NO_OVERRIDE && e !== this.downgraded) this.isDowngradeChangeAllowed(e) && (this.logger.info('Setting downgraded to '.concat(e)), (this.downgraded = e), (this.lastDowngradeChangeTime = Date.now()), this.update());
    }
    isDowngraded() {
        return this.downgraded;
    }
    setSimulcastDebugOverride(e) {
        if (!!this.senderSupportsSimulcast() && e !== this.debugQualityOverride) (this.debugQualityOverride = e), this.update();
    }
    setFirstFrameReceived(e) {
        if (((this.currentSSRC = e), !!this.senderSupportsSimulcast())) {
            if (1 !== this.switchState && 2 !== this.switchState) {
                this.logger.warn('Received the first frame of ssrc '.concat(e, ' while switchState is ').concat(this.switchState));
                return;
            }
            this.pendingSSRC === e ? ((this.pendingSSRC = -1), 2 === this.switchState ? ((this.switchState = 3), this.update()) : (this.switchState = 0)) : this.logger.warn('Pending to switch to ssrc: '.concat(this.pendingSSRC, ' but received the first frame of ').concat(e, ', noop'));
        }
    }
    setThrottleStreamDowngradeChanges(e) {
        this.throttleDowngradeChanges = e;
    }
    senderSupportsSimulcast() {
        return this.videoStreams.length > 1;
    }
    updateCallUserIds(e) {
        e.delete(_.default.getId()), (this.otherUsers = e), this.update();
    }
    onIncomingVideoEnabled(e) {
        this.incomingVideoEnabled !== e && ((this.incomingVideoEnabled = e), this.update());
    }
    update() {
        if (void 0 !== this.userId && null !== this.userId && 0 !== this.videoStreams.length) this.senderSupportsSimulcast() ? (this.supportsSeamless ? this.seamlessUpdate() : this.directUpdate()) : this.singleCastUpdate();
    }
    seamlessUpdate() {
        let e = this.getQuality();
        if (0 === e && this.isReceiving()) {
            this.reset(), this.stopStreams();
            return;
        }
        switch (this.switchState) {
            case 0:
                T(-1 === this.pendingSSRC, 'Ready state should not have a pendingSSRC'), this.shouldSeamlessTransition(e) ? (this.logger.info('Starting seamless transition to '.concat(100 === e ? 'HQ' : 'LQ', ' (ssrc ').concat(100 === e ? this.hqSSRC : this.lqSSRC, ')')), (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC), (this.switchState = 2), this.requestBoth()) : (this.logger.info('Starting non-seamless transition to '.concat(100 === e ? 'HQ' : 'LQ', ' (ssrc ').concat(100 === e ? this.hqSSRC : this.lqSSRC, ')')), (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC), (this.switchState = 1), 100 === e ? this.requestHQ() : this.requestLQ());
                break;
            case 2:
                T(-1 !== this.pendingSSRC, 'PendingSeamless state should have a pendingSSRC'), 60 === e && this.pendingHQ() ? (this.logger.info('Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc '.concat(this.lqSSRC, ')')), (this.switchState = 0), (this.pendingSSRC = -1), this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info('Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc '.concat(this.hqSSRC, ')')), (this.switchState = 0), (this.pendingSSRC = -1), this.requestHQ());
                break;
            case 1:
                T(-1 !== this.pendingSSRC, 'Pending state should have a pendingSSRC'), 60 === e && this.pendingHQ() ? (this.logger.info('Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc '.concat(this.lqSSRC, ')')), (this.pendingSSRC = this.lqSSRC), this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info('Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc '.concat(this.hqSSRC, ')')), (this.pendingSSRC = this.hqSSRC), this.requestHQ());
                break;
            case 3:
                T(this.isReceiving(), 'Should be receiving a stream in Finalizing state'), this.logger.info('Finalizing seamless transition to '.concat(100 === e ? 'HQ' : 'LQ')), 100 === e ? this.requestHQ() : 60 === e && this.requestLQ(), (this.switchState = 0), (this.pendingSSRC = -1);
        }
    }
    directUpdate() {
        let e = this.getQuality();
        if (0 === e && this.isReceiving()) {
            this.reset(), this.stopStreams();
            return;
        }
        this.logger.info('Starting direct transition to '.concat(100 === e ? 'HQ' : 'LQ', ' (ssrc ').concat(100 === e ? this.hqSSRC : this.lqSSRC, ')')), 60 === e ? this.requestLQ() : this.requestHQ();
    }
    singleCastUpdate() {
        T(1 === this.videoStreams.length, 'singleCastUpdate should only be called when there is exactly one video stream'), T(0 === this.switchState, 'Switch state should not be set for non-simulcast streams'), T(-1 === this.pendingSSRC, 'Pending SSRC should not be set for non-simulcast streams'), this.incomingVideoEnabled ? this.requestDefaultStream() : this.stopDefaultStream();
    }
    pendingHQ() {
        return 1 === this.switchState && this.pendingSSRC === this.hqSSRC;
    }
    pendingLQ() {
        return 1 === this.switchState && this.pendingSSRC === this.lqSSRC;
    }
    receivingHQ() {
        return this.currentSSRC === this.hqSSRC;
    }
    receivingLQ() {
        return this.currentSSRC === this.lqSSRC;
    }
    isReceiving() {
        return -1 !== this.currentSSRC;
    }
    isDowngradeChangeAllowed(e) {
        return !this.throttleDowngradeChanges || void 0 === this.lastDowngradeChangeTime || (e ? Date.now() - this.lastDowngradeChangeTime >= v : Date.now() - this.lastDowngradeChangeTime >= E);
    }
    shouldSeamlessTransition(e) {
        if (!this.supportsSeamless) return !1;
        if (!this.isReceiving()) return !1;
        if ((this.receivingHQ() && 100 === e) || (this.receivingLQ() && 60 === e)) return !1;
        else if (60 === e) return !1;
        else if (this.receivingLQ() && 100 === e && this.isOneToOneCall()) return !1;
        return !0;
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    reset() {
        (this.pendingSSRC = -1), (this.currentSSRC = -1), (this.lastDowngradeChangeTime = void 0), (this.switchState = 0), (this.streamId = null), (this.resolutionWidth = 0), (this.resolutionHeight = 0);
    }
    request(e, n) {
        if (void 0 !== this.userId) {
            let r = e;
            n.forEach((e) => {
                null == r.resolutionWants && (r.resolutionWants = {}),
                    r[e] > 0 &&
                        (r.resolutionWants[e] = {
                            width: this.resolutionWidth,
                            height: this.resolutionHeight
                        });
            }),
                this.emit('requested-ssrcs-update', this.userId, this.audioSSRC, n),
                this.emit('requested-streams-update', r);
        }
    }
    requestDefaultStream() {
        T(1 === this.videoStreams.length, 'requestDefaultStream should only be called when there is exactly one video stream');
        let e = {};
        e[this.videoStreams[0].ssrc] = 100;
        let n = [this.videoStreams[0].ssrc];
        this.request(e, n);
    }
    stopDefaultStream() {
        T(1 === this.videoStreams.length, 'stopDefaultStream should only be called when there is exactly one video stream');
        let e = {};
        e[this.videoStreams[0].ssrc] = 0;
        let n = [];
        this.request(e, n);
    }
    requestBoth() {
        T(2 === this.videoStreams.length, 'requestBoth should only be called when there are two video streams'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestBoth called with invalid hqSSRC'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestBoth called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 100);
        let n = [this.lqSSRC, this.hqSSRC];
        this.request(e, n),
            setTimeout(() => {
                2 === this.switchState && (this.logger.warn('Seamless transition timeout, forcing switch'), this.reset(), this.update());
            }, 2000);
    }
    requestHQ() {
        T(2 === this.videoStreams.length, 'requestHQ should only be called when there are two video streams'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestHQ called with invalid hqSSRC'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestHQ called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 100);
        let n = [this.hqSSRC];
        this.request(e, n);
    }
    requestLQ() {
        T(2 === this.videoStreams.length, 'requestLQ should only be called when there are two video streams'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestLQ called with invalid hqSSRC'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestLQ called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 0);
        let n = [this.lqSSRC];
        this.request(e, n);
    }
    stopStreams() {
        T(2 === this.videoStreams.length, 'stopStreams should only be called when there are two video streams'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'stopStreams called with invalid hqSSRC'), T(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'stopStreams called with invalid lqSSRC'), T(-1 === this.pendingSSRC, 'pendingSSRC should be reset before stopping streams');
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 0);
        let n = [];
        this.request(e, n);
    }
    getQuality() {
        if (!this.incomingVideoEnabled) return 0;
        if (this.debugQualityOverride === m.Z.LOW) return 60;
        if (this.debugQualityOverride === m.Z.HIGH || this.isOneToOneCall()) return 100;
        else if (this.downgraded && this.senderSupportsSimulcast()) return 60;
        else return 100;
    }
    setVideoSize(e, n, r) {
        this.streamId === e && ((this.resolutionWidth = n), (this.resolutionHeight = r), this.delayedUpdate());
    }
    setStreamId(e) {
        this.streamId !== e && ((this.streamId = e), (this.resolutionWidth = 0), (this.resolutionHeight = 0), this.delayedUpdate());
    }
    constructor(e) {
        super(),
            g(this, 'supportsSeamless', void 0),
            g(this, 'logger', void 0),
            g(this, 'userId', void 0),
            g(this, 'streamId', void 0),
            g(this, 'resolutionWidth', void 0),
            g(this, 'resolutionHeight', void 0),
            g(this, 'videoStreams', void 0),
            g(this, 'audioSSRC', void 0),
            g(this, 'hqSSRC', void 0),
            g(this, 'lqSSRC', void 0),
            g(this, 'switchState', void 0),
            g(this, 'pendingSSRC', void 0),
            g(this, 'currentSSRC', void 0),
            g(this, 'downgraded', void 0),
            g(this, 'throttleDowngradeChanges', void 0),
            g(this, 'lastDowngradeChangeTime', void 0),
            g(this, 'otherUsers', void 0),
            g(this, 'debugQualityOverride', void 0),
            g(this, 'incomingVideoEnabled', void 0),
            g(this, 'delayedCall', void 0),
            g(this, 'delayedUpdate', void 0),
            (this.supportsSeamless = e),
            (this.streamId = null),
            (this.resolutionWidth = 0),
            (this.resolutionHeight = 0),
            (this.videoStreams = []),
            (this.audioSSRC = 0),
            (this.hqSSRC = 0),
            (this.lqSSRC = 0),
            (this.switchState = 0),
            (this.pendingSSRC = -1),
            (this.currentSSRC = -1),
            (this.downgraded = !1),
            (this.throttleDowngradeChanges = !0),
            (this.lastDowngradeChangeTime = void 0),
            (this.otherUsers = new Set()),
            (this.debugQualityOverride = m.Z.NO_OVERRIDE),
            (this.incomingVideoEnabled = !0),
            (this.delayedUpdate = () => {
                this.delayedCall.delay();
            }),
            (this.logger = new f.Z('GoLiveQualityManager')),
            (this.delayedCall = new d.sW(I, () => {
                this.update();
            }));
    }
}
