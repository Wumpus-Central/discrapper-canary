n.d(t, { y: () => l });
var i = n(591759);
function l(e, t) {
    let n = e.getIconSource(t);
    if (null != n && 'number' != typeof n) {
        let e;
        if ((Array.isArray(n) ? n.length > 0 && (e = n[0].uri) : (e = n.uri), null != e)) {
            var l;
            return null !== (l = i.Z.toURLSafe(e)) && void 0 !== l ? l : void 0;
        }
    }
}
