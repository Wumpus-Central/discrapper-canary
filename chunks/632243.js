n.d(t, { Z: () => u }), n(411104);
var i = n(710845),
    r = n(358085),
    a = n(579806);
function s(e, t, n) {
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
let o = new i.Z('ProgressBarManager');
class l {
    setProgress(e, t) {
        if (!(0, r.isDesktop)()) throw Error('cannot set progress from non-native');
        if (null != this.taskID && this.taskID !== e) {
            o.warn(''.concat(this.taskID, ' is already running. cannot set ').concat(e));
            return;
        }
        (this.taskID = e), a.Z.window.setProgressBar(t);
    }
    clearProgress(e) {
        if (!(0, r.isDesktop)()) throw Error('cannot clear progress from non-native');
        if (null == this.taskID) {
            o.warn('cannot clear progress. No current progress running.');
            return;
        }
        if (this.taskID !== e) {
            o.warn('cannot clear progress of '.concat(e, ' when ').concat(this.taskID, ' is running'));
            return;
        }
        (this.taskID = null), a.Z.window.setProgressBar(-1);
    }
    constructor() {
        s(this, 'taskID', void 0);
    }
}
let u = new l();
