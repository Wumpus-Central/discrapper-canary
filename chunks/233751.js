n.d(t, { R: () => c });
var r = n(54381),
    i = n(473749),
    a = n(159691),
    o = n(5900),
    s = n(953865),
    l = n(388032);
let c = () => {
    let e = (0, s.xf)((e) => e.setDoInstall),
        t = (0, s.xf)((e) => e.setInstallationStatus),
        n = (0, s.xf)((e) => e.installationStatus),
        c = (0, i.useCallback)(() => {
            n === o._n.ERROR && t(o._n.NOT_INSTALLED), e(!0);
        }, [e, n, t]);
    return (0, r.jsx)(a.zxk, {
        variant: "primary",
        onClick: c,
        text: l.intl.string(l.t["1WjMbC"]),
    });
};
