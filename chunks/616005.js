"use strict";
n.d(t, { Q: () => o });
var r = n(70298),
    i = n(973522),
    s = n(15285),
    a = n(321034);
function o() {
    let e, t, n, o, l, u;
    return {
        ...((e = {}),
        null != (t = a.A.getMemoryUsageElectronRenderer()) && (e.client_heartbeat_renderer_memory = t),
        null != (n = a.A.getMemoryUsageElectronRendererUsedHeapSize()) &&
            (e.client_heartbeat_renderer_memory_used_heap = n),
        null != (o = a.A.getMemoryUsageElectronProcessTypeDetails()) &&
            ((e.electron_process_memory_private = [
                o.unknown?.wss_priv_kb ?? -1,
                o.main?.wss_priv_kb ?? -1,
                o.renderer?.wss_priv_kb ?? -1,
                o.gpu?.wss_priv_kb ?? -1,
                o.crashpad?.wss_priv_kb ?? -1,
                o.utility?.wss_priv_kb ?? -1,
            ]),
            (e.electron_process_memory_private_and_shared = [
                o.unknown?.wss_kb ?? -1,
                o.main?.wss_kb ?? -1,
                o.renderer?.wss_kb ?? -1,
                o.gpu?.wss_kb ?? -1,
                o.crashpad?.wss_kb ?? -1,
                o.utility?.wss_kb ?? -1,
            ])),
        e),
        ...((l = {}),
        null != (u = s.Ay.getCurrentGameForAnalytics()) &&
            ((l.client_heartbeat_current_game_id = u.id),
            (l.client_heartbeat_current_game_name = u.name),
            (l.client_heartbeat_current_game_executable = (0, i.Ic)(u.exePath)),
            (l.client_heartbeat_current_game_distributor = u.distributor),
            (l.uses_client_mods = (0, r.b)())),
        l),
    };
}
