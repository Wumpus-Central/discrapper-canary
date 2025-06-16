n.d(t, { O: () => l }), n(388685);
var r = n(284737),
    i = n(889711),
    a = n(228488),
    o = n(830917),
    s = n(919570);
function l(e) {
    let t = e.document,
        n = (0, o.Ig)(e);
    function l() {
        (0, r.dx)(e);
    }
    let c = (0, i.pP)(n, e.document.body, l);
    function u() {
        (0, r.T_)(e, !0);
    }
    function d() {
        e.document.hasFocus() || (0, r.T_)(e, !1);
    }
    function f() {
        (0, r.gH)(e);
    }
    function _() {
        (0, r.Rz)(e), (0, i.UC)(c, e.document.body), (0, i.fO)(n, e.document.body);
    }
    function p() {
        (0, s.gK)(n);
    }
    function h() {
        setTimeout(() => {
            (0, s.HQ)(n);
        }, 0);
    }
    function m() {
        (0, r.CO)(e);
    }
    for (let n of ((0, i.YP)(c, e.document.body), e.addEventListener('focus', u), e.addEventListener('blur', d), e.addEventListener('unload', _), e.addEventListener('visibilitychange', m), s.wu)) t.addEventListener(n, p, !0), t.addEventListener(n, h, !1);
    (0, a.uF)(t, f), (0, r.S1)(e);
}
