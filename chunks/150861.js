n.d(e, { A: () => o });
var r = n(582128),
    t = n(17928),
    a = n(734057),
    s = n(576705),
    c = n(91242),
    i = n(580954),
    u = n(165610),
    d = n(652215);
function o(l) {
    let e = l?.id,
        n = r.useMemo(() => (null != l ? (0, u.HD)(l) : null), [l]),
        o = (0, t.bG)(
            [a.A, s.A],
            () => {
                let l = a.A.getChannel(e);
                return null != l && s.A.can(d.xBc.VIEW_CHANNEL, l);
            },
            [e],
        );
    r.useEffect(() => {
        if (null != n && !o) for (let l of c.A.getFramesForSurface(n)) (0, i.A)().leaveFrame(l.id);
    }, [n, o]);
}
