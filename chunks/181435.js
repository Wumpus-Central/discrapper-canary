"use strict";
n.d(t, { $8: () => o, ON: () => s, QJ: () => a, Vx: () => l, tn: () => c });
var i,
    r,
    s =
        (((i = {}).NativeOOP = "native_oop"),
        (i.NativeLegacy = "native_legacy"),
        (i.OOPModule = "oop_module"),
        (i.LegacyModule = "legacy_module"),
        (i.Flux = "flux"),
        (i.Renderer = "renderer"),
        i),
    a = (((r = {}).Info = "info"), (r.Error = "error"), (r.Warning = "warn"), r);
function o(e, t) {
    return e.name === t;
}
function l(e) {
    return !("nativeId" in e) && !("pid" in e);
}
function u(e) {
    return { timestamp: e.timestamp, name: e.name, data: e.data, type: e.type, pid: e.pid };
}
function c(e, t) {
    let n = e.map(u),
        i = null != t ? n.filter(t) : n,
        r = {};
    for (let e of i) {
        let t = `${e.type}-${e.pid}-${e.name}`;
        r[t] = (function (e, t) {
            let n = e.reduce((e, t) => ((e[t.timestamp] = t.data), e), {});
            return {
                type: t?.type ?? e[0].type,
                pid: t?.pid ?? e[0].pid,
                name: t?.name ?? e[0].name,
                batchedData: { ...(t?.batchedData ?? {}), ...n },
            };
        })([e], r[t]);
    }
    return Object.values(r);
}
