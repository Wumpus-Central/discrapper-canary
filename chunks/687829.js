"use strict";
n.d(t, { A: () => E }), n(321073);
var r = n(439372),
    i = n(967347),
    s = n(954571),
    a = n(927813),
    o = n(723702),
    l = n(321034),
    u = n(837921),
    c = n(652215);
let d = 5 * a.A.Millis.MINUTE;
function _() {
    return o.isPlatformEmbedded;
}
async function f() {
    let e = l.A.getMemoryUsageElectronProcessTypeDetails();
    if (null == e) return null;
    let t = {
            electron_process_memory_private: [
                e.unknown?.wss_priv_kb ?? -1,
                e.main?.wss_priv_kb ?? -1,
                e.renderer?.wss_priv_kb ?? -1,
                e.gpu?.wss_priv_kb ?? -1,
                e.crashpad?.wss_priv_kb ?? -1,
                e.utility?.wss_priv_kb ?? -1,
            ],
            electron_process_memory_private_and_shared: [
                e.unknown?.wss_kb ?? -1,
                e.main?.wss_kb ?? -1,
                e.renderer?.wss_kb ?? -1,
                e.gpu?.wss_kb ?? -1,
                e.crashpad?.wss_kb ?? -1,
                e.utility?.wss_kb ?? -1,
            ],
            electron_process_type_count: [
                e.unknown?.proc_count ?? 0,
                e.main?.proc_count ?? 0,
                e.renderer?.proc_count ?? 0,
                e.gpu?.proc_count ?? 0,
                e.crashpad?.proc_count ?? 0,
                e.utility?.proc_count ?? 0,
            ],
        },
        n = await (0, i.w)();
    return (
        null != n &&
            (null != n.cpu_memory && (t.system_memory_total = n.cpu_memory / 1024),
            null != n.cpu_memory_avail && (t.system_memory_available = n.cpu_memory_avail / 1024)),
        t
    );
}
async function p() {
    let e,
        t = { gpu_dedicated_memory: [], gpu_renderer_used_memory: [] };
    if (!o.isPlatformEmbedded || !(0, o.isWindows)()) return t;
    try {
        if (
            (await u.Ay.ensureModule("discord_media"),
            (e = u.Ay.requireModule("discord_media")),
            e?.getMemoryUsageBlob == null)
        )
            return t;
    } catch {
        return t;
    }
    let n = [],
        r = [],
        i = await e.getMemoryUsageBlob(),
        s = new Set();
    for (let e of i?.[0]?.data?.gpus ?? [])
        if (!(!e.luid || 0 === e.luid || s.has(e.luid)))
            if ((s.add(e.luid), null != e.memory ? n.push(e.memory / 1024) : n.push(-1), null != e.memory_usage)) {
                let t = 0;
                for (let n of e.memory_usage) n.memory_usage && (t += n.memory_usage / 1024);
                r.push(t);
            } else r.push(-1);
    return { gpu_dedicated_memory: n, gpu_renderer_used_memory: r };
}
class h extends r.A {
    _heartbeatAnalyticsInterval = null;
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    _initialize() {}
    _terminate() {
        _() && (clearInterval(this._heartbeatAnalyticsInterval), (this._heartbeatAnalyticsInterval = null));
    }
    handlePostConnectionOpen() {
        _() &&
            (clearInterval(this._heartbeatAnalyticsInterval),
            (this._heartbeatAnalyticsInterval = setInterval(async () => {
                await this.trackPerfAnalytics();
            }, d)));
    }
    async trackPerfAnalytics() {
        let e,
            t,
            n,
            r,
            i = await f();
        if (null == i) return;
        let a =
                ((e = l.A.getMemoryHeapStats()),
                (t = l.A.getBlinkMemoryInfo()),
                (n = null),
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
                    ]),
                (r = null),
                null != t && (r = [t.allocated, t.total]),
                { v8_heap_stats: n, blink_memory_stats: r }),
            o = await p(),
            u = { ...i, ...a, ...o };
        s.default.track(c.HAw.DESKTOP_PERF_HEARTBEAT, u);
    }
}
let E = new h();
