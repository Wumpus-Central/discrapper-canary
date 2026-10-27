i.d(l, { A: () => u });
var t = i(582128),
    n = i(17928),
    a = i(287809),
    s = i(639935),
    r = i(249203),
    d = i(695904);
function u(e) {
    let l = (0, d.bq)(),
        i = (0, n.bG)(
            [r.A, a.default],
            () => null != l && e.id !== a.default.getCurrentUser()?.id && null == r.A.getEntry(e.id),
            [e, l],
        );
    t.useEffect(() => {
        i && (0, s.b)(e.id);
    }, [i, e.id]);
}
