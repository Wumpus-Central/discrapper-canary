i.d(e, { c: () => d });
var r = i(64700),
    s = i(311907),
    n = i(688810),
    l = i(622543),
    a = i(808247),
    o = i(594832),
    u = i(240248);
function d(t) {
    let { userId: e, skuId: i, location: d, onAddSuccess: c, onRemoveSuccess: p, onError: S } = t,
        { analyticsLocations: h } = (0, n.Ay)((0, u.uJ)(d) ? [] : [d]),
        I = (0, s.bG)([l.A], () => l.A.getFirstWishlistId(e)),
        _ = (0, o.rJ)(I, i),
        [f, A] = r.useState(null),
        [E, m] = r.useState(!1),
        T = null !== f ? f : _;
    r.useEffect(() => {
        A(null), m(!1);
    }, [i]);
    let y = r.useCallback(async () => {
        if (!E)
            if ((m(!0), T && null != I)) {
                A(!1);
                try {
                    await a.A.removeSkuFromWishlist(I, i, h), p?.();
                } catch (t) {
                    S?.(t);
                } finally {
                    A(null), m(!1);
                }
            } else {
                A(!0);
                try {
                    await a.A.addSkuToWishlist(i, h), c?.();
                } catch (t) {
                    S?.(t);
                } finally {
                    A(null), m(!1);
                }
            }
    }, [E, T, I, i, h, c, p, S]);
    return { isWishlisted: T, isBusy: E, handleToggle: y };
}
