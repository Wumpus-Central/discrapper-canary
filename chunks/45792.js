n.d(t, { S: () => l });
var i = n(137006);
function l(e, t) {
    var n;
    let { scope: l, handler: r } = t,
        a = {
            scope: l,
            handler: r
        },
        s = null === (n = i.m[e]) || void 0 === n ? void 0 : n.request,
        o = null;
    return (
        null != s &&
            (a.validation = function (e) {
                return null == o && (o = s(e)), o;
            }),
        a
    );
}
