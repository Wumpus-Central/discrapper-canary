e.d(t, { loadDeepsightSession: () => o }), e(976886);
var s = e(133237);
e(209688);
var n = e(799201);
e(401959), e(351618);
var a = e(581763);
e(781322), e(196283);
var r = e(682781),
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
async function o(i) {
    await i.storage.set("ds", +!!i.ds);
    let t = (0, a.t)({
        sdkVersion: "2.0.0",
        wasmUtil: await s.t.getInstance(),
        visibility: new d(),
        browserEnv: new n.r(),
        motionSensor: new r.t(),
        ipLookup: new n.t(),
    });
    return await t.initialize(i.disableIpify), await t.startMotionSensors(), t;
}
