n.d(t, { A: () => c }), n(65821);
var r = n(626584),
    i = n(723702),
    a = n(77729);
function s(e, t, n) {
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
let o = new r.A("ProgressBarManager");
class l {
    setProgress(e, t) {
        if (!(0, i.isDesktop)()) throw Error("cannot set progress from non-native");
        null != this.taskID && this.taskID !== e
            ? o.warn("".concat(this.taskID, " is already running. cannot set ").concat(e))
            : ((this.taskID = e), a.A.window.setProgressBar(t));
    }
    clearProgress(e) {
        if (!(0, i.isDesktop)()) throw Error("cannot clear progress from non-native");
        null == this.taskID
            ? o.warn("cannot clear progress. No current progress running.")
            : this.taskID !== e
              ? o.warn("cannot clear progress of ".concat(e, " when ").concat(this.taskID, " is running"))
              : ((this.taskID = null), a.A.window.setProgressBar(-1));
    }
    constructor() {
        s(this, "taskID", void 0);
    }
}
let c = new l();
