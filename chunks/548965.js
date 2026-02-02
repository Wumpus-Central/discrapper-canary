n.d(t, {
    ML: () => l,
    P4: () => _,
    iQ: () => m,
    pd: () => h,
}),
    n(228524),
    n(321073),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(306173),
    o = n(723426);

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
let l = [],
    c = Symbol("unknown");
class u {
    getEnabledFeatureName() {
        let e = this.getCachedConfig();
        return void 0 === e || e.treatmentId <= 0 ? null : "".concat(this.id, ":").concat(e.treatmentId);
    }
    getCachedConfig() {
        return (
            this.cachedConfig === c &&
                ((0, a.xd)() ? (this.cachedConfig = (0, a.Ih)().getConfig(this.id)) : (this.cachedConfig = void 0)),
            this.cachedConfig
        );
    }
    setExperiment(e) {
        this.inner = e;
    }
    getCurrentConfig() {
        return (i()(null != this.inner, "experiment must be set before calling getCurrentConfig"),
        "getCurrentConfig" in this.inner)
            ? this.inner.getCurrentConfig({
                  location: "default",
              })
            : this.inner.getConfig({
                  location: "default",
              });
    }
    constructor(e, t) {
        s(this, "id", void 0),
            s(this, "inner", void 0),
            s(this, "cachedConfig", void 0),
            (this.id = e),
            (this.inner = null),
            (this.cachedConfig = c),
            l.push(this);
    }
}
class d extends u {
    getLabel() {
        return this.label;
    }
    getTreatments() {
        return [
            {
                treatmentId: 0,
            },
            {
                treatmentId: 1,
            },
        ];
    }
    getCachedEnabled() {
        let e = this.getCachedConfig();
        return null == e || -1 === e.treatmentId ? this.defaultValue : 1 === e.treatmentId;
    }
    constructor(e, t, n = !1) {
        super(e), s(this, "label", void 0), s(this, "defaultValue", void 0), (this.label = t), (this.defaultValue = n);
    }
}
class f extends u {
    getCachedBridgedStoreMode() {
        let e = this.getCachedConfig(),
            t = (() => {
                var t;
                switch (null != (t = null == e ? void 0 : e.treatmentId) ? t : -1) {
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
        return "typescript" === e ? null : "BridgedStore[".concat(this.storeName, ",").concat(e, "]");
    }
    getLabel() {
        return "libdiscore '".concat(this.storeName, "' Migration");
    }
    getTreatments() {
        return [
            {
                treatmentId: 0,
            },
            {
                treatmentId: 1,
            },
            {
                treatmentId: 2,
            },
        ];
    }
    constructor(e, t, n) {
        super(e, n), s(this, "storeName", void 0), (this.storeName = t);
    }
}
class p extends u {
    getLabel() {
        return "libdiscore Telemetry";
    }
    getTreatments() {
        return [
            {
                treatmentId: 0,
            },
            {
                treatmentId: 1,
            },
            {
                treatmentId: 2,
            },
            {
                treatmentId: 3,
            },
        ];
    }
    getMetricsSampleRate() {
        let e = this.getCachedConfig();
        switch (null == e ? void 0 : e.treatmentId) {
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
    constructor(...e) {
        super(...e), s(this, "MAX_EMISSIONS_PER_APP_LAUNCH", 5), s(this, "emissionsCount", 0);
    }
}
let _ = new f("2026-01-libdiscore-batch-store-refactor", "batch-store-refactor"),
    h = new p("2025-09-libdiscore-telemetry"),
    m = new d("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded");
