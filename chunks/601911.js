n.d(e, { y: () => r });
var i = n(591759);
function r(t, e) {
    let n = t.getIconSource(e);
    if (null != n && 'number' != typeof n) {
        let t;
        if ((Array.isArray(n) ? n.length > 0 && (t = n[0].uri) : (t = n.uri), null != t)) {
            var r;
            return null != (r = i.Z.toURLSafe(t)) ? r : void 0;
        }
    }
}
