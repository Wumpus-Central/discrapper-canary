l.d(u, { A: () => f });
var n = l(582128),
    t = l(17928),
    r = l(734057),
    c = l(576705),
    s = l(91242),
    a = l(457827),
    i = l(165610),
    d = l(652215);
function f(e) {
    let u = e?.id,
        l = n.useMemo(() => (null != e ? (0, i.HD)(e) : null), [e]),
        f = (0, t.bG)(
            [r.A, c.A],
            () => {
                let e = r.A.getChannel(u);
                return null != e && c.A.can(d.xBc.VIEW_CHANNEL, e);
            },
            [u],
        );
    n.useEffect(() => {
        if (null != l && !f) for (let e of s.A.getFramesForSurface(l)) (0, a.r)(e.id);
    }, [l, f]);
}
