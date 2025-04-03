n.d(t, { Z: () => c }), n(411104);
var r = n(710845),
    i = n(358085),
    o = n(579806);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = new r.Z('ProgressBarManager');
class l {
    setProgress(e, t) {
        if (!(0, i.isDesktop)()) throw Error('cannot set progress from non-native');
        if (null != this.taskID && this.taskID !== e) return void s.warn(''.concat(this.taskID, ' is already running. cannot set ').concat(e));
        (this.taskID = e), o.Z.window.setProgressBar(t);
    }
    clearProgress(e) {
        if (!(0, i.isDesktop)()) throw Error('cannot clear progress from non-native');
        return null == this.taskID ? void s.warn('cannot clear progress. No current progress running.') : this.taskID !== e ? void s.warn('cannot clear progress of '.concat(e, ' when ').concat(this.taskID, ' is running')) : void ((this.taskID = null), o.Z.window.setProgressBar(-1));
    }
    constructor() {
        a(this, 'taskID', void 0);
    }
}
let c = new l();
