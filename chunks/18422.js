n.d(t, { A: () => u });
var i = n(64700),
    a = n(607399),
    l = n(311907),
    r = n(197111),
    s = n(10088),
    o = n(961350),
    d = n(652215);
let c = a.Fr || a.v1;
function u(e) {
    let { children: t, deepLinkType: n, path: a, paramsBuilder: u, search: A } = e,
        h = (0, l.bG)([o.default], () => o.default.getFingerprint() ?? o.default.getId()),
        _ = (0, l.bG)([o.default], () => o.default.getInstallationForTracking()),
        m = (0, l.bG)([s.A], () => s.A.getState(a), [a]),
        g = i.useMemo(
            () =>
                null == u
                    ? { path: a, fingerprint: h, installationId: _, search: A }
                    : u({ path: a, fingerprint: h, search: A, installationId: _ }),
            [a, u, h, _, A],
        );
    return (
        i.useEffect(() => {
            c || (null == m && r.A.openNativeAppModal(a, d.e$_.DEEP_LINK, { type: n, params: g }));
        }, [m, a, g, n]),
        t
    );
}
