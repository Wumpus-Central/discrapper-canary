n.d(t, { c: () => c });
var a = n(64700),
    r = n(311907),
    i = n(688810),
    l = n(622543),
    s = n(808247),
    o = n(594832);
function c(e) {
    let { currentUser: t, skuId: n, onAddSuccess: c, onRemoveSuccess: d, onError: u } = e,
        { analyticsLocations: m } = (0, i.Ay)(),
        _ = (0, r.bG)([l.A], () => (null != t ? l.A.getFirstWishlistId(t.id) : null)),
        p = (0, o.rJ)(_, n),
        [g, h] = a.useState(null),
        [A, f] = a.useState(!1),
        v = null !== g ? g : p;
    a.useEffect(() => {
        h(null), f(!1);
    }, [n]);
    let x = a.useCallback(async () => {
        if (null != t && !A)
            if ((f(!0), v && null != _)) {
                h(!1);
                try {
                    await s.A.removeSkuFromWishlist(_, n, m), d?.();
                } catch (e) {
                    u?.(e);
                } finally {
                    h(null), f(!1);
                }
            } else {
                h(!0);
                try {
                    await s.A.addSkuToWishlist(n, m), c?.();
                } catch (e) {
                    u?.(e);
                } finally {
                    h(null), f(!1);
                }
            }
    }, [t, A, v, _, n, m, c, d, u]);
    return { isWishlisted: v, isBusy: A, handleToggle: x };
}
