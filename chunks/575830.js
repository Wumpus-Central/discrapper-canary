n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    d = n(442837),
    r = n(430824),
    a = n(637565),
    l = n(14263);
function s(e, t) {
    let n = (0, d.e7)([r.Z], () => (null != e ? r.Z.getRoles(e.id) : void 0)),
        s = (0, l.Z)(null == e ? void 0 : e.id);
    return i.useMemo(() => {
        let i = null != e && null != n ? (0, a.T)(e, n, t) : [],
            d = 0;
        for (let e of i) {
            let t = e.id;
            if (null != t) {
                let e = null == s ? void 0 : s[t];
                null != e && (d += e);
            }
        }
        return d;
    }, [s, e, t, n]);
}
