n.d(t, { Z: () => p });
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
    let { children: t, deepLinkType: n, path: i, paramsBuilder: p } = e,
        h = (0, s.L)(),
        f = (0, l.e7)([c.default], () => {
            var e;
            return null !== (e = c.default.getFingerprint()) && void 0 !== e ? e : c.default.getId();
        }),
        g = (0, l.e7)([o.Z], () => o.Z.getState(i), [i]),
        m = r.useMemo(
            () =>
                null == p
                    ? {
                          path: i,
                          fingerprint: f
                      }
                    : p(i, f),
            [i, p, f]
        );
    return (
        r.useEffect(() => {
            !d &&
                h &&
                null == g &&
                a.Z.openNativeAppModal(i, u.Etm.DEEP_LINK, {
                    type: n,
                    params: m
                });
        }, [g, i, m, n, h]),
        t
    );
}
