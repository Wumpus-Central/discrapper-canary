let r;
n.r(t),
    n.d(t, {
        DEV_PID: () => _,
        OVERLAY_DEFAULT_RESOLUTION: () => d,
        OVERLAY_LAYOUT_ID: () => p,
        OVERLAY_MIN_RESOLUTION: () => f,
        OVERLAY_VERSION: () => u,
        UNSET_PID: () => m,
        getPID: () => g,
        getRPCAuthToken: () => y,
        isValidGamePID: () => b,
        log: () => O,
        setOutOfProcessSupport: () => S,
        setPID: () => E,
        supportsLegacy: () => T,
        supportsOutOfProcess: () => I,
        validResolution: () => v,
    }),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282);
var i = n(887278),
    a = n(490029),
    o = n(358085),
    s = n(998502),
    l = n(981631),
    c = n(987650);
let u = 2,
    d = {
        width: 3840,
        height: 2160,
    },
    f = {
        width: 768,
        height: 432,
    },
    p = "overlay_default",
    _ = -2,
    m = -1,
    h = !1;
function g() {
    var e;
    if (void 0 !== r && r !== m) return r;
    let t = parseInt(null != (e = new URLSearchParams(window.location.search).get("pid")) ? e : "", 10);
    return isNaN(t) && (t = m), (r = t);
}
function E(e) {
    r = e;
}
function b(e) {
    return null != e && 0 !== e && e !== m;
}
function y() {
    return new URLSearchParams(window.location.search).get("rpc_auth_token");
}
function O(e) {
    (0, a.lW)({
        type: l.BmY.LOG_MESSAGES,
        pid: g(),
        token: y(),
        payload: e,
    });
}
function v(e) {
    return !o.isPlatformEmbedded || (e.width >= f.width && e.height >= f.height);
}
function S(e) {
    h = e;
}
function I() {
    return h;
}
function T() {
    let e = (0, o.isWindows)() && "arm64" === s.ZP.architecture;
    return c.iP && !e && !(0, i.$1)();
}
