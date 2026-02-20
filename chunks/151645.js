l.d(r, { A: () => a });
var t = l(64700),
    o = l(311907),
    i = l(602823),
    n = l(16667);
let a = (e) => {
    let [r, l, a] = (0, o.yK)([n.A], () => [n.A.getProductForSku(e), n.A.isFetching(e), n.A.getApiError(e)]),
        c = null == r && !l && null == a;
    return (
        (0, t.useEffect)(() => {
            c && (0, i.x)(e);
        }, [c, e]),
        { product: r, isFetching: l, apiError: a }
    );
};
