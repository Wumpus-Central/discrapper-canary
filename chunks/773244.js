n.d(t, { Z: () => d }), n(35282);
var r = n(647438),
    i = n(873546),
    l = n(442837),
    a = n(625128),
    o = n(362762),
    s = n(314897),
    c = n(981631);
let u = i.tq || i.Em;
function d(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: d, search: p } = e,
        f = (0, l.e7)([s.default], () => {
            var e;
            return null != (e = s.default.getFingerprint()) ? e : s.default.getId();
        }),
        h = (0, l.e7)([o.Z], () => o.Z.getState(i), [i]),
        g = r.useMemo(
            () =>
                null == d
                    ? {
                          path: i,
                          fingerprint: f,
                          search: p,
                      }
                    : d(i, f, p),
            [i, d, f, p],
        );
    return (
        r.useEffect(() => {
            u ||
                (null == h &&
                    a.Z.openNativeAppModal(i, c.Etm.DEEP_LINK, {
                        type: n,
                        params: g,
                    }));
        }, [h, i, g, n]),
        t
    );
}
