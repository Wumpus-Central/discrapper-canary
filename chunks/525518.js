n.d(t, { n: () => d });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(626135),
    o = n(572004),
    s = n(215023),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { skuId: t, tab: n } = e,
        d = i.useCallback(() => {
            a.default.track(c.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t });
            let e = ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat(c.Z5c.COLLECTIBLES_SHOP)
                .concat((0, s.aK)(n) ? "?tab=".concat(n) : "", "#itemSkuId=")
                .concat(t);
            (0, o.JG)(e, () => (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["L/PwZf"]), l.ToastType.SUCCESS)));
        }, [t, n]);
    return (0, r.jsx)(l.hU, {
        "aria-label": u.intl.string(u.t.WqhZss),
        onClick: d,
        icon: l.xPt,
        variant: "overlay-secondary",
        size: "sm",
    });
}
