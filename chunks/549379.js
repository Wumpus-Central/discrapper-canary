l.r(i), l.d(i, { default: () => n });
var t = l(894694),
    r = l(663879);
class a {
    start() {
        r.Z.registerCallback(this.handleTrigger.bind(this));
    }
    stop() {
        r.Z.unregisterCallback();
    }
    getState() {
        return null;
    }
    handleTrigger(e, i) {
        this.emitSignal({
            type: t.Bs.DISTRIBUTED,
            remoteTriggerUserId: e,
            remoteTriggerClipId: i,
        });
    }
    constructor(e) {
        !(function (e, i, l) {
            i in e
                ? Object.defineProperty(e, i, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[i] = l);
        })(this, "emitSignal", void 0),
            (this.emitSignal = e);
    }
}
let n = (e) => new a(e);
