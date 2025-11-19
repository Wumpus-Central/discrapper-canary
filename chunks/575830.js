n.d(t, { Z: () => o }), n(388685);
var l = n(473749),
    i = n(442837),
    r = n(485386),
    u = n(637565),
    a = n(14263);
function o(e, t) {
    let n = (0, i.e7)([r.Z], () => (null != e ? r.Z.getRolesSnapshot(e.id) : void 0)),
        o = (0, a.Z)(null == e ? void 0 : e.id);
    return l.useMemo(() => {
        let l = null != e && null != n ? (0, u.T)(e, n, t) : [],
            i = 0;
        for (let e of l) {
            let t = e.id;
            if (null != t) {
                let e = null == o ? void 0 : o[t];
                null != e && (i += e);
            }
        }
        return i;
    }, [o, e, t, n]);
}
