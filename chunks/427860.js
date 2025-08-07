n.d(t, {
    C7: () => a,
    JC: () => h,
    l6: () => s,
}),
    n(539854),
    n(415506),
    n(388685);
var r = n(759174),
    i = n(709054);
function o(e, t, n) {
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
var a = (function (e) {
        return (
            (e.NativeOOP = "native_oop"),
            (e.NativeLegacy = "native_legacy"),
            (e.OOPModule = "oop_module"),
            (e.LegacyModule = "legacy_module"),
            (e.Renderer = "renderer"),
            e
        );
    })({}),
    s = (function (e) {
        return (e.Info = "info"), (e.Error = "error"), (e.Warning = "warn"), e;
    })({});
function l(e) {
    let t = "nativeId" in e,
        n = "pid" in e;
    return !t && !n;
}
function c(e) {
    return l(e) ? "native-".concat(e.id) : null != e.nativeId ? "native-".concat(e.nativeId) : null;
}
function u(e) {
    var t, n;
    let r = [e.type, null != (n = null == (t = e.pid) ? void 0 : t.toString()) ? n : "null-pid"],
        i = c(e);
    return null != i && r.push(i), r;
}
function d(e) {
    return -e.timestamp;
}
function f(e, t, n) {
    var r;
    let o = i.default.fromTimestamp(Math.floor(e.timestamp));
    return {
        id: o,
        key: o,
        nativeId: Number(e.id),
        timestamp: e.timestamp,
        name: e.name,
        data: e.data,
        type: t,
        pid: n,
        logType: "info",
        stack: null != (r = Error().stack) ? r : "",
    };
}
function _() {
    return performance.timeOrigin + performance.now();
}
class p {
    addBreadcrumb(e) {
        return this.breadcrumbs.set(e.id, e);
    }
    getLatestBreadcrumbId() {
        return this.maxNativeBreadcrumbId;
    }
    addNativeBreadcrumb(e, t, n) {
        let r = c(e);
        if (null == r) throw Error("Native breadcrumb has no native id");
        if (this.breadcrumbs.size(r) > 0) return !1;
        this.maxNativeBreadcrumbId = Math.max(this.maxNativeBreadcrumbId, Number(e.id));
        let i = f(e, t, n);
        return this.addBreadcrumb(i);
    }
    addModuleBreadcrumb(e, t, n, r) {
        var o;
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "info",
            s = _(),
            l = i.default.fromTimestamp(Math.floor(s)),
            c = {
                id: l,
                key: l,
                nativeId: null,
                timestamp: s,
                name: e,
                data: t,
                type: n,
                pid: r,
                logType: a,
                stack: null != (o = Error().stack) ? o : "",
            };
        return this.addBreadcrumb(c);
    }
    getBreadcrumbs(e) {
        return [this.breadcrumbs.values(e, !0), this.breadcrumbs.version];
    }
    constructor() {
        o(this, "breadcrumbs", new r.h(u, d)), o(this, "maxNativeBreadcrumbId", 0);
    }
}
let h = new p();
