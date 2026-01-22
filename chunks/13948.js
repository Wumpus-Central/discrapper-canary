n.d(t, {
    A: () => h,
}),
    n(896048);
var l = n(64700),
    i = n(508573),
    r = n.n(i),
    s = n(311907),
    a = n(686956),
    o = n(155718),
    c = n(696451),
    d = n(287809),
    u = n(403362);

function h(e, t) {
    let n = (0, s.yK)([c.Ay], () => c.Ay.getMemberIds(e), [e]),
        [i, h] = l.useMemo(
            () =>
                r()(
                    null == t
                        ? []
                        : Object.values(t)
                              .filter((e) => e.type === o.r2.MEMBER)
                              .map((e) => e.id),
                    (e) => n.includes(e),
                ),
            [t, n],
        );
    return (
        l.useEffect(() => {
            h.length > 0 && null != e && a.A.requestMembersById(e, h, !1);
        }, [h, e]),
        (0, s.yK)([d.default], () => i.map(d.default.getUser).filter(u.Vq), [i])
    );
}
