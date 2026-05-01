n.d(t, { Q: () => l });
var i = n(70298),
    a = n(973522),
    r = n(328153),
    s = n(321034);
function l() {
    let e, t, n, l, o, d;
    return {
        ...((e = {}),
        null != (t = s.A.getMemoryUsageElectronRenderer()) && (e.client_heartbeat_renderer_memory = t),
        null != (n = s.A.getMemoryUsageElectronRendererUsedHeapSize()) &&
            (e.client_heartbeat_renderer_memory_used_heap = n),
        null != (l = s.A.getMemoryUsageElectronProcessTypeDetails()) &&
            ((e.electron_process_memory_private = [
                l.unknown?.wss_priv_kb ?? -1,
                l.main?.wss_priv_kb ?? -1,
                l.renderer?.wss_priv_kb ?? -1,
                l.gpu?.wss_priv_kb ?? -1,
                l.crashpad?.wss_priv_kb ?? -1,
                l.utility?.wss_priv_kb ?? -1,
            ]),
            (e.electron_process_memory_private_and_shared = [
                l.unknown?.wss_kb ?? -1,
                l.main?.wss_kb ?? -1,
                l.renderer?.wss_kb ?? -1,
                l.gpu?.wss_kb ?? -1,
                l.crashpad?.wss_kb ?? -1,
                l.utility?.wss_kb ?? -1,
            ])),
        e),
        ...((o = {}),
        null != (d = r.Ay.getCurrentGameForAnalytics()) &&
            ((o.client_heartbeat_current_game_id = d.id),
            (o.client_heartbeat_current_game_name = d.name),
            (o.client_heartbeat_current_game_executable = (0, a.Ic)(d.exePath)),
            (o.client_heartbeat_current_game_distributor = d.distributor),
            (o.uses_client_mods = (0, i.b)())),
        o),
    };
}
