n.d(t, { A: () => c });
var i = n(64700),
    r = n(607399),
    a = n(311907),
    l = n(197111),
    s = n(10088),
    o = n(961350),
    d = n(652215);
let u = r.Fr || r.v1;
function c(e) {
    let { children: t, deepLinkType: n, path: r, paramsBuilder: c, search: A } = e,
        h = (0, a.bG)([o.default], () => o.default.getFingerprint() ?? o.default.getId()),
        _ = (0, a.bG)([o.default], () => o.default.getInstallationForTracking()),
        E = (0, a.bG)([s.A], () => s.A.getState(r), [r]),
        p = i.useMemo(
            () =>
                null == c
                    ? { path: r, fingerprint: h, installationId: _, search: A }
                    : c({ path: r, fingerprint: h, search: A, installationId: _ }),
            [r, c, h, _, A],
        );
    return (
        i.useEffect(() => {
            u || (null == E && l.A.openNativeAppModal(r, d.e$_.DEEP_LINK, { type: n, params: p }));
        }, [E, r, p, n]),
        t
    );
}
