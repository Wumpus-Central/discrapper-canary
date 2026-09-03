n.d(t, { M: () => o });
var i = n(350723),
    r = n(238040),
    a = n(475815),
    s = n(365971),
    l = n(158368);
function o(e) {
    let t = e.document,
        n = (0, s.rw)(e),
        o = (0, r.NQ)(n, e.document.body, function () {
            (0, i.tV)(e);
        });
    function d() {
        (0, l.I_)(n);
    }
    function c() {
        setTimeout(() => {
            (0, l.xz)(n);
        }, 0);
    }
    for (let a of ((0, r.wB)(o, e.document.body),
    e.addEventListener("focus", function () {
        (0, i.XC)(e, !0);
    }),
    e.addEventListener("blur", function () {
        e.document.hasFocus() || (0, i.XC)(e, !1);
    }),
    e.addEventListener("unload", function () {
        (0, i.GP)(e), (0, r.$v)(o, e.document.body), (0, r.JE)(n, e.document.body);
    }),
    e.addEventListener("visibilitychange", function () {
        (0, i.t2)(e);
    }),
    l.NC))
        t.addEventListener(a, d, !0), t.addEventListener(a, c, !1);
    (0, a.a3)(t, function () {
        (0, i._c)(e);
    }),
        (0, i.Ts)(e);
}
