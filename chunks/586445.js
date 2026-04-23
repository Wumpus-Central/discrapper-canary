n.d(t, { V: () => h });
var r = n(627968),
    i = n(64700),
    a = n(691540),
    l = n(857250),
    s = n(97483),
    c = n(408278),
    o = n(173936),
    d = n(954571),
    u = n(957565),
    _ = n(758836),
    m = n(652215),
    p = n(985018);
function h(e) {
    let { skuId: t, tab: n, onTrackClick: h } = e,
        f = i.useCallback(() => {
            d.default.track(m.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), h?.(_.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${m.BVt.COLLECTIBLES_SHOP}${((0, _.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, u.C)(e, () => (0, a.P0)((0, l.o)(p.intl.string(p.t["L/PwZf"]), s.Ck.SUCCESS)));
        }, [t, n, h]);
    return (0, r.jsx)(c.K, {
        "aria-label": p.intl.string(p.t.WqhZss),
        onClick: f,
        icon: o.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
