"use strict";
n.d(t, { Q: () => u });
var r = n(70298),
    i = n(973522),
    s = n(15285),
    a = n(321034);
function o() {
    let e = {};
    {
        let t = a.A.getMemoryUsageElectronRenderer();
        null != t && (e.client_heartbeat_renderer_memory = t);
        let n = a.A.getMemoryUsageElectronRendererUsedHeapSize();
        null != n && (e.client_heartbeat_renderer_memory_used_heap = n);
        let r = a.A.getMemoryUsageElectronProcessTypeDetails();
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
function l() {
    let e = {};
    {
        let t = s.Ay.getCurrentGameForAnalytics();
        null != t &&
            ((e.client_heartbeat_current_game_id = t.id),
            (e.client_heartbeat_current_game_name = t.name),
            (e.client_heartbeat_current_game_executable = (0, i.Ic)(t.exePath)),
            (e.client_heartbeat_current_game_distributor = t.distributor),
            (e.uses_client_mods = (0, r.b)()));
    }
    return e;
}
function u() {
    return { ...o(), ...l() };
}
