n.d(t, { Z: () => b }), n(388685), n(539854);
var r = n(147913),
    i = n(704806),
    a = n(626135),
    o = n(70956),
    s = n(358085),
    l = n(848479),
    c = n(998502),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = 5 * o.Z.Millis.MINUTE;
function _() {
    return s.isPlatformEmbedded;
}
async function m() {
    var e, t, n, r, a, o, s, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T, C, A, N, P, R, w, D, x, L, j, M, k;
    let U = l.Z.getMemoryUsageElectronProcessTypeDetails();
    if (null == U) return null;
    let G = [
            null != (y = null == (e = U.unknown) ? void 0 : e.wss_priv_kb) ? y : -1,
            null != (O = null == (t = U.main) ? void 0 : t.wss_priv_kb) ? O : -1,
            null != (v = null == (n = U.renderer) ? void 0 : n.wss_priv_kb) ? v : -1,
            null != (S = null == (r = U.gpu) ? void 0 : r.wss_priv_kb) ? S : -1,
            null != (I = null == (a = U.crashpad) ? void 0 : a.wss_priv_kb) ? I : -1,
            null != (T = null == (o = U.utility) ? void 0 : o.wss_priv_kb) ? T : -1,
        ],
        Z = {
            electron_process_memory_private: G,
            electron_process_memory_private_and_shared: [
                null != (C = null == (s = U.unknown) ? void 0 : s.wss_kb) ? C : -1,
                null != (A = null == (c = U.main) ? void 0 : c.wss_kb) ? A : -1,
                null != (N = null == (u = U.renderer) ? void 0 : u.wss_kb) ? N : -1,
                null != (P = null == (d = U.gpu) ? void 0 : d.wss_kb) ? P : -1,
                null != (R = null == (f = U.crashpad) ? void 0 : f.wss_kb) ? R : -1,
                null != (w = null == (p = U.utility) ? void 0 : p.wss_kb) ? w : -1,
            ],
            electron_process_type_count: [
                null != (D = null == (_ = U.unknown) ? void 0 : _.proc_count) ? D : 0,
                null != (x = null == (m = U.main) ? void 0 : m.proc_count) ? x : 0,
                null != (L = null == (h = U.renderer) ? void 0 : h.proc_count) ? L : 0,
                null != (j = null == (g = U.gpu) ? void 0 : g.proc_count) ? j : 0,
                null != (M = null == (E = U.crashpad) ? void 0 : E.proc_count) ? M : 0,
                null != (k = null == (b = U.utility) ? void 0 : b.proc_count) ? k : 0,
            ],
        },
        F = await (0, i.q)();
    return (
        null != F &&
            (null != F.cpu_memory && (Z.system_memory_total = F.cpu_memory / 1024),
            null != F.cpu_memory_avail && (Z.system_memory_available = F.cpu_memory_avail / 1024)),
        Z
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
async function g() {
    var e, t, n;
    let r,
        i = {
            gpu_dedicated_memory: [],
            gpu_renderer_used_memory: [],
        };
    if (!s.isPlatformEmbedded || !(0, s.isWindows)()) return i;
    try {
        if (
            (await c.ZP.ensureModule("discord_media"),
            (null == (r = c.ZP.requireModule("discord_media")) ? void 0 : r.getMemoryUsageBlob) == null)
        )
            return i;
    } catch (e) {
        return i;
    }
    let a = [],
        o = [],
        l = await r.getMemoryUsageBlob(),
        u = new Set();
    for (let r of null != (n = null == l || null == (t = l[0]) || null == (e = t.data) ? void 0 : e.gpus) ? n : [])
        if (!(!r.luid || 0 === r.luid || u.has(r.luid)))
            if ((u.add(r.luid), null != r.memory ? a.push(r.memory / 1024) : a.push(-1), null != r.memory_usage)) {
                let e = 0;
                for (let t of r.memory_usage) t.memory_usage && (e += t.memory_usage / 1024);
                o.push(e);
            } else o.push(-1);
    return {
        gpu_dedicated_memory: a,
        gpu_renderer_used_memory: o,
    };
}
class E extends r.Z {
    _initialize() {}
    _terminate() {
        _() && (clearInterval(this._heartbeatAnalyticsInterval), (this._heartbeatAnalyticsInterval = null));
    }
    handlePostConnectionOpen() {
        _() &&
            (clearInterval(this._heartbeatAnalyticsInterval),
            (this._heartbeatAnalyticsInterval = setInterval(async () => {
                await this.trackPerfAnalytics();
            }, p)));
    }
    async trackPerfAnalytics() {
        let e = await m();
        if (null == e) return;
        let t = f({}, e, h(), await g());
        a.default.track(u.rMx.DESKTOP_PERF_HEARTBEAT, t);
    }
    constructor(...e) {
        super(...e),
            d(this, "_heartbeatAnalyticsInterval", null),
            d(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let b = new E();
