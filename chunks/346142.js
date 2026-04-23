"use strict";
n.d(t, { M: () => l });
var i = n(350723),
    r = n(238040),
    s = n(475815),
    a = n(365971),
    o = n(158368);
function l(e) {
    let t = e.document,
        n = (0, a.rw)(e),
        l = (0, r.NQ)(n, e.document.body, function () {
            (0, i.tV)(e);
        });
    function d() {
        (0, o.I_)(n);
    }
    function _() {
        setTimeout(() => {
            (0, o.xz)(n);
        }, 0);
    }
    for (let s of ((0, r.wB)(l, e.document.body),
    e.addEventListener("focus", function () {
        (0, i.XC)(e, !0);
    }),
    e.addEventListener("blur", function () {
        e.document.hasFocus() || (0, i.XC)(e, !1);
    }),
    e.addEventListener("unload", function () {
        (0, i.GP)(e), (0, r.$v)(l, e.document.body), (0, r.JE)(n, e.document.body);
    }),
    e.addEventListener("visibilitychange", function () {
        (0, i.t2)(e);
    }),
    o.NC))
        t.addEventListener(s, d, !0), t.addEventListener(s, _, !1);
    (0, s.a3)(t, function () {
        (0, i._c)(e);
    }),
        (0, i.Ts)(e);
}
