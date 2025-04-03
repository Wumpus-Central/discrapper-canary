n.d(t, {
    Z: () => E,
    y: () => m
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(47770),
    a = n(846519),
    s = n(710845),
    l = n(314897),
    c = n(70956),
    u = n(960048),
    d = n(65154);
function f(e, t, n) {
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
let _ = 10 * c.Z.Millis.SECOND,
    p = 10 * c.Z.Millis.SECOND,
    h = 500;
var m = (function (e) {
    return (e.RequestedSSRCsUpdate = 'requested-ssrcs-update'), (e.RequestedStreamsUpdate = 'requested-streams-update'), e;
})({});
function g(e, t) {
    e || u.Z.captureMessage('Assert failed in GoLiveQualityManager: ' + t);
}
class E extends o.Z {
    setUserID(e) {
        this.userId = e;
    }
    getUserID() {
        return this.userId;
    }
    updateAudioAndVideoStreamInfo(e, t) {
        let n = t.filter((e) => e.active),
            r = this.videoStreams.length !== n.length;
        if (((this.audioSSRC = e), (this.videoStreams = n), this.videoStreams.length > 1)) {
            var o, a, s, l;
            let e = null != (s = null == (o = i().minBy(this.videoStreams, (e) => e.quality)) ? void 0 : o.ssrc) ? s : 0,
                t = null != (l = null == (a = i().maxBy(this.videoStreams, (e) => e.quality)) ? void 0 : a.ssrc) ? l : 0;
            (e !== this.lqSSRC || t !== this.hqSSRC || r) && ((this.lqSSRC = e), (this.hqSSRC = t), this.reset(), this.update());
        } else r && this.reset(), this.update();
    }
    setGoLiveStreamDowngraded(e) {
        !(!this.senderSupportsSimulcast() || this.isOneToOneCall()) && this.debugQualityOverride === d.Z.NO_OVERRIDE && e !== this.downgraded && this.isDowngradeChangeAllowed(e) && (this.logger.info('Setting downgraded to '.concat(e)), (this.downgraded = e), (this.lastDowngradeChangeTime = Date.now()), this.update());
    }
    isDowngraded() {
        return this.downgraded;
    }
    setSimulcastDebugOverride(e) {
        this.senderSupportsSimulcast() && e !== this.debugQualityOverride && ((this.debugQualityOverride = e), this.update());
    }
    setFirstFrameReceived(e) {
        if (((this.currentSSRC = e), this.senderSupportsSimulcast())) {
            if (1 !== this.switchState && 2 !== this.switchState) return void this.logger.warn('Received the first frame of ssrc '.concat(e, ' while switchState is ').concat(this.switchState));
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
        e.delete(l.default.getId()), (this.otherUsers = e), this.update();
    }
    onIncomingVideoEnabled(e) {
        this.incomingVideoEnabled !== e && ((this.incomingVideoEnabled = e), this.update());
    }
    update() {
        void 0 !== this.userId && null !== this.userId && 0 !== this.videoStreams.length && (this.senderSupportsSimulcast() ? (this.supportsSeamless ? this.seamlessUpdate() : this.directUpdate()) : this.singleCastUpdate());
    }
    seamlessUpdate() {
        let e = this.getQuality();
        if (0 === e && this.isReceiving()) {
            this.reset(), this.stopStreams();
            return;
        }
        switch (this.switchState) {
            case 0:
                g(-1 === this.pendingSSRC, 'Ready state should not have a pendingSSRC'), this.shouldSeamlessTransition(e) ? (this.logger.info('Starting seamless transition to '.concat(100 === e ? 'HQ' : 'LQ', ' (ssrc ').concat(100 === e ? this.hqSSRC : this.lqSSRC, ')')), (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC), (this.switchState = 2), this.requestBoth()) : (this.logger.info('Starting non-seamless transition to '.concat(100 === e ? 'HQ' : 'LQ', ' (ssrc ').concat(100 === e ? this.hqSSRC : this.lqSSRC, ')')), (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC), (this.switchState = 1), 100 === e ? this.requestHQ() : this.requestLQ());
                break;
            case 2:
                g(-1 !== this.pendingSSRC, 'PendingSeamless state should have a pendingSSRC'), 60 === e && this.pendingHQ() ? (this.logger.info('Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc '.concat(this.lqSSRC, ')')), (this.switchState = 0), (this.pendingSSRC = -1), this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info('Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc '.concat(this.hqSSRC, ')')), (this.switchState = 0), (this.pendingSSRC = -1), this.requestHQ());
                break;
            case 1:
                g(-1 !== this.pendingSSRC, 'Pending state should have a pendingSSRC'), 60 === e && this.pendingHQ() ? (this.logger.info('Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc '.concat(this.lqSSRC, ')')), (this.pendingSSRC = this.lqSSRC), this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info('Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc '.concat(this.hqSSRC, ')')), (this.pendingSSRC = this.hqSSRC), this.requestHQ());
                break;
            case 3:
                g(this.isReceiving(), 'Should be receiving a stream in Finalizing state'), this.logger.info('Finalizing seamless transition to '.concat(100 === e ? 'HQ' : 'LQ')), 100 === e ? this.requestHQ() : 60 === e && this.requestLQ(), (this.switchState = 0), (this.pendingSSRC = -1);
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
        g(1 === this.videoStreams.length, 'singleCastUpdate should only be called when there is exactly one video stream'), g(0 === this.switchState, 'Switch state should not be set for non-simulcast streams'), g(-1 === this.pendingSSRC, 'Pending SSRC should not be set for non-simulcast streams'), this.incomingVideoEnabled ? this.requestDefaultStream() : this.stopDefaultStream();
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
        return !this.throttleDowngradeChanges || void 0 === this.lastDowngradeChangeTime || (e ? Date.now() - this.lastDowngradeChangeTime >= p : Date.now() - this.lastDowngradeChangeTime >= _);
    }
    shouldSeamlessTransition(e) {
        if (!this.supportsSeamless || !this.isReceiving()) return !1;
        if ((this.receivingHQ() && 100 === e) || (this.receivingLQ() && 60 === e)) return !1;
        if (60 === e) return !1;
        if (this.receivingLQ() && 100 === e && this.isOneToOneCall()) return !1;
        return !0;
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    reset() {
        (this.pendingSSRC = -1), (this.currentSSRC = -1), (this.lastDowngradeChangeTime = void 0), (this.switchState = 0), (this.streamId = null), (this.resolutionWidth = 0), (this.resolutionHeight = 0);
    }
    request(e, t) {
        if (void 0 !== this.userId) {
            let n = e;
            t.forEach((e) => {
                null == n.resolutionWants && (n.resolutionWants = {}),
                    n[e] > 0 &&
                        (n.resolutionWants[e] = {
                            width: this.resolutionWidth,
                            height: this.resolutionHeight
                        });
            }),
                this.emit('requested-ssrcs-update', this.userId, this.audioSSRC, t),
                this.emit('requested-streams-update', n);
        }
    }
    requestDefaultStream() {
        g(1 === this.videoStreams.length, 'requestDefaultStream should only be called when there is exactly one video stream');
        let e = {};
        e[this.videoStreams[0].ssrc] = 100;
        let t = [this.videoStreams[0].ssrc];
        this.request(e, t);
    }
    stopDefaultStream() {
        g(1 === this.videoStreams.length, 'stopDefaultStream should only be called when there is exactly one video stream');
        let e = {};
        e[this.videoStreams[0].ssrc] = 0;
        let t = [];
        this.request(e, t);
    }
    requestBoth() {
        g(2 === this.videoStreams.length, 'requestBoth should only be called when there are two video streams'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestBoth called with invalid hqSSRC'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestBoth called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 100);
        let t = [this.lqSSRC, this.hqSSRC];
        this.request(e, t),
            setTimeout(() => {
                2 === this.switchState && (this.logger.warn('Seamless transition timeout, forcing switch'), this.reset(), this.update());
            }, 2000);
    }
    requestHQ() {
        g(2 === this.videoStreams.length, 'requestHQ should only be called when there are two video streams'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestHQ called with invalid hqSSRC'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestHQ called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 100);
        let t = [this.hqSSRC];
        this.request(e, t);
    }
    requestLQ() {
        g(2 === this.videoStreams.length, 'requestLQ should only be called when there are two video streams'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestLQ called with invalid hqSSRC'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestLQ called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 0);
        let t = [this.lqSSRC];
        this.request(e, t);
    }
    stopStreams() {
        g(2 === this.videoStreams.length, 'stopStreams should only be called when there are two video streams'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'stopStreams called with invalid hqSSRC'), g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'stopStreams called with invalid lqSSRC'), g(-1 === this.pendingSSRC, 'pendingSSRC should be reset before stopping streams');
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 0);
        let t = [];
        this.request(e, t);
    }
    getQuality() {
        return this.incomingVideoEnabled ? (this.debugQualityOverride === d.Z.LOW ? 60 : this.debugQualityOverride === d.Z.HIGH || this.isOneToOneCall() ? 100 : this.downgraded && this.senderSupportsSimulcast() ? 60 : 100) : 0;
    }
    setVideoSize(e, t, n) {
        this.streamId === e && ((this.resolutionWidth = t), (this.resolutionHeight = n), this.delayedUpdate());
    }
    setStreamId(e) {
        this.streamId !== e && ((this.streamId = e), (this.resolutionWidth = 0), (this.resolutionHeight = 0), this.delayedUpdate());
    }
    constructor(e) {
        super(),
            f(this, 'supportsSeamless', void 0),
            f(this, 'logger', void 0),
            f(this, 'userId', void 0),
            f(this, 'streamId', void 0),
            f(this, 'resolutionWidth', void 0),
            f(this, 'resolutionHeight', void 0),
            f(this, 'videoStreams', void 0),
            f(this, 'audioSSRC', void 0),
            f(this, 'hqSSRC', void 0),
            f(this, 'lqSSRC', void 0),
            f(this, 'switchState', void 0),
            f(this, 'pendingSSRC', void 0),
            f(this, 'currentSSRC', void 0),
            f(this, 'downgraded', void 0),
            f(this, 'throttleDowngradeChanges', void 0),
            f(this, 'lastDowngradeChangeTime', void 0),
            f(this, 'otherUsers', void 0),
            f(this, 'debugQualityOverride', void 0),
            f(this, 'incomingVideoEnabled', void 0),
            f(this, 'delayedCall', void 0),
            f(this, 'delayedUpdate', void 0),
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
            (this.debugQualityOverride = d.Z.NO_OVERRIDE),
            (this.incomingVideoEnabled = !0),
            (this.delayedUpdate = () => {
                this.delayedCall.delay();
            }),
            (this.logger = new s.Z('GoLiveQualityManager')),
            (this.delayedCall = new a.sW(h, () => {
                this.update();
            }));
    }
}
