e.d(n, { Z: () => s }), e(388685);
var i = e(192379),
    l = e(442837),
    d = e(430824),
    r = e(637565),
    a = e(14263);
function s(t, n) {
    let e = (0, l.e7)([d.Z], () => (null != t ? d.Z.getRoles(t.id) : void 0)),
        s = (0, a.Z)(null == t ? void 0 : t.id);
    return i.useMemo(() => {
        let i = null != t && null != e ? (0, r.T)(t, e, n) : [],
            l = 0;
        for (let t of i) {
            let n = t.id;
            if (null != n) {
                let t = null == s ? void 0 : s[n];
                null != t && (l += t);
            }
        }
        return l;
    }, [s, t, n, e]);
}
