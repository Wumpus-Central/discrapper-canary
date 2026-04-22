"use strict";
n.d(t, { V: () => u }), n(321073);
var r = n(607399),
    i = n(499979),
    s = n(626584),
    a = n(264644),
    o = n(927813),
    l = n(652215);
class u {
    logger = new s.A("VideoHealthManager");
    windowLength;
    fpsThreshold;
    fpsWindowBorderlineCount;
    backoffTimeSec;
    disabled = !1;
    perUserFpsWindow = {};
    prevFramesCodec = {};
    prevTimestamp = {};
    streamDisabledUsers = new Set();
    retryBackoffCache = {};
    timeoutIdCache = {};
    currentVideoAutoToggleState = {};
    probingUserId;
    enableQueue = [];
    static defaultConfig = {
        featureEnabled: r.Fr,
        windowLength: 5,
        allowedPoorFpsRatio: 1,
        fpsThreshold: 5,
        backoffTimeSec: 15,
    };
    constructor(e, t, n, r) {
        (this.windowLength = e),
            (this.fpsThreshold = n),
            (this.fpsWindowBorderlineCount = Math.ceil(e * t)),
            (this.backoffTimeSec = r),
            this.logger.enableNativeLogger(!0),
            this.logger.info(`constructor with windowLength = ${this.windowLength},
      fpsWindowBorderlineCount = ${this.fpsWindowBorderlineCount},
      fpsThreshold = ${this.fpsThreshold},
      backoffTimeSec = ${r}`);
    }
    calculateFps(e, t, n) {
        if (
            -1 === this.prevFramesCodec[e] ||
            t < this.prevFramesCodec[e] ||
            n < this.prevTimestamp[e] ||
            n > this.prevTimestamp[e] + 1e3 * this.windowLength
        )
            return (this.prevFramesCodec[e] = t), (this.prevTimestamp[e] = n), (this.perUserFpsWindow[e] = []), NaN;
        if (n < this.prevTimestamp[e] + 900) return NaN;
        let r = this.elapsedSeconds(n, this.prevTimestamp[e]);
        this.prevTimestamp[e] = n;
        let i = (t - this.prevFramesCodec[e]) / r;
        return (this.prevFramesCodec[e] = t), i;
    }
    updateFps(e, t, n) {
        if (!this.disabled && !this.streamDisabledUsers.has(e)) {
            let r = this.calculateFps(e, t, n);
            if (!(r < 0) && Number.isFinite(r))
                this.perUserFpsWindow[e].push(r),
                    this.perUserFpsWindow[e].length < this.windowLength ||
                        (this.perUserFpsWindow[e].length > this.windowLength && this.perUserFpsWindow[e].shift(),
                        this.perUserFpsWindow[e].filter((e) => e < this.fpsThreshold).length >=
                        this.fpsWindowBorderlineCount
                            ? (this.logger.info(`${e}: detected poor network quality, turning off video`),
                              this.streamDisabledUsers.add(e),
                              (this.currentVideoAutoToggleState[e] = l.bb8.DISABLED),
                              (0, a.A)(e, l.bb8.DISABLED),
                              this.startReenableBackoffTimer(e))
                            : this.currentVideoAutoToggleState[e] === l.bb8.AUTO_PROBING &&
                              ((this.currentVideoAutoToggleState[e] = l.bb8.AUTO_ENABLED),
                              this.logger.info(
                                  `acceptable conditions reached, will reset and send a AUTO_ENABLED for user ${e}`,
                              ),
                              (0, a.A)(e, l.bb8.AUTO_ENABLED)),
                        this.probingUserId === e && ((this.probingUserId = void 0), this.tryReenableQueue()));
        }
    }
    startReenableBackoffTimer(e) {
        if (this.disabled) return;
        this.logger.info(`startReenableBackoffTimer for user ${e}`);
        let { lastBackoffTime: t, expBackoffFactor: n } = this.retryBackoffCache[e];
        null === t || n > 16 || this.elapsedSeconds((0, i.tB)(), t) > 600 ? (n = 1) : (n *= 2),
            (this.retryBackoffCache[e] = { lastBackoffTime: (0, i.tB)(), expBackoffFactor: n });
        let r = n * this.backoffTimeSec * o.A.Millis.SECOND;
        this.logger.info(`starting backoff timer with time = ${r} milliseconds`),
            (this.timeoutIdCache[e] = setTimeout(() => {
                this.queueReenable(e);
            }, r));
    }
    queueReenable(e) {
        this.enableQueue.push(e), this.tryReenableQueue();
    }
    tryReenableQueue() {
        if (!this.disabled && (null == this.probingUserId || !(this.probingUserId in this.perUserFpsWindow)))
            for (let e = this.enableQueue.shift(); null != e && !this.reenableVideo(e); );
    }
    reenableVideo(e) {
        return (
            e in this.perUserFpsWindow &&
            (this.logger.info(`reenableVideo called for user ${e} - time = ${(0, i.tB)()}`),
            this.stateCleanupBeforeEnable(e),
            (this.currentVideoAutoToggleState[e] = l.bb8.AUTO_PROBING),
            (this.probingUserId = e),
            (0, a.A)(e, l.bb8.AUTO_PROBING),
            !0)
        );
    }
    elapsedSeconds(e, t) {
        return (e - t) / 1e3;
    }
    stateCleanupBeforeEnable(e) {
        this.logger.info("VideoHealthManager::stateCleanupBeforeEnable"),
            (this.perUserFpsWindow[e] = []),
            (this.prevFramesCodec[e] = -1),
            this.streamDisabledUsers.delete(e);
    }
    getCurrentVideoToggleState(e) {
        return this.currentVideoAutoToggleState[e];
    }
    createUser(e) {
        this.logger.info(`VideoHealthManager::createUser ${e}`),
            e in this.perUserFpsWindow ||
                ((this.perUserFpsWindow[e] = []),
                (this.prevFramesCodec[e] = -1),
                (this.currentVideoAutoToggleState[e] = l.bb8.NONE),
                (this.retryBackoffCache[e] = { lastBackoffTime: null, expBackoffFactor: 1 }));
    }
    deleteUser(e) {
        this.logger.info(`VideoHealthManager::deleteUser ${e}`),
            delete this.perUserFpsWindow[e],
            delete this.prevFramesCodec[e],
            delete this.retryBackoffCache[e],
            delete this.currentVideoAutoToggleState[e],
            this.streamDisabledUsers.delete(e),
            e === this.probingUserId && ((this.probingUserId = void 0), this.tryReenableQueue()),
            clearTimeout(this.timeoutIdCache[e]),
            delete this.timeoutIdCache[e];
    }
    disable() {
        for (let e in ((this.disabled = !0), this.perUserFpsWindow)) this.deleteUser(e);
    }
}
