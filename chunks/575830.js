n.d(e, { Z: () => o }), n(388685);
var i = n(73800),
    l = n(442837),
    r = n(485386),
    a = n(637565),
    s = n(14263);
function o(t, e) {
    let n = (0, l.e7)([r.Z], () => (null != t ? r.Z.getRolesSnapshot(t.id) : void 0)),
        o = (0, s.Z)(null == t ? void 0 : t.id);
    return i.useMemo(() => {
        let i = null != t && null != n ? (0, a.T)(t, n, e) : [],
            l = 0;
        for (let t of i) {
            let e = t.id;
            if (null != e) {
                let t = null == o ? void 0 : o[e];
                null != t && (l += t);
            }
        }
        return l;
    }, [o, t, e, n]);
}
