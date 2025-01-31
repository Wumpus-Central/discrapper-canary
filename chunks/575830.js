n.d(e, { Z: () => s }), n(47120);
var i = n(192379),
    l = n(442837),
    d = n(430824),
    r = n(637565),
    a = n(14263);
function s(t, e) {
    let n = (0, l.e7)([d.Z], () => (null != t ? d.Z.getRoles(t.id) : void 0)),
        s = (0, a.Z)(null == t ? void 0 : t.id);
    return i.useMemo(() => {
        let i = null != t && null != n ? (0, r.T)(t, n, e) : [],
            l = 0;
        for (let t of i) {
            let e = t.id;
            if (null != e) {
                let t = null == s ? void 0 : s[e];
                null != t && (l += t);
            }
        }
        return l;
    }, [s, t, e, n]);
}
