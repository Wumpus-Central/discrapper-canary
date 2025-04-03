n.d(t, { Z: () => p }), n(301563);
var r = n(192379),
    i = n(873546),
    l = n(442837),
    a = n(625128),
    o = n(362762),
    s = n(531517),
    c = n(314897),
    u = n(981631);
let d = i.tq || i.Em;
function p(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: p, search: h } = e,
        f = (0, s.L)(),
        g = (0, l.e7)([c.default], () => {
            var e;
            return null != (e = c.default.getFingerprint()) ? e : c.default.getId();
        }),
        m = (0, l.e7)([o.Z], () => o.Z.getState(i), [i]),
        b = r.useMemo(
            () =>
                null == p
                    ? {
                          path: i,
                          fingerprint: g,
                          search: h
                      }
                    : p(i, g, h),
            [i, p, g, h]
        );
    return (
        r.useEffect(() => {
            !d &&
                f &&
                null == m &&
                a.Z.openNativeAppModal(i, u.Etm.DEEP_LINK, {
                    type: n,
                    params: b
                });
        }, [m, i, b, n, f]),
        t
    );
}
