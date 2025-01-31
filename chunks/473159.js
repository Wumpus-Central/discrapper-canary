n.d(t, { O: () => o }), n(47120);
var i = n(284737),
    r = n(228488),
    a = n(830917),
    s = n(919570);
function o(e) {
    let t = e.document,
        n = (0, a.Ig)(e);
    function o() {
        (0, i.dx)(e);
    }
    function l() {
        (0, i.T_)(e, !0);
    }
    function u() {
        e.document.hasFocus() || (0, i.T_)(e, !1);
    }
    function c() {
        (0, i.gH)(e);
    }
    function d() {
        (0, i.Rz)(e);
    }
    function f() {
        (0, s.gK)(n);
    }
    function _() {
        setTimeout(() => {
            (0, s.HQ)(n);
        }, 0);
    }
    function p() {
        (0, i.CO)(e);
    }
    for (let n of (e.addEventListener('resize', o), e.addEventListener('focus', l), e.addEventListener('blur', u), e.addEventListener('unload', d), e.addEventListener('visibilitychange', p), s.wu)) t.addEventListener(n, f, !0), t.addEventListener(n, _, !1);
    (0, r.uF)(t, c), (0, i.S1)(e);
}
