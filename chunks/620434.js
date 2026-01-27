n.d(t, {
    c: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(688810),
    o = n(622543),
    s = n(808247),
    l = n(594832);

function c(e) {
    let { currentUser: t, skuId: n, onAddSuccess: c, onRemoveSuccess: u, onError: d } = e,
        { analyticsLocations: f } = (0, a.Ay)(),
        p = (0, i.bG)([o.A], () => (null != t ? o.A.getFirstWishlistId(t.id) : null)),
        _ = (0, l.rJ)(p, n),
        [h, m] = r.useState(null),
        [g, E] = r.useState(!1),
        y = null !== h ? h : _;
    r.useEffect(() => {
        m(null), E(!1);
    }, [n]);
    let b = r.useCallback(async () => {
        if (null != t && !g)
            if ((E(!0), y && null != p)) {
                m(!1);
                try {
                    await s.A.removeSkuFromWishlist(p, n, f), null == u || u();
                } catch (e) {
                    null == d || d(e);
                } finally {
                    m(null), E(!1);
                }
            } else {
                m(!0);
                try {
                    await s.A.addSkuToWishlist(n, f), null == c || c();
                } catch (e) {
                    null == d || d(e);
                } finally {
                    m(null), E(!1);
                }
            }
    }, [t, g, y, p, n, f, c, u, d]);
    return {
        isWishlisted: y,
        isBusy: g,
        handleToggle: b,
    };
}
