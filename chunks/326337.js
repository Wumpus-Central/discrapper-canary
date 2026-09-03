n.d(t, { I: () => c, h: () => d });
var i = n(17928),
    r = n(775602),
    a = n(885386),
    s = n(531685),
    l = n(652215);
function o(e, t, n) {
    var i;
    return (
        (i = Math.ceil(1.05 * Math.ceil(e / ((t ? 65 : 91) * (n / l.hH7.FONT_SIZE_DEFAULT))))),
        Math.max(10, Math.min(l.EMb, i))
    );
}
function d() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let e = Math.max(s.A.windowSize().height - 145, 400),
        t = r.Ay.fontSize;
    return o(e, a.hH.getSetting(), t);
}
function c(e, t) {
    return o(
        (0, i.bG)([s.A], () => Math.max(s.A.windowSize().height - 145, 400)),
        e,
        t,
    );
}
