"use strict";
n.d(t, { I: () => _, h: () => d });
var i = n(17928),
    r = n(775602),
    s = n(253932),
    a = n(531685),
    o = n(652215);
function l(e, t, n) {
    var i;
    return (
        (i = Math.ceil(1.05 * Math.ceil(e / ((t ? 65 : 91) * (n / o.hH7.FONT_SIZE_DEFAULT))))),
        Math.max(10, Math.min(o.EMb, i))
    );
}
function d() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let e = Math.max(a.A.windowSize().height - 145, 400),
        t = r.A.fontSize;
    return l(e, s.hH.getSetting(), t);
}
function _(e, t) {
    return l(
        (0, i.bG)([a.A], () => Math.max(a.A.windowSize().height - 145, 400)),
        e,
        t,
    );
}
