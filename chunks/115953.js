function i(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function r(e, t) {
    if (e === t) return !0;
    if (null == e || null == t) return !1;
    if (Array.isArray(e))
        return (
            Array.isArray(t) &&
            e.length === t.length &&
            e.every(function (e, n) {
                return r(e, t[n]);
            })
        );
    if ('object' == typeof e || 'object' == typeof t) {
        var n = i(e),
            a = i(t);
        return n !== e || a !== t
            ? r(n, a)
            : Object.keys(Object.assign({}, e, t)).every(function (n) {
                  return r(e[n], t[n]);
              });
    }
    return !1;
}
n.d(t, { Z: () => a });
let a = r;
