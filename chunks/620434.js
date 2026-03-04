"use strict";
a.d(t, { c: () => d });
var l = a(64700),
    r = a(311907),
    n = a(688810),
    s = a(622543),
    i = a(808247),
    o = a(594832);
function d(e) {
    let { currentUser: t, skuId: a, onAddSuccess: d, onRemoveSuccess: c, onError: u } = e,
        { analyticsLocations: x } = (0, n.Ay)(),
        h = (0, r.bG)([s.A], () => (null != t ? s.A.getFirstWishlistId(t.id) : null)),
        m = (0, o.rJ)(h, a),
        [b, p] = l.useState(null),
        [g, f] = l.useState(!1),
        v = null !== b ? b : m;
    l.useEffect(() => {
        p(null), f(!1);
    }, [a]);
    let j = l.useCallback(async () => {
        if (null != t && !g)
            if ((f(!0), v && null != h)) {
                p(!1);
                try {
                    await i.A.removeSkuFromWishlist(h, a, x), c?.();
                } catch (e) {
                    u?.(e);
                } finally {
                    p(null), f(!1);
                }
            } else {
                p(!0);
                try {
                    await i.A.addSkuToWishlist(a, x), d?.();
                } catch (e) {
                    u?.(e);
                } finally {
                    p(null), f(!1);
                }
            }
    }, [t, g, v, h, a, x, d, c, u]);
    return { isWishlisted: v, isBusy: g, handleToggle: j };
}
