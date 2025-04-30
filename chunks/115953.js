function r(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function i(e, t) {
    if (e === t) return !0;
    if (null == e || null == t) return !1;
    if (Array.isArray(e))
        return (
            Array.isArray(t) &&
            e.length === t.length &&
            e.every(function (e, n) {
                return i(e, t[n]);
            })
        );
    if ('object' == typeof e || 'object' == typeof t) {
        var n = r(e),
            o = r(t);
        return n !== e || o !== t
            ? i(n, o)
            : Object.keys(Object.assign({}, e, t)).every(function (n) {
                  return i(e[n], t[n]);
              });
    }
    return !1;
}
n.d(t, { Z: () => o });
let o = i;
