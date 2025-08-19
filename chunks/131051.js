n.d(t, { Z: () => a }), n(388685);
var i = n(647438),
    l = n(991346),
    o = n(839469),
    r = n(509613),
    s = n(801318);
function a(e, t) {
    let n = i.useMemo(() => (0, r.Ql)(e), [e]),
        a = (0, l.Pt)(),
        { searchResults: u } = (0, o.E)(),
        c = new Set();
    for (let e of u) {
        let t = e;
        for (; null != t; ) {
            var d;
            let e = null == (d = a[t]) ? void 0 : d.parent;
            if (null == e) {
                c.add(t);
                break;
            }
            t = e;
        }
    }
    return (0, s.Z)(n, t, c);
}
