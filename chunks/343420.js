n.d(t, { O: () => f });
var r = n(903772),
    i = n(581567),
    a = n(594190),
    o = n(709706),
    s = n(848479);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u() {
    let e = {};
    {
        let A = s.Z.getMemoryUsageElectronRenderer();
        null != A && (e.client_heartbeat_renderer_memory = A);
        let N = s.Z.getMemoryUsageElectronRendererUsedHeapSize();
        null != N && (e.client_heartbeat_renderer_memory_used_heap = N);
        let C = s.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null != C) {
            var t, n, r, i, a, o, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S;
            ((e.electron_process_memory_private = [null != (p = null == (t = C.unknown) ? void 0 : t.wss_priv_kb) ? p : -1, null != (h = null == (n = C.main) ? void 0 : n.wss_priv_kb) ? h : -1, null != (m = null == (r = C.renderer) ? void 0 : r.wss_priv_kb) ? m : -1, null != (g = null == (i = C.gpu) ? void 0 : i.wss_priv_kb) ? g : -1, null != (E = null == (a = C.crashpad) ? void 0 : a.wss_priv_kb) ? E : -1, null != (b = null == (o = C.utility) ? void 0 : o.wss_priv_kb) ? b : -1]), (e.electron_process_memory_private_and_shared = [null != (y = null == (l = C.unknown) ? void 0 : l.wss_kb) ? y : -1, null != (O = null == (c = C.main) ? void 0 : c.wss_kb) ? O : -1, null != (v = null == (u = C.renderer) ? void 0 : u.wss_kb) ? v : -1, null != (I = null == (d = C.gpu) ? void 0 : d.wss_kb) ? I : -1, null != (T = null == (f = C.crashpad) ? void 0 : f.wss_kb) ? T : -1, null != (S = null == (_ = C.utility) ? void 0 : _.wss_kb) ? S : -1]));
        }
    }
    return e;
}
function d() {
    let e = {};
    {
        let t = a.ZP.getCurrentGameForAnalytics();
        (null != t && ((e.client_heartbeat_current_game_id = t.id), (e.client_heartbeat_current_game_name = t.name), (e.client_heartbeat_current_game_executable = (0, i.N6)(t.exePath)), (e.client_heartbeat_current_game_distributor = t.distributor), (e.uses_client_mods = (0, r.e)())), o.Z.isNativeModuleLoaded() && (e.voice_filters_native_module_loaded = !0));
    }
    return e;
}
function f() {
    return c({}, u(), d());
}
