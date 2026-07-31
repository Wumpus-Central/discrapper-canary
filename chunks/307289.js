t.d(e, { loadDeepsightSession: () => c });
var n = t(522681);
t(580607), t(41851), t(269882), t(528239), t(829601);
var s = t(924260);
t(489510), t(886347), t(219877), t(309076);
var a = t(867386),
    r = t(880008);
t(154676), t(693160), t(614235), t(888091);
var d = t(453080),
    o = class {
        constructor() {
            (this._wasBackgrounded = !1),
                (this.visibilityChangeHandler = this.onVisibilityChange.bind(this)),
                document.addEventListener("visibilitychange", this.visibilityChangeHandler);
        }
        get wasBackgrounded() {
            return this._wasBackgrounded;
        }
        reset() {
            this._wasBackgrounded = !1;
        }
        cleanup() {
            document.removeEventListener("visibilitychange", this.visibilityChangeHandler);
        }
        onVisibilityChange() {
            document.hidden && (this._wasBackgrounded = !0);
        }
    };
async function c(i) {
    (0, a.t)(!0 === i.ds);
    let e = (0, d.t)({
            sdkVersion: "2.0.0",
            wasmUtil: await n.t.getInstance(),
            visibility: new o(),
            browserEnv: new s.d(),
            motionSensor: new r.t(),
            ipLookup: new s.c(),
        }),
        t = i.disableIpify ?? (0, s.t)(),
        c = i.disableFingerprint ?? !(0, s.n)();
    return await e.initialize(t, c), await e.startMotionSensors(), e;
}
