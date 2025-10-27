n.d(t, {
    F0: () => h,
    bk: () => _,
}),
    n(539854);
var r,
    i = n(442837),
    a = n(579092),
    o = n(570140),
    s = n(188274),
    l = n(837268),
    c = n(338949);
function u(e, t, n) {
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
let d = new a.Yd("LegacyOverlayClient"),
    f = 1000,
    _ = 10000,
    p = 20000,
    h = "Heartbeat",
    m = new s.Z(f),
    g = null,
    E = null;
function b(e) {
    let { level: t, message: n, timestamp: r, context: i } = e;
    if (!c.Z.hasRenderDebugMode(l.GO.LegacyOverlayLogging) || __OVERLAY__) return !1;
    if (
        (m.push({
            level: t,
            message: n,
            timestamp: r,
            context: i,
        }),
        n === h && (g = Date.now()),
        n !== h)
    )
        switch (t) {
            case "error":
            case "crash":
                d.error(n);
                break;
            case "warn":
                d.warn(n);
                break;
            case "info":
                d.info(n);
                break;
            default:
                d.log(n);
        }
    return !0;
}
function y() {
    null == E &&
        (E = setInterval(() => {
            if (null != g) {
                let e = Date.now() - g;
                e > p &&
                    (d.warn("No heartbeat for ".concat(Math.round(e / 1000), "s - overlay may be unresponsive")),
                    (g = null));
            }
        }, _));
}
function O() {
    null != E && (clearInterval(E), (E = null));
}
function v(e) {
    let { enabled: t, mode: n } = e;
    return n === l.GO.LegacyOverlayLogging && (t ? y() : O()), !1;
}
function I(e) {
    let { logs: t } = e;
    return t.forEach((e) => b(e)), !0;
}
class T extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), c.Z.hasRenderDebugMode(l.GO.LegacyOverlayLogging) && y();
    }
    getAllLogs() {
        return m;
    }
    getLogsByLevel(e) {
        return m.filter((t) => t.level === e);
    }
    getErrorLogs() {
        return m.filter((e) => "error" === e.level || "crash" === e.level);
    }
}
u(T, "displayName", "OverlayRPCLogStore"),
    new T(o.Z, {
        OVERLAY_RENDER_DEBUG_MODE: v,
        OVERLAY_ADD_LOGS_BATCH: I,
    });
