n.d(t, { V: () => u });
var r = n(627968),
    a = n(64700),
    i = n(397927),
    s = n(954571),
    l = n(957565),
    o = n(758836),
    c = n(652215),
    d = n(985018);
function u(e) {
    let { skuId: t, tab: n, onTrackClick: u } = e,
        m = a.useCallback(() => {
            s.default.track(c.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), u?.(o.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${c.BVt.COLLECTIBLES_SHOP}${((0, o.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, l.C)(e, () => (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["L/PwZf"]), i.ToastType.SUCCESS)));
        }, [t, n, u]);
    return (0, r.jsx)(i.K0, {
        "aria-label": d.intl.string(d.t.WqhZss),
        onClick: m,
        icon: i.qYV,
        variant: "overlay-secondary",
        size: "sm",
    });
}
