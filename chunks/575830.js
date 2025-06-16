n.d(e, { Z: () => s }), n(388685);
var i = n(73800),
    r = n(442837),
    l = n(430824),
    a = n(637565),
    d = n(14263);
function s(t, e) {
    let n = (0, r.e7)([l.Z], () => (null != t ? l.Z.getRoles(t.id) : void 0)),
        s = (0, d.Z)(null == t ? void 0 : t.id);
    return i.useMemo(() => {
        let i = null != t && null != n ? (0, a.T)(t, n, e) : [],
            r = 0;
        for (let t of i) {
            let e = t.id;
            if (null != e) {
                let t = null == s ? void 0 : s[e];
                null != t && (r += t);
            }
        }
        return r;
    }, [s, t, e, n]);
}
