n.d(t, { A: () => d }), n(747238);
var r = n(64700),
    i = n(607399),
    l = n(311907),
    a = n(197111),
    s = n(10088),
    o = n(961350),
    c = n(652215);
let u = i.Fr || i.v1;
function d(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: d, search: p } = e,
        f = (0, l.bG)([o.default], () => {
            var e;
            return null != (e = o.default.getFingerprint()) ? e : o.default.getId();
        }),
        h = (0, l.bG)([s.A], () => s.A.getState(i), [i]),
        A = r.useMemo(
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
                    a.A.openNativeAppModal(i, c.e$_.DEEP_LINK, {
                        type: n,
                        params: A,
                    }));
        }, [h, i, A, n]),
        t
    );
}
