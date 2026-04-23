n.d(t, { Q: () => _ });
var i = n(70298),
    r = n(973522),
    a = n(328153),
    s = n(321034);
function _() {
    let e, t, n, _, l, o;
    return {
        ...((e = {}),
        null != (t = s.A.getMemoryUsageElectronRenderer()) && (e.client_heartbeat_renderer_memory = t),
        null != (n = s.A.getMemoryUsageElectronRendererUsedHeapSize()) &&
            (e.client_heartbeat_renderer_memory_used_heap = n),
        null != (_ = s.A.getMemoryUsageElectronProcessTypeDetails()) &&
            ((e.electron_process_memory_private = [
                _.unknown?.wss_priv_kb ?? -1,
                _.main?.wss_priv_kb ?? -1,
                _.renderer?.wss_priv_kb ?? -1,
                _.gpu?.wss_priv_kb ?? -1,
                _.crashpad?.wss_priv_kb ?? -1,
                _.utility?.wss_priv_kb ?? -1,
            ]),
            (e.electron_process_memory_private_and_shared = [
                _.unknown?.wss_kb ?? -1,
                _.main?.wss_kb ?? -1,
                _.renderer?.wss_kb ?? -1,
                _.gpu?.wss_kb ?? -1,
                _.crashpad?.wss_kb ?? -1,
                _.utility?.wss_kb ?? -1,
            ])),
        e),
        ...((l = {}),
        null != (o = a.Ay.getCurrentGameForAnalytics()) &&
            ((l.client_heartbeat_current_game_id = o.id),
            (l.client_heartbeat_current_game_name = o.name),
            (l.client_heartbeat_current_game_executable = (0, r.Ic)(o.exePath)),
            (l.client_heartbeat_current_game_distributor = o.distributor),
            (l.uses_client_mods = (0, i.b)())),
        l),
    };
}
