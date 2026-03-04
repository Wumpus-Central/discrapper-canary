n.d(t, { c: () => u });
var a = n(64700),
    s = n(311907),
    i = n(688810),
    r = n(622543),
    l = n(808247),
    o = n(594832);
function u(e) {
    let { currentUser: t, skuId: n, onAddSuccess: u, onRemoveSuccess: d, onError: c } = e,
        { analyticsLocations: _ } = (0, i.Ay)(),
        h = (0, s.bG)([r.A], () => (null != t ? r.A.getFirstWishlistId(t.id) : null)),
        m = (0, o.rJ)(h, n),
        [T, p] = a.useState(null),
        [A, O] = a.useState(!1),
        f = null !== T ? T : m;
    a.useEffect(() => {
        p(null), O(!1);
    }, [n]);
    let E = a.useCallback(async () => {
        if (null != t && !A)
            if ((O(!0), f && null != h)) {
                p(!1);
                try {
                    await l.A.removeSkuFromWishlist(h, n, _), d?.();
                } catch (e) {
                    c?.(e);
                } finally {
                    p(null), O(!1);
                }
            } else {
                p(!0);
                try {
                    await l.A.addSkuToWishlist(n, _), u?.();
                } catch (e) {
                    c?.(e);
                } finally {
                    p(null), O(!1);
                }
            }
    }, [t, A, f, h, n, _, u, d, c]);
    return { isWishlisted: f, isBusy: A, handleToggle: E };
}
