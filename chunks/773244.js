n.d(t, { Z: () => d }), n(35282);
var r = n(192379),
    i = n(873546),
    l = n(442837),
    a = n(625128),
    o = n(362762),
    s = n(314897),
    c = n(981631);
let u = i.tq || i.Em;
function d(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: d, search: p } = e,
        h = (0, l.e7)([s.default], () => {
            var e;
            return null != (e = s.default.getFingerprint()) ? e : s.default.getId();
        }),
        f = (0, l.e7)([o.Z], () => o.Z.getState(i), [i]),
        g = r.useMemo(
            () =>
                null == d
                    ? {
                          path: i,
                          fingerprint: h,
                          search: p
                      }
                    : d(i, h, p),
            [i, d, h, p]
        );
    return (
        r.useEffect(() => {
            u ||
                (null == f &&
                    a.Z.openNativeAppModal(i, c.Etm.DEEP_LINK, {
                        type: n,
                        params: g
                    }));
        }, [f, i, g, n]),
        t
    );
}
