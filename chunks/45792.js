n.d(t, {
    S: function () {
        return r;
    }
});
var i = n(137006);
function r(e, t) {
    var n;
    let { scope: r, handler: l } = t,
        a = {
            scope: r,
            handler: l
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
