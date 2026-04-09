"use strict";
n.d(t, { I: () => g, h: () => E });
var r = n(311907),
    i = n(775602),
    s = n(253932),
    a = n(531685),
    o = n(652215);
let l = 145,
    u = 400,
    c = 91,
    d = 65,
    _ = 1.05,
    f = 10;
function p(e, t, n) {
    return Math.max(t, Math.min(n, e));
}
function h() {
    return Math.max(a.A.windowSize().height - l, u);
}
function m(e, t, n) {
    return p(Math.ceil(Math.ceil(e / ((t ? d : c) * (n / o.hH7.FONT_SIZE_DEFAULT))) * _), f, o.EMb);
}
function E() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let e = h(),
        t = i.A.fontSize;
    return m(e, s.hH.getSetting(), t);
}
function g(e, t) {
    return m(
        (0, r.bG)([a.A], () => Math.max(a.A.windowSize().height - l, u)),
        e,
        t,
    );
}
