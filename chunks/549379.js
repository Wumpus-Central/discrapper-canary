i.r(t), i.d(t, { default: () => s });
var r = i(894694),
    a = i(663879);
class n {
    start() {
        a.Z.registerCallback(this.handleTrigger.bind(this));
    }
    stop() {
        a.Z.unregisterCallback();
    }
    getState() {
        return null;
    }
    handleTrigger(e, t) {
        this.emitSignal({
            type: r.Bs.DISTRIBUTED,
            remoteTriggerUserId: e,
            remoteTriggerClipId: t,
        });
    }
    constructor(e) {
        !(function (e, t, i) {
            t in e
                ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = i);
        })(this, "emitSignal", void 0),
            (this.emitSignal = e);
    }
}
let s = (e) => new n(e);
