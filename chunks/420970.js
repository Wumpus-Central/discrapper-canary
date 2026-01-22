n.d(t, { T: () => l });
var r = n(355443),
    i = n(672162);
function l(e, t) {
    var n;
    let { scope: l, handler: a } = t,
        s = {
            scope: l,
            handler: a,
        },
        o = null == (n = r.H[e]) ? void 0 : n.request,
        c = null;
    return (
        null != o &&
            (s.validation = function (e) {
                return null == c && (c = (0, i.k5)(e.object(o(e)))), c;
            }),
        s
    );
}
