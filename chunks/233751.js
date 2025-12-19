n.d(e, { R: () => S });
var i = n(54381),
    l = n(473749),
    s = n(159691),
    u = n(594421),
    r = n(5900),
    a = n(773275),
    o = n(981631),
    T = n(388032);
let S = () => {
    let t = (0, a.xf)((t) => t.setDoInstall),
        e = (0, a.xf)((t) => t.setInstallationStatus),
        n = (0, a.xf)((t) => t.installationStatus),
        S = (0, l.useCallback)(() => {
            (0, u.j)(o.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !1 }),
                n === r._n.ERROR && e(r._n.NOT_INSTALLED),
                t(!0);
        }, [t, n, e]);
    return (0, i.jsx)(s.zxk, {
        variant: "primary",
        onClick: S,
        text: T.intl.string(T.t["1WjMbC"]),
    });
};
