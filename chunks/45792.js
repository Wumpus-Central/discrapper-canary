n.d(t, { S: () => i });
var r = n(137006);
function i(e, t) {
    var n;
    let { scope: i, handler: l } = t,
        o = {
            scope: i,
            handler: l
        },
        a = null === (n = r.m[e]) || void 0 === n ? void 0 : n.request,
        s = null;
    return (
        null != a &&
            (o.validation = function (e) {
                return null == s && (s = a(e)), s;
            }),
        o
    );
}
