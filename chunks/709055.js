n.d(t, {
    A: () => s,
});
var r = n(723702),
    i = n(837921),
    a = n(87001);

function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = a.A.getWindow(e);
    null == n || n.closed || (r.isPlatformEmbedded ? i.Ay.focus(e, t) : n.focus());
}
