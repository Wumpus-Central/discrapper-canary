r.r(t), r.d(t, { default: () => l });
var i = r(372684),
    s = r(109624);
class a {
    emitSignal;
    constructor(e) {
        this.emitSignal = e;
    }
    start() {
        s.A.registerCallback(this.handleTrigger.bind(this));
    }
    stop() {
        s.A.unregisterCallback();
    }
    getState() {
        return null;
    }
    handleTrigger(e, t) {
        this.emitSignal({ type: i.Gy.DISTRIBUTED, remoteTriggerUserId: e, remoteTriggerClipId: t });
    }
}
let l = (e) => new a(e);
