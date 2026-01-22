i.d(e, {
    u: () => T,
}),
    i(65821),
    i(457529);
var n = i(64700),
    l = i(156186),
    s = i(602450),
    r = i(557571),
    u = i(954571),
    a = i(728458),
    o = i(652215);
let T = () => {
    let t = (0, r.lV)((t) => t.doInstall),
        e = (0, r.lV)((t) => t.install),
        i = (0, r.lV)((t) => t.installationStatus),
        T = (0, r.lV)((t) => t.setDoInstall),
        A = (0, r.lV)((t) => t.setInstallationStatus);
    return (
        (0, n.useEffect)(() => {
            t &&
                i === s.Lk.NOT_INSTALLED &&
                (T(!1),
                A(s.Lk.INSTALLING),
                e().catch((t) => {
                    A(s.Lk.ERROR),
                        a.A.captureException(t, {
                            tags: {
                                source: l.q.WARP_INSTALL_HELPER,
                            },
                        }),
                        u.default.track(o.HAw.PREMIUM_FEATURE_ERROR, {
                            error_message: t instanceof Error ? t.message : JSON.stringify(t),
                            error_source: l.q.WARP_INSTALL_HELPER,
                        });
                }));
        }, [t, T, e, i, A]),
        null
    );
};
