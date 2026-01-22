n.d(t, { Q: () => f });
var r = n(70298),
    i = n(973522),
    a = n(15285),
    s = n(971778),
    o = n(321034);
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
        let T = o.A.getMemoryUsageElectronRenderer();
        null != T && (e.client_heartbeat_renderer_memory = T);
        let C = o.A.getMemoryUsageElectronRendererUsedHeapSize();
        null != C && (e.client_heartbeat_renderer_memory_used_heap = C);
        let N = o.A.getMemoryUsageElectronProcessTypeDetails();
        if (null != N) {
            var t, n, r, i, a, s, l, c, u, d, f, p, _, h, m, g, E, b, y, O, A, v, S, I;
            (e.electron_process_memory_private = [
                null != (t = null == (_ = N.unknown) ? void 0 : _.wss_priv_kb) ? t : -1,
                null != (n = null == (h = N.main) ? void 0 : h.wss_priv_kb) ? n : -1,
                null != (r = null == (m = N.renderer) ? void 0 : m.wss_priv_kb) ? r : -1,
                null != (i = null == (g = N.gpu) ? void 0 : g.wss_priv_kb) ? i : -1,
                null != (a = null == (E = N.crashpad) ? void 0 : E.wss_priv_kb) ? a : -1,
                null != (s = null == (b = N.utility) ? void 0 : b.wss_priv_kb) ? s : -1,
            ]),
                (e.electron_process_memory_private_and_shared = [
                    null != (l = null == (y = N.unknown) ? void 0 : y.wss_kb) ? l : -1,
                    null != (c = null == (O = N.main) ? void 0 : O.wss_kb) ? c : -1,
                    null != (u = null == (A = N.renderer) ? void 0 : A.wss_kb) ? u : -1,
                    null != (d = null == (v = N.gpu) ? void 0 : v.wss_kb) ? d : -1,
                    null != (f = null == (S = N.crashpad) ? void 0 : S.wss_kb) ? f : -1,
                    null != (p = null == (I = N.utility) ? void 0 : I.wss_kb) ? p : -1,
                ]);
        }
    }
    return e;
}
function d() {
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
function f() {
    return c({}, u(), d());
}
