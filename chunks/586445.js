n.d(t, { V: () => A });
var r = n(627968),
    i = n(64700),
    l = n(691540),
    a = n(857250),
    s = n(97483),
    o = n(408278),
    c = n(173936),
    u = n(174459),
    d = n(957565),
    m = n(758836),
    R = n(652215),
    N = n(375708);
function A(e) {
    let { skuId: t, tab: n, onTrackClick: A } = e,
        h = i.useCallback(() => {
            u.default.track(R.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), A?.(m.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${R.BVt.COLLECTIBLES_SHOP}${((0, m.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, d.C)(e, () => (0, l.P0)((0, a.o)(N.intl.string(N.t["L/PwZf"]), s.Ck.SUCCESS)));
        }, [t, n, A]);
    return (0, r.jsx)(o.K, {
        "aria-label": N.intl.string(N.t.WqhZss),
        onClick: h,
        icon: c.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
