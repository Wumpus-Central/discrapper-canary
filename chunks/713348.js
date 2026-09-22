n.d(s, { A: () => d });
var t = n(582128),
    i = n(17928),
    l = n(287809),
    a = n(639935),
    r = n(249203),
    u = n(695904);
function d(e) {
    let s = (0, u.bq)(),
        n = (0, i.bG)(
            [r.A, l.default],
            () => null != s && e.id !== l.default.getCurrentUser()?.id && null == r.A.getEntry(e.id),
            [e, s],
        );
    t.useEffect(() => {
        n && (0, a.b)(e.id);
    }, [n, e.id]);
}
