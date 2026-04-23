"use strict";
n.d(t, { A: () => o });
var r = n(626584),
    i = n(723702),
    s = n(77729);
let a = new r.A("ProgressBarManager"),
    o = new (class {
        taskID;
        setProgress(e, t) {
            if (!(0, i.isDesktop)()) throw Error("cannot set progress from non-native");
            null != this.taskID && this.taskID !== e
                ? a.warn(`${this.taskID} is already running. cannot set ${e}`)
                : ((this.taskID = e), s.A.window.setProgressBar(t));
        }
        clearProgress(e) {
            if (!(0, i.isDesktop)()) throw Error("cannot clear progress from non-native");
            null == this.taskID
                ? a.warn("cannot clear progress. No current progress running.")
                : this.taskID !== e
                  ? a.warn(`cannot clear progress of ${e} when ${this.taskID} is running`)
                  : ((this.taskID = null), s.A.window.setProgressBar(-1));
        }
    })();
