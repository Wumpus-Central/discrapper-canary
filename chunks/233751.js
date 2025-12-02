n.d(e, { R: () => d });
var i = n(54381),
    l = n(473749),
    s = n(159691),
    r = n(594421),
    u = n(5900),
    a = n(773275),
    o = n(981631),
    c = n(388032);
let d = () => {
    let t = (0, a.xf)((t) => t.setDoInstall),
        e = (0, a.xf)((t) => t.setInstallationStatus),
        n = (0, a.xf)((t) => t.installationStatus),
        d = (0, l.useCallback)(() => {
            (0, r.j)(o.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !1 }),
                n === u._n.ERROR && e(u._n.NOT_INSTALLED),
                t(!0);
        }, [t, n, e]);
    return (0, i.jsx)(s.zxk, {
        variant: "primary",
        onClick: d,
        text: c.intl.string(c.t["1WjMbC"]),
    });
};
