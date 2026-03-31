"use strict";
n.d(t, { I: () => y, h: () => S });
var r = n(311907),
    i = n(775602),
    s = n(253932),
    a = n(531685),
    o = n(133816),
    l = n(652215);
let u = 145,
    c = 400,
    d = 37,
    _ = 29,
    f = 1.3,
    p = 15,
    h = 91,
    m = 65,
    E = 1.05,
    g = 10;
function A(e, t, n) {
    return Math.max(t, Math.min(n, e));
}
function I() {
    return Math.max(a.A.windowSize().height - u, c);
}
function T(e, t, n, r, i) {
    return A(Math.ceil(Math.ceil(e / (t * (i / l.hH7.FONT_SIZE_DEFAULT))) * n), r, l.EMb);
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "getMessageLimit",
        { strategy: t } = o.O.getConfig({ location: e });
    if ("off" === t) return l.EMb;
    let n = I(),
        r = i.A.fontSize,
        a = s.hH.getSetting();
    return "conservative" === t ? T(n, a ? _ : d, f, p, r) : T(n, a ? m : h, E, g, r);
}
function y(e, t) {
    let n = o.O.useConfig({ location: "useMessageLimit" }).strategy,
        i = (0, r.bG)([a.A], () => ("off" === n ? 0 : Math.max(a.A.windowSize().height - u, c)), [n]);
    return "off" === n ? l.EMb : "conservative" === n ? T(i, e ? _ : d, f, p, t) : T(i, e ? m : h, E, g, t);
}
