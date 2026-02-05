"use strict";
n.d(t, { A: () => l });
var r = n(626584),
    i = n(723702),
    a = n(77729);
let s = new r.A("ProgressBarManager");
class o {
    taskID;
    setProgress(e, t) {
        if (!(0, i.isDesktop)()) throw Error("cannot set progress from non-native");
        null != this.taskID && this.taskID !== e
            ? s.warn(`${this.taskID} is already running. cannot set ${e}`)
            : ((this.taskID = e), a.A.window.setProgressBar(t));
    }
    clearProgress(e) {
        if (!(0, i.isDesktop)()) throw Error("cannot clear progress from non-native");
        null == this.taskID
            ? s.warn("cannot clear progress. No current progress running.")
            : this.taskID !== e
              ? s.warn(`cannot clear progress of ${e} when ${this.taskID} is running`)
              : ((this.taskID = null), a.A.window.setProgressBar(-1));
    }
}
let l = new o();
