let i;
r.d(n, {
    FW: function () {
        return p;
    },
    Gr: function () {
        return f;
    },
    Ht: function () {
        return y;
    },
    Js: function () {
        return _;
    },
    QF: function () {
        return E;
    },
    R2: function () {
        return m;
    },
    Te: function () {
        return b;
    },
    Tq: function () {
        return d;
    },
    VS: function () {
        return T;
    },
    qU: function () {
        return h;
    },
    tB: function () {
        return v;
    },
    vR: function () {
        return I;
    }
});
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
r(490029);
var c = r(358085);
r(981631);
let d = 2,
    f = {
        width: 3840,
        height: 2160
    },
    p = {
        width: 768,
        height: 432
    },
    h = 'overlay_default',
    _ = -2,
    m = -1,
    g = !1;
function E() {
    var e;
    if (void 0 !== i && i !== m) return i;
    let n = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(n) && (n = m), (i = n);
}
function v(e) {
    i = e;
}
function y() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function b(e) {
    return !c.isPlatformEmbedded || (e.width >= p.width && e.height >= p.height);
}
function I(e) {
    g = e;
}
function T() {
    return g;
}
