n.d(t, { O: () => s }), n(47120);
var r = n(284737),
    i = n(228488),
    o = n(830917),
    a = n(919570);
function s(e) {
    let t = e.document,
        n = (0, o.Ig)(e);
    function s() {
        (0, r.dx)(e);
    }
    function l() {
        (0, r.T_)(e, !0);
    }
    function c() {
        e.document.hasFocus() || (0, r.T_)(e, !1);
    }
    function u() {
        (0, r.gH)(e);
    }
    function d() {
        (0, r.Rz)(e);
    }
    function f() {
        (0, a.gK)(n);
    }
    function _() {
        setTimeout(() => {
            (0, a.HQ)(n);
        }, 0);
    }
    function p() {
        (0, r.CO)(e);
    }
    for (let n of (e.addEventListener('resize', s), e.addEventListener('focus', l), e.addEventListener('blur', c), e.addEventListener('unload', d), e.addEventListener('visibilitychange', p), a.wu)) t.addEventListener(n, f, !0), t.addEventListener(n, _, !1);
    (0, i.uF)(t, u), (0, r.S1)(e);
}
