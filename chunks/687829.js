n.d(t, { A: () => I }), n(321073);
var i = n(439372),
    r = n(967347),
    a = n(174459),
    s = n(927813),
    l = n(723702),
    o = n(321034),
    d = n(19575),
    c = n(652215);
let u = 5 * s.A.Millis.MINUTE;
function _() {
    return l.isPlatformEmbedded;
}
async function E() {
    let e = o.A.getMemoryUsageElectronProcessTypeDetails();
    if (null == e) return null;
    let t = {
            electron_process_memory_private: [
                e.unknown?.wss_priv_kb ?? -1,
                e.main?.wss_priv_kb ?? -1,
                e.renderer?.wss_priv_kb ?? -1,
                e.gpu?.wss_priv_kb ?? -1,
                e.crashpad?.wss_priv_kb ?? -1,
                e.utility?.wss_priv_kb ?? -1,
                e.clips?.wss_priv_kb ?? -1,
            ],
            electron_process_memory_private_and_shared: [
                e.unknown?.wss_kb ?? -1,
                e.main?.wss_kb ?? -1,
                e.renderer?.wss_kb ?? -1,
                e.gpu?.wss_kb ?? -1,
                e.crashpad?.wss_kb ?? -1,
                e.utility?.wss_kb ?? -1,
                e.clips?.wss_kb ?? -1,
            ],
            electron_process_type_count: [
                e.unknown?.proc_count ?? 0,
                e.main?.proc_count ?? 0,
                e.renderer?.proc_count ?? 0,
                e.gpu?.proc_count ?? 0,
                e.crashpad?.proc_count ?? 0,
                e.utility?.proc_count ?? 0,
                e.clips?.proc_count ?? 0,
            ],
        },
        n = await (0, r.w)();
    return (
        null != n &&
            (null != n.cpu_memory && (t.system_memory_total = n.cpu_memory / 1024),
            null != n.cpu_memory_avail && (t.system_memory_available = n.cpu_memory_avail / 1024)),
        t
    );
}
async function A() {
    let e,
        t = { gpu_dedicated_memory: [], gpu_renderer_used_memory: [] };
    if (!l.isPlatformEmbedded || !(0, l.isWindows)()) return t;
    try {
        if (
            (await d.Ay.ensureModule("discord_media"),
            (e = d.Ay.requireModule("discord_media")),
            e?.getMemoryUsageBlob == null)
        )
            return t;
    } catch {
        return t;
    }
    let n = [],
        i = [],
        r = await e.getMemoryUsageBlob(),
        a = new Set();
    for (let e of r?.[0]?.data?.gpus ?? [])
        if (!(!e.luid || 0 === e.luid || a.has(e.luid)))
            if ((a.add(e.luid), null != e.memory ? n.push(e.memory / 1024) : n.push(-1), null != e.memory_usage)) {
                let t = 0;
                for (let n of e.memory_usage) n.memory_usage && (t += n.memory_usage / 1024);
                i.push(t);
            } else i.push(-1);
    return { gpu_dedicated_memory: n, gpu_renderer_used_memory: i };
}
class h extends i.A {
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
            }, u)));
    }
    async trackPerfAnalytics() {
        let e,
            t,
            n,
            i,
            r = await E();
        if (null == r) return;
        let s =
                ((e = o.A.getMemoryHeapStats()),
                (t = o.A.getBlinkMemoryInfo()),
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
                (i = null),
                null != t && (i = [t.allocated, t.total]),
                { v8_heap_stats: n, blink_memory_stats: i }),
            l = await A(),
            d = { ...r, ...s, ...l };
        a.default.track(c.HAw.DESKTOP_PERF_HEARTBEAT, d);
    }
}
let I = new h();
