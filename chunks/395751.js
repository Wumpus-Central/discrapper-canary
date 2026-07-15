d.d(t, { t: () => c });
let i = "motionSensorsPermissionsGranted",
    e = "motionSensorsPermissionsDenied";
var c = class l {
    static isIosMotionPermissionRequired() {
        return "u" > typeof DeviceMotionEvent && "function" == typeof DeviceMotionEvent.requestPermission;
    }
    static readSessionFlag(l) {
        return !("u" < typeof sessionStorage) && "true" === sessionStorage.getItem(l);
    }
    static hasMotionPermissionGrantedInSession() {
        return l.readSessionFlag(i);
    }
    static hasMotionPermissionDeniedInSession() {
        return l.readSessionFlag(e);
    }
    constructor(t) {
        (this._isRunning = !1),
            (this.acl = null),
            (this.gyro = null),
            (this.minNumberOfFrames = 10),
            (this.maxFrequency = 60),
            (this.emptyParams = {
                meanX: 0,
                meanY: 0,
                meanZ: 0,
                m2X: 0,
                m2Y: 0,
                m2Z: 0,
                cumulativeAbsErrorX: 0,
                cumulativeAbsErrorY: 0,
                cumulativeAbsErrorZ: 0,
                ptsNum: 0,
            }),
            (this.paramsAcc = { ...this.emptyParams }),
            (this.paramsGyro = { ...this.emptyParams }),
            (this.paramsAccGrOld = { ...this.emptyParams }),
            (this.paramsAccOld = { ...this.emptyParams }),
            (this.paramsGyroscopeOld = { ...this.emptyParams }),
            (this.paramsOrientationOld = { ...this.emptyParams }),
            (this.deviceMotionListener = (l) => {
                if (l.accelerationIncludingGravity) {
                    let t = {
                        x: l.accelerationIncludingGravity.x,
                        y: l.accelerationIncludingGravity.y,
                        z: l.accelerationIncludingGravity.z,
                    };
                    this.checkFields(t) &&
                        ((this.paramsAccGrOld.ptsNum += 1), this.updateParams(this.paramsAccGrOld, t));
                }
                if (l.acceleration) {
                    let t = { x: l.acceleration.x, y: l.acceleration.y, z: l.acceleration.z };
                    this.checkFields(t) && ((this.paramsAccOld.ptsNum += 1), this.updateParams(this.paramsAccOld, t));
                }
                if (l.rotationRate) {
                    let t = { x: l.rotationRate.alpha, y: l.rotationRate.beta, z: l.rotationRate.gamma };
                    this.checkFields(t) &&
                        ((this.paramsGyroscopeOld.ptsNum += 1), this.updateParams(this.paramsGyroscopeOld, t));
                }
            }),
            (this.deviceOrientationListener = (l) => {
                let t = { x: l.alpha, y: l.beta, z: l.gamma };
                this.checkFields(t) &&
                    ((this.paramsOrientationOld.ptsNum += 1), this.updateParams(this.paramsOrientationOld, t));
            }),
            (this._hasPermission = !l.isIosMotionPermissionRequired() || l.hasMotionPermissionGrantedInSession()),
            (this.thresholds = {
                accThreshold: t?.accThreshold ?? 0.3,
                gyroThreshold: t?.gyroThreshold ?? 0.3,
                accGrOldThreshold: t?.accGrOldThreshold ?? 0.3,
                accOldThreshold: t?.accOldThreshold ?? 0.3,
                gyroscopeOldThreshold: t?.gyroscopeOldThreshold ?? 10,
                orientationOldThreshold: t?.orientationOldThreshold ?? 10,
                maeAccThreshold: t?.maeAccThreshold ?? 0.3,
                maeGyroThreshold: t?.maeGyroThreshold ?? 0.3,
                maeAccGrOldThreshold: t?.maeAccGrOldThreshold ?? 0.3,
                maeAccOldThreshold: t?.maeAccOldThreshold ?? 0.3,
                maeGyroscopeOldThreshold: t?.maeGyroscopeOldThreshold ?? 10,
                maeOrientationOldThreshold: t?.maeOrientationOldThreshold ?? 10,
            });
    }
    get isRunning() {
        return this._isRunning;
    }
    get hasPermission() {
        return this._hasPermission;
    }
    hasBeenRequestedThisSession() {
        return l.hasMotionPermissionGrantedInSession();
    }
    hasMotionPermissionDeniedThisSession() {
        return l.hasMotionPermissionDeniedInSession();
    }
    markMotionPermissionGrantedInSession() {
        "u" > typeof sessionStorage &&
            (sessionStorage.setItem(i, String(!0)),
            sessionStorage.removeItem(e),
            sessionStorage.setItem("motionSensorsPermissionsRequested", String(!0)));
    }
    markMotionPermissionDeniedInSession() {
        "u" > typeof sessionStorage && (sessionStorage.setItem(e, String(!0)), sessionStorage.removeItem(i));
    }
    syncSessionPermission() {
        if (!l.isIosMotionPermissionRequired()) {
            this._hasPermission = !0;
            return;
        }
        l.hasMotionPermissionGrantedInSession()
            ? (this._hasPermission = !0)
            : l.hasMotionPermissionDeniedInSession() && (this._hasPermission = !1);
    }
    async requestPermission() {
        if (!l.isIosMotionPermissionRequired()) return "not-required";
        if (l.hasMotionPermissionGrantedInSession()) return (this._hasPermission = !0), "granted";
        if (l.hasMotionPermissionDeniedInSession()) return (this._hasPermission = !1), "denied";
        try {
            if ((await DeviceMotionEvent.requestPermission()) !== "granted")
                return (this._hasPermission = !1), this.markMotionPermissionDeniedInSession(), "denied";
            return (this._hasPermission = !0), this.markMotionPermissionGrantedInSession(), "granted";
        } catch {
            return (this._hasPermission = !1), this.markMotionPermissionDeniedInSession(), "denied";
        }
    }
    initializeAccelerometer() {
        if ("Accelerometer" in window)
            try {
                let l = window.Accelerometer;
                l &&
                    ((this.acl = new l({ frequency: this.maxFrequency })),
                    this.acl.addEventListener("reading", () => this.updateAcc()));
            } catch {}
    }
    initializeGyroscope() {
        if ("Gyroscope" in window)
            try {
                let l = window.Gyroscope;
                l &&
                    ((this.gyro = new l({ frequency: this.maxFrequency })),
                    this.gyro.addEventListener("reading", () => this.updateGyro()));
            } catch {}
    }
    async start() {
        if ((this.syncSessionPermission(), !this._isRunning && this._hasPermission)) {
            try {
                this.initializeAccelerometer(), this.acl && this.acl.start();
            } catch {}
            try {
                this.initializeGyroscope(), this.gyro && this.gyro.start();
            } catch {}
            window.addEventListener("devicemotion", this.deviceMotionListener),
                window.addEventListener("deviceorientation", this.deviceOrientationListener),
                (this._isRunning = !0);
        }
    }
    stop() {
        (this._isRunning = !1),
            this.acl && this.acl.stop(),
            this.gyro && this.gyro.stop(),
            window.removeEventListener("devicemotion", this.deviceMotionListener),
            window.removeEventListener("deviceorientation", this.deviceOrientationListener),
            (this.paramsAcc = { ...this.emptyParams }),
            (this.paramsGyro = { ...this.emptyParams }),
            (this.paramsAccGrOld = { ...this.emptyParams }),
            (this.paramsAccOld = { ...this.emptyParams }),
            (this.paramsGyroscopeOld = { ...this.emptyParams }),
            (this.paramsOrientationOld = { ...this.emptyParams });
    }
    updateAcc() {
        if (!this._isRunning || !this.acl) return;
        this.paramsAcc.ptsNum += 1;
        let l = { x: this.acl.x, y: this.acl.y, z: this.acl.z };
        this.checkFields(l) && this.updateParams(this.paramsAcc, l);
    }
    updateGyro() {
        if (!this._isRunning || !this.gyro) return;
        this.paramsGyro.ptsNum += 1;
        let l = { x: this.gyro.x, y: this.gyro.y, z: this.gyro.z };
        this.checkFields(l) && this.updateParams(this.paramsGyro, l);
    }
    check() {
        if (!this._hasPermission) return "UNCLEAR";
        let l = this.checkStability();
        return null === l ? "UNCLEAR" : l ? "FAIL" : "PASS";
    }
    checkStability() {
        if (!this._isRunning) return null;
        let l = [
                this.gyro ? this.isBelowStdThreshold(this.paramsGyro, this.thresholds.gyroThreshold) : null,
                this.acl ? this.isBelowStdThreshold(this.paramsAcc, this.thresholds.accThreshold) : null,
                this.isBelowStdThreshold(this.paramsAccGrOld, this.thresholds.accGrOldThreshold),
                this.isBelowStdThreshold(this.paramsAccOld, this.thresholds.accOldThreshold),
                this.isBelowStdThreshold(this.paramsGyroscopeOld, this.thresholds.gyroscopeOldThreshold),
                this.isBelowStdThreshold(this.paramsOrientationOld, this.thresholds.orientationOldThreshold),
            ].filter((l) => null !== l),
            t = l.length > 0 ? l.every((l) => l) : null,
            d = [
                this.gyro ? this.isBelowMaeThreshold(this.paramsGyro, this.thresholds.maeGyroThreshold) : null,
                this.acl ? this.isBelowMaeThreshold(this.paramsAcc, this.thresholds.maeAccThreshold) : null,
                this.isBelowMaeThreshold(this.paramsAccGrOld, this.thresholds.maeAccGrOldThreshold),
                this.isBelowMaeThreshold(this.paramsAccOld, this.thresholds.maeAccOldThreshold),
                this.isBelowMaeThreshold(this.paramsGyroscopeOld, this.thresholds.maeGyroscopeOldThreshold),
                this.isBelowMaeThreshold(this.paramsOrientationOld, this.thresholds.maeOrientationOldThreshold),
            ].filter((l) => null !== l),
            i = d.length > 0 ? d.every((l) => l) : null;
        return null === t ? (null === i ? null : i) : null !== i ? t && i : t;
    }
    updateParams(l, t) {
        let d = t.x - l.meanX,
            i = t.y - l.meanY,
            e = t.z - l.meanZ;
        (l.meanX += d / l.ptsNum),
            (l.meanY += i / l.ptsNum),
            (l.meanZ += e / l.ptsNum),
            (l.m2X += d * (t.x - l.meanX)),
            (l.m2Y += i * (t.y - l.meanY)),
            (l.m2Z += e * (t.z - l.meanZ)),
            (l.cumulativeAbsErrorX += Math.abs(t.x - l.meanX)),
            (l.cumulativeAbsErrorY += Math.abs(t.y - l.meanY)),
            (l.cumulativeAbsErrorZ += Math.abs(t.z - l.meanZ));
    }
    calculateStd(l) {
        let t = { x: l.m2X / l.ptsNum, y: l.m2Y / l.ptsNum, z: l.m2Z / l.ptsNum };
        return { x: Math.sqrt(t.x), y: Math.sqrt(t.y), z: Math.sqrt(t.z) };
    }
    calculateMae(l) {
        return {
            x: l.cumulativeAbsErrorX / l.ptsNum,
            y: l.cumulativeAbsErrorY / l.ptsNum,
            z: l.cumulativeAbsErrorZ / l.ptsNum,
        };
    }
    checkFields(l) {
        return null !== l.x && null !== l.y && null !== l.z;
    }
    isBelowStdThreshold(l, t) {
        if (l.ptsNum < this.minNumberOfFrames) return null;
        let d = this.calculateStd(l);
        return d.x < t && d.y < t && d.z < t;
    }
    isBelowMaeThreshold(l, t) {
        if (l.ptsNum < this.minNumberOfFrames) return null;
        let d = this.calculateMae(l);
        return d.x < t && d.y < t && d.z < t;
    }
};
