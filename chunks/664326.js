"use strict";
n.d(t, { A: () => o });
var r = n(870426);
function a(e, t, n, a, o, i, s) {
    try {
        var l = e[i](s),
            c = l.value;
    } catch (e) {
        return void n(e);
    }
    l.done ? t(c) : r.resolve(c).then(a, o);
}
function o(e) {
    return function () {
        var t = this,
            n = arguments;
        return new r(function (r, o) {
            var i = e.apply(t, n);
            function s(e) {
                a(i, r, o, s, l, "next", e);
            }
            function l(e) {
                a(i, r, o, s, l, "throw", e);
            }
            s(void 0);
        });
    };
}
