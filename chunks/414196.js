n.d(t, { A: () => o });
var u = n(64700),
    l = n(17928),
    r = n(665171),
    i = n(522055);
function o(e, t) {
    let { products: n, shouldFetch: o } = (0, l.cf)([i.A], () => ({
        products: i.A.getNewProducts(e),
        shouldFetch: i.A.shouldFetchNewProductsForGuild(e),
    }));
    return (
        u.useEffect(() => {
            t && o && (0, r.BX)(e);
        }, [t, e, o]),
        n
    );
}
