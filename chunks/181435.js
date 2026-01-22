function r(e, t, n) {
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
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
n.d(t, {
    $8: () => o,
    ON: () => a,
    QJ: () => s,
    Vx: () => l,
    tn: () => f,
}),
    n(896048);
var a = (function (e) {
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
    s = (function (e) {
        return (e.Info = "info"), (e.Error = "error"), (e.Warning = "warn"), e;
    })({});
function o(e, t) {
    return e.name === t;
}
function l(e) {
    let t = "nativeId" in e,
        n = "pid" in e;
    return !t && !n;
}
function c(e) {
    return {
        timestamp: e.timestamp,
        name: e.name,
        data: e.data,
        type: e.type,
        pid: e.pid,
    };
}
function u(e, t) {
    var n, r, a, s;
    let o = e.reduce((e, t) => ((e[t.timestamp] = t.data), e), {});
    return {
        type: null != (n = null == t ? void 0 : t.type) ? n : e[0].type,
        pid: null != (r = null == t ? void 0 : t.pid) ? r : e[0].pid,
        name: null != (a = null == t ? void 0 : t.name) ? a : e[0].name,
        batchedData: i({}, null != (s = null == t ? void 0 : t.batchedData) ? s : {}, o),
    };
}
function d(e) {
    return "".concat(e.type, "-").concat(e.pid, "-").concat(e.name);
}
function f(e, t) {
    let n = e.map(c),
        r = null != t ? n.filter(t) : n,
        i = {};
    for (let e of r) {
        let t = d(e);
        i[t] = u([e], i[t]);
    }
    return Object.values(i);
}
