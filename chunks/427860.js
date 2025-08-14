n.d(t, {
    C7: () => a,
    JC: () => g,
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
let f = new i.SnowflakeSequence();
function _(e) {
    return i.default.fromTimestampWithSequence(Math.floor(e), f);
}
function p(e, t, n) {
    var r;
    let i = _(e.timestamp);
    return {
        id: i,
        key: i,
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
function h() {
    return performance.timeOrigin + performance.now();
}
class m {
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
        let i = p(e, t, n);
        return this.addBreadcrumb(i);
    }
    addModuleBreadcrumb(e, t, n, r) {
        var i;
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "info",
            a = h(),
            s = _(a),
            l = {
                id: s,
                key: s,
                nativeId: null,
                timestamp: a,
                name: e,
                data: t,
                type: n,
                pid: r,
                logType: o,
                stack: null != (i = Error().stack) ? i : "",
            };
        return this.addBreadcrumb(l);
    }
    getBreadcrumbs(e) {
        return [this.breadcrumbs.values(e, !0), this.breadcrumbs.version];
    }
    constructor() {
        o(this, "breadcrumbs", new r.h(u, d)), o(this, "maxNativeBreadcrumbId", 0);
    }
}
let g = new m();
