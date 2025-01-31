e.d(t, { y: () => i });
var l = e(591759);
function i(n, t) {
    let e = n.getIconSource(t);
    if (null != e && 'number' != typeof e) {
        let n;
        if ((Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : (n = e.uri), null != n)) {
            var i;
            return null !== (i = l.Z.toURLSafe(n)) && void 0 !== i ? i : void 0;
        }
    }
}
