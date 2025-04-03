n.d(t, { S: () => i });
var r = n(137006);
function i(e, t) {
    var n;
    let { scope: i, handler: l } = t,
        a = {
            scope: i,
            handler: l
        },
        o = null == (n = r.m[e]) ? void 0 : n.request,
        s = null;
    return (
        null != o &&
            (a.validation = function (e) {
                return null == s && (s = o(e)), s;
            }),
        a
    );
}
