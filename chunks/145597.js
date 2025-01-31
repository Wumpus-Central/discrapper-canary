let i;
n.d(t, {
    FW: () => o,
    Gr: () => s,
    Ht: () => p,
    Js: () => u,
    QF: () => f,
    R2: () => c,
    Te: () => h,
    Tq: () => a,
    VS: () => g,
    qU: () => l,
    tB: () => _,
    vR: () => m
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(490029);
var r = n(358085);
n(981631);
let a = 2,
    s = {
        width: 3840,
        height: 2160
    },
    o = {
        width: 768,
        height: 432
    },
    l = 'overlay_default',
    u = -2,
    c = -1,
    d = !1;
function f() {
    var e;
    if (void 0 !== i && i !== c) return i;
    let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(t) && (t = c), (i = t);
}
function _(e) {
    i = e;
}
function p() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function h(e) {
    return !r.isPlatformEmbedded || (e.width >= o.width && e.height >= o.height);
}
function m(e) {
    d = e;
}
function g() {
    return d;
}
