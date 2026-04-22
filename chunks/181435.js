"use strict";
n.d(t, { $8: () => o, ON: () => s, QJ: () => a, Vx: () => l, tn: () => d });
var r,
    i,
    s =
        (((r = {}).NativeOOP = "native_oop"),
        (r.NativeLegacy = "native_legacy"),
        (r.OOPModule = "oop_module"),
        (r.LegacyModule = "legacy_module"),
        (r.Flux = "flux"),
        (r.Renderer = "renderer"),
        r),
    a = (((i = {}).Info = "info"), (i.Error = "error"), (i.Warning = "warn"), i);
function o(e, t) {
    return e.name === t;
}
function l(e) {
    return !("nativeId" in e) && !("pid" in e);
}
function u(e) {
    return { timestamp: e.timestamp, name: e.name, data: e.data, type: e.type, pid: e.pid };
}
function d(e, t) {
    let n = e.map(u),
        r = null != t ? n.filter(t) : n,
        i = {};
    for (let e of r) {
        let t = `${e.type}-${e.pid}-${e.name}`;
        i[t] = (function (e, t) {
            let n = e.reduce((e, t) => ((e[t.timestamp] = t.data), e), {});
            return {
                type: t?.type ?? e[0].type,
                pid: t?.pid ?? e[0].pid,
                name: t?.name ?? e[0].name,
                batchedData: { ...(t?.batchedData ?? {}), ...n },
            };
        })([e], i[t]);
    }
    return Object.values(i);
}
