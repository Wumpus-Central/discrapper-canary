e.d(t, { loadDeepsightSession: () => c });
var n = e(987800);
e(871178), e(768672), e(368499), e(288052), e(599078);
var s = e(943956);
e(28134), e(749378), e(768816), e(806374);
var a = e(395751);
e(305463), e(117589), e(825123), e(827029);
var r = e(405479),
    d = class {
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
async function o(i, t) {
    await i.set("ds", +!!t);
}
async function c(i) {
    await o(i.storage, !0 === i.ds);
    let t = (0, r.t)({
            sdkVersion: "2.0.0",
            wasmUtil: await n.t.getInstance(),
            visibility: new d(),
            browserEnv: new s.d(),
            motionSensor: new a.t(),
            ipLookup: new s.c(),
        }),
        e = i.disableIpify ?? (0, s.t)(),
        c = i.disableFingerprint ?? !(0, s.n)();
    return await t.initialize(e, c), await t.startMotionSensors(), t;
}
