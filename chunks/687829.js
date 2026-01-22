n.d(t, {
    A: () => b,
}),
    n(896048),
    n(321073);
var r = n(439372),
    i = n(851581),
    a = n(954571),
    s = n(927813),
    o = n(723702),
    l = n(321034),
    c = n(837921),
    u = n(652215);

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
let p = 5 * s.A.Millis.MINUTE;

function _() {
    return o.isPlatformEmbedded;
}
async function h() {
    var e, t, n, r, a, s, o, c, u, d, f, p, _, h, m, g, E, b, y, O, A, v, S, I, T, C, N, R, w, P, D, x, L, j, M, k;
    let U = l.A.getMemoryUsageElectronProcessTypeDetails();
    if (null == U) return null;
    let G = {
            electron_process_memory_private: [
                null != (e = null == (y = U.unknown) ? void 0 : y.wss_priv_kb) ? e : -1,
                null != (t = null == (O = U.main) ? void 0 : O.wss_priv_kb) ? t : -1,
                null != (n = null == (A = U.renderer) ? void 0 : A.wss_priv_kb) ? n : -1,
                null != (r = null == (v = U.gpu) ? void 0 : v.wss_priv_kb) ? r : -1,
                null != (a = null == (S = U.crashpad) ? void 0 : S.wss_priv_kb) ? a : -1,
                null != (s = null == (I = U.utility) ? void 0 : I.wss_priv_kb) ? s : -1,
            ],
            electron_process_memory_private_and_shared: [
                null != (o = null == (T = U.unknown) ? void 0 : T.wss_kb) ? o : -1,
                null != (c = null == (C = U.main) ? void 0 : C.wss_kb) ? c : -1,
                null != (u = null == (N = U.renderer) ? void 0 : N.wss_kb) ? u : -1,
                null != (d = null == (R = U.gpu) ? void 0 : R.wss_kb) ? d : -1,
                null != (f = null == (w = U.crashpad) ? void 0 : w.wss_kb) ? f : -1,
                null != (p = null == (P = U.utility) ? void 0 : P.wss_kb) ? p : -1,
            ],
            electron_process_type_count: [
                null != (_ = null == (D = U.unknown) ? void 0 : D.proc_count) ? _ : 0,
                null != (h = null == (x = U.main) ? void 0 : x.proc_count) ? h : 0,
                null != (m = null == (L = U.renderer) ? void 0 : L.proc_count) ? m : 0,
                null != (g = null == (j = U.gpu) ? void 0 : j.proc_count) ? g : 0,
                null != (E = null == (M = U.crashpad) ? void 0 : M.proc_count) ? E : 0,
                null != (b = null == (k = U.utility) ? void 0 : k.proc_count) ? b : 0,
            ],
        },
        V = await (0, i.w)();
    return (
        null != V &&
            (null != V.cpu_memory && (G.system_memory_total = V.cpu_memory / 1024),
            null != V.cpu_memory_avail && (G.system_memory_available = V.cpu_memory_avail / 1024)),
        G
    );
}

function m() {
    let e = l.A.getMemoryHeapStats(),
        t = l.A.getBlinkMemoryInfo(),
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
    if (!o.isPlatformEmbedded || !(0, o.isWindows)()) return i;
    try {
        if (
            (await c.Ay.ensureModule("discord_media"),
            (null == (r = c.Ay.requireModule("discord_media")) ? void 0 : r.getMemoryUsageBlob) == null)
        )
            return i;
    } catch (e) {
        return i;
    }
    let a = [],
        s = [],
        l = await r.getMemoryUsageBlob(),
        u = new Set();
    for (let r of null != (e = null == l || null == (n = l[0]) || null == (t = n.data) ? void 0 : t.gpus) ? e : [])
        if (!(!r.luid || 0 === r.luid || u.has(r.luid)))
            if ((u.add(r.luid), null != r.memory ? a.push(r.memory / 1024) : a.push(-1), null != r.memory_usage)) {
                let e = 0;
                for (let t of r.memory_usage) t.memory_usage && (e += t.memory_usage / 1024);
                s.push(e);
            } else s.push(-1);
    return {
        gpu_dedicated_memory: a,
        gpu_renderer_used_memory: s,
    };
}
class E extends r.A {
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
        let e = await h();
        if (null == e) return;
        let t = f({}, e, m(), await g());
        a.default.track(u.HAw.DESKTOP_PERF_HEARTBEAT, t);
    }
    constructor(...e) {
        super(...e),
            d(this, "_heartbeatAnalyticsInterval", null),
            d(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
            });
    }
}
let b = new E();
