u.d(l, { A: () => d });
var n = u(582128),
    t = u(17928),
    a = u(734057),
    r = u(576705),
    c = u(91242),
    s = u(580954),
    i = u(165610),
    A = u(652215);
function d(e) {
    let l = e?.id,
        u = n.useMemo(() => (null != e ? (0, i.HD)(e) : null), [e]),
        d = (0, t.bG)(
            [a.A, r.A],
            () => {
                let e = a.A.getChannel(l);
                return null != e && r.A.can(A.xBc.VIEW_CHANNEL, e);
            },
            [l],
        );
    n.useEffect(() => {
        if (null != u && !d) for (let e of c.A.getFramesForSurface(u)) (0, s.A)().leaveFrame(e.id);
    }, [u, d]);
}
