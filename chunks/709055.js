n.d(t, { A: () => r });
var i = n(723702),
    l = n(19575),
    a = n(567249);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = a.A.getWindow(e);
    null == n || n.closed || (i.isPlatformEmbedded ? l.Ay.focus(e, t) : n.focus());
}
