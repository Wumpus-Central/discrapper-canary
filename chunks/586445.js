r.d(t, { V: () => A });
var n = r(627968),
    i = r(64700),
    l = r(691540),
    a = r(857250),
    s = r(97483),
    o = r(408278),
    c = r(173936),
    u = r(174459),
    d = r(957565),
    m = r(758836),
    R = r(652215),
    N = r(375708);
function A(e) {
    let { skuId: t, tab: r, onTrackClick: A } = e,
        _ = i.useCallback(() => {
            u.default.track(R.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), A?.(m.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${R.BVt.COLLECTIBLES_SHOP}${((0, m.cw))(r) ? `?tab=${r}` : ""}#itemSkuId=${t}`;
            (0, d.C)(e, () => (0, l.P0)((0, a.o)(N.intl.string(N.t["L/PwZf"]), s.Ck.SUCCESS)));
        }, [t, r, A]);
    return (0, n.jsx)(o.K, {
        "aria-label": N.intl.string(N.t.WqhZss),
        onClick: _,
        icon: c.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
