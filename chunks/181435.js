var i,
    r,
    a =
        (((i = {}).NativeOOP = "native_oop"),
        (i.NativeLegacy = "native_legacy"),
        (i.OOPModule = "oop_module"),
        (i.LegacyModule = "legacy_module"),
        (i.Flux = "flux"),
        (i.Renderer = "renderer"),
        i),
    s = (((r = {}).Info = "info"), (r.Error = "error"), (r.Warning = "warn"), r);
function l(e) {
    return { timestamp: e.timestamp, name: e.name, data: e.data, type: e.type, pid: e.pid };
}
n.d(
    t,
    {},
    {
        $8: function (e, t) {
            return e.name === t;
        },
        ON: a,
        QJ: s,
        Vx: function (e) {
            return !("nativeId" in e) && !("pid" in e);
        },
        tn: function (e, t) {
            let n = e.map(l),
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
        },
    },
);
