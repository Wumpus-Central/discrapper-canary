n.d(t, { Z: () => d });
var r = n(192379),
    i = n(873546),
    l = n(442837),
    o = n(625128),
    a = n(362762),
    s = n(531517),
    c = n(981631);
let u = i.tq || i.Em;
function d(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: d } = e,
        p = (0, s.L)(),
        h = (0, l.e7)([a.Z], () => a.Z.getState(i), [i]),
        f = r.useMemo(() => (null == d ? { path: i } : d(i)), [i, d]);
    return (
        r.useEffect(() => {
            !u &&
                p &&
                null == h &&
                o.Z.openNativeAppModal(i, c.Etm.DEEP_LINK, {
                    type: n,
                    params: f
                });
        }, [h, i, f, n, p]),
        t
    );
}
