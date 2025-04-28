n.d(t, { S: () => l });
var r = n(137006),
    i = n(103964);
function l(e, t) {
    var n;
    let { scope: l, handler: a } = t,
        o = {
            scope: l,
            handler: a
        },
        s = null == (n = r.m[e]) ? void 0 : n.request,
        c = null;
    return (
        null != s &&
            (o.validation = function (e) {
                return null == c && (c = (0, i.C5)(e.object(s(e)))), c;
            }),
        o
    );
}
