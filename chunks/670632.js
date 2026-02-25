"use strict";
n.d(t, { A: () => a });
var r = n(837921),
    i = n(358203);
class s {
    pids = new Set();
    enabled = !1;
    isExperimentEnabled() {
        return i.M.getConfig({ location: "RunningGamePerformanceMonitor" }).enabled;
    }
    enable() {
        if (this.isExperimentEnabled() && !this.enabled)
            for (let e of ((this.enabled = !0), this.pids)) this.startMonitoringPid(e);
    }
    disable() {
        if (this.enabled) {
            for (let e of ((this.enabled = !1), this.pids)) r.Ay.SetSystemServicePerformanceMonitorEnabled(e, !1);
            this.pids.clear();
        }
    }
    reset() {
        this.enabled = !1;
    }
    startMonitoringPid(e) {
        this.pids.add(e), this.enabled && r.Ay.SetSystemServicePerformanceMonitorEnabled(e, !0);
    }
    stopMonitoringPid(e) {
        this.pids.has(e) &&
            (this.pids.delete(e), this.enabled && r.Ay.SetSystemServicePerformanceMonitorEnabled(e, !1));
    }
    getSnapshot(e) {
        return this.enabled && this.pids.has(e)
            ? r.Ay.GetSystemServicePerformanceMonitorSnapshot(e)
            : Promise.resolve(null);
    }
}
let a = new s();
