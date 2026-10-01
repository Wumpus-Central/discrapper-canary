t.d(l, { A: () => d });
var s = t(582128),
    n = t(17928),
    i = t(287809),
    a = t(639935),
    r = t(249203),
    u = t(695904);
function d(e) {
    let l = (0, u.bq)(),
        t = (0, n.bG)(
            [r.A, i.default],
            () => null != l && e.id !== i.default.getCurrentUser()?.id && null == r.A.getEntry(e.id),
            [e, l],
        );
    s.useEffect(() => {
        t && (0, a.b)(e.id);
    }, [t, e.id]);
}
