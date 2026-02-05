i.d(e, { y: () => T });
var n = i(627968),
    l = i(64700),
    s = i(732955),
    r = i(890138),
    a = i(602450),
    u = i(557571),
    o = i(652215),
    d = i(985018);
let T = (t) => {
    let { onClick: e } = t,
        i = (0, u.lV)((t) => t.setDoInstall),
        T = (0, u.lV)((t) => t.setInstallationStatus),
        A = (0, u.lV)((t) => t.installationStatus),
        S = (0, l.useCallback)(() => {
            e?.(),
                (0, r.u)(o.HAw.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !1 }),
                A === a.Lk.ERROR && T(a.Lk.NOT_INSTALLED),
                i(!0);
        }, [i, A, T, e]);
    return (0, n.jsx)(s.$nd, { variant: "primary", onClick: S, text: d.intl.string(d.t["1WjMbC"]) });
};
