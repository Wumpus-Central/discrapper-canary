n.d(t, { n: () => d });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    l = n(626135),
    o = n(572004),
    s = n(215023),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { skuId: t, tab: n } = e,
        d = i.useCallback(() => {
            l.default.track(c.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t });
            let e = ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat(c.Z5c.COLLECTIBLES_SHOP)
                .concat((0, s.aK)(n) ? "?tab=".concat(n) : "", "#itemSkuId=")
                .concat(t);
            (0, o.JG)(e, () => (0, a.showToast)((0, a.createToast)(u.intl.string(u.t["L/PwZW"]), a.ToastType.SUCCESS)));
        }, [t, n]);
    return (0, r.jsx)(a.hU, {
        "aria-label": u.intl.string(u.t.WqhZsr),
        onClick: d,
        icon: a.xPt,
        variant: "overlay-secondary",
        size: "sm",
    });
}
