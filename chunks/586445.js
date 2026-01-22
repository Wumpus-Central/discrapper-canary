n.d(t, {
    V: () => u,
});
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(954571),
    s = n(957565),
    c = n(758836),
    o = n(652215),
    d = n(985018);

function u(e) {
    let { skuId: t, tab: n } = e,
        u = l.useCallback(() => {
            i.default.track(o.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
                sku_id: t,
            });
            let e = ""
                .concat(location.protocol, "//")
                .concat(location.host)
                .concat(o.BVt.COLLECTIBLES_SHOP)
                .concat((0, c.cw)(n) ? "?tab=".concat(n) : "", "#itemSkuId=")
                .concat(t);
            (0, s.C)(e, () => (0, a.showToast)((0, a.createToast)(d.intl.string(d.t["L/PwZf"]), a.ToastType.SUCCESS)));
        }, [t, n]);
    return (0, r.jsx)(a.K0, {
        "aria-label": d.intl.string(d.t.WqhZss),
        onClick: u,
        icon: a.qYV,
        variant: "overlay-secondary",
        size: "sm",
    });
}
