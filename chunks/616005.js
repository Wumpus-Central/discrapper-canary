"use strict";
n.d(t, { Q: () => c });
var r = n(70298),
    i = n(973522),
    a = n(15285),
    s = n(971778),
    o = n(321034);
function l() {
    let e = {};
    {
        let t = o.A.getMemoryUsageElectronRenderer();
        null != t && (e.client_heartbeat_renderer_memory = t);
        let n = o.A.getMemoryUsageElectronRendererUsedHeapSize();
        null != n && (e.client_heartbeat_renderer_memory_used_heap = n);
        let r = o.A.getMemoryUsageElectronProcessTypeDetails();
        null != r &&
            ((e.electron_process_memory_private = [
                r.unknown?.wss_priv_kb ?? -1,
                r.main?.wss_priv_kb ?? -1,
                r.renderer?.wss_priv_kb ?? -1,
                r.gpu?.wss_priv_kb ?? -1,
                r.crashpad?.wss_priv_kb ?? -1,
                r.utility?.wss_priv_kb ?? -1,
            ]),
            (e.electron_process_memory_private_and_shared = [
                r.unknown?.wss_kb ?? -1,
                r.main?.wss_kb ?? -1,
                r.renderer?.wss_kb ?? -1,
                r.gpu?.wss_kb ?? -1,
                r.crashpad?.wss_kb ?? -1,
                r.utility?.wss_kb ?? -1,
            ]));
    }
    return e;
}
function u() {
    let e = {};
    {
        let t = a.Ay.getCurrentGameForAnalytics();
        null != t &&
            ((e.client_heartbeat_current_game_id = t.id),
            (e.client_heartbeat_current_game_name = t.name),
            (e.client_heartbeat_current_game_executable = (0, i.Ic)(t.exePath)),
            (e.client_heartbeat_current_game_distributor = t.distributor),
            (e.uses_client_mods = (0, r.b)())),
            s.A.isNativeModuleLoaded() && (e.voice_filters_native_module_loaded = !0);
    }
    return e;
}
function c() {
    return { ...l(), ...u() };
}
