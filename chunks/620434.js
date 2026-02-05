"use strict";
n.d(t, { c: () => u });
var r = n(64700),
    i = n(311907),
    a = n(688810),
    s = n(622543),
    o = n(808247),
    l = n(594832);
function u(e) {
    let { currentUser: t, skuId: n, onAddSuccess: u, onRemoveSuccess: c, onError: d } = e,
        { analyticsLocations: _ } = (0, a.Ay)(),
        f = (0, i.bG)([s.A], () => (null != t ? s.A.getFirstWishlistId(t.id) : null)),
        p = (0, l.rJ)(f, n),
        [h, m] = r.useState(null),
        [g, E] = r.useState(!1),
        A = null !== h ? h : p;
    r.useEffect(() => {
        m(null), E(!1);
    }, [n]);
    let I = r.useCallback(async () => {
        if (null != t && !g)
            if ((E(!0), A && null != f)) {
                m(!1);
                try {
                    await o.A.removeSkuFromWishlist(f, n, _), c?.();
                } catch (e) {
                    d?.(e);
                } finally {
                    m(null), E(!1);
                }
            } else {
                m(!0);
                try {
                    await o.A.addSkuToWishlist(n, _), u?.();
                } catch (e) {
                    d?.(e);
                } finally {
                    m(null), E(!1);
                }
            }
    }, [t, g, A, f, n, _, u, c, d]);
    return { isWishlisted: A, isBusy: g, handleToggle: I };
}
