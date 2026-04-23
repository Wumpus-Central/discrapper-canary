n.d(t, { T: () => a });
var i = n(355443),
    r = n(672162);
function a(e, t) {
    let { scope: n, handler: a } = t,
        l = { scope: n, handler: a },
        s = i.H[e]?.request,
        o = null;
    return (
        null != s &&
            (l.validation = function (e) {
                return null == o && (o = (0, r.k5)(e.object(s(e)))), o;
            }),
        l
    );
}
