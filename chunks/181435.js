"use strict";
n.d(t, { $8: () => a, ON: () => r, QJ: () => i, Vx: () => s, tn: () => c });
var r = (function (e) {
        return (
            (e.NativeOOP = "native_oop"),
            (e.NativeLegacy = "native_legacy"),
            (e.OOPModule = "oop_module"),
            (e.LegacyModule = "legacy_module"),
            (e.Flux = "flux"),
            (e.Renderer = "renderer"),
            e
        );
    })({}),
    i = (function (e) {
        return (e.Info = "info"), (e.Error = "error"), (e.Warning = "warn"), e;
    })({});
function a(e, t) {
    return e.name === t;
}
function s(e) {
    let t = "nativeId" in e,
        n = "pid" in e;
    return !t && !n;
}
function o(e) {
    return { timestamp: e.timestamp, name: e.name, data: e.data, type: e.type, pid: e.pid };
}
function l(e, t) {
    let n = e.reduce((e, t) => ((e[t.timestamp] = t.data), e), {});
    return {
        type: t?.type ?? e[0].type,
        pid: t?.pid ?? e[0].pid,
        name: t?.name ?? e[0].name,
        batchedData: { ...(t?.batchedData ?? {}), ...n },
    };
}
function u(e) {
    return `${e.type}-${e.pid}-${e.name}`;
}
function c(e, t) {
    let n = e.map(o),
        r = null != t ? n.filter(t) : n,
        i = {};
    for (let e of r) {
        let t = u(e);
        i[t] = l([e], i[t]);
    }
    return Object.values(i);
}
