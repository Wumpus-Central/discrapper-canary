n.d(t, { Z: () => g }), n(388685);
var r = n(147913),
    i = n(704806),
    a = n(626135),
    o = n(70956),
    s = n(358085),
    l = n(848479),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = 5 * o.Z.Millis.MINUTE;
function _() {
    return s.isPlatformEmbedded;
}
async function p() {
    var e, t, n, r, a, o, s, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A, C, N, R, P, w, D, x, L, M, j, k;
    let U = l.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null == U) return null;
    let G = [
            null != (y = null == (e = U.unknown) ? void 0 : e.wss_priv_kb) ? y : -1,
            null != (O = null == (t = U.main) ? void 0 : t.wss_priv_kb) ? O : -1,
            null != (v = null == (n = U.renderer) ? void 0 : n.wss_priv_kb) ? v : -1,
            null != (I = null == (r = U.gpu) ? void 0 : r.wss_priv_kb) ? I : -1,
            null != (T = null == (a = U.crashpad) ? void 0 : a.wss_priv_kb) ? T : -1,
            null != (S = null == (o = U.utility) ? void 0 : o.wss_priv_kb) ? S : -1,
        ],
        B = {
            electron_process_memory_private: G,
            electron_process_memory_private_and_shared: [
                null != (A = null == (s = U.unknown) ? void 0 : s.wss_kb) ? A : -1,
                null != (C = null == (c = U.main) ? void 0 : c.wss_kb) ? C : -1,
                null != (N = null == (u = U.renderer) ? void 0 : u.wss_kb) ? N : -1,
                null != (R = null == (d = U.gpu) ? void 0 : d.wss_kb) ? R : -1,
                null != (P = null == (f = U.crashpad) ? void 0 : f.wss_kb) ? P : -1,
                null != (w = null == (_ = U.utility) ? void 0 : _.wss_kb) ? w : -1,
            ],
            electron_process_type_count: [
                null != (D = null == (p = U.unknown) ? void 0 : p.proc_count) ? D : 0,
                null != (x = null == (h = U.main) ? void 0 : h.proc_count) ? x : 0,
                null != (L = null == (m = U.renderer) ? void 0 : m.proc_count) ? L : 0,
                null != (M = null == (g = U.gpu) ? void 0 : g.proc_count) ? M : 0,
                null != (j = null == (E = U.crashpad) ? void 0 : E.proc_count) ? j : 0,
                null != (k = null == (b = U.utility) ? void 0 : b.proc_count) ? k : 0,
            ],
        },
        Z = await (0, i.q)();
    return (
        null != Z &&
            (null != Z.cpu_memory && (B.system_memory_total = Z.cpu_memory / 1024),
            null != Z.cpu_memory_avail && (B.system_memory_available = Z.cpu_memory_avail / 1024)),
        B
    );
}
function h() {
    let e = l.Z.getMemoryHeapStats(),
        t = l.Z.getBlinkMemoryInfo(),
        n = null;
    null != e &&
        (n = [
            e.totalHeapSize,
            e.totalHeapSizeExecutable,
            e.totalPhysicalSize,
            e.totalAvailableSize,
            e.usedHeapSize,
            e.heapSizeLimit,
            e.mallocedMemory,
            e.peakMallocedMemory,
        ]);
    let r = null;
    return (
        null != t && (r = [t.allocated, t.total]),
        {
            v8_heap_stats: n,
            blink_memory_stats: r,
        }
    );
}
class m extends r.Z {
    _initialize() {}
    _terminate() {
        _() && (clearInterval(this._heartbeatAnalyticsInterval), (this._heartbeatAnalyticsInterval = null));
    }
    handlePostConnectionOpen() {
        _() &&
            (clearInterval(this._heartbeatAnalyticsInterval),
            (this._heartbeatAnalyticsInterval = setInterval(async () => {
                await this.trackPerfAnalytics();
            }, f)));
    }
    async trackPerfAnalytics() {
        let e = await p();
        if (null == e) return;
        let t = d({}, e, h());
        a.default.track(c.rMx.DESKTOP_PERF_HEARTBEAT, t);
    }
    constructor(...e) {
        super(...e),
            u(this, "_heartbeatAnalyticsInterval", null),
            u(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let g = new m();
