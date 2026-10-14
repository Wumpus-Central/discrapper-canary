t.d(n, { A: () => i });
var l = t(582128),
    a = t(17928),
    u = t(734057),
    r = t(576705),
    s = t(91242),
    c = t(457827),
    h = t(165610),
    d = t(652215);
function i(e) {
    let n = e?.id,
        t = l.useMemo(() => (null != e ? (0, h.HD)(e) : null), [e]),
        i = (0, a.bG)(
            [u.A, r.A],
            () => {
                let e = u.A.getChannel(n);
                return null != e && r.A.can(d.xBc.VIEW_CHANNEL, e);
            },
            [n],
        );
    l.useEffect(() => {
        if (null != t && !i) for (let e of s.A.getFramesForSurface(t)) (0, c.r)(e.id);
    }, [t, i]);
}
