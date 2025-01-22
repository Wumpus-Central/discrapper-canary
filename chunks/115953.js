function r(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function i(e, n) {
    if (e === n) return !0;
    if (null == e || null == n) return !1;
    if (Array.isArray(e))
        return (
            Array.isArray(n) &&
            e.length === n.length &&
            e.every(function (e, r) {
                return i(e, n[r]);
            })
        );
    if ('object' == typeof e || 'object' == typeof n) {
        var a = r(e),
            o = r(n);
        return a !== e || o !== n
            ? i(a, o)
            : Object.keys(Object.assign({}, e, n)).every(function (r) {
                  return i(e[r], n[r]);
              });
    }
    return !1;
}
n.Z = i;
