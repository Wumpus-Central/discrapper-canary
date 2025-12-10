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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u() {
    let e = {};
    {
        let C = s.Z.getMemoryUsageElectronRenderer();
        null != C && (e.client_heartbeat_renderer_memory = C);
        let A = s.Z.getMemoryUsageElectronRendererUsedHeapSize();
        null != A && (e.client_heartbeat_renderer_memory_used_heap = A);
        let N = s.Z.getMemoryUsageElectronProcessTypeDetails();
        if (null != N) {
            var t, n, r, i, a, o, l, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T;
            (e.electron_process_memory_private = [
                null != (_ = null == (t = N.unknown) ? void 0 : t.wss_priv_kb) ? _ : -1,
                null != (m = null == (n = N.main) ? void 0 : n.wss_priv_kb) ? m : -1,
                null != (h = null == (r = N.renderer) ? void 0 : r.wss_priv_kb) ? h : -1,
                null != (g = null == (i = N.gpu) ? void 0 : i.wss_priv_kb) ? g : -1,
                null != (E = null == (a = N.crashpad) ? void 0 : a.wss_priv_kb) ? E : -1,
                null != (b = null == (o = N.utility) ? void 0 : o.wss_priv_kb) ? b : -1,
            ]),
                (e.electron_process_memory_private_and_shared = [
                    null != (y = null == (l = N.unknown) ? void 0 : l.wss_kb) ? y : -1,
                    null != (O = null == (c = N.main) ? void 0 : c.wss_kb) ? O : -1,
                    null != (v = null == (u = N.renderer) ? void 0 : u.wss_kb) ? v : -1,
                    null != (S = null == (d = N.gpu) ? void 0 : d.wss_kb) ? S : -1,
                    null != (I = null == (f = N.crashpad) ? void 0 : f.wss_kb) ? I : -1,
                    null != (T = null == (p = N.utility) ? void 0 : p.wss_kb) ? T : -1,
                ]);
        }
    }
    return e;
}
function d() {
    let e = {};
    {
        let t = a.ZP.getCurrentGameForAnalytics();
        null != t &&
            ((e.client_heartbeat_current_game_id = t.id),
            (e.client_heartbeat_current_game_name = t.name),
            (e.client_heartbeat_current_game_executable = (0, i.N6)(t.exePath)),
            (e.client_heartbeat_current_game_distributor = t.distributor),
            (e.uses_client_mods = (0, r.e)())),
            o.Z.isNativeModuleLoaded() && (e.voice_filters_native_module_loaded = !0);
    }
    return e;
}
function f() {
    return c({}, u(), d());
}
