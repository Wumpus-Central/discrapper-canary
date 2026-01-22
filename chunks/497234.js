n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(439372),
    i = n(723702),
    a = n(837921),
    s = n(724122),
    o = n(69435);

function l(e, t, n) {
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
class c extends r.A {
    constructor(...e) {
        super(...e),
            l(this, "handlePostConnectionOpen", () => {
                if (!(0, i.isWeb)())
                    if ((0, s.W)("NegativeHardwareAccelerationExperimentManager"))
                        a.Ay.setSetting("enableHardwareAcceleration", !0);
                    else {
                        let e = (0, o.yW)();
                        a.Ay.setSetting("enableHardwareAcceleration", e);
                    }
            }),
            l(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            });
    }
}
let u = new c();
