"use strict";
r.d(t, { V: () => u });
var n = r(627968),
    i = r(64700),
    s = r(397927),
    a = r(954571),
    l = r(957565),
    c = r(758836),
    o = r(652215),
    d = r(985018);
function u(e) {
    let { skuId: t, tab: r } = e,
        u = i.useCallback(() => {
            a.default.track(o.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t });
            let e = `${location.protocol}//${location.host}${o.BVt.COLLECTIBLES_SHOP}${((0, c.cw))(r) ? `?tab=${r}` : ""}#itemSkuId=${t}`;
            (0, l.C)(e, () => (0, s.showToast)((0, s.createToast)(d.intl.string(d.t["L/PwZf"]), s.ToastType.SUCCESS)));
        }, [t, r]);
    return (0, n.jsx)(s.K0, {
        "aria-label": d.intl.string(d.t.WqhZss),
        onClick: u,
        icon: s.qYV,
        variant: "overlay-secondary",
        size: "sm",
    });
}
