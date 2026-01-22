n.d(e, { R: () => S });
var i = n(54381),
    l = n(473749),
    s = n(159691),
    u = n(594421),
    r = n(5900),
    a = n(773275),
    o = n(981631),
    T = n(388032);
let S = (t) => {
    let { onClick: e } = t,
        n = (0, a.xf)((t) => t.setDoInstall),
        S = (0, a.xf)((t) => t.setInstallationStatus),
        c = (0, a.xf)((t) => t.installationStatus),
        E = (0, l.useCallback)(() => {
            null == e || e(),
                (0, u.j)(o.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !1 }),
                c === r._n.ERROR && S(r._n.NOT_INSTALLED),
                n(!0);
        }, [n, c, S, e]);
    return (0, i.jsx)(s.zxk, {
        variant: "primary",
        onClick: E,
        text: T.intl.string(T.t["1WjMbC"]),
    });
};
