"use strict";
n.d(t, { c: () => c });
var r = n(64700),
    i = n(311907),
    s = n(688810),
    a = n(622543),
    o = n(808247),
    l = n(594832),
    u = n(240248);
function c(e) {
    let { userId: t, skuId: n, location: c, onAddSuccess: d, onRemoveSuccess: _, onError: f } = e,
        { analyticsLocations: p } = (0, s.Ay)((0, u.uJ)(c) ? [] : [c]),
        h = (0, i.bG)([a.A], () => a.A.getFirstWishlistId(t)),
        E = (0, l.rJ)(h, n),
        [m, g] = r.useState(null),
        [A, I] = r.useState(!1),
        T = null !== m ? m : E;
    r.useEffect(() => {
        g(null), I(!1);
    }, [n]);
    let S = r.useCallback(async () => {
        if (!A)
            if ((I(!0), T && null != h)) {
                g(!1);
                try {
                    await o.A.removeSkuFromWishlist(h, n, p), _?.();
                } catch (e) {
                    f?.(e);
                } finally {
                    g(null), I(!1);
                }
            } else {
                g(!0);
                try {
                    await o.A.addSkuToWishlist(n, p), d?.();
                } catch (e) {
                    f?.(e);
                } finally {
                    g(null), I(!1);
                }
            }
    }, [A, T, h, n, p, d, _, f]);
    return { isWishlisted: T, isBusy: A, handleToggle: S };
}
