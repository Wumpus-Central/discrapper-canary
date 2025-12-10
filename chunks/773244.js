n.d(t, { Z: () => d }), n(35282);
var r = n(473749),
    i = n(873546),
    l = n(442837),
    a = n(625128),
    s = n(362762),
    o = n(314897),
    c = n(981631);
let u = i.tq || i.Em;
function d(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: d, search: p } = e,
        f = (0, l.e7)([o.default], () => {
            var e;
            return null != (e = o.default.getFingerprint()) ? e : o.default.getId();
        }),
        g = (0, l.e7)([s.Z], () => s.Z.getState(i), [i]),
        h = r.useMemo(
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
                (null == g &&
                    a.Z.openNativeAppModal(i, c.Etm.DEEP_LINK, {
                        type: n,
                        params: h,
                    }));
        }, [g, i, h, n]),
        t
    );
}
