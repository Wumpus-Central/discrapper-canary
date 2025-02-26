let r;
n.r(t),
    n.d(t, {
        DEV_PID: () => d,
        OVERLAY_DEFAULT_RESOLUTION: () => l,
        OVERLAY_LAYOUT_ID: () => u,
        OVERLAY_MIN_RESOLUTION: () => c,
        OVERLAY_VERSION: () => s,
        UNSET_PID: () => f,
        getPID: () => _,
        getRPCAuthToken: () => m,
        log: () => g,
        setOutOfProcessSupport: () => v,
        setPID: () => h,
        supportsOutOfProcess: () => b,
        validResolution: () => E
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(301563);
var i = n(490029),
    o = n(358085),
    a = n(981631);
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
    p = !1;
function _() {
    var e;
    if (void 0 !== r && r !== f) return r;
    let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(t) && (t = f), (r = t);
}
function h(e) {
    r = e;
}
function m() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function g(e) {
    (0, i.lW)({
        type: a.BmY.LOG_MESSAGES,
        pid: _(),
        token: m(),
        payload: e
    });
}
function E(e) {
    return !o.isPlatformEmbedded || (e.width >= c.width && e.height >= c.height);
}
function v(e) {
    p = e;
}
function b() {
    return p;
}
