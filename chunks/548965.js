"use strict";
n.d(t, { ML: () => u, P4: () => h, hw: () => I, iQ: () => E, pX: () => T, pd: () => m }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(306173),
    a = n(626584),
    o = n(723426);
let l = new a.A("libdiscoreExperiments"),
    u = [],
    c = Symbol("unknown");
class d {
    id;
    inner = null;
    cachedConfig = c;
    constructor(e, t) {
        (this.id = e), u.push(this);
    }
    getEnabledFeatureName() {
        let e = this.getCachedConfig();
        return void 0 === e || e.treatmentId <= 0 ? null : `${this.id}:${e.treatmentId}`;
    }
    getCachedConfig() {
        return (
            this.cachedConfig === c &&
                ((0, s.xd)() ? (this.cachedConfig = (0, s.Ih)().getConfig(this.id)) : (this.cachedConfig = void 0)),
            this.cachedConfig
        );
    }
    setExperiment(e) {
        this.inner = e;
    }
    getCurrentConfig() {
        return (i()(null != this.inner, "experiment must be set before calling getCurrentConfig"),
        "getCurrentConfig" in this.inner)
            ? this.inner.getCurrentConfig({ location: "default" })
            : this.inner.getConfig({ location: "default" });
    }
}
class _ extends d {
    label;
    defaultValue;
    constructor(e, t, n = !1) {
        super(e), (this.label = t), (this.defaultValue = n);
    }
    getLabel() {
        return this.label;
    }
    getTreatments() {
        return [{ treatmentId: 0 }, { treatmentId: 1 }];
    }
    getCachedEnabled() {
        let e = this.getCachedConfig();
        return null == e || -1 === e.treatmentId ? this.defaultValue : 1 === e.treatmentId;
    }
}
class f extends d {
    storeName;
    constructor(e, t, n) {
        super(e, n), (this.storeName = t);
    }
    getCachedBridgedStoreMode() {
        let e = this.getCachedConfig(),
            t = (() => {
                switch (e?.treatmentId ?? -1) {
                    case 1:
                        return "typescript-libdiscore-dual-read";
                    case 2:
                        return "libdiscore";
                    default:
                        return "typescript";
                }
            })();
        return (0, o.E)(t);
    }
    getEnabledFeatureName() {
        let e = this.getCachedBridgedStoreMode();
        return "typescript" === e ? null : `BridgedStore[${this.storeName},${e}]`;
    }
    getLabel() {
        return `libdiscore '${this.storeName}' Migration`;
    }
    getTreatments() {
        return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
    }
}
class p extends d {
    MAX_EMISSIONS_PER_APP_LAUNCH = 5;
    emissionsCount = 0;
    getLabel() {
        return "libdiscore Telemetry";
    }
    getTreatments() {
        return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }, { treatmentId: 3 }];
    }
    getMetricsSampleRate() {
        let e = this.getCachedConfig();
        switch (e?.treatmentId) {
            case 1:
                return 0.01;
            case 2:
                return 0.05;
            case 3:
                return 1;
            default:
                return 0;
        }
    }
    didEmit() {
        this.emissionsCount++;
    }
    shouldCollectMetrics() {
        let e = this.getMetricsSampleRate();
        return (
            0 !== e && (1 === e || (!(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) && Math.random() < e))
        );
    }
}
let h = new f("2026-01-libdiscore-batch-store-refactor", "batch-store-refactor"),
    m = new p("2025-09-libdiscore-telemetry"),
    E = new _("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded");
class g extends d {
    label;
    treatmentCount;
    getLabel() {
        return this.label;
    }
    getTreatments() {
        return Array.from({ length: this.treatmentCount }, (e, t) => ({ treatmentId: t }));
    }
    constructor(e, t, n) {
        super(e), (this.label = t), (this.treatmentCount = n);
    }
}
new g("2026-01-android-rmle", "Android Pull Mode Rendering", 4),
    new g("2026-02-android-fresco-cache", "Android Fresco Cache", 3),
    new _("2026-02-android-chat-mosaic-shared-pool", "Android Chat Mosaic Shared Pool"),
    new _("2026-03_mobile-hermes-occupancy-target", "Android Hermes Occupancy Target");
let A = !1;
function I() {
    return A;
}
function T() {
    (0, s.xd)() &&
        (l.info("Clearing libdiscore experiment cache and disabling sync"), (A = !0), (0, s.Ih)().clearCache());
}
