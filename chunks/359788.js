r.r(t), r.d(t, { default: () => l });
var i = r(109624),
    s = r(696016);
class a {
    emitSignal;
    constructor(e) {
        this.emitSignal = e;
    }
    start() {
        i.A.registerCallback(this.handleTrigger.bind(this));
    }
    stop() {
        i.A.unregisterCallback();
    }
    getState() {
        return null;
    }
    handleTrigger(e, t) {
        this.emitSignal({ type: s.Gy.DISTRIBUTED, remoteTriggerUserId: e, remoteTriggerClipId: t });
    }
}
let l = (e) => new a(e);
