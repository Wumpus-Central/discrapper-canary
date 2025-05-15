let r;
n.r(t),
    n.d(t, {
        DEV_PID: () => d,
        OVERLAY_DEFAULT_RESOLUTION: () => l,
        OVERLAY_LAYOUT_ID: () => u,
        OVERLAY_MIN_RESOLUTION: () => c,
        OVERLAY_VERSION: () => s,
        UNSET_PID: () => f,
        getPID: () => p,
        getRPCAuthToken: () => g,
        isValidGamePID: () => m,
        log: () => E,
        setOutOfProcessSupport: () => y,
        setPID: () => h,
        supportsOutOfProcess: () => O,
        validResolution: () => b
    }),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282);
var i = n(490029),
    a = n(358085),
    o = n(981631);
let s = 2,
    l = {
        width: 3840,
        height: 2160
    },
    c = {
        width: 768,
        height: 432
    },
    u = 'overlay_default',
    d = -2,
    f = -1,
    _ = !1;
function p() {
    var e;
    if (void 0 !== r && r !== f) return r;
    let t = parseInt(null != (e = new URLSearchParams(window.location.search).get('pid')) ? e : '', 10);
    return isNaN(t) && (t = f), (r = t);
}
function h(e) {
    r = e;
}
function m(e) {
    return null != e && 0 !== e && e !== f;
}
function g() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function E(e) {
    (0, i.lW)({
        type: o.BmY.LOG_MESSAGES,
        pid: p(),
        token: g(),
        payload: e
    });
}
function b(e) {
    return !a.isPlatformEmbedded || (e.width >= c.width && e.height >= c.height);
}
function y(e) {
    _ = e;
}
function O() {
    return _;
}
