i.d(e, { y: () => A });
var n = i(627968),
    l = i(64700),
    s = i(732955),
    r = i(890138),
    u = i(602450),
    a = i(557571),
    o = i(652215),
    T = i(985018);
let A = (t) => {
    let { onClick: e } = t,
        i = (0, a.lV)((t) => t.setDoInstall),
        A = (0, a.lV)((t) => t.setInstallationStatus),
        S = (0, a.lV)((t) => t.installationStatus),
        E = (0, l.useCallback)(() => {
            null == e || e(),
                (0, r.u)(o.HAw.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !1 }),
                S === u.Lk.ERROR && A(u.Lk.NOT_INSTALLED),
                i(!0);
        }, [i, S, A, e]);
    return (0, n.jsx)(s.$nd, {
        variant: "primary",
        onClick: E,
        text: T.intl.string(T.t["1WjMbC"]),
    });
};
