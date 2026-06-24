i.d(t, { t: () => r });
var r = class {
    constructor(e) {
        (this._isRunning = !1),
            (this._hasPermission = !0),
            (this.acl = null),
            (this.gyro = null),
            (this.minNumberOfFrames = 3),
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
            (this.deviceMotionListener = (e) => {
                if (e.accelerationIncludingGravity) {
                    let t = {
                        x: e.accelerationIncludingGravity.x,
                        y: e.accelerationIncludingGravity.y,
                        z: e.accelerationIncludingGravity.z,
                    };
                    this.checkFields(t) &&
                        ((this.paramsAccGrOld.ptsNum += 1), this.updateParams(this.paramsAccGrOld, t));
                }
                if (e.acceleration) {
                    let t = { x: e.acceleration.x, y: e.acceleration.y, z: e.acceleration.z };
                    this.checkFields(t) && ((this.paramsAccOld.ptsNum += 1), this.updateParams(this.paramsAccOld, t));
                }
                if (e.rotationRate) {
                    let t = { x: e.rotationRate.alpha, y: e.rotationRate.beta, z: e.rotationRate.gamma };
                    this.checkFields(t) &&
                        ((this.paramsGyroscopeOld.ptsNum += 1), this.updateParams(this.paramsGyroscopeOld, t));
                }
            }),
            (this.deviceOrientationListener = (e) => {
                let t = { x: e.alpha, y: e.beta, z: e.gamma };
                this.checkFields(t) &&
                    ((this.paramsOrientationOld.ptsNum += 1), this.updateParams(this.paramsOrientationOld, t));
            }),
            (this.thresholds = {
                accThreshold: e?.accThreshold ?? 0.3,
                gyroThreshold: e?.gyroThreshold ?? 0.3,
                accGrOldThreshold: e?.accGrOldThreshold ?? 0.3,
                accOldThreshold: e?.accOldThreshold ?? 0.3,
                gyroscopeOldThreshold: e?.gyroscopeOldThreshold ?? 10,
                orientationOldThreshold: e?.orientationOldThreshold ?? 10,
                maeAccThreshold: e?.maeAccThreshold ?? 0.3,
                maeGyroThreshold: e?.maeGyroThreshold ?? 0.3,
                maeAccGrOldThreshold: e?.maeAccGrOldThreshold ?? 0.3,
                maeAccOldThreshold: e?.maeAccOldThreshold ?? 0.3,
                maeGyroscopeOldThreshold: e?.maeGyroscopeOldThreshold ?? 10,
                maeOrientationOldThreshold: e?.maeOrientationOldThreshold ?? 10,
            });
    }
    get isRunning() {
        return this._isRunning;
    }
    get hasPermission() {
        return this._hasPermission;
    }
    async requestPermission() {
        if ("u" > typeof DeviceMotionEvent && "function" == typeof DeviceMotionEvent.requestPermission) {
            sessionStorage.setItem("motionSensorsPermissionsRequested", String(!0));
            try {
                if ((await DeviceMotionEvent.requestPermission()) !== "granted")
                    return (this._hasPermission = !1), "denied";
                return "granted";
            } catch {
                return (this._hasPermission = !1), "denied";
            }
        }
        return "not-required";
    }
    initializeAccelerometer() {
        if ("Accelerometer" in window)
            try {
                let e = window.Accelerometer;
                e &&
                    ((this.acl = new e({ frequency: this.maxFrequency })),
                    this.acl.addEventListener("reading", () => this.updateAcc()));
            } catch {}
    }
    initializeGyroscope() {
        if ("Gyroscope" in window)
            try {
                let e = window.Gyroscope;
                e &&
                    ((this.gyro = new e({ frequency: this.maxFrequency })),
                    this.gyro.addEventListener("reading", () => this.updateGyro()));
            } catch {}
    }
    async start() {
        if (!this._isRunning && this._hasPermission) {
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
        let e = { x: this.acl.x, y: this.acl.y, z: this.acl.z };
        this.checkFields(e) && this.updateParams(this.paramsAcc, e);
    }
    updateGyro() {
        if (!this._isRunning || !this.gyro) return;
        this.paramsGyro.ptsNum += 1;
        let e = { x: this.gyro.x, y: this.gyro.y, z: this.gyro.z };
        this.checkFields(e) && this.updateParams(this.paramsGyro, e);
    }
    check() {
        if (!this._hasPermission) return "UNCLEAR";
        let e = this.checkStability();
        return null === e ? "UNCLEAR" : e ? "FAIL" : "PASS";
    }
    checkStability() {
        if (!this._isRunning) return null;
        let e = [
                this.gyro ? this.isBelowStdThreshold(this.paramsGyro, this.thresholds.gyroThreshold) : null,
                this.acl ? this.isBelowStdThreshold(this.paramsAcc, this.thresholds.accThreshold) : null,
                this.isBelowStdThreshold(this.paramsAccGrOld, this.thresholds.accGrOldThreshold),
                this.isBelowStdThreshold(this.paramsAccOld, this.thresholds.accOldThreshold),
                this.isBelowStdThreshold(this.paramsGyroscopeOld, this.thresholds.gyroscopeOldThreshold),
                this.isBelowStdThreshold(this.paramsOrientationOld, this.thresholds.orientationOldThreshold),
            ].filter((e) => null !== e),
            t = e.length > 0 ? e.every((e) => e) : null,
            i = [
                this.gyro ? this.isBelowMaeThreshold(this.paramsGyro, this.thresholds.maeGyroThreshold) : null,
                this.acl ? this.isBelowMaeThreshold(this.paramsAcc, this.thresholds.maeAccThreshold) : null,
                this.isBelowMaeThreshold(this.paramsAccGrOld, this.thresholds.maeAccGrOldThreshold),
                this.isBelowMaeThreshold(this.paramsAccOld, this.thresholds.maeAccOldThreshold),
                this.isBelowMaeThreshold(this.paramsGyroscopeOld, this.thresholds.maeGyroscopeOldThreshold),
                this.isBelowMaeThreshold(this.paramsOrientationOld, this.thresholds.maeOrientationOldThreshold),
            ].filter((e) => null !== e),
            r = i.length > 0 ? i.every((e) => e) : null;
        return null === t ? (null === r ? null : r) : null !== r ? t && r : t;
    }
    updateParams(e, t) {
        let i = t.x - e.meanX,
            r = t.y - e.meanY,
            n = t.z - e.meanZ;
        (e.meanX += i / e.ptsNum),
            (e.meanY += r / e.ptsNum),
            (e.meanZ += n / e.ptsNum),
            (e.m2X += i * (t.x - e.meanX)),
            (e.m2Y += r * (t.y - e.meanY)),
            (e.m2Z += n * (t.z - e.meanZ)),
            (e.cumulativeAbsErrorX += Math.abs(t.x - e.meanX)),
            (e.cumulativeAbsErrorY += Math.abs(t.y - e.meanY)),
            (e.cumulativeAbsErrorZ += Math.abs(t.z - e.meanZ));
    }
    calculateStd(e) {
        let t = { x: e.m2X / e.ptsNum, y: e.m2Y / e.ptsNum, z: e.m2Z / e.ptsNum };
        return { x: Math.sqrt(t.x), y: Math.sqrt(t.y), z: Math.sqrt(t.z) };
    }
    calculateMae(e) {
        return {
            x: e.cumulativeAbsErrorX / e.ptsNum,
            y: e.cumulativeAbsErrorY / e.ptsNum,
            z: e.cumulativeAbsErrorZ / e.ptsNum,
        };
    }
    checkFields(e) {
        return null !== e.x && null !== e.y && null !== e.z;
    }
    isBelowStdThreshold(e, t) {
        if (e.ptsNum < this.minNumberOfFrames) return null;
        let i = this.calculateStd(e);
        return i.x < t && i.y < t && i.z < t;
    }
    isBelowMaeThreshold(e, t) {
        if (e.ptsNum < this.minNumberOfFrames) return null;
        let i = this.calculateMae(e);
        return i.x < t && i.y < t && i.z < t;
    }
};
